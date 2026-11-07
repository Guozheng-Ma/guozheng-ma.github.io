# 上传个人研究杂志新版

本轮更新为 2026-11-07 的 Role / Area / Research Themes 分类。六条研究主线按本人关注重点设置，允许论文不带 Theme；完整 22 篇、作者贡献标记、发表状态、真实图、Blog / Post 命名与首页三篇精选保留。验证与归档状态见 [交付记录](DELIVERY.md)。本轮由你自行上传，不自动提交或推送。

网站继续使用 [guozheng-ma.github.io](https://guozheng-ma.github.io)，仓库为 [Guozheng-Ma/guozheng-ma.github.io](https://github.com/Guozheng-Ma/guozheng-ma.github.io)。发布目录是 `/Users/mgz/Workspace/Homepage-old/homepage-repo`，既有 Git 历史和 Actions 工作流继续使用。

请以 [交付记录](DELIVERY.md)中的最终验证与同步状态为准。改版前备份位于 `/Users/mgz/Workspace/Homepage-old/backups/2026-10-29-before-redesign.tar.gz`，保存在仓库外。

## 使用 GitHub Desktop 上传

1. 打开 [GitHub Desktop](https://desktop.github.com/)，登录有该仓库权限的账号。若尚未添加本地仓库，选择 **File → Add Local Repository…**，添加 `/Users/mgz/Workspace/Homepage-old/homepage-repo`。已有仓库无需重新克隆，参见 [GitHub 官方说明](https://docs.github.com/en/desktop/adding-and-cloning-repositories/adding-a-repository-from-your-local-computer-to-github-desktop)。
2. 确认 **Current Branch** 为 `main`。在 **Changes** 中查看并勾选本次页面、组件、样式和文档改动。`node_modules`、`dist`、`.astro`、备份与交付 ZIP 无需上传；已有字体与许可证继续保留在仓库中。
3. 在 **Summary** 填写 `Separate publication areas and research themes`，点击 **Commit to main**。
4. 在仓库 [Settings → Pages](https://github.com/Guozheng-Ma/guozheng-ma.github.io/settings/pages)确认 **Build and deployment → Source** 为 **GitHub Actions**。已有工作流无需再选模板或添加新的发布流程。此项目使用 Astro 构建，参见 [Astro 官方部署说明](https://docs.astro.build/en/guides/deploy/github/)。
5. 回到 GitHub Desktop 点击 **Push origin**，上传提交并触发发布。
6. 打开仓库 [Actions](https://github.com/Guozheng-Ma/guozheng-ma.github.io/actions)，查看 **Deploy personal homepage**，等待 **Build website** 和 **Publish website** 都显示绿色勾选。
7. 打开 [正式首页](https://guozheng-ma.github.io)，确认导航与首页栏目显示 **Blog**、入口显示 **All Posts / Read Post**。进入 **Publications**，确认默认显示 22 篇，状态为 Published 15／Accepted 3／Preprint 4，First & co-first 共 9 篇；检查 Area 四类、Research Themes 六条，组合选择领域、研究主线、状态和作者角色，确认数量与列表切换正常；刷新筛选链接并检查前进后退。每篇论文应有真实图，**View figure** 可打开大图。再检查手机布局、浅暗主题、论文与下载入口。若仍显示旧版，使用 `⌘⇧R` 强制刷新或打开无痕窗口。

以后继续在发布目录修改，重复“检查 Changes → Commit to main → Push origin → 等待 Actions”即可。GitHub 自动构建 `dist/`，不需要手动向仓库上传生成后的网页。

## 如需使用终端

确认本地预览和改动无误后，在发布目录执行：

```sh
cd /Users/mgz/Workspace/Homepage-old/homepage-repo
git status
git add .
git commit -m "Separate publication areas and research themes"
git push origin main
```

这些是供你发布时使用的步骤，本轮本地改版不会自动执行提交或推送。

## 文件与归档

| 位置 | 用途 |
| --- | --- |
| `/Users/mgz/Workspace/Homepage-old/homepage-repo/` | 发布与日常修改的源码仓库 |
| `/Users/mgz/Workspace/Homepage/guozheng-site/` | 参考源码副本，同步状态见交付记录 |
| `/Users/mgz/Workspace/Homepage-old/guozheng-ma.github.io/` | 构建后的静态网页副本 |
| `/Users/mgz/Workspace/Homepage-old/guozheng-homepage-source.zip` | 源码归档，供保存与继续编辑 |
| `/Users/mgz/Workspace/Homepage-old/guozheng-homepage-upload.zip` | 静态网页归档，内容来自 `dist/` |

归档是否已更新到本轮版本，以 [交付记录](DELIVERY.md)为准。向现有 GitHub 仓库发布时直接提交工作目录即可，不需要解压或上传 ZIP。

## 如果发布没有成功

| 现象 | 处理 |
| --- | --- |
| 自定义工作流成功，但默认 `pages build and deployment` 报错 | 检查 **Settings → Pages → Source** 是否仍为 **Deploy from a branch**；本项目应使用 **GitHub Actions**。旧失败记录不会自动变为成功，以更正后的新运行结果为准。 |
| 没有触发 **Deploy personal homepage** | 确认提交已推送到 `main`；进入对应工作流的 **Run workflow**，选择 `main` 后手动运行。 |
| Pages 设置或权限报错 | 确认发布来源为 **GitHub Actions**；若运行页面要求仓库已有的部署审批，完成该审批。工作流已声明必要权限，无需新建访问令牌。 |
| **Build website** 失败 | 打开失败步骤，保留报错内容；修复构建错误后再提交。 |
| **Push origin** 要求先同步 | 先保留本次本地提交，再使用 **Fetch origin / Pull origin**。有冲突时交给 Codex 处理，保留远端后来新增的内容。 |
| Actions 成功但页面没更新 | 核对成功运行对应本次提交，稍等后强制刷新，并确认访问的是正式网址。 |

工作流使用 Node.js 22、`npm ci` 与 `npm run build`，构建成功后通过 Pages artifact 发布 `dist/`。既有配置遵循 [GitHub 自定义 Pages 工作流说明](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)。
