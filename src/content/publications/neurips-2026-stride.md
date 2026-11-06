---
title: "STRIDE: Learnable Stepwise Language Feedback for LLM Reasoning"
authors:
  - "Junjie Zhang"
  - "Guozheng Ma"
  - "Shunyu Liu"
  - "Zetian Hu"
  - "Yongcheng Jing"
  - "Ting-En Lin"
  - "Yongbin Li"
  - "Dacheng Tao"
authorBoldIndices:
  - 1
equalContributionIndices: []
status: "accepted"
authorship: "coauthor"
venue: "NeurIPS"
venueFull: "Neural Information Processing Systems"
year: 2026
tldr: "A jointly trained verifier supplies stepwise language critiques that redirect reasoning trajectories and support better LLM learning."
figure: "/research/neurips-2026-stride.webp"
topics:
  - "language-reasoning"
themeColor: "blue"
links:
  pdf: "https://arxiv.org/pdf/2605.18851"
  bibtex: "/bibtex/neurips-2026-stride.bib"
featured: false
thumbnail:
  src: "/research/neurips-2026-stride.webp"
  width: 1200
  height: 598
  alt: "STRIDE framework with base policy optimization, generative verifier training, and language-guided trajectory redirection."
---

STRIDE trains a generator and a generative verifier using outcome rewards. The verifier supplies language critiques that redirect reasoning at intermediate steps, providing richer guidance than a scalar score while avoiding externally annotated process feedback. The design studies whether this feedback remains useful when the verifier is imperfect or noisy.

[Publication record](https://neurips.cc/virtual/2026/poster/148237).
