# 上传个人研究杂志新版

## 2026-11-17 · 论文立体卡片本地提交

用户查看本地效果后要求“提交一版本”。本次在维护仓库创建卡片版本的本地 Git 提交，未 push 或部署；待确认字体／蓝白配色试稿仍为原有未提交改动。参考副本、静态镜像和 ZIP 保留已发布版本。提交基于 `ded3567`，独立预览源码仍位于 `preview/publication-ring-2026-11-17/site/`：[打开论文展示预览](http://127.0.0.1:4327/#publications)。下方历史发布操作不表示本次已经上线。

首页共 9 项：6 篇第一作者、2 篇共一且署名第一的论文，加上以团队署名和 Core contributor 角色展示的 ACE-CaP-0。共一第 2 位的 TMLR 论文及第 3 位的 Plasticine 仅保留在完整论文集。完整题名保留于数据、详情、悬停提示和可访问名称，首页可见标题将 Reinforcement Learning 缩写为 RL；作者与链接保持，REAP Paper 仍为空地址占位。

初始展示 ICML 2026 Spotlight 的残差强化学习论文；标题已按用户反馈缩为桌面 23px、手机 20px，并使用上述 RL 缩写。桌面实测九张标题均不超过三行，其中残差 Spotlight 与 sparsity 为两行，其余为三行。预览服务展示已构建版本，源码变动后需要重新构建并刷新。

正文宽度 1100px，立体舞台最大 1280px，支持拖动、横滑、按钮、方向键、随机切换与列表视图。核心文件为 `SelectedPublications.astro`、`publication-ring.css` 和 `scripts/publication-ring.ts`。34 页构建通过，29 份内容文件与基线完全一致，首页 40 个站内引用完整；浏览器已核对循环、拖动、横滑、列表及 390px 手机无横向溢出。详情见 [交付记录](DELIVERY.md)。

手机卡片最大宽度微调为 340px；390px 视口下实测九张可见题名均为两至三行，页面无横向溢出。桌面仍为 23px，九张均不超过三行。

发表信息层级跟进：会议／期刊名改为顶部主文字色粗体（桌面 18px／手机 17px），年份右对齐，移除卡片内重复序号；Spotlight／Oral 和百分比归到发表来源下方，Position paper 保持中性色；作者角色移至作者名单上方。预印本主行统一为 Preprint，Module Scaling 保留 arXiv 次级来源，ACE 保留 Technical report。底层出版数据与完整论文页未改。34 页构建通过，390px 全部卡片无内容外溢且标题不超过三行。

## 最新：Position paper 无文字插画

首页 position paper 使用新的 `research-priors-v2` 浅暗配图，直观连接左侧离线数据／预训练知识与右侧持续在线交互学习闭环，图中没有文字。保持现有布局、作者、论文信息和其他三张精选插画。资源与验证记录见交付记录。

## 最新：REAP 首页插画

首页 REAP 卡片已改用与原三篇协调的纸感、细墨线、低饱和插画，并提供浅暗两版。论文列表与详情继续使用原文 Figure 1；First author、Preprint 2026、作者顺序和空 Paper 入口保持。资源位于 `public/art/research-reap{,-dark}.{png,webp}`。

## 2026-11-16 · REAP 首页条目

最新修订将 **From Discovery to Mastery** 放在首页 Selected Research 第一项，标为 **Preprint 2026 / First author**，作者顺序来自用户截图。原三篇精选保留，完整论文列表为 23 篇。Paper 显示禁用占位；拿到真实地址后，只需在 `src/content/publications/preprint-2026-reap.md` 中填写 `links.pdf`，首页、列表和详情会同步变成可用链接。

本次使用原论文 Figure 1 的机制面板和完整图；本地更新已完成，用户已明确授权本次提交并发布到现有首页。本地未确认字体／配色试稿不纳入发布候选。源码、静态副本和 ZIP 的最终状态见交付记录与 `preview/reap-preprint-2026-11-16/`。

最新修订保留 Selected Research 前两张插画，第三张使用 `research-sparsity-v2` 权重矩阵纸卡。首页隐藏 Accepted／Published 等发表状态，会议、角色和荣誉保持；论文列表和详情仍显示状态。沿用现有 GitHub Pages 直接发布流程。

最新更新为首页 **Selected Research** 的三张具体场景插画，浅暗两版分别对应先验诊断、残差价值学习、静态稀疏网络；上方 Blog 和论文真实配图保持。用户已授权直接推送到现有 GitHub Pages。上线后同时检查三张缩略图的浅暗切换、论文入口与移动布局。

本轮更新为 2026-11-15 的三项研究方向：**Agentic Robot Learning、Online Learning from Experience、Learning Dynamics and Pathologies**。标题、简介、方向介绍与六张浅暗插画同步更新，用户明确授权直接推送上线。另一个待确认的蓝白配色／字体试稿保留在维护目录，本轮发布不包含该试稿。随后按用户反馈保留机器人图，重画经验学习与学习动力学配图，使用 `-v2` 浅暗版本。最新一轮按用户选定的立体学习地形附图微调，使用 `learning-dynamics-v3` 浅暗配图；机器人图与经验学习图保留。验证与归档状态见 [交付记录](DELIVERY.md)。下文保留后续自行维护的操作方法。

网站继续使用 [guozheng-ma.github.io](https://guozheng-ma.github.io)，仓库为 [Guozheng-Ma/guozheng-ma.github.io](https://github.com/Guozheng-Ma/guozheng-ma.github.io)。发布目录是 `/Users/mgz/Workspace/Homepage-old/homepage-repo`，既有 Git 历史和 Actions 工作流继续使用。

请以 [交付记录](DELIVERY.md)中的最终验证与同步状态为准。改版前备份位于 `/Users/mgz/Workspace/Homepage-old/backups/2026-10-29-before-redesign.tar.gz`，保存在仓库外。

## 使用 GitHub Desktop 上传

1. 打开 [GitHub Desktop](https://desktop.github.com/)，登录有该仓库权限的账号。若尚未添加本地仓库，选择 **File → Add Local Repository…**，添加 `/Users/mgz/Workspace/Homepage-old/homepage-repo`。已有仓库无需重新克隆，参见 [GitHub 官方说明](https://docs.github.com/en/desktop/adding-and-cloning-repositories/adding-a-repository-from-your-local-computer-to-github-desktop)。
2. 确认 **Current Branch** 为 `main`。在 **Changes** 中查看并勾选本次页面、组件、样式和文档改动。`node_modules`、`dist`、`.astro`、备份与交付 ZIP 无需上传；已有字体与许可证继续保留在仓库中。
3. 在 **Summary** 填写 `Refine selected learning landscape illustration`，点击 **Commit to main**。
4. 在仓库 [Settings → Pages](https://github.com/Guozheng-Ma/guozheng-ma.github.io/settings/pages)确认 **Build and deployment → Source** 为 **GitHub Actions**。已有工作流无需再选模板或添加新的发布流程。此项目使用 Astro 构建，参见 [Astro 官方部署说明](https://docs.astro.build/en/guides/deploy/github/)。
5. 回到 GitHub Desktop 点击 **Push origin**，上传提交并触发发布。
6. 打开仓库 [Actions](https://github.com/Guozheng-Ma/guozheng-ma.github.io/actions)，查看 **Deploy personal homepage**，等待 **Build website** 和 **Publish website** 都显示绿色勾选。
7. 打开 [正式首页](https://guozheng-ma.github.io)，确认 Blog 顺序为 **Agentic Robot Learning、Online Learning from Experience、Learning Dynamics and Pathologies**，桌面默认第一项，切换时图片和 **Read Post** 对应各自介绍。手机保持同序；**All Posts** 中仍可打开原三篇论文笔记。检查三套浅暗配图与文章链接。若仍显示旧版，使用 `⌘⇧R` 强制刷新或打开无痕窗口。

以后继续在发布目录修改，重复“检查 Changes → Commit to main → Push origin → 等待 Actions”即可。GitHub 自动构建 `dist/`，不需要手动向仓库上传生成后的网页。

## 如需使用终端

确认本地预览和改动无误后，在发布目录执行：

```sh
cd /Users/mgz/Workspace/Homepage-old/homepage-repo
git status
git add -i
git commit -m "Refine selected learning landscape illustration"
git push origin main
```

这些步骤供后续自行维护使用。本轮在线更新已获得用户授权，无需额外确认。

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
