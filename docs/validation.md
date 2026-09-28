# Validation

28 September 2026, local Chromium through Playwright CLI, serving the repository with Python's static HTTP server on loopback.

## Responsive and functional checks

Both English and Korean pages were checked at widths of 320, 390, 768, 1024, and 1440 pixels.

- No horizontal page overflow at any of the ten language/viewport combinations
- No broken page images or failed local asset requests
- No JavaScript exceptions or browser console errors during the checks
- One primary heading per page, unique element IDs, named links, and valid in-page anchor targets
- English/Korean links reach the corresponding language page
- Project disclosures open and close with Enter; all six MSGCTF component links become visible
- Earlier-project disclosure reveals four projects
- Navigation targets remain below the sticky header
- Keyboard skip link focuses the main content
- With JavaScript disabled, language switching, content, and project disclosures still work
- `git diff --check` passes

Desktop, narrow mobile, and tablet layouts were also inspected visually. The architecture diagram stacks below the description on tablets and phones to keep its labels readable.

## Limits

This is a local Chromium check, not a claim of exhaustive browser or accessibility certification. LinkedIn could not be read without signing in. The production Pages deployment has not been changed by the feature branch.
