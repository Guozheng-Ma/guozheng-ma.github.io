# Blog reading style and shared visual identity

Updated 2026-11-25 after the user clarified the design scope. This supersedes the earlier whole-site editorial redesign.

## Scope

Borrow reading conventions from the reference blog only within `/notes/` and article components. Preserve the established homepage, publications, About page, navigation, card layouts and interactions. Shared fonts and colours are independent of page structure.

## Restored site

The non-Blog layout follows release `5fd2dc4`: 1100px site width, original spacing and radii, rounded-square portraits, existing navigation, homepage illustration selector with static mobile entries, and the default 3D publication carousel centred on the ICML Spotlight paper. Publications retain their original cards, figure placement, filters and detail layout. About retains its original biography and CV panels.

## Shared type and colour

Inter is retained for interface text and titles, with the original page-specific sizing and density. Homepage biography and About text return to their original sans-serif roles. Source Serif 4 is used for continuous Blog reading and the original italic motto. Retain the warm white `#fcfcfb`, muted panels `#f3f2ee`, brand blue `#2b718f`, and existing dark theme. Font-family changes must not silently change layout widths, navigation, image shapes or interaction defaults.

## Blog only

The Blog archive keeps the illustrated editorial rows and visible metadata, scoped under `.blog-index`. Article styling is isolated in `article.css` under `.journal-article`: 720px reading column, Source Serif 4 at 19px/1.72 (18px mobile), Inter section headings, existing summary, author/date/reading time, and an automatic contents list for at least three H2 headings. Wide figures, source links and native Details components are available for genuine supporting content. Current short notes do not receive invented sections or results.

## Content and validation

Preserve all original content, authorship, dates, contribution labels, original-style illustrations, and existing routes. Future requests about Blog do not authorize changes to homepage or publications architecture. Confirm final build and internal resources before publishing. Report the actual extent of visual verification; this correction was implemented while the Mac was locked, so a new browser screenshot review was unavailable.
