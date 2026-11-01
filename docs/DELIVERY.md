# 改版交付记录

本轮更新：2026-11-01。采用用户批准的 Source Sans 3 界面字体与统一图标，重新整理 Research 机制图并精修马头轮廓。保留此前首页缩写标题、完整作者、会议荣誉与真实论文数据。本轮只完成本地实现与预览，不自动提交或推送。

## 目录与当前状态

- 发布与维护目录：`/Users/mgz/Workspace/Homepage-old/homepage-repo`；本轮起点为用户已提交的 `dada34f`（`Refine motto placement and school marks`）。
- 开始前，184 个源码文件与参考副本、源码 ZIP 一致，196 个静态文件与静态镜像、静态 ZIP 一致，没有新增用户差异。上一轮 11 个未提交／新增文件完整保留，12 份论文、笔记与个人数据文件及全部 public 文件已记录校验值。基线记录为仓库外的 `preview/identity-presync-baseline.json`。
- 参考源码：`/Users/mgz/Workspace/Homepage/guozheng-site`；静态镜像：`/Users/mgz/Workspace/Homepage-old/guozheng-ma.github.io`。同步时保留参考目录的 `.git`、`.vscode`、依赖与环境。
- 源码 ZIP：`/Users/mgz/Workspace/Homepage-old/guozheng-homepage-source.zip`；静态 ZIP：`/Users/mgz/Workspace/Homepage-old/guozheng-homepage-upload.zip`。本轮已同步两份副本并重新归档，逐文件校验一致。
- 原站完整备份：`/Users/mgz/Workspace/Homepage-old/backups/2026-10-29-before-redesign.tar.gz`，包含旧站、参考源码与 Git 历史，不含依赖和生成目录。
- 现有 GitHub Pages 网址、仓库与 Actions 工作流保持不变，发布步骤见 [上传说明](UPLOAD.md)。

## 本轮调整

- 正文与界面采用本地 Source Sans 3，原有 serif 标题保留。导航与主要入口桌面为 17px／500、手机为 16px／500；资源、社交与页脚邮箱为 17px／500，作者为 16px／400、本人姓名 600。
- 线性图标使用 24px 网格、2px 笔画、18px 显示尺寸；实心社交图标为 16px、两侧各留 1px。保留 `currentColor`、可见文字及装饰图标可访问性处理。
- 重新整理三种 Research 机制图，标签桌面为 14px／500；平板 SVG 内设为 17px，缩放后约为 14.2px。精修原生 SVG 马头，页头、三份 SVG favicon、多尺寸 ICO 与 Apple 图标保持同一轮廓。
- 保留首页 RL 展示标题、完整作者与无摘要布局；论文列表、详情、真实资料及链接不改，手机继续隐藏科研缩略图。

既有导航参考 [Anthropic Research](https://www.anthropic.com/research) 的胶囊导航与 [Stripe Newsroom](https://stripe.com/newsroom) 的明确文字入口；不照搬页面或品牌资产。

## 素材与内容依据

Source Sans 3 来源于 [Adobe 官方仓库](https://github.com/adobe-fonts/source-sans)，使用 [SIL Open Font License 1.1](https://github.com/adobe-fonts/source-sans/blob/release/LICENSE.md)。本地字体为 `public/fonts/source-sans-3-variable.woff2`（170,188 字节），许可证为 [`public/fonts/SOURCE-SANS-LICENSE.md`](../public/fonts/SOURCE-SANS-LICENSE.md)。两者已纳入构建与归档，保留 Adobe 版权声明和完整许可证；没有新增构建依赖。

新 Research 缩略图是与论文主题对应的机制示意图，不是实验结果或数据图。原有 6 篇论文、6 份 BibTeX、3 篇研究笔记及完整履历继续保留，依据见 [内容来源](content-sources.md)。旧资源 URL 和 Bio、Publications、Awards、Talks、Services 历史锚点保持兼容。

三枚校徽来自旧站 `public/assets/Logo/`：NTU 保留原 SVG 路径；清华与湖南大学将旧位图缩至约 132px 后嵌入 SVG，通过滤镜提取 alpha，再由页面着色。这两枚不是纯矢量标志。旧 `assets/` 文件未修改，校徽未用生成式绘图重画。

校徽来源及素材检查记录保存在仓库外的 `/Users/mgz/Workspace/Homepage-old/preview/school-marks/sources.json` 与 `validation.json`。已有头像和三组研究插画的明暗版本、原图与提示词继续保存在 `public/art/` 和 [插画记录](art-prompts.md)。

## 最终验证与归档

2026-11-01 12:18:30（北京时间）正式构建成功，14 页静态检查和 14 组浏览器检查通过。

- 247 次本地引用、14 次锚点引用有效，28 张图片均有替代文本；没有重复 ID、嵌套链接或构建资源错误。249 个页面链接目的地与基线一致。
- 12 份内容／数据文件不变；115 个原 public 文件不变，包括 `assets/` 与 `files/` 下全部 80 个旧文件。公共资源仅修改 5 个品牌图标，并新增字体与许可证 2 个文件；没有删除旧资源。
- 字体和许可证在源码与构建中逐字节相同，14 页均预加载本地字体，浏览器字体请求返回 HTTP 200。控制台没有警告或错误。
- 1440／1200px 首页三篇标题仍为单行；768px 机制图标签可读，390／320px 自然换行且科研图按规则隐藏。首页、320px 论文列表与详情、1440px Notes 和 About 均无横向溢出。资源入口保留至少 44px 点击高度。
- 手动浅暗主题、刷新后偏好与马头／favicon 联动通过，测试后恢复跟随系统。ICO 包含 16／24／32／48／64px，Apple 图标为 180px；马头小尺寸审查通过。
- Notes 键盘 Enter 切换检查通过：选中第二篇后插画与 `Read Note` 目标正确更新，并恢复第一篇；该检查不代表全部键盘路径覆盖。
- 同步前确认副本和旧归档没有新增用户改动。186 个源码文件、198 个静态文件已同步，两个 ZIP 完整性与逐文件校验通过；保留原有未提交改动、Git、编辑器配置、依赖环境和原站备份。依赖目录及临时链接均不进入归档；未提交或推送。
- 使用浏览器视口模拟，未使用实体手机／平板；本轮未改变操作系统外观来测试自动系统暗色。外部链接没有进行网络连通性测试。

报告在 `/Users/mgz/Workspace/Homepage-old/preview/`：`identity-presync-baseline.json`、`identity-integrity.json`、`identity-browser-checks.json`、`identity-archive-checks.json`；马头专项记录为 `identity/horse-integrity.json`。最终 6 张截图保存在 `preview/identity/`：`home-light.png`、`home-dark.png`、`research-light.png`、`research-dark.png`、`research-tablet.png`、`research-mobile.png`。上一轮记录继续保留。
