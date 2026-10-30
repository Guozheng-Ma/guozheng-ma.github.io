# 改版交付记录

本轮更新：2026-10-30。用户已授权继续调整个人思想杂志的配色、面板与 Notes 交互：电脑端左图右侧三篇可选笔记，手机与 iPad 静态直接阅读。本轮交付范围为本地实现与预览，不自动提交或推送。

## 目录与当前状态

- 发布与后续维护目录：`/Users/mgz/Workspace/Homepage-old/homepage-repo`。
- 本轮开始时的 Git 基线：`fa16a8d`（`Redesign personal research journal`）。
- 参考源码副本：`/Users/mgz/Workspace/Homepage/guozheng-site`。
- 静态网站副本：`/Users/mgz/Workspace/Homepage-old/guozheng-ma.github.io`。
- 本轮开始时确认参考源码和源码 ZIP 的 175 个文件与 Git 基线一致，静态副本、`dist/` 和静态 ZIP 的 193 个文件一致，无额外用户改动；参考目录的 `.git`、`.vscode`、依赖和环境继续保留。本轮源码副本、静态副本及两个 ZIP 已在最终验证后更新并逐文件核对。
- 源码归档：`/Users/mgz/Workspace/Homepage-old/guozheng-homepage-source.zip`；静态归档：`/Users/mgz/Workspace/Homepage-old/guozheng-homepage-upload.zip`。
- 原站备份：`/Users/mgz/Workspace/Homepage-old/backups/2026-10-29-before-redesign.tar.gz`。包含两份旧站与参考源码及 Git 历史；依赖与生成目录不在备份中。
- 保留现有 GitHub Pages 网址、仓库和 Actions 工作流，发布步骤见 [上传说明](UPLOAD.md)。

## 本轮设计

- 标题使用正体 serif，正文使用 sans；阅读正文为 17–18px，首页紧凑笔记摘要为 16–16.5px，辅助信息为 14–15px。
- 页面改为暖白 `#fafaf8`，面板为 `#f1f0eb`；暗色页面保持 `#191919`，面板为 `#242522`。移除页头、章节和列表装饰分隔线，使用留白与适量圆角面板组织内容；面板圆角为 24px，内部选中条目为 16px。
- 首页以真实座右铭、简短个人介绍和联系入口开场。宽度至少 1100px、支持精细指针与 hover 且无触屏的电脑显示左侧插画和右侧三个笔记选择按钮。
- 电脑端悬停 120ms、点击或 Enter／Space 选择笔记，Tab 只移动焦点；独立的 `Read note` 链接打开选中文章。插画容器尺寸固定，淡入淡出为 160ms，并支持减少动态效果设置。
- 手机显示三条静态图文链接，缩略图与标题并排、摘要跨整行；iPad 使用静态左右图文。一次点击直接阅读，无脚本时也保留静态入口。
- 首页保留 3 篇精选论文：NeurIPS 2026 position track、ICML 2026 spotlight、ICML 2025 oral。
- Notes 列表保持清楚的图文关系；Publications 用标题、作者、会议、摘要与资源链接组织内容，去掉通用配图和筛选。
- 移除装饰性眉题、阅读时长与同页重复的通用插画。履历内容集中在 About。
- 保留浅色、暗色、跟随系统三态及手动偏好，使用现有两套插画。
- 页面姓名继续仅显示 Guozheng Ma；保留已有论文、笔记、旧资源 URL 与历史锚点。
- 保留简洁原生 SVG 马头品牌：页头与 favicon 采用同一轮廓，浅色为 `#2b718f`、暗色为 `#a8ccdf`，支持自动／手动主题切换与刷新保持。另提供 16／32／48／64px ICO 和 180px Apple touch icon。

## 内容与图片依据

原有内容包括 6 篇论文与 6 份 BibTeX、3 篇基于论文的研究笔记，以及个人介绍、教育经历、12 条历史动态、9 项奖励、2 场报告和学术服务。内容依据见 [内容来源](content-sources.md)，本轮不新增未经核实的经历或学术结论。

头像、紫色稀疏网络、青色可塑性路径、珊瑚色数据视图各有浅色与暗色版本。已有 WebP、原图和提示词继续保存在 `public/art/` 与 [插画记录](art-prompts.md)。这些是概念插画，实验结果以论文为准。马头由原生矢量路径构成，设计与图标导出记录也见该文件。

旧站 `assets/` 与 `files/` URL 对应的文件保存在 `public/`；旧 BibTeX URL 继续对应修正后的引用。保留 Bio、Publications、Awards、Talks、Services 历史锚点。

## 本轮验证与归档

最终静态构建于 2026-10-30 19:27:20（北京时间）完成，生成 14 页，静态完整性与内容保留报告均通过：

- 静态检查：230 次内部资源／页面引用、14 次锚点引用、28 个带 alt 的图片元素、14 组明暗图片；无缺失路径、重复 ID 或嵌套链接，404 保持 `noindex`。
- 内容保留：首页 3 篇精选论文、完整列表 6 篇论文、6 份 BibTeX 与 3 篇研究笔记保留。与本轮基线相比，128 个正文块、66 个内容链接、12 份内容源文件和 117 个资源文件均保留。
- 实际浏览器检查：电脑端点击、悬停、Space 选择、Tab 不改变选择，以及 `Read note` 导航均通过；插画、选中项和阅读链接一致。1440px 正式构建预览检查全部三篇笔记及当前系统暗色模式，控制台无错误。
- 响应式检查：320px 下 6 个核心页面无横向溢出或破图，暗色下另检查 5 个页面；768／1024px 显示静态三条笔记。保存了 390px 手机浅色／暗色、桌面浅色／暗色和平板预览图。
- 主题检查：选择笔记后切换浅色／暗色，插画与马头 favicon 联动，已选笔记保持不变；当前系统暗色下的跟随模式正确。
- 交互专项检查共 15 项通过，涵盖组件编译、隔离 Node 状态模拟及源码检查。状态模拟覆盖 120ms 悬停与取消、点击更新、焦点保留、切换布局，以及 1366px 触屏设备保持静态；无脚本默认入口、固定比例与减少动态效果规则通过源码检查。
- 同步与归档：参考源码 175 个文件与当前工作区一致，静态镜像 193 个文件与 `dist/` 一致；两个 ZIP 均通过完整性及逐文件内容检查。源码 ZIP 来自当前工作区，排除 Git、依赖、构建缓存、环境文件和备份。
- 检查范围：平板检查采用浏览器视口与触屏状态模拟，未使用实体 iPad；观察了当前系统暗色，未操作系统外观切换。无脚本与减少动态效果未单独在浏览器中运行，外部链接未逐一联网验证。
- 未执行 Git 提交、推送或远端发布；现有 GitHub Actions 工作流保持不变。本地验证不能代替上传后查看 Actions 结果。

报告保存在仓库外的 `/Users/mgz/Workspace/Homepage-old/preview/`：`static-integrity.json`、`rounded-integrity.json`、`rounded-interaction-checks.json`、`rounded-browser-checks.json`、`rounded-presync-checks.json` 与 `rounded-archive-checks.json`。截图为 `rounded-desktop-light.png`、`rounded-desktop-dark.png`、`rounded-mobile-notes-light.png`、`rounded-mobile-notes-dark.png` 与 `rounded-tablet-light.png`。后续源码修改后应重新构建、验证与同步归档。
