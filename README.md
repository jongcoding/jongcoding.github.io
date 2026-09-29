# ialleejy / Jong-Yun Lee

Personal portfolio for web and cloud security research, CTF infrastructure, and selected engineering projects

- [English](https://jongcoding.github.io/)
- [한국어](https://jongcoding.github.io/index_ko.html)

## Local preview

Static HTML and CSS with no build dependencies
A small optional script controls the project previews, while content and navigation work without JavaScript
Professional experience and community activities have separate sections and navigation links
ENKI WhiteHat appears under Experience, followed by INC0GNITO and MJSEC under Activities
Military service has its own section after Background and is not listed as professional experience

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
| `assets/portfolio-platform.css` | MSGCTF supply chain, inventory, container placement and monitoring scenes |
| `assets/portfolio-motion.js` | Visibility, pause, replay and motion preferences |
| `assets/fonts/` | Local SUIT and Manrope fonts, SIL OFL licenses and source notes |
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

MSGCTF introduces all seven platform roles across four scenes, led by DevSecOps, Resource Broker, Instance Scheduler and Monitoring
DevSecOps assembles and scans container images during challenge registration, publishing images to GHCR and SBOM/release files as Actions artifacts for Backend ingestion
Resource Broker queries shared AWS, Azure and Google Cloud inventory and holds selected capacity
Instance Scheduler dispatches Runtime creation to the reserved target and commits the reservation after successful workload creation
Isometric containers descend into separate team namespaces, while a separately labelled planned Monitoring flow illustrates a future Scheduler recovery handoff
Provider integrations remain in development and the illustrations do not imply production validation across all vendors
GnawLab shows a document passing into a knowledge base, the Bedrock Agent flow and the boundary between context and authority
WEAVE moves from its five root-cause categories to a case study and differing component interpretations
DBREACH illustrates a Docker/MariaDB setup, data blocks compressing and the review of experiment conditions
These are conceptual overviews, with the original research screenshots available in each project's materials
All previews include chapter progress, with a 24-second timeline for MSGCTF and 12 seconds for the other three
Scene layers have exclusive visibility, with each completed result held before the next scene begins
Completion marks follow their corresponding actions, and all animated objects share one playback clock

MSGCTF, GnawLab, WEAVE, INC0GNITO, MJSEC and ENKI WhiteHat use their source artwork alongside the relevant project or role
The current MSGCTF project uses the 2026 frontend's maple-leaf and mountain mark, with the original transparent PNG preserved and its empty margins cropped only in the display viewport
The separate 2025 archive keeps its historical artwork
The MSGCTF introduction and compact preview sit side by side on desktop, separating the resource-management goal, personal review role, team scope and implemented inventory adapters
Two attributed review links preserve their local-test boundaries, while live deployment and recovery validation remain explicitly separate
Broker and Runtime links point to their implementation branches rather than the README-only defaults
The preview uses a short action heading and its resulting operation, while the seven repository links remain visible below the project
On narrow screens the introduction and preview stack, with smaller gaps and no repeated logo header
Image layers, inventory racks, reservation receipts and ribbed containers distinguish each service's input and output
Shared body and link text use larger sizes and stronger contrast
Repository groups use one restrained GitHub mark followed by their repository names, while individual primary code links retain an icon and visible label
Document, challenge, provider-adapter and download links use descriptive text without repeated GitHub marks
Other service links use the original LinkedIn, Tistory, Notion, Dreamhack, CTFtime, Discord and Docker artwork, plus a simple email icon
Repeated Dreamhack challenges, Notion records and Tistory write-ups share one service mark per group, with every destination name kept visible
The contact links form a two-column layout on phones, with consistent icon alignment and keyboard focus
All destinations remain visible, with accessible names and clear keyboard focus styles
The illustrations summarize the design and do not claim to be production recordings or measured telemetry
Four scene buttons let visitors choose a stage and pause there to read at their own pace
An optional native disclosure lists all seven roles and their connections, while all seven repository links remain visible outside it
GnawLab combines its wordmark with AWS service icons and document movement
WEAVE uses a folder index, an expanding case sheet and a comparison of component interpretations
Logo colors and aspect ratios are preserved and all assets are hosted locally
See [brand asset sources](assets/brands/README.md) for provenance

- Each sequence runs once when at least 35% of the preview is visible
- The initial animation frame is prepared before autoplay so completed objects cannot flash before their actions
- Brand images are decoded before playback begins
- Playback pauses outside the viewport or while the document is hidden
- A manual pause persists until the viewer resumes it, and a finished sequence can be replayed
- Reduced-motion preferences keep all previews static and remove playback controls, while MSGCTF scene selection remains available without animation
- Data-saving mode disables autoplay while keeping manual playback available
- JavaScript-disabled browsers retain the previews' first frames, the expandable MSGCTF role overview, text and all project links

Keep motion limited to the project previews and avoid ambient loops, decorative dots and entrance animations on text

CCE 2026 appears as a short qualifier and finals Web challenge authorship credit within ENKI WhiteHat's work

MSGCTF's build scene shows source validation, layer assembly, image scanning, SBOM preparation and publication in that order
The Scheduler receipt stays HELD until Runtime creation succeeds, then changes to COMMITTED before the final result
Monitoring draws only the observed trace before revealing the warning and recovery request
GnawLab separates context delivery from the subsequent action call, WEAVE reveals interpretations after their input, and DBREACH waits for compressed data before showing its size bracket

## Hosting

GitHub Pages serves the repository root from `main`
Merging changes into `main` updates the public site
Feature branches are for review and do not change the live site

## Fonts

[SUIT Variable](https://github.com/sun-typeface/SUIT) handles Korean and body copy, while [Manrope](https://github.com/googlefonts/manrope) handles the nickname, Latin headings and selected illustration labels
Both are distributed under the SIL Open Font License 1.1, which permits use in commercial websites and bundling with the site while retaining the copyright and license notices
Their unchanged WOFF2 files are served locally and preloaded, with no runtime request to Google Fonts or another external font service

Type uses regular body text, medium links, semibold titles and bold section labels, with shared spacing and restrained tracking across both languages
Project previews share the same font stacks, lighter borders, six-pixel corners and consistent inner alignment

Retain `assets/fonts/SUIT-LICENSE.txt` and `assets/fonts/Manrope-LICENSE.txt` when distributing these fonts
See [font sources](assets/fonts/README.md) for exact source files and provenance
The former Pretendard file and its license remain in the repository for historical assets and are not requested by either page
