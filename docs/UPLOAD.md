# 上传新版个人主页

新版继续使用 [guozheng-ma.github.io](https://guozheng-ma.github.io)，对应仓库是 [Guozheng-Ma/guozheng-ma.github.io](https://github.com/Guozheng-Ma/guozheng-ma.github.io)。本次只准备本地文件，尚未向 GitHub 推送或修改线上站点。

替换后的发布工作目录：`/Users/mgz/Workspace/Homepage-old/homepage-repo`。它保留原仓库的 Git 历史和远端地址，里面的网页源文件已替换为新版。旧站的完整备份保存在仓库外的 `/Users/mgz/Workspace/Homepage-old/backups/2026-10-29-before-redesign.tar.gz`，不要把备份一起上传。

| 交付文件 | 用途 |
| --- | --- |
| `/Users/mgz/Workspace/Homepage-old/homepage-repo/` | 发布与日常修改使用的完整源代码仓库 |
| `/Users/mgz/Workspace/Homepage-old/guozheng-homepage-source.zip` | 新版源代码归档，供保存、迁移与继续编辑 |
| `/Users/mgz/Workspace/Homepage-old/guozheng-homepage-upload.zip` | 已构建的静态网页，可直接上传到静态托管服务 |
| `/Users/mgz/Workspace/Homepage-old/guozheng-ma.github.io/` | 已替换为新版的静态网页副本，与构建输出一致 |

## 首次发布：使用 GitHub Desktop

1. 安装并打开 [GitHub Desktop](https://desktop.github.com/)，登录拥有该仓库权限的 GitHub 账号。
2. 选择 **File → Add Local Repository…**，添加 `/Users/mgz/Workspace/Homepage-old/homepage-repo`。这是已有仓库，无需新建仓库或重新克隆。此步骤可参考 [GitHub 官方说明](https://docs.github.com/en/desktop/adding-and-cloning-repositories/adding-a-repository-from-your-local-computer-to-github-desktop)。
3. 确认顶部 **Current Branch** 为 `main`。在 **Changes** 中查看这次替换：旧 Jekyll 页面删除、新 Astro 页面和图片加入属于预期改动；勾选全部新版改动，包含 `.github/workflows/deploy.yml` 和 `package-lock.json`。`node_modules`、`dist`、`.astro` 已忽略，无需上传。
4. 在左下方 **Summary** 填写 `Replace homepage with research journal`，点击 **Commit to main**。
5. 浏览器打开仓库的 [Settings → Pages](https://github.com/Guozheng-Ma/guozheng-ma.github.io/settings/pages)，在 **Build and deployment → Source** 选择 **GitHub Actions**。若已是该选项，保留即可。网站配置沿用原网址，**Custom domain** 留空。Astro 的静态页面通过 Actions 构建发布，见 [Astro 官方部署说明](https://docs.astro.build/en/guides/deploy/github/)。
6. 回到 GitHub Desktop，点击 **Push origin**。这一步才会把提交上传至 GitHub，并触发新版发布。
7. 打开仓库的 [Actions](https://github.com/Guozheng-Ma/guozheng-ma.github.io/actions)，查看 **Deploy personal homepage**。等待 **Build website** 和 **Publish website** 都显示绿色勾选。
8. 打开 [正式首页](https://guozheng-ma.github.io)，检查首页、Notes、Publications、About、图片和论文链接。若看到缓存的旧版，使用 `⌘⇧R` 强制刷新，或打开无痕窗口。

以后修改个人信息或新增论文后，重复“查看 Changes → Commit to main → Push origin → 等待 Actions”即可。GitHub 自动执行依赖安装、网站构建和发布，不需要手动上传 `dist/`。

## 如果发布没有成功

| 现象 | 处理 |
| --- | --- |
| Actions 中没有自动运行 | 确认提交已推送到 `main`；进入 **Deploy personal homepage → Run workflow**，选择 `main` 后手动运行。 |
| Pages 设置或权限报错 | 确认 **Settings → Pages → Source** 为 **GitHub Actions**；若仓库设置了部署审批，在对应运行页面完成审批。工作流已声明必要权限，无需创建访问令牌。 |
| **Build website** 红色失败 | 点击失败步骤，保留报错内容。先修复构建错误再提交；不要把源代码 ZIP 当作静态页面上传。 |
| **Push origin** 要求先同步远端 | 先保留本次本地提交，再使用 **Fetch origin / Pull origin**。如果出现冲突，交给 Codex 处理，避免覆盖远端后来新增的内容。 |
| Actions 已成功但页面仍是旧版 | 核对最后一次成功运行对应本次提交，稍等后强制刷新；同时检查访问的网址是否为正式网址。 |

工作流使用 Node.js 22、`npm ci`、`npm run build`，将 `dist/` 上传为 Pages artifact；发布任务在构建完成后运行。构建任务只有仓库读取权限，发布任务只有 Pages 与身份令牌权限。实现依据 [GitHub 自定义 Pages 工作流说明](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)。

## 可选：把静态版本上传到 Cloudflare Pages

此方式会获得一个额外的 `*.pages.dev` 地址，适合分享预览；它不会替换现有 GitHub Pages 网站。

1. 使用 `/Users/mgz/Workspace/Homepage-old/guozheng-homepage-upload.zip`，或先在新版项目目录执行 `npm ci`、`npm run build`，取得 `dist/`。
2. 登录 Cloudflare，在 **Workers & Pages → Create application → Get started → Drag and drop your files** 创建 Direct Upload 项目。
3. 上传静态网站 ZIP，或拖入 `dist/` 文件夹。上传内容的根目录应直接包含 `index.html`、`_astro/`、`about/` 等，不能多包一层项目文件夹。
4. 填写项目名，点击 **Deploy site / Save and Deploy**，完成后打开得到的 `*.pages.dev` 地址。

Direct Upload 接收已经构建好的网页文件；源代码 ZIP 中的 `src/`、`package.json` 等用于继续编辑，不能直接作为网页发布。Direct Upload 项目日后若要改为 Git 自动部署，需要新建项目。详见 [Cloudflare 官方 Direct Upload 说明](https://developers.cloudflare.com/pages/get-started/direct-upload/)。

当前正式网址与 sitemap 仍指向 `guozheng-ma.github.io`。如果以后把 Cloudflare 地址或自定义域名作为正式站点，再同步修改 `astro.config.mjs` 的 `site` 与 `public/robots.txt` 后重新构建。
