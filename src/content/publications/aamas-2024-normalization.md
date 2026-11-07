---
title: "Normalization Enhances Generalization in Visual Reinforcement Learning"
authors:
  - "Lu Li"
  - "Jiafei Lyu"
  - "Guozheng Ma"
  - "Zilin Wang"
  - "Zhenjie Yang"
  - "Xiu Li"
  - "Zhiheng Li"
authorBoldIndices:
  - 2
equalContributionIndices:
  - 0
  - 1
status: "published"
authorship: "coauthor"
venue: "AAMAS"
venueFull: "International Conference on Autonomous Agents and Multiagent Systems"
year: 2024
award: "Oral"
tldr: "Combining CrossNorm and SelfNorm improves the ability of visual RL policies to generalize under changed visual observations."
figure: "/research/aamas-2024-normalization.webp"
areas: ["core-ml","embodied-ai"]
themes: ["generalization"]
themeColor: "blue"
links:
  pdf: "https://ifaamas.csc.liv.ac.uk/Proceedings/aamas2024/pdfs/p1137.pdf"
  bibtex: "/bibtex/aamas-2024-normalization.bib"
featured: false
thumbnail:
  src: "/research/aamas-2024-normalization.webp"
  width: 1200
  height: 563
  alt: "Visual reinforcement learning pipeline combining cropped CrossNorm and SelfNorm between the convolutional encoder and policy."
---

This work studies normalization as a way to improve the robustness of visual RL policies to changed observations. Combining CrossNorm and SelfNorm improves generalization in DMControl and CARLA evaluations, with limited impact on training sample efficiency. The method can be integrated into existing visual RL algorithms without introducing an additional representation-learning objective.

[Publication record](https://ifaamas.csc.liv.ac.uk/Proceedings/aamas2024/).
