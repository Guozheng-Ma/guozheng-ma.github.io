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

论文保存在 `src/content/publications/`。新增一篇时填写完整作者、`status`、`authorship`、`equalContributionIndices`、`areas`、`themes`、资源地址与真实论文配图；同步添加 `public/bibtex/` 的引用。状态变化时更新现有条目，不新建一个重复版本。已有详情 URL 中即使包含 `preprint`，发表后也可继续保留，以免外部链接失效。

分类更新于 **2026-11-07**，领域与研究主线定义在 `src/data/publication-topics.ts`。Area 为 Core ML、LLMs、Embodied AI、Computer Vision，每篇至少一个。Research Themes 只保留用户指定的六条重点：RL Post-Training、Scalable RL、Plasticity Loss、Exploration、Efficiency、Generalization；`themes: []` 是正常情况，不增设兜底分类，不为了覆盖全部论文强行贴标签。逐篇归类理由在结构化记录的 `classificationRationale` 中，属于主页内容组织判断，独立于原有书目核对日期。

六条主线的边界与当前数量：

| Research Theme | 数量 | 归类依据 |
| --- | ---: | --- |
| RL Post-Training | 7 | 已有模型、策略或离线先验支持的强化适配；包含 LLM/VLA 与控制策略，不局限于语言模型权重更新 |
| Scalable RL | 3 | 直接研究 RL 网络、容量或任务数量扩展 |
| Plasticity Loss | 4 | 可塑性损失、机制、缓解或诊断 |
| Exploration | 4 | 探索与经验获取是核心研究对象，可跨 RL、LLM 智能体和 CV |
| Efficiency | 9 | 明确针对样本、计算或交互成本效率，不将所有性能改进视为效率贡献 |
| Generalization | 3 | 直接研究泛化；不自动将词级扰动鲁棒性或所有数据增强归入此类 |

SOFT 与 TREvaL 当前不标 Theme。ExToken、SCOUT 的后训练、探索与效率均为直接贡献，保留三个标签；其余有主题论文最多两个。Area 数量为 Core ML 13、LLMs 6、Embodied AI 7、Computer Vision 2；存在交叉归属，分项数量不应相加为论文总数。

筛选采用 Area × Theme × Role × Status 的交集；例如 `?area=core-ml&theme=scalable-rl&role=lead`。每个筛选项的数量基于另外三项条件更新。Theme 的 All 包括没有 Theme 的研究。无脚本时保留完整清单。

旧 `topic` 链接继续兼容：offline-online → RL Post-Training，scaling-sparsity → Scalable RL，plasticity → Plasticity Loss，visual-rl / agents-robotics → Embodied AI，language-reasoning → LLMs，3d-vision → Computer Vision。这是到最相关新分类的迁移，结果数量可能随新语义变化；显式新参数优先，交互后使用新的 area/theme 参数。

列表中的真实科学图、尺寸、出处和裁切依据见 [论文配图记录](publication-figures.md)。首页三篇精选和机制示意图独立维护，不会随新合作论文自动替换。
