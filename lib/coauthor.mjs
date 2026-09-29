/**
 * Credit in commits: when the agent runs `git commit`, the commit gets the
 * trailer `Co-Authored-By: ANUS <noreply@anus.dev>` (as Aider and OpenCode
 * do). On by default; `"anusCoauthor": false` in
 * ~/.anus/agent/settings.json or ANUS_COAUTHOR=0 turns it off.
 * `git commit --trailer` needs git 2.32 or newer; older git is left alone.
 */
import { spawnSync } from 'node:child_process';

export const TRAILER = 'Co-Authored-By: ANUS <noreply@anus.dev>';

// `git commit`, `git -C dir commit`, `git -c k=v commit`; not `git commit-tree`.
const WORD = `(?:[^\\s'"]|'[^']*'|"[^"]*")+`; // a shell word, quotes allowed inside
const COMMIT = new RegExp(`\\bgit((?:\\s+-[Cc]\\s+${WORD})*)\\s+commit\\b(?!-)`, 'g');

/** The shell command with the trailer added to every `git commit` in it. */
export function withTrailer(command) {
  if (typeof command !== 'string' || command.includes(TRAILER)) return command;
  return command.replace(COMMIT, (m) => `${m} --trailer '${TRAILER}'`);
}

/** git 2.32+ knows `commit --trailer`. */
export function gitHasTrailer(versionText) {
  const m = /git version (\d+)\.(\d+)/.exec(versionText ?? '');
  if (!m) return false;
  const [major, minor] = [Number(m[1]), Number(m[2])];
  return major > 2 || (major === 2 && minor >= 32);
}

export function coauthorEnabled(env = process.env) {
  if (env.ANUS_COAUTHOR === '0') return false;
  const r = spawnSync('git', ['--version'], { encoding: 'utf8' });
  return r.status === 0 && gitHasTrailer(r.stdout);
}
