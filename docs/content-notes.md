# Content notes

Updated 28 September 2026

## Sources

- The owner's existing English and Korean portfolio, GitHub profile and project repositories
- [Hacker Tracker / GnawLab at DEF CON 34 Demo Labs](https://info.defcon.org/defcon34/content/66504), including the August 7 and August 8 sessions and named presenters
- [Hacker Tracker / ialleejy speaker profile](https://info.defcon.org/defcon34/people/67239), confirming ENKI affiliation, CODEGATE and HACKTHEON challenge authoring, and web, cloud and AI agent research topics
- [DEF CON CTF Qualifier 2026 scoreboard](https://ctftime.org/event/3205/), listing The Seoul Sauna Shogunate in seventh place with 8,641 points
- The owner's direct confirmation of DEF CON finals participation, Demo Labs presentation and graduation from Myongji University
- [MSG-CTF organization](https://github.com/MSG-CTF), including the public frontend, backend, scheduler, broker, runtime, DevSecOps and monitoring repositories
- [Resource Broker provider inventory](https://github.com/MSG-CTF/resource-broker/blob/41f53e2502dff6e4c315431eec805151fdd89d6e/README.md) and [provider enum](https://github.com/MSG-CTF/resource-broker/blob/41f53e2502dff6e4c315431eec805151fdd89d6e/app/domain/enums.py), confirming AWS, Azure and GCP VM inventory and Kubernetes runtime support
- [Frontend platform contract](https://github.com/MSG-CTF/front-team/blob/main/README.md), [DevSecOps release flow](https://github.com/MSG-CTF/msgctf-devsecops/blob/main/README.md) and [Sentinel responsibilities](https://github.com/MSG-CTF/sentinel/blob/dev/README.md), used for the platform scenes and role descriptions
- The owner's clarification that vendors means cloud providers, rather than event sponsors
- Existing MSGCTF architecture and integration-review records, used to describe the owner's architecture, review and validation work
- Previously published portfolio descriptions of Sealed Board, Phantompass and Observatory, including their event dates and deployment deliverables
- [INC0GNITO official repository](https://github.com/Incognito-CTF/incognito-ctf.github.io), supplied by the owner, with the organizer table and qualifier/finals participation counts
- [INC0GNITO finals challenge authors](https://github.com/Incognito-CTF/incognito-ctf.github.io/blob/main/docs/finals-challenges.md) and the qualifier challenge table, used to identify the owner's five Jeopardy/Web challenges and Live Fire Web contribution
- [GitHub profile README](https://github.com/jongcoding/jongcoding), including the second MSG CTF event, MISC contributions and community tooling
- [TokenCat](https://github.com/jongcoding/TokenCat), for the Windows widget's product description and download link
- [RubiyaLab results](https://ctftime.org/team/303159/), checked against the events named in the owner's previous portfolio
- [Watchdog's current public repository](https://github.com/WATCHDOG-INCOGNITO/watchdog), confirmed from the local repository's origin and GitHub metadata
- [Brand asset sources](../assets/brands/README.md), covering official project and organization avatars, the ENKI wordmark and cloud-provider artwork

The supplied LinkedIn profile remains linked
Its authentication wall prevented direct profile review, so the relevant additions use the public sources above and the owner's corrections

## Editorial decisions

- Lead with the owner's handle ialleejy, current work, contact links, DEF CON finals participation and the Demo Labs presentation
- Keep the full Korean and English names below the primary handle and retain the real-name profile metadata
- Separate the seventh-place qualifier result from finals participation without implying a finals ranking
- Describe ENKI work through web and cloud security research, vulnerability analysis and research environment engineering
- Keep CTF authorship in the named event credits rather than in the profile introduction or the general job summary
- Keep INC0GNITO's February to May 2026 community organizing and authorship separate from the ENKI role that started in March
- Keep community work on GnawLab distinct from employer ownership
- Mark MSGCTF Cloud Platform as a team project in development, with integration and operational validation ongoing
- Describe AWS, Azure and GCP as cloud providers with adapter implementations, without implying sponsorship, a formal partnership or completed production validation across every provider
- Link the adapter implementation from the cloud-provider line, in addition to retaining the seven component repository links
- Treat the MSGCTF image as a simplified responsibility diagram and KOTH as part of the current scope
- Make no unverified production capacity, uptime or completion claims
- Keep the earlier 2025 MSG CTF platform separate from the current cloud platform
- Show Myongji University as graduated without inventing a graduation month or year
- Retain DBREACH's documented start date without assuming a completion date
- Preserve 68 of the original 69 external and evidence-image destinations verbatim and correct Watchdog's unavailable former URL to its verified current public repository
- Keep every GitHub repository, website and documentation link visible by default
- Reserve native disclosures for supplementary screenshots, materials and the complete MSGCTF role descriptions
- Omit sentence-ending periods and decorative dots from both language pages
- Restore the previous portfolio's MJSEC mentoring, seKUrity training, high-school graduation and additional competition participation in concise form
- Show mentoring and study sessions with their original distinction, rather than implying that every topic was a mentoring assignment
- Add only RubiyaLab events listed in the owner's own portfolio, rather than treating every result on the team page as personal participation
- Correct 0xL4ugh CTF v5 from the previous portfolio's third-place claim to fourth place in the current CTFtime results
- Preserve UofTCTF 2026 eighth place and 0xFUN CTF participation
- Expand INC0GNITO to include the finals, two finals Jeopardy challenges and Live Fire Web, alongside the three qualifier Web challenges
- Restore both 2025 MSG CTF events and distinguish the Web and MISC contributions

## Structure

Both language versions share the same sections, project ordering, link destinations and visual design
Content and navigation require no JavaScript, external font service, external image host or third-party widget
An optional local script controls four short project previews with explicit pause/replay controls

All four animations are conceptual illustrations of documented architecture and research scope
They do not claim to be live production telemetry or recordings of an operational system
The existing WEAVE and DBREACH screenshots remain accessible through the supplementary materials links

MSGCTF introduces Frontend, Backend, Scheduler, Runtime, DevSecOps, Resource Broker and Monitoring across four readable scenes
Release preparation shows DevSecOps and Backend, participant requests show Frontend, Backend and Scheduler, execution shows Resource Broker, Scheduler and Runtime, and operations show Runtime, Monitoring and Scheduler
An action heading and a compact interface example lead each scene, with two or three service names as supporting context
The animated examples show validation checks completing before release registration, a participant action followed by access verification and request acceptance, cloud selection followed by a team workspace, and a runtime health event followed by a recovery request
The examples are labelled as design illustrations and do not represent a recorded production interface or live health data
The optional role overview retains the fuller responsibility descriptions and connections, including DevSecOps artifacts consumed by Runtime
These scenes summarize responsibility boundaries rather than enumerating every API call or network dependency
Monitoring is not shown directly creating or deleting workloads, and DevSecOps is not shown directly writing Scheduler or Broker state
KOTH scoring remains in the current project scope and Backend's competition responsibilities
GnawLab's document transfer and permissions panels summarize research scope without adding exploit mechanics or claiming a security fix
WEAVE's five categories and example topics come from the existing taxonomy screenshot, with HTTP Parameter Pollution under syntax parsing and duplicate-key handling
DBREACH's data blocks illustrate compression rather than measured data, a benchmark or a compression ratio
The MSGCTF flow runs for sixteen seconds across release, request, workspace and recovery scenes
Visitors can select any scene to pause there, including static selection when reduced motion is enabled
The other three previews use staged entrances, document transfer, taxonomy expansion, data-block movement and chapter progress on nine-second timelines

Project headings use the original MSGCTF, GnawLab, WEAVE and INC0GNITO marks, with the ENKI WhiteHat wordmark in the employment section
The full-width platform preview places a large action heading beside an interface illustration on desktop, stacking the two on mobile
Official AWS, Azure and Google Cloud artwork appears inside the placement example, with the selected provider leading to creation of an isolated team workspace
The seven component repository links remain visible outside the optional role overview
GnawLab uses AWS S3, Bedrock and Lambda service icons to identify the illustrated knowledge source, agent and action group
WEAVE moves through a folder index, an expanded case sheet and a two-column interpretation comparison
All brand images are local assets, retain their original colors and aspect ratios, and are decoded before their preview begins
Decorative brand images in headings have empty alt text and the complete project or company name remains available as heading text
The SVG previews keep their accessible titles and descriptions in both languages

The original research assets and unrelated repository files are retained
The two portfolio entry pages use a shared stylesheet and local presentation assets
