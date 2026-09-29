/**
 * `anus`: set the stage, then hand the terminal to the engine.
 *
 *   anus                 start in the current folder (first run asks for free keys)
 *   anus setup           add or change free keys
 *   anus update          update ANUS itself
 *   anus --version       the version, without touching the disk
 *   anus <anything else> the engine's own flags and commands (anus --help)
 */
import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { homedir, tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { findEngine, prepareFront, prepareTheme } from './engine.mjs';
import { PROVIDERS } from './providers.mjs';
import { ensureSettings, keyedProviders, readSettings, runSetup } from './setup.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const VERSION = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8')).version;

// Engine commands that manage packages and credentials: no router needed.
const ENGINE_COMMANDS = new Set(['install', 'remove', 'uninstall', 'list', 'config', 'auth']);
const ONE_SHOT = new Set(['-p', '--print', '--mode', '--export']);
const INFO = new Set(['-h', '--help', '-v', '--version', '--list-models']);
const CLOSED = new Set(['EACCES', 'EPERM', 'EROFS']); // a folder we may not write to

export async function main(argv) {
  const home = process.env.ANUS_HOME ?? join(homedir(), '.anus');
  const agentDir = process.env.ANUS_CODING_AGENT_DIR ?? join(home, 'agent');
  process.env.ANUS_CODING_AGENT_DIR = agentDir;
  process.env.ANUS_ROOT = ROOT;
  // ANUS uses only the keys given to it in `anus setup`: a paid key that
  // happens to sit in the shell must not be spent by a "free" agent.
  if (process.env.ANUS_ENV_KEYS !== '1') for (const p of PROVIDERS) delete process.env[p.env];

  if (argv[0] === 'setup') {
    process.exitCode = (await runSetup(agentDir)) ? 0 : 1;
    return;
  }
  if (argv[0] === 'update') {
    const res = spawnSync('npm', ['install', '-g', '@anus-dev/anus@latest'], { stdio: 'inherit', shell: process.platform === 'win32' });
    process.exitCode = res.status ?? 1;
    return;
  }

  // The version needs no disk and no engine (issue #93: a closed home folder
  // used to crash `anus --version`).
  if (argv[0] === '-v' || argv[0] === '--version') {
    console.log(VERSION);
    return;
  }
  const command = ENGINE_COMMANDS.has(argv[0]);
  const info = argv.some((a) => INFO.has(a));
  try {
    ensureSettings(agentDir);
  } catch (err) {
    if (!info) throw err;
  }
  if (readSettings(agentDir).anusCoauthor === false) process.env.ANUS_COAUTHOR = '0';
  const interactive = process.stdin.isTTY && process.stdout.isTTY && !argv.some((a) => ONE_SHOT.has(a));
  if (!command && !info && !keyedProviders(agentDir).length) {
    if (!interactive) {
      console.error('ANUS has no free keys yet. Run `anus setup` first.');
      process.exitCode = 1;
      return;
    }
    if (!(await runSetup(agentDir))) {
      process.exitCode = 1;
      return;
    }
  }

  const engine = findEngine();
  // A home folder closed for writing (a sandbox, a read-only mount) must not
  // stop ANUS: themes are skipped, the front folder moves to the system temp.
  try {
    prepareTheme({ agentDir, engine });
  } catch (err) {
    if (!CLOSED.has(err.code)) throw err;
  }
  try {
    process.env.PI_PACKAGE_DIR = prepareFront({ home, engine, version: VERSION, root: ROOT });
  } catch (err) {
    if (!CLOSED.has(err.code)) throw err;
    const spare = join(tmpdir(), `anus-${process.getuid?.() ?? 'user'}`);
    process.env.PI_PACKAGE_DIR = prepareFront({ home: spare, engine, version: VERSION, root: ROOT });
  }
  process.env.PI_SKIP_VERSION_CHECK = '1'; // the engine would compare its own releases with ANUS's version
  const args = command ? argv : ['-e', join(ROOT, 'extension', 'anus.mjs'), ...argv];
  process.argv = [process.argv[0], engine.cli, ...args];
  await import(pathToFileURL(engine.cli).href);
}
