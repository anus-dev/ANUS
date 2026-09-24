/**
 * Minimal X API client for the agent: reads keys from the file named by
 * ANUS_ENV_FILE, refreshes the OAuth 2.0 token when it expires, and makes every
 * paid call through the daily budget guard.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { Budget, DEFAULT_DAILY_CAP_USD } from './budget.mjs';
import { config } from '../config.mjs';

const API = 'https://api.x.com';

export function readEnv(path) {
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
    const re = new RegExp(`^${key}=.*$`, 'm');
    const line = `${key}=${value}`;
    text = re.test(text)
      ? text.replace(re, line)
      : `${text.trimEnd()}\n${line}\n`;
  }
  writeFileSync(path, text, { mode: 0o600 });
}

export class XClient {
  constructor({ envFile = process.env.ANUS_ENV_FILE, stateDir } = {}) {
    if (!envFile)
      throw new Error('Set ANUS_ENV_FILE to the path of the keys file.');
    this.envFile = envFile;
    this.env = readEnv(envFile);
    const dir =
      stateDir ??
      process.env.ANUS_STATE_DIR ??
      join(homedir(), '.local/state/anus');
    const cap = Number(
      this.env.ANUS_X_DAILY_CAP_USD ||
        process.env.ANUS_X_DAILY_CAP_USD ||
        DEFAULT_DAILY_CAP_USD,
    );
    this.budget = new Budget({
      ledgerPath: join(dir, 'x-budget.json'),
      capUsd: cap,
    });
  }

  async refresh() {
    const basic = Buffer.from(
      `${this.env.X_CLIENT_ID}:${this.env.X_CLIENT_SECRET}`,
    ).toString('base64');
    const res = await fetch(`${API}/2/oauth2/token`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: this.env.X_OAUTH2_REFRESH_TOKEN,
      }),
    });
    const body = await res.json().catch(() => ({}));
    if (!res.ok || !body.access_token)
      throw new Error(
        `Token refresh failed: HTTP ${res.status} ${body.error ?? ''}`,
      );
    this.env.X_OAUTH2_ACCESS_TOKEN = body.access_token;
    if (body.refresh_token)
      this.env.X_OAUTH2_REFRESH_TOKEN = body.refresh_token;
    writeVars(this.envFile, {
      X_OAUTH2_ACCESS_TOKEN: this.env.X_OAUTH2_ACCESS_TOKEN,
      X_OAUTH2_REFRESH_TOKEN: this.env.X_OAUTH2_REFRESH_TOKEN,
    });
  }

  async call(method, path, { body, costUsd, what }) {
    if (!this.budget.canSpend(costUsd)) {
      const err = new Error(
        `Daily X budget reached: $${this.budget.spentToday()} of $${this.budget.capUsd} spent today (${config.x.budgetTimeZone}). "${what}" not sent.`,
      );
      err.code = 'BUDGET';
      throw err;
    }
    const send = () =>
      fetch(`${API}${path}`, {
        method,
        headers: {
          Authorization: `Bearer ${this.env.X_OAUTH2_ACCESS_TOKEN}`,
          ...(body ? { 'Content-Type': 'application/json' } : {}),
        },
        body: body ? JSON.stringify(body) : undefined,
      });
    let res = await send();
    if (res.status === 401) {
      await this.refresh();
      res = await send();
    }
    const json = await res.json().catch(() => ({}));
    if (!res.ok) {
      const err = new Error(
        `X API ${method} ${path}: HTTP ${res.status} ${json.title ?? ''} ${json.detail ?? ''}`.trim(),
      );
      err.status = res.status;
      throw err;
    }
    this.budget.record(costUsd, what);
    return json;
  }
}
