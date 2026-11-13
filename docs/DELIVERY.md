# 改版交付记录

## 2026-11-13 · Agentic 配图重画与发布

按用户反馈，原带标签的三节点流程图重画为与既有 Blog 配图一致的抽象墨线插画：细构造线、低饱和蓝色、半透明几何面、轻微纸纹和留白。尝试轨迹汇入关节状连接，再形成重复组合的结构，表现经验获取、策略改进与技能积累。深色版保持同一构图，使用炭黑背景与柔和蓝灰线条。

- 内置图像生成工具以既有 sparsity / plasticity 插画为风格参考生成浅色图，再生成同构图的暗色版。PNG 源图保存在 `public/art/agentic-policy.png` 与 `agentic-policy-dark.png`；页面使用 1200×800 WebP，大小分别约 28 KB 和 34 KB。完整提示词记录在仓库外预览目录的 `generation.json`。
- 首页、Blog 列表、文章正文配图和分享图统一更新；旧 SVG 路径保留兼容。标题、方向定义、顺序、所有文章与论文内容不变。
- 正式构建 **31 页**成功；192 个原有内容、个人数据与 public 资源逐字节保留。检查新图的首页／列表／详情引用及分享图地址，`git diff --check` 通过。
- 浏览器核对 **1280px 桌面、390px 手机**及浅暗主题，新图正常加载，手机无横向溢出。截图、检查和最终发布记录在 `preview/agentic-art-redraw-2026-11-13/`，属于视口模拟检查。
- 用户明确授权“然后直接推上去”，本轮通过现有 GitHub Pages 工作流发布。参考源码、静态镜像及两份 ZIP 同步前检查基线，旧版 ZIP 保存于 `backups/2026-11-13-before-agentic-art-redraw/`。

---

## 2026-11-13 · Agentic Robot Learning 与 ACE-CaP

用户最终确认方向名为 **Agentic Robot Learning**，并明确要求在线更新。首页 Blog 第一项与默认预览采用此名称，摘要为 “How agents acquire experience and turn it into reliable, reusable robot skills.”；后两项仍是稀疏与可塑性文章。原数据增强文章保留在完整 Blog。

