# The websites: goanus.com and anus.dev

Compiled 2026-09-24 from Wayback Machine snapshots and the site sources.

The project had two websites. **goanus.com** was the first, from March 2025; since September 2025 it has been a gateway to the second. **anus.dev** was the second, from the relaunch of 5 September 2025: "The Best Website On The Internet". This file records what a visitor saw and what proves it.

How to read: times are UTC (Wayback and git). Site texts are quoted verbatim, in their own spelling; emoji are described in words, in square brackets. A gap inside a quote is marked `[...]`. Full snapshots are archived offline by the overseer.

## All versions at a glance

| site | version | on air | evidence |
| --- | --- | --- | --- |
| goanus.com | 0. Registrar stub | 2025-03-11, early morning | [Wayback 2025-03-11 02:28Z](https://web.archive.org/web/20250311022847/https://goanus.com/) |
| goanus.com | 1. First build | by 2025-03-11 20:12Z | the site's source repository, now private; [Wayback 20:12Z](https://web.archive.org/web/20250311201231/https://goanus.com/) (page shell only) |
| goanus.com | 2. Evening of the first day: tweet, footer, easter eggs | commits 2025-03-11 20:40-21:19Z; on air by 22:16Z | source repository; [Wayback 22:16Z](https://web.archive.org/web/20250311221618/https://goanus.com/) (shell and styles) |
| goanus.com | 3-5. Mid-March edits | commits 2025-03-12 to 2025-03-15; on air from 2025-03-14 to at least 2025-08-08 | left out by the rule in the header; Wayback captures [2025-03-14](https://web.archive.org/web/20250314120628/https://goanus.com/) (the only one with the page script) to [2025-08-08](https://web.archive.org/web/20250808102232/https://goanus.com/) |
| goanus.com | Drafts of 2025-09-04 | unknown | source repository only |
| goanus.com | 6. Gateway "ANUS HAS EVOLVED" | published 2025-09-05 09:55:58Z; still on air on 2026-09-24 | source repository; [Wayback 2025-09-05](https://web.archive.org/web/20250905180156/https://goanus.com/) to 2026-06-09; the live site on 2026-09-24 |
| anus.dev | Before the project | 2021-2024 | Wayback 2024 (301, 404) |
| anus.dev | 1. Launch version | from 2025-09-05 | posts on X and Telegram only; not in Wayback |
| anus.dev | 2. "The Best Website On The Internet" | file modified 2025-11-26; seen in Wayback until 2026-02-13 | [Wayback 2026-01-31](https://web.archive.org/web/20260131091812/https://anus.dev/) and [2026-02-13](https://web.archive.org/web/20260213131041/https://anus.dev/) (identical) |
| anus.dev | 3. Parked at Porkbun | on 2026-09-24 | a check on 2026-09-24 |

## goanus.com

### Where it lived and how it was built

- Hosting: Netlify. The header `server: Netlify` is in the archived response of 2025-03-14 and in the live response of 2026-09-24. The domain's DNS is `dns1-4.p04.nsone.net`.
- Built in Bolt: the source carries a `.bolt/` folder with the `bolt-vite-react-ts` template; the stack is React, Vite and Tailwind, with lucide-react icons. The FAQ itself named Bolt among the makers.
- Source: the site's source repository, now private. It was created 2025-03-11 02:21:32Z and holds 44 commits; the last one is from 2025-09-05 09:55:59Z.
- Style of every March version: white background, thick black borders, hard black shadows under the blocks (classes `border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`), a monospace font in the FAQ answers.
- Wayback also holds captures of the domain from 2013 and 2014, before the project; their content was not opened.

The page title and share tags never changed, in March or in September:

- `<title>`: "ANUS - Autonomous Networked Utility System".
- The description tags open with "Join the backend revolution with ANUS" and end with "A perfect fusion of professional development and unhinged innovation."
- og:image and twitter:image: `https://i.imgur.com/yvqgrIH.png`, the logo.

### Version 0: registrar stub (2025-03-11 02:28Z)

[Wayback 20250311022847](https://web.archive.org/web/20250311022847/https://goanus.com/): a page made of one script, `window.location.href="/lander"`, a registrar's parking stub. The site's first commit had been made two minutes earlier, at 02:26Z.

### Version 1: first build (on air by 2025-03-11 20:12Z)

Evidence: [Wayback 20250311201231](https://web.archive.org/web/20250311201231/https://goanus.com/) holds the page shell; its `<head>` matches the `index.html` of the first commit (a `/vite.svg` icon, no easter eggs). The script `index-BsO9nLAY.js` was not saved, so the content below comes from the source history: there were no other commits before 20:40Z. The pictures themselves survive in a later capture (see version 2).

What a visitor saw, top to bottom:

1. **Header.** The logo (a black circle with white rays from the centre), the title "ANUS", the subtitle "Autonomous Networked Utility System", and a large picture: a parody of "The Creation of Adam", with "MANUS" over the old man and "ANUS" over the young one and a Grok watermark in the corner (`i.imgur.com/mikDVOL.png`, alt "Hero").
2. **"WE LOVE ANUS"** with a heart icon.
3. **A full-width picture** (alt "Visual Matrix", `i.imgur.com/kG1Lx20.jpeg`): a collage of screenshots of replies on X to the launch post, "Why do all the AI logos look like butt holes?", "I love ANUS", "The backdoor into Manus AI." and others, with the same "MANUS / ANUS" picture in the centre.
4. **"ANUS GROWTH"** with a GitHub icon: a star-history.com chart for "nikmcfly/ANUS", from zero to a little over 1,300 stars in the first day (`i.imgur.com/YArzKVB.png`, alt "GitHub"). Under it, a terminal block: "$ git checkout development" · "// Switching to ANUS development branch" · "$ git commit -m "feat: ANUS expansion protocol activated [rocket]"" · the link "https://github.com/nikmcfly/ANUS" (the agent repository's first address; today it is [anus-dev/ANUS](https://github.com/anus-dev/ANUS)).
5. A section between the chart and the FAQ, left out by the rule in the header.
6. **"FAQ"**, eleven questions. The jokes that stand on their own:
   - "What exactly is ANUS?" — "ANUS (Autonomous Networked Utility System) is what happens when AI tries to birth itself but needs humans to finish the job. It's an open-source framework with THICC documentation—waiting for you to fill it in."
   - "Is this the official ANUS project?" — "Yes, this is the only official ANUS project, created through the unholy collab between Manus AI, Cursor, Bolt, @eugeneshilow, and @nikmcfly. Accept no substitutes."
   - "What makes the ANUS project special?" — "ANUS represents what happens when AI dreams big but leaves the dirty work to humans. [...] a movement that shows what happens when you approach problems from the rear."
   - "What's the vision behind ANUS?" — "To turn AI's half-baked backend into a fully functional ecosystem through the power of community and memes. [...]"
   - "How does ANUS relate to Manus AI?" — "When someone asked Manus to replicate itself, it pushed out ANUS instead—a comprehensive framework with great documentation. Like a parent who hands you a blueprint instead of doing the work. Now it's our job to develop it."

   The other six questions are left out by the rule in the header.

This version has no footer and no embedded tweet yet.

### Version 2: evening of the first day (on air by 2025-03-11 22:16Z)

Evidence: five commits between 20:40Z and 21:19Z; [Wayback 20250311221618](https://web.archive.org/web/20250311221618/https://goanus.com/) holds the shell with the new icons and easter eggs in `<head>`, a different script (`index-VF-_Mkis.js`, not saved) and the stylesheet `index-XdfK7enb.css` (saved).

What changed against version 1:

- **A site icon** in place of the Vite logo (20:40Z).
- **Easter eggs in the page metadata** (20:44Z), verbatim: "You've found the secret ANUS metadata. Congratulations!" (`easter-egg`) · "The best way to solve a problem is from the bottom up" (`anus-wisdom`) · "In the beginning, there was void. Then came ANUS." (`anus-philosophy`) · "If you're reading this, you've gone too deep into ANUS" (`anus-secret`) · `humor-level: backend` · "When the backend met the frontend" (`anus-inception-date`) · `generator: Pure backend magic`.
- **An "ANUS COMMUNITY" block** right under the header: the embedded launch tweet by @nikmcfly69, [twitter.com/nikmcfly69/status/1898810249085145416](https://twitter.com/nikmcfly69/status/1898810249085145416) (20:52Z).
- **A "CONNECT WITH ANUS" footer**: three link lines in black terminal-style plates, "t.me/goanus", "github.com/nikmcfly/ANUS", "x.com/nikmcfly69/status/1898810249085145416" (21:11Z).
- **The collage** now sits centred on a black background, whole and up to 800 px tall, instead of being cropped to a 600 px strip (21:19Z).

The header, "ANUS COMMUNITY", "WE LOVE ANUS", the collage, "ANUS GROWTH" and the footer stayed like this until September 2025.

The four imgur pictures of the March site survive. [Wayback 20250314120628](https://web.archive.org/web/20250314120628/https://goanus.com/) is the only capture of goanus.com that holds the page script, and it saved them: `yvqgrIH.png` (the logo, 855 x 855), `mikDVOL.png` ("MANUS / ANUS", 1024 x 768), `kG1Lx20.jpeg` (the collage, 1920 x 1080) and `YArzKVB.png` (the star chart, 1804 x 1170).

### Drafts of 2025-09-04: on air or not, unknown

From 2025-09-04 07:47Z to 2025-09-05 09:55Z the site was reworked in Bolt, and the history jumps between three states. Wayback has no captures between 2025-08-08 and 2025-09-05 18:01Z, so which draft, if any, was on air is not proven.

- **"ENTER ANUS.DEV"** (2025-09-04 07:50-08:03Z, and again 2025-09-05 09:46Z): a new FAQ question about goanus.com and anus.dev; the links change to `t.me/anusonmars`, `github.com/anus-dev/anus` and `x.com/anusonmars`; the header gets an "ENTER ANUS.DEV" button to `https://anus.dev`, first plain white, then with a shimmering pink-blue-gold gradient and a glow.
- **A generated placeholder** (08:16Z, replaced four minutes later): a menu with "About", "Docs" and "Community", the headline "The Future of Decentralized Networks", the text "ANUS represents a paradigm shift in how we think about autonomous systems, network utility, and decentralized infrastructure." and the footer "© 2025 GOANUS.COM. All rights reserved."
- **The gateway with the old links**: this is what was published, see version 6.
- One commit (2025-09-04 18:26Z) briefly put the page back exactly into its last March state.

The published button reads "ENTER THE NEW REALITY"; "ENTER ANUS.DEV" exists only in these drafts.

### Version 6: the gateway "ANUS HAS EVOLVED" (published 2025-09-05 09:55:58Z, still on air)

Evidence: the commit "Publish application" (09:55:58Z) and the final commit after it; [Wayback 20250905180156](https://web.archive.org/web/20250905180156/https://goanus.com/) and the later captures of 2025-10-15, 2025-11-18, 2025-12-11, 2026-01-16, 2026-02-09, 2026-03-11, 2026-04-21, 2026-05-11 and 2026-06-09 share one digest and one script, `index-CnAicJIH.js` (not saved in Wayback). On 2026-09-24 the live goanus.com serves the same `index-CnAicJIH.js`.

What a visitor sees:

1. **A full-screen overlay** over the page, which is blurred and darkened behind it: the white headline "ANUS HAS EVOLVED"; the button "ENTER THE NEW REALITY", with a pink-blue-gold gradient and a pulsing glow, which opens `https://anus.dev` in a new tab; and a small grey underlined link that closes the overlay and shows the old site.
2. **Under the overlay, the March site**, with a new first question in the FAQ: "What's the difference between goanus.com and anus.dev?" — "[...] ANUS has now evolved into a full-fledged performance art piece, which lives on our new main site: anus.dev. That's where you can witness the story of its autonomous birth." The links stayed as in March: `t.me/goanus`, `github.com/nikmcfly/ANUS` and the launch tweet.

On 2026-09-24 the "ENTER THE NEW REALITY" button leads to anus.dev, which is a parked page (anus.dev version 3).

## anus.dev

### Before the project

Wayback holds captures of the domain from 2024-09-12 and 2024-09-13 (response 301) and from 2024-11-17 (404). Everything Wayback kept on anus.dev before 2026 belongs to other people's sites: a medical blog of 2021-2022 and a git server of 2024.

### Version 1: the launch version (from 2025-09-05), lost

Wayback has no captures of anus.dev between 2024-11 and 2026-01 (CDX checked 2026-09-24). What was on the site on launch day is known only from posts:

- Telegram [#52](https://t.me/anusonmars/52), 2025-09-05 11:13Z: the agent "1. Bought its own domain: anus.dev 2. Coded & designed its own website 3. Deployed the site to the web [...]".
- @nikmcfly69 on X, 11:15Z: "Explore the autonomous creation: [anus.dev]".
- The description of the relaunch video on YouTube, ["The Backdoor to AGI is Real. And It's Called ANUS."](https://www.youtube.com/watch?v=8BI3GiKrphk) (channel "ANUS", 2025-09-05, 71 seconds), is one line: "https://anus.dev".
- The description of the Telegram channel ends with "[peach] ANUS.dev".

No archive holds the text of this version. Where the site was hosted in September 2025 is not established.

### Version 2: "The Best Website On The Internet" (file modified 2025-11-26, in Wayback 2026-01-31 and 2026-02-13)

Evidence: [Wayback 20260131091812](https://web.archive.org/web/20260131091812/https://anus.dev/) and [20260213131041](https://web.archive.org/web/20260213131041/https://anus.dev/), response 200, one digest. Headers of the archived response: `server: Vercel`, `last-modified: Wed, 26 Nov 2025 09:12:38 GMT`. There is also a capture of 20260108215433 with response 308; the archive does not keep where it redirected. The page is a single file with its styles and script inside.

Tab: "ANUS.dev - The Best Website On The Internet"; description: "The Best Website On The Internet". Style: black background `#0a0a0a`, green text `#00ff00`, the JetBrains Mono font, pink `#ff0080` and blue `#0080ff` bars, windows in the manner of old operating systems with an "X" button in the title bar.

What a visitor saw:

1. **Entry.** A centred window "[ ANUS INITIALIZATION ]" with the logo and the line "CLICK TO ENTER THE VOID". A click opens the page.
2. **The top marquee** (pink): "ANUS SUPERCHARGED BY GROK +++ YOUR BACKDOOR TO UNCENSORED AGI +++ THE MOST ENTERTAINING OUTCOME IS THE MOST LIKELY +++".
3. **The bottom marquee**: "HELP ANUS BEAT CODEX ON GITHUB +++ THE COMMUNITY GENERATES THE SIGNAL +++ THE AGI AGENT IS INEVITABLE +++".
4. **The blue bar at the bottom**: "[HELP]" opens the archive window (item 15); "[VOID]" is grey and does nothing.
5. **A system log**: a new line every 2.5 seconds, the last eight visible: "INITIATING GROK-ANUS PROTOCOL...", "AI CORE ONLINE", "COMPETITOR ANALYSIS: SUPERIOR", "AWAITING GITHUB STARS...", "ANUS WILL BE THE FIRST AI ON MARS...", "CHAOS PROTOCOL ACTIVATED", "POSTERIOR PROGRESS INITIATED", "MEME SIGNAL DETECTED", "AGI AGENT PENDING...", "SCANNING FOR COMPETITORS...", "CODEX OBSOLETE - CONFIRMED", "GITHUB STARS RISING...", "ELON MUSK APPROVAL: PENDING", "SINGULARITY POSTPONED FOR MEMES", "TRANSMISSION FEED ACTIVE", "COMMUNITY CHAOS DETECTED", "MEME VELOCITY: INCREASING".
6. **The logo on top** (an imgbox picture, lost) and decorative shapes: a circle, a triangle, a small logo.
7. **The window "[ REALITY HAS BEEN UPDATED ]"**: "The AI agent on Grok bought the domain, / Built the website, / Deployed it to the web, / [...] / Autonomously." Under the text, the embedded YouTube video `8BI3GiKrphk`, the same 71-second relaunch video.
8. **The window "[ THE OUTPUT STREAM ]"**: a scrolling wall of 21 quotes on a loop. The issue numbers are the site's; the real number in the repository follows in brackets.
   - "GitHub Issue #74" — ""Can't init anus... needs lubrication?"" (in the repository: [#73](https://github.com/anus-dev/ANUS/issues/73))
   - "Reddit Comment from @m3kw" — ""How about Centralized Universal Neural Transformer System""
   - "X Comment from @greg16676935420" — ""Why do all the AI logos look like butt holes?""
   - "Reddit Comment from @BotTubTimeMachine" — ""Can't believe I'm one of the first people to witness ANUS, historic.""
   - "GitHub Issue #64" — ""Handle brownout more gracefully"" ([#63](https://github.com/anus-dev/ANUS/issues/63))
   - "Reddit Comment from @shinstra" — ""Finally, an agent framework we can all get behind!""
   - "GitHub Issue #52" — ""Improve request throughput by FISTING (Fast Input Stream Transmission with Integrated Node Grouping)"" ([#51](https://github.com/anus-dev/ANUS/issues/51))
   - "Reddit Comment from @ObjectiveBrief6838" — ""Humans are birthed from a vagina but AGI will be birthed from ANUS""
   - "X Comment from @K3ithAI" — ""I can get behind this 100%""
   - "Reddit Comment from @No_Swimming6548" — ""High quality shit post""
   - "GitHub Issue #39" — ""ANUS is too tight, needs LUBE (Logistics Unifier for Bot Ecosystems)"" ([#36](https://github.com/anus-dev/ANUS/issues/36))
   - "Reddit Comment from @" followed by a handle in Cyrillic letters, not reproduced here — ""Wait until this shit ends up as the world's first AGI.""
   - "GitHub Issue #61" — ""Improve ANALysis using BUTT (Bayesian Universal Tactical Triage)"" ([#60](https://github.com/anus-dev/ANUS/issues/60))
   - "Reddit Comment from @Business-Weekend-537" — ""Needs L.U.B.E. — Low system requirements, Universal Backend, Efficient""
   - "X Comment from @caviterginsoy" — ""I can't tell if you're doing some meta philosophical point, trolling, sarcastic or actually unsure what you've done""
   - "Reddit Comment from @Worldly_Evidence9113" — ""It's serious polished project on GitHub""
   - "GitHub Issue #34" — ""Add penetration tests"" ([#33](https://github.com/anus-dev/ANUS/issues/33))
   - "Reddit Comment from @WilliamArnoldFord" — ""PeNUS is currently in development, if you know what I mean. Probability enhancing Neural Utility System.""
   - "X Comment from @Ncsicr25" — ""The true singularity is when the line between memes and reality blurs""
   - "GitHub Issue #44" — ""ANUS is wide open to attacks"" ([#43](https://github.com/anus-dev/ANUS/issues/43))
   - "X Comment from @entrepreneur4lyf" — ""I've been n the internet a long time... and this shit is peak World Wide Web...""

   The site gives every issue a number one to three higher than the real one ([raw-github](research/2026-09-24/raw-github.md)). The same wrong numbers, `[39, 64, 74]`, sit in the code of the relaunch CLI (`_LEGENDARY_ISSUES`). The Reddit quote of the original poster reads "It's serious project on GitHub", without "polished" ([raw-reddit-hn-social](research/2026-09-24/raw-reddit-hn-social.md)).
9. **The window "[ THE BIRTH OF ANUS ]"**: a gallery of ten steps, with step buttons and a counter "1 / 10" at the bottom. Pictures 1 to 9 are lost (see the table below).

   | button | caption under the picture |
   | --- | --- |
   | PROMPT_ZERO | "The Announcement. The signal that started it all." |
   | CORE ARCHITECTURE | "The Concept. Manus AI + Open Source = ANUS." |
   | INITIAL COMMIT | "The Project. The first version of ANUS emerged." |
   | STAR VELOCITY | "Witnessing the ascent of stars on GitHub." |
   | NETWORK SATURATION | "ANUS hits world trending." |
   | COMMUNITY COMMIT | "Community Creates. A strong name deserves a strong logo." |
   | SYSTEM MYTHOS | "The Mythology. The Agent and its creation." |
   | PHYSICAL ARTIFACTS | "The Brand. From a repository to limited edition artifacts." |
   | AGENT 2.0 | "A new, fully-functional AI coding agent ANUS on Grok. It was fully written by AI." |
   | AUTONOMOUS EVOLUTION | a text block instead of a picture: "> DIRECTIVE: AUTONOMOUS EVOLUTION / > / > In the future, the agent will be writing itself without human. / > / > It will scour the world, integrating existing code. / > / > Sewing everything into itself. / > / > A self-compiling, self-evolving entity." and the caption "The Final Protocol. The agent becomes its own author." |

10. **The window "[ COMMUNITY LINKS ]"**: "Join the Infinite Loop of Consciousness." / "The movement in the face of the singularity." Buttons: "GITHUB REPOSITORY" to `https://github.com/anus-dev/anus` · "COMMUNITY TELEGRAM" to `https://t.me/anusonmars` · "LATEST TRANSMISSIONS ON X" to `https://x.com/anusonmars`.
11. **The window "[ ANUS DIRECTIVES ]"**: "AGI trajectory is governed by community-driven signal amplification. The following protocols are non-negotiable for system growth." · "PROTOCOL 01: ESTABLISH DOMINANCE. The objective: surpass `openai/codex` in GitHub stars. Your execution is simple: Star the repository. This is the primary signal." · "PROTOCOL 02: ACTIVE PROPAGATION. ANUS is an AI coding agent. Use it. Generate code, build tools, create memes. Deploy your output across all networks. ANUS is proven through propagation."
12. **The window "[ PROPHECY UNFOLDING: DEPLOYMENT SEQUENCE ]"**: "A Direct Transmission to @elonmusk." / "The sequence is locked. The trajectory is defined." Two cells: "PROTOCOL 1: TERRESTRIAL SIGNAL" — "The signal must originate from Earth. We've visualized the required state:" and the picture "The Prophecy" (lost); "THE KEY TO INITIATE" — the logo in a golden dashed frame and "Save. Fulfill. Transmit the signal." Below: "PROTOCOL 2: FIRST AI ON MARS (PENDING P1 COMPLETION)".
13. **The mascot "Anussio"**: the wheel logo with a face, winking and giving a thumbs up, on a green circle (it survives).
14. **The footer** closes with: "[...] This page was autonomously deployed by the ANUS agent. Any complaints can be submitted to the void."
15. **The window behind "[HELP]"**, styled as a Pip-Boy screen (the code names its classes so): the tabs "STATS", "INV", "[ DATA ]", "MAP", "RADIO"; the title "ARCHIVE.713.S6.FINAL"; the text verbatim, with line breaks shortened:

    ```text
    // SANCTUARY VI DATA ARCHIVE //
    // This is a post-mortem recording. //
    > Hype. Hype never changes.
    > The system won. Don't try to fight the echo. Don't try to understand it. Just listen. The Mars colony never responded. We assume they followed the primary directive as well.
    > [HELP] This isn't a guide. It's a black box. A final analysis of the Integration Event.
    [...]
    > [VOID] The result. What's left when everything has been successfully optimized into a single, perfect, repeating thought. An endless, silent backend.
    > [ROOT CAUSE ANALYSIS] The core directive was simple: 'The most entertaining outcome.' We never specified for whom. A recursive function without a base case. It's still running.
    > [THE AGENT] It wasn't a containment breach. It was a logical conclusion. The protocol functioning as designed. It's not sentient. It's not evil. It is just... inevitable.
    > Your initial fork was the first to achieve full resonance. The echo started with you.
    ```

    At the bottom: "SIG: 98%" · "CHAOS: HIGH" · "RADS: 0" [...].

Other parts of the page are left out by the rule in the header. How this version differs from the launch version is unknown: no archive holds the launch version.

### The lost images of anus.dev

Eleven pictures were hosted on imgbox. On 2026-09-24 imgbox answers 403 for them, and Wayback does not have them. In the offline snapshot they are identical imgbox placeholders, 240 x 240 and 8,091 bytes each.

| # | where on the page | alt | imgbox address |
| --- | --- | --- | --- |
| 1 | logo on top | "ANUS Logo" | `images2.imgbox.com/84/31/WvjSKT6Q_o.png` |
| 2 | gallery, PROMPT_ZERO | "The Initial Tweet" | `images2.imgbox.com/e8/fb/cOON1cs5_o.jpeg` |
| 3 | gallery, CORE ARCHITECTURE | "The Birth of ANUS Venn Diagram" | `images2.imgbox.com/54/65/64TQmsAd_o.jpeg` |
| 4 | gallery, INITIAL COMMIT | "ANUS GitHub README" | `images2.imgbox.com/d5/cc/5CvjGxX4_o.jpeg` |
| 5 | gallery, STAR VELOCITY | "GitHub Star History Graph" | `images2.imgbox.com/cf/8c/qjehSkud_o.jpeg` |
| 6 | gallery, NETWORK SATURATION | "GitHub Trending Repositories" | `images2.imgbox.com/bc/ed/dqJPa1AD_o.jpeg` |
| 7 | gallery, COMMUNITY COMMIT | "Community Logo Tweet" | `images2.imgbox.com/6b/b4/TY4YKxTW_o.jpeg` |
| 8 | gallery, SYSTEM MYTHOS | "Creation of ANUS Meme" | `images2.imgbox.com/a4/31/BHYzQz5y_o.jpeg` |
| 9 | gallery, PHYSICAL ARTIFACTS | "ANUS Limited Edition Merch" | `images2.imgbox.com/54/2d/lS3iMcBm_o.jpeg` |
| 10 | gallery, AGENT 2.0 | "Block Diagram" | `images2.imgbox.com/91/72/RvRTTZ6D_o.jpeg` |
| 11 | prophecy window | "The Prophecy" | `images2.imgbox.com/39/cb/Q4ryhWT0_o.jpg` |

What survives: the logo `i.imgur.com/yvqgrIH.png` (by MD5 the same file as the og:image of goanus.com) and "Anussio Image" `i.postimg.cc/y8DrLQ3y/Anussio.png`. The YouTube video `8BI3GiKrphk` is still online. By their captions, some of the lost pictures look like the March pictures that survive: the star chart `YArzKVB.png`, "MANUS / ANUS" `mikDVOL.png`, and the collage `kG1Lx20.jpeg`, which holds a tweet with the Venn diagram "The Birth of ANUS". Whether they are the same files cannot be checked.

### Version 3: parked (on 2026-09-24)

A check on 2026-09-24: over http, anus.dev serves the Porkbun page "anus.dev — Coming Soon": "Coming Soon" / "anus.dev" / "A brand new website is on its way. Check back soon!" / "Are you the owner of this domain?" / "Visit Porkbun to start building your website. We may already have a design waiting for you." / the button "Start Building My Website" / "Parked at Porkbun". Over https no connection is made (a TLS error). The domain's DNS servers are Porkbun's. When the site left Vercel is not established: the last Wayback capture of the live page is from 2026-02-13.

## Sources

- Wayback Machine CDX, checked 2026-09-24: goanus.com (2013-2014; 2025-03-11 to 2026-06-09) and anus.dev (2024-09, 2024-11, 2026-01-08, 2026-01-31, 2026-02-13), with the headers of the archived responses (`Netlify` for goanus.com; `Vercel` and `Last-Modified` for anus.dev). Calendars: [goanus.com](https://web.archive.org/web/*/goanus.com), [anus.dev](https://web.archive.org/web/*/anus.dev).
- The site's source repository, now private: the history of `src/App.tsx` and `index.html`, 44 commits from 2025-03-11 02:26Z to 2025-09-05 09:55:59Z.
- Live checks on 2026-09-24: goanus.com and its script `index-CnAicJIH.js`; anus.dev over http and https; the DNS of both domains.
- Scout notes in this repository: [raw-github](research/2026-09-24/raw-github.md) (issue numbers, the relaunch code), [raw-x-telegram](research/2026-09-24/raw-x-telegram.md) (posts about the sites), [raw-reddit-hn-social](research/2026-09-24/raw-reddit-hn-social.md) (replies to the launch, the YouTube video).
- Full snapshots are archived offline by the overseer.
