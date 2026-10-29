# Guozheng Ma — Personal Site

## 总体架构与设计规范文档

> **核心定位**：a research magazine, not a CV.
> **风格一句话**：克制留白让作品自己说话，色彩悄悄编织主题脉络，serif italic 在关键时刻让访客听见你的声音。

本文档是这个站的完整规格说明书。所有页面、组件、内容字段、视觉 token 都在这里有确定的定义。**在使用 Claude Code 实施时，这份文档应当作为"宪法"传递给 AI 作为参考**。

---

## 1. 核心哲学

| 原则 | 含义 |
|---|---|
| Magazine, not CV | 主页策展作品，把 CV 性内容（News、Awards、Service）藏进 `/about` |
| Restraint over decoration | 0.5px 边框、慷慨留白、无阴影、无渐变。稀疏即自信 |
| Color = theme | 同一研究主题在 Notes、Pubs、封面之间共享同一种颜色 |
| Sans for work, serif italic for voice | Sans 做工作字体，serif italic 留给有声音的瞬间 |
| Work as protagonist | 作品是主角，人是策展人不是中心 |

**这五条原则统辖所有具体设计决策。当出现冲突时，回归原则。**

---

## 2. 站点地图

### 路由结构

```
/                        主页：杂志封面（Hero + 3 Notes + 3 Pubs）
/notes                   完整 Notes 列表，按时间倒序
/notes/[slug]            单篇 Note 详情
/publications            完整 Pubs 列表，可按主题筛选
/publications/[slug]     单篇 Pub 详情（abstract、figure、video、bib）
/about                   长 bio + 学术轨迹 + Updates + Awards + Talks + Service
```

### 顶部导航

```
[Guozheng Ma]                    [Notes]  [Publications]  [About]
```

- 左侧名字 = Home 链接（不要另设 "Home"）
- 三个导航项指向**独立页面**，不是主页锚点
- 初始状态融入页面顶部
- 滚动越过 Hero 后变成 sticky 薄条（字号变小、padding 缩小）
- 当前页对应导航项用 primary 文字色高亮

### 页面阅读模式

| 页面 | 模式 | 视觉骨架 |
|---|---|---|
| 主页 | 扫读、发现 | 卡片为主，视觉冲击 |
| `/notes`、`/publications` 列表 | 浏览 | 卡片网格 |
| `/notes/[slug]`、`/publications/[slug]` | 沉浸阅读 | 长文 + 嵌入组件 |
| `/about` | 长读、参考 | 段落 + 紧凑列表，不用卡片 |

---

## 3. 内容模型

整个站的内容由三种 Collection + 一个静态页面构成。

### 3.1 Notes Collection

存放位置：`src/content/notes/*.mdx`

**Frontmatter Schema (Zod):**

```typescript
{
  title: string,
  date: Date,
  tags: string[],          // ['scaling', 'sparsity', 'behind-the-paper']
  cover: {
    motif: 'network' | 'curve' | 'matrix' | 'flow' | 'scatter',
    color: 'purple' | 'teal' | 'coral' | 'amber' | 'blue'
  },
  tldr: string,            // 一句话摘要，15-25 字
  relatedPub?: string,     // 可选，关联 publication 的 slug
  draft?: boolean,         // 默认 false
  readingTime?: number     // 可自动计算
}
```

**栏目类型（4 个固定 category，写在 `tags[]` 第一项）：**

- `behind-the-paper` — 自己论文的背后故事
- `essay` — 自由长文 / 观点思考
- `field-report` — 会议、社区、活动观察
- `reading` — paper 解读

**示例文件名：** `why-sparsify-rl-networks.mdx`

### 3.2 Publications Collection

存放位置：`src/content/publications/*.md`

**Frontmatter Schema (Zod):**

