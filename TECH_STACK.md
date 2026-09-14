# TECH_STACK

**As of:** 2026-09-14
**Repo:** merimeesoftware/Senior-Schools-Network
**Evidence:** committed files on `main` only. Gaps marked unknown.

## Universal target

Cursor + MCP + skills → GitHub Actions → Cloudflare (Pages/Workers) when practical.

## Current stack

| Layer | Current | Evidence | Alignment |
|-------|---------|----------|-----------|
| Agent surface | GitHub Copilot instructions and repo docs; generic agent prompt stub | `.github/copilot-instructions.md`, `.github/prompts/prompt.md`, `.github/docs/north-star.md`, `.github/docs/technical.md`, `.github/docs/design-system.md`, `.github/docs/next-steps.md` | partial |
| Source + CI | Next.js 14 static export; TypeScript; Tailwind CSS; Jest + React Testing Library; ESLint + Prettier; Bun lockfile and scripts; GitHub Actions (Bun 1.3.6, lint, typecheck, test, build, Semgrep, docs-check) | `package.json`, `next.config.js`, `tsconfig.json`, `tailwind.config.ts`, `jest.config.js`, `bun.lock`, `.github/workflows/ci.yml` | aligned |
| Runtime / deploy | Cloudflare Workers Static Assets via Workers Builds Git integration; `main` → `wrangler deploy`; feature branches → `wrangler versions upload` preview URLs; `public/_headers` | `wrangler.jsonc`, `public/_headers`, `README.md` | aligned |
| Data / storage | Static TypeScript modules and JSON in repo; Markdown texts in `public/texts/`; no database or external storage | `lib/content/network.ts`, `lib/content/liturgical-themes.json`, `public/texts/` | aligned |
| Cursor / MCP / skills | unknown | unknown | partial |

## Target vs current

- **Alignment:** partial
- **Gaps:** No Cursor rules, MCP server config, or skills in repo. Custom domain DNS still on Netlify until cutover. Jest suite still has pre-existing content-drift failures (see `docs/reviews/architecture-cloudflare-review.md` P0-3). Cloudflare GitHub App + non-production branch builds must be enabled in the dashboard (one-time).
- **Cutover notes:** Static `out/` is produced by `next build` (`output: 'export'`). Cloudflare Worker `senior-schools-network` serves `./out` with `not_found_handling: 404-page`. Feature-branch previews use `preview_urls`. Keep `netlify.toml` until production is proven; then remove it. Canonical domain (`.com` vs `.org`) should be settled at DNS cutover.

## Notes

- Next.js 14.2 with `output: 'export'` and `images.unoptimized: true` (`next.config.js`).
- Cloudflare: Workers Builds Git integration (no GitHub secrets). Build `bun run build`; production `npx wrangler deploy`; feature branches `npx wrangler versions upload`.
- CI: Bun 1.3.6, `bun install --frozen-lockfile`, lint, typecheck, build, Jest with coverage, Semgrep, docs verification (`ci.yml`). Deploy is Cloudflare-side, not GitHub Actions.
- `netlify.toml` remains as rollback until DNS cutover is complete.
- Content is file-backed static data, not a database; analytics/tracking explicitly avoided in agent instructions.