- 方向介绍沿用 `/notes/agentic-policy/`，说明自主经验获取、策略改进与可复用技能积累，包含用户批准的英文研究定义。
- 以 [ACE-CaP-0](https://acerobotics2025.github.io/ACE-CaP/) 为代表工作，注明本人为 core contributor，并提供项目和论文链接。准确区分开发阶段的编码智能体与执行阶段的感知／控制，不宣称编码智能体参与策略运行。
- 蓝色浅暗封面更新为 **Experience → Policy → Skills**，与最终方向定义一致。既有三篇文章、22 篇论文、个人资料与旧资源保持。

### 已执行验证

- 正式构建成功，生成 **31 页**。检查 **559 处本地引用、31 个锚点、64 处 CSS 资源**，均有效；189 个原有内容与资源文件逐字节保留，`git diff --check` 通过。
- 浏览器检查 **1280px 桌面、390px 手机**及浅暗主题，首页首项和默认预览正确，无横向溢出。Enter 选择与 Read Post 跳转、手机列表和文章阅读布局正常。使用视口模拟，没有声称实体手机测试。
- 静态报告和截图保存在仓库外 `preview/agentic-robot-learning-2026-11-13/`。

### 发布与归档

本轮按用户授权通过现有 `Guozheng-Ma/guozheng-ma.github.io` 的 `main` 分支与 GitHub Pages 工作流发布，不更换托管。Git 起点为 `9097461`，工作流与依赖不变；发布运行结果记录在上述预览目录。

参考源码、静态镜像与两份 ZIP 按当前工作区同步，先确认副本无新增用户改动。上一版 ZIP 保存在 `backups/2026-11-13-before-agentic-robot-learning/`；依赖、缓存、Git 历史与预览资料不进入源码包。下方 Agentic Policy 记录保留为本轮定名前的历史。

---

## 2026-11-13 · Agentic Policy 首页展示

按用户确认，首页 Blog 用 **Agentic Policy** 替换数据增强文章 **Learning from a different view**，并放在第一项。后两项为 **Why sparsify RL networks?**、**Keeping visual RL able to learn**；桌面默认预览、Read Post 与手机静态列表保持同样顺序。

- 新增 `/notes/agentic-policy/` 简短方向介绍，表述未来研究兴趣，不宣称已有成果。配图是品牌蓝的 reasoning → action → feedback 概念示意，提供浅暗两版。
- 原三篇文章正文与 URL 保留，完整 Blog 共四篇；数据增强文章仍可从 All Posts 和其他文章的 More posts 访问。
- 已有 22 篇论文、首页三篇精选、个人资料及 160 个原 public 文件保持不变。Git 起点为 `9097461`，未 commit、push 或发布。

### 已执行验证

- Node.js 24.22.1 与现有依赖成功构建 **31 页**，`git diff --check` 通过。
- 静态检查覆盖 **559 处本地引用、31 个页面锚点、64 处 CSS 资源**，链接与资源均有效；首页两种布局的顺序、默认选中与 Read Post 地址正确。
- 浏览器验证 **1280px 桌面**与 **390px 手机**布局，无横向溢出。桌面浅暗封面显示正常，Read Post 实际打开新介绍页；Enter 选择首项与手机 Tab 焦点正常。控制台未见 warn/error。测试使用视口模拟，未声称实体手机测试。
- 189 个原有内容、个人数据与 public 文件逐字节保留。报告和截图位于仓库外 `preview/agentic-policy-2026-11-13/`。

### 同步与归档

同步前确认参考源码与静态镜像和本轮基线一致，无新增用户差异。参考源码、静态镜像与源码／静态 ZIP 同步为本轮版本；逐文件和 ZIP 内容校验见本轮预览目录中的 `archive-checks.json`。上一版 ZIP 保存在 `backups/2026-11-13-before-agentic-policy/`。

上传仍使用现有 GitHub Pages 仓库和 Actions，操作见 [上传说明](UPLOAD.md)，由用户自行上传。

---

## 2026-11-07 · Role、Area 与六条研究主线

按照用户最终指定的六个关注点完成分类调整。Research Themes 是选择性的研究主线，允许论文不属于任何主题；完整论文集仍为 22 篇。Git 起点为 `c2fba9b`，仅本地交付，未 commit、push 或发布。

### 本轮内容

- Area 独立为 **Core ML、LLMs、Embodied AI、Computer Vision**，分别匹配 13、6、7、2 篇，支持有依据的交叉领域。
- Research Themes 按用户原名与顺序展示：**RL Post-Training 7、Scalable RL 3、Plasticity Loss 4、Exploration 4、Efficiency 9、Generalization 3**。一篇可属于多条主线，分项数字不能相加作为论文总数。
- **SOFT 与 TREvaL 不标 Theme**，仍在 All、LLMs 及其作者角色和状态下完整显示。没有增加 Uncategorized、Evaluation 等兜底主题。
- Role 提供 All / First & co-first / Co-author，仍准确区分卡片上的一作与共一；Status 为辅助筛选。四条件交集、分面数量、空结果、清空、链接分享与历史记录均保留。
- 桌面与平板采用两排清楚标注的 Area / Research Themes 标签；手机宽度 ≤680px 使用 Area / Theme / Role / Status 四行原生下拉框，保持 44px 点击高度。390px 视口的首张论文卡片由初版 y≈805 提前至 y≈542。
- 数据由旧 `topics` 拆为必填 `areas` 与允许空数组的 `themes`。卡片分清领域与主线；空主题不显示标签或占位。归类理由记在 [论文核对记录](publication-catalogue.json)，原则见 [维护说明](publication-catalogue.md)。
- 新参数为 `area/theme/role/status`；七种旧 `topic` 参数迁移到最相关的新领域／主线，显式新参数优先，交互后使用新链接。现有详情 URL 与 Blog URL 保持不变。

### 已执行验证

- 使用 Node.js **24.22.1** 和已有 Astro 6.3.8 依赖成功构建 **30 页**；未新增依赖，既有 Actions 配置不变。`git diff --check` 通过。
- 对实际筛选函数检查 **420 种组合、9,240 次逐论文判断**以及 **33 个 URL 兼容／边界案例**，全部通过；补充边界 fixture 的 UI 检查也通过。
- 22 篇论文的所有非分类字段及 Markdown 正文与本轮 Git 基线一致；**160 个既有 public 文件**逐字节不变，含 22 张真实图、22 份 BibTeX。完整作者、状态、荣誉、首页三篇精选、Blog 与个人资料保留。
- 静态审查覆盖 **30 个 HTML、535 处本地链接／资源、30 处 HTML 锚点、64 处 CSS 资源**，全部有效；无重复 ID、悬空 ARIA 或失效标签目标。
- 浏览器实测四领域、六主题、Co-author 与 First & co-first、四条件交集及分面数字，空 Theme 论文正确显示。刷新、清空、前进后退、旧链接迁移、显式新参数优先及非法值回退通过。
- Enter / Space 标签操作与原生 Role 下拉键盘选择通过。手机新 Area/Theme 下拉选择、桌面与手机切换同步、清空后聚焦可见 Area 控件、手机前进后退通过。
- **1280、768、390、320px** 布局检查无横向溢出，明暗主题已查看；控制台未出现 error / warn。使用视口模拟，没有声称实体手机或 Lighthouse 测试。无脚本回退按静态 HTML 检查。

截图、浏览器结果、逐篇分类方案和可复跑检查在仓库外 `preview/research-dimensions-2026-11-07/`；独立静态报告为其下 `qa/integrity.json`，问题列表为空。

### 同步与归档

发布目录仍为 `/Users/mgz/Workspace/Homepage-old/homepage-repo`。同步前确认参考源码与静态镜像相对本轮基线没有新增改动；参考副本与两份 ZIP 已更新，并逐文件校验。旧 ZIP 保留在 `backups/2026-11-07-before-research-dimensions/`。同步与归档记录位于本轮预览目录的 `archive-checks.json`。

上传使用既有 GitHub 仓库与 Actions，步骤见 [上传说明](UPLOAD.md)。依赖链接、缓存、Git 历史和预览资料均不进入源码包。

---

## 2026-11-06 · 完整论文集与作者贡献

从 [本人 Google Scholar](https://scholar.google.com/citations?user=jDvVglUAAAAJ&hl=en&cstart=0&pagesize=100) 读取全部 22 条记录并逐篇核对。已完成本地实现与正式构建，由用户自行上传；未 commit、push 或部署。Git 起点为 `ff1eeca`。

### 交付内容

- 原有 6 篇扩展为 **22 篇独立研究**，新增 16 篇详情、完整作者、摘要、资源入口与 BibTeX。正式版、预印本及改题版本合并；原有 URL、六篇正文与荣誉、Blog 文章和个人资料保留。
- 状态为 **Published 15 / Accepted 3 / Preprint 4**；会议主会、workshop、期刊及预印本准确区分。正式发表年份优先于 Scholar 旧预印日期。
- 从原文明示贡献核实 **First author 5 / Co-first author 4**，共 9 篇。列表采用低饱和品牌蓝色背景、侧边细线与文字标签，本人姓名始终加粗；合作论文保持中性，荣誉使用独立琥珀色。
- 七个研究主题支持多归属：Offline–online RL **5**、Scaling & optimization **5**、Plasticity **4**、Visual RL **6**、Language & reasoning **6**、Agents & robotics **4**、3D vision **2**。
- 主题 × 状态 × 贡献采用交集筛选，带分面数量、清空及无结果提示；`topic/status/role` 地址参数可分享、刷新和前进后退。`role=lead` 包含本人一作及共同一作。旧 `scaling-sparsity` 参数保持有效，无脚本时仍可阅读全部论文。
- **22 篇均有真实原文图片**。新增 16 张约 1.50 MB，22 张合计约 1.98 MB，新增图宽 1200–1600px，最大单图约 183 KB；逐张目视复核坐标、图例和原色。新增详情分享图也分别使用对应论文图。原 6 张配图和首页 3 个机制 SVG 保留。
- 首页仍展示原来的三篇 Selected Research，仅补充准确状态与贡献文字。Blog / Post 命名及 `/notes/` 路径继续沿用。不引入新依赖。

### 核对依据与待确认项

见 [论文集来源说明](publication-catalogue.md)、[逐篇结构化记录](publication-catalogue.json)和[论文配图记录](publication-figures.md)。这是 **2026-11-06 的经核对静态快照**，不是自动实时同步。

Plasticine 的最新 11 人作者表明确本人为第三位共同一作；UltraHorizon 本人虽排第七，但不在前六位等贡献名单中。SOFT 的可访问原文存在未关联作者的等贡献页脚，暂按合作论文展示，未据此推断本人共一。ExToken workshop 录用及 AAMAS Oral 来自本人 Scholar／旧站资料，记录中已注明独立验证的范围。NeurIPS 2026 的两篇主会论文根据官方 poster 页面标为 Accepted。

### 已执行验证

- 使用本地 Node.js 24 与已有 Astro 6.3.8 依赖完成正式构建，生成 **30 页**；Actions 仍使用 Node.js 22 与既有锁文件。`git diff --check` 通过。
- 独立审查 22 篇数据与 Scholar、作者贡献及新增研究清单逐条一致，URL 集合恰好覆盖 22 篇，无重复；22 个 BibTeX 的完整作者、标题、年份、引用键和括号格式通过。
- 静态完整性审查覆盖 **30 个 HTML、534 处本地链接／资源、30 处页面锚点引用、64 处 CSS 资源**，全部有效，无重复 ID 或悬空 ARIA 引用；22 图的尺寸、alt 和构建副本一致，80 个旧 assets/files 资源及原 6 张论文图与基线逐字节一致。报告为 `preview/all-publications-2026-11-06/qa/integrity.json`，问题列表为空。
- 实际筛选函数的 **64 种组合、1,408 次逐论文判断**全部通过。浏览器实测七主题、三个状态、一作／共一筛选及三维交集；零结果、清空、刷新、前进后退和无效参数回退正常。
- 浏览器实测 Enter / Space 操作主题按钮，以及原生下拉菜单键盘选择；清空后焦点回到 All。检查 **1280、768、390、320px** 布局，无横向溢出。18 位作者的详情在手机完整换行。
- 浅色和暗色主题均检查，一作与合作背景、文字标签可辨；真实图保持原色。滚动全部列表确认 **22 / 22 图片成功加载**。首页三篇精选及 Plasticine 共一详情通过检查；浏览器控制台未出现 error / warn。
- 响应式检查使用浏览器视口模拟；无脚本回退按静态 HTML 检查。未执行 Lighthouse，未声称已在实体手机上测试。

完整检查与截图在仓库外 `preview/all-publications-2026-11-06/`，包括原始 Scholar 核对记录、浏览器结果及静态审查。归档与同步的逐文件结果见同目录 `archive-checks.json`。

### 同步与归档

发布源码仍是 `/Users/mgz/Workspace/Homepage-old/homepage-repo`。参考源码、静态镜像与两份 ZIP 在确认没有新增用户差异后同步；原 ZIP 备份保存在 `backups/2026-11-06-before-full-publications/`。源码包取当前工作区，不用旧 HEAD；依赖、构建缓存、Git 历史和临时预览不打包。

上传仍按 [上传说明](UPLOAD.md)，向现有 GitHub 仓库提交源码，由既有 Actions 构建发布。源码 ZIP 与静态 ZIP 分别为仓库外的 `guozheng-homepage-source.zip`、`guozheng-homepage-upload.zip`。

---

## 2026-11-05 · Blog、主题筛选与论文原图

已完成本地实现、正式构建、浏览器验证与内容完整性检查。由用户自行上传，本轮未 commit、push 或发布。发布仓库仍是 `/Users/mgz/Workspace/Homepage-old/homepage-repo`，起点为 `e1f9e41`。

### 交付内容

- 导航、首页栏目、文章列表统一为 **Blog**；入口为 **All Posts / Read Post**，详情使用 **Related post / More posts**。保留 `/notes/` URL 与原文章正文。三篇文章分享图分别对应各自主题。
- Publications 使用可换行的单选主题标签与数量：All **6**、Offline–online RL **2**、Scaling & sparsity **1**、Plasticity **2**、Visual RL **4**。一篇论文可属于多个主题，标签使用原生按钮、明确选中状态和结果播报。
- 筛选写入 `?topic=`，支持分享、刷新、前进后退；未知主题回退全部结果。无脚本时隐藏筛选并展示完整论文列表。
- 六篇论文全部配有真实原文结果图／方法图，均为 1200px 宽，合计约 469KiB。ICML 2025 与 ICLR 2024 从原论文 PDF 重新提取，保留完整坐标、图例与曲线。图源与取舍见 [论文配图记录](publication-figures.md)。
- 桌面为左图右文；手机按照会议、标题、作者、图片、摘要和资源顺序阅读。缩略图完整 contain，点击 View figure 打开大图；明暗主题都保留科学图的原始颜色。手机 DOM 与视觉阅读顺序一致，Tab 从标题到图再到 Paper。
- 首页 Selected Research 继续使用既有机制图。六篇论文的完整作者、标题、荣誉、正文和原有资源地址均保留。无新增框架或构建依赖。

### 设计参考

调研了 [Apple Machine Learning Research](https://machinelearning.apple.com/research/) 的研究方向筛选、[Anthropic Research](https://www.anthropic.com/research) 的主题与数量，以及 [Google DeepMind Publications](https://deepmind.google/research/publications/) 的日期排序清单。本页采用与现有圆角风格一致的单层主题胶囊，适配当前六篇论文的规模，不引入多层表单；未复制其品牌或图片资产。

### 已执行验证

- 使用本地 Node.js 24.19.0 与已有 Astro 6.3.8 依赖完成正式构建，生成 **14** 页；GitHub Actions 保持既有 Node.js 22、npm ci、npm run build 配置。
- 14 个 HTML、**325** 次本地引用（含 CSS 字体／资产）、102 个独立目标全部有效。14 个锚点、34 个 ARIA 引用、34 张图片 alt 通过检查，无重复 ID。
- 六篇论文除新增 topics / thumbnail 外，原元信息与正文相对 Git 基线一致；三篇 Blog 源正文不变，生成页面标题、作者和资源匹配。122 个旧 public 文件与基线逐字节一致；首页三个机制 SVG 与旧版一致。
- 浏览器实测全部主题的数量与结果；刷新、前进后退、未知主题回退、Enter / Space 筛选通过。
- Publications 在 **1280、768、390、320px** 视口下检查布局，无横向溢出；浅暗主题均已查看，手机图表及键盘顺序通过检查。大图资源已打开确认坐标／图例清晰完整。
- 首页 Blog 选择预览、Read Post 跳转、返回 Blog 列表通过检查；控制台未见 error / warn。
- 响应式检查使用浏览器视口模拟，不是实体设备；无脚本回退为静态检查；未执行 Lighthouse，未承诺流量或性能提升。

验证与截图位于仓库外 `preview/blog-publications-2026-11-05/`：`baseline.json`、`integrity.json`、`browser-checks.json`、桌面浅暗色与平板／手机截图。

### 同步与归档

同步前重新核对参考源码与静态镜像，保留 Git、编辑器设置、依赖和旧备份；旧 ZIP 另存到 backups。本轮同步和 ZIP 校验结果记录在 `preview/blog-publications-2026-11-05/archive-checks.json`。

- 发布源码：`/Users/mgz/Workspace/Homepage-old/homepage-repo`
- 参考源码：`/Users/mgz/Workspace/Homepage/guozheng-site`
- 静态镜像：`/Users/mgz/Workspace/Homepage-old/guozheng-ma.github.io`
- 源码归档：`/Users/mgz/Workspace/Homepage-old/guozheng-homepage-source.zip`
- 静态归档：`/Users/mgz/Workspace/Homepage-old/guozheng-homepage-upload.zip`

向现有 GitHub Pages 仓库发布时提交源码工作目录，由 Actions 构建；不将 dist 或静态 ZIP 加入源码仓库。操作见 [上传说明](UPLOAD.md)。

---

## 2026-11-01 交付记录（历史）

本轮更新：2026-11-01。按用户批准的预览调整桌面头像布局与四处文字入口。个人资料、论文内容、已有字体与视觉资源保持不变。本轮只完成本地实现与预览，不自动提交或推送。

## 目录与当前状态

- 发布与维护目录：`/Users/mgz/Workspace/Homepage-old/homepage-repo`；用户已提交上一轮，本轮起点为 `b6cfb13`，工作区干净。
- 开始前，186 个源码文件与参考副本、源码 ZIP 一致，198 个静态文件与静态镜像、静态 ZIP 一致，没有新增用户差异。12 份内容／数据和 122 个 public 文件已记录校验值。基线记录为仓库外的 `preview/hero-links-presync-baseline.json`。
- 参考源码：`/Users/mgz/Workspace/Homepage/guozheng-site`；静态镜像：`/Users/mgz/Workspace/Homepage-old/guozheng-ma.github.io`。同步时保留参考目录的 `.git`、`.vscode`、依赖与环境。
- 源码 ZIP：`/Users/mgz/Workspace/Homepage-old/guozheng-homepage-source.zip`；静态 ZIP：`/Users/mgz/Workspace/Homepage-old/guozheng-homepage-upload.zip`。本轮已同步两份副本并重新归档，逐文件校验一致。
- 原站完整备份：`/Users/mgz/Workspace/Homepage-old/backups/2026-10-29-before-redesign.tar.gz`，包含旧站、参考源码与 Git 历史，不含依赖和生成目录。
- 现有 GitHub Pages 网址、仓库与 Actions 工作流保持不变，发布步骤见 [上传说明](UPLOAD.md)。

## 本轮调整

- 仅桌面宽度大于 960px 时调整头像：相对两段正文垂直居中，在正文右侧剩余区域水平居中；联系入口独立下一行。手机与平板继续使用简化布局。
- `More About Me`、`All Notes`、`All Publications`、`Read Note` 改为独立的 `continuation-link`，透明无框，使用 `ContinuationArrow` 的 16px 同色右箭头；hover 时文字下划线，点击高度至少 44px，保留键盘焦点。Notes 原局部背景及 hover 背景已移除。
- 用户已批准这四处恢复箭头，覆盖旧去箭头约定；404 等其他按钮与功能性返回入口保持原样。
- 保留 Source Sans 3、Research 机制图、马头与明暗主题，个人资料、论文内容和链接不改。

既有导航参考 [Anthropic Research](https://www.anthropic.com/research) 的胶囊导航与 [Stripe Newsroom](https://stripe.com/newsroom) 的明确文字入口；不照搬页面或品牌资产。

## 素材与内容依据

Source Sans 3 来源于 [Adobe 官方仓库](https://github.com/adobe-fonts/source-sans)，使用 [SIL Open Font License 1.1](https://github.com/adobe-fonts/source-sans/blob/release/LICENSE.md)。本地字体为 `public/fonts/source-sans-3-variable.woff2`（170,188 字节），许可证为 [`public/fonts/SOURCE-SANS-LICENSE.md`](../public/fonts/SOURCE-SANS-LICENSE.md)。两者已纳入构建与归档，保留 Adobe 版权声明和完整许可证；没有新增构建依赖。

新 Research 缩略图是与论文主题对应的机制示意图，不是实验结果或数据图。原有 6 篇论文、6 份 BibTeX、3 篇研究笔记及完整履历继续保留，依据见 [内容来源](content-sources.md)。旧资源 URL 和 Bio、Publications、Awards、Talks、Services 历史锚点保持兼容。

三枚校徽来自旧站 `public/assets/Logo/`：NTU 保留原 SVG 路径；清华与湖南大学将旧位图缩至约 132px 后嵌入 SVG，通过滤镜提取 alpha，再由页面着色。这两枚不是纯矢量标志。旧 `assets/` 文件未修改，校徽未用生成式绘图重画。

校徽来源及素材检查记录保存在仓库外的 `/Users/mgz/Workspace/Homepage-old/preview/school-marks/sources.json` 与 `validation.json`。已有头像和三组研究插画的明暗版本、原图与提示词继续保存在 `public/art/` 和 [插画记录](art-prompts.md)。

## 最终验证与归档

2026-11-01 12:54:59（北京时间）正式构建成功，14 页静态检查与 12 组浏览器检查通过。

- 247 次内部引用、14 次锚点引用有效，28 张图片均有替代文本；134 个内容／数据／public 文件、249 个页面链接目的地及全部页面可见正文与基线一致。
- 新箭头仅用于首页四处指定入口，16px、继承文字颜色并对辅助技术隐藏；404 的两个原有按钮保持不变。
- 1280px 浅暗主题下正文宽 740px、头像宽 220px，两侧余距各 70px，垂直中心误差小于 0.004px。1024／961px 两侧余距各 36px、垂直中心一致；960／768px 保留 140px 头像的原平板布局，390／320px 隐藏头像。所测尺寸均无横向溢出。
- 桌面四处入口均为透明背景、44px 高、16px 箭头；平板与手机继续使用静态 Notes。键盘 Enter 选择第三篇后，Tab 到 `Read Note` 可见下划线与实线轮廓，Enter 正确打开第三篇；`More About Me` 点击正确打开 About。
- 手动暗色及刷新保持检查通过，测试后恢复跟随系统，控制台无警告或错误。hover 下划线通过样式检查，键盘焦点样式通过实际浏览器检查。
- 同步前确认副本与旧归档无新增用户改动。187 个源码文件、198 个静态文件已同步，两个 ZIP 完整性与逐文件校验通过；Git、编辑器配置、依赖环境与原站备份保留。未提交或推送。
- 使用浏览器视口模拟，未使用实体设备；没有改变系统外观来测试自动系统暗色，外部链接未进行网络连通性测试。

报告在 `/Users/mgz/Workspace/Homepage-old/preview/`：`hero-links-presync-baseline.json`、`hero-links-integrity.json`、`hero-links-browser-checks.json`、`hero-links-archive-checks.json`。最终截图位于 `preview/hero-links/`：`final-light.png`、`final-dark.png`、`final-768.png`、`final-390.png`。上一轮记录继续保留。
