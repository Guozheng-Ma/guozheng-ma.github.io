---
title: "Revisiting Plasticity in Visual Reinforcement Learning: Data, Modules and Training Stages"
authors: ["Guozheng Ma","Lu Li","Sen Zhang","Zixuan Liu","Zhen Wang","Yixin Chen","Li Shen","Xueqian Wang","Dacheng Tao"]
authorBoldIndices: [0]
equalContributionIndices: [0,1]
status: "published"
authorship: "co-first"
venue: "ICLR"
venueFull: "International Conference on Learning Representations"
year: 2024
tldr: "Understanding when and where visual RL loses its ability to keep learning."
figure: "/art/plasticity.webp"
areas: ["core-ml","embodied-ai"]
themes: ["plasticity-loss"]
thumbnail:
  src: "/research/iclr-2024-plasticity.webp"
  width: 1200
  height: 967
  alt: "Walker Run learning curves comparing plasticity injection into the actor or critic, with and without prior data augmentation."
themeColor: teal
links:
  bibtex: "/bibtex/iclr-2024-plasticity.bib"
  pdf: "https://openreview.net/pdf?id=0aR1s9YxoL"
  code: "https://github.com/Guozheng-Ma/Adaptive-Replay-Ratio"
featured: false
featuredOrder: 3
---

The study examines how data augmentation, network modules and training stages affect plasticity in visual RL. It identifies the critic as a key bottleneck and motivates Adaptive Replay Ratio: adjusting data reuse to the critic's ability to learn. [Read the paper summary](https://arxiv.org/abs/2310.07418).

*Guozheng Ma and Lu Li contributed equally.*

[Watch the AI TIME talk in Chinese](https://www.bilibili.com/video/BV1RF4m157Uh/).

[Read the Chinese coverage](https://mp.weixin.qq.com/s/OqADRb3l2gBsDuxv1H1QeA).
