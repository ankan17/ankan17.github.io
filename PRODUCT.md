# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro, statically generated, deployed to GitHub Pages at https://ankanpoddar.dev (custom domain on the existing `ankan17/ankan17.github.io` repo). Content lives in Markdown/data files so updating a role or project is a content edit, not a code change. The Angular 6 site in `src/` is being replaced entirely; it cannot build on current Node.

## Users

**Primary: recruiters and hiring managers** evaluating Ankan for a senior full-stack / AI-engineering role. They arrive from LinkedIn, a résumé link, or a referral, usually on a laptop between other candidates, sometimes on a phone. Their job: decide within a minute or two whether to reach out, and find the evidence (role, seniority, outcomes, stack) to justify it.

Secondary (confirmed, not designed for first): engineering peers who arrive via GitHub or, later, Substack.

## Product Purpose

A personal site that presents Ankan as of 2026: a senior engineer who builds AI-powered products end to end. Success = a recruiter contacts Ankan (email or LinkedIn) or opens the résumé. It replaces a 2020 site that still describes Ankan as a final-year student.

## Positioning

Senior full-stack engineer working on AI products. What a generic "full-stack dev" page cannot claim:
- Currently a Deployed Engineer at Avoca, building integrations for production AI voice and text agents, and hardening them against race conditions, duplicate execution, partial API failures, and browser-automation failures.
- Five-plus years at HyperVerge (2021–2026), SDE1 to Engineering Manager: scaled a VideoKYC system from 1K to 100K+ users/day, built a 100M+ events/day ETL platform, shipped a 0-to-1 LLM support-automation system (30–40% lower MTTR), led RBI / ISO 27018 security audits, managed a team of 5.
- Combination of production reliability, regulated-industry security work, and applied LLM/agent engineering.

Headline framing (confirmed): **senior full-stack engineer building AI products**. This deliberately casts a wider net than the résumé's "Backend Systems & AI Integrations"; the backend/scale evidence supports it rather than defining it. Exact wording is a copy decision for the build.

## Operating Context

- Visitors usually compare several candidates. Scanning beats reading; the first screen must answer who, what level, what now.
- The site is linked from LinkedIn, GitHub, the résumé, and job applications, so it needs a proper title, meta description, favicon, and link-preview (OG) image.
- The résumé PDF is a primary artifact visitors download. Source: `~/Documents/Resume__Ankan_Poddar__03_10_2026.pdf` (to be copied into the site as the published résumé).

## Direction (decided)

- Visual world: **Terminal, dark**. The whole site is one terminal session in FC Barcelona blue and garnet (prompt-segment blocks, title bar dots, status-bar navigation). Football appears only in colour; all text is strictly professional.
- No photo of Ankan on the site.
- Featured work: Studio (main), AgentReplay (public repo), ClothTrends (private repos; no repo links, no shop name or location until Ankan confirms).
- The résumé button points to the experience page until a PDF without phone and address is published.

## Capabilities and Constraints

- Sections in scope: introduction, experience (with outcomes), selected work, writing (Substack), contact, résumé download.
- **Selected work (confirmed): both.** Work case studies first (3–4 short write-ups drawn from Avoca/HyperVerge, e.g. agent integrations, LLM support automation, 100M+ events/day ETL), then a few public GitHub repos below. Case studies stay within what Ankan can say publicly; drafts need Ankan's sign-off. Which GitHub repos to feature is still open.
- **Writing:** published on Substack, not on this site. The Substack does not exist yet. Until it does, the site shows no writing section or an honest "coming soon" link. Never fake posts. Once it exists, the site may list recent post titles from the Substack feed at build time.
- **Contact:** show apoddar1701@gmail.com, LinkedIn, GitHub. Do not publish a phone number or a home address anywhere on the site or in the public résumé PDF.
- Old social links (Facebook, Twitter/X) are dropped.
- Static, fast, no JS required to read content; works on GitHub Pages.

## Brand Commitments

- Name: Ankan Poddar. Domain: ankanpoddar.dev (DNS on Cloudflare; ankan17.github.io redirects). GitHub handle: ankan17.
- Voice: plain, specific, outcome-led (numbers from the résumé, not adjectives). First person.
- No self-rated skill bars or percentage skills.

## Evidence on Hand

From the 2026 résumé (`~/Documents/Resume__Ankan_Poddar__03_10_2026.pdf`):
- **Avoca**, Deployed Engineer, Aug 2026 – present, remote (New York). Two agent integrations: an API-based home-services integration and a browser automation for restoration workflows; idempotent, recoverable agent workflows.
- **HyperVerge**, Bangalore:
  - Engineering Manager, Apr–Jul 2026. Led a team of 5, halved lead time to production; cloud-agnostic VideoKYC architecture for BYOC deployments.
  - SDE3, Apr 2024 – Mar 2026. LLM support automation with Freshdesk (MTTR −30–40%); alerts as code (noisy alerts 70% → 10%); 10+ security audits incl. RBI, ISO 27018; Step Functions/Lambda/DynamoDB archival pipeline (Redshift CPU 90%+ → 50–60%).
  - SDE2, Jan 2022 – Mar 2024. 1K → 100K+ users/day via WebSockets; VideoKYC platform migration to SDK-based integration; RudderStack event architecture; in-house ETL at 100M+ events/day.
  - SDE1, Jan–Dec 2021. Conversion <70% → 90%+; infra cost −50%+.
- **Education:** B.Tech CSE, NIT Durgapur, 2016–2020, CGPA 9.3.
- **Achievements:** GATE CSE 2020 AIR 20; Google Summer of Code student developer with UC Santa Cruz (CROSS / Popper CLI), **May–Aug 2018** (confirmed; the 2026 résumé's "2019" is a typo to fix in the résumé).
- **Skills:** TypeScript, JavaScript, Python, SQL; Node.js (Express, NestJS), WebSockets, event-driven systems; PostgreSQL, MongoDB, Redis, Elasticsearch, DynamoDB; AWS; React, Next.js; OpenAI APIs, voice AI, tool calling, agentic workflows, LLM evaluation.

Absent, and must not be fabricated: a chosen list of GitHub repos to feature, approved case-study text, testimonials, client logos, written posts, a current photo (the old 2018-era photos are not to be reused without confirmation). Work at Avoca/HyperVerge may be confidential beyond what the résumé states; do not add detail beyond it without Ankan's confirmation.

## Product Principles

1. **Current truth first.** Every visitor should know role, level, and what Ankan is building now from the first screen. Nothing stale ships.
2. **Outcomes over adjectives.** Lead with measurable results and the systems behind them; let the numbers carry the credibility.
3. **Privacy by default.** Professional contact channels only; no phone, address, or date of birth.
4. **Low-maintenance by design.** Updating a role, project, or résumé is a one-file edit; writing lives on Substack.
5. **Fast and readable everywhere.** Static HTML, real headings, works without JavaScript and on a slow phone connection.

## Accessibility & Inclusion

WCAG 2.2 AA: semantic headings with a single h1, alt text, AA contrast, keyboard-visible focus, respects `prefers-reduced-motion`.
