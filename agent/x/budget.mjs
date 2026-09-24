/**
 * Daily spending guard for the X API.
 *
 * Every paid call is estimated before it is made. If the estimate would push the
 * day's total over the cap, the call is refused. A day is a calendar day in
 * the configured time zone (agent/config.json; the day is a New York day).
 * The ledger is a small JSON file outside the repository.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';
import { config } from '../config.mjs';

export const DEFAULT_DAILY_CAP_USD = config.x.dailyBudgetUsd;
export const BUDGET_TIME_ZONE = config.x.budgetTimeZone;

export function budgetDay(now = new Date(), timeZone = BUDGET_TIME_ZONE) {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(now);
}

function round(n) {
  return Math.round(n * 1e6) / 1e6;
}

export class Budget {
  constructor({
    ledgerPath,
    capUsd = DEFAULT_DAILY_CAP_USD,
    now = () => new Date(),
  }) {
    this.ledgerPath = ledgerPath;
    this.capUsd = capUsd;
    this.now = now;
  }

  load() {
    try {
      return JSON.parse(readFileSync(this.ledgerPath, 'utf8'));
    } catch {
      return { days: {} };
    }
  }

  save(ledger) {
    mkdirSync(dirname(this.ledgerPath), { recursive: true });
    writeFileSync(this.ledgerPath, JSON.stringify(ledger, null, 2) + '\n', {
      mode: 0o600,
    });
  }

  spentToday() {
    const day = this.load().days[budgetDay(this.now())];
    return day ? day.spentUsd : 0;
  }

  remainingToday() {
    return round(Math.max(0, this.capUsd - this.spentToday()));
  }

  /** True if a call estimated at `costUsd` still fits into today's cap. */
  canSpend(costUsd) {
    return round(this.spentToday() + costUsd) <= this.capUsd;
  }

  /** Records a call that was made. Returns the new total for today. */
  record(costUsd, what) {
    const ledger = this.load();
    const key = budgetDay(this.now());
    const day = (ledger.days[key] ??= { spentUsd: 0, calls: [] });
    day.spentUsd = round(day.spentUsd + costUsd);
    day.calls.push({ at: this.now().toISOString(), what, costUsd });
    this.save(ledger);
    return day.spentUsd;
  }
}
