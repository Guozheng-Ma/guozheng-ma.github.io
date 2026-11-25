# Research editorial design system

Updated 2026-11-25. This document describes the implemented design. It takes inspiration from the typography and evidence organization of [Robotic Weight Space Programming](https://jstranghoener.github.io/blog/robotic-weight-space-programming/) while keeping Guozheng Ma’s identity, content and original illustrations.

## Type and colour

Inter provides titles, navigation, controls, metadata and figure captions. Source Serif 4 provides long-form prose, introductions and short explanatory summaries. Both fonts are served locally; Inter and Source Serif 4 licenses are retained in `public/fonts/`. The serif family includes normal and italic variable fonts with real bold weights.

| Role | Implemented foundation |
| --- | --- |
| UI body | Inter, 16px / 1.65 |
| Long-form prose | Source Serif 4, 19px / 1.72; 18px on small screens |
| Page title | Inter, responsive 32–46px; individual article templates refine the range |
| Article headings | Inter, 650 weight; 25px H2 and 21px H3 |
| Figure captions and regular metadata | Inter, 14px with readable line spacing |
| Page background | `#fcfcfb` |
| Grouped-content background | `#f3f2ee` |
| Main / secondary text | `#20201e` / `#595953` |
| Brand blue | `#2b718f` |

Typography and colour are maintained in `src/styles/tokens.css` and `src/styles/global.css`. Warm neutrals, space, small corner radii and fine rules establish hierarchy. Coloured surfaces indicate related information; they should not surround every paragraph. Amber remains reserved for verified publication honours. Light, dark and system preferences remain supported; the dark palette and corresponding illustrations retain their own contrast and tone.

## Page architecture

- **Homepage:** biography and contact links, the full personal motto, three visible research directions, then Selected Publications. The directions are static direct links with original illustrations, summaries and reading links. They no longer require hovering or switching a shared preview.
- **Selected Publications:** six qualifying accepted or published works appear as a readable flat list by default. `Explore in 3D` retains the optional interactive presentation. Full author order, contribution information, venue, year, honours and resource links remain available. No JavaScript is required to read the list.
- **Blog index:** restrained illustrated entries with visible summaries and metadata. Existing titles and URLs are retained.
- **Article:** a clear title, existing summary, author, publication date and reading time precede a 720px reading column. One small original illustration accompanies the header. A contents list is generated only when the article has at least three H2 headings; short existing notes do not gain artificial sections. The footer provides the related paper when present, three relevant posts and the complete Blog link.
- **Publications:** retain the full collection, existing filters, actual paper figures, author roles and factual status. Detail pages use the same reading typography.
- **About:** retain the biography and all existing CV sections, with typography and spacing shared with the rest of the site.

The standard content and navigation width is 1040px; prose is limited to 720px. The article introduction has a 1000px outer width. Wide figures can extend to 960px, constrained by the viewport gutters. Widths are upper bounds, not fixed device sizes.

## Illustrations and evidence

Keep the established fine ink lines, pale colours, paper feel and original compositions. The first research direction remains **Towards Agentic Robot Learning**, using the original-style v4 robot-arm artwork in light and dark variants. Existing illustration assets and historical URLs remain available.

Decorative illustrations establish identity; they are not experimental evidence. Preserve actual paper figures, axes and legends. Prefer explanatory captions that identify the observation and its limitations. Do not invent results, benchmarks, dates, awards or contribution claims to fill a layout.

The MDX components provide a small reusable article vocabulary:

| Component | Purpose |
| --- | --- |
| `Figure` | Image and caption, optional independent `alt`, source link and `wide` layout |
| `Aside` | A concise clarification with a fine accent edge |
| `Details` | Optional supporting material behind a native disclosure |
| `MathBlock` | Equations with optional caption and local horizontal overflow |
| `PaperCard` | A linked publication reference derived from existing content data |

`Details` is available for future writing; no fabricated evidence or extra sections have been added to the existing short notes. Essential conclusions should remain visible in the main text.

## Interaction and accessibility

Use native links, buttons, headings, navigation landmarks and disclosure elements. Keep visible keyboard focus and textual labels; do not depend on colour alone. Research directions are fully visible without scripts. Publication filtering and the optional 3D view retain their existing URL and keyboard behaviour.

Layouts reflow for smaller screens, with compact thumbnails, stacked reading content and wrapped metadata. Wide images and equations remain within the available viewport or use their own scroll container. `prefers-reduced-motion` disables decorative transitions and animations; the publication display starts in list view and returns to it when the reduced-motion preference is activated.

Print uses a light background and dark text, removes site controls, preserves reading content and opens supporting disclosures. The publication presentation prints as a list, then restores the previous on-screen mode. Printing should be checked again whenever new interactive evidence components are added.

## Maintenance and validation

Keep existing article and publication routes, old resource paths, author ordering, contribution labels and all factual content. Shared type and colour changes belong in the design tokens and global stylesheet; article-specific layout belongs in `src/styles/article.css`. Do not reintroduce a separate font or colour system in individual components.

The integrated build succeeds with 34 pages. Internal links, assets and fragments resolve. Browser review covers desktop, a 320px mobile viewport, light and dark themes, publication filters, and the optional 3D view. Deployment results belong in `DELIVERY.md` and `UPLOAD.md`.
