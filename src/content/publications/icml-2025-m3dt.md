---
title: "Mastering Massive Multi-Task Reinforcement Learning via Mixture-of-Expert Decision Transformer"
authors:
  - "Yilun Kong"
  - "Guozheng Ma"
  - "Qi Zhao"
  - "Haoyu Wang"
  - "Li Shen"
  - "Xueqian Wang"
  - "Dacheng Tao"
authorBoldIndices:
  - 1
equalContributionIndices: []
status: "published"
authorship: "coauthor"
venue: "ICML"
venueFull: "International Conference on Machine Learning"
year: 2025
tldr: "Mixture-of-expert decision transformers combine architectural and training changes to scale offline reinforcement learning across many distinct tasks."
figure: "/research/icml-2025-m3dt.webp"
areas: ["core-ml"]
themes: ["scalable-rl"]
themeColor: "purple"
links:
  pdf: "https://raw.githubusercontent.com/mlresearch/v267/main/assets/kong25a/kong25a.pdf"
  code: "https://github.com/KongYilun/M3DT"
  bibtex: "/bibtex/icml-2025-m3dt.bib"
featured: false
thumbnail:
  src: "/research/icml-2025-m3dt.webp"
  width: 1200
  height: 597
  alt: "Normalized scores as task count increases from 10 to 160, comparing M3DT with MTDT, PromptDT, and HarmoDT."
---

M3DT combines a mixture-of-experts Decision Transformer with a staged training procedure to improve multi-task scalability. The approach separates task demands across parameter subsets and studies how increasing the expert capacity supports learning across larger task collections. The evaluation distinguishes scaling the number of tasks from simply expanding a model on fixed tasks.

An earlier version was presented as an oral at the MCDC Workshop at ICLR 2025.

[Publication record](https://proceedings.mlr.press/v267/kong25a.html).
