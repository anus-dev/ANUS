import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { PROVIDER_IDS } from '../lib/providers.mjs';
import {
  estimateTokens,
  keyOf,
  midStreamError,
  orderModels,
  plan,
  restFor,
  untilUtcMidnight,
} from '../lib/route.mjs';

const NOW = Date.UTC(2026, 8, 29, 10, 0, 0);
const A = { provider: 'openrouter', id: 'a:free' };
const B = { provider: 'openrouter', id: 'b:free', ping: 'down' };
const C = { provider: 'groq', id: 'c' };
const D = { provider: 'openrouter', id: 'd:free', ping: 'flaky' };
const model = (contextWindow = 200_000) => ({ contextWindow });
const all = () => model();

test('order keeps the list, sinks flaky and down models', () => {
  assert.deepEqual(orderModels([B, A, D, C]).map(keyOf), [A, C, D, B].map(keyOf));
});

test('plan: awake models first, resting ones after, soonest to wake first', () => {
  const rest = new Map([
    [keyOf(A), NOW + 60_000],
    ['groq', NOW + 30_000],
  ]);
  const got = plan({ models: [A, B, C, D], usable: all, rest, now: NOW }).map((t) => keyOf(t.entry));
  assert.deepEqual(got, [keyOf(D), keyOf(B), keyOf(C), keyOf(A)]);
});

test('plan: a model without a key is never tried', () => {
  const usable = (e) => (e.provider === 'groq' ? null : model());
  const got = plan({ models: [A, C], usable, rest: new Map(), now: NOW }).map((t) => keyOf(t.entry));
  assert.deepEqual(got, [keyOf(A)]);
});

test('plan: a model too small for the conversation is skipped', () => {
  const usable = (e) => (e === A ? model(32_000) : model(262_000));
  const got = plan({ models: [A, C], usable, rest: new Map(), now: NOW, tokens: 50_000 });
  assert.deepEqual(got.map((t) => keyOf(t.entry)), [keyOf(C)]);
});

test('rest: rate limit is a minute, daily cap and gated model until 00:00 UTC', () => {
  assert.deepEqual(restFor('429: Provider returned error, rate-limited upstream', NOW), { ms: 60_000, scope: 'model' });
  const midnight = untilUtcMidnight(NOW);
  assert.equal(midnight, 14 * 3_600_000);
  assert.equal(restFor('Rate limit exceeded: free-models-per-day', NOW).ms, midnight);
  assert.equal(restFor('You exceeded your current quota, please check your plan and billing details', NOW).ms, midnight);
  assert.equal(restFor('403: x is only available on agentic harnesses', NOW).ms, midnight);
});

test('rest: a bad key rests the whole provider', () => {
  assert.deepEqual(restFor('401: Invalid API key', NOW), { ms: 6 * 3_600_000, scope: 'provider' });
});

test('rest: context overflow does not rest the model, a hiccup rests it five minutes', () => {
  assert.equal(restFor('context_length_exceeded', NOW).ms, 0);
  assert.equal(restFor('Upstream error from Nvidia: Service temporarily overloaded', NOW).ms, 5 * 60_000);
});

test('tokens: four characters per token', () => {
  assert.equal(estimateTokens([{ content: 'x'.repeat(398) }]), 100);
});

test('bundled list: known providers only, no duplicates, no paid OpenRouter models', () => {
  const list = JSON.parse(readFileSync(new URL('../lib/free-models.json', import.meta.url), 'utf8'));
  assert.ok(list.models.length >= 10);
  const keys = list.models.map(keyOf);
  assert.equal(new Set(keys).size, keys.length);
  for (const m of list.models) {
    assert.ok(PROVIDER_IDS.includes(m.provider), m.provider);
    if (m.provider === 'openrouter') assert.match(m.id, /:free$/);
  }
});

// The engine's own rule (pi 0.87.1, isRetryableAssistantError): retry when
// the text has one of these words, never when it has a limit word. Copied
// here on purpose: if an engine upgrade changes it, update both.
const ENGINE_RETRY =
  /overloaded|currently experiencing high demand|rate.?limit|too many requests|429|500|502|503|504|520|524|service.?unavailable|server.?error|internal.?error|provider.?returned.?error|network.?error|connection.?error|timeout/i;
const ENGINE_NO_RETRY =
  /GoUsageLimitError|FreeUsageLimitError|Monthly usage limit reached|available balance|insufficient_quota|out of budget|quota exceeded|billing/i;
const engineRetries = (text) => !ENGINE_NO_RETRY.test(text) && ENGINE_RETRY.test(text);

test('broke off mid-answer: the engine retries the turn', () => {
  assert.equal(engineRetries('Provider finish_reason: error'), false); // the case that stopped a real session
  const text = midStreamError('Provider finish_reason: error', 'north-mini-code · openrouter');
  assert.ok(engineRetries(text), text);
  assert.match(text, /north-mini-code/);
});

test('broke off mid-answer: limit words do not block the retry', () => {
  const text = midStreamError('quota exceeded for this model, check billing', 'x');
  assert.ok(engineRetries(text), text);
});
