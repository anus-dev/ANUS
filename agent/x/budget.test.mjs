import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { Budget, budgetDay } from './budget.mjs';
import { postCost, PRICES } from './prices.mjs';

const ledger = () =>
  join(mkdtempSync(join(tmpdir(), 'anus-budget-')), 'x-budget.json');

test('refuses a call that would exceed the daily cap', () => {
  const b = new Budget({ ledgerPath: ledger(), capUsd: 1 });
  for (let i = 0; i < 66; i++) b.record(0.015, 'post');
  assert.equal(b.spentToday(), 0.99);
  assert.equal(b.canSpend(0.015), false);
  assert.equal(b.canSpend(0.01), true);
});

test('a new New York day starts from zero', () => {
  let now = new Date('2026-09-25T03:59:00Z'); // 23:59 in New York (EDT, UTC-4)
  const b = new Budget({ ledgerPath: ledger(), capUsd: 1, now: () => now });
  b.record(1, 'big read');
  assert.equal(b.canSpend(0.015), false);
  now = new Date('2026-09-25T04:00:00Z'); // 00:00 next day in New York
  assert.equal(budgetDay(now), '2026-09-25');
  assert.equal(b.canSpend(0.015), true);
});

test('a post with a link costs the link price, bare domains included', () => {
  assert.equal(postCost('hello world'), PRICES.postCreate);
  assert.equal(postCost('see https://example.org'), PRICES.postCreateWithUrl);
  assert.equal(
    postCost('code lives at github.com/anus-dev/anus'),
    PRICES.postCreateWithUrl,
  );
});
