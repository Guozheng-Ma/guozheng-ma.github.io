# Guozheng Ma · Personal research journal

Guozheng Ma 的个人思想与研究杂志。首页先呈现两段个人介绍和联系入口，完整座右铭以居中的 18px 斜体文字放在简介之后、Notes 之前；随后是三篇研究笔记与三篇精选论文。学校名称旁使用来自旧站的单色校徽；手机优先显示简介。桌面首页和 About 简介两端对齐、末行左对齐，较窄屏幕保持左对齐。暖白页面配合适量浅底圆角面板，正体 serif 标题与 sans 正文支持清楚阅读。

电脑端 Notes 左侧显示插画、右侧选择三篇笔记，使用独立的 `Read Note` 链接打开文章；手机与 iPad 直接显示三条静态图文链接。网站支持浅色、暗色及跟随系统，已有两套配图与马头品牌同步切换。页头与 favicon 的原生 SVG 马头浅色为 `#2b718f`、暗色为 `#a8ccdf`。

正式网址：[guozheng-ma.github.io](https://guozheng-ma.github.io)

发布仓库：[Guozheng-Ma/guozheng-ma.github.io](https://github.com/Guozheng-Ma/guozheng-ma.github.io)

## 维护与上传

主要工作目录：`/Users/mgz/Workspace/Homepage-old/homepage-repo`。日常修改使用这份 Git 仓库；`/Users/mgz/Workspace/Homepage/guozheng-site` 是参考源码副本。

当前规范见 [AGENTS.md](AGENTS.md)，本轮座右铭位置与学校标志调整的验证状态、素材来源见 [交付记录](docs/DELIVERY.md)。本轮先在本地完成与预览，不自动提交或推送。需要发布时按 [上传说明](docs/UPLOAD.md)操作，现有 GitHub Actions 会构建并发布 `main` 分支。

## 内容位置

| 内容 | 文件 |
| --- | --- |
| 姓名、邮箱与社交链接 | `src/data/profile.ts` |
| 社交图标与统一链接 | `src/components/SocialIcon.astro`、`src/components/SocialLinks.astro` |
| 学校链接与单色校徽 | `src/components/SchoolLink.astro`、`public/marks/` |
| 教育经历、奖励、报告与服务 | `src/data/cv.yaml` |
| 历史动态 | `src/data/updates.yaml` |
| 个人介绍与首页文字 | `src/components/Hero.astro`、`src/pages/about.astro` |
| 论文与引用下载 | `src/content/publications/`、`public/bibtex/` |
| 研究笔记 | `src/content/notes/` |
| 首页笔记选择与静态阅读布局 | `src/components/LatestNotes.astro` |
| 浅色／暗色插画 | `public/art/` |
| 马头标志与浏览器图标 | `src/components/HorseMark.astro`、`public/favicon*.svg`、`public/favicon.ico`、`public/apple-touch-icon.png` |
| 页面、组件、字体与样式 | `src/pages/`、`src/components/`、`src/styles/`、`public/fonts/` |
| 自动发布 | `.github/workflows/deploy.yml` |

个人资料、论文与图片的依据分别见 [内容来源](docs/content-sources.md)和[插画记录](docs/art-prompts.md)。旧站资源与历史锚点继续保留。

## 本地预览

使用 Node.js 22.12 或更新的兼容版本；自动发布使用 Node.js 22。在项目根目录执行：

```sh
npm ci
npm run dev
```

浏览器打开终端显示的本地地址，默认是 `http://localhost:4321`。检查正式构建：

```sh
npm run build
npm run preview
```

静态网站生成在 `dist/`。`node_modules/`、`dist/` 和 `.astro/` 不提交到 Git；GitHub Actions 根据 `package-lock.json` 安装依赖并生成网站。

## 历史资料

[早期架构](docs/01-architecture.md)与[早期实施指南](docs/02-implementation-guide.md)保留设计演进背景；其中旧字号、斜体标题和分阶段审批规则不再适用，以 [AGENTS.md](AGENTS.md)为准。

改版前的完整备份：`/Users/mgz/Workspace/Homepage-old/backups/2026-10-29-before-redesign.tar.gz`。
