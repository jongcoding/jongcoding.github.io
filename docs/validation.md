# Validation

28 September 2026 / Local Chromium through Playwright CLI / Python static HTTP server on loopback

## Responsive and functional checks

Both English and Korean pages checked at widths of 320, 390, 768, 1024 and 1440 pixels

- No horizontal page overflow at any of the ten language/viewport combinations
- No broken page images or missing local files
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
- The two language pages contain identical sets of 109 unique link destinations, including navigation, contacts, references and image materials
- INC0GNITO's official repository, qualifier, finals, planning document and challenge authorship links are present in both languages
- `git diff --check` passes

Desktop and mobile layouts inspected visually, including the expanded ENKI section
Project previews stack below the description on narrow screens, with larger diagram labels on mobile
Mobile paragraph spacing checked after removing sentence-ending periods

## Project motion

Four nine-second project previews use local SVG, original research images, CSS and the native Web Animations API

- Automatic playback begins when the preview enters the viewport
- A natural nine-second run completes once and remains stopped
- Manual pause freezes the animation timeline and persists after scrolling away and back
- Scrolling a running preview outside the viewport pauses it, and returning resumes it
- Replay restarts at the beginning with a fresh animation timeline
- A replay defect found during testing was fixed by committing the removed CSS animation before starting it again
- Changing the system reduced-motion preference resets all four previews to static content with no active animations or playback controls
- All research images loaded and decoded successfully
- Playback controls have a 44-pixel minimum height
- With JavaScript disabled, controls remain hidden, research previews display their first frame and content remains usable
- Simulated browser data-saving mode disables autoplay while allowing explicit manual playback

Animation states, image transitions and the mobile diagram were inspected through browser screenshots
The MSGCTF GIF in `docs/preview/` is a capture of the website's vector animation for review, not a runtime dependency

## Limits

Checks cover local Chromium behavior rather than exhaustive browser or accessibility certification
The hidden-document pause handler is implemented alongside viewport pausing, while automated state checks cover viewport changes, manual controls and motion preferences
Historical external links were preserved without asserting that every third-party destination remains publicly accessible
LinkedIn could not be read without signing in
Production Pages deployment is unchanged by the feature branch
