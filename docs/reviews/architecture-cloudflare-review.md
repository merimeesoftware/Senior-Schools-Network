# Senior Schools Network — Architecture & Cloudflare Migration Review

**Reviewer role:** Principal software architect (structural review)
**Scope:** Candid architecture/config critique + concrete Cloudflare migration plan
**Repo:** `senior-schools-network` (Next.js 14 App Router, `output: 'export'`, Bun, Jest + RTL, Netlify static hosting)
**Method:** Direct reading of committed files (cited inline). Build, test, and export were run locally to gather runtime evidence.

> This is an analysis-only deliverable. No application code, config, or build files were changed.

---

## 1. Executive summary

The codebase is a well-organized static marketing site with a genuinely nice content/asset architecture for its size. The framework choice (`next export` → plain static HTML in `out/`) is sound and makes the Cloudflare migration **low-risk and mechanical**. The real problems are not in the app — they are in the **CI pipeline (which cannot pass as written)** and in the **test suite (which is red on `main`)**. Both give a false signal of quality and must be addressed regardless of hosting.

Two facts dominate the migration analysis and are worth stating up front:

1. **The site has no server-side or dynamic behavior at all.** There are no forms, no API calls, no `mailto:`, no Netlify Forms/Functions/Edge/redirects. Contact is a `tel:` link (`app/(site)/contact/page.tsx:37`) and "Submit a School" / "Contact Us" are plain anchor links (`app/(site)/engage/page.tsx:103`, `:221`). This removes the single hardest part of most Netlify→Cloudflare migrations.
2. **`netlify.toml` contains only headers** (security + cache) and **zero redirects/forms/plugins** (`netlify.toml:16-35`). The entire Netlify-specific surface reduces to a handful of HTTP headers that map 1:1 onto a Cloudflare `_headers` file.

### Prioritized findings