```typescript
{
  title: string,
  authors: string[],       // ['Guozheng Ma', 'Lu Li', ...]
  authorBoldIndex: number, // 0 = 第一作者高亮，可能多个用数组
  venue: string,           // 'ICML' | 'ICLR' | 'NeurIPS' | 'AAMAS' | 'IJCAI'
  venueFull: string,       // 'International Conference on Machine Learning'
  year: number,
  award?: string,          // 'Oral · Top 1%' | 'Spotlight' | undefined
  tldr: string,            // 一句话摘要，15-30 字
  figure: string,          // 路径到 thumbnail，4:3 比例
  themeColor: 'purple' | 'teal' | 'coral' | 'amber' | 'blue',
  links: {
    pdf?: string,
    code?: string,
    bibtex?: string,
    project?: string,
    video?: string
  },
  featured?: boolean,      // 是否在主页 Selected Publications 展示
  featuredOrder?: number   // featured 时的展示顺序
}
```

**示例文件名：** `icml-2025-sparsity.md`

### 3.3 Updates 数据文件

存放位置：`src/data/updates.yaml`

**结构：**

```yaml
- date: 2025-05-01
  category: paper   # paper | award | honor | milestone | talk
  text: "Two papers at ICML 2025 on DRL scalability — [Network Sparsity Unlocks the Scaling Potential of DRL] got Oral (Top 1%)"
  relatedPub: icml-2025-sparsity  # 可选

- date: 2024-08-01
  category: milestone
  text: "Started my PhD at NTU under Dacheng Tao"

# ...
```

文中用 `[paper title]` 语法引用 paper slug，渲染时变成 serif italic 链接到该 publication 的详情页。

### 3.4 About 页面

文件位置：`src/pages/about.astro`（或 `.mdx`）

包含静态内容（开场白、Bio、Trajectory）+ 从 Updates / Publications / Awards / Talks / Service 数据中渲染的动态内容。

**Bio 段落、Trajectory 三块、Awards / Talks / Service 列表**直接写在 about 页面里（或单独的 `src/data/cv.yaml`）。

---

## 4. 设计系统

### 4.1 字体

```css
--font-sans: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif;
--font-serif: 'Source Serif 4', Georgia, 'Times New Roman', serif;
--font-mono: ui-monospace, 'SF Mono', Consolas, monospace;
```

**字体角色：**

| 角色 | 字体 | 用在哪里 |
|---|---|---|
| Sans body | sans | 所有正文、作者列表、导航、元信息、按钮 |
| Serif italic | serif (italic) | Note titles、Pub titles、Hero tagline、`/about` 开场白、paper title inline 引用 |
| Mono | mono | Email、inline code、文件路径 |

**永远不要**：
- 让 serif 出现在功能性位置（导航、按钮、表格）
- 让 serif 非斜体使用（这个站的 serif 永远是 italic）

### 4.2 字号

```css
/* Headings - all weight 500 */
h1: 24px      /* 24px 用于 hero name, 28px 偶尔用于 hero h1 */
h2: 18px
h3: 16px

/* Body */
body: 14-15px, line-height 1.65

/* Metadata */
small: 11-12px, color secondary or tertiary

/* Tagline (serif italic) */
tagline: 15px, font-serif italic, weight 500
```

**字重规则：** 整个站只用 400 (regular) 和 500 (medium)。**不用 600、700、bold**。

**大小写规则：** Sentence case everywhere. 不用 Title Case，不用 ALL CAPS。

### 4.3 色彩系统

#### 主题色 → 研究主题映射

| 颜色 | 主题 | 用在哪里 |
|---|---|---|
| Purple | Sparsity / Scaling / Capacity | ICML 2025 paper、相关 notes、相关 update |
| Teal | Plasticity / Adaptation | ICLR 2024 paper、相关 notes |
| Coral | Augmentation / Generalization / Data | NeurIPS 2023 paper、相关 notes |
| (未来) Amber | 暂为荣誉色，将来主题扩展可启用 |
| (未来) Blue | 未启用，留给将来主题（如 reasoning / embodied） |

**核心规则：**
- 一个研究主题永远绑定一个颜色，永不改变
- 一个颜色永远不同时代表两个主题
- 主页/列表页一屏中最多出现 2-3 种主题色

