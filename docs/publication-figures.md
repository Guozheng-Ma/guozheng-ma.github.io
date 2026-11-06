# Publications 论文缩略图来源

更新：2026-11-06。

当前 22 张图片用于 Publications 列表，涵盖全部 22 篇独立研究。每幅均来自论文原图或作者旧主页已保存的论文 teaser；不使用生成式图像，不重绘曲线或改动实验数值。浅色、暗色均保留原始白底和图例颜色，使用 `object-fit: contain` 完整显示，并可打开 1200–1600px 宽版本阅读。

选择原则：结果图优先保留坐标、误差区间与完整图例；综述和 position paper 使用能解释论文主题的方法或框架图。只裁剪空白、独立完整面板或图外装饰照片，不裁掉面板内信息。旧 `public/assets/` 原始文件保持不变。

## 2026-11-05 · 首批 6 篇图像清单

| 论文 | 交付图片 | 像素 | 文件大小 | 选图 |
| --- | --- | --- | --- | --- |
| NeurIPS 2026 · Offline priors | `public/research/neurips-2026-offline-priors.webp` | 1200 × 570 | 83,880 bytes | Figure 1：从零学习与使用离线先验的对照图 |
| ICML 2026 · Residual RL | `public/research/icml-2026-residual.webp` | 1200 × 580 | 67,146 bytes | Figure 1：ManiSkill、Adroit 成功率曲线 |
| ICML 2025 · Sparsity | `public/research/icml-2025-sparsity.webp` | 1200 × 584 | 48,624 bytes | Figure 2 左侧两幅：SAC、DDPG 的宽度扩展结果 |
| IJCV 2025 · Augmentation survey | `public/research/ijcv-2025-augmentation-survey.webp` | 1200 × 505 | 82,388 bytes | Figure 2：综述的整体分类框架 |
| ICLR 2024 · Plasticity | `public/research/iclr-2024-plasticity.webp` | 1200 × 967 | 94,534 bytes | Figure 5：Walker Run 中 actor／critic plasticity injection 曲线 |
| NeurIPS 2023 · Augmentation | `public/research/neurips-2023-augmentation.webp` | 1200 × 634 | 103,880 bytes | 作者旧站 teaser：Figure 6 左侧方法图与 Figure 7 的组合 |

总计 480,452 bytes（约 469 KiB）。此数字是文件大小，不是实际网络流量测量。

## 来源与处理

### NeurIPS 2026 · Offline priors

