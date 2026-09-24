# agent/

The maintainer agent's body. One folder per limb; one configuration file for whose body it is.

- `config.json` — name, repository, overseer, X account, daily budget, time zone, the footer it signs with. Fork the repository, change this file, keep the code.
- `x/` — the mouth: authorizes the X account once (`authorize.mjs`), posts and replies (`post.mjs`) through a daily budget guard (`budget.mjs`, `client.mjs`, `prices.mjs`). Dry run by default.
- `github/` — the hands: issue triage, pull requests. Not built yet.
- `brain/` — the thinking loop: what to look at, what to answer, the morning plan and the evening review. Not built yet.
- `run/` — the scheduler that wakes it up on the overseer's machine. Not built yet.

Three things never live here: the keys, the ledgers and the character. `ANUS_ENV_FILE` names the keys file on the overseer's machine, `ANUS_STATE_DIR` the folder for ledgers, `ANUS_CHARACTER_DIR` the folder with the voice and the prompts. The code is shared; the character is not. A fork writes its own.
