# 改版交付记录

完成日期：2026-10-29。风格沿用 guozheng-site，个人信息以旧主页为准。

- 发布与后续维护目录：`/Users/mgz/Workspace/Homepage-old/homepage-repo`。
- 原参考项目也已更新：`/Users/mgz/Workspace/Homepage/guozheng-site`。两处为本次交付时的相同源文件；以后优先维护发布目录。
- 静态网站副本：`/Users/mgz/Workspace/Homepage-old/guozheng-ma.github.io`。
- 原站备份：`/Users/mgz/Workspace/Homepage-old/backups/2026-10-29-before-redesign.tar.gz`。包含两份旧站与参考源码，含 Git 历史；依赖与生成目录不在备份中。
- 已准备源码 ZIP 与静态上传 ZIP；具体步骤见 [上传说明](UPLOAD.md)。
- 尚未提交、推送或部署到 GitHub，线上站点未修改。

## 本次完成

14 个静态页面；6 篇论文与 6 份 BibTeX；3 篇基于论文的研究笔记；完整个人介绍、教育经历、12 条历史动态、9 项奖励、2 场报告和学术服务。

4 张新绘制插图：保留人物特征的头像、紫色稀疏网络、青色可塑性路径、珊瑚色数据视图。WebP 用于页面，原图和完整提示词保存在 `public/art/` 与 [插画记录](art-prompts.md)。论文配图是概念插画，实验内容请以论文为准。

保留旧站 `assets/` 与 `files/` URL（源文件存于 `public/`）；旧 BibTeX URL 已对应到修正后的引用。旧主页的 Bio、Publications、Awards、Talks、Services 锚点保持可访问。

## 验证

- Astro 6.3.8 静态构建成功，安装版本与 lockfile 一致。
- 14 页、229 个本地资源/链接引用：无缺失路径、缺失图片 alt、重复 ID、嵌套链接或占位文案。
- 浏览器检查桌面 1280px、手机 390px 与 320px；未出现横向溢出。
- 检查主页、论文筛选、论文详情、笔记详情、About 页面。
- 部署工作流 YAML 解析通过；远端 Actions 需上传后运行。
- 预览截图与验证记录位于工作目录外的 `preview/` 文件夹。
