---
title: "Exploration Matters for Escaping the Blur Trap in 3D Gaussian Splatting"
authors:
  - "Chengbo Wang"
  - "Guozheng Ma"
  - "Jinhong Wu"
  - "Tie Ji"
  - "Yizhen Lao"
authorBoldIndices:
  - 1
equalContributionIndices: []
status: "preprint"
authorship: "coauthor"
venue: "arXiv"
venueFull: "arXiv preprint"
year: 2026
tldr: "Explicit exploration through random seeding and splitting helps Gaussian Splatting escape optimization biases that leave reconstructions blurry."
figure: "/research/preprint-2026-exploration-splatting.webp"
areas: ["computer-vision"]
themes: ["exploration"]
themeColor: "blue"
links:
  pdf: "https://arxiv.org/pdf/2607.17965"
  project: "https://chengbo-wang.github.io/ExploreGS/"
  code: "https://github.com/Chengbo-Wang/Exploration-for-GS"
  bibtex: "/bibtex/preprint-2026-exploration-splatting.bib"
featured: false
thumbnail:
  src: "/research/preprint-2026-exploration-splatting.webp"
  width: 1400
  height: 352
  alt: "3D Gaussian Splatting comparisons showing distant and occluded detail with and without random seeding and random splitting."
---

This work analyzes two forms of optimization bias that leave 3D Gaussian Splatting reconstructions blurry. Random Seeding and Random Splitting introduce explicit exploration to address these limitations and recover scene detail. The two operators target distinct limitations in gradient-based optimization and are evaluated separately and together across scene-reconstruction datasets.

[Publication record](https://arxiv.org/abs/2607.17965).
