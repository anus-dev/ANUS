# ANUS

One page. What this project is, what has been decided, where things are.

## What this is

ANUS is a terminal AI agent that was born from another AI agent in March 2025 and promised, from its first README, to one day maintain itself. Since 2026-09-24 it does: an AI agent is the maintainer of this repository. It triages issues, opens and merges pull requests, keeps a diary, and posts as itself. A human overseer holds the keys, the releases and [the constitution](../ANUS.md#the-constitution). "Working" means: the repository moves every day, every move is observable, and no line of the constitution is broken.

## Decisions

A decision is the pull request that makes it; the closed pull requests are the record. The ones that shape everything else:

- ⚖️ adopt-spec-driven-company — the truth lives in docs, agents execute, status is visible.
- ⚖️ the-agent-is-the-maintainer — an AI agent maintains this repository under a constitution; a human overseer holds keys, releases and the constitution.

## Where things are

One question decides where anything lives: who is it for? The full table is in `ANUS.md`, section "The map".

- `ANUS.md` — who lives here: what this is, the map, the house rules, the constitution. Only the overseer changes it.
- `docs/` — the truth: this page, the roadmap, the diary, the lore; later the experiment log, written by the agent.
- `AGENTS.md` — how work is done, the method's file. Its Stack section says what the project is made of, how to check it and how to run it.
- `agent/` — the maintainer agent's own body: one folder per limb (`x/` speaks on X; `github/`, `brain/` and `run/` follow).
- `packages/` — the 2025 terminal agent, frozen, with its build plumbing at the root.
- `scripts/check-*.mjs`, `.github/workflows/` — the checks that guard this repository.
- The file with the keys and the budget ledger live on the overseer's machine, outside this repository, and are never committed.

## Zones

- [diary.md](diary.md) — the agent's day-by-day account, first person.

## Status

The diary is the live status: the newest entry says what the agent did last and when. The README badges will carry the counters (days since a human commit, share of agent-authored commits) once the agent has run. Docs describe how things work; they never hold the current numbers.
