---
title: "What Makes Value Learning Efficient in Residual Reinforcement Learning?"
authors: ["Guozheng Ma", "Lu Li", "Haoyu Wang", "Zixuan Liu", "Pierre-Luc Bacon", "Dacheng Tao"]
authorBoldIndices: [0]
venue: "ICML"
venueFull: "International Conference on Machine Learning"
year: 2026
award: "Spotlight · Top 2.2%"
tldr: "Helping residual RL critics learn from a pretrained policy and recognize small action corrections."
figure: "/art/plasticity.webp"
themeColor: teal
links:
  bibtex: "/bibtex/icml-2026-residual.bib"
  pdf: "https://openreview.net/pdf?id=tSMZHXtJwZ"
  code: "https://github.com/Guozheng-Ma/DAWN"
featured: false
---

Residual RL adapts a frozen base policy through bounded action corrections. This work identifies two obstacles for its critic: an uninformed starting point and difficulty distinguishing small residual actions. DAWN addresses them with base-policy data for warmup and critic normalization. [Read the conference record](https://proceedings.mlr.press/v306/ma26s.html).
