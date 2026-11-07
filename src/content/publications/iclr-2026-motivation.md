---
title: "A Simple \"Motivation\" Can Enhance Reinforcement Finetuning of Large Reasoning Models"
authors:
  - "Junjie Zhang"
  - "Guozheng Ma"
  - "Shunyu Liu"
  - "Haoyu Wang"
  - "Jiaxing Huang"
  - "Ting-En Lin"
  - "Fei Huang"
  - "Yongbin Li"
  - "Dacheng Tao"
authorBoldIndices:
  - 1
equalContributionIndices: []
status: "published"
authorship: "coauthor"
venue: "ICLR"
venueFull: "International Conference on Learning Representations"
year: 2026
tldr: "Providing reward rules directly in the prompt helps large reasoning models use reinforcement finetuning more efficiently."
figure: "/research/iclr-2026-motivation.webp"
areas: ["llms"]
themes: ["rl-post-training","efficiency"]
themeColor: "blue"
links:
  pdf: "https://proceedings.iclr.cc/paper_files/paper/2026/file/4947292b9f5e7d4ab792fa35537f8b96-Paper-Conference.pdf"
  bibtex: "/bibtex/iclr-2026-motivation.bib"
featured: false
thumbnail:
  src: "/research/iclr-2026-motivation.webp"
  width: 1200
  height: 608
  alt: "Validation accuracy during reinforcement finetuning on K&K logic puzzles, comparing MeRF and RLVR across six language models."
---

MeRF includes a natural-language description of the reward specification in the training prompt. This gives the model explicit information about its objective while reinforcement learning supplies external feedback. Experiments study the benefit of aligning these two signals. The study also examines how the learner responds when the prompt and reward function disagree.

[Publication record](https://proceedings.iclr.cc/paper_files/paper/2026/hash/4947292b9f5e7d4ab792fa35537f8b96-Abstract-Conference.html).