#### 中性色

- 背景：白 / 极浅米色（off-white）
- 文字：近黑（不是纯黑）
- 边框：所有边框 `0.5px solid` rgba 灰度

#### 语义色

- Amber（warning ramp）→ Honor 标记（Oral, Best Paper, Awards inline）
- Green / Red 暂不使用

### 4.4 布局 Token

```css
/* Border */
border: 0.5px solid var(--color-border-tertiary);   /* 默认 */
border: 0.5px solid var(--color-border-secondary);  /* hover/active */

/* Border radius */
--radius-md: 8px;    /* inputs, buttons, pills */
--radius-lg: 12px;   /* cards */
--radius-xl: 16px;   /* hero photo */

/* Spacing */
section-break: 2-2.5rem (32-40px)
card-padding: 1-1.25rem (16-20px)
grid-gap: 12-16px

/* Reading width */
content-width: 720px  (主体阅读列)
hero-photo: 140x140
note-cover: 5:3 ratio
pub-figure: 4:3 ratio (220x165 thumbnail)
```

**禁止：**
- 阴影、渐变、glow、模糊
- 1px 边框（永远 0.5px）
- 单边圆角（单边 border 不加圆角）
- 加载动画、淡入动画

---

## 5. 组件清单

### 5.1 布局组件

| 组件 | 位置 | 用途 |
|---|---|---|
| `Layout.astro` | `src/layouts/Layout.astro` | 全局页面壳，包含 Header、Footer、SEO meta |
| `Header.astro` | `src/components/Header.astro` | 顶部导航，含 sticky 行为 |
| `Footer.astro` | `src/components/Footer.astro` | 极简底部：email + 社交图标 |

### 5.2 主页专用组件

| 组件 | 用途 |
|---|---|
| `Hero.astro` | 主页 hero：photo + name + role + tagline + bio + contact |
| `LatestNotes.astro` | 主页 3-card Notes 区，从 Notes collection 取最新 3 篇 |
| `SelectedPublications.astro` | 主页 3 篇 featured pubs，横向卡片 |

### 5.3 通用卡片组件

| 组件 | Props | 用途 |
|---|---|---|
| `NoteCard.astro` | `note: CollectionEntry<'notes'>` | 单篇 Note 的卡片（5:3 封面 + 标题 + tldr） |
| `PublicationCard.astro` | `pub: CollectionEntry<'publications'>` | 单篇 Pub 的横向卡片（figure + 完整信息） |
| `CoverArt.astro` | `motif, color` | 生成 SVG 抽象封面，复用在 Notes 卡片 |

### 5.4 About 页组件

| 组件 | 用途 |
|---|---|
| `Trajectory.astro` | 三块教育经历卡片 |
| `UpdatesList.astro` | 读取 updates.yaml 按年份分组渲染 |
| `UpdateRow.astro` | 单条 update 行（月 / category / text） |

### 5.5 MDX 内嵌组件（供 notes 使用）

| 组件 | 用途 | 用法 |
|---|---|---|
| `Aside.astro` | 提示框 / Editor's note | `<Aside>...</Aside>` |
| `MathBlock.astro` | 数学公式块（KaTeX） | `<MathBlock>$\mathcal{L}$</MathBlock>` |
| `PaperCard.astro` | 自动渲染本站某篇 paper 卡片 | `<PaperCard slug="icml-2025-sparsity" />` |
| `Figure.astro` | 带 caption 的图 | `<Figure src="..." caption="..." />` |

---

## 6. 技术栈

| 层 | 选型 |
|---|---|
| 框架 | **Astro** (latest stable, 5.x+) |
| 内容 | **MDX** (notes) + Markdown frontmatter (pubs) + YAML (updates) |
| 样式 | **Tailwind CSS** + 自定义 CSS 变量 |
| 类型 | TypeScript + Astro Content Collections + Zod schema |
| 数学渲染 | `rehype-katex` + `remark-math` |
| 代码高亮 | Astro 默认 Shiki |
| 图片优化 | Astro `<Image />` 组件 |
| 部署 | **Cloudflare Pages**（推荐）或 Vercel |
| 仓库 | GitHub（用户已有 `guozheng-ma.github.io`） |
| 域名 | 现有 `guozheng-ma.github.io` 或自定义 |
| 字体 | Source Serif 4 (serif), 系统 sans，JetBrains Mono (mono) |

