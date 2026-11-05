# Publications 论文缩略图来源

更新：2026-11-05。

这组六张图片用于 Publications 列表。每幅均来自论文原图或作者旧主页已保存的论文 teaser；不使用生成式图像，不重绘曲线或改动实验数值。浅色、暗色均保留原始白底和图例颜色，使用 `object-fit: contain` 完整显示，并可打开 1200px 宽版本阅读。

选择原则：结果图优先保留坐标、误差区间与完整图例；综述和 position paper 使用能解释论文主题的方法或框架图。只裁剪空白、独立完整面板或图外装饰照片，不裁掉面板内信息。旧 `public/assets/` 原始文件保持不变。

## 图像清单

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

## 输出与验证

- 所有图片用 Pillow 的 Lanczos 重采样等比缩小，WebP `quality=92`、`method=6`；没有改变原图颜色、反色或重新描绘数值。
- 六张最终 WebP 已逐张打开检查，裁出的结果图没有被截断的标题、坐标、图例或曲线。
- 图片尺寸与 alt 写入每篇 publication 的内容配置；运行时懒加载，并通过显式尺寸预留空间。
- 论文原图细节在列表小尺寸下自然较小，点击打开同一个 1200px 图文件可阅读。不要将列表缩略图截图当作研究结果证据引用；应引用上方论文原文。
