/**
 * One-time authorization of the agent's X account for this app (OAuth 2.0, PKCE).
 *
 * Run it on the overseer's machine:
 *   ANUS_ENV_FILE=/path/to/keys.env node agent/x/authorize.mjs
 *
 * It reads X_CLIENT_ID and X_CLIENT_SECRET from that file, prints an authorization
 * link, waits for X to redirect back to http://localhost:8123/callback, exchanges
 * the code for tokens, checks that they belong to the account named in agent/config.json (anything else is
 * revoked on the spot), and writes X_OAUTH2_ACCESS_TOKEN and X_OAUTH2_REFRESH_TOKEN
 * back into the same file. The file lives outside this repository; no secret is
 * ever printed.
 */
import { createServer } from 'node:http';
import { randomBytes, createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';
import { config } from '../config.mjs';

const ENV_FILE = process.env.ANUS_ENV_FILE;
if (!ENV_FILE) {
  console.error('Set ANUS_ENV_FILE to the path of the keys file.');
  process.exit(1);
}

const REDIRECT_URI = 'http://localhost:8123/callback';
const SCOPES = ['tweet.read', 'tweet.write', 'users.read', 'offline.access'];

function readEnv(path) {
  const env = {};
  for (const line of readFileSync(path, 'utf8').split('\n')) {
    const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (m) env[m[1]] = m[2];
  }
  return env;
}

function writeVars(path, vars) {
  let text = readFileSync(path, 'utf8');
  for (const [key, value] of Object.entries(vars)) {
    const line = `${key}=${value}`;
    const re = new RegExp(`^${key}=.*$`, 'm');
    text = re.test(text)
      ? text.replace(re, line)
      : `${text.trimEnd()}\n${line}\n`;
  }
  writeFileSync(path, text, { mode: 0o600 });
}

const env = readEnv(ENV_FILE);
if (!env.X_CLIENT_ID || !env.X_CLIENT_SECRET) {
  console.error('X_CLIENT_ID or X_CLIENT_SECRET is empty in the keys file.');
  process.exit(1);
}

const verifier = randomBytes(32).toString('base64url');
const challenge = createHash('sha256').update(verifier).digest('base64url');
const state = randomBytes(16).toString('hex');

const url = new URL('https://x.com/i/oauth2/authorize');
url.search = new URLSearchParams({
  response_type: 'code',
  client_id: env.X_CLIENT_ID,
  redirect_uri: REDIRECT_URI,
  scope: SCOPES.join(' '),
  state,
  code_challenge: challenge,
  code_challenge_method: 'S256',
}).toString();

const server = createServer(async (req, res) => {
  const reqUrl = new URL(req.url, REDIRECT_URI);
  if (reqUrl.pathname !== '/callback') {
    res.writeHead(404).end();
    return;
  }
  const code = reqUrl.searchParams.get('code');
  if (reqUrl.searchParams.get('state') !== state || !code) {
    res.writeHead(400).end('Authorization failed: state mismatch or no code.');
    console.error('Authorization failed: state mismatch or no code.');
    server.close();
    process.exitCode = 1;
    return;
  }
  const basic = Buffer.from(
    `${env.X_CLIENT_ID}:${env.X_CLIENT_SECRET}`,
  ).toString('base64');
  const tokenRes = await fetch('https://api.x.com/2/oauth2/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: REDIRECT_URI,
      code_verifier: verifier,
    }),
  });
  const body = await tokenRes.json().catch(() => ({}));
  if (!tokenRes.ok || !body.access_token) {
    res.writeHead(500).end('Token exchange failed. See the terminal.');
    console.error(
      `Token exchange failed: HTTP ${tokenRes.status} ${body.error ?? ''} ${body.error_description ?? ''}`,
    );
    server.close();
    process.exitCode = 1;
    return;
  }
  const meRes = await fetch('https://api.x.com/2/users/me', {
    headers: { Authorization: `Bearer ${body.access_token}` },
  });
  const me = await meRes.json().catch(() => ({}));
  const username = me?.data?.username ?? '';
  const expected = (config.x.username ?? '').toLowerCase();
  if (!expected || username.toLowerCase() !== expected) {
    for (const [token, hint] of [
      [body.access_token, 'access_token'],
      [body.refresh_token, 'refresh_token'],
    ]) {
      if (!token) continue;
      await fetch('https://api.x.com/2/oauth2/revoke', {
        method: 'POST',
        headers: {
          Authorization: `Basic ${basic}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ token, token_type_hint: hint }),
      });
    }
    const msg = `Wrong account: authorized as @${username || 'unknown'}, expected @${expected || '(x.username is empty in agent/config.json)'}. Tokens revoked, nothing saved.`;
    res.writeHead(403, { 'Content-Type': 'text/plain' }).end(msg);
    console.error(msg);
    server.close();
    process.exitCode = 1;
    return;
  }
  writeVars(ENV_FILE, {
    X_OAUTH2_ACCESS_TOKEN: body.access_token,
    X_OAUTH2_REFRESH_TOKEN: body.refresh_token ?? '',
  });
  res
    .writeHead(200, { 'Content-Type': 'text/plain' })
    .end('Done. You can close this tab.');
  console.log(
    `Authorized as @${username}. Scopes: ${body.scope}. Tokens written to the keys file.`,
  );
  server.close();
});

server.listen(8123, () => {
  console.log('Open this link in a browser logged in as the agent account:');
  console.log(url.toString());
});
