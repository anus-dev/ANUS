/**
 * The look of ANUS CLI 0.1.0 (github.com/anus-dev/anus, docs/assets/anus-screenshot.png):
 * the block logo in a warm gradient, the welcome line, the tips, the rounded
 * input box, the "✦ Generating thrust... (esc to cancel, 3s)" line and the
 * footer. Colors are sampled from that screenshot. Pure functions: every line
 * is cut to the terminal width here, because the engine crashes on a line
 * wider than the terminal (test/look.test.mjs checks every width).
 */
import { readFileSync } from 'node:fs';

export const PALETTE = {
  gradient: ['#F2A447', '#EE8541', '#EE857E', '#EB5A81', '#EB5BD3', '#EC5AF7'],
  purple: '#C8A6F1',
  text: null, // the terminal's own text color: readable on dark and light
  gray: '#C6C6C6',
  dim: '#8E8E93',
  cyan: '#A9E4FC',
  salmon: '#EF867E',
};

// The same look on a light terminal: darker shades of the same colors.
const LIGHT = { purple: '#8E44C9', gray: '#6C6C6C', dim: '#767676', cyan: '#1F7FA6', salmon: '#C0463C' };
const DARK = { purple: PALETTE.purple, gray: PALETTE.gray, dim: PALETTE.dim, cyan: PALETTE.cyan, salmon: PALETTE.salmon };

/** Switch the palette when the engine picked the light theme. */
export function useLightPalette(light) {
  Object.assign(PALETTE, light ? LIGHT : DARK);
}

// longAsciiLogo of ANUS CLI 0.1.0 (packages/cli/src/ui/components/AsciiArt.ts)
export const LOGO = [
  ' █████╗ ███╗   ██╗██╗   ██╗███████╗',
  '██╔══██╗████╗  ██║██║   ██║██╔════╝',
  '███████║██╔██╗ ██║██║   ██║███████╗',
  '██╔══██║██║╚██╗██║██║   ██║╚════██║',
  '██║  ██║██║ ╚████║╚██████╔╝███████║',
  '╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚══════╝',
];

export const PHRASES = JSON.parse(readFileSync(new URL('./phrases.json', import.meta.url), 'utf8')).phrases;

const truecolor = /truecolor|24bit/i.test(process.env.COLORTERM ?? '');

const rgb = (hex) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));

/** Nearest color of the 256-color palette (for terminals without 24-bit color). */
function to256([r, g, b]) {
  const level = (v) => (v < 48 ? 0 : v < 115 ? 1 : Math.floor((v - 35) / 40));
  const cube = 16 + 36 * level(r) + 6 * level(g) + level(b);
  const gray = Math.round(((r + g + b) / 3 - 8) / 10);
  const grayIndex = 232 + Math.max(0, Math.min(23, gray));
  const cubeRgb = [level(r), level(g), level(b)].map((l) => (l ? 55 + l * 40 : 0));
  const grayRgb = 8 + (grayIndex - 232) * 10;
  const dist = (a) => a.reduce((s, v, i) => s + (v - [r, g, b][i]) ** 2, 0);
  return dist(cubeRgb) <= dist([grayRgb, grayRgb, grayRgb]) ? cube : grayIndex;
}

export function fg(hex, text) {
  if (!hex) return text;
  const c = rgb(hex);
  const open = truecolor ? `\x1b[38;2;${c[0]};${c[1]};${c[2]}m` : `\x1b[38;5;${to256(c)}m`;
  return `${open}${text}\x1b[39m`;
}
export const bold = (text) => `\x1b[1m${text}\x1b[22m`;
export const italic = (text) => `\x1b[3m${text}\x1b[23m`;

/** Color at position t (0..1) along the gradient. */
export function gradientAt(t, stops = PALETTE.gradient) {
  const x = Math.max(0, Math.min(1, t)) * (stops.length - 1);
  const i = Math.min(stops.length - 2, Math.floor(x));
  const a = rgb(stops[i]);
  const b = rgb(stops[i + 1]);
  const f = x - i;
  return `#${a.map((v, k) => Math.round(v + (b[k] - v) * f).toString(16).padStart(2, '0')).join('')}`;
}

/** A line painted left to right in the logo gradient, one color per column. */
export function paintGradient(line, width = line.length) {
  return [...line].map((ch, i) => (ch === ' ' ? ch : fg(gradientAt(i / Math.max(1, width - 1)), ch))).join('');
}

