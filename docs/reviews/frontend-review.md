# Front-End Review & Polish — Senior Schools Network

Automated front-end audit of every page using Lighthouse, plus the safe, high-confidence
fixes applied in this branch. This is a working document; findings not yet fixed are listed
with concrete recommendations.

## Methodology

- **Tool**: Lighthouse 12 (Google Chrome 148, headless), categories: Performance,
  Accessibility, Best Practices, SEO.
- **Target**: the real production artifact — `bun run build` (static export to `out/`) served
  locally with `bunx serve out` — not the dev server. Each route audited individually.
- **Caveat on Performance scores**: these were measured against a plain local static file
  server with no CDN. Performance is therefore *understated* — on Cloudflare/Netlify the CDN
  adds Brotli/gzip, HTTP/2, and long-lived immutable caching for hashed assets, which lifts
  several of the "caching"/"render-blocking" perf audits automatically. Treat the
  Accessibility, Best-Practices, and SEO numbers as authoritative; treat Performance as a
  relative signal (heavy image pages vs. light pages), not an absolute production score.

## Scores (baseline, before fixes)

| Page | Perf | A11y | Best Practices | SEO |
|------|-----:|-----:|---------------:|----:|
| home | 74 | 92 | 100 | 100 |
| philosophy | 75 | 92 | 100 | 100 |
| network-directory | 76 | 92 | 100 | 100 |
| engage | 75 | 93 | **96** | 100 |
| contact | 93 | 92 | 100 | 100 |
| privacy | 93 | 92 | 100 | 100 |

Light, image-sparse pages (contact/privacy) score ~93 on performance; image-heavy pages
(home/philosophy/directory/engage) sit ~74–76, dominated by the hero imagery (see P1 below).

## Fixes applied in this branch (verified)

All four issues below were confirmed fixed by re-running Lighthouse on a fresh production
build (offending-node count dropped to 0 for each audit).

| # | Issue | Audit | Where | Fix | Result |
|---|-------|-------|-------|-----|--------|
| 1 | Gold heading on forest background = 3.66:1 (needs 4.5:1) | `color-contrast` | Footer "Scripture Waypoints" heading (`components/layout/FooterContent.tsx`) | `text-gold` → `text-gold-light` (#E5D4A6 on #3B5A3E ≈ 5.3:1) | home a11y **92 → 100** |
| 2 | Scripture carousel dot buttons are 8×8px (needs ≥24×24px) | `target-size` | `components/content/ScriptureCarousel.tsx` | Dot button is now a 24px-tall, ≥24px-wide hit target wrapping the small visual dot in an inner `<span>` (visual design unchanged) | contributes to home a11y **→ 100** |
| 3 | Filter buttons' `aria-label` ("Filter by nursery stage") did not contain their visible text ("Nursery (0-7)") | `label-content-name-mismatch` (WCAG 2.5.3 Label in Name) | `components/interactive/NetworkFilter.tsx`, `components/interactive/SchoolsFilter.tsx` | Introduced a shared `STAGE_LABELS` map exported from `components/ui/StageBadge.tsx`; `aria-label` now reads `Filter by ${STAGE_LABELS[stage]}` so the accessible name contains the visible label | network-directory a11y **92 → 96** |
| 4 | **React hydration errors #418/#423** logged to console | `errors-in-console` | `components/layout/HeroSection.tsx`, `components/content/QuoteImageBreak.tsx` | Both shuffled their image list inside a `useState(() => …Math.random()…)` initializer, so the server-rendered image differed from the client's first render → hydration mismatch. Now they render the folder's deterministic order for SSR + first paint and shuffle in a post-mount `useEffect` (mirroring the pattern `RotatingQuotes` already uses) | engage best-practices **96 → 100**; hydration errors eliminated site-wide |

Scores after fixes (audited pages): home **74 / 100 / 100 / 100**, network-directory
**~70–76 / 96 / 100 / 100** (perf varies run-to-run on the local server), engage
**75 / 96 / 100 / 100**.

Verification: typecheck and lint pass; the Jest suite shows no new failures (the pre-existing
~13 failing suites are unrelated content-drift, documented in `AGENTS.md`).

## Remaining findings & recommendations (not changed here)

Prioritized. These are recommendations, not yet applied, because they involve larger changes
(asset pipeline, dependency choices) or are best decided alongside the Cloudflare migration
(see `architecture-cloudflare-review.md`).

### P1 — Image delivery dominates performance on hero pages
- `next.config.js` sets `images: { unoptimized: true }` (required for `output: 'export'`), so
  Next.js serves the original files with no responsive `srcset`/format negotiation. Lighthouse
  flags `uses-responsive-images`, `image-delivery-insight`, and LCP on every image-heavy page.
- Options: (a) pre-generate responsive WebP/AVIF sizes at build time (the repo already has
  `scripts/convert-images.ts` using `sharp` — extend it to emit multiple widths + `<source>`
  sets), or (b) after moving to Cloudflare, use **Cloudflare Images / Image Resizing** to do
  format + size negotiation at the edge. Also ensure hero images pass `priority` (they do) and
  that non-hero imagery is lazy-loaded.

### P1 — Accessibility on the directory page not yet 100
- After the label-in-name fix, `network-directory` is at 96. Remaining items are worth a pass:
  audit the filter chips and "Read more" toggles for `target-size`/contrast, and confirm the
  live-region result counts announce correctly. Aim for 100 to match the other pages.

### P2 — Render-blocking Google Fonts
- `Playfair Display`, `Merriweather`, and `Lato` are loaded in a way Lighthouse flags as
  render-blocking. Prefer `next/font` (self-hosting + `font-display: swap` + preload) to remove
  the blocking request and eliminate layout shift, or add `&display=swap` + `preconnect`.

### P2 — Legacy JavaScript / caching
- `legacy-javascript` and `uses-long-cache-ttl` fire partly because of the local test server.
  On Cloudflare, set immutable long-cache headers for `/_next/static/*` and hashed assets via
  `_headers` (covered in the Cloudflare review). Revisit `legacy-javascript` only if it persists
  behind the CDN.

## Artifacts

Full Lighthouse HTML reports (post-fix) and page screenshots were captured during this review
(home, engage, network-directory). See the PR description for embedded evidence.

## Related deliverables

- `docs/reviews/copy-storybrand-rewrite.md` — page-by-page StoryBrand copy rewrite proposals
  (John Senior + owner voice).
- `docs/reviews/architecture-cloudflare-review.md` — architecture critique + Cloudflare
  migration plan.
