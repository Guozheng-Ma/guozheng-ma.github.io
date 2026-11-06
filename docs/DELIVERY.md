# 改版交付记录

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
