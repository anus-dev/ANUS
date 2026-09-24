# Raw: Reddit, Hacker News and social (scout pass 2026-09-24)

Raw scout output, not edited. The canon is the synthesis in this folder's README.md.

- Angle: Reddit, Hacker News, Product Hunt, Threads, LinkedIn, Bluesky, YouTube, Hatena, Chinese and Russian-language platforms. GitHub, X/Twitter and press are other scouts' lanes (mentioned here only as pointers).
- Check date for every item: 2026-09-24 (retrieval ran 2026-09-23/24 UTC).
- Method: Hacker News Algolia API (search, search_by_date with typo tolerance off, full comment trees via /items/<id>); Reddit via the public archive APIs Pullpush (api.pullpush.io) and Arctic Shift (arctic-shift.photon-reddit.com), because reddit.com and old.reddit.com block unauthenticated JSON and fetches ("Your request has been blocked due to a network policy"); Bluesky public AppView search API; YouTube public watch/search pages and the public comments endpoint; WebSearch + WebFetch for Threads, LinkedIn, Hatena, Zhihu, CSDN, V2EX, AlternativeTo.
- Score caveat: Pullpush scores are captured near creation time and are usually 1; Arctic Shift re-captures about 36 hours later and is closer to the real score. Where both exist, the Arctic Shift figure is given and labelled.
- Non-English quotes are translated and marked "(translated from ...)". Original non-Latin text is not reproduced in this file.

## Timeline

Format: YYYY-MM-DD · platform · what · link · quote · score/comments (at archive capture). UTC dates.

- 2019-03-25 · Reddit r/darksouls · pun prehistory · https://www.reddit.com/r/darksouls/comments/b59rdo/ · "Manus kicked M'anus but I kicked his on my 2rd try." · 900 / 106
- 2020-08-27 · Reddit r/shittydarksouls · pun prehistory, image https://i.redd.it/ynvp022cakj51.jpg · https://www.reddit.com/r/shittydarksouls/comments/ihmts3/ · "I'm looking at you manus(my anus)" · 4,242 / 100
- 2021-10-14 · Reddit r/shittydarksouls and r/darksouls · pun prehistory · https://www.reddit.com/r/shittydarksouls/comments/q7pbpb/ · "Fun Fact: If you take the M out of Manus he's just anus" · 298 / 44 (r/darksouls copy 64 / 15, removed by moderator)
- 2025-03-08 · Hacker News · Manus launch thread, name critique · https://news.ycombinator.com/item?id=43298408 · "A name that is mostly "anus" is actively bad." · story 51 points
- 2025-03-08 · 4chan /g/ (desuarchive) · Manus pun · thread 104638835 · "I can't believe m'anus is going viral." · n/a
- 2025-03-09 19:25 · Hacker News · ANUS submission by `digitalresearch` · https://news.ycombinator.com/item?id=43312723 · "I asked Manus AI ... to create its own open-source alternative." · 18 points / 11 comments
- 2025-03-09 19:39 · Reddit r/AI_Agents · creator's own launch post, automod-filtered, never visible · https://www.reddit.com/r/AI_Agents/comments/1j7fp7r/ · "ANUS: I asked Manus AI to create its own open-source alternative, and it built a complete AI agent framework" · 1 / 0
- 2025-03-09 · Threads · @sung.kim.mw first Threads post · https://www.threads.com/@sung.kim.mw/post/DHAXJNEx5sE · "Anus: Open-source alternative to Manus AI?" · 418 likes / 61 comments / 33.1K views
- 2025-03-09 · Bluesky · timkellogg.me · https://bsky.app/profile/timkellogg.me/post/3ljy6ko7auc2f · "welcome to ANUS: Autonomous Networked Utility Service" · 33 likes
- 2025-03-10 04:58 · Reddit r/singularity · "Introducing ANUS" (Venn diagram) · https://www.reddit.com/r/singularity/comments/1j7r2r9/ · "that's not ANUS. That looks more like a V-Ageena" (250) · 465 / 99
- 2025-03-10 · Reddit r/LocalLLaMA · OpenManus thread joke · https://www.reddit.com/r/LocalLLaMA/comments/1j7vx6z/ · "Second open source anus project I have seen today. Something is going on..." (50) · 75 / 31
- 2025-03-10 · Reddit r/AI_Operator · repost + first install bug report · https://www.reddit.com/r/AI_Operator/comments/1j7xqpl/ · "anus --version doesn't work" · 12 / 9
- 2025-03-10 · Reddit r/accelerate · repost removed by mods · https://www.reddit.com/r/accelerate/comments/1j7xbbj/ · mod comment: "not real" · 2 / 3
- 2025-03-10 · Threads · @unwind_ai · https://www.threads.com/@unwind_ai/post/DHCsAn-MVLz · "China's Manus AI created its own opensource alternative ANUS. In just 25 minutes." · 230 likes / 34 comments / 182K views
- 2025-03-10 · Threads · @sambhav.ai · https://www.threads.com/@sambhav.ai/post/DHA0tibTK8w · "this is wild! manus ai just built its own open-source alternative from scratch in 25 minutes!" · 63 likes / 6 comments
- 2025-03-10 · YouTube · first video review (Portuguese) · https://www.youtube.com/watch?v=7HJtdndhe6A · "ANUS uma alternativa ao MANUS?" · 293 views / 7 likes
- 2025-03-10 · LinkedIn · "prompt hack" reading (Simon Lee, from a Korean original) · https://www.linkedin.com/posts/simon-lee-003689288_github-nikmcflyanus-activity-7304823309538336768-4DmX · "Someone prompted Manus to 'open source yourself' and it did" · n/a
- 2025-03-10 · Reddit r/ClaudeAI · parallel "M-anus" build by u/TheCoffeeLoop · https://www.reddit.com/r/ClaudeAI/comments/1j7y52e/ · "I did and called it M-anus." · 98 / 20
- 2025-03-10 · Hatena Bookmark · first bookmark · https://b.hatena.ne.jp/entry/s/github.com/anus-dev/ANUS · n/a · 5 users total
- 2025-03-10 · HN · `theLegionWithin` · https://news.ycombinator.com/item?id=43312723 · "best acronym of 2025 (so far)" · n/a
- 2025-03-11 · LinkedIn · Unwind AI long post · https://www.linkedin.com/posts/unwind-ai_chinas-manus-ai-just-built-its-own-open-source-activity-7305047258306125825-jElU · "No, this isn't a typo." · 84 reactions / 10 comments
- 2025-03-11 · Reddit r/AI_India · "BREAKING: Manus AI created its own open-source alternative" · https://www.reddit.com/r/AI_India/comments/1j8mqi7/ · "OP did you name it or did the Manus name it lol !!" -> "It named itself" · 19 / 11
- 2025-03-11 · Reddit r/KafkaFPS (Russian) · meme post · https://www.reddit.com/r/KafkaFPS/comments/1j8vfc9/ · (translated) "Only from China can you expect open source that works through the anus." · 10 / 4
- 2025-03-11 · Reddit r/Popular_Science_Ru · comment · https://www.reddit.com/r/Popular_Science_Ru/comments/1j8o2h3/ · (translated) "They already made ANUS, a free alternative to MANUS (no, really, here's the github)" · comment 11
- 2025-03-11 · HN · `yodon`, `hollerith` · https://news.ycombinator.com/item?id=43312723 · "Is Anus also able to "self-host" itself" / "the additional indignity of being killed by something named "Anus"" · n/a
- 2025-03-12 · LinkedIn · Boucetta, Enoch Kan · (LI-5, LI-6) · "You gotta love the internet" / "y'all really need a better name" · 14/9 and 10/1
- 2025-03-12 · Reddit r/developersIndia · post removed by moderator · https://www.reddit.com/r/developersIndia/comments/1j9l31f/ · title "Anus (Autonomous Networked Utility System) Open source AI Agent" · 1 / 0
- 2025-03-12 · Bluesky · olifer.org (Ukrainian) · https://bsky.app/profile/olifer.org/post/3lk7hum7apc2n · (translated) "Who would have thought of that" · 12 likes
- 2025-03-13 · Threads · @githubprojects · https://www.threads.com/@githubprojects/post/DHJiiepzJ51 · "No invite code unlike MANUS." · 1K likes / 80 comments / 128K views
- 2025-03-13 · Reddit r/ProgrammerHumor · GitHub-issues meme · https://www.reddit.com/r/ProgrammerHumor/comments/1ja0tzv/ · "That was a roller coaster up until buttplug support." (412) · 1,885 / 36
- 2025-03-13 · Reddit r/MachineLearning · two posts removed (missing tag; Reddit filter) · https://www.reddit.com/r/MachineLearning/comments/1jalm3s/ · "So Autonomous It's Already Forked Itself (Into "ANUS")" · 1 / 1
- 2025-03-13 · LinkedIn · Raymond Blyd · (LI-7) · "really 'reason' about naming your clone..." · 26 / 7
- 2025-03-14 · Reddit r/indotech · https://www.reddit.com/r/indotech/comments/1jb2jrm/ · "4 years experience using ANUS in my CV" · 93 / 20
- 2025-03-14 · Reddit r/Twitter_Brasil · https://www.reddit.com/r/Twitter_Brasil/comments/1jbf1i7/ · (translated) "Even the chart, bro... this has to be a joke" (78) · 338 / 17
- 2025-03-14 · Reddit r/LinkedInLunatics · "The Birth of ANUS" · https://www.reddit.com/r/LinkedInLunatics/comments/1jb88uy/ · n/a · 11 / 3
- 2025-03-14 · Threads · @sambhav.ai GitHub-issues screenshot · https://www.threads.com/@sambhav.ai/post/DHMMA7bTQBA · "remember ANUS ?" · 92 likes / 4 comments
- 2025-03-14 · AlternativeTo · listing added · https://alternativeto.net/software/anus/about/ · n/a · 0 likes
- 2025-03-15 · Hacker News · URANUS copycat · https://news.ycombinator.com/item?id=43369744 · "This is the ultimate "backdoor", isn't it?" · 1 / 5
- 2025-03-15 · Reddit r/ProgrammerHumor · meme removed by mods, Rule 3 "low quality" · (as above) · n/a
- 2025-03-16 · Reddit r/selfhosted · "it looked legit at first" · https://www.reddit.com/r/selfhosted/comments/1jcmdm4/ · "almost 800 forks in a week" · 0 (ratio 0.20) / 3
- 2025-03-16 · Bluesky · newsletter issue named after the acronym · https://bsky.app/profile/ben-r.bsky.social/post/3lkjnlfi56c2w · "Memia 2025.10: Autonomous Networked Utility System" · n/a
- 2025-03-18 · Reddit r/LocalLLaMA · https://www.reddit.com/r/LocalLLaMA/comments/1je47w9/ · "arguably one of the greatest repo's ever" · comment 13
- 2025-03-20 · YouTube · Russian-language Short · https://www.youtube.com/shorts/Woc142xS-HU · (translated) "How to control a computer with your anus" (104) · 49,360 views / 2,408 likes / 41 comments
- 2025-03-21/26 · Reddit r/italy · https://www.reddit.com/r/italy/comments/1jjru7n/ · (translated) "risky click of the day, ANUS" · comment 1
- 2025-03-22 · Reddit r/github · "coolest GitHub repo ... by accident" · https://www.reddit.com/r/github/comments/1jhl8ad/ · answer = the ANUS link · comment 15 (thread 812 / 92)
- 2025-03-30 · Reddit r/FoundersLoveAI · testimonial-style post · https://www.reddit.com/r/FoundersLoveAI/comments/1jni3pl/ · "An AI agent that's actually legit called ANUS." · 1 / 0
- 2025-03-30 · Threads · @3.14rock (Russian) · https://www.threads.com/@3.14rock/post/DH1RukIIX_9 · (translated) "here's an Anus for you, and a free one too" · 1 like
- 2025-04-19 · Reddit r/LocalLLaMA · https://www.reddit.com/r/LocalLLaMA/comments/1k35gfi/ · "Dev writes about himself on github: Deep in the ANUS codebase" · 3 / 15
- 2025-05-27 · Reddit r/Python · "pip install anus-ai" removed · https://www.reddit.com/r/Python/comments/1kwlst5/ · n/a · 1 / 1
- 2025-07-29/30 · Bluesky · second small wave (tom-doerr, 1ilhas, rkatz.xyz) · see Bluesky · n/a · up to 4 likes
- 2025-08-21 · Reddit r/ChatGPT · repo link under a viral fart-sound AI thread · https://www.reddit.com/r/ChatGPT/comments/1mv0lth/ · "the best agentic framework for building applications on top of your LLM" · comment 1 (thread 4,546 / 252)
- 2025-09-05 · YouTube · relaunch promo from a channel titled "ANUS" · https://www.youtube.com/watch?v=8BI3GiKrphk · "The Backdoor to AGI is Real. And It's Called ANUS." · 226 views / 1 like
- 2025-11-16/17 · Bluesky and Hatena (Japan) · rediscovery via github.com/anus-dev/ANUS · https://bsky.app/profile/anon5r.com/post/3m5qsfbb32k25 · (translated) "An OSS project that a lot of people will probably like" / Hatena "The name!" · 3 likes
- 2025-11-18 · Reddit r/LocalLLaMA · first anus-dev URL on Reddit · https://www.reddit.com/r/LocalLLaMA/comments/1p09i9i/ · link only · 1
- 2025-12-20 · Reddit, a coding subreddit · "You ever heard of Anus? It was coded by Manus. What a time to be alive" · 1
- 2025-12-28/30 · Hacker News · Manus name jokes after the Meta news, ANUS not mentioned · https://news.ycombinator.com/item?id=46426534 · "is the name of your product being eighty percent 'anus' intentional?" · 319 points
- 2026-02-26 to 2026-03-30 · Bluesky · Meta-Manus joke wave · https://bsky.app/profile/rob-sheridan.com/post/3mfqehxobpc24 · "M. Anus ... Meta's Anus" · 232 likes
- 2026-05-28 · Bluesky · https://bsky.app/profile/imouthes.com/post/3mmwasz7ayk2f · "Apparently this is a real project" · 0
- 2026-06-12 · devme.me · meme explainer · https://devme.me/deepdive/anus-the-ai-agent-framework-name-nobody-sanity-checked · "Say the name out loud, check the acronym" · 14 comments
- 2026-08-06 · Bluesky · https://bsky.app/profile/blue-labs.org/post/3msf2mgessk2y · link + flushed emoji · 0
- 2026-08-11 · Hacker News · Manus independence thread · https://news.ycombinator.com/item?id=49258764 · "I can't help but read it like 'anus' with an M in front of it." · 169 points
- 2026-09-24 · (this pass) · no ANUS-specific thread found on any covered platform after 2026-08; latest organic mention found is 2026-08-06 (Bluesky).

