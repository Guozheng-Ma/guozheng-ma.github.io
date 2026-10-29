# Content sources and migration notes

Updated: 2026-10-29 (Asia/Shanghai).

## Local source of record

The original homepage source is `/Users/mgz/Workspace/Homepage-old/homepage-repo`, remote `https://github.com/Guozheng-Ma/guozheng-ma.github.io.git`. Its latest original commit is `9ce7be8`, dated 2026-10-27, “Add NeurIPS 2026 position paper”.

The text in `/Users/mgz/Workspace/Homepage-old/guozheng-ma.github.io` matches that checkout. That second copy is not a Git checkout and lacks several original images. Use the Git checkout as the migration source.

| Content | Original source |
| --- | --- |
| Name, NTU affiliation, email, Scholar, GitHub, Twitter | `_config.yml` |
| Current research, advisor, previous institutions, motto | `index.md` |
| Six selected publications, complete authors, venue/year, distinctions, paper/code links | `_data/publications.yml` |
| Nine honors and awards | `_includes/award.md` |
| Two invited talks and the AI TIME recording | `_includes/talks.md` |
| Reviewer roles, workshop PCs/organizers, foundation co-founder role | `_includes/services.md` |
| Historical 2022–2025 news | `git show 02dbf25:_includes/news.md` |

The old news section was emptied in commit `d946563` on 2026-06-24. Historical milestones are retained only on the new About page, as the new design calls for; they are not presented as current announcements on the homepage.

## Identity and contact

