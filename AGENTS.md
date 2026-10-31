# Guozheng Ma · Personal research journal

本文件是当前设计与实施规范，更新于 2026-10-31。用户已授权本轮完整重设计；旧文档中的 24px 标题上限、serif 必须斜体、分阶段等待审批及自动提交约定已被本轮要求覆盖。[早期架构](docs/01-architecture.md)与[早期实施指南](docs/02-implementation-guide.md)仅作历史参考。最新用户指令优先。

## 定位与内容层级

网站是一份清晰、简洁、有个人声音的思想与研究杂志。用内容选择、文字层级、留白和适量圆角面板组织内容，减少密集分隔线。

- 首页先呈现两段有资料依据的个人介绍与联系入口，随后是完整座右铭、3 篇研究笔记和 3 篇精选论文。不显示大号 slogan，保留仅供辅助技术读取的 H1「Guozheng Ma」。座右铭放在简介与联系入口后、Notes 前，18px 常规字重斜体、次级文字色、居中，桌面一行、手机自然换行。
- 手机宽度不超过 680px 时隐藏首页头像，先读简介；平板第一段与 140px 头像并排，研究段占满整行。手机社交入口保持两列。
- 首页 Notes 在宽度至少 1100px、支持精细指针与 hover 且无触屏的电脑上采用左图右侧三条选择。原生按钮用于选择预览，独立的 `Read Note` 链接打开选中文章；不能把选择和导航混为一次操作。
- 鼠标停留 120ms 后选择，点击或 Enter／Space 立即选择；Tab 只移动焦点、不改变选择。图片容器保持尺寸，淡入淡出为 160ms，尊重减少动态效果设置。手机与 iPad 使用三个静态直接链接；手机缩略图与标题并排、摘要跨整行，平板静态图文左右排列。无脚本时保留静态阅读入口。
- 首页精选论文为 `neurips-2026-offline-priors`、`icml-2026-residual`、`icml-2025-sparsity`，分别保留 position track、spotlight、oral 的真实信息。
- Notes 列表：图文关系清楚，标题和摘要能独立说明主题；详情页专注阅读。
- Publications 列表：按年份组织完整论文信息，不显示通用主题配图，不增加筛选控件。
- About：保留个人介绍、教育经历、历史动态、奖励、报告和学术服务。首页不堆放这些履历信息。
- 不使用装饰性眉题，不显示阅读时长；同一页面不为同一内容重复放置通用插图。

## 排版与外观

- 标题使用本地 Source Serif 4 正体；正文、导航、按钮、作者和会议信息使用系统 sans。斜体只用于确有语义的强调，不再作为所有标题的默认样式。
- 阅读正文 17–18px，首页紧凑笔记摘要 16–16.5px；辅助信息 14–15px。用清楚的层级和合理行宽支持扫读与长文阅读，不把辅助文字缩成难读的小字。
- 宽度至少 1100px 时，首页和 About 的简介段落两端对齐，末行左对齐并允许英文自动断词；学校名称禁止断词。较窄屏幕保持左对齐。
- 浅色页面底色 `#fafaf8`、面板 `#f1f0eb`；暗色页面底色 `#191919`、面板 `#242522`。暗色保持温暖、可读，避免纯黑与大面积高亮插图的强烈反差。
- 移除页头、章节和列表之间的装饰分隔线，用间距与面板建立层级。Notes、内容目录和履历面板采用 24px 圆角，内部选中条目采用 16px 圆角。
- `More About Me`、`All Notes`、`All Publications` 和 `Read Note` 使用原生链接、12px 圆角浅底、最小 44px 高和明确文字。去掉装饰性箭头，保留返回用途的左箭头。
- Email、Google Scholar、GitHub、Twitter 使用统一 SVG 加可见文字。图标继承 `currentColor`，不单独进入焦点或辅助技术阅读顺序；保持既有地址，Twitter 使用 X 轮廓但不改链接。
- 首页和 About 的三所学校名称旁使用 22px 单色校徽，通过 `SchoolLink` 与 `currentColor` 统一显示。标志来自旧站原图：NTU 保留原 SVG 路径，清华和湖南大学为嵌入旧位图的 SVG alpha 蒙版，不称为纯矢量；旧 `public/assets/` 文件保持不变。
- 保留浅色、暗色、跟随系统三态及已保存偏好。系统暗色下仍应能手动选择浅色；存储不可用时页面继续可用。
- 使用已有浅色／暗色头像与主题插画；图像服务于当前内容，不用重复图片填充列表。主题颜色继续对应紫色稀疏与扩展、青色可塑性与适应、珊瑚色数据与泛化；琥珀色仅作荣誉提示。
- 品牌使用简洁的原生 SVG 马头，统一页头标志与 favicon 轮廓；浅色主题为 `#2b718f`，暗色主题为 `#a8ccdf`。页头与 SVG favicon 随自动／手动主题切换，并在刷新后保持偏好；保留多尺寸 ICO 与 Apple touch icon 兼容资源。
- 仅保留 Notes 切图所需的轻量淡入淡出，不增加其他装饰动画、渐变、光晕或阴影；不用模板，不引入新依赖。功能反馈与键盘焦点必须清楚。
- 手机布局与桌面同样可读，导航、主题切换和长标题不能造成横向溢出。

