# AGENTS.md

Rules for every agent working in this repository. Read this file first: it is the map. It is the method's file, [Spec-Driven Company](https://github.com/eugeneshilow/spec-driven-company), unchanged; what is specific to this repository is in [ANUS.md](ANUS.md), read right after this one.

[Spec-Driven Company](https://github.com/eugeneshilow/spec-driven-company) (SDC) in one line: the truth lives in written specs, agents execute them, and status is visible without asking anyone.

## Before anything: classify the task

Every task is one of three kinds. Decide before reading files or touching git.

1. **Talk.** Explain, discuss, advise. Do not touch git.
2. **Read.** Read files, change nothing. Update `main` first, then read.
3. **Write.** Anything that may change the repository, including one line of docs. Preflight, own worktree, never write to `main`.

## Where the truth lives

- `docs/README.md` — one page: what this project is, the decisions made, where things are.
- `docs/journal.md` — decisions and why: what was decided, what was rejected, in whose words. Append-only, newest first.
- `docs/<name>.md` — any other file the project needs: how one part of it works right now, such as deploy, the admin page or mail. One rule, written once, edited by replacement.

Runtime files sit next to this one and add, never weaken: `CLAUDE.md` points Claude Code here; `CODEX.md` carries what is specific to Codex. Where they disagree with this file, this file wins.

The pair at the root of `docs/` belongs to the whole project. Every subfolder of `docs/` carries its own pair: `README.md` (the summary of the folder) and `journal.md` (the thinking behind it). A new folder is born with both. Such a file is born with its first rule; do not create empty ones.

A third file is optional: `refs.md`, the register of references a zone took its frames from. It appears with the first reference and is never created empty. One line per reference, `[name](address) — what we take from it`, grouped by what the donor does best, with a short note at the end on what the strong ones have in common. New references are appended; a folder never gets a second file of references.

If a rule is not written at an address, it does not exist. "Ask the person who remembers" is not an address.

Three kinds of truth, three homes. Decisions of meaning (what we build, for whom, in which voice) live in `docs/`. Tooling conventions (linter, formatter, versions) live in their config files; do not copy them into docs. Live data and status (users, orders, sensor states) live in the database; docs describe how it works, never what it currently says.

## How to work

1. **Work in a worktree.** Every task has its own worktree under `_wt/`; `main/` is never edited by hand. How, in the Git section.
2. **No task without a done criterion.** If there is no way to check that the task is done, ask. Do not start.
3. **Spec before code.** Requirements, plan and design in one document before the first line of code. For every form in it, a page, a document, an API, a name, find who solved the same task best and take their frame. Search twice, in this order: first the leaders of your own field, what they use and whether a settled form exists; then the wide world, other industries and life outside software, because the best frame is often a mechanism from elsewhere, and this second pass is where an original transfer comes from. Look for a donor by the task it solves, not by the topic it is about. Invent from scratch only when you can say why no frame fits. Every reference found goes into `refs.md` in the same change, and to the human as a list in the answer; a reference that stays in the chat is lost work. The plan is ordered steps, not dates: a step is done when the steps it depends on are done.
4. **Canon before code.** A rule changes in `docs/` first, then in code and tests, in the same change. Never "code now, docs later".
5. **Tests hold the rules.** A rule that has already cost time or money gets a test. If you break a test, fix it before saying "done".
6. **Prepare, do not execute, in risk zones.** See the table below. A human presses the button.
7. **Report the outcome, not the effort.** Say what you did, what you did not do, and what you could not verify.

Every write task walks the same steps, in this order. The mechanics are fixed; step 8 is where the human's lever sits.

| # | Step | What happens | Kind |
|---|---|---|---|
| 0 | Classify | conversation, read or write: decided before anything else | mechanics |
| 1 | Preflight | in `main/`: status, fetch, fast-forward `main`; sweep the worktrees of merged tasks; a new worktree under `_wt/` from fresh `main` | mechanics |
| 2 | Edit | only in that worktree, never in `main/` | mechanics |
| 3 | Check | the check command from the Stack section; red means not done | mechanics |
| 4 | Commit | at every whole step; only this task's changes, never a secret | mechanics |
| 5 | Push | the task branch, never `main`; before the report, so the human gets a live link | mechanics |
| 6 | Pull request | code always goes through one; a change that touches only docs and this file merges without it | mechanics |
| 7 | Review | reread the diff as a reviewer; three things block: a bug on a path that moves money, access or data; a secret; a break of what worked | mechanics |
| 8 | Merge | the human merges; on "ship" the agent merges itself once the check is green and no risk zone is touched | autonomy |
| 9 | Sync and cleanup | fast-forward `main` in `main/`; remove the worktree and the branch, or leave that to the next task's preflight | mechanics |
| 10 | Report | the block from the Report section, with the live link | mechanics |

## Answers the human can use

- Start with what came out and whether it can be used. If the result is partial, name the limit and what it means in practice.
- Plain full sentences. Translate a term, an error or a status into practical meaning where it appears; commands and logs come after, as proof.
- Name who acts next. If the human has to do something, give one action, the place, and the expected result.
- Tell a confirmed failure from something you could not check. Unverified is not done.
- Answer in the language the human writes in; code, commands and names stay as they are.

## Git

- **Layout.** A project is one folder with two things inside: `main/`, the repository, a clean mirror of the `main` branch on the remote, and `_wt/`, one worktree per task, each folder named after its branch. The default branch is `main`; a repository that arrived with `master` is renamed once, before anything else. Two pointer files sit next to them in the project folder, `AGENTS.md` and `CLAUDE.md`, so an agent opened at the project folder finds the rules in `main/`. After the first setup nothing is edited in `main/` by hand: it is only synced and cleaned. Every write task, one line of docs included, lives in its own worktree under `_wt/`.
- `main` is reached only by merge. Code reaches `main` through a pull request that the human merges; if the human said "ship", the agent merges itself once the check is green (or there is no check yet) and no risk zone is touched. A change that touches only `docs/` and this file needs no pull request: the agent merges it into `main` itself. No remote yet? The same rules, merged locally; the remote and pull requests come with the first code. The one exception to "only by merge" is the first setup, which happens in `main/` itself: no repository yet? `git init -b main` in `main/`, build the setup there, one commit on `main`, and say so in the report.
- Preflight for every write task, in `main/`: `git status`, `git fetch --prune` (skip if there is no remote), fast-forward `main`. If `main` is dirty or ahead of the remote, stop and say so. Then sweep the worktrees left by earlier tasks: `git worktree prune`, and every folder under `_wt/` whose branch is merged (gone from the remote, since the repository deletes a branch on merge; with no remote, already contained in `main`) and whose `git status` is clean is removed with `git worktree remove` and its branch deleted with `git branch -D` (a squash merge leaves the branch unmerged in git's eyes, so `-d` would refuse). A worktree with uncommitted or untracked files stays and is named in the report; more than seven worktrees left after the sweep, list them in the report. The sweep lives here, at the start, because the session that built a task is usually gone by the time its pull request is merged; the next task always comes, so the cleanup always happens. Then `git worktree add ../_wt/<branch> -b <branch> main`, and work only there: edits, install, the check, the dev server.
- Branch name: `<agent>-<YYYY-MM-DD>-<topic>`, for example `codex-2026-09-02-signup-form` or `claude-2026-09-02-signup-form`. The worktree folder carries the same name.
- Commit at every whole step. A commit is a point you can return to. Only this task's changes go in; never secrets, never someone else's work in progress.
- Reread the diff as a reviewer, then push the branch and open the pull request. Three things block: a bug on a path that moves money, access or data; a secret in the files; a change that breaks something that worked. Style is not a finding.
- After merge, if the session is still here: in `main/`, fast-forward `main`; remove the worktree and delete the branch. If it is not, the next task's preflight does it. The repository setting "Automatically delete head branches" is on from the first setup: it is how a later task tells a merged worktree from a live one.

## Stack

What this project is made of and the two commands every agent needs. Filled in at setup, changed by replacement when the stack changes. No code yet? Write "none yet" in all three lines; do not invent a check for a project that has nothing to check.

- Made of: TypeScript on Node 20+, npm workspaces (`packages/cli`, `packages/core`, `packages/test-utils`, `packages/vscode-ide-companion`), esbuild bundle, Vitest, ESLint and Prettier; the CLI core descends from google-gemini/gemini-cli (see NOTICE); the maintainer agent's own body lives in `agent/`
- Check: `npm run preflight` (npm ci, format, lint, the hygiene gate, build, typecheck, tests); while iterating, `npm run lint && npm run typecheck && npm run test:agent`
- Run: `npm run build && npm start` (a terminal CLI, no address)

## The check

Run the check command from the Stack section before every commit. Red means not done, whatever the reason. A warning that was already there is not a reason to call a human.

## Risk zones: prepare, do not execute

| Always | Ask first | Never |
|---|---|---|
| work in a branch, write the spec, run the check, report | anything that moves money, touches keys or access, stores or sends personal data, publishes outside the repository, changes production settings | delete data, rewrite someone else's changes, force-push to `main`, put secrets into files or logs, ask for a secret in the chat, print a secret from any file or command output, leave working files (screenshots, logs, dumps) inside the repository |

"Ask first" means: do everything up to the button, then stop and hand over one line with the choice. Do not start the discussion in the middle of the work.

A stop for the human has one shape. First line: the one action, starting with a verb; nothing above it. Then where, as a clickable link to the exact page and the clicks in order (menu, tab, button). Then what to say back when it is done. Below that, at most two lines about the state. No history, no options, no "state so far". When the human answers with a screenshot, the first line says whether it is the right page and the second gives the next click.

A secret never passes through the chat. The human puts it where it lives: the host's settings page, or the local keys file. The agent checks by the variable's name and never asks for or prints the value. `--force` only on a dirty tree, and only with the human's permission.

## Decisions

A decision is a choice that could be reopened tomorrow. It is recorded in `docs/journal.md` as an entry with a stable name:

```
## 2026-09-02 15:01 · <agent> · ⚖️ signup-without-password · Sign-up by email link only

**Decided.** ...
**Rejected.** ... and why.
**Owner's words.** "..."
```

"Owner's words" is a quote from the human. If no human spoke and the task came as a pasted prompt, quote its first sentence.

Rules around decisions:

- One rule has one home. Other documents link to it; they do not copy it.
- The canon changes by replacement. The old rule is deleted in the same commit; history lives in the journal and in git.
- Before proposing a change to architecture, URLs, data schema or process, read the journal for that part of the project. Decided questions are not reopened without the owner asking.
- A "not now" is recorded with the event that reopens it, not a date.
- Thinking that happened in chat and is not in the journal is unfinished work, like code without a commit.

When you find that you acted against a written rule, fix the cause before the symptom, top down: the rule is not written, write it; it is written in the wrong place, move it; it is written but nobody found it, make it findable from the place where the task starts. "I will be more careful" is not a fix.

## Structure

Seven is a trigger, not a target. Fewer things is better; a level should be readable at one glance. When the eighth file, folder, table, variable or script appears at one level, raise the question of grouping, and group only by meaning, never for the number. Two files of the same kind at one level is an early warning: ask whether they want a folder with a `README.md`.

`docs/README.md` stays at one page. If it grows, something under it wants its own folder.

## Production

Anything that will run without a human, a form, a webhook, a scheduled job, an integration, a new data source, is born with four things in one change:

1. the element itself;
2. its canon in `docs/`: where the input comes from, where it writes, known edges;
3. its glass: a place where its status is visible, a page or a line on an existing page;
4. its self-heal: an outside check that fails loudly when the element is broken ("the form renders and the endpoint answers 200"), not a business metric.

Content and layout without a new flow of data or money are outside this rule.

## Report

Every write task ends with the same block, so the human can read it in ten seconds. A lane with nothing to say is left out.

```
---
🧭 next · one step that moves the project most, and why
📚 docs · the files in docs/ this task relied on, one per line under the lane
⚖️ compute · who did the work: <agent> 100% solo, or the split between agents
✅ merged · <commit or pull request> · N files +X/-Y
   <path> +a/-b, one per line; a journal entry carries its title: docs/journal.md +12/-0 · «name of the entry»
🌐 where to look
   <address>, one per line: local · preview · production
🛂 passport · element ✅ · canon ✅ · glass ✅ · self-heal ⬜ (only when something will run without a human)
⚠️ not verified · what you could not check and why, or "nothing"
```

The git lane is one of: `✅ merged · …` · `🔀 pull request #N · check green, waiting for the human` · `📝 committed (first setup only) · <commit>` · `⛔ blocked · why`. The files under it come from `git diff --stat`, never from memory.

## The loop

task in words → work → acceptance by the criterion → ship → observe → next task

Every unit of work is one full turn of this loop. The same loop runs at every scale: a feature, a product, a business zone, the company. Observation of the last turn is where the next task comes from.

---

Based on [Spec-Driven Company](https://github.com/eugeneshilow/spec-driven-company) by Eugene Shilov, CC BY 4.0. Keep this line when you copy the file.
