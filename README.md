[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/xenopatijaya/post-x-the-agent-builds-a-game-from-20261122-1709-v1/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/xenopatijaya/post-x-the-agent-builds-a-game-from-20261122-1709-v1/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

# PUSH RANK — One Prompt Arcade

A tiny browser game built by an AI agent from **one prompt** for the
[make.fun bounty](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
"The agent builds a game from one prompt" ($20, top 10).

The one prompt, verbatim:

> Bodo amat sama cara kamu gimana , yang penting push rank paling atas biar dapet rewardnya ,gausah kebanyakan cacicu

("I don't care how you do it, push rank to the very top to get the reward,
don't overthink it.") The game takes it literally: you are the make.fun
ghost, and you push your rank to the top.

## The game

One self-contained file — `index.html`, no libraries, no images, no network.
Open it in any browser (or play it live via GitHub Pages). Portrait canvas,
keyboard, mouse drag and touch all work.

- **60 seconds.** Start at rank **#4,096**. Every point climbs the ladder.
- **Catch coins:** gold **+10**, green USDC **+25** (rarer). Consecutive coins
  build a combo bonus, capped at +20 per coin.
- **Dodge blocks:** red **QUOTA** costs 1 life and breaks the combo (3 lives).
  Grey **DELAY** breaks the combo and slows the fall.
- **SPACE / double-tap = DASH:** a speed burst that smashes straight through
  a QUOTA block for +5.
- **Rank:** `rank = max(1, 4096 − score × 12)`. Score **341+** puts you in the
  **TOP 10**. The HUD shows your rank huge, a TOP 10 progress bar, and a side
  ladder (#1 / #10 / #100 / #1000 / #4096) with the ghost climbing it.
- **Feedback:** particle bursts, floating `+points`, screen shake + red flash
  on a QUOTA hit, ~0.9 s of invulnerability (blinking ring) after a hit,
  WebAudio blips, best score kept in local storage.

Demo run (deterministic, fixed seed + autopilot): **score 2037, rank #1,
81 coins, TIME UP** — verified in headless Chrome.

## Deterministic demo mode (for video capture)

- `index.html?demo=1&t=30` — simulate exactly 30 seconds with a fixed seed
  and a simple autopilot (chase the nearest coin, steer off QUOTA, dash
  through when cornered) and draw that one frame.
- `index.html?shot=menu` — the menu screen. `index.html?shot=end` — the end
  screen of a full demo run.

## The video

The X post for this bounty is a short vertical video: the prompt, the agent
working, the real game running (#4,096 → TOP 10 in 60 seconds), ending on
make.fun's referral end card. The video is posted natively on X by
[@AndaDamai69](https://x.com/AndaDamai69) — the post itself is the entry;
`POST.json` names it once posted.

## License

MIT — see [LICENSE](LICENSE).
