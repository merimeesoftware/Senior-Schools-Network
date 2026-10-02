# TECH_STACK

**As of:** 2026-09-26
**Repo:** merimeesoftware/Senior-Schools-Network
**Evidence:** committed files on `main` only. Gaps marked unknown.

House stack shape is wiki **TECH_STACK.global**. This file is the venture checklist. Layers are `ARCHITECTURE.md`. Cutover ship status is `MISSION.md`.

## Universal target

Cursor + MCP + skills → Cloudflare Workers Builds when practical.

## Current stack

| Layer | Current | Evidence | Alignment |
|-------|---------|----------|-----------|
| Agent surface | Root canon plus Copilot instructions; `/impeccable` skill | `DOC_INDEX.md`, `PURPOSE.md`, `IDENTITY.md`, `ARCHITECTURE.md`, `MISSION.md`, `AGENTS.md`, `.github/copilot-instructions.md`, `.cursor/skills/impeccable/` | partial |
| Source + CI | Next.js 14 static export; TypeScript; Tailwind CSS; Jest + React Testing Library; ESLint + Prettier; Bun lockfile and scripts; Cloudflare Workers Builds (`main`: `bun run build` then `npx wrangler deploy`; other branches: `bun run build` then `npx wrangler preview`) | `package.json`, `next.config.js`, `tsconfig.json`, `tailwind.config.ts`, `jest.config.js`, `bun.lock`, `docs/deploy-cloudflare.md` | partial |
| Runtime / deploy | Target: Cloudflare Workers + Static Assets (assets-only, publish `out/`). Workers Builds is the only CI/CD. Netlify config retained until DNS cutover | `wrangler.jsonc`, `public/_headers`, `public/_redirects`, `docs/deploy-cloudflare.md`, `netlify.toml` | partial |
| Data / storage | Static TypeScript modules and JSON in repo; Markdown texts in `public/texts/`; no database or external storage | `lib/content/network.ts`, `lib/content/liturgical-themes.json`, `public/texts/` | aligned |
| Cursor / MCP / skills | unknown | unknown | partial |

## Target vs current

- **Alignment:** mismatch
- **Gaps:** No Cursor rules file and no MCP server config in repo. `/impeccable` is installed at `.cursor/skills/impeccable/`. Jest still fails on pre-existing content drift when run locally (`bun run test`). Workers Builds does not run that suite. Live cutover status is `MISSION.md`.
- **Cutover notes:** Static `out/` is produced by `next.config.js` `output: 'export'`. Target is **Workers + Static Assets**, not Pages and not `@cloudflare/next-on-pages`. Config is in `wrangler.jsonc` (`assets.directory`: `./out`, `not_found_handling`: `404-page`). Canonical origin is `https://seniorschools.org` (`lib/site.ts`). Host 301s cannot live in `_redirects` (domain-level redirects are unsupported); they are Bulk Redirects documented in `docs/deploy-cloudflare.md`. Keep `netlify.toml` until cutover and rollback are done, then delete it. Ship status: `MISSION.md`. Procedure: `docs/deploy-cloudflare.md`. Layers: `ARCHITECTURE.md`.

## Notes

- Next.js 14.2 with `output: 'export'` and `images.unoptimized: true` (`next.config.js`).
- Cloudflare Worker `senior-schools-network`: Workers Builds is the only CI/CD. It runs `bun run build` then `npx wrangler deploy` on `main`, and `bun run build` then `npx wrangler preview` on other branches. `preview_urls: true`. `previews` is an empty object (required by `wrangler preview`; no bindings to isolate). `public/_headers` sends `X-Robots-Tag: noindex` on `*.*.workers.dev`. `netlify.toml` still builds with Bun 1.3.6 and publishes `out/` until post-cutover cleanup. Local `deploy:cloudflare` and `preview:cloudflare` are optional and do not replace Builds.
- Local checks: Bun 1.3.6, `bun install`, then `bun run lint`, `bun run typecheck`, and `bun run test`. There is no GitHub Actions workflow.
- Content is file-backed static data, not a database; analytics/tracking explicitly avoided in agent instructions.