---

## 7. 项目目录结构

```
guozheng-site/
├── public/
│   ├── favicon.svg
│   └── photo.jpg                  # hero 头像
├── src/
│   ├── content/
│   │   ├── config.ts              # Zod schemas
│   │   ├── notes/
│   │   │   └── *.mdx
│   │   └── publications/
│   │       └── *.md + assets/
│   ├── data/
│   │   └── updates.yaml
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── LatestNotes.astro
│   │   ├── SelectedPublications.astro
│   │   ├── NoteCard.astro
│   │   ├── PublicationCard.astro
│   │   ├── CoverArt.astro
│   │   ├── Trajectory.astro
│   │   ├── UpdatesList.astro
│   │   ├── UpdateRow.astro
│   │   └── mdx/
│   │       ├── Aside.astro
│   │       ├── MathBlock.astro
│   │       ├── PaperCard.astro
│   │       └── Figure.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── notes/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   └── publications/
│   │       ├── index.astro
│   │       └── [slug].astro
│   ├── styles/
│   │   ├── global.css             # CSS variables, base styles
│   │   └── tokens.css             # 设计 token
│   └── lib/
│       └── utils.ts
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── CLAUDE.md                       # Claude Code 项目指引
```

---

## 8. 内容维护工作流

### 新增一篇 Note

1. 在 Claude Code 中说："帮我新建一篇 note，关于 X 主题"
2. Claude Code 创建 `src/content/notes/x-slug.mdx` 含完整 frontmatter
3. 你审稿、修改 tldr 和正文
4. `git add . && git commit && git push`
5. Cloudflare Pages 自动部署，1-2 分钟上线

### 新增一篇 Publication

1. 把 paper 的 teaser figure 保存到 `src/content/publications/[slug]/figure.png`（4:3 比例）
2. 在 Claude Code 中说："帮我添加新 publication：[paper title], [authors], [venue]..."
3. Claude Code 创建 `[slug].md` 含完整 frontmatter
4. 你检查、补充 tldr 和 links
5. 提交 + 部署

### 添加一条 Update

直接在 `src/data/updates.yaml` 顶部加一行：

```yaml
- date: 2026-05-12
  category: paper
  text: "New paper [title] just accepted at..."
  relatedPub: slug-here
```

或让 Claude Code 帮你格式化后追加。

### 重大改版

1. 修改组件代码（让 Claude Code 实施）
2. 本地 `npm run dev` 预览
3. 满意后 `git push`
4. 自动部署

---

## 9. 防风格漂移规则

将来你（或 AI）想做新东西时，**先回到这份文档**：

1. 新组件能否用已有词汇表达？能 → 用已有的
2. 必须新增？→ 字体、色彩、间距、圆角必须遵循 token，不发明新视觉语言
3. 想加装饰元素（动画、图标）？→ 默认不加，除非有功能必要
4. 没有 cover 的 note？→ 不发布，至少用占位 SVG
5. 一个研究主题用了新颜色？→ 严禁，永远绑定一个颜色

---

## 10. 验收标准

实施完成后，访客访问时应有以下体验：

- 主页第一屏能立即感受到"这不是简历是杂志"
- 三张 Note 卡片色彩各异但视觉血缘一致
- 每篇 paper 卡片的 figure 都是真实 teaser，没有占位图
- `/about` 读起来像一篇短篇自传，不像 CV
- 所有页面响应式正常（手机、平板、桌面）
- Tab 切换至深色模式（如启用）所有元素仍可读
- 加载速度 < 1.5s（Cloudflare CDN + 静态站）

---

*本文档版本：v1.0 · 设计冻结日期：与实施开始日同步*
