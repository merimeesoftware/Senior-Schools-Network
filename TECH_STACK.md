# TECH_STACK

**As of:** 2026-08-16
**Repo:** merimeesoftware/Senior-Schools-Network
**Evidence:** committed files on `main` only. Gaps marked unknown.

## Universal target

Cursor + MCP + skills → GitHub Actions → Cloudflare (Pages/Workers) when practical.

## Current stack

| Layer | Current | Evidence | Alignment |
|-------|---------|----------|-----------|
| Agent surface | GitHub Copilot instructions and repo docs; generic agent prompt stub | `.github/copilot-instructions.md`, `.github/prompts/prompt.md`, `.github/docs/north-star.md`, `.github/docs/technical.md`, `.github/docs/design-system.md`, `.github/docs/next-steps.md` | partial |
| Source + CI | Next.js 14 static export; TypeScript; Tailwind CSS; Jest + React Testing Library; ESLint + Prettier; Bun lockfile and scripts; GitHub Actions (Node 22, lint, typecheck, test, build, Semgrep, docs-check) | `package.json`, `next.config.js`, `tsconfig.json`, `tailwind.config.ts`, `jest.config.js`, `bun.lock`, `.github/workflows/ci.yml` | partial |
| Runtime / deploy | Netlify static hosting; Bun install + build; publish `out/` | `netlify.toml`, `README.md` | mismatch |
| Data / storage | Static TypeScript modules and JSON in repo; Markdown texts in `public/texts/`; no database or external storage | `lib/content/network.ts`, `lib/content/liturgical-themes.json`, `public/texts/` | aligned |
| Cursor / MCP / skills | unknown | unknown | partial |

## Target vs current

- **Alignment:** mismatch
- **Gaps:** No Cursor rules, MCP server config, or skills in repo. CI uses `npm ci` while local/Netlify use Bun (`bun.lock` only; no `package-lock.json` committed). Deploy target is Netlify, not Cloudflare Pages. `.github/docs/technical.md` still references Render/GitHub Pages, not current Netlify setup.
- **Cutover notes:** Static `out/` is already produced (`next.config.js` `output: 'export'`). Future cutover: add Cloudflare Pages deploy workflow/config, point publish to `out/`, then remove `netlify.toml` and update `README.md` deploy references.

## Notes

- Next.js 14.2 with `output: 'export'` and `images.unoptimized: true` (`next.config.js`).
- Netlify build: `bun install && bun run build`, publish `out/`, `BUN_VERSION` 1.3.6 (`netlify.toml`).
- CI quality job: Node 22, `npm ci`, lint, typecheck, Jest with coverage, build (`ci.yml`); plus Semgrep security scan and docs verification jobs.
- Content is file-backed static data, not a database; analytics/tracking explicitly avoided in agent instructions.
