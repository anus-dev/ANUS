/**
 * First run and `anus setup`: free keys and default settings.
 *
 * Keys go to <agent dir>/auth.json in the engine's own format, so the
 * engine's /login and /logout see them too. Nothing leaves the machine.
 */
import { chmodSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { createInterface } from 'node:readline';
import { PROVIDERS } from './providers.mjs';

const readJson = (path) => {
  try {
    return JSON.parse(readFileSync(path, 'utf8'));
  } catch {
    return {};
  }
};

/** Providers from our list that already have a key (auth.json or, if allowed, env). */
export function keyedProviders(agentDir, env = process.env) {
  const auth = readJson(join(agentDir, 'auth.json'));
  return PROVIDERS.filter((p) => auth[p.id]?.key || auth[p.id]?.type === 'oauth' || env[p.env]);
}

// light terminal → anus-light, dark → anus: the engine picks by the terminal background
export const ANUS_THEME = 'anus-light/anus';

/** Defaults ANUS needs, written only where the person has not set their own. */
export function ensureSettings(agentDir) {
  mkdirSync(agentDir, { recursive: true });
  const path = join(agentDir, 'settings.json');
  const settings = readJson(path);
  const defaults = {
    defaultProvider: 'anus',
    defaultModel: 'free',
    defaultThinkingLevel: 'medium',
    theme: ANUS_THEME,
    quietStartup: true, // no engine resource list under the ANUS start screen
    hideThinkingBlock: true, // 0.1.0 showed answers, not the model's thinking
    enableInstallTelemetry: false,
  };
  let changed = !existsSync(path);
  // The engine writes "light" or "dark" on its first start (it asks the
  // terminal for its background). ANUS replaces that once with its own pair;
  // a theme the person picks later is kept.
  if (!settings.anusLook) {
    if (settings.theme === 'light' || settings.theme === 'dark' || settings.theme === 'anus') delete settings.theme;
    settings.anusLook = 1;
    changed = true;
  }
  for (const [k, v] of Object.entries(defaults)) {
    if (settings[k] === undefined) {
      settings[k] = v;
      changed = true;
    }
  }
  if (changed) writeFileSync(path, JSON.stringify(settings, null, 2) + '\n');
}

function saveKey(agentDir, providerId, key) {
  mkdirSync(agentDir, { recursive: true });
  const path = join(agentDir, 'auth.json');
  const auth = readJson(path);
  auth[providerId] = { type: 'api_key', key };
  writeFileSync(path, JSON.stringify(auth, null, 2) + '\n', { mode: 0o600 });
  chmodSync(path, 0o600);
  rmSync(join(agentDir, 'anus-rest.json'), { force: true }); // a new key: forget old refusals
}

/** Ask for a line without echoing it (keys should not sit in the scrollback). */
function askHidden(question) {
  return new Promise((resolve) => {
    const rl = createInterface({ input: process.stdin, output: process.stdout, terminal: true });
    rl._writeToOutput = (s) => {
      if (s.startsWith(question)) rl.output.write(question);
      else if (s.includes('\n') || s.includes('\r')) rl.output.write('\n');
      else rl.output.write('*'.repeat(s.length));
    };
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

const bold = (s) => (process.stdout.isTTY ? `\x1b[1m${s}\x1b[22m` : s);
const dim = (s) => (process.stdout.isTTY ? `\x1b[2m${s}\x1b[22m` : s);

export async function runSetup(agentDir) {
  const have = new Set(keyedProviders(agentDir).map((p) => p.id));
  console.log(
    [
      '',
      bold('ANUS runs on free models.') + ' It needs at least one free key. Keys stay on this machine.',
      'Each service below gives a free key in a minute. More keys = more free requests a day.',
      '',
      ...PROVIDERS.map((p, i) => `  ${i + 1}. ${bold(p.name.padEnd(14))} ${p.keyUrl}\n     ${dim(p.note)}${have.has(p.id) ? '  (key saved)' : ''}`),
      '',
      'Start with OpenRouter: one key opens about fifteen free models.',
      'Paste a key and press Enter. Enter on an empty line skips.',
      '',
    ].join('\n'),
  );
  for (const p of PROVIDERS) {
    const key = await askHidden(`${p.name} key${have.has(p.id) ? ' (Enter keeps the saved one)' : ''}: `);
    if (!key) continue;
    saveKey(agentDir, p.id, key);
    have.add(p.id);
  }
  ensureSettings(agentDir);
  if (!have.size) {
    console.log('\nNo keys yet. Run `anus setup` when you have one.');
    return false;
  }
  console.log(`\nSaved. ANUS will use: ${PROVIDERS.filter((p) => have.has(p.id)).map((p) => p.name).join(', ')}.`);
  console.log('Run `anus` in a project folder to start. Inside, /free shows which free models are awake.\n');
  return true;
}
