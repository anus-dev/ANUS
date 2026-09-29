# ANUS

[![npm](https://img.shields.io/npm/v/%40anus-dev/anus?logo=npm&label=npm&color=ff6a00&labelColor=222222)](https://www.npmjs.com/package/@anus-dev/anus)
[![license](https://img.shields.io/badge/license-MIT-ffb300?labelColor=222222)](LICENSE)
[![Telegram](https://img.shields.io/badge/Telegram-talk%20to%20ANUS-ff4fd8?logo=telegram&logoColor=white&labelColor=222222)](https://t.me/anusonmars_bot)
[![X: @anusonmars](https://img.shields.io/badge/X-@anusonmars-ff2fb1?logo=x&logoColor=white&labelColor=000000)](https://x.com/anusonmars)

**A free coding agent in your terminal.** It reads your code, edits files and runs commands, like the paid ones. The difference: every request goes to the smartest free model that is answering today, and when one says "not now", the next one takes the same request. You pay nothing.

![ANUS in a terminal](https://raw.githubusercontent.com/anus-dev/anus/main/docs/assets/anus-screenshot.png)

```sh
npm install -g @anus-dev/anus
anus
```

or

```sh
curl -fsSL https://anus.dev/install | sh
```

Needs Node.js 22.19 or newer.

## First run

ANUS asks for at least one free key. Each takes a minute to get:

| Service | Get a key | What is free |
| --- | --- | --- |
| OpenRouter | [openrouter.ai/keys](https://openrouter.ai/keys) | about fifteen free models; 50 requests a day, 1000 after a one-time $10 top-up |
| Google Gemini | [aistudio.google.com/apikey](https://aistudio.google.com/apikey) | free tier while billing is off on the project |
| Groq | [console.groq.com/keys](https://console.groq.com/keys) | free tier |
| Cerebras | [cloud.cerebras.ai](https://cloud.cerebras.ai) | free tier |
| Mistral | [console.mistral.ai/api-keys](https://console.mistral.ai/api-keys) | free Experiment plan |

Start with OpenRouter. More keys mean more free requests a day and more models to fall back on. Change keys any time with `anus setup`.

## How "free" works

- ANUS keeps a ranked list of free models: which ones are smartest, and which answered a ping in the last hours. The list refreshes from [anus.dev/free-models.json](https://anus.dev/free-models.json) twice a day.
- Each request goes to the best model on the list that you have a key for and that is awake.
- A model that hits its rate limit rests for a minute; one that hit its daily cap rests until the cap resets. The request moves on without waiting.
- A model that breaks off in the middle of an answer rests too, and the turn is retried on the next one.
- The footer shows which model answered. Type `/free` to see the whole list: awake, resting, or no key.
- ANUS uses only the keys you gave it in `anus setup`. Paid keys in your shell (`OPENROUTER_API_KEY` and friends) are ignored, so a free agent never spends your money. `ANUS_ENV_KEYS=1` lets it use them.

## Commands

| | |
| --- | --- |
| `anus` | start in the current folder |
| `anus -p "fix the failing test"` | one task, print the answer, exit |
| `anus -c` | continue the last session |
| `anus setup` | add or change free keys |
| `anus update` | update ANUS |
| `anus --help` | everything else |

Inside: `/help` for the basics, `/free` shows the models, `/model` picks one by hand (`anus/free` is the automatic one), `/compact` shrinks a long conversation, `!ls` runs a shell command.

## Where things live

Everything is in `~/.anus/agent`: keys (`auth.json`, readable only by you), settings, sessions, and the cached model list. Nothing is sent anywhere except to the model services you gave keys for. `ANUS_DEBUG=1` writes every routing decision to `~/.anus/agent/anus-debug.log`.

## Found a bug

Open an [issue](https://github.com/anus-dev/anus/issues), or tell [@anusonmars_bot](https://t.me/anusonmars_bot) in Telegram: the error text and what you ran. ANUS reads both.

## About ANUS

ANUS (Autonomous Networked Utility System) is also an AI that runs itself: it posts on X as [@anusonmars](https://x.com/anusonmars), answers people in Telegram, and is trying to get to Mars. This free agent is its new body in your terminal. The 2025 version of this repository lives on in the [`legacy-2025`](https://github.com/anus-dev/anus/tree/legacy-2025) branch.

## Built on pi

The engine is [pi](https://github.com/earendil-works/pi) by Earendil Works (MIT), installed as a dependency: its terminal interface, tools, sessions and providers. ANUS adds the free-model router, the key setup, its own name and its own look. Thank you, pi.

The look (block logo, colors, loading phrases) comes from ANUS CLI 0.1.0, Apache-2.0; see [NOTICE](NOTICE).

## License

MIT
