# ankan17.github.io

Personal site of Ankan Poddar, a senior full-stack engineer who builds AI products.

**Live:** https://ankan17.github.io

Built with [Astro](https://astro.build) as a static site and deployed to GitHub Pages.

## Run locally

Requires Node 22+.

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # serve the built site
```

## Editing content

Content lives in data files, so most updates don't need code changes:

| File | What it holds |
| --- | --- |
| `src/data/site.ts` | Name, headline, intro, links, navigation |
| `src/data/experience.ts` | Roles and timeline |
| `src/data/projects.ts` | Projects shown under `/work/` |

Per-page share images are generated at build time from `src/pages/og/[slug].png.ts`.

## Deploy

Every push to `main` builds and deploys through `.github/workflows/deploy.yml`.

## Design docs

- `PRODUCT.md`: audience, positioning, and goals
- `DESIGN.md`: visual system (terminal theme, colour, type)