- 图像来源：`public/assets/Pub_Images/NeurIPS2026_cover.png`，原始大小 3200 × 1463。
- 对照来源：[arXiv 正文，Figure 1](https://arxiv.org/html/2606.25527v1)。正文图注描述从零学习与使用离线先验的同一 agent–environment loop。
- 处理：仅去除图外空白、添加窄白边并等比缩小。
- Alt：`Diagram comparing online reinforcement learning from scratch with learning supported by offline data, policies, representations, and models.`
- 取舍：这是一篇 position paper，概念对照能直接传达研究问题，不将概念图包装成实验结果。

### ICML 2026 · Residual RL

- 图像来源：`public/assets/Pub_Images/ICML2026_cover.png`，原始大小 3200 × 1362。
- 对照来源：[会议记录](https://proceedings.mlr.press/v306/ma26s.html)、[正式 PDF，第 1 页 Figure 1](https://raw.githubusercontent.com/mlresearch/v306/main/assets/ma26s/ma26s.pdf)。已阅读图注并目视核对原文曲线。
- 裁剪区域：原 PNG 的 `(520, 174, 2655, 1190)`，坐标按左、上、右、下记录。移除图外左右两列环境照片，保留两幅成功率图、全部曲线与不确定性区域、坐标、图例，以及原图的速度标注。
- Alt：`Success-rate curves for DAWN, Policy Decorator, and vanilla residual RL on ManiSkill and Adroit.`
- 取舍：列表缩略图集中展示论文核心效率对比；论文链接提供完整实验条件。

### ICML 2025 · Sparsity

- 来源：[正式会议 PDF，第 4 页 Figure 2](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ma25l/ma25l.pdf)，由[会议记录](https://proceedings.mlr.press/v267/ma25l.html)链接获取。
- 采用 Figure 2 左侧两个完整的 width-scaling 面板；右侧 depth-scaling 面板未纳入缩略图。SAC 与 DDPG 的任务组标题、坐标、误差棒和 dense／sparse 图例全部保留。
- 处理：Poppler 将 PDF 第 4 页按长边 4800px 渲染为 PNG，再取 `(435, 360, 1806, 1011)`，添加窄白边，等比缩小为 1200px 宽。
- Alt：`Width-scaling results on DMC Hard with SAC and DDPG, comparing dense and sparse networks.`
- 取舍：旧 `ICML_cover.jpg` 的 teaser 存在坐标被裁掉的问题，因此从论文重新提取，避免使用不完整的数值图。

### IJCV 2025 · Augmentation survey

- 图像来源：`public/assets/Pub_Images/IJCV_cover.png`，原始大小 3200 × 1600；旧目录中同时保存有 `IJCV_cover.pdf`。
- 对照来源：[arXiv 正文，Figure 2](https://arxiv.org/html/2210.04561v4)、[正式期刊记录](https://doi.org/10.1007/s11263-025-02472-w)。原文明确标为综述的 schematic structure。
- 处理：去除图外空白、添加窄白边并等比缩小；保留整个分类框架。
- Alt：`Survey framework connecting why data augmentation helps visual RL, how to augment data, and how to use augmented data.`
- 取舍：综述的贡献在组织框架和方法分类，使用整体框架图比截取某个实验更能准确代表文章。

### ICLR 2024 · Plasticity

- 来源：[arXiv PDF，第 6 页 Figure 5](https://arxiv.org/pdf/2310.07418)、[正文与图注](https://arxiv.org/html/2310.07418v3)。PDF 显示 “Published as a conference paper at ICLR 2024”。
- 采用完整 Walker Run 图，保留两组图例、所有曲线与不确定性区域、干预时间虚线、坐标及量纲。
- 处理：Poppler 将 PDF 第 6 页按长边 4800px 渲染，再取 `(1860, 492, 3051, 1446)`，添加窄白边并等比缩小。
- Alt：`Walker Run learning curves comparing plasticity injection into the actor or critic, with and without prior data augmentation.`
- 取舍：原 `ICLR2024_cover.png` 的 “DATA / MODULES / TRAINING STAGES” 大字覆盖了图内信息；新图直接来自原论文，完整解释 actor 与 critic 的对比。此图自然偏高，组件必须 contain，不为填满宽框裁切坐标。

### NeurIPS 2023 · Augmentation

- 图像来源：`public/assets/Pub_Images/NeurIPS2023_cover.png`，原始大小 3200 × 1786。
- 对照来源：[正式会议 PDF，第 7 页 Figures 6、7](https://proceedings.neurips.cc/paper_files/paper/2023/file/bc26087d3f82e62044fc77752e86737e-Paper-Conference.pdf)。旧站 teaser 组合了 Figure 6 左侧的 Random PadResize 方法说明与 Figure 7 的 CycAug 工作流；不是单幅实验曲线，也不是新造图。
- 处理：仅去除图外空白、添加窄白边并等比缩小；保留作者已有组合关系。
- Alt：`Random PadResize and Cycling Augmentation diagrams showing spatial transformations and alternating augmentation during training.`
- 取舍：同时展示两项具体方法，便于区分这篇研究与增广综述；缩略图仅帮助识别，细节通过放大图与原文阅读。

## 首批 6 篇输出与验证

- 所有图片用 Pillow 的 Lanczos 重采样等比缩小，WebP `quality=92`、`method=6`；没有改变原图颜色、反色或重新描绘数值。
- 六张最终 WebP 已逐张打开检查，裁出的结果图没有被截断的标题、坐标、图例或曲线。
- 图片尺寸与 alt 写入每篇 publication 的内容配置；运行时懒加载，并通过显式尺寸预留空间。
- 论文原图细节在列表小尺寸下自然较小，点击打开同一个 1200px 图文件可阅读。不要将列表缩略图截图当作研究结果证据引用；应引用上方论文原文。

## 2026-11-06 · 补齐新增 16 篇

本次新增 16 张真实论文图，全部取得可靠来源，无占位图。新增文件共 1,501,662 bytes，全部 22 张共 1,982,114 bytes（文件大小合计，不代表实际加载流量）。每张为 1200–1600px 宽，单张均低于 200KB。原 6 张文件未改。

本轮均从公开论文 PDF 取图，先读取图注、渲染整页确认，再裁出完整 figure 或独立面板；不重画数据、不改变原配色。使用 Poppler 按页面长边 4800px 渲染；Lanczos 等比缩小，WebP quality=92、method=6。下面的页码按 PDF 文件页顺序从 1 计，裁剪坐标均为左、上、右、下。最终 16 张 WebP 均逐张目视检查，完整保留各自面板的坐标、图例和标签。

| 论文 ID | 图号 · PDF 页 | 尺寸 | 文件大小 |
| --- | --- | --- | --- |
| `ijcai-2022-tlda` | Figure 4 · p4 | 1200 × 488 | 64,172 bytes |
| `tmlr-2025-word-perturbations` | Figure 3 · p8 | 1200 × 344 | 35,314 bytes |
| `aamas-2024-normalization` | Figure 1 · p3 | 1200 × 563 | 72,120 bytes |
| `icml-2026-ultrahorizon` | Figure 1 · p2 | 1200 × 655 | 104,024 bytes |
| `icml-2025-m3dt` | Figure 1 · p1 | 1200 × 597 | 54,984 bytes |
| `2024-step-on-feet-tuning` | Figure 2 · p5 | 1200 × 1033 | 52,652 bytes |
| `iccv-2025-group-splatting` | Figure 1(a) · p1 | 1200 × 974 | 170,564 bytes |
| `iclr-2026-motivation` | Figure 1 · p2 | 1200 × 608 | 90,394 bytes |
| `preprint-2025-plasticine` | Figure 1(a) · p2 | 1200 × 434 | 51,490 bytes |
| `2026-extoken` | Figure 2 · p5 | 1200 × 612 | 76,998 bytes |
| `preprint-2025-module-scaling` | Figure 4 · p6 | 1400 × 395 | 62,476 bytes |
| `neurips-2026-stride` | Figure 1 · p2 | 1200 × 598 | 107,150 bytes |
| `preprint-2026-component-synergy` | Figure 1 · p2 | 1400 × 499 | 87,098 bytes |
| `preprint-2026-exploration-splatting` | Figure 1 · p1 | 1400 × 352 | 144,930 bytes |
| `icml-2026-trial-and-error` | Figure 2 · p2 | 1400 × 652 | 183,216 bytes |
| `iclr-2026-reinforcement-finetuning` | Figure 2 · p8 | 1600 × 585 | 144,080 bytes |

### 来源与选择记录

#### Don't Touch What Matters: Task-Aware Lipschitz Data Augmentation for Visual Reinforcement Learning

- 交付：`public/research/ijcai-2022-tlda.webp`，1200 × 488，64,172 bytes。
- 来源：[原论文 PDF，第 4 页 Figure 4](https://www.ijcai.org/proceedings/2022/0514.pdf)。
- 处理：PDF 页长边 4800px 渲染，裁剪 `(540, 324, 3150, 1365)`（左、上、右、下），加 18px 白边后等比缩小；保留原图配色。
- Alt：`TLDA pipeline preserving task-relevant pixels, identified by a Lipschitz K-matrix, during strong visual data augmentation.`
- 取舍：完整方法图能直接显示 K-matrix 如何保护任务关键区域，比单个训练任务的曲线更能代表 TLDA。

#### Are Large Language Models Really Robust to Word-Level Perturbations?

- 交付：`public/research/tmlr-2025-word-perturbations.webp`，1200 × 344，35,314 bytes。
- 来源：[原论文 PDF，第 8 页 Figure 3](https://arxiv.org/pdf/2309.11166)。
- 处理：PDF 页长边 4800px 渲染，裁剪 `(543, 1950, 3162, 2676)`（左、上、右、下），加 18px 白边后等比缩小；保留原图配色。
- Alt：`Score-drop rates across three perturbation levels for misspelling, word swapping, and synonym replacement in Llama, Alpaca, and Beaver models.`
- 取舍：使用 arXiv 原文的完整三幅实验图，保留共同模型图例、三种扰动类别及三级扰动横轴；不把它声称为正式 TMLR 版图号。

#### Normalization Enhances Generalization in Visual Reinforcement Learning

- 交付：`public/research/aamas-2024-normalization.webp`，1200 × 563，72,120 bytes。
- 来源：[原论文 PDF，第 3 页 Figure 1](https://ifaamas.csc.liv.ac.uk/Proceedings/aamas2024/pdfs/p1137.pdf)。
- 处理：PDF 页长边 4800px 渲染，裁剪 `(810, 489, 2934, 1467)`（左、上、右、下），加 18px 白边后等比缩小；保留原图配色。
- Alt：`Visual reinforcement learning pipeline combining cropped CrossNorm and SelfNorm between the convolutional encoder and policy.`
- 取舍：使用完整 CrossNorm + SelfNorm 方法图，保留上半部的统计变换与下半部的学习流程。

#### UltraHorizon: Benchmarking Agent Capabilities in Ultra Long-Horizon Scenarios

- 交付：`public/research/icml-2026-ultrahorizon.webp`，1200 × 655，104,024 bytes。
- 来源：[原论文 PDF，第 2 页 Figure 1](https://raw.githubusercontent.com/mlresearch/v306/main/assets/luo26ai/luo26ai.pdf)。
- 处理：PDF 页长边 4800px 渲染，裁剪 `(399, 396, 3222, 1920)`（左、上、右、下），加 18px 白边后等比缩小；保留原图配色。
- Alt：`UltraHorizon benchmark overview comparing task horizons, human and LLM scores, and changes in agent performance, entropy, and errors over longer interactions.`
- 取舍：保留五个相互解释的总览面板，包含 benchmark 尺度、人与模型对比，以及长轨迹中的分数、熵与错误率变化。

#### Mastering Massive Multi-Task Reinforcement Learning via Mixture-of-Expert Decision Transformer

- 交付：`public/research/icml-2025-m3dt.webp`，1200 × 597，54,984 bytes。
- 来源：[原论文 PDF，第 1 页 Figure 1](https://raw.githubusercontent.com/mlresearch/v267/main/assets/kong25a/kong25a.pdf)。
- 处理：PDF 页长边 4800px 渲染，裁剪 `(1893, 1158, 3237, 1809)`（左、上、右、下），加 18px 白边后等比缩小；保留原图配色。
- Alt：`Normalized scores as task count increases from 10 to 160, comparing M3DT with MTDT, PromptDT, and HarmoDT.`
- 取舍：首图直接展示论文的任务扩展能力，四条模型曲线、完整图例和 10–160 tasks 的全部数据点保留。

#### Step-On-Feet Tuning: Scaling Self-Alignment of LLMs via Bootstrapping

- 交付：`public/research/2024-step-on-feet-tuning.webp`，1200 × 1033，52,652 bytes。
- 来源：[原论文 PDF，第 5 页 Figure 2](https://arxiv.org/pdf/2402.07610)。
- 处理：PDF 页长边 4800px 渲染，裁剪 `(1959, 633, 3171, 1671)`（左、上、右、下），加 18px 白边后等比缩小；保留原图配色。
- Alt：`TruthfulQA accuracy versus training data, comparing three rounds of bootstrapping self-alignment with one round and baseline language models.`
- 取舍：完整 TruthfulQA 数据图体现 bootstrapping 轮次与训练数据的关系；保留 baseline、标记点和坐标。使用 arXiv 原文作为图像来源。

#### Faster and Better 3D Splatting via Group Training

- 交付：`public/research/iccv-2025-group-splatting.webp`，1200 × 974，170,564 bytes。
- 来源：[原论文 PDF，第 1 页 Figure 1(a)](https://arxiv.org/pdf/2412.07608)。
- 处理：PDF 页长边 4800px 渲染，裁剪 `(1953, 1503, 3300, 2589)`（左、上、右、下），加 18px 白边后等比缩小；保留原图配色。
- Alt：`Stump-scene reconstruction quality versus training time for 3DGS with and without Group Training, with matching rendered scene details and ground truth.`
- 取舍：从 Figure 1 选取独立的 (a) Stump / 3DGS 面板，完整保留质量—时间曲线、图例、渲染与 Ground Truth 对照和面板标题；(b) Mip-Splatting 对比仍见原论文。

#### A Simple "Motivation" Can Enhance Reinforcement Finetuning of Large Reasoning Models

- 交付：`public/research/iclr-2026-motivation.webp`，1200 × 608，90,394 bytes。
- 来源：[原论文 PDF，第 2 页 Figure 1](https://proceedings.iclr.cc/paper_files/paper/2026/file/4947292b9f5e7d4ab792fa35537f8b96-Paper-Conference.pdf)。
- 处理：PDF 页长边 4800px 渲染，裁剪 `(645, 486, 3060, 1692)`（左、上、右、下），加 18px 白边后等比缩小；保留原图配色。
- Alt：`Validation accuracy during reinforcement finetuning on K&K logic puzzles, comparing MeRF and RLVR across six language models.`
- 取舍：正式 ICLR 原文的完整六模型训练曲线，保留模型名称、误差区域、两个方法图例和 Training Step / Accuracy 坐标。

后 8 张在高分辨率裁图上加 24px 白边后等比缩小；其余处理规则相同。

#### Plasticine: Accelerating Research in Plasticity-Motivated Deep Reinforcement Learning

- Asset: `/research/preprint-2025-plasticine.webp` (1200 x 434 px, 51,490 bytes).
- Source: [Figure 1(a), PDF page 2](https://arxiv.org/pdf/2504.17490).
- Crop rectangle: `[630, 528, 3060, 1377]`.
- Alt: Plasticine framework architecture connecting plasticity methods, metrics, and benchmark environments.
- Selection: Complete architecture panel (a) of Figure 1; the separate implementation examples in panels (b) and (c) are intentionally omitted. Methods, metrics, and environments remain complete.

#### ExToken: Structured Exploration for Efficient Vision-Language-Action Reinforcement Fine-tuning

- Asset: `/research/2026-extoken.webp` (1200 x 612 px, 76,998 bytes).
- Source: [Figure 2, PDF page 5](https://arxiv.org/pdf/2607.12931).
- Crop rectangle: `[444, 504, 3273, 1923]`.
- Alt: ExToken framework showing token formulation, token-conditioned VLA exploration, and state-conditioned token selection.
- Selection: Complete method overview including all four arrow legend entries and the token selector. Representative architecture chosen over the smaller single-task plot.

#### Module-Specific Training Strategies for Effective Network Scaling in Deep Reinforcement Learning

- Asset: `/research/preprint-2025-module-scaling.webp` (1400 x 395 px, 62,476 bytes).
- Source: [Figure 4, PDF page 6](https://arxiv.org/pdf/2510.12096).
- Crop rectangle: `[378, 3261, 3330, 4059]`.
- Alt: Encoder scaling curves comparing dense, sparse, and dynamic training across three encoder architectures.
- Selection: Complete three-panel encoder scaling result, including method legend, encoder sizes, return axis, and uncertainty ranges. The retrieved arXiv version uses the earlier title Rethinking the Role of Dynamic Sparse Training for Scalable Deep Reinforcement Learning.

#### STRIDE: Learnable Stepwise Language Feedback for LLM Reasoning

- Asset: `/research/neurips-2026-stride.webp` (1200 x 598 px, 107,150 bytes).
- Source: [Figure 1, PDF page 2](https://arxiv.org/pdf/2605.18851).
- Crop rectangle: `[636, 420, 3075, 1611]`.
- Alt: STRIDE framework with base policy optimization, generative verifier training, and language-guided trajectory redirection.
- Selection: Complete three-phase method figure, including stepwise verification, first point of failure, and multi-point redirection examples.

#### Beyond Isolation: Unlocking Reinforcement Learning Component Synergy for Sample-Efficient Continuous Control

- Asset: `/research/preprint-2026-component-synergy.webp` (1400 x 499 px, 87,098 bytes).
- Source: [Figure 1, PDF page 2](https://arxiv.org/pdf/2608.07086).
- Crop rectangle: `[360, 489, 3348, 1524]`.
- Alt: ROSER learning curves against five baselines on nine locomotion tasks and nine manipulation tasks, with benchmark examples.
- Selection: Complete performance summary: both aggregate learning curves, task examples, full method legend, axes, and original confidence bands.

#### Exploration Matters for Escaping the Blur Trap in 3D Gaussian Splatting

- Asset: `/research/preprint-2026-exploration-splatting.webp` (1400 x 352 px, 144,930 bytes).
- Source: [Figure 1, PDF page 1](https://arxiv.org/pdf/2607.17965).
- Crop rectangle: `[363, 1119, 3330, 1830]`.
- Alt: 3D Gaussian Splatting comparisons showing distant and occluded detail with and without random seeding and random splitting.
- Selection: Complete teaser with all four visual comparisons and zoomed regions. The original wide aspect ratio is retained rather than rearranging or cropping comparisons.

#### Language-based Trial and Error Falls Behind in the Era of Experience

- Asset: `/research/icml-2026-trial-and-error.webp` (1400 x 652 px, 183,216 bytes).
- Source: [Figure 2, PDF page 2](https://raw.githubusercontent.com/mlresearch/v306/main/assets/wang26fn/wang26fn.pdf).
- Crop rectangle: `[342, 396, 3288, 1743]`.
- Alt: SCOUT framework showing lightweight exploration, trajectory distillation into a language model, and an evolving reinforcement learning stage.
- Selection: Complete published SCOUT overview with the exploration, distillation, and evolving stages; all flow arrows and labels remain intact.

#### The State of Reinforcement Finetuning for Transformer-based Agents

- Asset: `/research/iclr-2026-reinforcement-finetuning.webp` (1600 x 585 px, 144,080 bytes).
- Source: [Figure 2, PDF page 8](https://proceedings.iclr.cc/paper_files/paper/2026/file/e0d802b82a7804f60c738f5c3731b3dd-Paper-Conference.pdf).
- Crop rectangle: `[753, 489, 2946, 1260]`.
- Alt: Finetuning performance versus trajectory count for seven algorithms across four environments with medium and expert datasets.
- Selection: Complete eight-panel result, preserving the shared seven-method legend, medium and expert dataset labels, trajectory counts, and performance axes. Width is 1600 px to keep the dense plots readable when opened.
