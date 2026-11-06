---
title: "Don't Touch What Matters: Task-Aware Lipschitz Data Augmentation for Visual Reinforcement Learning"
authors:
  - "Zhecheng Yuan"
  - "Guozheng Ma"
  - "Yao Mu"
  - "Bo Xia"
  - "Bo Yuan"
  - "Xueqian Wang"
  - "Ping Luo"
  - "Huazhe Xu"
authorBoldIndices:
  - 1
equalContributionIndices: []
status: "published"
authorship: "coauthor"
venue: "IJCAI"
venueFull: "International Joint Conference on Artificial Intelligence"
year: 2022
tldr: "Task-aware augmentation protects important pixels while diversifying observations to improve both sample efficiency and visual RL generalization."
figure: "/research/ijcai-2022-tlda.webp"
topics:
  - "visual-rl"
themeColor: "blue"
links:
  pdf: "https://www.ijcai.org/proceedings/2022/0514.pdf"
  bibtex: "/bibtex/ijcai-2022-tlda.bib"
featured: false
thumbnail:
  src: "/research/ijcai-2022-tlda.webp"
  width: 1200
  height: 488
  alt: "TLDA pipeline preserving task-relevant pixels, identified by a Lipschitz K-matrix, during strong visual data augmentation."
---

TLDA identifies pixels that strongly affect the policy through a task-aware Lipschitz measure, then applies augmentation to less relevant regions. This preserves task information while diversifying observations. Evaluations cover DeepMind Control, CARLA and manipulation tasks. The goal is to introduce visual variation without disrupting the policy’s task-relevant decisions.

[Publication record](https://www.ijcai.org/proceedings/2022/514).
