# Claude Code 桌面应用 实施指引

> **配套阅读：** `01-architecture.md`（设计与架构规范）
>
> 这份文档是把架构变成代码的执行手册。每一阶段都包含：**目标 → 给 Claude Code 的 prompt → 验证标准 → 常见问题**。
>
> 全程预计耗时：**5–8 小时**（分散在 2–3 天内完成）。

---

## 总体策略

```
准备阶段（30 分钟）
   ↓
Phase 1: 项目脚手架（30 分钟）
   ↓
Phase 2: 设计系统配置（45 分钟）
   ↓
Phase 3: 布局组件（Header / Footer / Layout）（45 分钟）
   ↓
Phase 4: 主页（Hero + Notes + Pubs）（90 分钟）
   ↓
Phase 5: Notes 系统（列表 + 详情 + MDX 组件）（90 分钟）
   ↓
Phase 6: Publications 系统（90 分钟）
   ↓
Phase 7: About 页面（60 分钟）
   ↓
Phase 8: 部署 + 域名（30 分钟）
   ↓
日常维护工作流
```

**心法：** 不要一次让 Claude Code 做所有事。**每阶段做完都跑一遍本地预览，确认效果再进入下一阶段**。

---

## 准备阶段

### 0.1 订阅检查

Claude Code 桌面应用需要付费订阅。最便宜的 Pro（$20/月）够你这种项目使用，但要注意 token 消耗——大型重构可能一晚就把额度用完。建议：

- 起步先用 Pro
- 实施期间发现额度紧张，临时升级到 Max（$100/月），完成后退回 Pro
- 升级链接：https://claude.com/pricing

### 0.2 系统要求

| 项目 | 要求 |
|---|---|
| 操作系统 | macOS 11+ 或 Windows 10+（Linux 用户使用 CLI 版本） |
| 磁盘空间 | 至少 5GB（Node.js + 项目 + node_modules） |
| 网络 | 持续联网（Claude Code 实时通信） |

### 0.3 安装前置工具

**Mac 用户：**
- Git 已自带，不用装
- 不需要预装 Node.js（Claude Code Desktop 内置）

