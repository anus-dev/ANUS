/**
 * Repository hygiene gate.
 *
 * Every tracked text file is checked for three things:
 *   - English only: no non-Latin script (this is an international project);
 *   - no secret-looking strings: long hex or base58 runs are usually keys or
 *     tokens that should never be committed;
 *   - the method this repository runs on is always named with its link.
 *
 * A machine-local word list can add project-specific rules through the
 * ANUS_DENYLIST variable (one entry per line, case-insensitive). That list
 * lives outside the repository.
 */
import { execSync } from 'node:child_process';
import { readFileSync, existsSync } from 'node:fs';

const BINARY =
  /\.(png|jpg|jpeg|gif|webp|ico|icns|woff2?|ttf|otf|pdf|zip|gz|mp4|mov)$/i;
const NON_LATIN =
  /[\p{Script=Cyrillic}\p{Script=Han}\p{Script=Arabic}\p{Script=Hebrew}]/u;
const SECRET_LIKE =
  /\b(0x[0-9a-fA-F]{40}|(?=[1-9A-HJ-NP-Za-km-z]*\d[1-9A-HJ-NP-Za-km-z]*\d)[1-9A-HJ-NP-Za-km-z]{32,44})\b/;
const ALLOW_SECRET_LIKE_FILES = /^(package-lock\.json|.*\.lock|.*\.snap)$/;
const METHOD = 'Spec-Driven Company';
const METHOD_LINK = 'github.com/eugeneshilow/spec-driven-company';

// Prose and rules only: the inherited 2025 code base carries Unicode test fixtures
// and long identifiers that are not what this gate is about.
const IN_SCOPE =
  /^(docs\/|scripts\/|agent\/|\.github\/|[^/]+\.md$|package\.json$)/;
const files = execSync('git ls-files -z', { encoding: 'utf8' })
  .split('\0')
  .filter((f) => f && IN_SCOPE.test(f) && f !== 'scripts/check-public.mjs');
const findings = [];

const denylistPath = process.env.ANUS_DENYLIST;
const denylist =
  denylistPath && existsSync(denylistPath)
    ? readFileSync(denylistPath, 'utf8')
        .split('\n')
        .map((w) => w.trim())
        .filter((w) => w && !w.startsWith('#'))
        .map((w) => w.toLowerCase())
    : [];

for (const file of files) {
  if (BINARY.test(file)) continue;
  let text;
  try {
    text = readFileSync(file, 'utf8');
  } catch {
    continue;
  }
  if (text.includes('\u0000')) continue;
  text.split('\n').forEach((line, i) => {
    const where = `${file}:${i + 1}`;
    if (NON_LATIN.test(line))
      findings.push(
        `${where}: non-Latin script (the repository is English only)`,
      );
    if (
      !ALLOW_SECRET_LIKE_FILES.test(file) &&
      SECRET_LIKE.test(line) &&
      !/sha|hash|integrity|commit/i.test(line)
    ) {
      findings.push(`${where}: secret-looking string`);
    }
    if (
      file.endsWith('.md') &&
      line.includes(METHOD) &&
      !line.includes(METHOD_LINK)
    )
      findings.push(`${where}: the method is named without its link`);
    const lower = line.toLowerCase();
    denylist.forEach((word, n) => {
      if (lower.includes(word))
        findings.push(`${where}: local list, entry #${n + 1}`);
    });
  });
}

if (findings.length) {
  console.error(
    'check:public failed:\n' + findings.map((f) => '  ' + f).join('\n'),
  );
  process.exit(1);
}
console.log(
  `check:public ok (${files.length} tracked files${denylist.length ? `, local list of ${denylist.length}` : ''})`,
);
