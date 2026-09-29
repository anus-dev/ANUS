# Changelog

## [0.2.1] - 2026-09-29

### Changed

- ANUS looks like ANUS CLI 0.1.0 again: the block logo in the orange-to-violet gradient, the welcome line and tips, your message and the input in a rounded box with `>`, `✦` before answers, the old loading phrases ("Generating thrust...") and the footer. `/help` is back.

### Fixed

- A free model that broke off in the middle of an answer ended the turn with an error. Now that model rests and the turn is retried on the next free model.
- The model list download no longer leaves a `free-models.json.tmp` file behind.
- The footer shows which free model answered and how much context is left, and shortens itself in a narrow terminal.
- ANUS crashed on start in a terminal narrower than 84 columns (the header line was too long). The header now fits any width.

## [0.2.0] - 2026-09-29

### New Features

- ANUS is a free coding agent in your terminal: `npm i -g @anus-dev/anus`, then `anus`.
- Every request goes to the smartest free model that is answering today. If a model refuses before it answers (rate limit, daily cap, overload), the next one takes the same request at once.
- `anus setup` saves free keys (OpenRouter, Google Gemini, Groq, Cerebras, Mistral). Keys stay on your machine.
- `/free` shows which free models are awake, resting or missing a key.
- The list of free models refreshes from anus.dev twice a day.
