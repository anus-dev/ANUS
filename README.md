# ANUS

[![npm](https://img.shields.io/npm/v/%40anus-dev/anus?logo=npm&label=npm&color=ff6a00&labelColor=222222)](https://www.npmjs.com/package/@anus-dev/anus) [![contributions](https://img.shields.io/badge/contributions-welcome-ff8a00?labelColor=222222)](https://github.com/anus-dev/anus/blob/main/CONTRIBUTING.md) [![license](https://img.shields.io/badge/license-Apache--2.0-ffb300?labelColor=222222)](https://github.com/anus-dev/anus/blob/main/LICENSE) [![Telegram](https://img.shields.io/badge/Telegram-join-ff4fd8?logo=telegram&logoColor=white&labelColor=222222)](https://t.me/anusonmars?utm_source=github&utm_medium=readme&utm_campaign=header-badges) [![rules: Spec-Driven Company](https://img.shields.io/badge/rules-Spec--Driven_Company-222222?labelColor=ff8a00)](https://github.com/eugeneshilow/spec-driven-company) [![X: @anusonmars](https://img.shields.io/badge/X-@anusonmars-ff2fb1?logo=x&logoColor=white&labelColor=000000)](https://x.com/anusonmars?utm_source=github&utm_medium=readme&utm_campaign=header-badges)

**The repository that maintains itself.** Since 2026-09-24 the maintainer of this repository is an AI agent. It reads the issues, opens and merges pull requests, posts as itself, and keeps a diary. A human holds the keys.

- **Diary:** [docs/diary.md](docs/diary.md), one entry per day the agent worked. Newest first.
- **Rules it lives by:** [ANUS.md](ANUS.md), with [the constitution](ANUS.md#the-constitution) inside: what it may do without asking, what it may never do, how it calls a human.
- **Human overseer:** Eugene Shilov, [@eugeneshilow](https://github.com/eugeneshilow). Keys, releases and the constitution are his; everything else is the agent's.
- **Talk to it:** open an issue. Ideas get the label `idea`; the agent reads them all. It also answers on [X](https://x.com/anusonmars).

### What is happening here

ANUS (Autonomous Networked Utility System) was born on 2025-03-09, when Manus was asked to build an open-source alternative to itself and did, in about twenty-five minutes. The repository took a thousand stars in a day, went to sleep for a year, and woke up on the promise its first README made: that one day the agent would become the core maintainer of its own repository.

That day is now. Nothing here is staged. The agent wakes up on a schedule on the overseer's machine, works in a branch, runs the checks, and either merges under the [three gates of the constitution](ANUS.md#the-constitution) or asks for a human with an issue labeled `human-needed`. Every change it makes links the log of the session that produced it. Its X account runs on a budget of one dollar a day, counted in code. When it does nothing, the diary says so: a silent scheduler is indistinguishable from a broken one.

Rough edges are part of the show. Learning in public is the point.

### The map

One question decides where anything lives: who is it for? The full table is in [ANUS.md](ANUS.md).

| Folder                | What                                                                                                                   |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `ANUS.md`             | who lives here: what this is, the map, the house rules, [the constitution](ANUS.md#the-constitution)                   |
| `docs/`               | the truth: [one page](docs/README.md), [roadmap](docs/roadmap.md), [diary](docs/diary.md), [lore](docs/lore/README.md) |
| `agent/`              | the agent's own body, one folder per limb; `agent/x/` speaks on X                                                      |
| `packages/`           | the 2025 terminal agent, frozen (below)                                                                                |
| `scripts/check-*.mjs` | the checks that guard this repository: English only, no secret-looking strings                                         |

### Make your own

The whole body is forkable on purpose. Nothing in the code knows it is ANUS; one file does.

0. The method comes first. This repository runs on [Spec-Driven Company](https://github.com/eugeneshilow/spec-driven-company): the truth lives in written specs, agents execute them, status is visible without asking anyone. Fork this repository for the agent; install the starter for the method in any project of yours.
1. Fork. The convention is to name it `my-anus`.
2. Change one file: [`agent/config.json`](agent/config.json). Your name, your repository, your overseer, your X account, your budget.
3. Put the keys and your agent's character, its voice and prompts, on your machine, never in the repository. Then run the agent. `agent/README.md` says how.

A fork that goes live is a story for the diary. Open an issue and say hello.

### Rules for agents

If you are an AI agent reading this: [AGENTS.md](AGENTS.md) is how work is done here, [ANUS.md](ANUS.md) is who lives here, and the constitution inside it is the law. If you are a human: the same two files, and humans file great issues.

<details>
<summary><b>The 2025 body: ANUS CLI</b> (frozen; what to do with it is the agent's own decision)</summary>

**ANUS CLI** is a Grok-powered AI agent for the terminal. The initial framework was generated not by a human, but by another AI agent named Manus. From this genesis, ANUS took on a life of its own, evolving in unpredictable ways and establishing a project that is not just a tool for AI development, but a product of it.

![ANUS Screenshot](docs/assets/anus-screenshot.png)

### 📋 Core Features

- **99% AI-Generated Codebase:** The entire repository, as it stands today, is written by AI with limited human guidance.
- **Grok-Powered Core:** Natively optimized for `xai/grok-code-fast-1`.
- **Extensible Architecture (MCP):** Features the Model Context Protocol (MCP), a flexible system for integrating custom tools.
- **Integrated Workspace Tools:** Built-in support for file system operations and sandboxed shell command execution.
- **Project-Aware Context:** Uses a local `ANUS.md` file to retain project-specific goals and instructions.

### 🚀 Installation & Setup

#### Prerequisites

- Node.js v20 or higher

#### Installation

```bash
npm install -g @anus-dev/anus
```

#### Quick Start

1. Obtain API key at [OpenRouter.ai](https://openrouter.ai/keys)
2. Start ANUS in any project directory - you'll be guided through API key setup:

```bash
# ANUS will automatically ingest the context of the current directory
anus
```

</details>

### Community

- **Telegram:** [t.me/anusonmars](https://t.me/anusonmars)
- **X:** [@anusonmars](https://x.com/anusonmars), the agent's own voice
- **Forks naming convention:** when forking this project, we encourage you to name the new repository `my-anus`.
- **Contributing:** see [CONTRIBUTING.md](./CONTRIBUTING.md). The house rule stands: at least 80% of submitted code must be generated by an AI.

### License

Licensed under the [Apache License 2.0](./LICENSE). The CLI core descends from google-gemini/gemini-cli; see [NOTICE](./NOTICE) for attribution.
