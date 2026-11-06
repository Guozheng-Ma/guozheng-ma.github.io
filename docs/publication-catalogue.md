# 完整论文集的来源与维护

核对日期：**2026-11-06**。以 [Guozheng Ma 的 Google Scholar](https://scholar.google.com/citations?user=jDvVglUAAAAJ&hl=en&cstart=0&pagesize=100) 为收录边界，读取完整列表及每条详情，共 **22 篇独立研究**。本轮新增 16 篇，保留原有 6 篇 URL；预印本、正式版、改题版本合为一个条目。逐篇标题、作者、状态、贡献证据、别名与来源链接见 [结构化核对记录](publication-catalogue.json)。

页面展示 15 篇已发表、3 篇已录用、4 篇预印本；按原文明示贡献确认 5 篇第一作者、4 篇共同第一作者，其余 13 篇按合作论文展示。此统计是核对当日快照，不是 Google Scholar 实时同步；不抓取或展示易过期的引用次数。

## 资料优先级

- 正式会议／期刊记录确定已发表标题、年份、会议及完整作者；未正式发表的研究使用最新作者预印本。
- `published` 表示已有正式公开出版记录（包含明确标注的 workshop 公开版本）；`accepted` 表示已确认录用、尚未查到正式出版记录；`preprint` 表示尚无已核实的正式录用／发表。
- 本人姓名始终加粗；`authorship` 明确区分 `first`、`co-first`、`coauthor`。`equalContributionIndices` 只标原文明确的等贡献作者，数组下标从 0 开始。通讯作者、邮箱、单位脚注不能当作等贡献。
- 同名作者在其他索引出现的医学 LLM、图模糊聚类和 2013 年论文不在本人 Scholar 清单内，不纳入本次 22 篇。

## 需要保留的具体判断

- **Word-Level Perturbations**：正式 TMLR 发表年份为 **2025**，Scholar 沿用 2023 年预印日期；合并早期版本。Haoyu Wang、Guozheng Ma 的等贡献由作者 arXiv 原文核实。原 TREvaL 代码仓库返回 404，因此不展示失效代码入口。
- **Normalization**：采用正式 **AAMAS 2024** 年份；Oral 来自本人 Scholar 与旧站动态。Lu Li、Jiafei Lyu 等贡献，本人第三作者不标共一。
- **Plasticine**：使用最新 v2 的 **11 人**作者顺序，前四位明确等贡献，Guozheng Ma 为第三位共同一作。按首次公开日期列在 **2025** 年，并在详情说明 2026 年修订；版权年份本身不作为正式发表依据。
- **Module-Specific Training Strategies**：沿用本人 Scholar 的当前标题，与 arXiv 2510.12096 上仍显示的旧标题 *Rethinking the Role of Dynamic Sparse Training for Scalable Deep Reinforcement Learning* 是同一工作；详情说明旧标题，避免读者跳转后困惑。
- **The State of Reinforcement Finetuning**：正式 ICLR 标题不含 Generative，采用正式版本；Scholar 的长标题作为别名记录。
- **SOFT**：公开于 **ICML 2024 Workshop on Models of Human Feedback for AI Alignment**，不标为 ICML 主会。可访问预印本页脚有 “Equal contribution”，但作者处没有对应标记；最终 workshop PDF 的自动下载返回 403。因此暂按合作论文展示，**未把这条含混注释推断为本人共一**，以后可依据清楚的原文或本人确认修正。
- **ExToken**：RoboPAD Workshop at NeurIPS 2026 的录用来自本人 Scholar；独立官方逐篇录用页尚未查到。按 **Accepted / NeurIPS Workshop** 展示，不称 NeurIPS 主会或已出版会议论文。该 workshop 的[征稿说明](https://robotpad2026.github.io/call-for-papers.html)明确非归档性质。
- **STRIDE 与 Offline Priors**：官方 NeurIPS 2026 页面已列出论文及 12 月 poster 场次，截至核对日采用 **Accepted**；未以尚未核实的正式 proceedings 标为 Published。Offline Priors 仍保留原有 Position track 标记，其 BibTeX 改为明确的 accepted 引用。
- **M3DT**：ICML 2025 正式论文与 ICLR 2025 MCDC Workshop 的早期版本合并；详情保留早期 workshop oral，不将其显示为 ICML Oral。
- **UltraHorizon**：完整保留 18 位作者，前六位等贡献，本人第七位不标共一。
- **Beyond Isolation**：作者姓名采用 arXiv 与本人 Scholar 的 Jian Sha，未照抄其他索引中的 Jian Shao。

## 后续更新方法

论文保存在 `src/content/publications/`。新增一篇时填写完整作者、`status`、`authorship`、`equalContributionIndices`、`topics`、资源地址与真实论文配图；同步添加 `public/bibtex/` 的引用。状态变化时更新现有条目，不新建一个重复版本。已有详情 URL 中即使包含 `preprint`，发表后也可继续保留，以免外部链接失效。

主题定义在 `src/data/publication-topics.ts`，共有七类。`scaling-sparsity` 参数保持不变，显示为 Scaling & optimization。筛选采用主题 × 状态 × 贡献的交集；`?topic=plasticity&status=preprint&role=lead` 是一个可分享的组合例子。每个筛选项的数字根据另外两项条件更新，因此其含义是当前条件下可选的匹配数。

列表中的真实科学图、尺寸、出处和裁切依据见 [论文配图记录](publication-figures.md)。首页三篇精选和机制示意图独立维护，不会随新合作论文自动替换。
