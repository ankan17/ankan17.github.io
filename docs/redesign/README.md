# Portfolio redesign: work so far

Status as of 14 Nov 2026. The visual direction changed after the first write-up: after a bolder re-roll the choice is **Terminal, dark**, and the site is built in Astro on the `redesign` branch (nothing committed yet). Sections 1 and 2 below still apply. Sections about the "Blue-and-Garnet Standard" direction are superseded by section 0.

Related files:
- [`PRODUCT.md`](../../PRODUCT.md): product brief (audience, positioning, evidence, principles).
- [`chosen-direction-sketch.html`](chosen-direction-sketch.html): sketch of the earlier, now superseded direction.
- `.impeccable/mocks/decision/r7-term-dark.html` (local only): sketch of the chosen Terminal direction.

---

## 0. Current direction and build

**Terminal, dark.** The whole site is one terminal session in FC Barcelona blue and garnet. A title bar with garnet, gold and blue dots; prompt-segment blocks (`ankan` in garnet, the path in blue) before each section; a blinking gold cursor; directory-style project listings; and a status bar at the bottom that is the navigation. Garnet is too dark to read as text on navy, so it only appears as solid blocks with white text. Text stays strictly professional.

Pages: Home, Work, three case studies (Studio, Chatbot, ClothTrends), Experience, Contact, 404. A small command line at the end of each page (type `help`; keys 1 to 4 and `/`) works as a progressive enhancement; everything reads without JavaScript.

Decisions taken during the build:
- No photo. Project "screenshots" are real facts printed as terminal figures (memory budgets, telemetry path, counter flow) until real screenshots exist.
- Chatbot has no repo link, because the repo URL contains the company name. ClothTrends is private: no link, no shop name or location.
- The Résumé button points to Experience until a PDF without phone number and address is published (`resumeUrl` in `src/data/site.ts`).
- The title bar shows the name rather than the domain, so the name is visible on the first screen.
- Self-hosted Atkinson Hyperlegible Mono; no tables; no kicker labels; reduced motion respected.
- `og.png` is authored HTML rendered to PNG by a headless browser (no image generation).

Still owed by Ankan: project screenshots, a phone-free résumé PDF (with GSoC corrected to 2018), ClothTrends sign-off, the debranded Chatbot repo, approval of the case-study text, and the Substack link when it exists. To deploy: set GitHub Pages to "GitHub Actions" and push; `.github/workflows/deploy.yml` builds on pushes to `main`.


---

## 1. Review of the current site

The live site at ankan17.github.io is an Angular 6 + MDBootstrap build, last deployed on 1 Feb 2020. It cannot build on current Node (node-sass 4 against Node 24). It was reviewed with Impeccable's critique, which runs a design review and an automated detector separately.

**Score: 14/28 (50%), "Acceptable"**, at the bottom of the band. Heuristics 7, 9 and 10 were not applicable to a portfolio.

| Priority | Issue |
|---|---|
| P0 | Home address and mobile number are published (`src/app/info-card/info-card.component.ts:17-18`). Ankan chose to remove them with the redesign launch, not via a hotfix. |
| P0 | Stale content: "final-year student", 2018–19 internships, an old email. |
| P1 | The page order suits a student, there is no projects section, and the page stops without a contact close. |
| P1 | A development build is shipped (about 866 KB of gzipped JS). Two full-size portraits load, `index.js` returns 404, and there is no favicon, meta description or OG image. |
| P2 | Accessibility: no h1, no alt text on 5 images, unnamed social links, three contrast failures, no reduced-motion support. |

The visual verdict was that this is a generic 2018 Material résumé template with nothing specific to Ankan. The full snapshot is in `.impeccable/critique/` (local only, gitignored).

## 2. Product decisions (recorded in PRODUCT.md)

