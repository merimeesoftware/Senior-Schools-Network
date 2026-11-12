# TECH_STACK

**As of:** 2026-11-12
**Repo:** merimeesoftware/Senior-Schools-Network
**Evidence:** committed files on `main` for the current stack. The redesign proposal cites issue #57 and is not in the tree yet.

House stack shape is wiki **TECH_STACK.global**. This file is the venture checklist. Layers are `ARCHITECTURE.md`. Cutover ship status is `MISSION.md`.

The **current Next.js stack remains what serves production** until a redesign cutover PR. Workers Builds still publishes `out/` from this Next.js app. The Astro + Svelte section is a proposal, pending Michael's own sign. It does not serve production, and there is no `site/` directory yet.

## Universal target

Cursor + MCP + skills → Cloudflare Workers Builds when practical.

## Current stack

| Layer | Current | Evidence | Alignment |
|-------|---------|----------|-----------|
| Agent surface | Root canon plus Copilot instructions; `/impeccable` skill | `DOC_INDEX.md`, `PURPOSE.md`, `IDENTITY.md`, `ARCHITECTURE.md`, `MISSION.md`, `AGENTS.md`, `.github/copilot-instructions.md`, `.cursor/skills/impeccable/` | partial |
| Source + CI | Next.js 15.5 static export; TypeScript; Tailwind CSS; Jest + React Testing Library; ESLint + Prettier; Bun lockfile and scripts; Cloudflare Workers Builds (`main`: `bun run build` then `npx wrangler deploy`; other branches: `bun run build` then `npx wrangler deploy --dry-run`, no upload). GitHub Actions runs only the read-only stills check | `package.json`, `next.config.js`, `tsconfig.json`, `tailwind.config.ts`, `jest.config.js`, `bun.lock`, `docs/deploy-cloudflare.md`, `.github/workflows/stills.yml`, `docs/visual-check.md` | partial |
| Runtime / deploy | Cloudflare Workers + Static Assets (assets-only, publish `out/`). Workers Builds is the only CI/CD. Netlify config retained until DNS cutover | `wrangler.jsonc`, `public/_headers`, `public/_redirects`, `docs/deploy-cloudflare.md`, `netlify.toml` | partial |
| Data / storage | Static TypeScript modules and JSON in repo; Markdown texts in `public/texts/`; no database or external storage | `lib/content/network.ts`, `lib/content/liturgical-themes.json`, `public/texts/` | aligned |
| Cursor / MCP / skills | unknown | unknown | partial |

## Proposed redesign

Proposed on issue #57. Archie's STACK section in the joint verdict: https://github.com/merimeesoftware/Senior-Schools-Network/issues/57#issuecomment-6825048853

Status: pending. Michael's own comment or decision-log line is still awaited. Record his name on this file only from that source.

Archie's proposal: move the brochure off the Next.js 15 static export onto static Astro with Svelte 5 islands. The Worker name, domain, and URLs stay.

After that sign, build in `site/` while Next keeps serving. One cutover PR then points the same Worker at `site/dist` and removes the Next tree. Undo of that PR is a revert. Until that PR, root `package.json` stays the Next.js app on Bun, with no root `package-lock.json`.

| Piece | Target |
|-------|--------|
| Framework | Static Astro **7.4.11**, `output: 'static'`. Exact patch confirmed on npm on 2026-11-12 with `npm view astro versions`. 7.4.11 is the latest 7.4.x release. |
| Islands | `@astrojs/svelte` and Svelte 5. Zero JS by default. Islands only for the directory filter and the mobile nav. |
| CSS | Tailwind 4 |
| Fonts | Fontsource (self-hosted fonts). No font fetch from a third party. |
| Content schemas | TypeScript types plus Valibot, not Zod |
| Tests | Playwright and axe |
| Packages | npm with `package-lock.json`. Node pinned in `engines` (`>=22.23.4`) |
| Host | The same assets-only Worker `senior-schools-network`. No Worker script, no database, no tracking, no previews. |

