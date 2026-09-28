# ialleejy / Jong-Yun Lee

Personal portfolio for web and cloud security research, CTF infrastructure, and selected engineering projects

- [English](https://jongcoding.github.io/)
- [한국어](https://jongcoding.github.io/index_ko.html)

## Local preview

Static HTML and CSS with no build dependencies
A small optional script controls the project previews, while content and navigation work without JavaScript

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000/` or `http://127.0.0.1:8000/index_ko.html`

## Editing

| File | Purpose |
| --- | --- |
| `index.html` | English content |
| `index_ko.html` | Korean content |
| `assets/portfolio.css` | Shared layout, responsive rules, and print styles |
| `assets/portfolio-motion.css` | Nine-second project-specific vector sequences |
| `assets/portfolio-motion.js` | Visibility, pause, replay and motion preferences |
| `assets/fonts/` | Local Pretendard font and its SIL OFL license |
| `docs/content-notes.md` | Content sources and editorial decisions |

Update both language pages together and preserve the same links in each

- Keep the personal contribution clear and link to supporting work
- Keep repository, website and documentation links visible without expanding a disclosure
- Use native disclosures for supplementary screenshots and materials
- Do not add sentence-ending periods or decorative dots to visible copy
- Preserve the distinction between DEF CON finals participation and the qualifier ranking
- Retain the owner's confirmed graduation status
- Avoid unverified completion claims, rankings or production capacity figures

The current project is **MSGCTF Cloud Platform**, maintained by the MSG-CTF team and still in development
The earlier MSG CTF 2025 platform has a separate entry in More projects

## Project previews

The header, primary heading and browser title use the owner's handle, ialleejy, with the full name in the identity line

MSGCTF connects AWS, Azure and GCP inventory to the Resource Broker, Scheduler and isolated team runtimes
The provider list comes from the public Resource Broker adapters and describes integration work in progress
GnawLab shows a document passing into a knowledge base, the Bedrock Agent flow and the boundary between context and authority
WEAVE moves from its five root-cause categories to a case study and differing component interpretations
DBREACH illustrates a Docker/MariaDB setup, data blocks compressing and the review of experiment conditions
These are conceptual overviews, with the original research screenshots available in each project's materials
All previews include chapter progress and share a nine-second timeline

- Each sequence runs once for nine seconds when at least 35% of the preview is visible
- Playback pauses outside the viewport or while the document is hidden
- A manual pause persists until the viewer resumes it, and a finished sequence can be replayed
- Reduced-motion preferences keep all previews static and remove playback controls
- Data-saving mode disables autoplay while keeping manual playback available
- JavaScript-disabled browsers retain the first frame, text and all project links

Keep motion limited to the project previews and avoid ambient loops, decorative dots and entrance animations on text

## Hosting

GitHub Pages serves the repository root from `main`
Merging changes into `main` updates the public site
Feature branches are for review and do not change the live site

## Fonts

[Pretendard Variable](https://github.com/orioncactus/pretendard) is bundled locally under the SIL Open Font License 1.1
Retain `assets/fonts/Pretendard-LICENSE.txt` when distributing the font
