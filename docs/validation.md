# Validation

28 September 2026 / Local Chromium through Playwright CLI / Python static HTTP server on loopback

## Responsive and functional checks

Both English and Korean pages checked at widths of 320, 390, 768, 1024 and 1440 pixels

- No horizontal page overflow at any of the ten language/viewport combinations
- No broken page images or missing local files
- MSGCTF, GnawLab, WEAVE, INC0GNITO and ENKI WhiteHat marks checked at their displayed size
- The current MSGCTF project uses the 2026 frontend logo, with original source pixels and transparency preserved and empty margins excluded by its SVG viewport
- Official AWS, Azure, Google Cloud, Bedrock, S3 and Lambda artwork loads from local files
- All seven MSGCTF roles appear across four selectable scenes at every tested width
- Each selected scene shows one action and its outcome, with two or three supporting service names and no page movement when changing scenes
- Mobile scenes place 24-pixel action headings above their interface illustrations
- Preview descriptions use 15–16-pixel text, service names use 13-pixel text, and primary interface results use 17–18-pixel text after removing duplicate labels and nested framing
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
- AWS, Azure and GCP appear in the MSGCTF copy and the workspace preview scene, with a visible link to the public provider adapters
- INC0GNITO's official repository, qualifier, finals, planning document and challenge authorship links are present in both languages
- `git diff --check` passes

Desktop and mobile layouts inspected visually, including the expanded ENKI section
MSGCTF's preview spans the project width and places action headings above the interface examples on mobile
The other project previews stack below their descriptions on narrow screens
Mobile paragraph spacing checked after removing sentence-ending periods

## Project motion

Four project previews use local HTML, SVG, CSS and the native Web Animations API
MSGCTF runs for sixteen seconds and the other three run for nine seconds

- Automatic playback begins when the preview enters the viewport
- HTML and SVG brand images are decoded before playback starts
- A natural sixteen-second MSGCTF run completes once and remains stopped
- Release validation checks complete before the release receipt appears
- The participant action changes to an accepted request before the creation request appears
- Provider selection precedes the isolated workspace and instance-ready state
- A health change appears before the recovery request and delivery confirmation
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

The four platform scenes were selected at 3,400 ms, 7,400 ms, 11,400 ms and 15,400 ms, covering release preparation, participant requests, workspace creation, and observation and recovery
The other previews were checked at 1,700 ms, 4,500 ms and 8,500 ms in both languages
SVG labels fit inside the scene viewport and the primary header and heading use ialleejy in both languages
The review GIF is captured at 30 frames per second while browser playback uses the native animation timeline
The branded revision also checks WEAVE's folder index and interpretation comparison, MSGCTF's role scenes, and GnawLab's original wordmark and service icons

## Limits

Checks cover local Chromium behavior rather than exhaustive browser or accessibility certification
The hidden-document pause handler is implemented alongside viewport pausing, while automated state checks cover viewport changes, manual controls and motion preferences
Historical external links were preserved without asserting that every third-party destination remains publicly accessible
LinkedIn could not be read without signing in
Production Pages deployment is unchanged by the feature branch
