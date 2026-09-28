# Jong-Yun Lee / ialleejy

Personal portfolio for web and cloud security research, CTF infrastructure, and selected engineering projects.

- [English](https://jongcoding.github.io/)
- [한국어](https://jongcoding.github.io/index_ko.html)

## Local preview

This is a static site. There are no build dependencies or runtime JavaScript requirements.

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000/` or `http://127.0.0.1:8000/index_ko.html`.

## Editing

| File | Purpose |
| --- | --- |
| `index.html` | English content |
| `index_ko.html` | Korean content |
| `assets/portfolio.css` | Shared layout, responsive rules, and print styles |
| `assets/msgctf-architecture.svg` | Simplified instance lifecycle diagram |
| `assets/fonts/` | Local Pretendard font and its SIL OFL license |
| `docs/content-notes.md` | Content sources and editorial decisions |

Update both language pages together. Keep project descriptions brief, make the personal contribution explicit, and link to supporting work. Use the native disclosure sections for additional detail. Avoid unverified completion claims, rankings, or production capacity figures.

The current project is **MSGCTF Cloud Platform**, maintained by the MSG-CTF team. The earlier MSG CTF 2025 platform is listed separately under previous projects.

## Hosting

GitHub Pages serves the repository root from `main`. Merging changes into `main` updates the public site. Feature branches are for review and do not change the live site.

## Fonts

[Pretendard Variable](https://github.com/orioncactus/pretendard) is bundled locally under the SIL Open Font License 1.1. Retain `assets/fonts/Pretendard-LICENSE.txt` when distributing the font.
