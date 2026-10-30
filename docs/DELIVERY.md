# 改版交付记录

本轮更新：2026-10-30。用户已授权将现有研究主页重新设计为清晰、简洁的个人思想杂志。本轮交付范围为本地实现与预览，不自动提交或推送。

## 目录与当前状态

- 发布与后续维护目录：`/Users/mgz/Workspace/Homepage-old/homepage-repo`。
- 本轮开始时的 Git 基线：`0fecf3f`（`Add adaptive dark mode and English-only name`）。
- 参考源码副本：`/Users/mgz/Workspace/Homepage/guozheng-site`。
- 静态网站副本：`/Users/mgz/Workspace/Homepage-old/guozheng-ma.github.io`。
- 本轮源码副本、静态副本及两个 ZIP 已同步更新。同步前确认参考源码 171 个文件匹配原 Git 基线，静态副本 190 个文件匹配上一版归档，无额外用户改动；保留参考目录的 `.git`、`.vscode`、依赖和环境。
- 源码归档：`/Users/mgz/Workspace/Homepage-old/guozheng-homepage-source.zip`；静态归档：`/Users/mgz/Workspace/Homepage-old/guozheng-homepage-upload.zip`。
- 原站备份：`/Users/mgz/Workspace/Homepage-old/backups/2026-10-29-before-redesign.tar.gz`。包含两份旧站与参考源码及 Git 历史；依赖与生成目录不在备份中。
- 保留现有 GitHub Pages 网址、仓库和 Actions 工作流，发布步骤见 [上传说明](UPLOAD.md)。

## 本轮设计

- 标题使用正体 serif，正文使用 sans；正文为 17–18px，辅助信息为 14–15px，减少细碎标签和小字。
- 首页以真实座右铭、简短个人介绍和联系入口开场。笔记采用 1 篇带图主打与 2 篇文字条目，呈现不同内容的主次。
- 首页保留 3 篇精选论文：NeurIPS 2026 position track、ICML 2026 spotlight、ICML 2025 oral。
- Notes 列表保持清楚的图文关系；Publications 用标题、作者、会议、摘要与资源链接组织内容，去掉通用配图和筛选。
- 移除装饰性眉题、阅读时长与同页重复的通用插画。履历内容集中在 About。
- 浅色底色为 `#f5f2ec`，暗色底色为 `#191919`。保留浅色、暗色、跟随系统三态及手动偏好，使用现有两套插画。
- 页面姓名继续仅显示 Guozheng Ma；保留已有论文、笔记、旧资源 URL 与历史锚点。
- 新增简洁原生 SVG 马头品牌：页头与 favicon 采用同一轮廓，浅色为 `#2b718f`、暗色为 `#a8ccdf`，支持自动／手动主题切换与刷新保持。另提供 16／32／48／64px ICO 和 180px Apple touch icon。

## 内容与图片依据

原有内容包括 6 篇论文与 6 份 BibTeX、3 篇基于论文的研究笔记，以及个人介绍、教育经历、12 条历史动态、9 项奖励、2 场报告和学术服务。内容依据见 [内容来源](content-sources.md)，本轮不新增未经核实的经历或学术结论。

头像、紫色稀疏网络、青色可塑性路径、珊瑚色数据视图各有浅色与暗色版本。已有 WebP、原图和提示词继续保存在 `public/art/` 与 [插画记录](art-prompts.md)。这些是概念插画，实验结果以论文为准。马头由原生矢量路径构成，设计与图标导出记录也见该文件。

旧站 `assets/` 与 `files/` URL 对应的文件保存在 `public/`；旧 BibTeX URL 继续对应修正后的引用。保留 Bio、Publications、Awards、Talks、Services 历史锚点。

## 本轮验证与归档

最终构建于 2026-10-30 11:28:14（北京时间）完成，生成 14 个静态页面。本轮验证通过：

- 静态检查：220 次内部资源／页面引用、14 次锚点引用、18 个带有 alt 的图片元素；无缺失路径、重复 ID 或嵌套链接，404 保持 `noindex`。
- 内容检查：首页 3 篇精选论文，完整列表 6 篇论文，6 份 BibTeX 下载与 3 篇研究笔记均保留。原站 `assets/` 与 `files/` 资源保留，除先前已核对的引用修正外无意外变化。
- 浏览器检查：实际查看 1280／1440px 桌面、768px 平板与 390／320px 手机布局；6 个核心路由在 320px 下无横向溢出或破图。正文 17–18px，辅助信息不小于 14px。
- 主题与键盘：两套图片正确切换，手动偏好跨页保持；Tab 焦点清晰，Enter 可切换主题。浅色与暗色马头、favicon 同步，刷新后保持暗色偏好。
- 品牌图标：3 个 SVG 与页头共用相同马头路径，主题颜色正确；ICO 含 16／32／48／64px，Apple 图标为 180px。最小 16px 像素预览已检查。
- 同步与归档：源码副本 175 个文件与当前工作区逐文件一致；静态副本 193 个文件与 `dist/` 一致。源码 ZIP 来自当前工作区，静态 ZIP 来自 `dist/`，均逐文件比对并通过 ZIP 完整性检查；排除 Git、依赖、生成缓存、环境文件与备份。
- 未执行 Git 提交、推送或远端发布。外部链接未逐一联网验证；本地验证不能代替上传后查看 GitHub Actions 运行结果。

验证报告与截图保存在仓库外的 `/Users/mgz/Workspace/Homepage-old/preview/`：`static-integrity.json`、`journal-browser-checks.json`、`journal-brand-checks.json`、`journal-presync-checks.json`、`journal-archive-checks.json`，以及本轮桌面／手机浅色与暗色截图。后续源码修改后应重新构建、验证与同步归档。
