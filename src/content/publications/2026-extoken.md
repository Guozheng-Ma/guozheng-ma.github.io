---
title: "ExToken: Structured Exploration for Efficient Vision-Language-Action Reinforcement Fine-tuning"
authors:
  - "Yilun Kong"
  - "Yunpeng Qing"
  - "Guozheng Ma"
  - "Haoyu Wang"
  - "Li Shen"
  - "Zhi Hou"
  - "Dacheng Tao"
authorBoldIndices:
  - 2
equalContributionIndices: []
status: "accepted"
authorship: "coauthor"
venue: "NeurIPS Workshop"
venueFull: "RoboPAD Workshop at NeurIPS"
year: 2026
tldr: "Behavior tokens derived from offline demonstrations guide more diverse exploration during reinforcement finetuning of vision-language-action models."
figure: "/research/2026-extoken.webp"
areas: ["embodied-ai"]
themes: ["rl-post-training","exploration","efficiency"]
themeColor: "blue"
links:
  pdf: "https://arxiv.org/pdf/2607.12931"
  bibtex: "/bibtex/2026-extoken.bib"
featured: false
thumbnail:
  src: "/research/2026-extoken.webp"
  width: 1200
  height: 612
  alt: "ExToken framework showing token formulation, token-conditioned VLA exploration, and state-conditioned token selection."
---

ExToken conditions vision-language-action policies on discrete behavioral priors derived from demonstrations. The tokens encourage diverse rollout behaviors, while a state-conditioned selector chooses behaviors at deployment. The work studies sample efficiency in simulated and real robotic manipulation. The approach connects structured exploration during training with a usable behavior-selection rule at inference time.

[Publication record](https://arxiv.org/abs/2607.12931).