const ANSI = /\x1b\[[0-9;]*m/g;

export const visibleWidth = (s) => [...s.replace(ANSI, '')].length;

/** Cut a colored line to `width` visible characters, keeping its color codes. */
export function fit(line, width) {
  if (visibleWidth(line) <= width) return line;
  let out = '';
  let seen = 0;
  for (const part of line.split(/(\x1b\[[0-9;]*m)/)) {
    if (part.startsWith('\x1b[')) {
      out += part;
      continue;
    }
    for (const ch of part) {
      if (seen >= width) break;
      out += ch;
      seen += 1;
    }
  }
  return `${out}\x1b[0m`;
}

/** The start screen: logo, welcome, tagline, tips. */
export function headerLines(width) {
  const logoWidth = Math.max(...LOGO.map((l) => [...l].length));
  const logo =
    width >= logoWidth ? LOGO.map((l) => paintGradient(l, logoWidth)) : [bold(paintGradient('ANUS', 4))];
  const p = PALETTE;
  return [
    '',
    ...logo,
    '',
    bold(fg(p.purple, 'Welcome to ANUS - Autonomous Networked Utility System')),
    '',
    italic(fg(p.gray, 'Powered by the smartest free models • Born from AI, built by AI')),
    '',
    fg(p.text, 'Tips for getting started:'),
    fg(p.text, '1. Ask questions, edit files, or run commands.'),
    fg(p.text, '2. Be specific for the best results.'),
    `${fg(p.text, '3. ')}${bold(fg(p.purple, '/help'))}${fg(p.text, ' for more information.')}`,
    '',
  ].map((line) => fit(line, Math.max(1, width)));
}

/** "✦ Generating thrust... (esc to cancel, 3s)" */
export function workingLine(phrase, seconds, width) {
  const time = seconds < 60 ? `${seconds}s` : `${Math.floor(seconds / 60)}m ${seconds % 60}s`;
  const line = `${fg(PALETTE.purple, '✦')} ${fg(PALETTE.cyan, phrase)} ${fg(PALETTE.dim, `(esc to cancel, ${time})`)}`;
  return fit(line, Math.max(1, width));
}

/**
 * "✦ " before an answer, like 0.1.0. Only before a plain first paragraph:
 * a heading, list, quote, table or code block keeps its own first line.
 */
export function starAnswer(markdown) {
  const text = String(markdown ?? '');
  if (!text.trim() || /^\s*(#|```|~~~|[-*+] |\d+[.)] |>|\|)/.test(text)) return text;
  return `${fg(PALETTE.purple, '✦')} ${text.replace(/^\s+/, '')}`;
}

/**
 * Your message in the transcript: "> is this a joke?" in a rounded box, like
 * the 0.1.0 screenshot. Markdown line breaks keep the box lines apart. A long,
 * multi-line or markdown-marked message keeps just the "> ".
 */
export function boxUserMessage(markdown, width) {
  const text = String(markdown ?? '').trim();
  const border = (s) => fg(PALETTE.gray, s);
  const inner = [...text].length + 2; // "> " + text
  if (!text || text.includes('\n') || /[*_`[\]<>#|~\\]/.test(text) || inner + 4 > width)
    return `${border('>')} ${text}`;
  const w = Math.max(20, inner);
  return [
    border(`╭${'─'.repeat(w + 2)}╮`),
    `${border('│')} ${border('>')} ${fg(PALETTE.gray, text)}${' '.repeat(w - inner)} ${border('│')}`,
    border(`╰${'─'.repeat(w + 2)}╯`),
  ].join('  \n');
}

/** Rounded box around the input, "> " on the first line, like 0.1.0. */
export function boxLines(inner, width) {
  const border = (s) => fg(PALETTE.gray, s);
  const w = Math.max(6, width);
  return [
    border(`╭${'─'.repeat(w - 2)}╮`),
    ...inner.map((line, i) => `${border('│')} ${fg(PALETTE.gray, i === 0 ? '>' : ' ')} ${line} ${border('│')}`),
    border(`╰${'─'.repeat(w - 2)}╯`),
  ];
}

/**
 * Footer: "~/path  no sandbox (see /help)     model (97% context left)".
 * Short on room, it drops "(see /help)" first, then shortens the model name,
 * and keeps the left part only as the last resort.
 */
export function footerLine({ cwd, model, contextLeft }, width) {
  const home = process.env.HOME;
  const path = home && cwd.startsWith(home) ? `~${cwd.slice(home.length)}` : cwd;
  const ctx = contextLeft != null ? ` (${contextLeft}% context left)` : '';
  const short = String(model).split('/').pop().replace(/:free$/, '');
  const tries = [
    [`${fg(PALETTE.gray, path)}  ${fg(PALETTE.salmon, 'no sandbox')} ${fg(PALETTE.dim, '(see /help)')}`, `${model}${ctx}`],
    [`${fg(PALETTE.gray, path)}  ${fg(PALETTE.salmon, 'no sandbox')}`, `${model}${ctx}`],
    [`${fg(PALETTE.gray, path)}  ${fg(PALETTE.salmon, 'no sandbox')}`, `${short}${ctx}`],
    [`${fg(PALETTE.gray, path)}  ${fg(PALETTE.salmon, 'no sandbox')}`, short],
  ];
  for (const [left, r] of tries) {
    const right = fg(PALETTE.gray, r);
    const gap = width - visibleWidth(left) - visibleWidth(right);
    if (gap >= 3) return `${left}${' '.repeat(gap)}${right}`;
  }
  return fit(tries[0][0], Math.max(1, width));
}
