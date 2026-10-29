# Guozheng Ma — Personal Site

## 项目定位

个人研究网站，定位是 **research magazine, not a CV**。

主页是策展（Hero + Latest Notes + Selected Publications），CV 性内容（News、Awards、Talks、Service）一律藏进 `/about`。作品是主角，人是策展人。

**完整设计规范见 `docs/01-architecture.md`**（这是项目的"宪法"）。**实施步骤见 `docs/02-implementation-guide.md`**。本文件只是浓缩入口；所有具体决策回到那两份文档。

---

## 五条核心铁律

1. **Magazine 不是 CV** — 主页只放作品，CV 性内容（News / Awards / Talks / Service）都在 `/about`。
2. **Restraint over decoration** — 0.5px 边框、慷慨留白、**无阴影、无渐变、无淡入动画**。稀疏即自信。
3. **Color = Theme** — 一个研究主题永久绑定一种颜色，永不改变；一个颜色永远不同时代表两个主题。
4. **Sans for work, serif italic for voice** — sans 做正文/导航/按钮；serif **永远只用 italic**，且仅出现在：hero tagline、Note title、Pub title、paper title 引用、`/about` 开场白这 5 处。
5. **Sentence case everywhere** — 不用 Title Case，不用 ALL CAPS。

---

## 主题色 → 研究主题映射（永不串）

| 颜色 | 主题 | 用在哪里 |
|---|---|---|
| **Purple** | Sparsity / Scaling / Capacity | ICML 2025 paper、相关 notes、相关 update |
| **Teal** | Plasticity / Adaptation | ICLR 2024 paper、相关 notes |
| **Coral** | Augmentation / Generalization / Data | NeurIPS 2023 paper、相关 notes |
| **Amber** | **honor 专用**（Oral、Best Paper、awards inline 强调） | 不可用作研究主题色 |
| Blue | 未启用，留给未来主题（如 reasoning / embodied） | — |

---

## 字号 / 字重 / 大小写（硬规则）

| 项 | 值 |
|---|---|
| h1 | **24px**（hero name）/ **28px**（详情页 title） |
| h2 | 18px |
| h3 | 16px |
| body | 14–15px，line-height 1.65 |
| metadata | 11–12px，color secondary/tertiary |
| tagline | 15px，serif italic，weight 500 |

**字重：只用 400 (regular) 和 500 (medium)。永不用 600、700、bold。**

---

## "永远不做" 清单

- ❌ 阴影、渐变、glow、模糊
- ❌ 1px 边框（永远 0.5px）
- ❌ 单边圆角（单边 border 不加圆角）
- ❌ 加载动画、淡入动画
- ❌ 让 serif 出现在功能性位置（导航、按钮、表格）
- ❌ 让 serif 非斜体使用
- ❌ News 作为独立板块出现在主页
- ❌ 一个研究主题用上第二种颜色
- ❌ 没有 cover 的 note 发布（至少用占位 SVG）
- ❌ Title Case 或 ALL CAPS
- ❌ git clone 任何主题或模板
- ❌ 引入架构文档之外的依赖
- ❌ 发明文档没规定的新视觉语言

---

## 技术栈速查

- Astro 6.x（minimal template + TypeScript strict）
- **Content layer (Astro v6 标准)**：collection 配置在 `src/content.config.ts`（**根目录**，不是 `src/content/config.ts`）；每个 collection 用 `glob` loader；entry 的 slug 字段叫 `entry.id`，**不是** `entry.slug`（v6 移除了 legacy）
- MDX (`@astrojs/mdx`) — Notes 用
- Markdown — Publications 用
- YAML — `src/data/updates.yaml`
- **Tailwind v4** + `@tailwindcss/vite`（不是 `@astrojs/tailwind`；无 `tailwind.config.mjs`；设计 token 写在 CSS 的 `@theme` 块里）
- Sitemap (`@astrojs/sitemap`)
- 数学公式：`rehype-katex` + `remark-math`（同时挂到 `markdown` config，让 `.md` 和 `.mdx` 都生效）
- 字体：Source Serif 4（serif，italic only）+ 系统 sans + JetBrains Mono / `ui-monospace`
- 部署：Cloudflare Pages（Phase 8 配置）

---

## Tailwind utility 命名规约

架构文档（`docs/01-architecture.md` Section 4.3）的 CSS 变量名是两段式（`--color-bg-primary`、`--color-text-secondary` 等）。直接给 Tailwind v4 的 `@theme` 块使用会生成笨重的工具类（`bg-bg-primary`、`text-text-secondary`）。

