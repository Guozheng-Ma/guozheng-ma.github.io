# 改版交付记录

本轮更新：2026-10-31。调整首页座右铭位置与学校标志；保留原有内容、链接及上一轮尚未提交的改动。本轮只完成本地实现与预览，不自动提交或推送。

## 目录与当前状态

- 发布与维护目录：`/Users/mgz/Workspace/Homepage-old/homepage-repo`；Git HEAD 仍为 `4685ddb`。
- 本轮开始时，上一轮 15 个未提交文件完整保留；177 个源码文件与参考副本、源码 ZIP 一致，193 个静态文件与静态镜像、静态 ZIP 一致。后续同步以上一轮归档为基线，不用旧 HEAD 覆盖工作区。
- 参考源码：`/Users/mgz/Workspace/Homepage/guozheng-site`；静态镜像：`/Users/mgz/Workspace/Homepage-old/guozheng-ma.github.io`。保留参考目录的 `.git`、`.vscode`、依赖与环境。
- 源码 ZIP：`/Users/mgz/Workspace/Homepage-old/guozheng-homepage-source.zip`；静态 ZIP：`/Users/mgz/Workspace/Homepage-old/guozheng-homepage-upload.zip`。本轮已更新并逐文件核对。
- 原站完整备份：`/Users/mgz/Workspace/Homepage-old/backups/2026-10-29-before-redesign.tar.gz`，包含旧站、参考源码与 Git 历史，不含依赖和生成目录。
- 现有 GitHub Pages 网址、仓库与 Actions 工作流保持不变，发布步骤见 [上传说明](UPLOAD.md)。

## 本轮调整

- 首页取消可见的大号 slogan，保留仅供辅助技术读取的 H1「Guozheng Ma」。完整原句 “Greatness cannot be planned, so I play with joyful explorations!” 移到简介和联系入口后、Notes 前；18px 常规字重斜体、次级文字色、居中，桌面一行、手机自然换行。
- 两段简介仍为 78 词，个人信息与链接不变。手机宽度不超过 680px 时隐藏头像，先读简介；平板第一段与 140px 头像并排，研究段占满整行。
- 宽度至少 1100px 时，首页与 About 简介两端对齐、末行左对齐，英文自动断词但学校名称禁止断词；较窄屏幕保持左对齐。主要入口统一为 `More About Me`、`All Notes`、`All Publications`、`Read Note`，返回及报告入口同样采用统一大小写。
- 新增 `SchoolLink`，首页和 About 的三校名称旁显示 22px 单色标志，随 `currentColor` 自动适配明暗主题。学校名称保持可读，校徽不重复进入辅助技术阅读顺序。
- 保留暖白与暗色配色、圆角文字入口、社交图标、Notes 选择与静态阅读，以及马头和 favicon 联动。

既有导航参考 [Anthropic Research](https://www.anthropic.com/research) 的胶囊导航与 [Stripe Newsroom](https://stripe.com/newsroom) 的明确文字入口；不照搬页面或品牌资产。

## 素材与内容依据

三枚校徽来自旧站 `public/assets/Logo/`：NTU 保留原 SVG 路径；清华与湖南大学将旧位图缩至约 132px 后嵌入 SVG，通过滤镜提取 alpha，再由页面着色。这两枚不是纯矢量标志。旧 `assets/` 文件未修改，校徽未用生成式绘图重画。

校徽来源及素材检查记录保存在仓库外的 `/Users/mgz/Workspace/Homepage-old/preview/school-marks/sources.json` 与 `validation.json`，素材检查已通过。已有头像和三组研究插画的明暗版本、原图与提示词继续保存在 `public/art/` 和 [插画记录](art-prompts.md)。

原有 6 篇论文、6 份 BibTeX、3 篇研究笔记及完整履历继续保留，依据见 [内容来源](content-sources.md)。旧资源 URL 和 Bio、Publications、Awards、Talks、Services 历史锚点保持兼容。

## 最终验证与归档

2026-10-31 15:37:32（北京时间）最终构建成功，14 页静态检查与浏览器验收通过。

- 236 次本地引用（含 6 次校徽蒙版）、14 次锚点引用有效；座右铭原句仅出现一次且位置正确，首页与 About 各有 3 个可访问学校链接。
- 9 份论文／笔记、3 份数据文件和 117 个旧资源文件与上一轮归档字节一致；新增资源仅为三枚校徽。
- 实际浏览器在 1440px 验证座右铭为居中的 18px 单行文字；390px 居中显示两行，768px 保持单行及静态 Notes。320px 首页和 About 无横向溢出，校徽均完整显示。浅色与暗色校徽和文字同色。
- 最终文字与对齐检查通过：1440px 首页两段、About 三段简介两端对齐且末行左对齐，320／768px 保持左对齐；四个主要入口大小写正确，选择第三篇后 `Read Note` 的链接和可访问名称同步。
- 181 个源码文件、196 个静态文件已同步，两个 ZIP 完整性及逐文件校验通过；保留上一轮未提交改动、Git 元数据、编辑器配置、依赖环境与备份。未提交或推送。
- 平板使用浏览器视口检查，未用实体 iPad；主题通过网站控件切换，未改变系统外观。

报告在 `/Users/mgz/Workspace/Homepage-old/preview/`：`motto-integrity.json`、`motto-browser-checks.json`、`motto-presync-checks.json`、`motto-archive-checks.json`。截图为 `motto-desktop-light.png`、`motto-desktop-dark.png`、`motto-mobile-light.png`、`motto-mobile-dark.png`、`motto-tablet-light.png`。
