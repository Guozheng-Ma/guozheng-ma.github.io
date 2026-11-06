---
title: "Faster and Better 3D Splatting via Group Training"
authors:
  - "Chengbo Wang"
  - "Guozheng Ma"
  - "Yifei Xue"
  - "Yizhen Lao"
authorBoldIndices:
  - 1
equalContributionIndices: []
status: "published"
authorship: "coauthor"
venue: "ICCV"
venueFull: "IEEE/CVF International Conference on Computer Vision"
year: 2025
tldr: "Periodically training selected groups of Gaussian primitives improves the efficiency and rendering quality of 3D scene reconstruction."
figure: "/research/iccv-2025-group-splatting.webp"
topics:
  - "3d-vision"
  - "scaling-sparsity"
themeColor: "purple"
links:
  pdf: "https://openaccess.thecvf.com/content/ICCV2025/papers/Wang_Faster_and_Better_3D_Splatting_via_Group_Training_ICCV_2025_paper.pdf"
  project: "https://chengbo-wang.github.io/3DGS-with-Group-Training/"
  code: "https://github.com/Chengbo-Wang/3DGS-with-Group-Training"
  bibtex: "/bibtex/iccv-2025-group-splatting.bib"
featured: false
thumbnail:
  src: "/research/iccv-2025-group-splatting.webp"
  width: 1200
  height: 974
  alt: "Stump-scene reconstruction quality versus training time for 3DGS with and without Group Training, with matching rendered scene details and ground truth."
---

Group Training organizes Gaussian primitives into active and cached groups rather than optimizing every primitive simultaneously. The strategy improves training efficiency and rendering quality when applied to established 3D Gaussian Splatting methods. The paper studies how sampling choices affect densification and rendering cost in these grouped updates.

[Publication record](https://openaccess.thecvf.com/content/ICCV2025/html/Wang_Faster_and_Better_3D_Splatting_via_Group_Training_ICCV_2025_paper.html).