`global.css` 的 `@theme` 块给**中性色 / 边框**加了一组**短语义别名**。Phase 3+ 组件代码以这套别名为主。

| Tailwind utility | 引用变量 | 用途 |
|---|---|---|
| `bg-page` | `var(--color-bg-tertiary)` | 页面底色 |
| `bg-surface` | `var(--color-bg-secondary)` | 卡片底色 / surface |
| `bg-card` | `var(--color-bg-primary)` | 最上层 card / 纯白 |
| `text-fg` | `var(--color-text-primary)` | 主体文字 |
| `text-muted` | `var(--color-text-secondary)` | 二级文字（meta、tldr） |
| `text-hint` | `var(--color-text-tertiary)` | 三级文字（最浅 hint） |
| `border-border` | `var(--color-border-tertiary)` | 默认 0.5px border |
| `border-border-hover` | `var(--color-border-secondary)` | hover/active border |
| `border-border-strong` | `var(--color-border-primary)` | 强调 border |

**主题色 ramp 用原名直通**，不加别名：`bg-purple-600`、`text-coral-800`、`border-amber-400` 等保持自然命名。

**字号 / 字重 工具类：**
- `.font-serif-italic` — serif italic + weight 500（hero tagline、Note/Pub title、paper inline 引用、/about 开场白）
- `.page-title` — 28px serif italic（**仅** detail page h1：note 详情、pub 详情）

---

## 工作约定

- **每个 Phase 走完必停下来，让用户本地预览并明确批复后再进入下一 Phase。**
- 任何**多文件变更**必先开 Plan Mode 展示计划并 approve 才动手。
- 频繁 `git commit`，commit message 用 `Phase N: <what>` 或语义化短句。
- 不擅自添加文档之外的功能或视觉决策。**所有"我觉得"必须先问。**
- 回复中英文混合：解释/讨论用中文，代码/文件名/命令/技术术语用英文。
- 用户不写代码。所有实施由 Claude 完成。

---

## 实施进度（每完成一个 Phase 由 Claude 勾选）

- [x] **Phase 1** — Scaffold（Astro + MDX + Sitemap + Tailwind v4 + KaTeX + 完整目录树 + 此文件）
- [x] **Phase 2** — 设计系统（`tokens.css` + `global.css` + `@theme` block + 本地 Source Serif 4 + KaTeX CSS 预备）
- [x] **Phase 3** — 布局组件（Layout 全局壳 + Header sticky 双状态 + Footer 含 inline SVG socials）
- [x] **Phase 4** — 主页（Hero + LatestNotes + SelectedPublications + CoverArt 5 motifs + 3+3 示例 + content layer migration）
- [x] **Phase 5** — Notes 系统（列表 + 详情 + 4 MDX 组件 + KaTeX 端到端验证 + 全 src/ hover hack sweep）
- [x] **Phase 6** — Publications 系统（year-grouped 列表 + 详情含 link-btn ↗ 大按钮 + reverse note lookup + authorBoldIndices 数组语义）。**image() helper 迁移延期**：Astro v6.3.1 用 `image()` schema 处理 SVG 时 `astro sync` 卡死。等真实 PNG teaser 替换 SVG 后或 Astro 升级修 bug 后再试。当前仍是 `z.string()` schema + `<img>` + figure 文件在 `public/figures/`
- [x] **Phase 7** — About 页面（Bio + Trajectory + Updates + Awards/Talks/Service）。所有 "about me" 静态数据集中 `src/data/cv.yaml` + `src/data/updates.yaml`，loader 在 `src/lib/cv.ts`。Bio 用 [FIXME] 占位、Awards/Talks/Service 全 [FIXME]、updates.yaml 中 3 条 paper acceptance bracket 标题与 publications/*.md 字符级一致。`grep -rn "FIXME" src/` 找全 launch 前要替换的 34 处。Trajectory 是 3 栏文字 grid（非 card），section 间用 `<section class="border-t">`（不用 `<hr>`）
- [ ] **Phase 8** — 部署 + 域名

---

## 风格漂移检查清单（建议每个 Phase 结束自查）

1. 新组件能否用已有词汇表达？能 → 用已有的，不发明。
2. 新增视觉？→ 字体/色彩/间距/圆角必须遵循 token，不发明新视觉语言。
3. 想加装饰元素（动画、图标、阴影、渐变）？→ 默认不加，除非有功能必要。
4. 一个研究主题用了新颜色？→ **严禁**。
5. 加载性能：所有页面静态化，首屏 < 1.5s。
