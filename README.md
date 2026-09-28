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
| `assets/portfolio-motion.css` | Project-specific vector sequences |
| `assets/portfolio-platform.css` | Four readable MSGCTF scenes and the optional role overview |
| `assets/portfolio-motion.js` | Visibility, pause, replay and motion preferences |
| `assets/fonts/` | Local Pretendard font and its SIL OFL license |
| `assets/brands/` | Official project, company and provider artwork, with source notes |
| `docs/content-notes.md` | Content sources and editorial decisions |

Update both language pages together and preserve the same links in each

- Keep the personal contribution clear and link to supporting work
- Keep repository, website and documentation links visible without expanding a disclosure
- Use native disclosures for supplementary role descriptions, screenshots and materials
- Do not add sentence-ending periods or decorative dots to visible copy
- Preserve the distinction between DEF CON finals participation and the qualifier ranking
- Retain the owner's confirmed graduation status
- Avoid unverified completion claims, rankings or production capacity figures

The current project is **MSGCTF Cloud Platform**, maintained by the MSG-CTF team and still in development
The earlier MSG CTF 2025 platform has a separate entry in More projects

## Project previews

The header, primary heading and browser title use the owner's handle, ialleejy, with the full name in the identity line

MSGCTF introduces all seven platform roles across four short scenes: release preparation, participant requests, resource selection and execution, then observation and recovery
Each scene pairs one concrete action and outcome with an animated interface example, with the responsible services listed as supporting text
DevSecOps publishes release bundles and images, Backend registers releases, Scheduler coordinates resource candidates and Runtime execution, and Monitoring sends recovery signals to Scheduler
AWS, Azure and Google Cloud appear in the resource-selection scene as providers whose integration is in progress
GnawLab shows a document passing into a knowledge base, the Bedrock Agent flow and the boundary between context and authority
WEAVE moves from its five root-cause categories to a case study and differing component interpretations
DBREACH illustrates a Docker/MariaDB setup, data blocks compressing and the review of experiment conditions
These are conceptual overviews, with the original research screenshots available in each project's materials
All previews include chapter progress, with a sixteen-second timeline for MSGCTF and nine seconds for the other three

MSGCTF, GnawLab, WEAVE, INC0GNITO and ENKI WhiteHat use their source artwork alongside the relevant project or role
The MSGCTF preview spans the project width, placing an action heading beside an interface example on desktop and above it on mobile
Validation checks lead to a registered release, a participant action produces a creation request, cloud selection reveals a team workspace, and a health alert leads to a recovery request
The illustrations summarize the design and do not claim to be recordings of the production interface
Four scene buttons let visitors choose a stage and pause there to read at their own pace
An optional native disclosure lists all seven roles and their connections, while all seven repository links remain visible outside it
GnawLab combines its wordmark with AWS service icons and document movement
WEAVE uses a folder index, an expanding case sheet and a comparison of component interpretations
Logo colors and aspect ratios are preserved and all assets are hosted locally
See [brand asset sources](assets/brands/README.md) for provenance

- Each sequence runs once when at least 35% of the preview is visible
- Brand images are decoded before playback begins
- Playback pauses outside the viewport or while the document is hidden
- A manual pause persists until the viewer resumes it, and a finished sequence can be replayed
- Reduced-motion preferences keep all previews static and remove playback controls, while MSGCTF scene selection remains available without animation
- Data-saving mode disables autoplay while keeping manual playback available
- JavaScript-disabled browsers retain the previews' first frames, the expandable MSGCTF role overview, text and all project links

Keep motion limited to the project previews and avoid ambient loops, decorative dots and entrance animations on text

## Hosting

GitHub Pages serves the repository root from `main`
Merging changes into `main` updates the public site
Feature branches are for review and do not change the live site

## Fonts

[Pretendard Variable](https://github.com/orioncactus/pretendard) is bundled locally under the SIL Open Font License 1.1
Retain `assets/fonts/Pretendard-LICENSE.txt` when distributing the font
