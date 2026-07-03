# Jamal Rizki — Personal Website

Personal portfolio site for [jrizki.com](https://www.jrizki.com), built as a modern single-page application with **SvelteKit (Svelte 5)** and prerendered to static HTML for GitHub Pages.

## Quick start

```sh
npm install
npm run dev        # dev server with hot reload at localhost:5173
npm run build      # outputs the static site to build/
npm run preview    # serve the production build at localhost:4173
```

## Site layout

The site is a single-page app with five pages. Each page is a folder under `src/routes/`; the shared shell (nav, footer, page transitions, analytics) lives in `src/routes/+layout.svelte` and wraps every page.

| Route | File | What it shows |
|-------|------|---------------|
| `/` | `src/routes/+page.svelte` | Home — animated particle background + logo |
| `/experience` | `src/routes/experience/+page.svelte` | Work history cards, language bubble diagram, skill chips |
| `/projects` | `src/routes/projects/+page.svelte` | Project cards in 4 sections; click opens a video/image lightbox |
| `/education` | `src/routes/education/+page.svelte` | Degrees + certification grid |
| `/contact` | `src/routes/contact/+page.svelte` | Animated SVG + contact form (Formspree) |
| any unknown URL | `src/routes/+error.svelte` | Styled 404 page |

### How the pieces fit together

```
src/
  app.html                 HTML shell — <head>, fonts, favicon, analytics, SEO meta + JSON-LD
  routes/
    +layout.svelte         shared shell: imports all CSS, renders Nav + Footer,
                           handles page transitions, tab-title blink, GA tracking
    +layout.js             enables static prerendering for every route
    +page.svelte           home
    +error.svelte          404
    experience/+page.svelte
    projects/+page.svelte
    education/+page.svelte
    contact/+page.svelte
  lib/
    components/            Nav.svelte, Footer.svelte, Lightbox.svelte
    data/                  page content as plain JS arrays (see below)
    styles/                global CSS + one stylesheet per page
static/
  assets/
    images/               photos, logos, resume PDF (WebP, optimized)
    illustrations/         hero SVGs for experience/projects/education
    js/particles.min.js   home-page particle effect (loaded as a classic script)
  CNAME, robots.txt, sitemap.xml, google*.html   served as-is for deploy/SEO
scripts/optimize-images.js   one-off helper to (re)convert images to WebP
```

### Editing content

All page content is data, not markup — edit these files and the pages update:

- `src/lib/data/experience.js` — `exp` (job cards), `languages` (bubble diagram), `skillGroups` (skill chips)
- `src/lib/data/projects.js` — `projects`, `apps`, `cyber`, `personal` (each item: `title`, `cardImage`, `gifUrl`, optional `liveUrl`)
- `src/lib/data/education.js` — `schools` (degrees), `moocscards` (certifications)
- `src/lib/data/contactPaths.js` — vector points for the contact-page SVG animation (rarely touched)

To add a project, drop its thumbnail in `static/assets/images/project-page/static/` and add an entry to the relevant array. PDFs open in a new tab; videos/GIFs open in the lightbox.

### Styling

- `src/lib/styles/style.css` — global styles (nav, footer, shared elements)
- `src/lib/styles/bootstrap.scss` — a trimmed Bootstrap 4 subset (grid/navbar/cards/utilities), self-hosted instead of a CDN
- `src/lib/styles/animate-subset.css` — the handful of animate.css classes actually used
- `src/lib/styles/hover-min.css` — hover-effect utilities
- `src/lib/styles/pages/*.css` — one stylesheet per page (`home`, `experience`, `projects`, `education`, `contact`, `notfound`)

The per-page stylesheets came from the original multi-page site and define some of the same class names and CSS variables with different values. Because an SPA loads all CSS at once, each page stylesheet is automatically scoped to a `.page-<name>` wrapper class at build time (see `vite.config.js`). The layout adds that wrapper class based on the current route, so styles never clash.

## How rendering & deploy work

- **SPA navigation** — after first load, pages swap instantly client-side with a smooth cross-fade (View Transitions API).
- **Static prerendering** — `+layout.js` sets `prerender = true`, so `npm run build` also writes a real HTML file per route (`index.html`, `experience.html`, …). This keeps SEO, the GitHub Pages + CNAME setup, and any old `.html` links working.
- **`404.html`** is both the styled error page and the SPA fallback for unknown URLs.

### Deploy (GitHub Pages via GitHub Actions)

Deploys are automatic: `.github/workflows/deploy.yml` runs on every push to `main` (and can be triggered manually via the "Run workflow" button in the Actions tab).

1. **`build` job** — `npm ci`, then `npm run build`, then uploads `build/` (which already includes `CNAME`, `robots.txt`, `sitemap.xml`, and the Google verification file) as a Pages artifact.
2. **`deploy` job** — publishes that artifact to GitHub Pages via `actions/deploy-pages`.

Repo settings required (already configured for this repo): **Settings → Pages → Source** must be **"GitHub Actions"**, not "Deploy from a branch" — there's no `index.html` at the repo root for the legacy branch-based deploy to find.

No manual build/publish step is needed; just push to `main`.
