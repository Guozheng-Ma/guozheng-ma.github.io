# Guozheng Ma · Research journal

Guozheng Ma 的个人研究主页，使用 Astro、MDX 与 Tailwind CSS 构建。主页呈现研究笔记与精选论文，完整经历和学术服务见 About。

正式网址：[guozheng-ma.github.io](https://guozheng-ma.github.io)

发布仓库：[Guozheng-Ma/guozheng-ma.github.io](https://github.com/Guozheng-Ma/guozheng-ma.github.io)

## 上传与日常更新

完整中文操作步骤见 [上传说明](docs/UPLOAD.md)。提交并推送到 `main` 后，GitHub Actions 会自动构建、发布到现有网址。

本次替换后的发布工作目录是 `/Users/mgz/Workspace/Homepage-old/homepage-repo`。日常更新请使用这份目录；旧站完整备份放在仓库外的 `/Users/mgz/Workspace/Homepage-old/backups/`。

## 内容位置

| 内容 | 文件 |
| --- | --- |
| 个人信息、教育经历、服务 | `src/data/cv.yaml` |
| 近期动态 | `src/data/updates.yaml` |
| 论文 | `src/content/publications/` |
| 研究笔记 | `src/content/notes/` |
| 图片与可下载资料 | `public/` |
| 页面与组件 | `src/pages/`、`src/components/` |
| 字体、颜色和排版 | `src/styles/` |
| 自动发布 | `.github/workflows/deploy.yml` |

## 本地预览

使用 Node.js 22.12 或更新版本；自动发布使用 Node.js 22。在项目根目录执行：

```sh
npm ci
npm run dev
```

浏览器打开终端显示的本地地址（默认 `http://localhost:4321`）。检查正式构建：

```sh
npm run build
npm run preview
```

构建后的静态网站在 `dist/`。`node_modules/`、`dist/` 和 `.astro/` 不提交到 Git；GitHub Actions 会根据 `package-lock.json` 安装依赖并重新生成网站。

## 设计资料

[设计规范](docs/01-architecture.md)与[早期实施指南](docs/02-implementation-guide.md)记录设计来源。当前发布方式以[上传说明](docs/UPLOAD.md)为准，继续使用原 GitHub Pages 仓库与网址。
