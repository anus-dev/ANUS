import assert from 'node:assert/strict';
import { test } from 'node:test';
import {
  boxLines,
  boxUserMessage,
  fit,
  footerLine,
  gradientAt,
  headerLines,
  LOGO,
  PALETTE,
  PHRASES,
  starAnswer,
  visibleWidth,
  workingLine,
} from '../lib/look.mjs';

// The engine crashes on any line wider than the terminal (the 0.2.1 crash in
// an 80-column window). Every piece of the screen must fit every width.
test('no line is ever wider than the terminal', () => {
  for (let width = 1; width <= 200; width++) {
    const lines = [
      ...headerLines(width),
      workingLine('Getting hot and heavy... with the CPU...', 3725, width),
      footerLine({ cwd: '/Users/someone/code/a-very/long/project/path', model: 'openrouter/nvidia/nemotron-3-ultra-550b-a55b:free', contextLeft: 97 }, width),
    ];
    if (width >= 12) lines.push(...boxLines(['x'.repeat(width - 6)], width));
    for (const line of lines) assert.ok(visibleWidth(line) <= width, `width ${width}: ${JSON.stringify(line)}`);
  }
});

test('the start screen keeps the 0.1.0 text', () => {
  const text = headerLines(120).join('\n').replace(/\x1b\[[0-9;]*m/g, '');
  for (const line of LOGO) assert.ok(text.includes(line));
  assert.match(text, /Welcome to ANUS - Autonomous Networked Utility System/);
  assert.match(text, /Born from AI, built by AI/);
  assert.match(text, /3\. \/help for more information\./);
});

test('narrow terminal: a one-word logo instead of the block logo', () => {
  const text = headerLines(30).join('\n').replace(/\x1b\[[0-9;]*m/g, '');
  assert.ok(!text.includes('███'));
  assert.match(text, /ANUS/);
});

test('gradient runs from the first color to the last', () => {
  assert.equal(gradientAt(0).toUpperCase(), PALETTE.gradient[0]);
  assert.equal(gradientAt(1).toUpperCase(), PALETTE.gradient.at(-1));
});

test('fit cuts text but keeps it readable', () => {
  assert.equal(visibleWidth(fit('\x1b[1mhello world\x1b[22m', 5)), 5);
  assert.equal(fit('short', 10), 'short');
});

test('phrases: the 0.1.0 list, "Generating thrust..." included', () => {
  assert.ok(PHRASES.length > 100);
  assert.ok(PHRASES.includes('Generating thrust...'));
});

test('working line: seconds, then minutes', () => {
  const strip = (s) => s.replace(/\x1b\[[0-9;]*m/g, '');
  assert.equal(strip(workingLine('Generating thrust...', 3, 80)), '✦ Generating thrust... (esc to cancel, 3s)');
  assert.match(strip(workingLine('x', 75, 80)), /1m 15s/);
});

test('answers start with ✦, unless they open with a heading, list or code', () => {
  const strip = (x) => x.replace(/\x1b\[[0-9;]*m/g, '');
  assert.equal(strip(starAnswer('This is not a joke.')), '✦ This is not a joke.');
  assert.equal(starAnswer('# Plan\n1. a'), '# Plan\n1. a');
  assert.equal(starAnswer('```js\nx\n```'), '```js\nx\n```');
  assert.equal(starAnswer('- one'), '- one');
  assert.equal(starAnswer(''), '');
});

test('your message: a box with "> " when it fits, a plain "> " otherwise', () => {
  const strip = (x) => x.replace(/\x1b\[[0-9;]*m/g, '');
  const box = strip(boxUserMessage('is this a joke?', 80)).split('  \n');
  assert.equal(box.length, 3);
  assert.match(box[1], /^│ > is this a joke\? +│$/);
  assert.equal([...box[0]].length, [...box[1]].length);
  assert.equal(strip(boxUserMessage('line one\nline two', 80)), '> line one\nline two');
  assert.equal(strip(boxUserMessage('use `npm`', 80)), '> use `npm`');
  assert.equal(strip(boxUserMessage('x'.repeat(100), 80)), '> ' + 'x'.repeat(100));
});

test('footer: drops "(see /help)" and shortens the model before it drops the model', () => {
  const strip = (x) => x.replace(/\x1b\[[0-9;]*m/g, '');
  const home = process.env.HOME;
  const f = (w) => strip(footerLine({ cwd: `${home}/anus-dev/anus`, model: 'openrouter/cohere/north-mini-code:free', contextLeft: 97 }, w));
  assert.match(f(120), /\(see \/help\) +openrouter\/cohere\/north-mini-code:free \(97% context left\)$/);
  assert.match(f(90), /no sandbox +openrouter\/cohere\/north-mini-code:free \(97% context left\)$/);
  assert.match(f(66), /no sandbox +north-mini-code \(97% context left\)$/);
  assert.match(f(46), /no sandbox +north-mini-code$/);
  assert.equal(f(20).length, 20);
});
