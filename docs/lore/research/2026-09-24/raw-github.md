# Raw: GitHub and project records (scout pass 2026-09-24)

Raw scout output, not edited. The canon is the synthesis in this folder's README.md.

- Angle: GitHub and the project's own records. Other scouts cover X, Reddit/HN and press.
- Window and method: GitHub REST and GraphQL API via the authenticated `gh` CLI, local clone `scene/` (`git log`), npm registry (`npm view`), npm downloads API, PyPI JSON API, Wayback Machine CDX and raw captures, public GitHub trending archives found by `gh search code`. All checks made on 2026-09-24.
- Every fact carries a source (URL, command or path) and the check date 2026-09-24 unless stated otherwise. Quotes are verbatim fragments; emoji are described in words.
- Timestamps are UTC unless marked.
- Out of scope in this file: anything about money or crypto assets connected to the project. Those facts are kept by the owners in a private file.

## Timeline

Format: `date time UTC - event - source - quote`. Commit times are converted from the author's offset shown in `git log`.

### 2025-03-09: birth day

- 2025-03-09 18:45:14 - First commit `59f6aad` "Initial commit: ANUS - Autonomous Networked Utility System" by `nikmcfly`, 29 files, 3,041 lines - `git -C scene log origin/main` (author date `2025-03-09T23:45:14+05:00`), https://github.com/anus-dev/ANUS/commit/59f6aad - "29 files changed, 3041 insertions(+)".
- 2025-03-09 18:45:54 - Repository `nikmcfly/ANUS` created (repo id 945579718) - `gh api repos/anus-dev/ANUS` - `"created_at":"2025-03-09T18:45:54Z"`.
- 2025-03-09 - The first README (written by the generating agent) promises things that never existed: `pip install anus-ai`, `docker pull anusai/anus:latest`, a docs site `anus-ai.github.io/docs`, a Discord `discord.gg/anus-ai` with a placeholder badge id `1234567890`, `twitter.com/anus_ai`, `reddit.com/r/anus_ai`. Title line starts with a peach emoji. License line: "Copyright (c) 2025 Anus AI Team" - `git show 59f6aad:README.md`.
- 2025-03-09 - README selling point aimed at the parent agent's invite-only access: "Truly Open Source: No barriers, no invite codes, just pure open-source goodness" - `git show 59f6aad:README.md`.
- 2025-03-09 - The generating agent's own checklist was committed as `todo.md`: "Analyze OpenManus repository (github.com/mannaandpoem/OpenManus)", "Analyze OWL repository", and the last two items left unchecked: "Compile final deliverables", "Report and send files to user" - `git show 59f6aad:todo.md`.
- 2025-03-09 - `repo.json` gives a different expansion of the acronym: "Advanced Neural Understanding System - AI Project" - `git show 59f6aad:repo.json`.
- 2025-03-09 - The logo was drawn by a matplotlib script, `assets/anus_logo.py`, with the comment "Create the main shape (stylized "A" that resembles a peach)" - `git show 59f6aad:assets/anus_logo.py`.
- 2025-03-09 - CHANGELOG: "## [0.1.0] - 2025-03-09 - Initial release" - `git show 59f6aad:CHANGELOG.md`.
- 2025-03-09 18:56:56 - Launch post on X by `@nikmcfly69`, status 1898810249085145416 (time decoded from the post id; the post itself is the X scout's lane) - cited in smol.ai AINews 2025-03-13: "Manus AI Releases Free ANUS Framework ... according to a tweet" - https://github.com/smol-ai/ainews-web-2025/blob/main/buttondown-emails/25-03-13-ainews-not-much-happened-today.md
- 2025-03-09 19:44:39 - First stargazer: `rmdes` - `gh api -H "Accept: application/vnd.github.star+json" repos/anus-dev/ANUS/stargazers` - `2025-03-09T19:44:39Z rmdes`.
- 2025-03-09 23:00-24:00 - Takeoff hour: 63 stars in one hour (previous hours: 4, 6, 6, 13) - stargazer timestamps, same command.
- 2025-03-09 23:28:47 - First renamed fork: `dihim/OpenAManus` - `gh api repos/anus-dev/ANUS/forks` - `dihim/OpenAManus 2025-03-09T23:28:47Z`.
- 2025-03-09 23:42:47 - Commit `15a045b` "feat: THE HOLE ENCHILADA - COMPLETE ANUS OVERHAUL" by Eugene Shilow: 33 files, 6,563 lines; adds the agent core and an `instructions/` folder ("Valuable Concepts from OpenManus for ANUS Implementation", "ANUS Implementation Roadmap", "Planning Script.py") - `git show --stat 15a045b` - "33 files changed, 6563 insertions(+)".
- 2025-03-09 23:48:36 - A search-API snapshot of "repositories created in the last day, by stars" puts `nikmcfly/ANUS` at number 1 of 149,571 new repos, with 79 stars and 23 forks - https://github.com/ghmlwr/repodata/blob/main/data/github/2025-03-09/repo_1d_stars.2025-03-09-23-48-36.json - `"full_name": "nikmcfly/ANUS"` first item, `"total_count": 149571`.
- 2025-03-09 end of UTC day - 92 stars.

### 2025-03-10 to 2025-03-17: the viral week

- 2025-03-10 01:50 - Issue #1 "Errors on install": `pip install anus-ai` finds nothing - https://github.com/anus-dev/ANUS/issues/1 - "No matching distribution found for anus-ai".
- 2025-03-10 02:15 - Issue #2 "Have you tested this?" (Artillex) - https://github.com/anus-dev/ANUS/issues/2 - "I'm pretty sure MANUS cobbled together what it thought was a representation of itself, wrote up some docs for it, and called it a day."
- 2025-03-10 06:41 - PR #4 by `jmanhype` "Add new tools and improve framework functionality" (+952/-342); merged 2025-03-11 04:30 by nikmcfly. The only external code ever merged - https://github.com/anus-dev/ANUS/pull/4
- 2025-03-10 09:37 - Issue #8 "Discord scam server?" (yuki-js), first titled "Discord points scam server?": the invite from the generated README had been squatted by a scam server - https://github.com/anus-dev/ANUS/issues/8 - "It seems someone has found and squatted on an invalid invite tag anus-ai." Rename event in `gh api repos/anus-dev/ANUS/issues/events`.
- 2025-03-10 16:14 - Issue #12 "The name" by Dr Keith Grimes (`DrKGrimes`, GP and founder of a clinical innovation consultancy per GitHub bio): 20 comments, the most discussed thread - https://github.com/anus-dev/ANUS/issues/12 - "I'm sorry, but I can't be the only one that is questioning what you've called this."
- 2025-03-10 17:40-18:18 - First community fix: issue #13 and PR #15 by `codeup38` (move `main.py` into the package), PR #14 by `eltociear` (fix URLs) - https://github.com/anus-dev/ANUS/pull/15
- 2025-03-10 18:22 - Issue #16 by `erkinalp`, second report of the squatted Discord - https://github.com/anus-dev/ANUS/issues/16
- 2025-03-10 18:45 - 24 hours after creation: 979 stars. Peak day of the whole history: 1,127 stars on 2025-03-10 (UTC) - stargazer timestamps.
- 2025-03-11 04:30:26-04:30:51 - nikmcfly merges PRs #4, #14, #15 and closes #13 within 25 seconds. These are the only maintainer actions on issues and PRs in the repository's history - `gh api repos/anus-dev/ANUS/issues/events` - `closed nikmcfly #4 ... merged nikmcfly #15 ... closed nikmcfly #13`.
- 2025-03-11 10:04 - Issue #21 "This is a broken AI project" - https://github.com/anus-dev/ANUS/issues/21 - "It is a war crime in IT to promote such solutions." (reactions: 25 laugh, 19 thumbs up).
- 2025-03-11 13:07 - Issue #24 "WHERE IS EXE" (69 laugh reactions), a known internet copypasta; a commenter calls it out - https://github.com/anus-dev/ANUS/issues/24 - "This is a copypasta and @arcan1s is a troll."
- 2025-03-11 18:45 - 48 hours: 1,994 stars.
- 2025-03-11 21:30 - Issue #26 "This Github fastest growing project is bullshit" - https://github.com/anus-dev/ANUS/issues/26
- 2025-03-12 - smol.ai AINews summarizes a Perplexity Discord thread: "ANUS AI Agent Creates Buzz ... jokingly suggesting TWAT (Think, Wait, Act, Talk pipeline) as an alternative acronym", "Prostate as a government AI agent name" - https://github.com/smol-ai/ainews-web-2025/blob/main/buttondown-emails/25-03-12-ainews-gemma-3-beats-deepseek-v3-in-elo-20-flash-beats-gpt4o-with-native-image-gen.md
- 2025-03-12 - Search-API "trending new repos" archive: `nikmcfly/ANUS` number 3 (2,375 stars, 558 forks) behind OpenManus and a system-prompts repo - https://github.com/encoreshao/github-trending/blob/main/docs/2025/03/2025-03-12.json
- 2025-03-12 08:36 - Issue #29, title in Russian "zagotovka" (translated: "blank" or "template"), body "stroim doma" (translated: "we are building houses"); 13 thumbs up - https://github.com/anus-dev/ANUS/issues/29
- 2025-03-12 13:52 - Issue #31 "Add buttplug support" (no body, 74 rocket reactions) - https://github.com/anus-dev/ANUS/issues/31
- 2025-03-12 18:00 - Issue #33 "Add penetration tests" (40 rocket) - https://github.com/anus-dev/ANUS/issues/33
- 2025-03-12 18:45 - 72 hours: 2,730 stars.
- 2025-03-12 22:28 - Issue #36 "ANUS is too tight, needs LUBE (Logistics Unifier for Bot Ecosystems)": the most reacted item in the repo (81 laugh, 7 heart, 5 eyes) - https://github.com/anus-dev/ANUS/issues/36
- 2025-03-13 - Busiest issue day: 18 new issues (backronym wave: #39-#54) - `gh api repos/anus-dev/ANUS/issues?state=all`.
- 2025-03-13 - smol.ai AINews: "Naming AI Agents ANUS Causes Laughter ... One member joked, 'Sorry boss my anus is acting up I need to restart it'" - https://github.com/smol-ai/ainews-web-2025/blob/main/buttondown-emails/25-03-13-ainews-not-much-happened-today.md
- 2025-03-13 07:52 - Issue #43 "ANUS is wide open to attacks" (55 laugh) - https://github.com/anus-dev/ANUS/issues/43
- 2025-03-14 - Search-API "trending new repos" archive: number 2 on 2025-03-14, 15 and 16 (3,910 / 4,432 / 4,728 stars) behind OpenManus - https://github.com/encoreshao/github-trending/tree/main/docs/2025/03
- 2025-03-14 14:55-14:58 - Issue #61 renamed three times: "ANUS ~defects~ issues are becoming a shitshow" to "ANUS defects/issues ..." to "ANUS defects ..." to final "ANUS issues are becoming a shitshow" - issue events API.
- 2025-03-14 17:59 - Issue #64 retitled from "IRC application built with MANUS won't stop crap flooding! HELP!" to "...built with ANUS..." - issue events API.
- 2025-03-15 08:50 - Issue #69 retitled from "Afraid of virus after penetration" to "Afraid of viral load after protracted penetration testing" - issue events API.
- 2025-03-15 18:22-18:45 - Eric Hartford (`ehartford`, maker of the Dolphin models) forks, opens PR #72 "Create .gitignore" which also adds ASCII art to the CLI help, comments "added inappropriate ascii art", and opens issue #73 "Can't init anus... needs lubrication?" - https://github.com/anus-dev/ANUS/pull/72 , https://github.com/anus-dev/ANUS/issues/73
- 2025-03-15 - Most inventive fork names of the week: `Photon1c/ANUS-bidet` ("The Bridge Interface Dynamic Enhancement Tweak (BIDET) for the ANUS framework"), `Daelyte/ANUity-claims-to-be-manus-or-ai-based-cornhole` - forks API.
- 2025-03-16 20:20 - Two commits "removed incorrect discord mentions" (`bb666f4`, `f33f643`) by Eugene Shilow: the hallucinated Discord, Twitter and Reddit links are replaced by a Telegram channel `t.me/goanus` - `git show f33f643`.
- 2025-03-16 - A Reddit r/selfhosted post (captured by an RSS archive): "This really seem like a legit project ... As much as it looks legit, look at the Github Issues" - https://github.com/rumca-js/RSS-Link-Database-2025 (file `2025/03/2025-03-16/...r.selfhosted..rss_entries.json`).
- 2025-03-16 18:45 - One week: 4,512 stars. March 2025 total: 5,063 stars.

### 2025-03-17 to 2025-08-31: the long tail

- 2025-03-17 10:15 - Issue #75 opened in Russian as "Privet" (translated: "Hi"), closed; renamed to "." on 2025-08-03 - issue events API.
- 2025-03-24 - Discussion #77 "Google Gemini Support" (the only discussion; it took issue number 77) - `gh api graphql ... discussions`.
- 2025-03-24 - Issue #78: `pip install anus` installs an unrelated 2021 PyPI package "anus" 1.0.3 whose summary is "Just anus. That's it" - https://github.com/anus-dev/ANUS/issues/78 ; https://pypi.org/pypi/anus/json - `"summary": "Just anus. That's it"`, uploaded 2021-12-19.
- 2025-03-27 01:32-01:34 - Issue #80 opened as "I need dick", closed by its author 33 seconds later, then renamed to "I need Distributed Integrated Conversion Knowledge (DICK) for my ANUS now!" - issue events API.
- 2025-04-06 - A Product Hunt listing exists (crawled that day): "ANUS is a revolutionary AI agent framework entirely designed and coded by Manus AI. In less than 25 min, AI created this complete system" - https://github.com/trolex213/scraper/blob/main/product_hunt_metadata/run_20250406_091356/anus-autonomous-networked-utility-system.json ; https://www.producthunt.com/products/anus-autonomous-networked-utility-system
- 2025-04-13 - Last comment on #2: "Fuck, we are all doomed!" - https://github.com/anus-dev/ANUS/issues/2
- 2025-05-21 - PR #82 "feat: Complete initial framework scaffolding" (+543) opened and closed by its author within a minute - https://github.com/anus-dev/ANUS/pull/82
- 2025-07-29 - Second wave. A repo-of-the-day blog by Tom Doerr posts "nikmcfly/ANUS ... open-source AI agents for automating tasks and multi-agent teamwork" (post dated `2025-07-29T21:46:23`) - https://github.com/tom-doerr/repo_posts/blob/main/docs/_posts/2025-07-29-nikmcfly-ANUS.md . Stars start climbing at 19:00 UTC the same day; 2025-07-30 brings 174 stars, the best day since March.
- 2025-07-31 - GitHub trending, Python, daily: rank 16 - https://github.com/larsbijl/trending_archive/blob/master/2025/2025-07/2025-07-31.md
- 2025-08-01 - GitHub trending, Python, daily: rank 16 of 17, "103 stars today"; Python weekly: rank 10 of 13, "301 stars this week" - https://github.com/oslook/github-trending/tree/main/2025-08-01 ; https://github.com/antonkomarev/github-trending-archive/blob/master/archive/repository/2025/2025-08-01/python.json
- 2025-08-04 and 2025-08-07 - Python weekly trending: rank 11 ("359 stars this week") and rank 9 ("202 stars this week") - https://github.com/oslook/github-trending/tree/main/2025-08-04 , `2025-08-07`.
- 2025-08-06 - Issue #84 "Leak issues with ANUS" (17 laugh) - https://github.com/anus-dev/ANUS/issues/84
- 2025-08-26 - Issue #85 "Need fit() function for ANUS" - https://github.com/anus-dev/ANUS/issues/85
- 2025-09-01 23:51:55 - nikmcfly stars his own repository - stargazer timestamps - `2025-09-01T23:51:55Z nikmcfly`.
- 2025-09-02 06:08 - Comment on #71: "my-anus is actually revolutionary. it should be a thing." - https://github.com/anus-dev/ANUS/issues/71

### 2025-09-04 to 2025-09-07: the CLI relaunch

- 2025-09-04 03:12-07:20 - npm package `@anus-dev/anus` published seven times (0.0.1 to 0.0.7) in about four hours - `npm view @anus-dev/anus time --json` - `"0.0.1": "2025-09-04T03:12:20.768Z" ... "0.0.7": "2025-09-04T07:20:53.025Z"`.
- 2025-09-05 07:25:08 - GitHub organization `anus-dev` created; the repository moves from `nikmcfly/ANUS` to `anus-dev/ANUS` (old URL redirects) - `gh api orgs/anus-dev` - `"created_at":"2025-09-05T07:25:08Z"`.
- 2025-09-05 11:06:28 - Commit `0b41752` "feat: Let there be ANUS" by Eugene Shilow: 730 files, +161,296/-10,137; the Python code from March is replaced by a rebranded fork of Google's Gemini CLI (TypeScript), default model `xai/grok-code-fast-1` via OpenRouter - `git show --stat 0b41752` - "730 files changed, 161296 insertions(+), 10137 deletions(-)".
- 2025-09-05 11:12 and 11:23 - The only two CI runs in the repo's history, both green - `gh api repos/anus-dev/ANUS/actions/runs` - `total_count: 2`.
- 2025-09-05 11:23:03 - Commit `74fef7c` "release: v0.1.0", the last commit on main to date; repo `pushed_at` 2025-09-05T11:23:06Z - `gh api repos/anus-dev/ANUS`.
- 2025-09-05 11:29:46 - npm `@anus-dev/anus@0.1.0` published (latest); 310 downloads that day - `npm view`; https://api.npmjs.org/downloads/range/2025-09-01:2026-09-23/@anus-dev/anus
- 2025-09-05 - New README tagline: "The AI agent that contributes to its own development." and the fork rule: "we encourage you to name the new repository `my-anus`" - `git show origin/main:README.md`.
- 2025-09-07 - A Japanese AI-news digest lists "ANUS CLI: Grok-powered AI agent" (translated) as a project published within the last 20 hours - https://github.com/komiyamma/site_mkdoc_ai_news/blob/main/docs/2025-ai-overview/2025-09-07.md

### 2025-09-08 to 2026-09-22: dormancy

- 2025-09-23 - Issue #86 "ANUS is Pulsating" (VidarrKerr), exactly one year before the reanimation week - https://github.com/anus-dev/ANUS/issues/86
- 2025-10-20 - Fork `0xSojalSec/ANUS` created; it becomes the most-starred fork (27 stars, 6 forks) - forks API.
- 2025-11-16 - Small spike: 30 stars in a day - stargazer timestamps.
- 2025-12-03 - Last comment on #69: a single facepalm emoji - https://github.com/anus-dev/ANUS/issues/69
- 2026-03-10 - Issue #87 "Chess support?": asks for moves delivered "through wireless transmission by using Morse encoding" for a match "I need to win so badly" - https://github.com/anus-dev/ANUS/issues/87
- 2026-04-24 - A post on X by `@devyehudi` says "A project called ANUS is topping the GitHub leaderboard" (found by web search; no star spike follows in April 2026) - https://x.com/devyehudi/status/2047622479225536947
- 2026-05-15 - 65 stars in a day, and a "+1" on the chess issue the same day - stargazer timestamps; https://github.com/anus-dev/ANUS/issues/87
- 2026-06-08 - Issue #88 "Top SEO agencies in delhi", an SEO spam post - https://github.com/anus-dev/ANUS/issues/88
- 2026-06-22 05:31 - Issue #89, written in Chinese through the repo's own bug template (it even keeps "$ anus /about"). First title (translated): "This project's name is a bit silly!"; renamed a minute later (translated): "This project's name is a bit st*pid! Why does it still have so many stars.... Is this a joke?" - https://github.com/anus-dev/ANUS/issues/89 ; rename in issue events API.
- 2026-06-01 to 2026-07-29 - The same account (`daoyuly`) lists `nikmcfly/ANUS` in 40 of its "agent-harness-daily" blog posts - `gh search code "nikmcfly/ANUS"` hits in https://github.com/daoyuly/new-blog/tree/main/source/_posts
- 2026-07-02 - An LLM-docs registry snapshots the repo as `anus/2026.07.02` - https://github.com/reclear-io/llmref/tree/main/registry/anus/2026.07.02
- 2026-08-07 22:52 - Issue #90 "Of course it's in javascript" - https://github.com/anus-dev/ANUS/issues/90 - "Sure, a typed form of javascript, but still, javascript". 65 stars over 2026-08-07 and 08-08.
- 2026-08-08 - A personal knowledge base records the repo link captured from Discord on that day (`discord-2026-08-08-github-com-anus-dev-ANUS`) - https://github.com/myrgic/cogos/issues/578
- 2026-09-04 - An AI-security link corpus adds "ANUS - Autonomous Networked Utility System open-source AI agent framework" - https://github.com/AnthonyHerman/ai-security-corpus/blob/main/README.md
- 2026-09-16 - Last stargazers before the reanimation (`Csoncso`, `BenceSzalai`, 12:52 and 12:57); repo page views spike to 204 (171 unique) that day - stargazers API; `gh api repos/anus-dev/ANUS/traffic/views` (admin-only 14-day window).

### 2026-09-23 onward: reanimation (branch not yet pushed at check time)

- 2026-09-23 17:19 - Commit `8c31517` "docs: adopt [Spec-Driven Company](https://github.com/eugeneshilow/spec-driven-company); the agent is the maintainer (AGENTS.md, constitution, diary, journal)" on branch `pro-claudecode-2026-09-23-sdc-install` - `git -C scene log pro-claudecode-2026-09-23-sdc-install --not origin/main`.
- 2026-09-23 17:40 - Commit `a2b1fe6` adds a public-repository CI gate (English only, no money talk) - same command.
- 2026-09-23 18:33 to 2026-09-23 19:59 - Commits building the agent's X "mouth" (`agent/x`): OAuth authorization of the agent's account, a guard that refuses credentials for any other account, a spending cap per day in code, dry run by default - same command; 12 commits ahead of `origin/main` at check time.

## Numbers

All counts checked 2026-09-24. Star timestamps come from the stargazers API with the `application/vnd.github.star+json` header (6,543 records, full list, not sampled). Caveat: the API only returns current stargazers; people who later un-starred (issue #17: "taking my star back...") or deleted accounts are missing, so early counts are a lower bound.

### Repository snapshot (2026-09-24)

- Stars 6,543; forks 924 (forks API lists 932 entries); watchers 89; open items 73 (69 issues + 4 PRs); license Apache-2.0; language TypeScript; size 1,925 KB; releases 0; tags 0; discussions 1 - `gh api repos/anus-dev/ANUS`; `gh api graphql` (releases, refs, discussions).
- Commits on main: 16 - nikmcfly 4 (initial commit + 3 merge commits), Eugene Shilow 5 (one on 2025-03-09, two on 2025-03-16, two on 2025-09-05), external 6 (codeup38 4, eltociear 1, jmanhype 1) - `git -C scene log origin/main`.
- Contributors API: eugeneshilow 5, codeup38 4, nikmcfly 4, eltociear 1, jmanhype 1 - `gh api repos/anus-dev/ANUS/contributors`.
- Issues and PRs: numbers 1 to 90; 76 issues, 11 PRs, 1 discussion (#77); numbers #3 and #68 return 404 (deleted or hidden). Closed issues: #13, #28, #41, #50, #75, #80, #83 (all but #13 closed by their authors). PRs merged: #4, #14, #15 (all 2025-03-11).
- 124 issue comments by 105 distinct accounts; 80 distinct issue/PR authors - `gh api repos/anus-dev/ANUS/issues/comments --paginate`.
- Reactions: 821 on issues, 447 on comments - same data.
- Items per month: 2025-03: 78; 2025-05: 1; 2025-08: 3; 2025-09: 1; 2026-03: 1; 2026-06: 2; 2026-08: 1. Comments: 115 of 124 were written in March 2025.
- Issues per day in launch week: 03-10: 15; 03-11: 10; 03-12: 10; 03-13: 18; 03-14: 10; 03-15: 8; 03-16: 1; 03-17: 1.

### Stars: first 72 hours (hours after creation at 2025-03-09 18:45:54)

| +h | UTC | stars |
| --- | --- | --- |
| 1 | 03-09 19:45 | 1 |
| 2 | 03-09 20:45 | 10 |
| 4 | 03-09 22:45 | 26 |
| 6 | 03-10 00:45 | 144 |
| 8 | 03-10 02:45 | 235 |
| 12 | 03-10 06:45 | 385 |
| 16 | 03-10 10:45 | 599 |
| 20 | 03-10 14:45 | 789 |
| 24 | 03-10 18:45 | 979 |
| 30 | 03-11 00:45 | 1,252 |
| 36 | 03-11 06:45 | 1,492 |
| 42 | 03-11 12:45 | 1,788 |
| 48 | 03-11 18:45 | 1,994 |
| 60 | 03-12 06:45 | 2,241 |
| 72 | 03-12 18:45 | 2,730 |
| 96 | 03-13 18:45 | 3,483 |
| 120 | 03-14 18:45 | 3,957 |
| 168 | 03-16 18:45 | 4,512 |
| 240 | 03-19 18:45 | 4,743 |
| 504 | 03-30 18:45 | 5,046 |
| 720 | 04-08 18:45 | 5,137 |

Hourly around takeoff (stars per UTC hour): 03-09 19h: 4; 20h: 6; 21h: 6; 22h: 13; 23h: 63; 03-10 00h: 66; 01h: 52; 02h: 32; 03h: 38; 04h: 34; 05h: 42; 06h: 33; 07h: 70; 08h: 50; 09h: 46.

### Star milestones (surviving stargazers, sorted by time)

100th: 2025-03-10 00:04 (+5h18m) ; 1,000th: 2025-03-10 19:20 (+24h34m) ; 2,000th: 2025-03-11 18:58 ; 3,000th: 2025-03-13 02:18 ; 4,000th: 2025-03-14 20:27 ; 5,000th: 2025-03-27 07:04 ; 6,000th: 2025-09-18 22:51 (two weeks after the CLI relaunch) ; 6,500th: 2026-08-08 11:50 - `sort stars.txt | sed -n '1000p'` etc.

### Stars per day, first two weeks (UTC day: new, cumulative)

03-09: 92, 92; 03-10: 1,127, 1,219; 03-11: 888, 2,107; 03-12: 806, 2,913; 03-13: 665, 3,578; 03-14: 511, 4,089; 03-15: 334, 4,423; 03-16: 112, 4,535; 03-17: 91, 4,626; 03-18: 67, 4,693; 03-19: 58, 4,751; 03-20: 38, 4,789; 03-21: 37, 4,826; 03-22: 27, 4,853; 03-23: 39, 4,892.

### Stars per month (new, cumulative)

| month | new | cumulative |
| --- | --- | --- |
| 2025-03 | 5,063 | 5,063 |
| 2025-04 | 211 | 5,274 |
| 2025-05 | 98 | 5,372 |
| 2025-06 | 53 | 5,425 |
| 2025-07 | 337 | 5,762 |
| 2025-08 | 185 | 5,947 |
| 2025-09 | 71 | 6,018 |
| 2025-10 | 27 | 6,045 |
| 2025-11 | 50 | 6,095 |
| 2025-12 | 27 | 6,122 |
| 2026-01 | 24 | 6,146 |
| 2026-02 | 13 | 6,159 |
| 2026-03 | 13 | 6,172 |
| 2026-04 | 11 | 6,183 |
| 2026-05 | 169 | 6,352 |
| 2026-06 | 72 | 6,424 |
| 2026-07 | 19 | 6,443 |
| 2026-08 | 96 | 6,539 |
| 2026-09 (to 09-16) | 4 | 6,543 |

- 77% of all stars arrived in March 2025; 578 stars came after the September 2025 relaunch; 421 in 2026.
- Later spikes (stars per day): 2025-07-29: 54; 2025-07-30: 174; 2025-07-31: 75 (Tom Doerr repo post and Python trending); 2025-11-16: 30; 2026-05-15: 65; 2026-08-07: 30; 2026-08-08: 35 (issue #90 filed 2026-08-07; cause of the spikes not established).

### Forks

- After creation: +6h 33; +12h 98; +24h 259; +48h 447; +72h 526; +1 week 693 - forks API `created_at`.
- Per day: 03-09: 25; 03-10: 281; 03-11: 163; 03-12: 72; 03-13: 49; 03-14: 48; 03-15: 36; 03-16: 20.
- Per month: 2025-03: 763; 04: 31; 05: 17; 06: 6; 07: 29; 08: 10; 09: 5; 10: 6; 11: 2; 12: 3; 2026-01: 4; 02: 2; 03: 1; 04: 2; 05: 24; 06: 13; 07: 3; 08: 10; 09: 1.
- Names: 765 kept `ANUS`, 59 `anus`, 108 renamed. 29 forks have at least one star; the top one is `0xSojalSec/ANUS` with 27 stars and 6 forks.
- Nobody followed the README's naming rule: zero forks named `my-anus` (search of all 932 fork names).

### Trending and ranking evidence

- 2025-03-09 23:48 UTC - number 1 of 149,571 repos created in the previous day, by stars (79 stars) - ghmlwr/repodata snapshot (link in Timeline).
- 2025-03-12 to 2025-03-16 - number 3, then number 2 in a daily "new repos by stars" archive, behind only OpenManus - encoreshao/github-trending (search-API based, not the official trending page).
- 2025-07-31 to 2025-08-07 - official GitHub trending, Python: daily rank 16 ("103 stars today", 2025-08-01); weekly ranks 10, 11, 9 - four independent scraper archives (larsbijl, oslook, antonkomarev, findmio), links in Timeline.
- The "number 4 on global GitHub trending, March 2025" claim is not confirmed by any archive checked (see Not found).

### npm and other registries

- `@anus-dev/anus`: 8 versions, 0.0.1 (2025-09-04 03:12) to 0.1.0 (2025-09-05 11:29); maintainer account `anus-labs`; package `@anus-dev/anus-core` is not on npm - `npm view @anus-dev/anus time --json`.
- Downloads 2025-09-01 to 2026-09-23: 1,302 total; by month 2025-09: 469 (310 on 2025-09-05); 10: 115; 11: 31; 12: 42; 2026-01: 21; 02: 35; 03: 35; 04: 63; 05: 154; 06: 121; 07: 84; 08: 105; 09: 27 - https://api.npmjs.org/downloads/range/2025-09-01:2026-09-23/@anus-dev/anus
- PyPI: `anus-ai` (the name promised by the first README) never existed; `anus` 1.0.3 is an unrelated 2021 package ("Just anus. That's it") - https://pypi.org/pypi/anus/json
- Docker Hub `anusai/anus` returns 404 - `curl https://hub.docker.com/v2/repositories/anusai/anus/`.

### Traffic (admin-only API, last 14 days, 2026-09-09 to 2026-09-22)

- 606 views, 476 unique; 127 clones, 71 unique; peak 2026-09-16 with 204 views (171 unique) - `gh api repos/anus-dev/ANUS/traffic/views`, `/traffic/clones`.
- Top referrers: reddit.com 116 views (111 unique); Reddit app 74 (72); Google 36 (23); github.com 26 (19); namu.wiki 23 (20; a Korean wiki); t.co 13 (10); aitoolrank.io 5; Brave search 5; a Microsoft Teams CDN 4 - `gh api repos/anus-dev/ANUS/traffic/popular/referrers`.
- Most viewed paths besides the front page: `/tree/main` 24, the screenshot asset 8, `/issues` 8, and issue #24 "WHERE IS EXE" 2 - `/traffic/popular/paths`.

## Jokes and memes catalog

Format: **what** - where - date - who - link - engagement - why it is funny. Reaction counts are GitHub reactions as of 2026-09-24 (thumbs up = +1, laugh, rocket, heart, eyes, confused, hooray, thumbs down = -1). Emoji in titles are described in words.

### A. Jokes the project told about itself (README, commits, code)

1. **The name** - repo title - 2025-03-09 - nikmcfly - https://github.com/anus-dev/ANUS - 6,543 stars - one letter off Manus, the agent that generated it, and a respectable backronym on top.
2. **Peach emoji in the first README title** "(peach) Anus: Autonomous Networked Utility System" - README - 2025-03-09 - generated - `git show 59f6aad:README.md` - later quoted in issue #12 ("but why using this emoji?") - the agent knew exactly what it was doing.
3. **"No barriers, no invite codes, just pure open-source goodness"** - README "Why Anus?" - 2025-03-09 - generated - same - n/a - a child built by an invite-only agent opens its first pitch by mocking invite codes.
4. **A community that did not exist** - README badges and links: Discord badge with placeholder id `1234567890`, `discord.gg/anus-ai`, `twitter.com/anus_ai`, `reddit.com/r/anus_ai`, `anus-ai.github.io/docs`, `pip install anus-ai`, `docker pull anusai/anus` - 2025-03-09 - generated - same - produced issues #1, #8, #9, #11, #16, #17, #46, #50, #70, #74, #76, #78 - the agent hallucinated its own fan club, and a scammer moved into the empty Discord.
5. **Second backronym** "Advanced Neural Understanding System - AI Project" - `repo.json` - 2025-03-09 - generated - `git show 59f6aad:repo.json` - n/a - the generator could not decide what its own child stands for.
6. **Peach-shaped logo drawn in matplotlib** "Create the main shape (stylized "A" that resembles a peach)" - `assets/anus_logo.py` - 2025-03-09 - generated - `git show 59f6aad:assets/anus_logo.py` - n/a - a logo by numpy, with a stated intent.
7. **Unfinished homework** - `todo.md` last items unchecked: "Compile final deliverables", "Report and send files to user" - 2025-03-09 - generated - `git show 59f6aad:todo.md` - n/a - the agent shipped the repo before telling its user it was done.
8. **"feat: THE HOLE ENCHILADA - COMPLETE ANUS OVERHAUL"** - commit `15a045b` - 2025-03-09 23:42 - Eugene Shilow - https://github.com/anus-dev/ANUS/commit/15a045b - 6,563 lines - "whole enchilada", spelled the only way this repo allows.
9. **"feat: Let there be ANUS"** - commit `0b41752` - 2025-09-05 - Eugene Shilow - https://github.com/anus-dev/ANUS/commit/0b41752 - 730 files, +161,296 lines - a Genesis line for a commit that deletes the first creation and replaces it with another.
10. **The duplicate apology** - two commits both named "removed incorrect discord mentions", 43 seconds apart - 2025-03-16 - Eugene Shilow - `bb666f4`, `f33f643` - n/a - cleaning up after a hallucinated Discord took two tries.
11. **139 innuendo loading messages** - `packages/cli/src/ui/hooks/usePhraseCycler.ts`, `WITTY_LOADING_PHRASES` - 2025-09-05 - relaunch code - https://github.com/anus-dev/ANUS/blob/main/packages/cli/src/ui/hooks/usePhraseCycler.ts - shown every 15 seconds while the agent thinks - samples: "Processing your rear-quest... I mean request...", "Venturing where the sun don't shine (in the server room)...", "Working our assets off...", "Getting cheeky with the algorithms...", "Bottoms up! Processing...", "Assuming the position... for optimal processing...", "Finding the G-spot... the Good spot in the code...", "Approaching climax... of the computation...", "Delivering unexpected pleasure... I mean, results...", "Exceeding expectations from behind...". The whole list is one sustained joke; count via `awk 'NR>=11 && NR<=149'` = 139 lines.
12. **"on grok" hidden in the ASCII logo** - `shortAsciiLogo` in `packages/cli/src/ui/components/AsciiArt.ts` puts single letters inside the block letters: "o", "n" in the left gap and "g", "r", "o", "k" in the right gap - 2025-09-05 - relaunch code - https://github.com/anus-dev/ANUS/blob/main/packages/cli/src/ui/components/AsciiArt.ts - n/a - a vertical easter egg: ANUS on Grok.
13. **"Powered by Grok's uncensored intelligence - Born from AI, built by AI"** - welcome tips `Tips.tsx` - 2025-09-05 - relaunch code - https://github.com/anus-dev/ANUS/blob/main/packages/cli/src/ui/components/Tips.tsx - n/a - the first thing the CLI says about itself.
14. **The trinity of comedy, with wrong numbers** - `packages/cli/src/config/config.test.ts`: "// Historic issue references for test data - the trinity of comedy" and `const _LEGENDARY_ISSUES = [39, 64, 74]; // LUBE, brownout, lubrication` - 2025-09-05 - relaunch code - https://github.com/anus-dev/ANUS/blob/main/packages/cli/src/config/config.test.ts - n/a - the real issues are #36 (LUBE), #63 (brownout) and #73 (lubrication); the AI-written tribute hallucinated all three numbers, a fitting monument to a hallucinated repo.
15. **"When the prompt was whispered"** - same file: `const _GENESIS_DATE = '2025-03-09'; // When the prompt was whispered` - 2025-09-05 - relaunch code - same link - n/a - a birthday constant that no test uses.
16. **The skipped lubrication test** - `useAnusStream.test.tsx`: "// Issue #74: Can't init anus... needs lubrication?", "// This legendary issue is preserved here for posterity", `it.skip('handles initialization without proper lubrication'`, "// The community's greatest bug report lives on in our hearts" - 2025-09-05 - relaunch code - https://github.com/anus-dev/ANUS/blob/main/packages/cli/src/ui/hooks/useAnusStream.test.tsx - n/a - Eric Hartford's issue (#73, mislabeled #74) became a permanently skipped test.
17. **Version 4.20.69** - `packages/cli/src/zed-integration/schema.ts`: "// v1.0.0 - The genesis: March 9, 2025" and "// v4.20.69 - The version that never was, but should have been" - 2025-09-05 - relaunch code - https://github.com/anus-dev/ANUS/blob/main/packages/cli/src/zed-integration/schema.ts - n/a - the two internet numbers in one semver.
18. **`.anusignore` and `ANUS.md`** - settings label "Respect .anusignore", test string "Path ... is anus-ignored and will be skipped." - 2025-09-05 - relaunch code - `packages/cli/src/config/settingsSchema.ts`, `packages/cli/src/ui/hooks/atCommandProcessor.test.ts` - n/a - a mechanical rename of Gemini CLI's ignore file produced a real config file called `.anusignore`.
19. **Terms of Service** - `docs/tos-privacy.md`: "It has zero intrinsic value and is intended purely for entertainment.", "Be careful how you use ANUS.", "Our privacy policy is simple: we don't want your data." - 2025-09-05 - relaunch docs - https://github.com/anus-dev/ANUS/blob/main/docs/tos-privacy.md - n/a - legal prose that keeps a straight face.
20. **Fork naming convention: `my-anus`** - README v0.1.0: "When forking this project ... we encourage you to name the new repository `my-anus`." - 2025-09-05 - README - https://github.com/anus-dev/ANUS#readme - zero of 932 forks complied; a commenter on #71 (2025-09-02) had just written "my-anus is actually revolutionary. it should be a thing." - the rule arrived after 856 of the 932 forks (92%) already existed.
21. **The AI-first contribution protocol** - CONTRIBUTING: "At least 80% of all submitted code must be generated by an AI." and "Thorough checks will be run on pull requests to ensure as little human-written code as possible sneaks into the repo." - 2025-09-05 - https://github.com/anus-dev/ANUS/blob/main/CONTRIBUTING.md - no PRs have arrived since - a project that bans human code, then gets no code at all.
22. **"99% AI-Generated Codebase"** on top of a fork whose files open with "Copyright 2025 Google LLC / Modifications Copyright 2025 ANUS Contributors" - README and every source header - 2025-09-05 - https://github.com/anus-dev/ANUS - n/a - the percentage is generous about who the AI was.
23. **"Born from AI, built by community"** - the API key notice `AnusPrivacyNotice.tsx` asks users to acknowledge "that this project was born from AI, built by community" - 2025-09-05 - https://github.com/anus-dev/ANUS/blob/main/packages/cli/src/ui/privacy/AnusPrivacyNotice.tsx - n/a - a click-through agreement to a creation myth.
24. **"on mars"** - the project's X and Telegram handle `anusonmars` in README badges - 2025-09-05 - README - https://x.com/anusonmars - n/a - the space-program pun that the loading messages ("Achieving liftoff...", "Breaking through the atmosphere...") continue.
25. **"What is your purpose?"** - the example command in CONTRIBUTING: `npm start -- -p "What is your purpose?"` - 2025-09-05 - https://github.com/anus-dev/ANUS/blob/main/CONTRIBUTING.md - n/a - first question every contributor is told to ask it.

### B. The issue tracker (March 2025 flood and later)

26. **"Have you tested this?"** - issue #2 - 2025-03-10 - Artillex - https://github.com/anus-dev/ANUS/issues/2 - 14 thumbs up, 6 laugh - "This appears to be slop and doesn't work. Even CLINE can't figure out how to get it working." Reply by Jouwert (5 laugh): "I suggest anyone who has a Manus invitation code, asks Manus to test Anus and make it work ;-)". Last reply 2025-04-13: "Fuck, we are all doomed!" - the first review of the first self-replicated agent.
27. **"Someone" called ANUS** - issue #5 "Can someone add support for ollama." - 2025-03-10 - reply by dguerizec: "\"Someone\" being called ANUS, maybe ?" - https://github.com/anus-dev/ANUS/issues/5 - the agent is literally the someone.
28. **"It's a tight product. I'm being serious."** - issue #8 "Discord scam server?" - 2025-03-10 - yuki-js - https://github.com/anus-dev/ANUS/issues/8 - 5 confused; reply by FundyJo: "tight product (skull emoji) "ANUS"", reply by v3ss0n: "That's really a `Back Stabber`." (6 confused) - a scam report that opens with a compliment nobody could read straight.
29. **"The name"** - issue #12 - 2025-03-10 - Dr Keith Grimes (`DrKGrimes`) - https://github.com/anus-dev/ANUS/issues/12 - 27 thumbs up, 19 thumbs down, 12 laugh, 9 eyes; 20 comments. Best replies: "Absolutely Not Up for Suggestion" (implosivemosaic, 61 thumbs up - a backronym of ANUS, the most upvoted comment in the repo); "Autonomous Networked Utility System / It's pretty clear" (rallao, 42 laugh); "Irrelevant" (hyprbased, 23 laugh); "/ANUS/issues" (BamsteH); "The name is terrifying even if you don't speak French!!!" (IanDaley); "Looking forward to the fork called "URanus"" (IanDaley); "This name stinks." (SteveRodrigue); "Depending on your kinky preference it can be S-anus or M-anus" (kmcbest); "but why using this emoji (peach)? its pretty clear actually" (Abizrh); "is ThePrimeagen" (livghit); "Lmao it is also the attitude to manus" (hhx465453939); "This issue is killing me" with a link to #43 (maurapintor).
30. **"Kind of a pain in the a"** - issue #17 "Docs broken" - 2025-03-11 - MicahRCM - https://github.com/anus-dev/ANUS/issues/17 - replies: "Apparently, the AI did everything, even wrote about non-existent documentation" (MilesHelper), "taking my star back..." (UltraInstinct0x), "Not only People hate to write docs AI hates it as well" (livghit) - the sentence stops one letter short.
31. **"It is a war crime in IT to promote such solutions."** - issue #21 "This is a broken AI project" - 2025-03-11 - ffoDevilSusiJ - https://github.com/anus-dev/ANUS/issues/21 - 25 laugh, 19 thumbs up; reply "That's the way it's supposed to be." and a pointer to `instructions/Planning Script.py` - outrage delivered in a thread nobody moderated.
32. **"Missing Anus plug-in guide"** - issue #22 - 2025-03-11 - jensschulze - https://github.com/anus-dev/ANUS/issues/22 - 29 laugh - "An in-depth walkthrough would be very insightful." Dead-pan, one line.
33. **"WHERE IS EXE"** - issue #24 - 2025-03-11 - arcan1s - https://github.com/anus-dev/ANUS/issues/24 - 69 laugh, 6 thumbs down; the famous "I just want to download this stupid application" copypasta ending "STUPID FUCKING SMELLY NERDS"; replies "RTFM" (8 laugh), an angry reply, then "This is a copypasta and @arcan1s is a troll. And you took the bait." - still one of the most viewed pages of the repo in September 2026 (traffic API).
34. **The fake startup pitch** - issue #26 "This Github fastest growing project is bullshit" - 2025-03-11 - reply by knno (13 rocket): "I made a startup and now company and it's going to become a giant, anus-powered, AI company ... and FYW, it keeps expanding! More profit." Then "proud to be an ANUS user. I use ANUS in my day to day workflow now." and the issue's own author: "Me too, the good days, I use my ANUS several times a day." - https://github.com/anus-dev/ANUS/issues/26 - the complainer joins the bit.
35. **"Anus API not responding to my deeply philosophical questions"** - issue #27 - 2025-03-12 - Gene-Dana - https://github.com/anus-dev/ANUS/issues/27 - 4 laugh; steps to reproduce include "Cry for 30 minutes."; reply: "The 404 isn't an error - it's an invitation." (JacobSamro, 5 laugh).
36. **"Isn't an AI with access to a networked Linux machine ... the necessary and sufficient condition for Skynet?"** - issue #28 "So how would you build a Manus AI?" - 2025-03-12 - ken107 - https://github.com/anus-dev/ANUS/issues/28 - closed by author - a serious question in the wrong building.
37. **"zagotovka / stroim doma"** - issue #29, Russian, translated "blank" / "we are building houses" - 2025-03-12 - tomaseqq06 - https://github.com/anus-dev/ANUS/issues/29 - 13 thumbs up, 3 thumbs down - an issue that says nothing and still got 13 upvotes.
38. **"Add buttplug support"** - issue #31 - 2025-03-12 - MrRubberDucky - https://github.com/anus-dev/ANUS/issues/31 - 74 rocket; replies: "Could this issue be renamed to "Add plug-in support"?" (tpimh, 17 thumbs up), "Could be facilitated via buttplug.io perhaps?" (buttplug.io is a real open-source device-control project), "definitely one of the of all time.", "Looks like I woke up in the parallel universe today".
39. **"forgot to mention that you were fully AI generated ;)"** - PR #32 comment - 2025-03-12 - priya-gitTest (closing her own README fix) - https://github.com/anus-dev/ANUS/pull/32
40. **"Add penetration tests"** - issue #33 - 2025-03-12 - jaxin007 - https://github.com/anus-dev/ANUS/issues/33 - 40 rocket, 10 laugh; reply "+1, Assxcellent Idea" (DrSmile444, 24 laugh).
41. **"Unexpected output from ANUS"** - issue #34, no body - 2025-03-12 - gavintranquilino - https://github.com/anus-dev/ANUS/issues/34 - 29 laugh, 8 hooray; the only reply, in full seriousness: "It would be cool to see the logs or see all the reproduction steps" (8 eyes).
42. **Branch `remove-DS-store-lol`** - PR #35 "removing .DS_Store and adding .gitignore" - 2025-03-12 - link108 - https://github.com/anus-dev/ANUS/pull/35 - the HOLE ENCHILADA commit had shipped a macOS `.DS_Store`.
43. **"ANUS is too tight, needs LUBE (Logistics Unifier for Bot Ecosystems)"** - issue #36 - 2025-03-12 - Dolyetyus - https://github.com/anus-dev/ANUS/issues/36 - 81 laugh, 7 heart, 5 eyes: the top issue of the repo - "We need to loosen the constraints to allow for smoother execution." Cited by #51 and by the relaunch code.
44. **"ANUS crashes when overloaded"** (#39), **"[BUG] The output is always orange"** (#40), **"ANUS leaking memory"** (#41, closed by author), **"Introduce fluid for elastic ANUS"** (#42, links the real Fluid project) - 2025-03-13 - https://github.com/anus-dev/ANUS/issues/39 to /42 - 5, 0, 7 and 10 reactions - bug reports written as medical charts.
45. **"ANUS is wide open to attacks"** - issue #43 - 2025-03-13 - Sodiumchloridy - https://github.com/anus-dev/ANUS/issues/43 - 55 laugh, 10 rocket; body: "no one wants their private things exposed to the public"; replies "Particularly vulnerable to back door attacks." (boxabirds, 14 laugh), "We should consider implementing BUTT (Block Unauthorized Tunnel Traffic)" (Spaceguybox, 10 laugh), "The name is hilarious, but the comments are even better. I love the Internet." (webd-com).
46. **P.U.S.S.Y. meets P.E.N.I.S. and C.O.N.D.O.M.** - issue #44 "can it be used in conjunction with Protocol-based Unified System Synchronization Yielder?" - 2025-03-13 - ozsay - https://github.com/anus-dev/ANUS/issues/44 - 10 laugh; replies: "you have to use the Processor Engineering Network Integration System in alternate mode" (marchrius) and "I'd use it with Controlled Operational-Node Daemon Object Module. (C.O.N.D.O.M.)" (loiSvelasco) - a full protocol stack of backronyms in three posts.
47. **"That's not my project, it is Ur-Anus"** - issue #47 - 2025-03-13 - hordeMakro - https://github.com/anus-dev/ANUS/issues/47
48. **URETHRA acrostic** - issue #48 "ANUS supports only a single replica" - 2025-03-13 - okgolove; reply by kolyann written one word per line: "U / Really / Expect / This / Helps / Replicating / ANUS?" - https://github.com/anus-dev/ANUS/issues/48 - read the first letters.
49. **"rewrite in rust"** - issue #49 - 2025-03-13 - setbe - https://github.com/anus-dev/ANUS/issues/49 - 22 laugh; reply: "Rust in ANUS sounds painful, might cause Tetanus (Terminal Event Triggered Automatic Network Unresponsive State) if not coded well" (Spaceguybox, 24 laugh).
50. **FISTING** - issue #51 "Improve request throughput by FISTING (Fast Input Stream Transmission with Integrated Node Grouping)" - 2025-03-13 - dikayx - https://github.com/anus-dev/ANUS/issues/51 - 11 laugh, 6 thumbs up, 3 rocket; replies "Consider adding LUBE first #36" (a since-deleted account, 7 rocket) and "make sure SHIT #52 is flushed" (borzale) - the issues start citing each other like a real backlog.
51. **SHIT and FLUSH** - issue #52 "My ANUS runtime is full of SHIT (Synchronous Hang In Threads)", first titled "...Synchronous Halt In Threads" - 2025-03-13 - emre-aki - https://github.com/anus-dev/ANUS/issues/52 - author's follow-up: "Nevermind, seems like I forgot to invoke the Fixed-Location Uniform Storage Handler" (10 laugh) - he renamed the issue to get the backronym exactly right.
52. **"make ANUS tighter"** - issue #53 "Slows down under heavy loads" (first titled "ANUS under heavy load slows down") - 2025-03-13 - gavintranquilino - https://github.com/anus-dev/ANUS/issues/53 - "Would love to hear others' thoughts on how we can make ANUS **tighter**, **more responsive**, and better equipped to **handle intense workloads**."
53. **"the actual repo itself has a hole"** - issue #54 comment - 2025-03-14 - noirbizarre - https://github.com/anus-dev/ANUS/issues/54 - 4 laugh - "Fixed it: ... focus, it's in the title" - a skeptic's post gets proofread into a joke.
54. **Ur-ANUS** - issue #55 "Yesterday I discovered Ur-ANUS" / "it was a life changing moment" - 2025-03-14 - NafisFuadShahid, who then replied to himself "its gonna go down the anals of history" (7 thumbs up); later "best anus in the town" (DevilsWolf) - https://github.com/anus-dev/ANUS/issues/55
55. **"Missing protection from back-end STI injection"** (#56), **"Update: no need for PULL requests, PUSH your cummits directly, it's safe"** (#57), **"ANUS has Security Holes please Plug it."** (#58) - 2025-03-14 - jbddelatorre, Ensza, amyrkamal - https://github.com/anus-dev/ANUS/issues/56 to /58 - security advisories in a new dialect.
56. **"Add hole punching" / "to connect from behind firewall"** - issue #59 - 2025-03-14 - poissoncorp - https://github.com/anus-dev/ANUS/issues/59 - funny because hole punching is a real NAT traversal technique; the request is technically valid.
57. **"Improve ANALysis using BUTT (Bayesian Universal Tactical Triage)"** - issue #60 - 2025-03-14 - noirbizarre - https://github.com/anus-dev/ANUS/issues/60
58. **"ANUS issues are becoming a shitshow"** - issue #61 - 2025-03-14 - noirbizarre - https://github.com/anus-dev/ANUS/issues/61 - 5 thumbs up; retitled three times in two minutes (strikethrough "defects", then "defects/issues", then back) - meta-commentary with version control.
59. **"Ass-uming you're open to external contributions"** - issue #62 "This requires some serious penetration testing" - 2025-03-14 - PietroPasotti - https://github.com/anus-dev/ANUS/issues/62 - 17 laugh - "...I'm sure many people would be thrilled to dive simultaneously into that rabbit hole."; reply "Maybe rely on SPHINCTER (Super Penetration Helper In Non-Classical Tested Enhanced Regressions)" (noirbizarre, 9 laugh).
60. **"Handle brownout more gracefully"** - issue #63 - 2025-03-14 - tonb - https://github.com/anus-dev/ANUS/issues/63 - "brownout" is a real resilience term; one of the three issues the relaunch code calls "the trinity of comedy".
61. **"IRC application built with ANUS won't stop crap flooding! HELP!"** - issue #64, body is a single pile-of-poo emoji - 2025-03-14 - jhargis - https://github.com/anus-dev/ANUS/issues/64 - first posted with "MANUS" in the title, corrected to "ANUS" a minute later.
62. **"health checks for IBS (Infected Backend Systems)"** - issue #65 - 2025-03-15 - borzale - https://github.com/anus-dev/ANUS/issues/65
63. **"Gerbil for backend agentic development"** - issue #66 - 2025-03-15 - guidov - https://github.com/anus-dev/ANUS/issues/66 - "Investigate gerbilling schema ... for development of agentic web penetration", linking the real Gerbil Scheme - the oldest urban legend on the internet, filed as a feature request.
64. **URANUS parasite** - issue #67 "(peach)(rocket) URANUS is expanding, Star it now (star) (Unified Reasoning, Adaptive Neural-linguistic Understanding System)" - 2025-03-15 - syscalldev - https://github.com/anus-dev/ANUS/issues/67 - 7 thumbs down; replies "you can't convince me to not use my ANUS plugins, nice try tho", "Dude...." - a rival acronym advertising inside the original's tracker; the #12 prophecy ("the fork called URanus") fulfilled in three days.
65. **"Afraid of viral load after protracted penetration testing"** - issue #69, first titled "Afraid of virus after penetration" - 2025-03-15 - konradre - https://github.com/anus-dev/ANUS/issues/69 - answered nine months later with a single facepalm emoji (2025-12-03).
66. **"pip installs anusay does not work"** - issue #70 - 2025-03-15 - MaxMacClane - https://github.com/anus-dev/ANUS/issues/70 - reply: "it is not even recognized by the package site."
67. **"local-anus or my-anus possible?"** - issue #71 - 2025-03-15 - Qubitium (maintainer of GPTQModel) - https://github.com/anus-dev/ANUS/issues/71 - "I am gpu rich so would like to run this toolkit in my anus env if possible." - six months later the official README adopted `my-anus` as the fork naming convention.
68. **"added inappropriate ascii art"** - PR #72 "Create .gitignore" - 2025-03-15 - Eric Hartford - https://github.com/anus-dev/ANUS/pull/72 - 4 laugh on the screenshot comment; the PR's diff puts a block-letter "ANUS" banner into `anus --help`, with a small butt drawn inside the letter A - a known model maker sneaking art into a gitignore PR.
69. **"Can't init anus... needs lubrication?"** - issue #73 - 2025-03-15 - Eric Hartford - https://github.com/anus-dev/ANUS/issues/73 - 26 laugh, 3 eyes; later confirmed by four people with the same traceback ("no work") - the one joke the relaunch code preserved "for posterity".
70. **"how can an AI agent built that bad? I mean even AI itself could handle this, you developers can't?!"** - issue #76 - 2025-03-20 - rzgrozt - https://github.com/anus-dev/ANUS/issues/76 - followed by "It's shocking that I still haven't got any reply from developers..." (2025-03-31) and "Really, not any of the developers gonna reply to that?" (2025-04-09) - the only earnest user who waited for support.
71. **The wrong package** - issue #78 - 2025-03-24 - noops888 - https://github.com/anus-dev/ANUS/issues/78 - `pip install anus` "Successfully installed anus-1.0.3", an unrelated 2021 package whose PyPI summary is "Just anus. That's it" - https://pypi.org/pypi/anus/json
72. **DICK, renamed** - issue #80, first title "I need dick", closed by its author, then retitled "I need Distributed Integrated Conversion Knowledge (DICK) for my ANUS now!" - 2025-03-27 01:32-01:34 - korbinianmoller - https://github.com/anus-dev/ANUS/issues/80 - the backronym was added after the fact to make it respectable.
73. **"1"** - issue #81, title and body "1" - 2025-03-29 - rsa-ui - https://github.com/anus-dev/ANUS/issues/81
74. **"Leak issues with ANUS"** - issue #84 - 2025-08-06 - ackoi - https://github.com/anus-dev/ANUS/issues/84 - 17 laugh, 4 eyes - five months after the flood, the genre was still alive.
75. **"Need fit() function for ANUS"** - issue #85 - 2025-08-26 - raselldev - https://github.com/anus-dev/ANUS/issues/85 - `fit()` is the scikit-learn training call; the other reading is obvious.
76. **"ANUS is Pulsating"** - issue #86 - 2025-09-23 - VidarrKerr - https://github.com/anus-dev/ANUS/issues/86 - 3 eyes; three words, no body; filed two weeks after the CLI relaunch and exactly one year before the reanimation.
77. **Chess cheating by Morse code** - issue #87 "Chess support?" - 2026-03-10 - jlaguio - https://github.com/anus-dev/ANUS/issues/87 - 2 thumbs up, a "+1" on 2026-05-15 - "I already have a device setup and rearing to go and receive outputs from the tool" - a reference to the 2022 chess cheating scandal meme, filed through the relaunch's own feature-request template.
78. **"Top SEO agencies in delhi"** - issue #88 - 2026-06-08 - an SEO spam account - https://github.com/anus-dev/ANUS/issues/88 - the body contains a link with `utm_source=chatgpt.com` - even the spam was AI-written.
79. **Chinese: "Why does it still have so many stars.... Is this a joke?"** - issue #89 (translated) - 2026-06-22 - daoyuly - https://github.com/anus-dev/ANUS/issues/89 - filled in the relaunch's bug template, including the prompt "$ anus /about" - and the same account lists the repo in 40 of its daily "agent-harness-daily" blog posts (2026-06-01 to 2026-07-29), before and after mocking its name.
80. **"Of course it's in javascript"** - issue #90 - 2026-08-07 - reillykw - https://github.com/anus-dev/ANUS/issues/90 - "Sure, a typed form of javascript, but still, javascript" - the last issue before the reanimation; a language flame war finally reached the repo 17 months late.

### C. Fork names and fork descriptions (source for all: `gh api --paginate repos/anus-dev/ANUS/forks`, 932 entries)

81. **`Photon1c/ANUS-bidet`** - 2025-03-15 - description "The Bridge Interface Dynamic Enhancement Tweak (BIDET) for the ANUS framework" - https://github.com/Photon1c/ANUS-bidet - the hygiene module the project was missing.
82. **`Daelyte/ANUity-claims-to-be-manus-or-ai-based-cornhole`** - 2025-03-15 - https://github.com/Daelyte/ANUity-claims-to-be-manus-or-ai-based-cornhole - a fork name that is also a review.
83. **`eas4ai/MANUS-MADE-ANUS`** - 2025-03-10 - "Manus AI Claude wrapper exploited to produce its architecture" - https://github.com/eas4ai/MANUS-MADE-ANUS ; also `prkasat/manus-made-anus` (2025-03-16) - the origin story as a repo name.
84. **`jddelia/SUNA`** - 2025-03-10 - https://github.com/jddelia/SUNA - ANUS spelled backwards.
85. **`blueoh78/minusANUS`** - 2025-03-11 - https://github.com/blueoh78/minusANUS - Manus minus ANUS, or the reverse.
86. **`Mecheg/MANUS-from-anus`** - 2025-03-10 - https://github.com/Mecheg/MANUS-from-anus - rebuilding the parent from the child.
87. **`alx-rg/MA-Claude-nus`** - 2025-03-10 - "MA-Claude3.7-nus wrapper" - https://github.com/alx-rg/MA-Claude-nus - the rumor that Manus was a Claude wrapper, as a name.
88. **`Anant08/MA-NUS`**, **`ovachiever/-M-anus`**, **`EnnoWigger/-m-ANUS`** ("Manus custom copy"), **`jwallquist/-M-ANUS-agent`**, **`shimalsky/m-anus-fork`**, **`donduck/mANUS`**, **`EugeneS888/mANUS`** - March to June 2025 - putting the M back.
89. **`lookastarik/ANUS69`** - 2025-05-02 - https://github.com/lookastarik/ANUS69
90. **`DustoKinetic/Dusty_anus`** - 2025-05-16 - one star - https://github.com/DustoKinetic/Dusty_anus
91. **`stepanov-a/ANUS_of_llama`** - 2025-05-20 - "For anus agent with adding ollama support" - https://github.com/stepanov-a/ANUS_of_llama - it referenced open PR #45 the same day.
92. **`ZigAUM/NOVA`** - 2025-03-10 - "Networked Operational Virtual Assistant" - a fork that answered the name with a clean backronym of its own. Also `AnkMister/AutoNUS`, `cristy-the-one/ANOS`, `JesseCoxCodes/RUFF`, `protektit/supramus`, `dimsun/ANYSita`, `HiPPoTUS/M` (owner name HiPPoTUS, fork named just "M").
93. **`gaoweiinter/ANUS`** "Manus generated Manus" (2025-03-14), **`datamamba/ANUS`** "ANUSANUS" (2025-03-10), **`8bitramen/ANUS`** "YES" (2025-03-10), **`keerthanagowda001/ANUS`** "too much" (2025-04-02), **`namekun/ai-agent`** "by anus" (2025-03-18) - one-line fork descriptions.
94. **Russian-language fork descriptions** (translated): `s3rgeym/ANUS` "Just a hilarious name" (2025-03-23); `LongardFZ/MANUS` "getting into AI agents" (2025-03-11); `udybv45266/ANUS` renders the acronym as "Autonomous network system of communal utility services" (2025-03-20) - "Utility" translated as the housing-maintenance kind.
95. **Other-language descriptions** (translated): `onlyarche/ANUS` (Korean) "manus-ai jailbreaking version"; `kekewind/ANUS` (Chinese) copies the whole README pitch; `holdgh/ANUS` (Chinese, 2025-07-31) "open-source Agent framework Anus"; `agusmdev/ANUS` (Spanish) "clon de manus".
96. **Name-only clones outside the fork network** found by code search: `yethikrishna/Yethanus`, `tayler-id/ANUS_tr_v`, `galhui/anus`, `dhavalmshah/ANUS`, `ThomasE11/anus-project`, `Judas6/toidiAI`, `JonusNattapong/Chujai`, `Asiphyx/-Autonomous-Networked-Utility-System` - `gh search code "nikmcfly/ANUS"`.
97. **Zero `my-anus` forks** - despite the README rule and issue #71's request - checked across all 932 fork names.

### D. Jokes and mentions elsewhere on GitHub and in newsletters

98. **The funny-names list** - a developer's notes file `pl/funny.txt` lists, in order: `github.com/nikmcfly/anus`, `github.com/edankwan/penis.js`, `github.com/nipatiitti/condomjs` - https://github.com/iharh/notes/blob/main/pl/funny.txt - ANUS filed with its peers.
99. **TWAT and Prostate** - smol.ai AINews 2025-03-12 (Perplexity Discord summary): "one member jokingly suggesting TWAT (Think, Wait, Act, Talk pipeline) as an alternative acronym. Another member proposed Prostate as a government AI agent name" - https://github.com/smol-ai/ainews-web-2025/blob/main/buttondown-emails/25-03-12-ainews-gemma-3-beats-deepseek-v3-in-elo-20-flash-beats-gpt4o-with-native-image-gen.md
100. **"Sorry boss my anus is acting up I need to restart it"** - smol.ai AINews 2025-03-13, Perplexity Discord - https://github.com/smol-ai/ainews-web-2025/blob/main/buttondown-emails/25-03-13-ainews-not-much-happened-today.md
101. **"urAnus" and "manus means hand"** - same AINews 2025-03-12 issue, Cursor Discord: "one user joking that the name choice was questionable given its similarity to 'urAnus', while another user explained that Manus meant 'hand' in Latin".
102. **SAMUS** - a design doc titled "SAMUS: Designing a Semantic Kernel Clone of Manus and ANUS AI Agents" - https://github.com/charleslbryant/nucleus/blob/main/Nucleus/docs/ideas/samus.md - the naming game continues one letter further.
103. **A serious alternative** - Helicone blog on Manus vs Operator lists "Open-source options like OWL and ANUS offer similar functionality with more customization" - https://github.com/Helicone/helicone/blob/main/bifrost/app/blog/blogs/manus-benchmark-operator-comparison/src.mdx
104. **Security newsletter** - AppSec Ezine #578 lists "https://github.com/nikmcfly/ANUS / Description: Anus - Autonomous Networked Utility System." among security links - https://github.com/Simpsonpt/AppSecEzine/blob/master/Ezines/578%20-%20AppSec%20Ezine
105. **University reading list** - a "Frontiers of AI" course module on deep research agents lists ANUS between GPTMe and autoMate, in the 2025-fall and 2026-fall editions - https://github.com/jon-chun/frontiersofai-org/blob/main/2025-fall/modules/ai_deepresearch.md
106. **Awesome lists and link collections** - kimtth/azure-openai-llm-notes ("Anus: Autonomous Networked Utility System ... [Mar 2025]"), gth-ai/awesome-cs-tools, MIAJIA/awesome-agent-hub (`data/nikmcfly-anus.json`), Cypherpunk-Labs/artificial-development-tools ("inspired by manus"), tools-only/X-Skills, dwarvesf/brainery ("open source projects we are interested in exploring: anus: agent framework"), tarlepp/links-of-the-week 2025 (listed right under "A 10x Faster TypeScript"), AnthonyHerman/ai-security-corpus (2026-09-04) - `gh search code "nikmcfly/ANUS"`.
107. **A Korean study plan** - "Run the open-source version of Manus: (1) OpenManus (2) nikmcfly/ANUS" (translated) - https://github.com/Hakguri/WiseSaying-bot/issues/7 (2025-05-15).

## People

Public GitHub profile data only (name, bio, follower count as of 2026-09-24) - `gh api graphql` user lookups for all 7,324 accounts that starred, forked, opened or commented; "star #N" is the position in the stargazer list.

### Founders and code contributors

- **Nik McFly** (`nikmcfly`, X `@nikmcfly69`, 142 followers) - created the repo and its first commit (2025-03-09), merged the only three external PRs (2025-03-11), posted the launch on X. GitHub bio: "Shitposting. Shitposting never changes. Author of The Anti-AI Brain." Later project: `nikmcfly/MiroFish-Offline` (created 2026-03-14, 2,539 stars at check) - `gh api users/nikmcfly`; `gh repo list nikmcfly`.
- **Eugene Shilov** (`eugeneshilow`, commits signed "Eugene Shilow", 44 followers) - author of "THE HOLE ENCHILADA" (2025-03-09), the Discord cleanup (2025-03-16), "Let there be ANUS" and v0.1.0 (2025-09-05); top contributor by the contributors API (5). Named as the human overseer in the reanimation branch's `AGENTS.md` - `gh api repos/anus-dev/ANUS/contributors`.
- **Siwoo Kim** (`codeup38`, KMU InfoSec Lab) - issue #13 and PR #15, the first community fix (4 commits) - https://github.com/anus-dev/ANUS/pull/15
- **Ikko Eltociear Ashimine** (`eltociear`, 1,811 followers, "AI-driven developer @ Tokyo") - PR #14 "docs: update getting_started.md" - https://github.com/anus-dev/ANUS/pull/14
- **Straughter Guthrie** (`jmanhype`, 155 followers) - PR #4, the largest external code contribution (+952/-342) - https://github.com/anus-dev/ANUS/pull/4

### Issue-tracker regulars

- **Eric Hartford** (`ehartford`, 944 followers, "I make AI models like Dolphin and Samantha") - fork, PR #72 with ASCII art, issue #73 "needs lubrication?", 2025-03-15.
- **Dr Keith Grimes** (`DrKGrimes`, bio: GP and founder of a clinical innovation consultancy) - issue #12 "The name", 2025-03-10.
- **Qubitium** (`Qubitium`, 111 followers, "GPTQModel maintainer") - issue #71 "local-anus or my-anus possible?".
- **Axel H.** (`noirbizarre`, 288 followers) - issues #60 (BUTT) and #61 (shitshow), SPHINCTER and the "has a hole" comments: the most prolific joker (2 issues, 2 comments).
- **Spaceguybox** - BUTT (Block Unauthorized Tunnel Traffic) on #43 and Tetanus on #49 (34 laugh reactions across two comments).
- **Dolyetyus** - issue #36 LUBE, the most reacted item in the repo.
- **Evgenii Alekseev** (`arcan1s`) - issue #24 WHERE IS EXE.
- **borzale** - issues #42 (fluid) and #65 (IBS), comment tying #51 to #52.
- **Julian Harris** (`boxabirds`, 123 followers) - "Particularly vulnerable to back door attacks." on #43.

### Notable stargazers (by GitHub followers)

- `rexim` - Alexey Kutepov, "Recreational Programming" (the Tsoding streamer), 14,525 followers - star #2,817, 2025-03-12.
- `swisskyrepo` - Swissky, "Red Team Operator & Bug Hunter", 10,914 followers - 2025-03-15.
- `murapadev` - Pablo RM, 7,365 followers - 2025-03-12.
- `rochacbruno` - Bruno Rocha, Principal Software Engineer at Red Hat, 4,689 followers - 2025-07-30 (second wave).
- `koala73` - Elie Habib, 4,337 followers - 2025-03-10.
- `devxoul` - Jeon Suyeol, 4,032 followers - 2025-03-10.
- `mrexodia` - Duncan Ogilvie, creator of x64dbg, 3,908 followers - 2025-03-15.
- `ipenywis` - Islem Maboud, 3,066 followers - 2025-03-14.
- `milanm` - Dr Milan Milanovic, "Helping 400K+ engineers grow", 2,832 followers - 2025-03-10.
- `elie222` - Elie Steinbock, building Inbox Zero, 2,530 followers - 2025-03-17.
- `FernandaOchoa` - Senior Security Consultant at Google, 1,959 followers - 2025-03-14.
- `PThorpe92` - Preston Thorpe, PlanetScale, 1,555 followers - 2025-03-13.
- `refcell` - Andreas Bigger, Base, 1,296 followers - star #92, 2025-03-09 23:59 (launch day).
- `Freelander` - GoJun, GitHubDaily, 1,214 followers - 2025-03-15.
- `codefromthecrypt` - Adrian Cole, Netflix, 907 followers - 2025-03-19.
- `auxten` - Auxten Wang, ClickHouse, 992 followers - 2025-03-15.
- `kilimchoi` - Kilim Choi, 807 followers - star #53, 2025-03-09.
- `chrismessina` - Chris Messina, "Hashtag inventor, #1 Product Hunter", 744 followers - star #852, 2025-03-10.
- `thatfiredev` - Rosario P. Fernandes, Firebase DevRel at Google, 675 followers - 2025-03-13.
- `davidorban` - David Orban, 22 followers on GitHub (known futurist) - star #15, 2025-03-09 21:47, among the first twenty.
- `rmdes` - Ricardo, star #1, 2025-03-09 19:44.
- `nikmcfly` - the founder, starring his own repo on 2025-09-01.

### Notable forkers and amplifiers

- `gmh5225` (1,276 followers) - fork 2025-03-16.
- `0xSojalSec` - MD Ismail Sojal (999 followers) - fork 2025-10-20, the most-starred fork (27).
- `rescenic` (1,335 followers) - star and fork 2025-09-28.
- Tom Doerr (`tom-doerr`, 1,422 GitHub followers, X `@tom_doerr`) - repo-of-the-day post 2025-07-29 that coincides with the second star wave - https://github.com/tom-doerr/repo_posts/blob/main/docs/_posts/2025-07-29-nikmcfly-ANUS.md
- `daoyuly` - issue #89 mocking the name (2026-06-22) while listing the repo in 40 daily blog posts (2026-06-01 to 2026-07-29).

## Not found / doubtful

- **"Number 4 on global GitHub trending, March 2025" - not confirmed.** Checked on 2026-09-24:
  - 30 Wayback captures of `github.com/trending` (all languages, daily) between 2025-03-10 04:39 and 2025-03-15 09:31 UTC: `nikmcfly/ANUS` is absent from every one - `curl "https://web.archive.org/cdx/search/cdx?url=github.com/trending&from=20250309&to=20250316"`, then the `id_` raw captures parsed for `<article class="Box-row">`.
  - Also absent from captured weekly (2025-03-11, 2025-03-20), monthly (2025-03-29), Python daily (2025-03-13), Python weekly (2025-03-11) and English-language (2025-03-12) trending pages, and from the scraper archives `antonkomarev/github-trending-archive` and `bonfy/github-trending` for 2025-03-09 to 2025-03-20.
  - Strong caveat: the same captures also omit OpenManus, the most starred new repo of that week, and list only 11 to 17 repos instead of 25. In March 2025 the public trending page seems to have left out very new repos (or served crawlers a reduced list), so absence is weak evidence. The claim stays "owners' statement, unverified". What is verified: number 1 of all repos created that day by stars (2025-03-09 23:48 snapshot), numbers 2-3 in a daily new-repos-by-stars archive, and official Python trending in late July / early August 2025 (daily rank 16, weekly 9-11).
  - A post on X (2026-04-24) says ANUS is "topping the GitHub leaderboard"; no star spike or archive supports it at that date.
- **Trendshift / star-history / ossinsight**: trendshift.io search for ANUS returned 404 (no repository page found); ossinsight.io has a page for `anus-dev/ANUS` but shows stale totals (6,203 stars, 937 forks) and no trending rank. star-history.com was not fetched (chart-only site); the full star curve above is built from the API instead.
- **Issues #3 and #68**: both return 404 on REST and GraphQL; content, author and date unknown (deleted issues or issues from flagged accounts).
- **Hidden comments**: issue #62 reports 3 comments but only 2 are returned; one comment on #51 is by a deleted account (`ghost`); the quote "the name is terrifying when you speak french..." is cited in #12 but its original comment is not in the thread.
- **Un-stars**: the stargazer list only holds current stargazers; people who removed their star (for example the comment "taking my star back..." on #17) are invisible, so all early counts are lower bounds.
- **Transfer date** from `nikmcfly/ANUS` to `anus-dev/ANUS`: not exposed by the API; inferred as 2025-09-05 (organization created 07:25 UTC, relaunch commits at 11:06 reference `anus-dev` URLs).
- **Causes of later spikes** (2025-11-16: 30 stars; 2026-05-15: 65; 2026-08-07/08: 65): not identified. The 2026-08-08 Discord capture of the repo link (cogos) and issue #90 (2026-08-07) are only coincidences in time.
- **Second wave cause**: Tom Doerr's repo post (dated 2025-07-29 21:46, timezone not stated) and the star climb that started 19:00 UTC the same day coincide; causation is plausible, not proven. His X post was not checked (X scout's lane).
- **Launch post on X** (`@nikmcfly69`, 2025-03-09 18:56 UTC by id): time derived from the post id; text not verified here.
- **Product Hunt listing**: known only from a third-party crawl dated 2025-04-06; the listing page itself was not opened; launch date and votes unknown.
- **`anus-ai.github.io`, `discord.gg/anus-ai`, `reddit.com/r/anus_ai`, `twitter.com/anus_ai`**: current state not checked (hallucinated in the first README; the Discord invite was squatted per issues #8 and #16).
- **Repo `updated_at` 2026-09-23 12:31 UTC**: something changed repository metadata that day; not identified (no push, no new star, no new issue).
- **Code search coverage**: `gh search code "nikmcfly/ANUS"` reports 162 hits and all were listed; `"anus-dev/anus"` hits are almost all inside the repo. GitHub code search does not index every file, so external mentions are incomplete.
- **namu.wiki**: 23 referral visits in September 2026 from a Korean wiki; the page that links the repo was not found by web search.
- **Hacker News thread** ("18 points" per the owners' notes) and all X, Reddit, Threads and press items: other scouts' lanes, not checked here.
