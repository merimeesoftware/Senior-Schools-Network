# TECH_STACK

**As of:** 2026-09-26
**Repo:** merimeesoftware/Senior-Schools-Network
**Evidence:** committed files on `main` only. Gaps marked unknown.

## Universal target

Cursor + MCP + skills → GitHub Actions → Cloudflare (Pages/Workers) when practical.

## Current stack

| Layer | Current | Evidence | Alignment |
|-------|---------|----------|-----------|
| Agent surface | Root canon plus Copilot instructions; `/impeccable` skill | `DOC_INDEX.md`, `PRODUCT.md`, `DESIGN.md`, `ARCHITECTURE.md`, `AGENTS.md`, `.github/copilot-instructions.md`, `.cursor/skills/impeccable/` | partial |
| Source + CI | Next.js 14 static export; TypeScript; Tailwind CSS; Jest + React Testing Library; ESLint + Prettier; Bun lockfile and scripts; GitHub Actions (Bun 1.3.6, lint, typecheck, test, build, Semgrep, docs-check) | `package.json`, `next.config.js`, `tsconfig.json`, `tailwind.config.ts`, `jest.config.js`, `bun.lock`, `.github/workflows/ci.yml` | partial |
| Runtime / deploy | Target: Cloudflare Workers + Static Assets (assets-only, publish `out/`). Workers Builds is connected (`main` → `wrangler deploy`, other branches → `wrangler preview`). Actions can also deploy `main`. Netlify config retained until DNS cutover | `wrangler.jsonc`, `public/_headers`, `public/_redirects`, `docs/deploy-cloudflare.md`, `netlify.toml`, `.github/workflows/deploy-cloudflare.yml` | partial |
| Data / storage | Static TypeScript modules and JSON in repo; Markdown texts in `public/texts/`; no database or external storage | `lib/content/network.ts`, `lib/content/liturgical-themes.json`, `public/texts/` | aligned |
| Cursor / MCP / skills | unknown | unknown | partial |

## Target vs current

- **Alignment:** mismatch
- **Gaps:** No Cursor rules file and no MCP server config in repo. `/impeccable` is installed at `.cursor/skills/impeccable/`. Jest still fails on pre-existing content drift (the `test` CI job). DNS and Cloudflare dashboard (custom domain, Bulk Redirects) are not done yet. The Actions deploy skips `wrangler deploy` until `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` exist. Workers Builds also deploys `main`, so production can publish twice.
- **Cutover notes:** Static `out/` is produced by `next.config.js` `output: 'export'`. Target is **Workers + Static Assets**, not Pages and not `@cloudflare/next-on-pages`. Config is in `wrangler.jsonc` (`assets.directory`: `./out`, `not_found_handling`: `404-page`). Canonical origin is `https://seniorschools.org` (`lib/site.ts`). Host 301s cannot live in `_redirects` (domain-level redirects are unsupported); they are Bulk Redirects documented in `docs/deploy-cloudflare.md`. Keep `netlify.toml` until DNS has moved and rollback to Netlify is no longer needed, then delete it.

## Notes

- Next.js 14.2 with `output: 'export'` and `images.unoptimized: true` (`next.config.js`).
- Cloudflare Worker `senior-schools-network`: Workers Builds runs `bun run build` then `npx wrangler deploy` on `main`, and `npx wrangler preview` on other branches. `preview_urls: true`. `public/_headers` sends `X-Robots-Tag: noindex` on `*.*.workers.dev`. `netlify.toml` still builds with Bun 1.3.6 and publishes `out/` until post-cutover cleanup.
- CI: Bun 1.3.6, `bun install --frozen-lockfile`. `quality` is lint, typecheck, and build. `test` is Jest with coverage. Semgrep security scan and docs verification are separate jobs (`ci.yml`).
- Content is file-backed static data, not a database; analytics/tracking explicitly avoided in agent instructions.