## 内容真实性与兼容性

- 姓名显示为 Guozheng Ma，不在页面添加中文姓名。
- 个人信息、论文、作者顺序、贡献标记和荣誉以原主页与已核查来源为准，见 [内容来源](docs/content-sources.md)。不编造经历、实验、研究结论、日期或奖项。
- 真实座右铭为 “Greatness cannot be planned, so I play with joyful explorations!”；保留其个人声音。
- 笔记是基于论文的新写作，不伪装为历史日记或新的实验报告。艺术插画不充当实验图。
- 保留已有论文和笔记 URL、`public/assets/` 与 `public/files/` 的旧资源路径，以及原主页的 Bio、Publications、Awards、Talks、Services 锚点。
- 404 页面保留 `noindex`，不生成指向不存在路径的 canonical。

## 技术与工作目录

- Astro 6.x + TypeScript strict；Notes 为 MDX，Publications 为 Markdown，个人资料与动态使用现有数据文件。
- Content layer 配置在 `src/content.config.ts`，使用 `glob` loader 和 `entry.id`。
- Tailwind v4 + `@tailwindcss/vite`；颜色与排版统一维护在 `src/styles/`，沿用现有语义变量。
- 保留 sitemap、`remark-math`、`rehype-katex` 与本地字体；不新增框架、字体或构建依赖。
- 发布和后续维护目录：`/Users/mgz/Workspace/Homepage-old/homepage-repo`。参考副本是 `/Users/mgz/Workspace/Homepage/guozheng-site`；先完成并验证发布目录，再按实际改动同步。
- 使用现有 GitHub Pages 仓库与 `.github/workflows/deploy.yml`：Node.js 22、`npm ci`、`npm run build`、发布 `dist/`。网址为 `https://guozheng-ma.github.io`，不新建其他托管。

## 本轮交付

本轮完成本地实现、预览与必要验证，不自动 commit 或 push。独立工作可以持续推进，无需重复旧阶段审批。检查构建、内部链接、图片、移动端、明暗主题及键盘操作；只报告实际执行的验证结果。

更新现有 [交付记录](docs/DELIVERY.md)与[上传说明](docs/UPLOAD.md)。同步副本和重新打包前确认参考目录没有新增用户改动；源码归档应包含当前工作区，不使用仍指向旧版本的 `git archive HEAD`。保留所有备份与旧资料。

既有圆角导航采用 Anthropic Research 胶囊导航与 Stripe Newsroom 明确文字入口的思路，参考链接见交付记录，不复制页面或品牌资产。