- Name: Guozheng Ma / 马国政.
- Current role: PhD student, Nanyang Technological University.
- Advisor: [Dacheng Tao](https://dr.ntu.edu.sg/cris/rp/rp02343).
- Previous education: master's studies at Tsinghua University; bachelor's degree at Hunan University.
- PhD start: August 2024, verified by the old news history.
- Email: `guozheng001@e.ntu.edu.sg`.
- [Google Scholar](https://scholar.google.com/citations?user=jDvVglUAAAAJ).
- [GitHub](https://github.com/Guozheng-Ma/).
- [Twitter / X](https://twitter.com/Guozheng_Ma/).
- Motto in the original homepage: “Greatness cannot be planned, so I play with joyful explorations!”

The old bio's “second-year” is time-dependent and stale, so the public bio uses “PhD student”. Precise dates for the first two degrees were only present in the redesign scaffold, not the original source; the trajectory therefore names these stages without asserting start/end years.

## Publication verification

The six records preserve the original site's titles and author order. Asterisks on the ICML 2025 and ICLR 2024 records indicate equal contribution by Guozheng Ma and Lu Li. Presentation distinctions are retained from the owner's original source: ICML 2025 oral (top 1%); ICML 2026 spotlight (top 2.2%).

| Record | Primary source for the research summary | Venue/status source |
| --- | --- | --- |
| NeurIPS 2026 offline priors | [arXiv 2606.25527](https://arxiv.org/abs/2606.25527) | Original publication YAML, updated 2026-10-27; [OpenReview link](https://openreview.net/forum?id=XZmIeAgd6e) |
| ICML 2026 residual RL | [PMLR proceedings](https://proceedings.mlr.press/v306/ma26s.html) | PMLR + original YAML; [official DAWN implementation](https://github.com/Guozheng-Ma/DAWN) |
| ICML 2025 sparsity | [PMLR proceedings](https://proceedings.mlr.press/v267/ma25l.html) | PMLR + original YAML; [official implementation](https://github.com/lilucse/SparseNetwork4DRL) |
| ICLR 2024 plasticity | [arXiv 2310.07418](https://arxiv.org/abs/2310.07418) | Original YAML; [official implementation](https://github.com/Guozheng-Ma/Adaptive-Replay-Ratio) |
| NeurIPS 2023 augmentation | [Official proceedings](https://proceedings.neurips.cc/paper_files/paper/2023/hash/bc26087d3f82e62044fc77752e86737e-Abstract-Conference.html) | Official proceedings |
| IJCV 2025 survey | [arXiv 2210.04561](https://arxiv.org/abs/2210.04561) | [Journal DOI](https://doi.org/10.1007/s11263-025-02472-w), [published PDF hosted by co-author Bo Yuan](https://www.global-optimization.com/boyuan/Mypaper/IJCV-2025.pdf), original YAML |

Primary-source pages were retrieved on 2026-10-29. Some OpenReview pages required browser verification or returned errors to the research tool; their links and the NeurIPS 2026 track designation are preserved from the owner's source rather than falsely claimed as independently confirmed.

The IJCV manuscript was accepted on 3 May 2025 according to the published PDF. Its first arXiv version is from October 2022; these are distinct dates. The 2026 Updates entries use verified arXiv release dates (24 June and 11 February), then state the current conference designation. They do not invent acceptance dates.

Six downloadable citations in `public/bibtex/` are regenerated from the verified title, full author list, venue and year. The two ICML entries include the official Proceedings of Machine Learning Research series. The IJCV entry includes the verified DOI. Equal-contribution asterisks are excluded from BibTeX author names. No page numbers or other unverified identifiers are introduced.

The original six selected papers are preserved as the publication collection. The AAMAS, IJCAI/TLDA and second ICML 2025 multi-task DT items appear only in historical milestones, consistent with the information available in the old news archive.

### Notes

The three short research notes are newly written editorial summaries dated 2026-10-29. They explain published results and link to primary sources; they are not historical diary entries or claims of new research. The prior fabricated conference recollections, experimental anecdotes and unsupported formulas have been removed.

The new purple, teal and coral artwork is editorial illustration. It does not represent measured curves, scientific figures or empirical results.

## Additional original links

- [AI TIME talk recording, Chinese](https://www.bilibili.com/video/BV1RF4m157Uh/).
- [Reinforcement Learning Evolution Foundation](https://rlevolution.org/).
- [RLC 2026 Continual Reinforcement Learning Workshop](https://sites.google.com/view/continual-learning).
- [NeurIPS 2025 Embodied World Models for Decision Making Workshop](https://embodied-world-models.github.io/).
- [NeurIPS 2025 ARLET Workshop](https://arlet-workshop.github.io/).
- [ICLR 2025 MCDC Workshop](https://sites.google.com/view/mcdc2025/home).
- [NeurIPS 2024 Continual FoMo Workshop](https://sites.google.com/view/continual-fomo-workshop).
- [SoLaR Workshop](https://solar-neurips.github.io/).
- [ICML 2024 TiFA Workshop](https://icml-tifa.github.io/).
- [AutoRL Workshop](https://autorlworkshop.github.io/).
- [DMLR Workshop](https://dmlr.ai/).
- Historical AAMAS generalization paper: [arXiv 2306.00656](https://arxiv.org/abs/2306.00656).
- Historical IJCAI TLDA paper: [arXiv 2202.09982](https://arxiv.org/abs/2202.09982).

## Issues resolved or intentionally excluded

- Replaced all example PDF URLs and placeholder paper code links in the publication records.
- Added the NeurIPS 2026, ICML 2026 and IJCV 2025 papers missing from the scaffold.
- Preserved equal-contribution attribution omitted by the scaffold.
- Added the RLC 2026 workshop organizer role missing from the scaffold.
- Removed the invented ICLR 2026 conference attendance note.
- Corrected the sparsity explanation: the paper uses random pruning once before training, not a learned L0 penalty or mid-training pruning.
- Corrected the plasticity explanation: no unsupported gradient-rank equation or blanket assertion that regularization cannot help.
- Omitted unsourced precise dates for the Hunan and Tsinghua degrees.
- The old `_includes/contact.md` contains Yaoyao Liu's JHU address/email/phone; `_includes/teaching.md` contains unrelated template teaching roles. Neither was included in the owner's rendered homepage, and neither was migrated.
- The old SEO description incorrectly calls Guozheng a Tsinghua PhD student; use NTU.
- Rebuilt all six BibTeX files: the old ICML 2026 target was absent, the old IJCV citation described the 2022 preprint, and the old NeurIPS 2023 citation incorrectly said 2024.
- No academic roles beyond the years explicitly listed in the original source were inferred.
