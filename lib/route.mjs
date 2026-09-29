/**
 * Which free model gets the next request. Pure functions: no network, no
 * engine objects, so the rules are tested on their own (test/route.test.mjs).
 *
 * The list (free-models.json) is ANUS's order of preference. A model that
 * failed rests for a while; a model that did not answer the daily ping sinks
 * to the end; a model whose context window is too small for the conversation
 * is skipped.
 */

export const keyOf = (m) => `${m.provider}/${m.id}`;

const PING_RANK = { ok: 0, flaky: 1, down: 3 };
const pingRank = (m) => PING_RANK[m.ping] ?? 0;

/** Keep the list's order, but let models that failed today's ping sink. */
export function orderModels(models) {
  return models
    .map((m, i) => ({ m, i }))
    .sort((a, b) => pingRank(a.m) - pingRank(b.m) || a.i - b.i)
    .map(({ m }) => m);
}

/** Milliseconds until the next 00:00 UTC, when daily free quotas reset. */
export function untilUtcMidnight(now) {
  const d = new Date(now);
  return Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate() + 1) - now;
}

/**
 * How long a model (or its whole provider) rests after a failed request.
 * scope 'provider' means the key itself failed, so every model behind it rests.
 */
export function restFor(errorMessage, now) {
  const e = String(errorMessage ?? '');
  if (/\b401\b|unauthori[sz]ed|invalid.{0,20}(api.?)?key|api.?key.{0,20}(invalid|not valid|missing)/i.test(e))
    return { ms: 6 * 3_600_000, scope: 'provider' };
  if (/per.?day|daily|free-models-per-day|quota|exhausted|insufficient|credits|billing|\b403\b|forbidden|only available/i.test(e))
    return { ms: untilUtcMidnight(now), scope: 'model' };
  if (/context.{0,30}(length|window|limit)|too long|maximum.{0,30}tokens|context_length_exceeded/i.test(e))
    return { ms: 0, scope: 'model' };
  if (/rate.?limit|too many requests|\b429\b/i.test(e)) return { ms: 60_000, scope: 'model' };
  return { ms: 5 * 60_000, scope: 'model' };
}

// The engine (pi 0.87.1) retries a broken answer only when the error text
// has words it knows ("provider returned error" is one), and never when the
// text mentions quota or billing. Kept in step by test/route.test.mjs.
const ENGINE_NO_RETRY =
  /GoUsageLimitError|FreeUsageLimitError|Monthly usage limit reached|available balance|insufficient_quota|out of budget|quota exceeded|billing/gi;

/**
 * A model broke off after it had started answering, so the request cannot
 * silently move on. This text makes the engine retry the turn; the model
 * that broke rests, so the retry goes to the next free model.
 */
export function midStreamError(errorMessage, name) {
  const cause = String(errorMessage ?? 'unknown error')
    .replace(ENGINE_NO_RETRY, '(limit)')
    .slice(0, 300);
  return `${name} broke off mid-answer (provider returned error: ${cause}); ANUS retries on the next free model`;
}

/** Rough token count of a conversation: four characters per token. */
export function estimateTokens(messages) {
  let chars = 0;
  for (const m of messages ?? []) chars += JSON.stringify(m?.content ?? '').length;
  return Math.ceil(chars / 4);
}

/**
 * The models to try for one request, best first.
 *
 * models  — ordered list entries { provider, id, ... }
 * usable  — entry => engine model with a key, or null
 * rest    — Map of 'provider/id' or 'provider' => resting until (ms)
 * tokens  — estimated conversation size
 *
 * Awake models come first in list order; resting ones follow, soonest to
 * wake first, so a request still has somewhere to go when everything rests.
 */
export function plan({ models, usable, rest, now, tokens = 0 }) {
  const awake = [];
  const resting = [];
  for (const entry of orderModels(models)) {
    const model = usable(entry);
    if (!model) continue;
    if (model.contextWindow && model.contextWindow < tokens * 1.15 + 4096) continue;
    const until = Math.max(rest.get(keyOf(entry)) ?? 0, rest.get(entry.provider) ?? 0);
    if (until <= now) awake.push({ entry, model });
    else resting.push({ entry, model, until });
  }
  resting.sort((a, b) => a.until - b.until);
  return [...awake, ...resting];
}
