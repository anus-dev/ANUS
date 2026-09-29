/**
 * The engine is pi (@earendil-works/pi-coding-agent, MIT), a dependency.
 * pi takes its name, config folder and version from the package.json in its
 * package folder, and PI_PACKAGE_DIR moves that folder. So ANUS keeps a small
 * "front" folder: our package.json (name anus, folder ~/.anus) plus links
 * to the engine's files. The engine then runs as `anus` everywhere: title,
 * help, config folder ~/.anus/agent, env ANUS_CODING_AGENT_DIR.
 */
import {
  cpSync,
  existsSync,
  lstatSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

/** The engine's package folder and version. */
export function findEngine() {
  let dir = dirname(fileURLToPath(import.meta.resolve('@earendil-works/pi-coding-agent')));
  for (;;) {
    const pkgPath = join(dir, 'package.json');
    if (existsSync(pkgPath)) {
      const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'));
      if (pkg.name === '@earendil-works/pi-coding-agent')
        return { dir, version: pkg.version, cli: join(dir, pkg.bin.pi) };
    }
    const up = dirname(dir);
    if (up === dir) throw new Error('ANUS: engine package @earendil-works/pi-coding-agent not found');
    dir = up;
  }
}

/** Build (or refresh) the front folder and return its path. */
export function prepareFront({ home, engine, version, root }) {
  const front = join(home, 'engine', `${engine.version}-${version}`);
  const pkg = {
    name: '@anus-dev/anus',
    version,
    description: 'ANUS, a free coding agent',
    piConfig: { name: 'anus', configDir: '.anus' },
    engine: { name: '@earendil-works/pi-coding-agent', version: engine.version },
  };
  const text = JSON.stringify(pkg, null, 2) + '\n';
  mkdirSync(front, { recursive: true });
  const pkgPath = join(front, 'package.json');
  if (!existsSync(pkgPath) || readFileSync(pkgPath, 'utf8') !== text) writeFileSync(pkgPath, text);
  // The engine shows "what's new" from CHANGELOG.md next to package.json: ours.
  rmSync(join(front, 'CHANGELOG.md'), { force: true }); // never write through an old link into the engine
  cpSync(join(root, 'CHANGELOG.md'), join(front, 'CHANGELOG.md'));
  for (const name of readdirSync(engine.dir)) {
    if (name === 'package.json' || name === 'node_modules' || name === 'CHANGELOG.md') continue;
    const target = join(engine.dir, name);
    const link = join(front, name);
    if (existsSync(link)) continue;
    try {
      lstatSync(link);
      rmSync(link, { force: true, recursive: true }); // a dangling link from an old engine
    } catch {}
    try {
      symlinkSync(target, link, process.platform === 'win32' ? 'junction' : undefined);
    } catch {
      cpSync(target, link, { recursive: true });
    }
  }
  return front;
}

/**
 * The "anus" color themes: the engine's dark and light themes with the colors
 * of ANUS CLI 0.1.0 (lib/look.mjs). Built from the engine's own files, so a
 * newer engine with new color keys still gets complete themes. Your message
 * sits in a box, not on a gray bar: its background is the terminal's own.
 */
const THEMES = {
  anus: {
    base: 'dark.json',
    vars: { accent: '#C8A6F1', cyan: '#A9E4FC', red: '#EF867E', yellow: '#F2A447', text: '#F2F2F7', gray: '#8E8E93', userMsgBg: '' },
    colors: { border: '#C6C6C6', mdHeading: '#F2A447', mdLink: '#EC5AF7' },
  },
  'anus-light': {
    base: 'light.json',
    vars: { accent: '#8E44C9', teal: '#1F7FA6', red: '#C0463C', yellow: '#B4661B', userMsgBg: '' },
    colors: { border: '#8E8E93', mdHeading: '#C0621B', mdLink: '#B03AC0' },
  },
};

export function prepareTheme({ agentDir, engine }) {
  const dir = join(agentDir, 'themes');
  for (const [name, spec] of Object.entries(THEMES)) {
    try {
      const base = JSON.parse(readFileSync(join(engine.dir, 'dist', 'modes', 'interactive', 'theme', spec.base), 'utf8'));
      const theme = {
        ...base,
        name,
        vars: { ...base.vars, ...spec.vars },
        colors: { ...base.colors, borderAccent: 'accent', mdListBullet: 'accent', customMessageLabel: 'accent', ...spec.colors },
      };
      delete theme.$schema;
      const path = join(dir, `${name}.json`);
      const text = JSON.stringify(theme, null, 2) + '\n';
      mkdirSync(dir, { recursive: true });
      if (!existsSync(path) || readFileSync(path, 'utf8') !== text) writeFileSync(path, text);
    } catch {
      // no theme file: the engine falls back to its own theme
    }
  }
}
