# 改版交付记录

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
