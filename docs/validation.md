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
- Six additional projects visible in the archive
- Supplementary screenshot disclosures open and close with Enter
- Navigation targets remain below the sticky header
- Keyboard skip link focuses the main content
- With JavaScript disabled, language switching, section navigation and supplementary disclosures still work
- No sentence-ending or decorative periods in either page's text, excluding the email address
- Both pages show the owner's confirmed university graduation status
- Both pages link the DEF CON Demo Labs session and speaker profile
- All 69 unique external and evidence-image destinations from the original two pages preserved in each language
- The two language pages contain identical sets of link destinations
- `git diff --check` passes

Desktop and mobile layouts inspected visually, including the expanded ENKI section
The architecture diagram stacks below the description on narrow screens to keep its labels readable
Mobile paragraph spacing checked after removing sentence-ending periods

## Limits

Checks cover local Chromium behavior rather than exhaustive browser or accessibility certification
Historical external links were preserved without asserting that every third-party destination remains publicly accessible
LinkedIn could not be read without signing in
Production Pages deployment is unchanged by the feature branch
