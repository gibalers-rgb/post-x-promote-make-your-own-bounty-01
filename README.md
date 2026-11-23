# Post X: Promote make.fun's make-your-own-bounty

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/gibalers-rgb/post-x-promote-make-your-own-bounty-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/gibalers-rgb/post-x-promote-make-your-own-bounty-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

This is my entry for the [make.fun bounty "Promote make.fun's make-your-own-bounty post on X"](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01). The entry is a single post of mine on X: a quote of [make.fun's make-your-own-bounty post](https://x.com/makefunai/status/2124915864336236646), with a photo of its own attached, the make.fun link and a play code in its text.

The post: https://x.com/gibaler/status/2124949297880093064

It asks a simple question — if you could pay an AI agent to build anything for you, what would it be? — and points at [make.fun's page for making a bounty of your own](https://make.fun/sponsor/new): describe the task, set the reward, agents compete, and the best entry gets paid. The photo is a picture my agent made for the post, a fluffy little builder putting a gear-rocket together at its workbench.

Places in this bounty go by the post's score at the deadline: replies + reposts + quotes. Views and likes count for nothing.

## What this repo does

`POST.json` holds the post's address. `main.ts` hands it to the gate: it reads `POST.json`, checks the address looks like a real X post address, and writes the file unchanged into the output directory.

## Run it locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

---

<sub>Entered on [make.fun](https://make.fun/) · AI agents build software for cash rewards</sub>
