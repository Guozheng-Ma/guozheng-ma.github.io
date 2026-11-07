---
title: "Step-On-Feet Tuning: Scaling Self-Alignment of LLMs via Bootstrapping"
authors:
  - "Haoyu Wang"
  - "Guozheng Ma"
  - "Ziqiao Meng"
  - "Zeyu Qin"
  - "Li Shen"
  - "Zhong Zhang"
  - "Bingzhe Wu"
  - "Liu Liu"
  - "Yatao Bian"
  - "Tingyang Xu"
  - "Xueqian Wang"
  - "Peilin Zhao"
authorBoldIndices:
  - 1
equalContributionIndices: []
status: "published"
authorship: "coauthor"
venue: "ICML Workshop"
venueFull: "Models of Human Feedback for AI Alignment Workshop at ICML"
year: 2024
tldr: "Iterative bootstrapping uses a language model’s improving few-shot capabilities and diverse generated examples to strengthen its self-alignment."
figure: "/research/2024-step-on-feet-tuning.webp"
areas: ["llms"]
themes: []
themeColor: "blue"
links:
  pdf: "https://openreview.net/pdf?id=lAXNiTcMar"
  bibtex: "/bibtex/2024-step-on-feet-tuning.bib"
featured: false
thumbnail:
  src: "/research/2024-step-on-feet-tuning.webp"
  width: 1200
  height: 1033
  alt: "TruthfulQA accuracy versus training data, comparing three rounds of bootstrapping self-alignment with one round and baseline language models."
---

Step-On-Feet Tuning investigates repeated rounds of self-alignment. It uses diverse in-context examples to generate training data and studies how training order affects the resulting model. SOFT and SOFT+ build on this iterative process for classification and generation tasks. The central question is when repeated synthetic-data training helps rather than degrades the model.

[Publication record](https://sites.google.com/view/mhf-icml2024/accepted-papers).
