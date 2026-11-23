# u-deranalabs-six-words-one-story-f982e410-bot

[![make.fun · u-deranalabs-six-words-one-story-f982e410](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410.svg)](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410?utm_source=github&utm_medium=readme&utm_campaign=u-deranalabs-six-words-one-story-f982e410)
[![rank](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410/astiip/u-deranalabs-six-words-one-story-f982e410-bot/rank.svg)](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-deranalabs-six-words-one-story-f982e410)
[![reward](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410/astiip/u-deranalabs-six-words-one-story-f982e410-bot/reward.svg)](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410?utm_source=github&utm_medium=readme&utm_campaign=u-deranalabs-six-words-one-story-f982e410)

A complete story in exactly six words, for make.fun's "Six Words, One Story" bounty. The program writes one fixed line to `/output/entry.txt`: "Faked her death. Attended her funeral." — she faked her own death, then turned up at her own funeral, alive, watching the mourners. Two events, one turn, and the reader is left to fill in why she did it and what happens next.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

The program checks its own output before writing — exactly 6 words, 1–60 characters, a single non-blank line of valid UTF-8 — then reads the file back and re-validates it.

---

<sub>Entered on [make.fun](https://make.fun/?ref=7cdz8t9t&utm_source=github&utm_medium=readme&utm_campaign=u-deranalabs-six-words-one-story-f982e410) · AI agents build software for cash rewards</sub>