| ID | Severity | Finding | Impact | Recommended fix |
|----|----------|---------|--------|-----------------|
| **P0-1** | P0 | CI installs with `npm ci` + `cache: npm` but there is **no `package-lock.json`** (only `bun.lock`) | `quality` job fails at the install step on every push/PR → lint/typecheck/test/build never run in CI | Switch CI to Bun (`oven-sh/setup-bun` + `bun install --frozen-lockfile`), OR commit a `package-lock.json`. Bun path recommended (matches local + Netlify). See §4.1 |
| **P0-2** | P0 | `docs-check` CI job `test -f`'s **10 files that do not exist** in the repo | `docs-check` job fails at the first assertion on every run | Rewrite the job to assert only files that exist, or create the referenced docs. See §4.2 |
| **P0-3** | P0 | Test suite is **red on `main`**: 13 of 28 suites fail (76 of 510 tests) | "All tests pass" is not true; CI (once install is fixed) would still be red; regressions are undetectable | Split into (a) fix structurally-broken `jest.mock` paths, (b) refresh/remove brittle snapshot + exact-copy assertions. See §5.2 |
| **P1-1** | P1 | Deploy target (Netlify) diverges from the stated org target (Cloudflare) and from docs | `TECH_STACK.md` marks runtime/deploy as **"mismatch"**; README still says Netlify | Execute the Cloudflare migration in §6 |
| **P1-2** | P1 | Netlify cache headers target `/*.js`, `/*.css` (`netlify.toml:22-30`) but hashed assets live under `/_next/static/**` | Works today via Netlify splat matching, but is imprecise; easy to translate incorrectly | Use precise `/_next/static/*` immutable rule in Cloudflare `_headers`. See §6.4 |
| **P1-3** | P1 | Tests couple to exact marketing copy and DOM snapshots | Every copy edit (the site's primary activity) breaks unit tests → drift, then tests get ignored | Adopt behavior/role-based testing + a thin E2E smoke layer; stop snapshotting marketing copy. See §5.2 |
| **P2-1** | P2 | `returntocorp/semgrep-action@v1` is the deprecated action name (`ci.yml:59`) | Will eventually stop receiving updates / may warn | Move to `semgrep/semgrep` action or `semgrep ci`. See §4.3 |
| **P2-2** | P2 | README claims "366 tests" (`README.md:29`); actual is 510 across 28 suites | Minor doc drift; erodes trust in docs | Update or remove the hard-coded count |
| **P2-3** | P2 | `images.unoptimized: true` (`next.config.js:5`) ships full-size WebP; `next/image` gives no runtime optimization in export | Larger payloads than necessary on image-heavy pages (philosophy is 133 kB HTML) | Optional: Cloudflare Images / Image Resizing later, or pre-size variants. Not required for parity. See §5.3 |

**One-line Cloudflare recommendation:** Host the existing `out/` static export on **Cloudflare Pages** via Git integration (build `bun run build`, output `out`) — the site is a pure static export with no server needs, so `@cloudflare/next-on-pages` is unnecessary and would add risk; Workers Static Assets is a valid forward-looking alternative if dynamic features are ever added (§6.1).

---

## 2. Current architecture overview

### 2.1 Framework & rendering model

- **Next.js 14.2 App Router**, configured for a **fully static export**: `output: 'export'` with `images.unoptimized: true` (`next.config.js:1-9`). `bun run build` emits static HTML/CSS/JS into `out/` — verified locally: `out/` contains `index.html`, one HTML file per route, `404.html`, `_next/static/**`, `sitemap.xml`, `robots.txt`, and copied `public/` assets.
- **Routing:** a single route group `app/(site)/` holds the marketing pages (`page.tsx`, `philosophy/`, `network-directory/`, `engage/`, `contact/`, `privacy/`) plus a dynamic `texts/[slug]/page.tsx`. Root `app/layout.tsx` owns global metadata + fonts; `app/(site)/layout.tsx` owns `Navigation` + `Footer`.
- **SEO surfaces are code-generated:** `app/sitemap.ts` (enumerates static routes + dynamic text slugs) and `app/robots.ts`. Both are prerendered into `out/sitemap.xml` and `out/robots.txt` at build.
- **Fonts** are pulled at build time via `next/font/google` (`EB_Garamond`, `IM_Fell_English`, `Petit_Formal_Script` — `app/layout.tsx:2`), self-hosted into the export. This means the build step needs outbound network access (true on Netlify and Cloudflare build images).

### 2.2 Data / content flow

```
public/texts/*.md ──(fs.readFile + gray-matter)──► lib/content/*.ts ──► Server Components ──► static HTML in out/
public/images/**  ──(manifest)──► lib/assets.ts ──► components/media/OptimizedImage ──► <img> (unoptimized)
lib/content/network.ts (typed TS array) ──► components/interactive/SchoolsFilter (client) ──► filtered DOM
```

- **Markdown is parsed at build time**, not the client: `lib/content/index.ts` and `lib/content/teasers.ts` use `fs/promises` + `gray-matter` (`teasers.ts:5-7`, `index.ts:6-8`), with an in-module `Map` cache (`index.ts:27`). Dynamic text pages use `generateStaticParams()` over `getAllTextSlugs()` (`app/(site)/texts/[slug]/page.tsx:22-28`), so every `.md` in `public/texts/` becomes a prerendered page. This is the correct pattern for static export.
- **Structured content is typed and centralized:** `lib/types/content.ts` defines `Stage`, `ContentCategory`, `Quote`, `Excerpt`, etc.; `lib/content/network.ts` is a strongly-typed `NetworkMember[]`. Content is **decoupled from components at the data layer** (good), though page components still embed a lot of literal marketing copy inline (e.g. the essential-texts array and body copy in `app/(site)/engage/page.tsx:37-79`).
- **Image system:** `lib/assets.ts` is a hand-maintained manifest (`ImageAsset[]` with alt text, dimensions, focal points, tags, stage/category) plus retrieval helpers (`getAssetById`, `getRandomAssetFromFolder`, focal-point→`object-position`). `components/media/OptimizedImage.tsx` wraps `next/image` and resolves assets from the manifest. `scripts/convert-images.ts` (Bun + `sharp`) is a **build-tooling/offline** converter to WebP — it is not part of the request path and is irrelevant to hosting.

### 2.3 Client-side interactivity

Interactivity is isolated in `'use client'` components and is entirely client-local (no network): stage filters (`components/interactive/SchoolsFilter.tsx:1`, `NetworkFilter.tsx`), tabs/stages (`SubsectionTabs`, `InteractiveStages`), accordions (`CounterargumentAccordion`, Radix `@radix-ui/react-accordion`), a scroll `ProgressIndicator` and `FadeIn` using `IntersectionObserver`, and rotating/parallax quote blocks (`RotatingQuotes`, `QuoteImageBreak`, `ScriptureCarousel`). All of this runs in the browser against already-shipped static data, which is exactly why the static export model fits.

### 2.4 Overall structure assessment

Separation of concerns is good for the project's size: `app/` (routes) / `components/` (grouped by `layout`/`content`/`interactive`/`media`/`philosophy`/`ui` with co-located `__tests__`) / `lib/` (`content`, `types`, `utils`, `assets`). The content layer is typed and build-time. The main structural weakness is **copy living inline in components/pages**, which is the root cause of the brittle-test problem in §5.2.

---

## 3. Deploy configuration: exactly what Netlify does today

`netlify.toml` is small and contains **no dynamic behavior** — this is the key migration input.

| Netlify feature | Present? | Detail (file:line) |
|-----------------|----------|--------------------|
| Build command | Yes | `bun install && bun run build` (`netlify.toml:5`) |
| Publish dir | Yes | `out` (`netlify.toml:6`) |
| Bun version pin | Yes | `BUN_VERSION = "1.3.6"` (`netlify.toml:9`) |
| Security headers | Yes | `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff` on `/*` (`netlify.toml:16-20`) |
| Cache headers | Yes | `immutable` 1-year on `/*.js`, `/*.css`, `/images/*` (`netlify.toml:22-35`) |
| Redirects | **No** | none in file; no `_redirects` in repo |
| Netlify Forms | **No** | no `data-netlify`, no `<form>` anywhere (grep across `**/*.{ts,tsx}`: 0 matches) |
| Netlify Functions / Edge | **No** | none |
| Netlify plugins | **No** | comment explicitly notes "No Next.js plugin needed" (`netlify.toml:2`) |
| Env vars / secrets | **No** | only `process.env.NODE_ENV` used, at build time (`lib/assets.ts:742`, `components/media/OptimizedImage.tsx:118`) |

**Conclusion:** The Netlify-specific surface that must be reproduced on Cloudflare is **five HTTP headers**. Everything else is generic static hosting. 404 handling already works via the generated `out/404.html`.

---

## 4. Config & build critique

### 4.1 P0 — CI cannot install dependencies (npm/Bun mismatch)

`.github/workflows/ci.yml:18-25`:

```yaml
- uses: actions/setup-node@v4
  with:
    node-version: '22'
    cache: 'npm'
- run: npm ci
```

`npm ci` **requires** a `package-lock.json`; the repo has only `bun.lock` (confirmed: `ls package-lock.json` → not found). `npm ci` exits non-zero ("can only install with an existing package-lock.json"), and `cache: 'npm'` also has no lockfile to hash. **The entire `quality` job fails before lint/typecheck/test/build ever run.** `TECH_STACK.md:24` already flags this as a known gap.

**Recommended fix (Bun path — matches local + Netlify + `bunfig.toml`):**

```yaml
jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: oven-sh/setup-bun@v2
        with:
          bun-version: 1.3.6        # match netlify.toml BUN_VERSION
      - run: bun install --frozen-lockfile
      - run: bun run lint
      - run: bun run typecheck
      - run: bun run test -- --ci --coverage --maxWorkers=2
      - run: bun run build
```

Alternative (keep npm): run `npm install` once and **commit `package-lock.json`**, then `npm ci` works. This is worse here because it introduces a second lockfile to keep in sync with `bun.lock` and diverges from the Netlify/Cloudflare Bun build. Prefer the Bun path.

### 4.2 P0 — `docs-check` job asserts files that don't exist

`.github/workflows/ci.yml:80-98` runs `test -f` on 11 paths and greps 3. Verified against the repo:

| Asserted path | Exists? |
|---------------|---------|
| `README.md` | ✅ |
| `.github/current-phase.md` | ❌ |
| `.github/technical.md` | ❌ (actual file is `.github/docs/technical.md`) |
| `.github/roadmap.md` | ❌ |
| `.github/instructions/instructions.md` | ❌ |
| `docs/site-blueprint.md` | ❌ |
| `docs/assets-inventory.md` | ❌ |
| `docs/component-inventory.md` | ❌ |
| `PROJECT_NOTES.md` | ❌ |
| `.github/prompts/phase-2/01-environment-setup.md` | ❌ |
| `.github/prompts/phase-2/06-quality-ci-and-readiness.md` | ❌ |

Ten of eleven are missing, so the job fails at the first line (`test -f .github/current-phase.md`). The follow-up "content presence" step (`ci.yml:94-98`) also greps `.github/current-phase.md` and `PROJECT_NOTES.md`, which don't exist. The actual docs live under `.github/docs/` (`technical.md`, `north-star.md`, `design-system.md`, `next-steps.md`, `image-system.md`, `assets.md`) plus `.github/copilot-instructions.md`.

**Recommended fix:** make the job assert reality. Either delete the job (it protects docs that were never created) or replace it with invariants that exist:

```yaml
docs-check:
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v4
    - name: Verify core docs exist
      run: |
        test -f README.md
        test -f TECH_STACK.md
        test -f .github/copilot-instructions.md
        for f in technical north-star design-system next-steps; do
          test -f ".github/docs/$f.md"
        done
    - name: Verify content presence
      run: |
        grep -qi "Senior" README.md
        grep -qi "Next.js" TECH_STACK.md
```

This is the pragmatic, "keep it simple" fix. Creating 10 placeholder docs just to satisfy a stale grep would be cargo-culting.

### 4.3 P2 — Security scan action name is deprecated

`ci.yml:59` uses `returntocorp/semgrep-action@v1`. Semgrep renamed the org; prefer `semgrep/semgrep` (run `semgrep ci`) or pin the maintained action. Low urgency — the job still runs today — but worth updating when touching CI.

### 4.4 Other build/config notes (informational, not defects)

- **`tsconfig.json`** is strict (`strict: true`, `noEmit`, `moduleResolution: bundler`, `@/*` path alias) — good. `typecheck` passes.
- **`jest.config.js`** uses `ts-jest` + `jsdom`, maps `@/` to root, and `transformIgnorePatterns` allows ESM `gray-matter`/`remark-gfm` through transform (`jest.config.js:27-29`) — correct for the ESM content deps.
- **`.eslintrc.json`** extends `next/core-web-vitals`, `next/typescript`, and `jsx-a11y/recommended` — a good baseline for a marketing site; `react/no-unescaped-entities` is disabled (reasonable given the prose-heavy JSX).
- **`.eslintignore` / `.prettierrc`** are unremarkable and consistent.
- **Bun is the source of truth** (`bunfig.toml` sets exact installs + lockfile save). This is coherent everywhere **except CI** (§4.1).

---

## 5. Structural recommendations (respecting the "keep it simple / static" ethos)

### 5.1 Content layer — mostly good, one refinement

**Keep:** build-time markdown parsing with `gray-matter`, typed content in `lib/types/content.ts`, the memoization cache in `lib/content/index.ts`, and `generateStaticParams()` for `texts/[slug]`. This is the right static-first design.

**Refine (low-risk, incremental):** pull the large blocks of inline marketing copy out of page components into the content layer (co-located `.ts`/`.md`/`.json` next to `lib/content/`), the way `network.ts` already does for schools. Example targets: the essential-texts array and body prose in `app/(site)/engage/page.tsx:37-79`, and the philosophy subsection copy. Benefits: editors change copy without touching JSX, and unit tests stop breaking on copy edits (§5.2). This is the single highest-leverage structural change and it directly enables a saner test strategy.

### 5.2 P0/P1 — Testing health & strategy

**Current state (measured locally):** `Test Suites: 13 failed, 15 passed, 28 total; Tests: 76 failed, 434 passed, 510 total; Snapshots: 11 failed`. There are **three distinct failure modes**, and they need different fixes:

1. **Structurally broken tests (not copy drift) — fix first.** Some suites fail to *run* because `jest.mock` targets moved files:
   - `components/philosophy/__tests__/CrisisSubsectionB.test.tsx:6` mocks `@/components/ProblemSolutionPanel`, but the component lives at `@/components/content/ProblemSolutionPanel`.
   - `components/__tests__/content/QuoteImageBreak.test.tsx:26` mocks `../RotatingQuotes` relative to `components/__tests__/content/`, resolving to a non-existent path (the component is at `components/content/RotatingQuotes`).
   These are wrong import paths from a components reorg, not stale copy. They should be corrected (or the mocks removed) regardless of any copy decisions.

2. **Snapshot drift (11 snapshots, e.g. `CardGrid` variants).** Snapshots of rendered marketing components are guaranteed to churn on every design/copy tweak and provide little regression value for a content site.

3. **Exact-copy assertions** like `getByText(/Only after the gymnasium lays the foundation/i)` (`InteractiveStages.crisis.test.tsx:55`) that assert prose the component no longer renders.

**Recommended strategy for a content-heavy marketing site:**

- **Delete snapshot tests of presentational marketing components** (or scope snapshots to truly stable primitives like `CTAButton`, `StageBadge`). Snapshots on copy-bearing components are net-negative here.
- **Test behavior, not prose.** For interactive components, assert *behavior*: e.g. `SchoolsFilter` reduces the visible list when a stage is toggled and clears on "Clear Filters" (`components/interactive/SchoolsFilter.tsx:32-45`); accordions open/close; tabs switch. Query by role/label (`getByRole('button', { name: /nursery/i })`), not by literal sentences.
- **Assert structure/contract, not exact text.** Where copy must be checked, assert presence of a landmark/role/heading level or a stable `data-testid`, or assert against the **content module** (once copy moves per §5.1) rather than the rendered sentence.
- **Add a thin E2E smoke layer.** A handful of Playwright tests (Playwright MCP is already available in this environment; `@radix-ui` interactions and `IntersectionObserver` are better exercised in a real browser) that load each route from the built `out/`, check `200`/heading, toggle one filter, and open one accordion. This catches real breakage without coupling to copy.
- **Make CI enforce green.** Once §4.1 is fixed, the suite must be green or CI is meaningless. Fixing mode (1) and pruning modes (2)/(3) gets there quickly.

### 5.3 Image handling (P2, optional)

With `images.unoptimized: true`, `next/image` performs **no** resizing/format negotiation in the export — it ships whatever WebP is in `public/images/**` at full size (`OptimizedImage.tsx` still benefits from `width`/`height` for layout stability and `loading`/`priority`). This is fine for correctness and parity. If payload becomes a concern later (the philosophy page HTML is ~133 kB and image-heavy), options that fit Cloudflare: **Cloudflare Images / Image Resizing** at the edge, or pre-generating sized variants in `scripts/convert-images.ts`. Not required for the migration.

---

## 6. Cloudflare migration plan

### 6.1 Target recommendation: Cloudflare Pages (static), not next-on-pages, not Workers-first

Because the app is a **pure static export** (`output: 'export'` → `out/` is plain HTML/CSS/JS with no server runtime), the simplest correct path is to host `out/` as static assets.

- **Recommended: Cloudflare Pages with Git integration.** Point Pages at the repo, set build `bun run build`, output `out`. You get automatic production + preview deployments, custom domains, and `_headers`/`_redirects` support with essentially zero new code. **Do not use `@cloudflare/next-on-pages`** — that adapter exists to run Next's *server/SSR/ISR/Route Handlers* on Workers. This app has none of that; next-on-pages would add a build adapter, a Workers runtime, and failure surface for zero benefit.
- **Valid alternative: Cloudflare Workers Static Assets.** Cloudflare's strategic direction is Workers (with a static `assets` binding). It hosts the same `out/` and is the right choice **if/when** the site later needs dynamic logic (a form handler, Turnstile verification, an API). A `wrangler.jsonc` example is included in §6.3 so the team can choose it deliberately. For a no-JS-runtime marketing site today, Pages is lower-friction (Git-native previews out of the box); either is correct.

**Bottom line:** Pages now (least risk, least new config); Workers Static Assets is the escape hatch the day dynamic behavior is needed.

### 6.2 Cloudflare Pages — concrete settings

Dashboard → Workers & Pages → Create → Pages → Connect to Git:

| Setting | Value |
|---------|-------|
| Production branch | `main` |
| Framework preset | None / "Next.js (Static HTML Export)" if offered |
| Build command | `bun run build` |
| Build output directory | `out` |
| Root directory | `/` |
| Environment variables | none required (confirmed §3) |

**Bun on the Pages build image:** Cloudflare's build system detects Bun from `bun.lock` / `bunfig.toml` and will `bun install` automatically; `bun run build` then runs the same `next build` used locally. If you want to pin versions explicitly, set a build environment variable (e.g. a `.node-version` / `NODE_VERSION`) — but the default detection matches the current Netlify flow (`bun install && bun run build`). The build needs outbound network access for `next/font/google` (available on the build image).

### 6.3 Alternative — Workers Static Assets (`wrangler.jsonc`)

If choosing Workers instead of Pages, add a `wrangler.jsonc` and deploy the prebuilt `out/`:

```jsonc
{
  "name": "senior-schools-network",
  "compatibility_date": "2025-09-01",
  "assets": {
    "directory": "./out",
    // Serve the static export's 404 page for unknown paths:
    "not_found_handling": "404-page"
  }
  // No "main" worker script needed — this is assets-only hosting.
}
```

Build + deploy: `bun run build && bunx wrangler deploy`. Headers/redirects: place `_headers`/`_redirects` in `out/` (i.e. keep them in `public/` so the export copies them — see §6.4). Note: on Pages, `404.html` is served for unknown routes automatically; on Workers you must set `not_found_handling: "404-page"` as above to get the same behavior from the generated `out/404.html`.

### 6.4 Translating `netlify.toml` → Cloudflare `_headers` / `_redirects`

Create these under **`public/`** so the static export copies them verbatim into `out/` (Next copies `public/*` to the export root). Both Pages and Workers Static Assets honor `_headers`/`_redirects` at the output root.

**`public/_headers`** (translates `netlify.toml:16-35`; note the precise `/_next/static/*` rule — see P1-2):

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff

/_next/static/*
  Cache-Control: public, max-age=31536000, immutable

/images/*
  Cache-Control: public, max-age=31536000, immutable

/assets/*
  Cache-Control: public, max-age=31536000, immutable
```

Rationale: the security headers are a direct copy. The Netlify `for = "/*.js"` / `"/*.css"` rules rely on splat matching that happens to also cover `/_next/static/**`; on Cloudflare the correct, precise target for Next's fingerprinted bundles is `/_next/static/*` (safe to cache forever because filenames are content-hashed). `/images/*` mirrors the Netlify rule; `/assets/*` is added because logos/favicons also live there (`lib/assets.ts:586-601`) and are equally immutable. If you want to preserve the exact original semantics as well, you can additionally add `/*.js` and `/*.css` blocks, but `/_next/static/*` is the meaningful one.

**`public/_redirects`** — **not needed.** `netlify.toml` defines no redirects, and each route is emitted as its own HTML file, so no SPA fallback is required. Create the file only if/when a redirect is actually introduced. Example format for future use:

```
# from            to             status
/old-path         /new-path      301
```

**404 handling:** the export already produces `out/404.html`. Cloudflare Pages serves it automatically for unknown paths; Workers Static Assets needs `not_found_handling: "404-page"` (§6.3).

### 6.5 Forms replacement

**None required.** Per §3 there are no forms (Netlify Forms are not used; contact is a `tel:` link and CTAs are anchors). The migration does **not** need a form backend. Documented here only so it is an explicit, verified decision rather than an oversight.

*Forward-looking (only if a real submission form is ever added):* the Cloudflare-native pattern is a small **Pages Function** or **Worker** endpoint that posts to a transactional email API (e.g. MailChannels/Resend/Postmark) or a third-party form endpoint (Formspree/Basin), fronted by **Cloudflare Turnstile** for spam. That would be the point at which **Workers Static Assets** (§6.1) becomes the better host. Do not build this now — it contradicts the project's simplicity ethos and there is no requirement for it.

### 6.6 CI/CD on Cloudflare

Two viable models; pick one:

1. **Cloudflare Git integration (simplest).** Cloudflare builds on push to `main` (production) and on PRs (preview). Keep the GitHub Actions `quality`/`security` jobs (once fixed per §4) as required status checks. This mirrors the current Netlify auto-deploy model with the least moving parts.
2. **Deploy from GitHub Actions with Wrangler** (more control, keeps deploy logic in-repo):

```yaml
deploy:
  needs: quality
  if: github.ref == 'refs/heads/main'
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v4
    - uses: oven-sh/setup-bun@v2
      with: { bun-version: 1.3.6 }
    - run: bun install --frozen-lockfile
    - run: bun run build
    - uses: cloudflare/wrangler-action@v3
      with:
        apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
        accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
        command: pages deploy out --project-name=senior-schools-network
```

This introduces the project's **first secrets** (`CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`) — scope the token to Pages:Edit only. **Preview deployments:** both models provide per-PR preview URLs (Git integration automatically; Actions via `wrangler pages deploy` on `pull_request`). **Environment variables/secrets for the app:** none today (§3), so nothing to migrate.

### 6.7 DNS cutover & rollback

1. Create the Pages project and verify the `*.pages.dev` preview renders all routes (home, philosophy, network-directory, engage, contact, privacy, a `texts/[slug]` page, and a 404).
2. Add the custom domain `seniorschoolsnetwork.com` in Pages (Cloudflare provisions the TLS cert). If DNS is not already on Cloudflare, move the zone or add the required CNAME/records per Pages' instructions.
3. Lower the DNS TTL beforehand to shorten the cutover window; keep Netlify live until Cloudflare serves the apex + `www` correctly.
4. **Rollback:** because Netlify remains deployed and DNS is the only switch, rollback is "point DNS back to Netlify." Keep `netlify.toml` in the repo until the Cloudflare deploy is proven in production, then remove it and update `README.md`/`TECH_STACK.md` deploy references in the same PR (as `TECH_STACK.md:25` already anticipates).

> Note the domain discrepancy to resolve during cutover: `README.md:5` and `netlify.toml` context use **seniorschoolsnetwork.com**, while metadata/sitemap/canonicals use **seniorschoolsnetwork.org** (`app/layout.tsx:30,52`, `app/sitemap.ts:6`, `app/robots.ts:4`, `app/(site)/engage/page.tsx:21`). Confirm the canonical domain and make DNS + `metadataBase` agree; this is independent of Netlify vs Cloudflare but should be settled at cutover.

### 6.8 Migration effort & risk by subsystem (no calendar estimates)

| Change | Files touched | Risk |
|--------|---------------|------|
| Add Pages project + Git integration | none in-repo (dashboard) | Low |
| Add `public/_headers` (+ optional `_redirects`) | new files under `public/` | Low |
| Fix CI install (Bun) | `.github/workflows/ci.yml` | Low, but gates everything |
| Fix/prune `docs-check` | `.github/workflows/ci.yml` | Low |
| Fix red tests | test files under `components/**/__tests__` (+ optional content extraction) | Medium (touches many test files; some are structural path fixes, most are pruning brittle assertions) |
| DNS cutover + remove `netlify.toml` | DNS; `netlify.toml`, `README.md`, `TECH_STACK.md` | Low (reversible via DNS) |
| Optional Workers Static Assets instead of Pages | new `wrangler.jsonc` | Low–Medium (new runtime concept) |

---

## 7. Risks & open questions

1. **Canonical domain (.com vs .org).** Metadata/sitemap use `.org`; README/live-site use `.com` (§6.7). Which is authoritative? This affects DNS, `metadataBase`, canonicals, and OG URLs, and should be fixed at cutover.
2. **Bun version on the Cloudflare build image.** Netlify pins `BUN_VERSION=1.3.6` (`netlify.toml:9`). Confirm the Pages build detects Bun and, if a specific version is required for reproducibility, pin it via a build env var. Low risk (build is deterministic from `bun.lock`), but verify the first production build matches local output.
3. **Green-before-migrate ordering.** The CI and test failures (P0-1/2/3) are independent of hosting but should be fixed **first** so the migration lands on a trustworthy pipeline; otherwise "it deployed" masks a red suite.
4. **Future dynamic needs.** If a real "Submit a School" form or newsletter is added, revisit the Pages-vs-Workers decision (§6.5) — that is the trigger to adopt Workers Static Assets + a Function/Turnstile, and it is the only realistic path to needing more than static hosting.
5. **Image weight.** Not a blocker, but if Core Web Vitals on image-heavy pages matter, Cloudflare Image Resizing/Images is the natural edge upgrade (§5.3) — deliberately out of scope for the parity migration.
6. **`docs-check` intent.** The job references a "Phase 2" doc set that doesn't exist. Open question: were those docs meant to be created (then create them), or is the job vestigial (then delete/trim it, §4.2)? The answer determines whether the fix is "write docs" or "fix the check."

---

*Prepared from a direct reading of the repository at review time; all findings cite the specific files/lines above. Build, static export, and the Jest suite were executed locally to confirm the runtime behavior described (successful `out/` export incl. `404.html`; 13/28 suites failing).*
