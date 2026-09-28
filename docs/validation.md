# Validation

28 September 2026 / Local Chromium through Playwright CLI / Python static HTTP server on loopback

## Responsive and functional checks

Both English and Korean pages checked at widths of 320, 390, 768, 1024 and 1440 pixels

- No horizontal page overflow at any of the ten language/viewport combinations
- No broken page images or missing local files
- MSGCTF, GnawLab, WEAVE, INC0GNITO and ENKI WhiteHat marks checked at their displayed size
- The current MSGCTF project uses the 2026 frontend logo, with original source pixels and transparency preserved and empty margins excluded by its SVG viewport
- Official AWS, Azure, Google Cloud, Bedrock, S3, Lambda, Kubernetes and GitHub artwork loads from local files
- All seven MSGCTF roles appear across four selectable scenes at every tested width
- Each selected scene shows a prominent service name, one action and its outcome, supporting service names and no page movement when changing scenes
- Mobile scenes place concise 20-pixel action headings above the illustrated objects
- Preview descriptions use 15–16-pixel text, primary service names use 15–16-pixel text and results use 16–17-pixel text
- All 39 GitHub links per language remain visible and have accessible destination names
- GitHub marks are limited to 11 primary links and 6 group labels, with one mark per repository group and no icons on document, challenge-path or download links
- Larger shared body and link text and stronger secondary-text contrast checked across both language versions
- The complete role descriptions remain available in a native disclosure and all seven repository links remain visible outside it
- No JavaScript exceptions or browser console errors during the checks
- One primary heading per page, unique element IDs, named links, and valid in-page anchor targets
- English/Korean links reach the corresponding language page
- All seven MSGCTF component repository links visible by default
- All GitHub links visible without expanding a disclosure at every tested width
- Seven additional projects visible in the archive, including TokenCat
- Supplementary screenshot disclosures open and close with Enter
- Navigation targets remain below the sticky header
- Keyboard skip link focuses the main content
- With JavaScript disabled, language switching, section navigation and supplementary disclosures still work
- No sentence-ending or decorative periods in either page's text, excluding the email address
- Both pages show the owner's confirmed university graduation status
- Both pages link the DEF CON Demo Labs session and speaker profile
- All 69 original external and evidence-image destinations accounted for in each language, with 68 retained verbatim and Watchdog corrected to its current public repository
- The two language pages contain identical sets of 110 unique link destinations, including navigation, contacts, references and image materials
- AWS, Azure and GCP appear in the MSGCTF copy and the Broker inventory scene, with a visible link to the public provider adapters
- INC0GNITO's official repository, qualifier, finals, planning document and challenge authorship links are present in both languages
- `git diff --check` passes

Desktop and mobile layouts inspected visually, including the expanded ENKI section
MSGCTF's introduction and preview share a row on desktop and stack on mobile
The other project previews stack below their descriptions on narrow screens
Mobile paragraph spacing checked after removing sentence-ending periods

## Typography and finish

- Official SUIT and Manrope SIL Open Font License 1.1 notices retained with the local font files
- Font metadata checked for variable weight ranges of 100–900 for SUIT and 200–800 for Manrope
- Chromium's rendered-font inspection confirms Manrope for the nickname and illustration labels, and SUIT for body copy, Korean headings and SVG scene text in both languages
- Both pages request only the two local WOFF2 files, with no Pretendard or external font requests
- All SVG text remains inside its illustration viewport with the new font metrics
- Header, profile, ENKI experience and all four project previews inspected after the font change
- Responsive checks repeated for both languages at 320, 390, 768, 1024 and 1440 pixels, with no overflow or console errors
- All four MSGCTF scenes retain a stable frame height at every tested width under both normal and reduced-motion preferences
- Shared type weights, text wrapping, border contrast, preview corners, shadows and inner spacing checked on desktop and mobile

## Project motion

Four project previews use local HTML, SVG, CSS and the native Web Animations API
MSGCTF runs for 24 seconds and the other three run for 12 seconds

- Automatic playback begins when the preview enters the viewport
- HTML and SVG brand images are decoded before playback starts
- A natural 24-second MSGCTF run completes once and remains stopped
- Container image layers appear before the scan seal, SBOM and published-image result
- Cloud candidate selection precedes the held reservation and Broker result
- Runtime dispatch precedes container placement, ready state and reservation commit
- The response trace precedes the health alert and recovery request
- Every film's scene visibility sampled at 25 ms intervals across the complete timeline with no overlapping scene layers
- Native animation clocks checked while playing, with zero spread between actors and matching duration metadata
- Initial frames prepared at time zero before autoplay, with future results and completion checks hidden
- Action dependencies checked at 29 checkpoints across all four films, including source checks before assembly, scan and SBOM before publication, workload readiness before COMMITTED, and graph delivery before alert and request states
- GnawLab's second connection completes before the action group appears, and WEAVE's input panel appears before either interpretation
- DBREACH's output blocks arrive before the size bracket appears
- Shadow bounds reduced to avoid harsh clipping at the SVG content boundary
- Manual pause freezes the animation timeline and persists after scrolling away and back
- Selecting any of the four MSGCTF stages seeks to that scene and pauses playback until the visitor resumes
- Scene selection checked in both languages at five widths under normal and reduced-motion preferences
- Scrolling a running preview outside the viewport pauses it, and returning resumes it
- Replay restarts at the beginning with a fresh animation timeline
- A replay defect found during testing was fixed by committing the removed CSS animation before starting it again
- Changing the system reduced-motion preference resets all four previews to static content with no active animations or playback controls, while the four MSGCTF stage buttons remain usable
- Original research image assets remain available through the supplementary materials links
- Playback controls have a 44-pixel minimum height
- With JavaScript disabled, preview controls remain hidden and each preview displays its first scene, while the native MSGCTF overview still exposes all seven role descriptions
- Simulated browser data-saving mode disables autoplay while allowing explicit manual playback