`@astrojs/svelte@9.1.5` on npm (2026-11-12) peers `astro` `^7.0.0` and `svelte` `^5.43.6`, and sets `engines.node` to `>=22.23.4`. Astro 7.4.11 is inside that range. The pin is Astro 7.4.11. The integration, Svelte 5, and Tailwind 4 stay on those major lines inside `site/` when that tree is added.

`preview_urls` is false per the no-previews release policy (D-20261111-27). `wrangler.jsonc` already sets it. Branch builds stay `npx wrangler deploy --dry-run` (no upload). Merge to `main` is production.

### Before the first page merges

Archie's condition 1 is still open: Michael's own name on this file for Astro 7 + Svelte 5 + npm. Two further conditions remain before the first redesigned page merges:

2. Nothing is frozen at build time. The liturgical season is a tiny inline script that reads a build-generated table. Sitemap dates come from git.
3. CI gates, each with a deliberately failing case. The gates run locally or in CI, and never against a preview URL. JS ≤ 2 KiB gzip on text pages and ≤ 25 KiB gzip on story pages. Lighthouse mobile ≥ 95. The same 19 URLs. Zero third-party requests.

## Target vs current

- **Alignment:** mismatch
- **Gaps:** No Cursor rules file and no MCP server config in repo. `/impeccable` is installed at `.cursor/skills/impeccable/`. Jest still fails on pre-existing content drift when run locally (`bun run test`). Workers Builds does not run that suite. Live DNS cutover status is `MISSION.md`. The redesign is proposed and not started: no `site/` tree, and the root lockfile is still `bun.lock`. Michael's own sign is still pending.
- **Cutover notes:** Static `out/` is produced by `next.config.js` `output: 'export'`. The host is **Workers + Static Assets**, not Pages and not `@cloudflare/next-on-pages`. Config is in `wrangler.jsonc` (`assets.directory`: `./out`, `not_found_handling`: `404-page`, `preview_urls`: `false`). Canonical origin is `https://seniorschools.org` (`lib/site.ts`). Host 301s cannot live in `_redirects` (domain-level redirects are unsupported); they are Bulk Redirects documented in `docs/deploy-cloudflare.md`. Keep `netlify.toml` until DNS cutover and rollback are done, then delete it. Ship status: `MISSION.md`. Procedure: `docs/deploy-cloudflare.md`. Layers: `ARCHITECTURE.md`. The front-end cutover is a later PR, and only after Michael's own sign: `site/` is built beside Next, then one PR switches `assets.directory` and deletes the Next tree. That PR is the moment the redesign stack would start serving production.

## Notes

- Next.js 15.5.28 with `output: 'export'` and `images.unoptimized: true` (`next.config.js`, `package.json`). Direct `sharp` is 0.35.5. This is the build that serves production until the redesign cutover PR.
- Cloudflare Worker `senior-schools-network`: Workers Builds is the only CI/CD. It runs `bun run build` then `npx wrangler deploy` on `main`, and `bun run build` then `npx wrangler deploy --dry-run` on other branches (no upload, no preview URL). `preview_urls` is false per the no-previews release policy (D-20261111-27). There is no `previews` block. `public/_headers` sends `X-Robots-Tag: noindex` on `*.*.workers.dev`. `netlify.toml` still builds with Bun 1.3.6 and publishes `out/` until post-cutover cleanup. Local `deploy:cloudflare` is optional and does not replace Builds.
- Local checks: Bun 1.3.6, `bun install`, then `bun run lint`, `bun run typecheck`, and `bun run test`. `.github/workflows/stills.yml` runs `bun run test:stills` and `bun run stills` with `contents: read`. It does not deploy and does not use secrets. Workers Builds remains the only deploy. See `docs/visual-check.md`.
- Content is file-backed static data, not a database; analytics/tracking explicitly avoided in agent instructions.
