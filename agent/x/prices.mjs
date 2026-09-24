/**
 * X API pay-per-use prices, USD per unit, as published on
 * https://docs.x.com/x-api/getting-started/pricing (checked 2026-09-23).
 * The budget guard uses these numbers to estimate the cost of a call before
 * making it. When X changes its prices, this file changes first.
 */
export const PRICES = {
  postCreate: 0.015,
  postCreateWithUrl: 0.2,
  postRead: 0.005,
  userRead: 0.01,
};

const URL_RE =
  /\bhttps?:\/\/\S+|\b[a-z0-9-]+(\.[a-z0-9-]+)*\.(com|org|net|io|dev|ai|app|co|xyz|me|tech|ru)\b/i;

/** A post that carries a link costs more; X counts bare domains as links too. */
export function postCost(text) {
  return URL_RE.test(text) ? PRICES.postCreateWithUrl : PRICES.postCreate;
}
