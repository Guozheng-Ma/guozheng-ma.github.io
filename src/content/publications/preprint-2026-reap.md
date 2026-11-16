---
title: "From Discovery to Mastery: Reallocating the Replay Budget in Massively Parallel Reinforcement Learning"
authors:
  - "Guozheng Ma"
  - "Qi Zhao"
  - "Lu Li"
  - "Zilin Wang"
  - "Pierre-Luc Bacon"
  - "Dacheng Tao"
authorBoldIndices: [0]
equalContributionIndices: []
status: "preprint"
authorship: "first"
venue: "Preprint"
venueFull: "Preprint"
year: 2026
tldr: "Discovering successful behavior does not guarantee that a policy learns to reproduce it. REAP reallocates an existing replay budget toward high-return experience, improving learning across 48 control tasks without increasing interaction or update budgets."
figure: "/research/preprint-2026-reap.webp"
areas: ["core-ml", "embodied-ai"]
themes: ["scalable-rl", "efficiency"]
themeColor: "blue"
links:
  pdf: ""
featured: true
featuredOrder: 0
thumbnail:
  src: "/research/preprint-2026-reap.webp"
  width: 1600
  height: 384
  alt: "REAP reallocates a fixed replay budget toward rare high-return experience; learning curves show faster learning and enabled task success on two groups of sparse-reward ManiSkill tasks."
---

Massively parallel reinforcement learning can discover successful behavior long before a policy learns to reproduce it reliably. This work identifies a **discovery–mastery gap**: successful trajectories are already available in replay, yet reliable task performance emerges much later or remains absent within the training budget.

**REAP — return-guided reallocation of the replay budget —** gives high-return experience more opportunities to influence learning. It mixes a base sampler with sampling proportional to positive centered return-to-go. Scores are computed once from observed rewards when an episode ends and remain fixed, allowing REAP to work with uniform or recency-based replay and standard off-policy updates.

![REAP replay reallocation and sparse-reward learning results](/research/preprint-2026-reap.webp)

*Figure 1. REAP increases replay of rare high-return experience within the same replay budget. The two groups of sparse-reward ManiSkill tasks illustrate faster learning and task success where uniform replay makes little progress.*

Across **48 control tasks** spanning ManiSkill, Genesis, Isaac Lab, and MuJoCo Playground, REAP improves aggregate learning performance. On eight sparse-reward tasks, it enables success on four where uniform and recency-based replay remain near zero and accelerates learning on the other four. These comparisons keep interaction and update budgets fixed.