- **Audience:** recruiters and hiring managers come first. Success means they email Ankan or open the résumé.
- **Headline:** "Senior full-stack engineer building AI products."
- **Source of truth:** the 2026 résumé. Avoca (Deployed Engineer, Aug 2026 – now); HyperVerge 2021–26 (SDE1 → Engineering Manager); B.Tech NIT Durgapur 2016–20; GATE 2020 AIR 20; GSoC 2018 with UC Santa Cruz (confirmed 2018; the 2026 résumé's "2019" is a typo).
- **Contact:** apoddar1701@gmail.com, LinkedIn, GitHub. Facebook and Twitter/X are dropped.
- **Privacy:** no phone number, address or date of birth anywhere, including the published résumé PDF.
- **Writing:** hosted on Substack, not on this site. The Substack doesn't exist yet, so there is no Writing section until it does. Recent post titles can later be pulled from its feed at build time.
- **Photo:** none on the site.
- **Stack:** Astro, static, deployed to GitHub Pages in this repo. Content lives in Markdown/data files.

## 3. Projects to feature

| Order | Project | Notes |
|---|---|---|
| 1 (main) | **Studio**: Remotion + Electron desktop video editor | Public repo. Trim the README's references to the private plan and the `studio-spike` repo before linking. Present it as in progress (v0.7.0). |
| 2 | **Chatbot**: multi-turn LLM chat with an inference-observability pipeline | Public repo `chatbot-ollive`. It was a take-home assignment. Ankan will remove the "Ollive" branding and reframe it as senior-level work. Don't name the company. |
| 3 | **ClothTrends**: web, backend and Android app | Private for now (`clothtrends-frontend`, `cloth-track-backend`, `clothtrends-android-app`). Ankan is working on making it public. Show no repo links until then, and get the facts from Ankan. |

Not featured: supabase-audit-api/ui and pyzapp. GSoC is linked through the upstream Popper pull requests, not the forks.

**GitHub clean-up recommended to Ankan** (Ankan does this; none of it has been done):
- update the 2018-era bio, company and location
- pin the featured repos and add a profile README
- archive the college/lab repos and stale forks
- add licences and demo screenshots to the featured repos

## 4. Visual direction

### Rounds

1. **Roll 1:** "Edit Decision List" (a film editor's timeline) and "Design Doc" (an engineering RFC). Both rejected.
2. **Roll 2 (bolder, with a football and FC Barcelona steer):**
   - Matchday Broadside, Tile Hall (azulejo), Clear-Line Album, Deep Dive, Event Display, ANSI Night Board.
   - All rejected. The "transfer news" framing was called over-complicated: *"keep it simple stupid."*
3. **Roll 3 (safer: "mainstream enough to be professional, not indistinguishable"):** Annual Report, Gallery Wall, Paperback Series and the category standard. None chosen.
4. **Ankan's ideas:**
   - **Browser Theme**: tabs as pages, a bookmarks bar for the actions, and a theme switcher. Sketched, not chosen.
   - **Blue-and-Garnet Standard**: **chosen.**

### Chosen: Blue-and-Garnet Standard

A conventional, professional portfolio in FC Barcelona's blue and garnet.

- **Palette:**
  - white `#FFFFFF` ground, navy `#0E1A33` text, muted `#56607A`
  - blue `#004D98` for the primary button and links, garnet `#A50044` for accents
  - gold `#EDBB00` as decoration only, never text
- **Football in the visuals only:**
  - a thin blue-and-garnet stripe band that draws in on load
  - stripe marks as section dividers and link underlines
  - a faint garnet "17" (from the `ankan17` handle) behind the hero screenshot
  - no club crest, slogan or trademark
- **Motion:**
  - subtle, staggered fade-up on load and on scroll
  - a slight lift on the screenshot on hover
  - one restrained page transition
  - all of it off under `prefers-reduced-motion`
- **First screen:**
  - stripe band, then name and nav
  - left: headline, a "Now" line (Avoca, HyperVerge, Bangalore), Email and Résumé
  - right: Studio screenshot with the faint 17
  - below: a divider mark and "Selected work", with Studio largest
- **Fonts:** the sketch uses Avenir Next, which is Mac-only. The build needs a self-hosted web font with similar character.

### Copy rules learned along the way

- Text stays strictly professional. Football never appears in the copy or labels. A "Season / Team / Role / Result" table was rejected as gimmicky.
- No tables on the home page. The experience table was removed.
- No claims Ankan hasn't confirmed. "Open to AI product roles" was removed.
- No tiny uppercase labels above headings.

## 5. Site structure (draft brief)

- **Home:** first screen as above, then Selected work, a short experience summary, recent Substack posts (once they exist), and a closing contact block.
- **Case studies:** Studio, Chatbot and ClothTrends, each with the problem, role, key decisions, outcome and links.
- **Experience:** Avoca, HyperVerge roles, education, and the GSoC and GATE achievements.
- **Constraints:**
  - works without JavaScript
  - WCAG 2.2 AA, a single h1 per page, visible focus
  - fast on a phone
  - on phones the screenshot drops below the headline and Email stays on the first screen

## 6. Open items

**From Ankan:**
- [ ] The changes to this brief: "Change something" was selected, but the change hasn't been named yet.
- [ ] Screenshots or recordings of Studio, Chatbot and ClothTrends.
- [ ] A résumé PDF without the phone number, with the GSoC year corrected to 2018.
- [ ] ClothTrends facts (what it is, your role, outcomes) and when it goes public.
- [ ] The debranded Chatbot repo.
- [ ] (Later) the Substack URL.

**Housekeeping:**
- [ ] `.cursor/hooks.json` and `.codex/hooks.json` were added by the Impeccable update. Delete them or ignore them unless Cursor or Codex is used.
- [ ] Commit `PRODUCT.md`, `docs/redesign/`, and `.impeccable/config.json` (which holds one detector ignore, for a retired sketch).

## 7. Next steps

1. Apply Ankan's changes to the brief and confirm it.
2. Write the direction contract (surface brief) and scaffold Astro.
3. Build Home, then the case-study and Experience pages, with marked placeholders for screenshots.
4. Check at desktop and mobile widths, then run Impeccable's finish review and document the design system in DESIGN.md.
5. Deploy to GitHub Pages, replacing the Angular site.