**Windows 用户：**
- 必须先装 [Git for Windows](https://git-scm.com/download/win)，本地 Git 操作需要它
- 不需要预装 Node.js

### 0.4 注册 GitHub 仓库

你已有 `guozheng-ma.github.io`，建议：

**选项 A（推荐）：新建一个 repo**
- 新建 `guozheng-site` 仓库（公开）
- 把新站部署到子路径或新域名
- 旧 `guozheng-ma.github.io` 暂时保留作为 fallback，新站稳定后再切换

**选项 B：直接覆盖现有 repo**
- 备份当前内容（直接下载 zip）
- 把新项目代码推到 `guozheng-ma.github.io` 的 `main` 分支
- 风险：旧链接全部失效

我推荐 **选项 A**，更安全。

### 0.5 安装 Claude Code 桌面应用

1. 访问 https://claude.com/download
2. 下载对应平台的安装包（macOS / Windows，注意 Mac 选 Apple Silicon 或 Intel，Windows 选 x64 或 ARM64）
3. 安装并启动
4. 用 Anthropic 账户登录（确认有有效订阅）
5. 启动后界面顶部有三个 tab：**Chat / Code / Cowork**
6. 点击 **Code** 进入 Claude Code 工作区
   - 如果提示升级订阅，回到 0.1
   - 如果提示需要签证完成在线登录，按提示操作

### 0.6 在 Claude Code 里打开工作目录

在 Code 标签页：

1. 点击 **+ New Session** 或类似按钮
2. 选择 **Open Folder**
3. 创建一个新空文件夹（比如 `~/Sites/guozheng-site`）并选中它
4. Claude Code 会以这个文件夹为工作目录

### 0.7 把架构文档放进工作目录

**这是关键一步**：把 `01-architecture.md` 复制到刚创建的空文件夹里。Claude Code 后续每次执行任务都需要参考这份文档。

也可以建一个 `docs/` 子文件夹放进去：

```
guozheng-site/
└── docs/
    ├── 01-architecture.md
    └── 02-implementation-guide.md
```

---

## Phase 1：项目脚手架（30 分钟）

### 目标

用 Astro CLI 初始化项目，配置基础工具链。

### 操作

**Step 1**: 在 Claude Code 中开启 **Plan Mode**（这样 AI 先规划再动手，适合大动作）。

**Step 2**: 给它这段 prompt：

```
请阅读 docs/01-architecture.md 这份完整架构文档。
然后帮我初始化一个 Astro 项目，要求：

1. 使用最新稳定版 Astro
2. 项目名 guozheng-site
3. 启用 TypeScript（strict 模式）
4. 集成以下：
   - @astrojs/mdx
   - @astrojs/tailwind
   - @astrojs/sitemap
   - rehype-katex + remark-math（用于数学公式）
5. 按照架构文档 Section 7 创建完整目录结构（空文件先建好占位）
6. 配置 astro.config.mjs 包含所有集成
7. 配置 tailwind.config.mjs，preflight 启用
8. 创建 .gitignore（包含 node_modules, dist, .DS_Store 等）
9. 创建一个 README.md，简单说明项目结构

完成后告诉我：
- 哪些文件被创建
- 怎么跑起来（npm run dev 的预期端口）
- 还需要我手动做什么
```

**Step 3**: Plan Mode 会展示计划，你看一遍，确认无误后点 **Approve**。

**Step 4**: Claude Code 开始执行。会创建一堆文件、跑 `npm install`。等它结束。

### 验证标准

- [ ] 项目根目录下出现 `package.json`、`astro.config.mjs`、`tailwind.config.mjs`
- [ ] `src/` 下结构与架构文档 Section 7 一致
- [ ] 在 Claude Code 内置终端跑 `npm run dev`，能在 `http://localhost:4321` 看到 Astro 欢迎页
- [ ] 没有报错

### 常见问题

**Q：npm install 卡住或报权限错？**
A：在终端跑 `sudo chown -R $(whoami) ~/.npm`（Mac）或重启 Claude Code 应用。

**Q：端口被占用？**
A：让 Claude Code 改用其他端口（如 4322）。在 prompt 中说："端口冲突，改用 4322"。

**Q：Tailwind 没生效？**
A：让 Claude Code 检查 `tailwind.config.mjs` 的 `content` 是否包含 `'./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'`。

---

## Phase 1.5：建立 CLAUDE.md（10 分钟）

`CLAUDE.md` 是 Claude Code 的"项目记忆"——每次新会话开始时它会自动读取。把核心规则写进去，AI 就不会偏离。

### Prompt:

```
在项目根目录创建 CLAUDE.md，内容如下（基于 docs/01-architecture.md）：

# Guozheng Ma 个人站项目说明

## 项目定位
个人研究网站，定位是 "research magazine, not a CV"。
完整设计规范见 docs/01-architecture.md。

## 五条铁律
1. Magazine 不是 CV：主页只放作品，CV 性内容（News、Awards、Service）都在 /about
2. Restraint：0.5px 边框、无阴影、无渐变、慷慨留白
3. Color = Theme：同一研究主题在所有页面共享同一颜色
4. Sans for work, serif italic for voice：serif 只用 italic 且仅在 hero tagline、Note title、Pub title、paper title 引用、/about 开场白
5. Sentence case everywhere（不用 Title Case，不用 ALL CAPS）

## 主题色映射
- Purple → Sparsity / Scaling
- Teal → Plasticity
- Coral → Augmentation / Generalization
- Amber → 仅用于 honor 标记（Oral, awards inline）

## 字号 & 字重
- h1: 24px / h2: 18px / h3: 16px，全部 weight 500
- 只用 400 和 500 字重，不用 600、700、bold
- Body: 14-15px, line-height 1.65

## 永远不做
- 阴影、渐变、glow、模糊
- 1px 边框（永远 0.5px）
- 单边圆角
- 加载/淡入动画
- 在功能性位置用 serif（导航、按钮、表格）
- News 作为独立板块出现在主页

## 实施进度
- [ ] Phase 1: 脚手架
- [ ] Phase 2: 设计系统
- [ ] Phase 3: 布局组件
- [ ] Phase 4: 主页
- [ ] Phase 5: Notes 系统
- [ ] Phase 6: Publications 系统
- [ ] Phase 7: About 页面
- [ ] Phase 8: 部署
```

让 Claude Code 创建这个文件。**每完成一个 Phase，让它来标记进度**。

---

## Phase 2：设计系统配置（45 分钟）

### 目标

把架构文档里的所有视觉 token 写入 CSS 变量和 Tailwind 配置，让所有组件可以引用。

### Prompt：

```
请阅读 docs/01-architecture.md Section 4（设计系统）。

任务：
1. 创建 src/styles/tokens.css，把所有视觉 token 转化为 CSS 自定义属性（CSS variables）：
   - 字体：--font-sans, --font-serif, --font-mono
   - 颜色：light + dark 模式都要有
     - --color-bg-primary, -secondary, -tertiary
     - --color-text-primary, -secondary, -tertiary
     - --color-border-tertiary, -secondary, -primary
     - 主题色 ramp：--color-purple-{50, 100, 200, 400, 600, 800, 900}
     - 同样为 teal、coral、amber、blue 建 ramp
   - 圆角：--radius-md (8px), -lg (12px), -xl (16px)
   
2. 创建 src/styles/global.css：
   - 引入 tokens.css
   - 引入 Tailwind base/components/utilities
   - 引入 Source Serif 4 字体（通过 Google Fonts CSS @import）
   - 全局 body 样式：font-sans, color-text-primary, bg-tertiary
   - 通用工具类：.font-serif-italic (font-family + font-style)
   - sr-only 工具类（accessibility）
   - 暗色模式自动切换（prefers-color-scheme: dark）
   
3. 修改 tailwind.config.mjs，extend theme：
   - colors: 引用 CSS variables（不要硬编码 hex）
   - fontFamily: sans/serif/mono 引用变量
   - borderRadius: md/lg/xl 引用变量
   
4. 在 Layout.astro 中引入 global.css

完成后我要能：
- 在任何组件里用 var(--color-text-primary) 或 Tailwind class（如 text-primary）
- 切换系统暗色模式，所有颜色自动调整
```

### 验证标准

- [ ] `src/styles/tokens.css` 和 `global.css` 都存在
- [ ] 在浏览器 DevTools 里查看任何元素，能看到 `--color-text-primary` 等变量被识别
- [ ] 切换系统暗色模式，背景和文字色自动变化
- [ ] 控制台没有 CSS 错误

### 现在跑一下：

```bash
npm run dev
```

打开 `http://localhost:4321`，应该能看到一个空白页面（暂时），但 DevTools 里所有变量都已加载。

---

## Phase 3：布局组件（45 分钟）

### 目标

建好整站共用的 Header（含 sticky 导航）、Footer、Layout 壳。

### Prompt：

```
请阅读 docs/01-architecture.md Section 2（站点地图）和 Section 5.1（布局组件）。

任务：
1. src/layouts/Layout.astro
   - props: title, description, image?, type?
   - <head> 包含 SEO meta、Open Graph、favicon
   - <body> 结构：<Header /> + <slot /> + <Footer />
   - 引入 global.css

2. src/components/Header.astro
   - 桌面端：左侧名字 "Guozheng Ma" 链接到 /，右侧三个 link: Notes, Publications, About
   - 当前页对应链接用 text-primary 高亮
   - 字号 13px, sans, weight 500（名字）/ weight 400（链接）
   - 0.5px 底部 border
   - 滚动行为：
     - 初始 padding 14px 20px
     - 滚动超过 hero（约 400px）后变 sticky：padding 10px 20px，字号缩小到 12px，border-bottom 0.5px solid var(--color-border-tertiary) 在 sticky 时出现
       // Updated per Phase 3 decision: align with architecture's no-shadow rule
     - 用 IntersectionObserver 或 scroll listener 实现
   - 响应式：窄屏（<640px）右侧链接保留但 gap 缩小

3. src/components/Footer.astro
   - 一行式底部
   - 内容：email (mono) · Google Scholar · GitHub · X
   - 社交图标用内联 SVG（不用 emoji 不用图标库）
   - 居中或左对齐都可，sentence case
   - 上方 0.5px border

4. 在主页 src/pages/index.astro 暂时放个占位：
   <Layout title="Guozheng Ma">
     <main style="min-height: 80vh; padding: 2rem;">
       <h1>Homepage placeholder</h1>
     </main>
   </Layout>

完成后我能看到 header 和 footer 都正常显示。
```

### 验证标准

- [ ] 打开 `http://localhost:4321`，能看到顶部 Header、底部 Footer
- [ ] Header 三个导航项点击能跳转（即使目标页 404）
- [ ] 滚动页面（暂时还没内容，可在 placeholder 里多塞点 `<div>` 增加高度）能看到 Header 变 sticky 且缩小
- [ ] 暗色模式切换无样式失效

---

## Phase 4：主页（90 分钟）

### 目标

完整的主页：Hero + Latest Notes（3 卡片）+ Selected Publications（3 篇）。

### 4.1 Hero 组件

**Prompt:**

```
请阅读 docs/01-architecture.md Section 5.2（Hero）。

创建 src/components/Hero.astro：
- grid-template-columns: 140px 1fr; gap: 24px
- 左侧：photo (140x140, border-radius 16px)，从 /public/photo.jpg 加载
- 右侧：
  - <h1> Guozheng Ma (24px sans, weight 500)
  - role 行 (13px secondary)："PhD student at Nanyang Technological University · Previously at Tsinghua, Hunan"
  - tagline (serif italic 15px)："Greatness cannot be planned, so I play with joyful explorations."
  - bio 一段 (14px, line-height 1.65)：投资 deep RL 基础问题的描述
  - contact 行：email (mono) + 社交图标
- 整个 Hero padding-top 1rem，下方 margin-bottom 2.5rem

在 src/pages/index.astro 中引入 Hero。

photo.jpg 我会自己放进 /public/，你先用占位 SVG（c-blue tint + 简单 wave 图案）。
```

### 4.2 Notes 卡片 + LatestNotes 区

**Prompt:**

```
请阅读 docs/01-architecture.md Section 3.1（Notes Collection schema）和 5.3（卡片组件）。

任务：
1. 配置 Content Collections
   - 创建 src/content/config.ts，定义 notes collection 的 Zod schema
   - schema 字段见架构文档 3.1

2. 创建 src/components/CoverArt.astro
   - props: motif ('network' | 'curve' | 'matrix' | 'flow' | 'scatter'), color ('purple' | 'teal' | 'coral' | 'amber' | 'blue'), aspectRatio (string, default "5/3")
   - 渲染一个 SVG，5 种 motif 各对应一种几何抽象图案
   - 颜色通过 c-{color} 类应用（从 Tailwind 主题色 ramp 取）
   - 背景 tint 用 ramp 50 (opacity 0.13)，主元素用 ramp 600，底部 0.5px 横线作为系列标识

3. 创建 src/components/NoteCard.astro
   - props: note (CollectionEntry<'notes'>)
   - 结构：CoverArt 在上 + body 在下
   - body 内容（按架构文档 3.1）：
     - tag (italic 12px secondary) — category 字段
     - title (serif italic 15-16px) — note.data.title
     - tldr (13px secondary 1.5 line-height)
     - meta 行：date (11px tertiary) + reading time (11px tertiary)

4. 创建 src/components/LatestNotes.astro
   - 读取 notes collection，按 date 降序取前 3 篇
   - 3 列 grid，gap 14px
   - 上方 section header："Latest notes" (18px weight 500) + 右侧 "All notes →" 链接
   - 如果不到 3 篇，剩余位置不渲染（不要占位）

5. 在 index.astro 中引入 LatestNotes，放在 Hero 下方

6. 创建 3 个示例 note 用于测试：
   - src/content/notes/why-sparsify-rl-networks.mdx
   - src/content/notes/plasticity-is-not-regularization.mdx
   - src/content/notes/iclr-2026-papers-that-matter.mdx
   每篇 frontmatter 完整，正文写两段占位文字
```

### 4.3 Publications 卡片 + SelectedPublications 区

**Prompt:**

```
请阅读 docs/01-architecture.md Section 3.2 和 5.3。

任务：
1. 在 src/content/config.ts 添加 publications collection 的 Zod schema

2. 创建 src/components/PublicationCard.astro
   - props: pub (CollectionEntry<'publications'>)
   - 横向 grid: 220px figure | 1fr body
   - figure：从 pub.data.figure 加载，4:3 比例，背景 bg-tertiary，0.5px 右边 border
   - body 内容（按架构文档 3.2）：
     - tag 行：venue · honor (honor 用 amber text 强调，非 italic)
     - title (serif italic 16px)
     - authors（13px secondary），authorBoldIndex 对应的作者 weight 500 + color primary
     - tldr (13px secondary, 1.55 line-height)
     - actions 行：links 字段里有什么就渲染什么 button (PDF / Code / BibTeX / Project)

3. 创建 src/components/SelectedPublications.astro
   - 读取 pubs collection，过滤 featured=true，按 featuredOrder 排序
   - section header："Selected publications" + 右侧 "All publications →"
   - 每篇 PublicationCard 占一行，margin-bottom 14px

4. 在 index.astro 中引入 SelectedPublications

5. 创建 3 个示例 publication 用于测试：
   - icml-2025-sparsity.md
   - iclr-2024-plasticity.md  
   - neurips-2023-augmentation.md
   每篇 frontmatter 完整（按架构文档 3.2 所有字段），featured=true，figure 字段先用占位路径
```

### 验证标准

- [ ] 主页能看到 Hero（含占位 SVG photo）+ 3 个 Note cards + 3 个 Pub cards
- [ ] 每个 Note 卡的 cover 是 SVG 抽象图（不同 motif 不同 color）
- [ ] 每个 Pub 卡的 figure 区是占位灰色块（真实图你之后会放）
- [ ] 你的名字在作者列表里被加粗高亮
- [ ] 暗色模式切换无样式失效

### 现在跑：

```bash
npm run dev
```

应该能看到接近最终效果的主页（除了 Pub figure 是占位）。

---

## Phase 5：Notes 系统（90 分钟）

### Prompt：

```
请阅读 docs/01-architecture.md Section 2（路由）、3.1（Notes schema）、5.5（MDX 组件）。

任务：

1. 创建 MDX 内嵌组件 src/components/mdx/：
   - Aside.astro：callout 块，0.5px border + 主题色 tint 背景 + 左侧 3px 主题色 accent
   - MathBlock.astro：包装 KaTeX 公式块，居中显示
   - PaperCard.astro：props slug，读取对应 publication，渲染一个紧凑卡片 inline 显示
   - Figure.astro：props src, caption, width?，居中图 + 下方 caption (11px tertiary italic)

2. 配置 MDX 自动注入这些组件，让 .mdx 文件不用手动 import：
   - 在 src/content/config.ts 或专门的 mdx-components.ts 里全局注册

3. 创建 /notes 列表页 src/pages/notes/index.astro：
   - <Layout> 包裹
   - <h1> "Notes"（24px sans）
   - 副标题 (serif italic 14px tertiary)："Field notes from a PhD on DRL"
   - 所有 notes 按 date 降序，渲染为卡片网格（3 列）
   - 顶部可加 tag 筛选（可选，后续可以加）

4. 创建 /notes/[slug] 详情页 src/pages/notes/[slug].astro：
   - getStaticPaths 生成所有 note 的路由
   - 页面结构：
     - 顶部 breadcrumb： "← Notes"
     - tag (italic 12px tertiary) — category
     - title (h1, 28px serif italic)
     - meta row: date + reading time
     - cover (大尺寸，aspect-ratio 21/9 或 5/2)
     - <Content /> 渲染 MDX 正文
     - 底部：
       - 如果 relatedPub 存在，显示一个 PaperCard
       - 上一篇/下一篇 navigation
   - 阅读容器宽度：max-width 680px 居中（长文阅读宽度）

5. 在 3 个示例 notes 中各使用一次 Aside、MathBlock、PaperCard、Figure 组件，验证它们都能工作
```

### 验证标准

- [ ] `/notes` 列出所有 3 篇示例 note
- [ ] 点开任意一篇，能正常显示长文 + 内嵌组件
- [ ] Aside 块、Math 公式、PaperCard 都正常渲染
- [ ] URL 是 `/notes/why-sparsify-rl-networks` 这种漂亮的 slug

---

## Phase 6：Publications 系统（90 分钟）

### Prompt：

```
请阅读 docs/01-architecture.md Section 2、3.2、5.3。

任务：

1. /publications 列表页 src/pages/publications/index.astro：
   - <h1> "Publications"
   - 副标题：研究方向 1-2 行
   - 顶部 tag/year filter 区域（可选，后续加）
   - 所有 publications 按 year 降序，PublicationCard 一行一个
   - 主题色按 themeColor 字段呈现

2. /publications/[slug] 详情页 src/pages/publications/[slug].astro：
   - getStaticPaths 生成所有 pub 路由
   - 页面结构：
     - breadcrumb: "← Publications"
     - venue · year · honor
     - title (h1 serif italic 28px)
     - authors 完整列表（你的名字加粗）
     - 大尺寸 figure
     - <Content /> 渲染 Markdown 长描述（如果有）
     - Links 区：所有可用 links 作为大按钮
     - 如果有 relatedNote，底部显示 "Behind this paper →" 链接

3. 创建 Astro 的图片优化集成：
   - 引入 @astrojs/image 或使用 Astro 内置 <Image />
   - publications 的 figure 用 Image 组件自动优化（webp + responsive）

4. 在 SelectedPublications 区域，每个 PublicationCard 点击进入对应的详情页
```

### 验证标准

- [ ] `/publications` 列出所有 3 篇示例 pub
- [ ] 点开详情页能看到完整信息 + 大 figure + 所有 links
- [ ] 主页 Selected Publications 区的卡片可以点击跳转

---

## Phase 7：About 页面（60 分钟）

### Prompt：

```
请阅读 docs/01-architecture.md Section 3.3、3.4、5.4。

任务：

1. 创建 src/data/updates.yaml，包含示例数据：
   - 至少 8-10 条 update，覆盖 2022-2026 年
   - 每条包含 date, category, text, relatedPub?

2. 创建组件：
   - Trajectory.astro：三栏卡片显示教育经历
   - UpdatesList.astro：读取 updates.yaml，按年份分组渲染
   - UpdateRow.astro：单条 update 行（month / italic category / text）
     - text 中 [paper slug] 语法自动渲染为 serif italic 链接

3. src/pages/about.astro 完整页面结构：
   - "About" 小标签 (italic 12px)
   - h1 (serif italic 24px): "Hello, I'm Guozheng."
   - 3 段 bio 长文（详细版）
   - section divider
   - <h2> "Trajectory" + <Trajectory />
   - section divider
   - <h2> "Updates" + <UpdatesList />
   - section divider
   - Awards / Talks / Service 三块（小标题 + 紧凑列表，不用卡片）
   
4. Trajectory 的三个数据：
   - 2017-2021 · Hunan University · Bachelor's degree
   - 2021-2024 · Tsinghua University · Master's, research journey began
   - 2024-now · Nanyang Tech. University · PhD with Dacheng Tao

5. Awards / Talks / Service 的数据可以暂时写在 about.astro 里的常量数组，或者 src/data/cv.yaml
```

### 验证标准

- [ ] `/about` 页面完整可读
- [ ] Updates 按年份分组，新条目在上
- [ ] [paper-slug] 语法自动渲染为正确 link
- [ ] 整个页面 reading 体验流畅（max-width 720px 阅读列）

---

## Phase 8：部署 + 域名（30 分钟）

### 8.1 推送到 GitHub

在 Claude Code 终端：

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/guozheng-ma/guozheng-site.git
git push -u origin main
```

（先在 github.com 创建 `guozheng-site` 仓库）

### 8.2 接入 Cloudflare Pages

1. 访问 https://pages.cloudflare.com/
2. 点击 **Create a project** → **Connect to Git**
3. 授权 GitHub，选择 `guozheng-site` 仓库
4. 构建配置：
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/`
5. 点击 **Save and Deploy**

2 分钟后，你的站会在 `guozheng-site.pages.dev` 上线。

### 8.3 自定义域名（可选）

如果想用自己的域名（如 `guozheng.me`）：

1. 在 Cloudflare 注册或转入域名
2. Pages 项目里 **Custom domains** → Add your domain
3. DNS 自动配置

如果继续用 `guozheng-ma.github.io`：

- 在仓库 Settings → Pages 选择新的源
- 或者把新站部署在 `guozheng-ma.github.io/site/` 子路径

### 8.4 验证部署

- [ ] 访问部署后的 URL，所有页面正常
- [ ] 修改任一文件 `git push`，1-2 分钟内自动重新部署
- [ ] HTTPS 证书自动生效

---

## 日常维护工作流

### 写一篇新 Note

打开 Claude Code，在已有项目会话里说：

```
帮我新建一篇 note，主题是 [简单描述]。
- category: behind-the-paper / essay / field-report / reading
- 主题色：[purple / teal / coral 等]
- tldr 一句话讲什么
- 帮我起个 slug（小写连字符）

然后创建 src/content/notes/[slug].mdx，frontmatter 完整，正文给我一个起手框架（3-5 段，含 1 个 Aside 占位）。
```

之后你在 VSCode 或者直接在 Claude Code 文件编辑器里修改正文。完成后：

```bash
git add . && git commit -m "Add note: [title]" && git push
```

部署自动触发。

### 添加新 Publication

```
帮我添加新 publication：
- title: "..."
- authors: [...]
- venue: ICML
- year: 2026
- award (如有): Oral
- 主题色: ...
- tldr: ...

请创建 src/content/publications/[slug]/index.md，frontmatter 完整。
figure 路径先用占位 ./figure.png，我之后会替换真实文件。
```

之后把论文 teaser figure 保存到对应路径，覆盖占位，git push。

### 更新 Updates

最简单的方式直接编辑 `src/data/updates.yaml`，在文件顶部加：

```yaml
- date: 2026-05-12
  category: paper   # 或 award / honor / milestone / talk
  text: "新条目内容，[paper-slug] 引用 paper 标题..."
  relatedPub: paper-slug  # 可选
```

git push 即上线。

### 重大改版

打开 Claude Code，明确告诉它要改什么，引用架构文档对应章节。比如：

```
我想修改 NoteCard 的设计：cover 改成 1:1 正方形而不是 5:3。
请按架构文档约束（保持其他视觉规则不变）修改 NoteCard.astro 和 LatestNotes.astro 的 grid。
完成后让我本地预览确认。
```

---

## Claude Code 使用心法

### 1. 善用 Plan Mode

涉及多文件变更的大任务（新建一整个 Phase 的组件），**先开 Plan Mode**。AI 会先输出执行计划，你审查后再批准。这避免它误删或误改重要文件。

### 2. 一次只做一件大事

不要一个 prompt 说"帮我做完 Phase 4 到 Phase 6"。即使能做，调试起来痛苦。**一个 Phase 一个会话**，做完测试，再开始下一个。

### 3. 频繁 commit

每完成一个小功能就 git commit。出问题时能 `git reset --hard` 回到上一个干净状态。

### 4. CLAUDE.md 是项目记忆

完成一个 Phase 后，让 Claude Code 更新 `CLAUDE.md` 的"实施进度"勾选框，并简短记录这一阶段的关键决定（比如"使用了 IntersectionObserver 实现 sticky header"）。

### 5. 让 AI 解释自己写的代码

实施完一个组件后，问它："简单解释一下 NoteCard.astro 的工作原理。" 你看一遍，对将来自己调试很有帮助。

### 6. 卡住时换语言

如果 AI 反复在同一个 bug 上转，**关掉会话开新的**，重新描述问题。它的 context 可能已被污染。

### 7. 视觉效果用截图沟通

实施过程中如果某个组件视觉不对，**截图 → 拖到 Claude Code 对话里 → 圈出问题描述**。比纯文字描述快 10 倍。

---

## 故障排查

| 症状 | 可能原因 | 处理 |
|---|---|---|
| `npm run dev` 启动失败 | 端口被占 / Node 版本不对 | Claude Code: "诊断启动失败"；它会跑诊断命令 |
| 页面空白 | Layout 没导入 / JS 错误 | DevTools 看 console，截图给 Claude Code |
| MDX 组件不渲染 | 没全局注册 | 检查 mdx-components.ts 配置 |
| 暗色模式样式坏 | 用了硬编码 hex 不是 CSS 变量 | "找出所有硬编码颜色，换成变量" |
| 部署后白屏 | base path 不对 | astro.config 的 site/base 配置 |
| 字体加载慢 | Google Fonts 慢 | 改本地托管：下载 Source Serif 4 woff2 放 /public/fonts/ |
| 改动没生效 | 缓存 | dev server 重启；Cloudflare 上点 Purge cache |

---

## 完成后的下一步

- [ ] 写第一篇真正的 Note（不是占位）
- [ ] 替换 3 篇 Pub 的真实 teaser figure
- [ ] 补全 About 的 bio 长版和 Awards/Talks/Service 完整数据
- [ ] 替换 hero photo 为你真实的图
- [ ] 考虑加 RSS feed（Astro 一行配置）
- [ ] 考虑加 view counter / privacy-friendly analytics（Plausible / Umami）
- [ ] 把 `guozheng-ma.github.io` 设置 301 重定向到新站

---

## 时间预算总结

| 阶段 | 预计时长 | 你的角色 |
|---|---|---|
| 准备 | 30 min | 装软件、注册账号 |
| Phase 1-3 | 2.5 hours | 给 prompt、审 plan、本地预览 |
| Phase 4-7 | 5 hours | 同上 |
| Phase 8（部署） | 30 min | 操作 GitHub + Cloudflare |
| **合计** | **8 hours** | 分散到 2-3 天 |

实施完成后，你拥有：
- 一个属于自己的、独一无二的研究主页
- 完整的设计系统文档作为护栏
- 0 成本的内容更新流程（写 markdown 即发布）
- 长期可维护、AI 友好的代码库

*Welcome to your magazine.*
