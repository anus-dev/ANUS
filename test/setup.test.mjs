import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';
import { ANUS_THEME, ensureSettings } from '../lib/setup.mjs';

const settingsAfter = (before) => {
  const dir = mkdtempSync(join(tmpdir(), 'anus-settings-'));
  if (before) writeFileSync(join(dir, 'settings.json'), JSON.stringify(before));
  ensureSettings(dir);
  return { dir, read: () => JSON.parse(readFileSync(join(dir, 'settings.json'), 'utf8')) };
};

test('a fresh install gets the ANUS themes (light and dark by the terminal)', () => {
  assert.equal(settingsAfter(null).read().theme, ANUS_THEME);
});

test('the "light" the engine wrote on its first start is replaced once', () => {
  // the case behind the white bars under messages in a dark Ghostty (29.09)
  const { dir, read } = settingsAfter({ theme: 'light', defaultModel: 'free' });
  assert.equal(read().theme, ANUS_THEME);
  assert.equal(read().anusLook, 1);
  // the person switches to light later: ANUS keeps it
  writeFileSync(join(dir, 'settings.json'), JSON.stringify({ ...read(), theme: 'light' }));
  ensureSettings(dir);
  assert.equal(read().theme, 'light');
});

test('a theme the person picked is kept', () => {
  assert.equal(settingsAfter({ theme: 'monokai' }).read().theme, 'monokai');
});