Animation states, scene transitions and mobile diagrams were inspected through browser screenshots
The MSGCTF GIF in `docs/preview/` captures the four-scene website animation for review
The earlier four-project GIF documents the previous branded revision and is superseded for MSGCTF by the individual capture
Neither GIF is a runtime dependency

The four platform scenes were selected at 5,400 ms, 11,400 ms, 17,400 ms and 23,400 ms, covering build and publication, capacity reservations, container scheduling, and observation and recovery
Transition boundaries and intermediate dependency states were inspected in all four previews, with both language versions checked for SVG text overflow
SVG labels fit inside the scene viewport and the primary header and heading use ialleejy in both languages
The review GIF is captured at 30 frames per second while browser playback uses the native animation timeline
The branded revision also checks WEAVE's folder index and interpretation comparison, MSGCTF's role scenes, and GnawLab's original wordmark and service icons

## MJSEC and CCE additions

- Official MJSEC logo copied unchanged from the club website repository, with identical source and local SHA-256 hashes
- Logo rendering inspected in the club activity entry, Homepage & LMS and BOJ Contest headings
- CCE 2026 appears inside the ENKI WhiteHat role as a short Web challenge authorship credit for the qualifier and finals, matching the owner's clarification
- Korean and English pages checked at 320, 390, 768, 1024 and 1440 pixels with no horizontal overflow, missing images, duplicate IDs, broken anchors or browser errors
- The concise CCE authorship line wraps within narrow screens and MJSEC heading marks retain their aspect ratios without duplicated accessible names
- Both pages retain the same 110 link destinations and all 69 previously inventoried destinations, including the corrected Watchdog repository URL
- Desktop and mobile screenshots reviewed for CCE, MJSEC activity and the homepage project

## Compact project layout

- Korean MSGCTF project height reduced from 1,104 to 712 pixels at a 1,440-pixel viewport, and from 1,534 to 1,115 pixels at a 390-pixel viewport with details collapsed
- The compact preview retains all four scenes and seven service roles, with the existing timing and action dependencies unchanged
- Both languages checked at 320, 390, 768, 1024 and 1440 pixels under normal and reduced-motion preferences
- Scene selection retains a stable frame height, pauses at the selected action and preserves selection after scrolling
- The complete role disclosure still expands and provider logos decode correctly at all tested widths

## Repository links

Repository-link presentation checked in both languages at 320, 390, 768, 1024 and 1440 pixels
No horizontal overflow, missing labels, hidden GitHub destinations, repeated marks inside repository groups or browser errors were found
Keyboard navigation moves from Frontend to Backend in the component links with a visible two-pixel focus outline
Desktop and mobile screenshots reviewed for MSGCTF, WEAVE, INC0GNITO, the 2025 MSG CTF archive and the MJSEC homepage project

## Other service links

LinkedIn, Tistory, Notion, Dreamhack, CTFtime, Discord and Docker Hub links use locally hosted source artwork, with the Primer mail icon on the smaller email actions
The same-service groups contain one mark each, and the existing 11 primary GitHub marks plus six GitHub group marks remain unchanged

- Both language pages checked at 320, 390, 768, 1024 and 1440 pixels with all eight added icon types present
- No page or link-row overflow, missing images, hidden GitHub links, repeated group marks or browser errors
- All 110 unique destinations remain identical across the two languages, including all 69 originally inventoried destinations and the corrected Watchdog URL
- New marks have empty alt text and visible labels, with the link's accessible name identifying its service or email destination
- Desktop and mobile screenshots inspected for the profile, contact, INC0GNITO, MJSEC, MSG CTF archive, Docker Hub and competition write-ups
- Mobile profile and contact links form two aligned columns, and icon sizing preserves the original artwork's aspect ratios
- Existing keyboard focus remains visible on the component links

## Limits

Checks cover local Chromium behavior rather than exhaustive browser or accessibility certification
The hidden-document pause handler is implemented alongside viewport pausing, while automated state checks cover viewport changes, manual controls and motion preferences
Historical external links were preserved without asserting that every third-party destination remains publicly accessible
LinkedIn could not be read without signing in
Production Pages deployment is unchanged by the feature branch