## Threads

### Hacker News

**HN-1. "Anus: An open-source AI agent framework created by Manus AI itself"** (the only ANUS submission on HN)
- Link: https://news.ycombinator.com/item?id=43312723 (API: https://hn.algolia.com/api/v1/items/43312723)
- Posted 2025-03-09 19:25 UTC by `digitalresearch`, linking https://github.com/nikmcfly/ANUS. Score 18 points, 11 comments (Algolia: "points": 18, "num_comments": 11). Never reached the front page on this evidence.
- OP's own text comment (43312724, same minute): "I asked Manus AI (the invite-only agent that [resale price figure moved to the safe file]) to create its own open-source alternative. The result is ANUS (Autonomous Networked Utility System) ... 100% designed and coded by AI. My role? I wrote the prompt and used Cursor to push to GitHub. That's it." Asks HN about "Implications of AI systems building other AI systems" and ends: "This feels like a significant milestone - when one AI system can create a complete, functional alternative to itself from scratch."
- Best comments (verbatim):
  - `emiliog07` (2025-03-09): "What a name."
  - `theLegionWithin` (2025-03-10): "best acronym of 2025 (so far)"
  - `readyplayernull` (2025-03-09): "Did you detect any code smells? Anyway, good prompting, I'll check it out. Thanks!" (a pun on "code smells" that may or may not be intentional)
  - `yodon` (2025-03-11): "I get that it's a clever hack, but this also seems like an incredible testimonial to the capabilities of Manus. Is Anus also able to "self-host" itself (generate an equivalent app), or, if not, is that a measure of a capability differences between the two systems?" (the earliest public statement of the self-replication test that later became the project's roadmap idea)
  - `hollerith` (2025-03-11), AI-doom commenter: compares naming to the loincloths given to crucifixion victims, then: "if I'm going to be killed, and there's no way to stop it, I'd rather avoid the additional indignity of being killed by something named "Anus" or such. Is that too much to ask?" Reply by `kody_06` (2025-03-20): "This is amazing, thank you for posting this."
  - `amineabdennour` (2025-03-11): "Great will use it for our Instagram dm marketing 'follow to get' tool" (self-promo, first declared "user")
  - `lightaime` (2025-03-13, CAMEL-AI side): "Check out an open source alternative of Manus - OWL by camel-ai" (competitor drive-by)
  - Two Korean-language comments (2025-03-14 and 2025-03-17) that are unrelated prompts pasted into the thread as if HN were the agent itself: one asks (translated from Korean) to "make me an EXE program" that batch-analyses Go positions with the KataGo engine; the other asks (translated from Korean) "Can I ask questions in Korean?". Lore value: people treated the HN thread as the product's chat box.

**HN-2. "(Uranus) Manus.im Open Source WIP"** (copycat pun, one week later)
- Link: https://news.ycombinator.com/item?id=43369744 ; repo https://github.com/futureHQ/URANUS
- Posted 2025-03-15 03:29 UTC by `NeoFutura`; 1 point, 5 comments.
- OP: "URANUS (Unified Reasoning, Adaptive Neural-linguistic Understanding System) / Always covering the backend"; second comment: "Inspired by Manus.im, ANUS (Autonomous Networked Utility System) and OpenManus."; third: "star it now so you don't miss the next BIG push!"
- `disqard`: "This is the ultimate "backdoor", isn't it?" OP reply: "Absolutely :) It's a WIP ... The plan is to expand URANUS to a level where it handles heavy loads, adapts under pressure, and always delivers smooth results."
- Lore value: first known derivative that explicitly credits ANUS; the pun chain Manus > ANUS > URANUS.

**HN-3. "Leave It to Manus"** (Manus launch thread, the day before ANUS; the pun is born here on HN)
- Link: https://news.ycombinator.com/item?id=43298408 ; 51 points, posted 2025-03-08.
- Top-voted-looking subthread (by position): `stfp`: "Feedback: change the name ... A name that is mostly "anus" is actively bad."
- Replies: `brookst`: "Mananus?"; `gmuslera`: "...let's change the name schema to gods, mythology or something on the sky. Maybe Uranus could be a better alternative."; `kingforaday`: "Or Janus?"; `xnx`: "Womanus? Ladus?"; `henry_viii`: "ChatGPT's logo looks like an anus yet they're doing just fine."; `linsomniac` (2025-03-10): "Laughing because I came here and this is the top comment. My coworker asked ... "How do you spell it, m-a-n-t-i-s?" "No, like anus with an M in front.""; `t_mann` defends: "Manus means hand in Latin, not a bad name at all"; `adultSwim` (2025-03-14): "I would have never made the connection to anus without you mentioning it, possibly due to the differing pronunciation."
- `esafak`: "Someone already made a clone with 15K stars: https://github.com/mannaandpoem/OpenManus" (OpenManus, the rival clone).

**HN-4. Later Manus threads where the "anus" joke keeps resurfacing** (context for the name's afterlife)
- Manus revenue-milestone thread (exact title carries a revenue figure; see safe file), 2025-12-28, https://news.ycombinator.com/item?id=46409245 (41 points): `the_duke`: "manus is Latin for hand ... And their logo is, lo and behold ... a hand!"; `nrhrjrjrjtntbt`: "So it is the Ancient Romans who were obsessed with butts. Got it."; `stavros`: "There are more English words that end in -ass than Latin words that end in -anus, so who's really obsessed?"; `fifticon`: "but where has that hand BEEN? And we are back at -anus again."; `HendrikHensen`: "...it wouldn't surprise me if they came up with the name "manus" because it has "anus" in it, and then designed the hand logo due to the Latin meaning of the name. [this is a sarcasm, in case that was not clear]"
- "ManusAI Joins Meta", 2025-12-29, https://news.ycombinator.com/item?id=46426534 (319 points): `jrflowers`: "It is nice that most people have a good grasp of Latin vocabulary ... otherwise you'd probably get questions like "is the name of your product being eighty percent 'anus' intentional?""; `mvdtnz`: "No way they called a company "Manus". No way."; `m3kw9`: "i thought mAnus was a joke app". Same thread, `TigerHix` on the clone wave: "People literally built OpenManus the next day after Manus' launch marketing went viral to demonstrate the point."
- "Manus will return to operating as an independent company", 2026-08-11, https://news.ycombinator.com/item?id=49258764 (169 points): `DrewADesign`: "I can't help but read it like 'anus' with an M in front of it."; `frankacter`: "Duck Duck Go is really what's wrong with modern dating culture."
- None of these later threads mention the ANUS repo by name (checked all 255 HN comments containing the word "anus" since 2025-03-05 with typo tolerance off).

**HN-5. Adjacent: the "AI logos look like buttholes" discourse** (same joke family, not about ANUS)
- "Why do AI company logos look like buttholes?", 2025-04-09/11, story 43649640 (comment by `palmotea` 43654307). https://news.ycombinator.com/item?id=43649640
- "Why did Anthropic chose an anus for Claude's logo?", 2025-08-03, 4 points, https://news.ycombinator.com/item?id=44774922
- "Ask HN: Why do most AI assistants start with the letter C?", 2026-01-15, `eimrine`: "And most of them have an anus as a logo." https://news.ycombinator.com/item?id=46637017
- "Why do AI company logos look like buttholes? (2025)" resubmitted 2026-07-18, story 48956924.

### Reddit

Scores: "AS" = Arctic Shift re-capture about 36 h after posting (closest available to the real number); later growth is unknown because reddit.com itself is not readable without login. Removal status comes from the archive's `removed_by_category` / `removal_type` fields.

**R-1. r/singularity, "Introducing ANUS"** (the biggest Reddit thread found)
- Link: https://www.reddit.com/r/singularity/comments/1j7r2r9/introducing_anus/ ; image https://i.redd.it/1rwm0xmknsne1.jpeg (the Venn-diagram "ANUS" graphic, see Jokes J-1)
- 2025-03-10 04:58 UTC, u/Worldly_Evidence9113. AS: score 465, 99 comments (113 archived incl. later ones), upvote ratio 0.89. Not removed.
- Body: "Introducing ANUS: I prompted Manus AI to create an open-source version of itself / The result? A fully functional agent framework built entirely by AI / This Venn diagram (created by Claude 3.7 Sonnet in seconds) explains it all" + links to x.com/nikmcfly69/status/1898859518613922234 and the GitHub repo. (Same text as the creator's X post; reposted verbatim by others, see R-2, R-3.)
- Best comments (score at archive time):
  - 250, u/playpoxpax: "Correct me if I'm wrong, but that's not ANUS. That looks more like a V-Ageena" -> replies: 88 u/jaylong76 "virtual autonomic generative intersectional neural agent"; 45 u/hardinho "vAGIna when"; 16 u/After_Sweet4068 "Virtual artificial general intelligence network augmentation"; 4 u/Voxandr "Viral Artificial General Intelligent Network Agent".
  - 93, u/m3kw: "How about Centralized Universal Neural Transformer System" -> 13 u/nederino: "Well Australia does have the most Centralized Universal Neural Transformer Systems in the world so I think they deserve the title"
  - 64, u/ObjectiveBrief6838: "Humans are birthed from a vagina but AGI will be birthed from ANUS"
  - 60, u/One_Geologist_4783: "they only hate us cuz they ANUS"
  - 56, u/No_Swimming6548: "High quality shit post"
  - 47, u/playpoxpax: "Wait until this shit ends up as the world's first AGI." -> u/Deadline1231231 "RemindMe! 2 years" (RemindMeBot scheduled for 2027-03-10)
  - 39, u/ObjectiveBrief6838: "You... you're serious?.." -> 33, OP u/Worldly_Evidence9113: "It's serious project on GitHub" -> 12 u/Marv-elous "I look forward to check out your polished ANUS"; 11 u/TheDerangedAI "Most successful businesses do really have names that suck."; 9 u/TheHunter920 "others on this sub aren't serious enough. Well done and thanks for sharing!" -> 7 u/FaultElectrical4075 ""Not serious enough"? It's called ANUS. How do you expect people to react" -> 7 u/Abbatoir0 "Please don't make fun of his ANUS."
  - 35, u/shinstra: "Finally, an agent framework we can all get behind!" -> 9 u/FaultElectrical4075 "Behind"
  - 31, u/dickofthebuttt: "Butt... is it legit?" -> 37 u/Ubera90 "You bet your ass it is"
  - 16, u/KitsuneFolk: "I asked Gemini Flash 2.0 if the code would actually work and not dummy code disguised as real. tl;dr: looks like it's real". The pasted Gemini verdict: "likely a functional project with elements of humor and satire injected into it"; it notes "the difficulty of a task in relation to a constipated ANUS" in the HybridAgent complexity analysis, and "The features would take a long time to implement for just a joke." Reply 9 u/DemonforgedTheStory: "just try installing it lmao"
  - 14, u/MysteriousPepper8908: "I want to get my Manos on that ANUS." -> 6 u/do_not_know_my_name "Uranus"
  - 12, u/FriendlyJewThrowaway: "When Microsoft introduced MS BackOffice, a highly popular suite of tools for remotely hacking it called Back Orifice was introduced shortly afterward." -> 9 u/CrasHthe2nd: "Don't forget the highly popular tech help website www.expertsexchange.com before they added the hyphen."
  - 10, u/occamai: links the README's "Why ANUS?" section, "asking the real questions" -> 7 u/Artistic_Isopod_7450: "And the first reason is "no barriers""
  - 7, u/oilybolognese: "I'm sorry, but this is behind MANUS. A solid number 2."
  - 7, u/MoarGhosts: "I have to say you've done it, you've created AGI, and it's beautiful... Anal Gaping Image"
  - 6, u/BotTubTimeMachine: "Can't believe I'm one of the first people to witness ANUS, historic."
  - 5, u/p3rs0nm4n: "This needs to be paired with TART - Totally Autonomous RPA Transformer / ANUSTART" (Arrested Development reference)
  - 4, u/JackFisherBooks: "This is the single greatest post in the history of this sub. It will not be topped anytime soon."
  - 2, u/NovelFarmer: "It doesn't seem to actually be real, but I did find one that seems to be real. OpenManus"
  - 2, u/Ok_Net_1674: "Since it's open source, maybe call it OpenANUS?"
  - 2, u/Business-Weekend-537: "Needs L.U.B.E. / L.U.B.E. - Low system requirements, Universal Backend, Efficient"
  - 2, u/here_now_be: "I was sure this was going to be some more Elon bs. like he made a woke version of grok and called it anus." (prophetic: the 2025 relaunch really was Grok-powered)
  - 1, u/cassova: "Is this from some disgruntled employee from manus.im dumping their code base?"
  - 1, u/jcar74: "You've got me wondering if this is actually real. Man, these are strange times."
  - 1, u/nikmcfly (the creator, days later): "Thank you for posting about ANUS. It is open to everyone, enjoy!"
  - 1, u/Subject_Shake_6367 (late): "Just in case someone had doubts, I can save you some waste of time: this project is just a shell, it has no real features inside, just mocks and some joking outputs"
  - 1, u/Miserable-Lack-5089: "can anyone can create an how-to install anus - Video please? ... thank your anus'es too"
  - 1, u/jo25_shj: "I have installed your anus"
  - Self-promo pile-on: u/rentprompts posted "You should think about joining r/AI_Operator for some cool insights on operators like Manus." three times (one variant: "...like Anus.", -5), and got "You're shameless. This is a serious thread and topic and youre shilling here smh" (u/oneshotwriter, 3).
  - Several other acronym offspring in the thread: TARTANUS and "SALTYANUS" (u/AppropriateScience71), "Programmatic Enhancing Network Intelligence Singularity" (u/Alternative_Delay899), "PeNUS ... Probability enhancing Neural User System" (u/WilliamArnoldFord), "it will output a Computation Unified Multiscan" (u/jaylong76).
  - One comment from this thread about a third-party chat link is in the SAFE file (excluded topic).

**R-2. r/AI_Operator, "Someone just drop ANUS"**
- https://www.reddit.com/r/AI_Operator/comments/1j7xqpl/ ; image https://i.redd.it/1yh1drcqyune1.png ; 2025-03-10 12:44 UTC, u/HardcoreIndori; AS score 12, 9 comments. Body = the creator's X text verbatim.
- Comments: u/Educational-Mango696 "They really have to change the name !"; u/brodhavee (first install bug report on Reddit): "I can't install it via docker, I cloned the github repo, but none of the mentioned commands are working. anus --version doesn't work ... means, anus is infact installed but the commands are not working." (two screenshots: https://preview.redd.it/n2ryz9uagwne1.png , https://preview.redd.it/156zq5eigwne1.png); u/Practical_Talk_529 "I've tried all the installation methods and have the same issues"; u/Active_Vanilla1093 "I couldn't get past the name to read further about what it is"; u/Slight-Special-3641 "hahahaha was thinking the same when i saw it, which cannot be unseen"; u/half_past_540 "Okay, head of marketing for Manus AI here. How do you guys feel about.... **Manass**?"; u/nyc008 "That's why they chose the name, anus... It's full of it."

**R-3. r/accelerate, "Introduction to ANUS"** (removed by moderators)
- https://www.reddit.com/r/accelerate/comments/1j7xbbj/ ; image https://i.redd.it/jecr6bciuune1.png ; 2025-03-10 12:21 UTC, u/rentprompts; AS score 2, 3 comments; `removal_type: moderator`.
- Mod comment by u/accelerate-ModTeam, verbatim: "not real". u/GOD-SLAYER-69420Z replied with a reaction image (https://preview.redd.it/wci2wemhwune1.jpeg). This is the only moderator verdict on the project's authenticity found.

**R-4. r/ProgrammerHumor, "theyHateUsCauseTheyAintUs"** (highest-scoring ANUS item on Reddit)
- https://www.reddit.com/r/ProgrammerHumor/comments/1ja0tzv/theyhateuscausetheyaintus/ ; image https://i.redd.it/kqv7n6rq2doe1.jpeg ; 2025-03-13 01:39 UTC, u/AHalfFilledBox, flair "Meme". AS score 1885, 36 comments.
- The image (not viewed; described from the comments) is a screenshot of the ANUS repo's GitHub issues: comments quote issue titles about "buttplug support", "not accepting input", something "Implemented in Rust" and "Streaming on Twitch", and one commenter links https://github.com/nikmcfly/ANUS/issues to prove it is real.
- Removed by the mods on 2025-03-15 15:41 UTC under "Rule 3: Your post is considered low quality" (after about 2.5 days and 1.8k upvotes).
- Best comments: 412 u/ManagementNo5117 "That was a roller coaster up until buttplug support. That's not real" -> 252 u/Cylian91460 "You currently don't know what bp.io allow you to do" -> 21 u/Kiro0613 "[Sure it's real](https://buttplug.io/)"; 216 u/ddonsky "Really missed the "theyHateUsCauseTheyAnus" opportunity in the title."; 110 u/tacticalpotatopeeler "ISSUE: not accepting input"; 79 u/Xhadov7 "Implemented in Rust. Of course." -> 63 u/ioveri "I guess Rust being a pain in the ass has a new meaning"; 45 u/programmerapathy "This is the first post on programming humor that I've actually laughed at."; 18 u/poochi "so, it's real [issues link]"; 14 u/aaron_1011 "The url "ANUS/issues" got me blowing air from nostrils"; 6 u/Tupcek "I push and pull into that repo all the time. Sometimes I switch branches, too!"; 2 u/jeepsaintchaos "Sounds like shit code."; 1 u/Alienaffe2 "I'd be curious what is happening in the pull requests"; 3 u/Flannelot "I've tried installing it on Alexa. No joy."

**R-5. r/Twitter_Brasil, "ANUS AI"** (Brazilian meme wave)
- https://www.reddit.com/r/Twitter_Brasil/comments/1jbf1i7/anus_ai/ ; image https://i.redd.it/ffinrc575qoe1.jpeg (screenshot of an X/Twitter post about ANUS AI with the diagram); 2025-03-14 21:36 UTC, u/RakonHenri. AS score 338, 17 comments, ratio 0.99.
- Same image cross-posted: r/InesperadoCu ("Unexpected butt" sub) 1jbf10u (score 2, image https://i.redd.it/50zzvbi35qoe1.jpeg), 1jbvn7d "ANUS IA" (5), user profile 1jeei0r (1); plus r/InesperadoCu 1jb0rit "MANUS ANUS" by u/lucifres (deleted later; image https://preview.redd.it/r38vc481umoe1.png).
- Comments (translated from Portuguese unless marked): 78 u/fabio__tche "Even the chart, bro... this has to be a joke" -> 26 u/Bernardo_124-455 "And the guy's nickname doesn't help, having "69" at the end" -> 20 u/NegativeKarmaVegan "Obviously it's a joke"; 19 u/felipe5083 "Definitely on purpose"; 18 u/Wheel-Reinventor "r/inesperadocu"; 14 u/furcake "/r/essaeraapiada" (that was the joke); 6 u/petersonrbo (English) "Named after an ANUS, but looks like a "FLOWER"."; 4 u/epilefmot (English) "Unexpected Goatse"; 3 u/Demonicaoo "This isn't ANUS, it looks like the VAGINA system: Variable automatic geometric intense nano-automation"; 3 u/mytzlplyck "The website is even better." + link to a third-party "Anus AI" website (URL and nature in the SAFE file); 2 u/DoEvadeMe "To look at this and not see it's a joke you need a negative IQ"; 2 u/Phasma_Tacitus "More like VULVA"; 2 u/GrandCommon1630 (2025-04-12) "I'll use anus AI for something, I just hope it doesn't make a mess [literally: take a dump]".

**R-6. r/indotech (Indonesia), "ANUS is a powerful open-source AI agent framework for automating complex tasks with natural language."**
- https://www.reddit.com/r/indotech/comments/1jb2jrm/ ; image https://i.redd.it/o0dravdkdnoe1.png ; 2025-03-14 12:17 UTC, u/WhyHowForWhat. AS score 93, 20 comments, ratio 0.99.
- Comments: 13 u/Least_Bodybuilder216 screenshot "Peak comedy" (https://preview.redd.it/6ba4b0do7ooe1.png); 12 u/suka-khayalan (English) "I can't believe im gonna put 4 years experience using ANUS in my CV"; 6 OP "This is real, enjoy the ANUS!"; 5 OP "You should see their website, more peak comedy [link to a third-party website, see SAFE file] Honestly, after reading their website, its kinda sus" (screenshot https://preview.redd.it/9w61si0p8ooe1.png); OP (translated from Indonesian) "Looking at its git docs it's very convincing. Oh man, if I were still in college I'd make this my thesis topic, or at least a journal paper somehow"; u/Stand_Junior (translated from Indonesian, posted 4 times) "LOL he's definitely doing this on purpose. He must know what anus is, it's Latin."; u/Vorexxa "The peach emoji is really necessary"; u/Tahutempe_enak "Why Anus?"; u/Nekomet_32 (translated from Indonesian) "Is it good for learning cybersecurity?"

**R-7. r/AI_India, "BREAKING: Manus AI created its own open-source alternative. In 25 min, it built a complete AI agent system from scratch!"**
- https://www.reddit.com/r/AI_India/comments/1j8mqi7/ ; image https://i.redd.it/ednt1tsi31oe1.jpeg ; 2025-03-11 09:22 UTC, u/enough_jainil. AS score 19, 11 comments. Body: "ANUS (Autonomous Networked Utility System) - eugeneshilow's brilliant idea / [second line with a price figure moved to the safe file]"
- Comments: 5 u/Honest-Car-8314 "OP did you name it or did the Manus name it lol !!" -> 5 OP "It named itself" (an unverified claim; see Not found); 3 u/PutsiMari69 "MyAnus"; 3 u/UnassumingAirport666 "Anus.....LOL"; 0 u/Specialist_Cheek_539 "I think this a meme repo"; u/chiuchebaba "As a Marathi I read this as [the Marathi word for] human, which is an ironical name for an AI model." -> OP "and more ironic because it came from China"; u/Frosty-Status-4809 "Either it is conscious and is showcasing its sense of humor as a Manus knock off of sorts, or this is evidence that it lacks awareness and a self checks system entirely."; u/_FIRECRACKER_JINX "I see no problem with this name whatsoever. I see everyone behaving maturely and responsibly with the use of its name."
- Same user group posted "Anus (Autonomous Networked Utility System) Open source AI Agent" to r/AI_India (1j9l3gt, score 1) and r/developersIndia (1j9l31f, removed by moderator), 2025-03-12, u/LonelyAstronaut69.

**R-8. r/KafkaFPS (Russian-language meme sub), title translated: "Want to try Anus?: A guy with access to the Chinese AI agent Manus asked it to make an open-source version of itself, and the result was Anus (Autonomous Networked Utility System). The author suggests using Anus so you don't have to wait for a Manus invite"**
- https://www.reddit.com/r/KafkaFPS/comments/1j8vfc9/ ; image https://i.redd.it/dioyrtjpb3oe1.png ; 2025-03-11 16:52 UTC, u/ElectroAdeptus. AS score 10, 4 comments.
- OP comment (translated): "The author claims it took Manus only 25 minutes to clone itself. Users complain, though, that far from everyone manages to launch Anus, and the project has made-up documentation, because Manus wrote it." Top comment 2 u/Altruist479 (translated): "Only from China can you expect open source that works through the anus." u/SeligFay (translated): "Ours love all kinds of abbreviations too."

**R-9. r/selfhosted, "Heard about MANUS ? Meet project ANUS -- it looked legit at first"**
- https://www.reddit.com/r/selfhosted/comments/1jcmdm4/ ; 2025-03-16 14:15 UTC, u/Purple_Wear_5397. AS score 0, ratio 0.20, 3 comments. Body: "This really seem like a legit project ... As much as it looks legit, look at the Github Issues:" + screenshot https://preview.redd.it/26bzpur982pe1.png
- Comments: 10 u/roboticchaos_ "It's clearly some AI generated crap. Why are you even posting this here?"; 1 u/BillyBawbJimbo "That thing has had almost 800 forks in a week. Are people just scraping for anything with AI in the readme and auto forking it?"; -12 u/zakafx "does your butt hurt? /s"

**R-10. r/LocalLLaMA, "Which open source Manus like system???"**
- https://www.reddit.com/r/LocalLLaMA/comments/1k35gfi/ ; 2025-04-19, u/AdLongjumping192; AS score 3, 15 comments. Body lists "open manner versus pocket madness versus anus vs computer use vs autoMATE?" (autocorrect-mangled).
- Comments: 6 u/Right-Law1817 "wtf?"; 3 u/KillerQF "was that a typo?"; 3 u/alcalde "You lost me at anuses."; 3 u/plankalkul-z1 "It's hard to imagine anyone in their right mind would name their project like that. I for one thought you were trying to be funny (unsuccessfully, I must say) with a bit of toilet humor... Oh well."; 3 u/Evening_Ad6637 "Dev writes about himself on github: > Deep in the ANUS codebase, finding solutions together with AI / And dev's username on x is @nikmcfly69 / I like this guy, creative and shameless"; 2 u/KillerX629 "At least he didn't type OpenAnus". Alternatives offered instead: OpenManus, OWL, AgenticSeek, Suna, Eigent.
- Cross-posts the same day: r/AI_Operator "Manus like open source tool?" (1k35i1b, 4) and "Open Manus system?" (1k3910s, 9); r/learnmachinelearning "Manus? r/MLquestions" (1k395sp).

**R-11. r/LocalLLaMA, "Open manus"** (OpenManus launch thread, ANUS as the running joke)
- https://www.reddit.com/r/LocalLLaMA/comments/1j7vx6z/open_manus/ ; 2025-03-10; AS score 75, 31 comments.
- 50 u/No_Swimming6548 "Second open source anus project I have seen today. Something is going on..."; 27 u/Outrageous_Tackle135 "Open Ma Anus"; 19 u/glowcialist "*tips fedora* "m'anus""; 7 u/duh-one "They totally missed the mark. Since Manus is closed source, they should've called OpenUranus"; 1 u/m3kw "Open MAnus, why not call it Open Myanus"; 1 u/SufficientPie "Worse than https://github.com/nikmcfly/ANUS?"; 19 u/i_wayyy_over_think on the parallel Manus sandbox leak ("they asked what was in the contents of /opt/.manus and it provided a zip file").

**R-12. Comment-level mentions in big threads** (link-drops that carried the repo to large audiences)
- r/github "What's the coolest GitHub repo you've ever stumbled on by accident?" (2025-03-22, AS 812 points, 92 comments): u/stonedoubt answered with only the ANUS link, score 15. https://www.reddit.com/r/github/comments/1jhl8ad/
- r/LocalLLaMA "What is the absolute best open clone of OpenAI Deep Research / Manus so far?" (2025-03-18, 42 points): u/indicava, score 13: "Let's not forget what is arguably one of the greatest repo's ever". u/BrewboBaggins (deleted later): "Hey, Where Is nikmcfly's Open_Anus ? I hear it's raising quite a stink. I'll see myself out..." https://www.reddit.com/r/LocalLLaMA/comments/1je47w9/
- r/LangChain "Any open source alternatives to Manus?" (2025-03-24, 28 points): u/DryGur4016 link only, score 8. https://www.reddit.com/r/LangChain/comments/1jiyvbb/
- r/Popular_Science_Ru "China presented the world's first autonomous AI" (title translated; 2025-03-11, 39 points, 24 comments): u/Ok-Contribution-8612, score 11 (translated): "You're behind on the news. They already made ANUS, a free alternative to MANUS (no, really, here's the github)". https://www.reddit.com/r/Popular_Science_Ru/comments/1j8o2h3/
- r/italy Casual Friday (2025-03-21, 584 comments): u/VegetablePlastic9744 (translated from Italian) "Wait until you discover Anus AI (yes, it really exists)"; and in "Has online product search become unusable?" (2025-03-26, 384 points): "It's just a wrapper (of Claude, whose API costs a fortune...), there are open source alternatives, like OpenManus or, risky click of the day, ANUS". https://www.reddit.com/r/italy/comments/1jgamre/ , https://www.reddit.com/r/italy/comments/1jjru7n/
- r/singularity "Got Access to Manus - What do you guys wanna make?" (2025-03-12, 57 points, 63 comments): u/Issue-Leading link only. https://www.reddit.com/r/singularity/comments/1j9keh2/
- r/deeplearning "Manus ai accounts for cheap!" (2025-03-24): u/catsRfriends "There's an ANUS repo that claims to do the same".
- r/ChatGPT "I trained an AI on 3 months of continuous fart sounds. Here's what happened." (2025-08-20, AS 4546 points, 252 comments): u/mwcAlexKorn "I found the best agentic framework for building applications on top of your LLM: https://github.com/nikmcfly/ANUS" (score 1). The repo as the canonical punchline for any butt-adjacent AI thread. https://www.reddit.com/r/ChatGPT/comments/1mv0lth/
- r/artificial "Discover Manus - The AI That Builds Complete Websites From Scratch" (2025-08-12): u/vornamemitd link only.
- r/LocalLLaMA "any open source / alternative to manus ai that run %100 Locally" (2025-11-18): u/MelodicRecognition7 links github.com/anus-dev/ANUS (first Reddit link to the new org URL found).
- A coding subreddit, "Okay!" (2025-12-16/20): u/R0bot101 "You ever heard of Anus? It was coded by Manus. What a time to be alive https://github.com/anus-dev/anus"
- r/ADHD_Programmers "How are you using AI to make your life easier?" (2025-04-11): u/fuckthehumanity "I mistyped my search for Manus AI. This is a really good read." (link to the same third-party website, see SAFE file)

**R-13. Posts filtered or removed on arrival** (moderation record)
- r/AI_Agents, 2025-03-09 19:39 UTC, by u/nikmcfly himself: "ANUS: I asked Manus AI to create its own open-source alternative, and it built a complete AI agent framework" -> `automod_filtered`, body "[removed]", score 1, 0 comments. The creator's own Reddit launch never went live. https://www.reddit.com/r/AI_Agents/comments/1j7fp7r/
- r/MachineLearning, 2025-03-13, u/Limp-College-1928: "Meet Manus, China's AI Agent So Autonomous It's Already Forked Itself (Into "ANUS")" -> AutoModerator: "automatically removed for not having a tag in the title"; the re-post with "[News]" tag (1jalp2e) -> removed by Reddit (`removed_by_category: reddit`, i.e. site-level spam filter).
- r/developersIndia 1j9l31f (2025-03-12) -> removed by moderator.
- r/lisp "ANUS-AI" (2025-03-11, u/DirectAd1344) -> automod_filtered. (Why r/lisp is unknown.)
- r/Python "pip install anus-ai" (2025-05-27, u/Maleficent-Pass2994) -> removed by mods as belonging in r/LearnPython. https://www.reddit.com/r/Python/comments/1kwlst5/
- r/ClaudeAI "Waiting for FreeOpenManus / ANUS OR Claude3.7 API OR Claude Code?" (2025-03-10) -> deleted by author.
- r/singularity "OH I get it now..." (2025-10-15, u/AssociationNo6504): "The Anthropic logo is like the AI's anus that craps out your AI slop." -> removed by moderator. Only reply: "Very mature joke". (Adjacent, not about ANUS.)
- r/shittyaskscience "What's the largest LLM I can fit inside my anus? (citation needed)" (2025-03-24) -> removed by Reddit. (Adjacent.)
- No evidence was found of a subreddit banning the word itself; removals cite missing tags, low quality, "not real", or automod filters on new accounts.

**R-14. Organic "user" posts**
- r/FoundersLoveAI, "An AI agent that's actually legit called ANUS. Who would've thought" (2025-03-30, u/vjeeter, score 1): "Unlike Manus AI, which keeps you on a waitlist forever, ANUS is completely open source and takes like 2 minutes to set up: pip install anus-ai" ... "I've been using it to: Write and debug code while I supervise / Scrape websites ... / Generate content that doesn't sound AI-written". Reads like marketing copy; no replies. https://www.reddit.com/r/FoundersLoveAI/comments/1jni3pl/
- r/LinkedInLunatics, "The Birth of ANUS" (2025-03-14, u/jsbarrios, AS score 11, 3 comments), image https://i.redd.it/qwgyatcaoooe1.jpeg (a LinkedIn post about ANUS, mocked as LinkedIn hype). Same image cross-posted to r/DoPutYourDickInThat (2025-03-15, score 4). https://www.reddit.com/r/LinkedInLunatics/comments/1jb88uy/

**R-15. "M-anus": a parallel pun by another builder** (same 48 hours)
- u/TheCoffeeLoop built a WordPress workflow agent and named it "M-anus": r/ClaudeAI "I made my own Manus in a few minutes and got the same results with Sonnet for almost free" (2025-03-10, AS 98, 20 comments); r/perplexity_ai (2025-03-10, AS 84, 29); r/singularity (2025-03-11, AS 40, 11, later removed by moderator); r/artificial (automod_filtered). Shows the pun was independently obvious to builders the same weekend; not connected to ANUS.

### Threads (Meta)

Counts as shown by WebFetch of the public post page on 2026-09-24 (likes / replies / reposts / shares / views). Replies were not rendered for logged-out fetches.

- **TH-1. @githubprojects, 2025-03-13**: "ANUS is a powerful open-source AI agent framework for automating complex tasks with natural language. -> No invite code unlike MANUS." Views 128K, likes 1K, 80 comments, 122 reposts, 572 shares. https://www.threads.com/@githubprojects/post/DHJiiepzJ51 (Biggest single Threads item found; the same account's X post asked whether the name is "just a humorous attention-grabbing acronym", X lane.)
- **TH-2. @unwind_ai (verified), 2025-03-10**: "China's Manus AI created its own opensource alternative ANUS. In just 25 minutes. With a single prompt and push to Git using Cursor." (price line moved to safe file). Views 182K, 230 likes, 34 comments, 39 reposts, 102 shares. https://www.threads.com/@unwind_ai/post/DHCsAn-MVLz
- **TH-3. @sung.kim.mw, 2025-03-09** (the earliest Threads post found, same day as the repo): "Anus: Open-source alternative to Manus AI? Anus (Autonomous Networked Utility System) is a powerful, flexible, and accessible open-source AI agent framework designed to revolutionize task automation." GitHub link card. Views 33.1K, 418 likes, 61 comments, 73 reposts, 156 shares. https://www.threads.com/@sung.kim.mw/post/DHAXJNEx5sE
- **TH-4. @sambhav.ai, 2025-03-10**: "this is wild! manus ai just built its own open-source alternative from scratch in 25 minutes! meet ANUS (autonomous networked utility system) [source: nikmcfly on x]" - 63 likes, 6 comments. Follow-up "github repo: nikmcfly/ANUS mit licensed" - 14 likes, 1.1K views, two images. https://www.threads.com/@sambhav.ai/post/DHA0tibTK8w
- **TH-5. @sambhav.ai, 2025-03-14**: "remember ANUS ?(the open source MANUS alternative) these are some of its github issues" + two laughing emoji; screenshot of the repo's GitHub issues. 92 likes, 4 comments, 5 reposts, 21 shares. https://www.threads.com/@sambhav.ai/post/DHMMA7bTQBA (Note the "remember ANUS?" framing only five days after launch: the joke was already treated as old news.)
- **TH-6. @thedeveloperstory, 2025-03-11**: "GitHub link: https://github.com/nikmcfly/ANUS" (link post, counts not rendered). https://www.threads.com/@thedeveloperstory/post/DHEUZE_zZ2Y ; @unwind_ai follow-up link post: https://www.threads.com/@unwind_ai/post/DHCsBfeMti9
- **TH-7. @3.14rock, 2025-03-30** (translated): "Just as you asked, here's an Anus for you, and a free one too. No need to thank me" + repo link. 65 views, 1 like. https://www.threads.com/@3.14rock/post/DH1RukIIX_9 (ANUS as a gag gift between friends.)
- Related (not ANUS): @itsjasonai on CAMEL-AI OWL as "a free, open-source alternative to Manus AI" https://www.threads.com/@itsjasonai/post/DHIqpuJiyMD

### LinkedIn

- **LI-1. Unwind AI company page, March 2025** ("1 year ago" at fetch): "China's Manus AI just built its own open-source alternative... And the entire project took 25 minutes. No, this isn't a typo. An AI agent actually created its own alternative framework." Explains the prompt -> code -> "The human's only job? Push it to GitHub using Cursor." Ends "We're witnessing something unprecedented: AI creating tools to make itself more accessible." 84 reactions, 10 comments. https://www.linkedin.com/posts/unwind-ai_chinas-manus-ai-just-built-its-own-open-source-activity-7305047258306125825-jElU
  - Comments: Gargi Gupta "Is OpenAI getting DeepSeek'd again lol"; Saty Raghavachary "Lol about ANUS :) Pretty cool though. And, there is OpenManus too..."; Mason Tortorich "Personally I would have called it Magnus AI rather than Manus AI - but fine work nonetheless"; Ozden Erdinc "I watched the capabilities yesterday, it's absolutely mindblowing."; Shane S. "GenAI is greatly reducing business moats or eliminating them altogether."; Kairos Data Labs "This looks cool!"
  - Same text as a newsletter: https://www.theunwindai.com/p/manus-ai-builds-its-own-opensource-alternative (press lane pointer)
- Dates of LinkedIn posts are decoded from the activity ID (id >> 22 = Unix ms); LI-1 = 2025-03-11 02:09 UTC.
- **LI-2. Simon Lee, 2025-03-10 11:19 UTC** (reshare of a Korean post by SH Park): "There was a prompt hack in Manus, which he introduced today. Someone prompted Manus to 'open source yourself' and it did, and it was published on GitHub under the name ANUS. This will contribute tremendously to the development of AI Agents, but I think we will have to be very careful about prompt hacking of AI Agents in the future." https://www.linkedin.com/posts/simon-lee-003689288_github-nikmcflyanus-activity-7304823309538336768-4DmX (This "prompt hack / Manus leaked itself" reading mixes ANUS up with the real Manus sandbox leak of the same weekend; see Arguments.)
- **LI-3. Deepak S., 2025-03-11 05:45 UTC**: the same "prompt hack" text in English, 2 reactions. https://www.linkedin.com/posts/deepaksethuraman_github-nikmcflyanus-activity-7305101446755008512-XWs9
- **LI-4. Mark Kluepfel, 2025-03-10 22:45 UTC**: post sharing the repo (page now 404). https://www.linkedin.com/posts/mark-kluepfel-b2720bb_github-nikmcflyanus-activity-7304995874269483008-ILfL
- **LI-5. Abderahmane Boucetta, PhD (AI scientist, founder), 2025-03-12 05:56 UTC**: "Anus: Autonomous Networked Utility System / You gotta love the internet". 14 reactions, 9 comments. Comments: Rob Boerman "Great name. So this is actually a FANN(y) diagram?" (pun on the Venn-diagram image); Anas Riad "Well, they could have chosen a different name"; Cihan Bulut "does it work?". https://www.linkedin.com/posts/boucetta-abderahmane_anus-autonomous-networked-utility-system-activity-7305466648906317824-ElIF
- **LI-6. Enoch Kan, 2025-03-12 12:21 UTC**: "I get that an open-source agentic system replicating MANUS is cool, but y'all really need a better name. Update: Turns out ANUS was literally generated by MANUS. AI is wild." 10 reactions, 1 comment (David Tang: "Wow was it a byproduct of MANUS?"). https://www.linkedin.com/posts/enochkan_github-nikmcflyanus-activity-7305563499189993472-iLke
- **LI-7. Raymond Blyd (legal-tech), 2025-03-13 15:30 UTC**: "Impressed by Manus AI? Meet Anus, a manus open source clone created with...Manus AI / If you're building proprietary Legal AI and you're successfull...you'll be cloned and open sourced / But...really 'reason' about naming your clone..." 26 reactions, 7 comments. Comments: Holger Zscheyge "What, Uranus was already taken?"; Antti Innanen "I thought Claude 3.7. and GPT 4.5. were bad model names...but 'model anus'...wow"; Ali M. "Pretty sure it's named provocatively on purpose, a lot of the error messages built in are also silly"; Konstantinos P. Anagnostopoulos "Let's make a greek one called Nous (mind)."; Valentin Feklistov "This is filigranus!"; Milen Hristov "Can you build Manus clone with DEEPseek?". https://www.linkedin.com/posts/raymondblijd_github-nikmcflyanus-activity-7305973436441391104-Q5Gf
- **LI-8. Katya Fisher, 2025-03-13 15:54 UTC**: reshare of LI-7 with a laughing emoji; 4 reactions; comment by J. (Aryeh) Czelusniak: "This is really edgy marketing..." https://www.linkedin.com/posts/katyafisher_github-nikmcflyanus-activity-7305979649480683520-dGIK
- **LI-9.** r/LinkedInLunatics "The Birth of ANUS" (see R-14) is a screenshot of a LinkedIn post about ANUS mocked as LinkedIn hype; which LinkedIn post it shows was not established (image not viewed).

### Bluesky

Source: public AppView search API (api.bsky.app app.bsky.feed.searchPosts), queries nikmcfly / "ANUS Manus" / "Autonomous Networked Utility System" / anus-dev / "ANUS agent" / "ANUS CLI" / "ANUS grok" / "Manus anus". L = likes, RP = reposts, R = replies at fetch time. Post URL = https://bsky.app/profile/<handle>/post/<id>.

- 2025-03-09 · timkellogg.me · L33 RP3 R4 · "manus! manus! everyone's talking about manus, the AI agent that's better than DeepResearch. someone made an open source version of manus / welcome to ANUS: Autonomous Networked Utility Service" (sic, "Service") · https://bsky.app/profile/timkellogg.me/post/3ljy6ko7auc2f
- 2025-03-09 · opensource.activitypub.awakari.com (bridged bot) · re-broadcast of the HN title "Anus: An open-source AI agent framework created by Manus AI itself" (two copies) · https://bsky.app/profile/opensource.activitypub.awakari.com.ap.brid.gy/post/3ljxsjs6mfbn2
- 2025-03-10 · sungkim.bsky.social · L21 RP4 R4 · same text as TH-3 · https://bsky.app/profile/sungkim.bsky.social/post/3ljyq4olnkk2m
- 2025-03-10 · michabbb.bsky.social · L1 R2 · feature thread "#ANUS: Autonomous Networked Utility System - A powerful #opensource #AI #agent #framework" · https://bsky.app/profile/michabbb.bsky.social/post/3ljyduqss2s23
- 2025-03-10 · chrisoffner3d.bsky.social · L6 R1 · "hmm... github.com/nikmcfly/ANUS" · https://bsky.app/profile/chrisoffner3d.bsky.social/post/3ljyv3ait422m
- 2025-03-10 · mary.my.id · L2 · "crying github.com/nikmcfly/ANUS/..." · https://bsky.app/profile/mary.my.id/post/3ljyqxtyadsth
- 2025-03-10 · justchidi.bsky.social · L2 R1 · "It's incredible how any major AI app is just replicated easily in the open source community. Manus AI only had a couple of days to shine, now we have ANUS and OpenManus" · https://bsky.app/profile/justchidi.bsky.social/post/3ljzbhurdxk2d
- 2025-03-10 · mignax.bsky.social · (translated from French) "Well, bravo for the project name" + sweat-smile emoji · https://bsky.app/profile/mignax.bsky.social/post/3ljzbibuf5c24
- 2025-03-10 · rdenadai.dev · L2 R1 · (translated from Portuguese) "A friend of mine sent me this... Let 5th grade begin!!! So, is the ANUS working??" · https://bsky.app/profile/rdenadai.dev/post/3ljzly3gvsc2e
- 2025-03-10 · t0pol.net · R1 · quotes the README's first sentence in quote marks, deadpan · https://bsky.app/profile/t0pol.net/post/3ljz5uzoxls2x
- 2025-03-12 · olifer.org · L12 RP3 R1 · (translated from Ukrainian) "Who would have thought of that" + peach emoji "Anus: Autonomous Networked Utility System" · https://bsky.app/profile/olifer.org/post/3lk7hum7apc2n
- 2025-03-12 · jamie.schembri.me · "The best thing to come out of the AI space in a long while has to be this gem. That logo, though." · https://bsky.app/profile/jamie.schembri.me/post/3lk6gtdraos2z
- 2025-03-12 · silastittes.bsky.social · L3 · "TIL about github.com/nikmcfly/ANUS, which appeared unsolicited on my feed and now yours. You're welcome?" · https://bsky.app/profile/silastittes.bsky.social/post/3lk73bxgqpc2r
- 2025-03-12 · 3drx.bsky.social · L1 · rolling-laughing emoji + link · https://bsky.app/profile/3drx.bsky.social/post/3lk6u2xpxgc2z
- 2025-03-13 · remyporter.bsky.social · "Accurate, since most AI chatbots are talking out their ass github.com/nikmcfly/ANUS" · https://bsky.app/profile/remyporter.bsky.social/post/3lkb2u2dkqc2e
- 2025-03-13 · creatuluw.bsky.social · "Whats in a name? github.com/nikmcfly/ANUS" · https://bsky.app/profile/creatuluw.bsky.social/post/3lkarimxhok27
- 2025-03-13 · ennmo.bsky.social · promo post with peach emoji and hashtags · https://bsky.app/profile/ennmo.bsky.social/post/3lkcalalax22r
- 2025-03-14 · justbearcause.eurosky.social · L6 RP1 · melting-face emoji x3 + link · https://bsky.app/profile/justbearcause.eurosky.social/post/3lkeixzzh5223
- 2025-03-16 · ben-r.bsky.social · "Memia 2025.10: Autonomous Networked Utility System" (newsletter issue named after the acronym) · https://bsky.app/profile/ben-r.bsky.social/post/3lkjnlfi56c2w
- 2025-03-17 · tisortoise.bsky.social · "Manus? More like my anus" · https://bsky.app/profile/tisortoise.bsky.social/post/3lkmb3a4knc2v
- 2025-07-16 · orbita.social.br · (translated from Portuguese) "Meet ANUS AI" (Brazilian link aggregator)
- 2025-07-29/30 second small wave: tom-doerr.bsky.social (link only, 3lv4uokgcut2m); 1ilhas.bsky.social L4 R2 (README sentence, 3lv5mbgshos2p); rkatz.xyz L2 R1 (translated from Portuguese) "here's an interesting AI and network automation project ... I'm sure @macgyver.engineer has a finger in the ANUS" (3lv7skunqok2q).
- 2025-11-16 Japanese wave on the new org URL: anon5r.com L3 (translated from Japanese) "An OSS project that a lot of people will probably like github.com/anus-dev/ANUS" (3m5qsfbb32k25); shun159.bsky.social L1 "what the...? github.com/anus-dev/ANUS" (3m5qp7phwrs2t); bridged Misskey account zyoshoka (translated from Japanese) "It's kind of funny that it's being called a strange smell" linking https://github.com/anus-dev/ANUS/issues/84 (3m5qpy3vgvee2).
- 2026-05-28 · imouthes.com · "Apparently this is a real project" + link to anus-dev/ANUS (3mmwasz7ayk2f)
- 2026-08-06 · blue-labs.org · "github.com/anus-dev/ANUS" + flushed-face emoji (3msf2mgessk2y)
- Adjacent Bluesky joke families (not about the repo; context for how the pun lives on):
  - Meta-branded Manus (2026, after Meta put Manus in front of Facebook users): rob-sheridan.com L232 RP30 R14 (2026-02-26): "Meta's new AI bot is named "Manus," which is short for M. Anus, an abbreviation of its full name, Meta's Anus." (3mfqehxobpc24); coachfinstock.bsky.social L119 RP16 (2026-03-03): "Meta + Anus = Manus" (3mg5zclfy2s2a); squishythings.com L8 (2026-02-01): "meta has introduced manus? your ai work partner? manus? meta anus????"; denniswatson.bsky.social (2026-03-03): "How the hell do whole meetings go by where no one says "Aren't we concerned that there will be anus jokes?""; jverheul.bsky.social L5 (2026-03-03) a fake Pitchbot dialogue ending with "Pitchbot: "Manus""; geneha.com L17 (2026-03-30): "OMG, Facebook's Manus (short for Man Anus) wants to enhance my post making fun of Manus."
  - Dark Souls boss "Manus, Father of the Abyss": garybutterfield.bsky.social L34 (2025-04-22): "Kicked out of the dark souls group chat for pronouncing Manus like it rhymes with anus" (3lngmdnklqc24); monkipi.bsky.social L28 RP6 (2026-08-29): joke that "Manus, Father of the Abyss was actually an early placeholder name ... "Male Anus, Father of the Abyss"".
  - Marine biology: "manus" = informal "mouth-anus" of cnidarians; echinoblog.bsky.social posts sea anemones "showing off its cute "manus" (mouth-anus)!" repeatedly (2025-04-28, 2025-07-25, 2026-03-27 L52 RP16, 2026-08-29); rebeccarhelm.bsky.social (2023) "They throop through their manus." The word had an anus meaning in biology slang before any AI. Other rkeys: monkipi 3mu6zrarlrc2t, squishythings 3mdr4yy4ytc2o, denniswatson 3mg64zpmv2c2e, jverheul 3mg64sj5fgc2o, geneha 3mic2yc2ris2x.

### YouTube

Metadata from the public watch page (ytInitialPlayerResponse) and comments from the public comment feed, fetched 2026-09-24.

**YT-1. "ANUS - Autonomous Networked Utility System #ai #[Russian word for neural network] #manus"** (a YouTube Short, the most-watched ANUS video found)
- https://www.youtube.com/shorts/Woc142xS-HU ; channel "IIPredstavlyaet" (Russian-language channel name, roughly "AI Presents"; channelId UCUjKbml1dM2oy2yeceeILJA). Published 2025-03-20. 14 seconds. Views 49,360; likes 2,408; 41 comments. No description.
- Comments (all translated; likes in brackets):
  - [176] @muradpro1317: "The name gives you a cheerful smile" (edited later: "WOW, 163 LIKES, respect to whoever is liking")
  - [104] @sadharry5291: "How to control a computer with your anus"
  - [35] @Nikos_Mant: "I got scared at first" + sweat-smile emoji
  - [23] @OlegBaryshev-g6e: "No comment"
  - [18] @FAIGG86: "Why would I need two"
  - [16] @gishta1592: "Finally they've invented an a-n-u-s" (self-censored with symbols)
  - [10] @gonabro: "I've got enough of my own, no thanks"
  - [10] @wllwelles4485: "Control through a certain place" (a Russian idiom that also means "done half-assed")
  - [5] @Ytssa: "I'll try controlling a computer with an anus"
  - [2] @Mr.Python-1.20.0: "Top-tier name, great idea, I hope the name has a decoding? It's not literally the name, it's an abbreviation? The main thing is nobody asks you which neural network you use"
  - [2] @tetris1320: "Why do so many AIs have such funny names?" -> @GariVud: "[a rhyming pun on 'guts']"; @Kostya8888: "Dickpi... DeepSeek" (pun on DeepSeek)
  - [4] @PiXEL_D-v9j: "ahahahahahaha"; [1] @Qw0nGGie: "A spare one"; [1] @haxidenti6001: "As I understand it, it works accordingly"; @ROKSTI-gj1qd: "how do you install it?"

**YT-2. "ANUS uma alternativa ao MANUS?"** (Portuguese: "ANUS, an alternative to MANUS?")
- https://www.youtube.com/watch?v=7HJtdndhe6A ; channel "Dev Evangelista" (UCKrnrV7aWb_yw5KJeXUhj-Q). Published 2025-03-10 (US Pacific date; one day after launch). 3 min 18 s. 293 views, 7 likes, 1 comment. Description (translated from Portuguese): "in this video we'll get to know ANUS, an open-source project that promises to be an alternative to the Chinese MANUS" + GitHub link, #python #llms #aiagents. Only comment (translated): "Two videos on the same day, what a machine, bro". Earliest video review found.

**YT-3. "The Backdoor to AGI is Real. And It's Called ANUS."**
- https://www.youtube.com/watch?v=8BI3GiKrphk ; channel titled "ANUS" (UCySM4f9J2udgD9JN4UZAjGg; 50 subscribers, 1 video). Published 2025-09-05 (relaunch period). 71 seconds. 226 views, 1 like, no comments. Description only "https://anus.dev". The project-side promo video of the Grok CLI relaunch. (The channel's handle is noted in the SAFE file.)
- Searches in English, Russian, Chinese and Portuguese ("ANUS Manus AI", "ANUS autonomous networked utility system", "ANUS grok cli", "anus-dev", Russian and Chinese equivalents) surfaced no other ANUS-specific videos; big "open-source Manus alternative" videos (WorldofAI 201k views, GosuCoder 35k, Better Stack 57k, Chinese deploy tutorials 52k-104k) cover OpenManus, OWL, Suna, AgenticSeek, not ANUS.

### Hatena Bookmark (Japan)

- https://b.hatena.ne.jp/entry/s/github.com/anus-dev/ANUS (same entry as the old nikmcfly URL): 5 users bookmarked, first bookmark 2025-03-10, category Technology. Only visible comment: uxoru, 2025-11-17 (translated from Japanese): "The name!" Matches the 2025-11-16 Japanese Bluesky wave (see Bluesky).

### AlternativeTo

- https://alternativeto.net/software/anus/about/ : listing "ANUS: Powerful open-source AI agent framework for automating complex tasks with natural language", added 2025-03-14, 0 likes, no user comments, 34 alternatives listed; the page's GitHub stats block reads 6,553 stars, 927 forks, 73 open issues, "as of September 5, 2025" (GitHub numbers are the GitHub scout's lane; quoted here only as what AlternativeTo displays).

### Chinese-language platforms

- Aliyun Developer Community and CSDN carried the same article, title (translated from Chinese): "Anus: A public stunt! An open-source AI agent project that replicates Manus's features entirely with Manus" (the Chinese title uses the slang for "pulling a stunt / doing it for the lulz"). https://developer.aliyun.com/article/1656850 ; https://blog.csdn.net/qq_19841021/article/details/146216467 (CSDN returned HTTP 521 on fetch; title from search index). Same title on Zhihu column: https://zhuanlan.zhihu.com/p/29813220554 (HTTP 403 on fetch).
- ai-bot.cn (AI tools directory), "Anus - an open-source AI agent project generated by Manus, replicating part of Manus's features": https://ai-bot.cn/anus/ ; the article treats the name straight; one reader comment by guest "dada" (2025, translated from Chinese): "This name... are you serious?"
- Zhihu list "Open-source alternatives to Manus (Manus AI substitutes directory)": https://zhuanlan.zhihu.com/p/29201279572 ; Bilibili read column "10+ AI Agent open-source projects roundup! The most complete Manus open-source substitutes": https://www.bilibili.com/read/cv41057608/ (both from search index; bodies not readable: 403 / empty render).
- Other Chinese listings of the same text: caprompt.com "Manus created its own open-source alternative: Anus" (https://www.caprompt.com/a/7571, now 404); xmsumi.com "5 AI Agent open-source projects, no invite code needed, Manus substitutes" (https://www.xmsumi.com/detail/540).
- V2EX: Manus threads exist (launch night "Discord filled with people begging for beta codes", t/1116213; "Free open-source Deep Research? Manus alternative?", t/1116586, 3 replies), but no reply mentions ANUS (checked t/1116586 in full).
- Weibo, Douyin, Bilibili video: nothing ANUS-specific surfaced via search; see Not found.

### 4chan /g/ (via desuarchive.org search API)

- No post links the ANUS repo (queries: nikmcfly, "Networked Utility System", "ANUS manus", "anus github manus").
- The Manus pun is present from day one: 2025-03-08 16:48 thread 104638835 reply: ">This AI agent called 'Manus' is going crazy viral / I can't believe m'anus is going viral."; 2025-03-10 thread 104652295 ("Uh... manusbros? Your response?"): ">Manus >Man >Anus"; 2025-03-18 thread 104759861: ">Man Anus >Manus / Great name".

## Jokes and memes catalog

Format: what · where · date · who · link · image URL · engagement · why funny (one line). Images were not downloaded or opened; descriptions come from post text and replies unless stated.

**Project-born memes (March 2025 wave)**

- **J-1. The "ANUS" Venn diagram** · creator's launch graphic ("This Venn diagram (created by Claude 3.7 Sonnet in seconds) explains it all"), reposted to r/singularity, r/AI_Operator, r/accelerate · 2025-03-10 · u/Worldly_Evidence9113, u/HardcoreIndori, u/rentprompts · https://www.reddit.com/r/singularity/comments/1j7r2r9/ · https://i.redd.it/1rwm0xmknsne1.jpeg , https://i.redd.it/1yh1drcqyune1.png , https://i.redd.it/jecr6bciuune1.png · 465 + 12 + 2 upvotes; top reply 250 · Why funny: an earnest explainer diagram whose overlapping circles look like female anatomy, so the crowd re-labels it "V-Ageena", "vAGIna", "FLOWER", "VULVA" and, on LinkedIn, "a FANN(y) diagram".
- **J-2. The GitHub issues screenshot** · r/ProgrammerHumor "theyHateUsCauseTheyAintUs"; Threads @sambhav.ai "remember ANUS? ... these are some of its github issues"; r/selfhosted "look at the Github Issues" · 2025-03-13 to 2025-03-16 · u/AHalfFilledBox, @sambhav.ai, u/Purple_Wear_5397 · https://www.reddit.com/r/ProgrammerHumor/comments/1ja0tzv/ , https://www.threads.com/@sambhav.ai/post/DHMMA7bTQBA · https://i.redd.it/kqv7n6rq2doe1.jpeg , https://preview.redd.it/26bzpur982pe1.png · 1,885 upvotes (then removed as "low quality"), 92 Threads likes · Why funny: a normal issue tracker becomes innuendo when the repo is ANUS (issues about "buttplug support", "not accepting input", something "Implemented in Rust", "Streaming on Twitch"; top reply 412: "That was a roller coaster up until buttplug support").
- **J-3. The URL itself** · r/ProgrammerHumor · 2025-03-13 · u/aaron_1011 · "The url "ANUS/issues" got me blowing air from nostrils" (14) · u/Tupcek "I push and pull into that repo all the time. Sometimes I switch branches, too!" (6) · Why funny: every git verb turns obscene next to the repo name. Later echo: Japanese Bluesky post (2025-11-16) amused that https://github.com/anus-dev/ANUS/issues/84 complains of a "strange smell".
- **J-4. "they only hate us cuz they ANUS"** · r/singularity (60, u/One_Geologist_4783, 2025-03-10); r/ProgrammerHumor title "theyHateUsCauseTheyAintUs" and the top reply "Really missed the "theyHateUsCauseTheyAnus" opportunity in the title." (216, u/ddonsky) · Why funny: the "they hate us cause they ain't us" meme collapses naturally into the acronym.
- **J-5. Backronym arms race** · r/singularity 1j7r2r9 and elsewhere, 2025-03-10 onward · Centralized Universal Neural Transformer System (93, u/m3kw); "virtual autonomic generative intersectional neural agent" (88); "Virtual artificial general intelligence network augmentation" (16); "Viral Artificial General Intelligent Network Agent"; TART "Totally Autonomous RPA Transformer" -> "ANUSTART" (5); TARTANUS and SALTYANUS ("Shared Access to LLMs Transparency Yardstick"); L.U.B.E. "Low system requirements, Universal Backend, Efficient"; "Programmatic Enhancing Network Intelligence Singularity"; "PeNUS ... Probability enhancing Neural User System"; "Computation Unified Multiscan"; Brazilian "VAGINA system: Variable automatic geometric intense nano-automation" (translated from Portuguese) · Why funny: commenters compete to build worse acronyms with the same straight-faced tech vocabulary as the README.
- **J-6. URANUS and friends** · HN copycat "(Uranus) Manus.im Open Source WIP" by NeoFutura, 2025-03-15, https://news.ycombinator.com/item?id=43369744 ("Always covering the backend"; reply "This is the ultimate "backdoor", isn't it?"); plus suggestions "Uranus" (HN gmuslera 2025-03-08, r/singularity), "OpenUranus" (r/LocalLLaMA, 7), "Open Uranus!", "What, Uranus was already taken?" (LinkedIn), "Manass?" (fake "head of marketing for Manus AI", r/AI_Operator), "Mananus?", "Womanus? Ladus?" (HN), "OpenANUS", "Open_Anus", "Open Myanus", "MyAnus" · Why funny: the pun chain Manus > ANUS > URANUS escalates one planet at a time.
- **J-7. AGI will come out of ANUS** · r/singularity · 2025-03-10 · u/ObjectiveBrief6838 "Humans are birthed from a vagina but AGI will be birthed from ANUS" (64); u/playpoxpax "Wait until this shit ends up as the world's first AGI." (47) + RemindMe for 2027-03-10; u/MoarGhosts "you've created AGI ... Anal Gaping Image" (7); u/Heavy_Hunt7860 "Aptly named considering it could give birth to AGi" · Why funny: singularity-sub AGI eschatology meets toilet humor; a reminder bot is literally scheduled to check in 2027.
- **J-8. Butt puns in replies** · r/singularity · 2025-03-10 · "Finally, an agent framework we can all get behind!" (35) -> "Behind" (9); "Butt... is it legit?" (31) -> "You bet your ass it is" (37); "I'm sorry, but this is behind MANUS. A solid number 2." (7); "High quality shit post" (56); "I want to get my Manos on that ANUS." (14); "Please don't make fun of his ANUS." (7); "I look forward to check out your polished ANUS" (12); "I have installed your anus"; "Aw neat, it's free-flowing!"; "ANUS posts are shit posts." · Why funny: every generic launch-thread phrase ("get behind", "number 2", "polished") becomes a double entendre.
- **J-9. The CV line** · r/indotech · 2025-03-14 · u/suka-khayalan · "I can't believe im gonna put 4 years experience using ANUS in my CV" (12) · https://www.reddit.com/r/indotech/comments/1jb2jrm/ · Why funny: imagining the framework on a resume.
- **J-10. "Control the computer with your anus"** · YouTube Short YT-1 comments · 2025-03-20 onward · @sadharry5291 "How to control a computer with your anus" (104 likes, translated); "Why would I need two" (18); "I've got enough of my own, no thanks" (10); "Control through a certain place" (10) · https://www.youtube.com/shorts/Woc142xS-HU · Why funny: Russian viewers read the product literally, as a new body-part interface.
- **J-11. Back Orifice callback** · r/singularity · 2025-03-10 · u/FriendlyJewThrowaway "When Microsoft introduced MS BackOffice, a highly popular suite of tools for remotely hacking it called Back Orifice was introduced shortly afterward." (12) -> expertsexchange.com (9) -> "Microsoft BackShots" (5) · Why funny: veterans place ANUS in the long tradition of accidentally rude software names.
- **J-12. The "69" handle** · r/Twitter_Brasil (26, translated from Portuguese: "And the guy's nickname doesn't help, having "69" at the end"); r/LocalLLaMA u/Evening_Ad6637 quoting the GitHub bio "Deep in the ANUS codebase, finding solutions together with AI" and the X handle ending in 69: "I like this guy, creative and shameless" · Why funny: the author's own handle confirms the joke is deliberate.
- **J-13. Smell and stink** · r/LocalLLaMA "I hear it's raising quite a stink. I'll see myself out..." (u/BrewboBaggins, 2025-03-18); r/ProgrammerHumor "Sounds like shit code."; Bluesky remyporter "Accurate, since most AI chatbots are talking out their ass"; Japanese Bluesky on issue #84's "strange smell" (2025-11-16); HN "Did you detect any code smells?" (2025-03-09) · Why funny: the whole vocabulary of bad code (smells, stinks, shit code) is anal already.
- **J-14. The loincloth of doom** · HN · 2025-03-11 · `hollerith` · "if I'm going to be killed, and there's no way to stop it, I'd rather avoid the additional indignity of being killed by something named "Anus"" · https://news.ycombinator.com/item?id=43312723 · Why funny: an AI-safety doomer's serious plea for dignified naming of the thing that ends humanity.
- **J-15. Treating the thread as the agent** · HN · 2025-03-14/17 · two Korean users paste a task ("make me an EXE that analyses Go positions with KataGo") and ask "Can I ask questions in Korean?" into the ANUS HN thread · Why funny: the HN comment box mistaken for the AI agent's prompt window.
- **J-16. "The backdoor" line, reused by the project** · HN "This is the ultimate "backdoor", isn't it?" (disqard, 2025-03-15, on URANUS) -> the project's own relaunch video title "The Backdoor to AGI is Real. And It's Called ANUS." (2025-09-05, https://www.youtube.com/watch?v=8BI3GiKrphk) · Why funny: the community pun became official copy six months later.
- **J-17. Grok prophecy** · r/singularity · 2025-03-10 · u/here_now_be · "I was sure this was going to be some more Elon bs. like he made a woke version of grok and called it anus." · Why funny in hindsight: the September 2025 relaunch really was a Grok-powered ANUS CLI.
- **J-18. Code-level jokes noticed by users** · r/singularity Gemini Flash review (u/KitsuneFolk, 16): the HybridAgent complexity analysis compares task difficulty to "a constipated ANUS"; LinkedIn Ali M.: "a lot of the error messages built in are also silly" · Why funny: the joke runs inside the code, not just the name.
- **J-19. Unexpected-butt subs** · r/InesperadoCu ("Unexpected butt", Brazil) cross-posts "MANUS ANUS", "ANUS AI", "ANUS IA" (2025-03-14/15); "Unexpected Goatse" (r/Twitter_Brasil, 4); r/DoPutYourDickInThat cross-post of "The Birth of ANUS" (4) · Why funny: ANUS became content for subreddits that exist only to spot accidental butts.
- **J-20. LinkedIn wordplay** · LinkedIn LI-7 comments, 2025-03-13 · "This is filigranus!"; "I thought Claude 3.7. and GPT 4.5. were bad model names...but 'model anus'...wow"; "Let's make a greek one called Nous (mind)." · Why funny: professional-network politeness straining to discuss the name.
- **J-21. Russian meta-joke about AI names** · YouTube YT-1 · @tetris1320 "Why do so many AIs have such funny names?" -> @Kostya8888 "Dickpi... DeepSeek" (translated) · Why funny: ANUS as proof that AI product naming is broken in general.
- **J-22. "It named itself"** · r/AI_India · 2025-03-11 · Q "OP did you name it or did the Manus name it lol !!" (5) -> OP "It named itself" (5) · Why funny: blaming the AI for the joke (unverified claim).
- **J-23. Chinese headline** · Aliyun / CSDN / Zhihu, March 2025 · title (translated from Chinese) "Anus: A public stunt! An open-source AI agent project that replicates Manus's features entirely with Manus"; ai-bot.cn reader: "This name... are you serious?" · https://developer.aliyun.com/article/1656850 · Why funny: Chinese tech press files it under stunts while listing its architecture straight-faced.
- **J-24. "Risky click of the day"** · r/italy · 2025-03-26 · u/VegetablePlastic9744 · (translated from Italian) "there are open source alternatives, like OpenManus or, risky click of the day, ANUS" · https://www.reddit.com/r/italy/comments/1jjru7n/ · Why funny: the link's name makes it unsafe for work.
- **J-25. DevMeme "anus" logo** · devme.me "Software Naming and Acronyms Meme Explained" · 2026-06-12 · unattributed · https://devme.me/deepdive/anus-the-ai-agent-framework-name-nobody-sanity-checked · image https://devme.me/media/anus-the-ai-agent-framework-name-nobody-sanity-checked.webp (described by the page: a hand icon with sun rays and lowercase serif text "anus", i.e. the Manus logo minus the M) · 14 comments · Why funny: "Say the name out loud, check the acronym, check what it means in other languages" (quoted from the page). The latest meme-explainer found; shows the joke still circulating 15 months later.
- Reply images in r/singularity 1j7r2r9 (content not viewed): https://preview.redd.it/c96q9pqrptne1.jpeg (reply to "AGI will be birthed from ANUS", 29), https://preview.redd.it/dcjzk157psne1.jpeg (13), https://preview.redd.it/5m2nxjpfaxne1.jpeg ("Perfect logo for ANUS", 3).

**Pun prehistory and afterlife (not about the repo, but the soil it grew in)**

- **J-26. Dark Souls "Manus, Father of the Abyss"** · r/shittydarksouls "I'm looking at you manus(my anus)" 2020-08-27, 4,242 upvotes, 100 comments, https://www.reddit.com/r/shittydarksouls/comments/ihmts3/ , image https://i.redd.it/ynvp022cakj51.jpg ; "Fun Fact: If you take the M out of Manus he's just anus" 2021-10-14, r/shittydarksouls 298 (https://www.reddit.com/r/shittydarksouls/comments/q7pbpb/) and r/darksouls 64 (removed by moderator); r/darksouls "Manus kicked M'anus" 2019-03-25, 900; "Manus, the primeval Anus" 2022-09-10, image https://i.redd.it/gz3lu2c4oxm91.jpg ; Lies of P "Simon Manus? More like Shitman Anus" 2023 · Why funny: gamers had been removing the M from Manus for years before any AI agent existed.
- **J-27. Biology "manus" = mouth-anus** · Bluesky marine-biology accounts, 2023-2026 (echinoblog, rebeccarhelm "They throop through their manus.") · Why funny: in cnidarian slang the word already meant the one hole that does both jobs.
- **J-28. Manus launch weekend** · HN "Leave It to Manus" 2025-03-08/10 ("No, like anus with an M in front."); 4chan /g/ 2025-03-08 "I can't believe m'anus is going viral." · The pun was in the air 24 hours before the ANUS repo appeared.
- **J-29. Meta's Manus (2026)** · Bluesky rob-sheridan.com 232 likes "Meta's new AI bot is named "Manus," which is short for M. Anus, an abbreviation of its full name, Meta's Anus." (2026-02-26); coachfinstock "Meta + Anus = Manus" 119 (2026-03-03); HN 2025-12/2026-08 name threads (see HN-4) · Why funny: once Meta put Manus in front of Facebook users, the same joke went mainstream without ANUS's help.
- **J-30. "AI logos look like buttholes"** · r/TierlistFills series "How anus is X's logo?" (2026-08-05/06; "By a hair, Grok's logo is circular, not quite anus. How anus is Meta AI's logo?" 151 upvotes, 546 comments at capture) · HN 2025-04 and 2026-07 threads, HN "Why did Anthropic chose an anus for Claude's logo?" (2025-08-03), r/singularity "OH I get it now..." (2025-10-15, removed), r/InesperadoCu "Qwen's logo is definitely an anus" (2026-08-07), Mastodon German post on big-tech logos (2026-08-01, https://todon.nl/@fabian/117022528215295972), Lemmy awful.systems "This one has anus in the name https://manus.im/" (2025-04-12, score 8) · Why funny: the wider genre ANUS sits in; nobody in these threads cites ANUS, which is itself a finding.

## Recurring arguments

**A-1. "Is this a joke? Is the name on purpose?"** (the single most repeated question)
- Joke side: r/Twitter_Brasil "Even the chart, bro... this has to be a joke" (78), "Obviously it's a joke" (20), "Definitely on purpose" (19), "To look at this and not see it's a joke you need a negative IQ" (translated from Portuguese); r/indotech "he's definitely doing this on purpose. He must know what anus is, it's Latin" (translated from Indonesian); LinkedIn Ali M. "Pretty sure it's named provocatively on purpose"; r/AI_India "I think this a meme repo"; LinkedIn "This is really edgy marketing..."
- Serious side: r/singularity OP "It's serious project on GitHub" (33); r/indotech OP "This is real, enjoy the ANUS!"; r/ProgrammerHumor "so, it's real" (18); r/Popular_Science_Ru "no, really, here's the github" (11, translated); r/italy "yes, it really exists"; Bluesky imouthes.com "Apparently this is a real project" (2026-05-28).
- Who named it: r/AI_India "OP did you name it or did the Manus name it?" -> "It named itself". X's GitHub Projects account asked the same question publicly (X lane).
- Offended/tired side: r/LocalLLaMA "It's hard to imagine anyone in their right mind would name their project like that ... toilet humor" (3); r/AI_Operator "They really have to change the name !"; "I couldn't get past the name to read further"; LinkedIn Enoch Kan "y'all really need a better name"; LinkedIn Anas Riad "they could have chosen a different name"; r/singularity "Oh boy here comes the jokes." (7).

**A-2. "Is it real code or a shell?"**
- Looks real: Gemini Flash review pasted in r/singularity: "likely a functional project with elements of humor and satire injected into it" and "The features would take a long time to implement for just a joke" (16); r/indotech OP (translated from Indonesian): "Looking at its git docs it's very convincing".
- Does not work / is fake: r/singularity u/Subject_Shake_6367: "this project is just a shell, it has no real features inside, just mocks and some joking outputs"; u/NovelFarmer: "It doesn't seem to actually be real"; r/accelerate moderators removed it with the comment "not real"; r/KafkaFPS OP (translated): "far from everyone manages to launch Anus, and the project has made-up documentation, because Manus wrote it"; r/selfhosted: "It's clearly some AI generated crap" (10).
- Install reports: r/AI_Operator u/brodhavee: "I can't install it via docker ... anus --version doesn't work" with screenshots; u/Practical_Talk_529: "I've tried all the installation methods and have the same issues"; r/singularity "just try installing it lmao" (9); YouTube "how do you install it?"; LinkedIn "does it work?"; r/singularity request for a how-to-install video.
- Marketing-style testimonials: r/FoundersLoveAI "An AI agent that's actually legit called ANUS" claims hands-on use ("pip install anus-ai", "takes like 2 minutes to set up"); r/ChatGPT "I found the best agentic framework ..." (Aug 2025, score 1). Neither thread got replies.

**A-3. "Did Manus really build it? Is it Manus's own code?"** (the origin-story argument)
- HN `yodon`: "an incredible testimonial to the capabilities of Manus. Is Anus also able to "self-host" itself (generate an equivalent app), or, if not, is that a measure of a capability differences between the two systems?"
- "Prompt hack" reading on LinkedIn (Simon Lee, Deepak S., from a Korean original): "Someone prompted Manus to 'open source yourself' and it did" and warns about "prompt hacking of AI Agents". This merges ANUS with the real Manus sandbox leak the same weekend (r/LocalLLaMA: the agent handed over "a zip file of its source code" from /opt/.manus).
- r/singularity u/cassova: "Is this from some disgruntled employee from manus.im dumping their code base?"; LinkedIn Enoch Kan: "Turns out ANUS was literally generated by MANUS. AI is wild." -> "Wow was it a byproduct of MANUS?"; r/AI_India u/Frosty-Status-4809: either Manus "is conscious and is showcasing its sense of humor as a Manus knock off of sorts, or this is evidence that it lacks awareness".
- Unwind AI (LinkedIn, Threads, newsletter) framed it as "AI creating tools to make itself more accessible"; HN OP framed it as "AI systems building other AI systems".

**A-4. "Can open source clone anything in days?" (moats discourse)**
- Bluesky justchidi: "It's incredible how any major AI app is just replicated easily in the open source community. Manus AI only had a couple of days to shine, now we have ANUS and OpenManus"; LinkedIn Raymond Blyd: "If you're building proprietary Legal AI and you're successfull...you'll be cloned and open sourced"; LinkedIn Shane S.: "GenAI is greatly reducing business moats or eliminating them altogether"; HN 2025-12 `TigerHix`: "People literally built OpenManus the next day after Manus' launch marketing went viral to demonstrate the point."
- Competitor drive-bys in ANUS threads: CAMEL-AI's `lightaime` posted "Check out an open source alternative of Manus - OWL by camel-ai" on HN, r/singularity and r/AI_India; OpenManus was offered as "the real one" (r/singularity NovelFarmer, r/AI_India OP's own repo link, r/LocalLLaMA). ANUS lived in a crowded clone field: OpenManus, OWL, AgenticSeek, Suna, LangManus, Eigent, gptme.

**A-5. "Manus is just a wrapper" (context that shaped reactions to ANUS)**
- r/italy: "It's nothing special really, it's a wrapper of Claude Sonnet 3.7" (translated from Italian); u/TheCoffeeLoop's M-anus posts: "basically using a chain of Claude Sonnets and Qwen models"; HN 2025-12 `oefrha`: "a thin layer on top of Claude and all marketing". If Manus is a wrapper, a Manus-made clone is a wrapper of a wrapper.

**A-6. Suspicion about stars, forks and the surrounding ecosystem**
- r/selfhosted u/BillyBawbJimbo: "That thing has had almost 800 forks in a week. Are people just scraping for anything with AI in the readme and auto forking it?"; r/indotech OP about the project's website: "Honestly, after reading their website, its kinda sus". Further suspicion threads touch excluded topics (SAFE file).

**A-7. Security**
- Only indirect: "prompt hacking of AI Agents" worry (LinkedIn LI-2, LI-3); "the ultimate backdoor" pun (HN); r/indotech "Is it good for learning cybersecurity?" No thread was found that audits ANUS's sandbox or code-execution safety; see Not found.

**A-8. Moderation record** (did platforms treat the name as unacceptable?)
- Removals found cite process, not the word: r/accelerate "not real"; r/ProgrammerHumor "Rule 3: low quality" after 1.8k upvotes; r/MachineLearning missing [N]/[D] tag, then a Reddit-level spam removal; r/AI_Agents automod on the creator's own post; r/developersIndia mod removal; r/Python "belongs in r/LearnPython"; r/lisp automod. The name itself was never cited as the reason in any retrievable removal note.

**A-9. The Manus name debate** (parallel argument that ANUS weaponised)
- HN "Leave It to Manus": "A name that is mostly "anus" is actively bad" vs "Manus means hand in Latin" and the Monster.com counterexample ("The truly worst thing is not being talked about"); Marathi "human", Swedish "manuscript", Irish given name, "Manus Island", New Zealand slang (Bluesky). ANUS is the reductio: remove one letter and the anxiety becomes the product.

## Not found / doubtful

**Coverage limits of this pass**
- Reddit live data: reddit.com and old.reddit.com refuse logged-out JSON and page fetches ("Your request has been blocked due to a network policy"), so every Reddit score here is an archive capture (Arctic Shift about 36 h after posting; Pullpush near creation). Final scores after March 2025 are unknown. Where a number says "AS" it is the better of the two.
- Reddit comment coverage: full comment trees were pulled for 16 key threads (R-1 to R-11 and the big link-drop threads). A full-text sweep of all comments containing "ANUS" across AI subreddits failed (Arctic Shift timeouts, Pullpush HTTP 429 rate limiting). Comment-level mentions were found through identifier searches instead (nikmcfly, anus-dev, "Autonomous Networked Utility", the project's website domain). Comments that say "ANUS" without a link or identifier may be missing.
- Threads: replies are not rendered for logged-out fetches; only post texts and counters (rounded by the Threads UI, e.g. "1K") were captured.
- LinkedIn: only the eight posts that search engines indexed; comments partially visible; one post (Mark Kluepfel) now returns 404.

**Searched and not found**
- Hacker News: no second ANUS submission, no Show HN, nothing about the September 2025 Grok CLI relaunch (Algolia "ANUS grok", "anus-dev", "ANUS CLI": 0 relevant hits). The one ANUS story peaked at 18 points; no front-page evidence.
- Reddit relaunch era: no Reddit post about the Grok-powered ANUS CLI or the anus.dev site (Pullpush "anus.dev", "ANUS CLI", "anus grok" after 2025-08-01: nothing relevant). r/grok and r/xAI: no ANUS posts. r/Manus / r/ManusOfficial / r/ManusAiAgent: no ANUS posts. r/OpenAI, r/programming: no ANUS submissions.
- Product Hunt: no ANUS listing (site search for "anus" returns only unrelated products).
- Facebook, Instagram, TikTok: no public post found through web search; these platforms are not searchable logged-out, so absence is not proof.
- Mastodon: hashtag timelines (#anus) on mastodon.social, fosstodon.org, hachyderm.io show no ANUS-agent posts; full-text status search needs an account.
- Lemmy (lemmy.world federated search): no mention of the repo; only an adjacent joke "This one has anus in the name https://manus.im/" (awful.systems, 2025-04-12).
- 4chan /g/ (desuarchive search API): no mention of the repo; only Manus puns (see J-28). archived.moe is behind a Cloudflare challenge and was not searched.
- Discord: no public, indexable Discord discussion found. One Reddit comment about a Discord link is in the SAFE file (excluded topic).
- Habr: site search for "Autonomous Networked Utility System" returned nothing; Habr covers Manus only. Pikabu: only a passing "manus = anus" wordplay line in an unrelated 2025-03-15 post (https://pikabu.ru/story/prodolzhenie_posta_o_kitayskikh_tsentrakh_administrirovaniya_smartfonov_12491328); no ANUS post.
- Russian Telegram channels: no public channel post found by web search. r/KafkaFPS's AutoModerator states the sub mirrors a Telegram meme channel (t.me/Kafka_mems), so the R-8 meme likely also ran there; unverified.
- Weibo, Douyin, Bilibili video: nothing ANUS-specific found; Weibo search needs login. V2EX: no mention in the checked Manus-alternatives thread. Zhihu and CSDN article bodies were not readable (HTTP 403 / 521); only titles from the search index are used.
- Korean: a community post "Manus AI agent and ANUS, OpenManus in detail" exists at https://aiheroes.ai/community/297 but returned HTTP 503; a Steemit KR list (https://steemit.com/kr/@anpigon/20250316031657846) only lists the link. Korean original of the "prompt hack" post (by SH Park, reshared in LI-2) not located.
- Japanese Qiita / Zenn / note: web search returns only Manus and OpenManus articles, no ANUS. Korean GeekNews (news.hada.io): no ANUS item found by web search.
- Famous commenters: no widely known figure was found commenting on ANUS itself on HN or Reddit. Known AI posters who shared it: Sung Kim (Threads 418 likes, Bluesky 21), Tim Kellogg (Bluesky 33), Unwind AI (Threads 182K views, LinkedIn). Simon Willison and swyx appear only in later Manus threads, not about ANUS.

**Doubtful or unverified**
- "It named itself" (r/AI_India OP, 2025-03-11): unverified; the creator's HN text says only "I wrote the prompt and used Cursor to push to GitHub" and does not say who chose the name.
- "25 minutes" and "created by Manus" claims are repeated everywhere here but originate from the creator's X post (X lane); not verified in this pass.
- The Venn diagram (J-1), the GitHub-issues screenshot (J-2), the r/LinkedInLunatics image and the reply images were not opened; their descriptions are inferred from titles, bodies and replies.
- r/singularity OP u/Worldly_Evidence9113 posted the creator's X text verbatim; whether this account is connected to the creator is unknown.
- r/FoundersLoveAI "actually legit called ANUS" (u/vjeeter) and r/ChatGPT "the best agentic framework" (u/mwcAlexKorn) read like promotional seeding; no evidence either way.
- devme.me "14 comments" comes from the fetched summary, not a manual count.
- The r/ProgrammerHumor removal time (2025-03-15 15:41 UTC) is the timestamp of the moderator's removal comment; the post's `removed_by_category` field in the archive capture (taken earlier) is empty.
