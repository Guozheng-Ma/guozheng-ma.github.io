---
title: "Language-based Trial and Error Falls Behind in the Era of Experience"
authors:
  - "Haoyu Wang"
  - "Guozheng Ma"
  - "Shugang Cui"
  - "Yilun Kong"
  - "Haotian Luo"
  - "Li Shen"
  - "Mengya Gao"
  - "Yichao Wu"
  - "Xiaogang Wang"
  - "Dacheng Tao"
authorBoldIndices:
  - 1
equalContributionIndices: []
status: "published"
authorship: "coauthor"
venue: "ICML"
venueFull: "International Conference on Machine Learning"
year: 2026
tldr: "Lightweight scouts collect exploratory experience that helps language agents learn unfamiliar tasks more efficiently than language-only trial and error."
figure: "/research/icml-2026-trial-and-error.webp"
areas: ["llms"]
themes: ["rl-post-training","exploration","efficiency"]
themeColor: "blue"
links:
  pdf: "https://raw.githubusercontent.com/mlresearch/v306/main/assets/wang26fn/wang26fn.pdf"
  code: "https://github.com/Harry-mic/SCOUT"
  bibtex: "/bibtex/icml-2026-trial-and-error.bib"
featured: false
thumbnail:
  src: "/research/icml-2026-trial-and-error.webp"
  width: 1400
  height: 652
  alt: "SCOUT framework showing lightweight exploration, trajectory distillation into a language model, and an evolving reinforcement learning stage."
---

SCOUT separates inexpensive exploration from language-model learning. Small models first collect trajectories in unfamiliar environments; these experiences then support supervised finetuning and multi-turn reinforcement learning of the language agent. The method focuses on tasks such as symbolic and spatial environments, where language-only exploration can be costly despite substantial pretrained knowledge.

[Publication record](https://proceedings.mlr.press/v306/wang26fn.html).
