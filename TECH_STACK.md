# TECH_STACK

**As of:** 2026-09-23
**Repo:** merimeesoftware/Senior-Schools-Network
**Evidence:** committed files. Gaps marked unknown. This file owns runtime. Words live in `PRODUCT.md`. Look lives in `DESIGN.md`.

## Universal target

Cursor + MCP + skills → GitHub Actions → Cloudflare (Pages/Workers) when practical.

## Current stack

| Layer | Current | Evidence | Alignment |
|-------|---------|----------|-----------|
| Agent surface | Root canon + Copilot instructions; generic agent prompt stub | `DOC_INDEX.md`, `PRODUCT.md`, `DESIGN.md`, `AGENTS.md`, `.github/copilot-instructions.md`, `.github/prompts/prompt.md` | partial |
| Source + CI | Next.js 14.2 static export; TypeScript; Tailwind CSS 3.4; Jest + React Testing Library; ESLint + Prettier; Bun lockfile and scripts; GitHub Actions (Node 22, `npm ci`, lint, typecheck, test, build, Semgrep, docs-check) | `package.json`, `next.config.js`, `tsconfig.json`, `tailwind.config.ts`, `jest.config.js`, `bun.lock`, `bunfig.toml`, `.github/workflows/ci.yml` | partial |
| Runtime / deploy | Netlify static hosting; Bun 1.3.6 install + build; publish `out/` | `netlify.toml`, `README.md` | mismatch |
| Data / storage | Static TypeScript modules and JSON in repo; Markdown texts in `public/texts/`; no database or external storage | `lib/content/network.ts`, `lib/content/liturgical-themes.json`, `public/texts/` | aligned |
| Cursor / MCP / skills | Cursor UI rule present; no MCP server config in repo; skills live in the user skill store, not copied here | `.cursor/rules/frontend-design.mdc` | partial |

## Target vs current

- **Alignment:** mismatch
- **Gaps:** No MCP server config or in-repo skill folders. CI uses `npm ci` while local/Netlify use Bun (`bun.lock` only; no `package-lock.json` committed). Deploy target is Netlify, not Cloudflare Pages. `.github/docs/technical.md` still references Render/GitHub Pages, not current Netlify setup. Public URL disagrees: `README.md` says `seniorschoolsnetwork.com` (Netlify); `app/layout.tsx` `metadataBase` is `https://seniorschoolsnetwork.org`.
- **Cutover notes:** Static `out/` is already produced (`next.config.js` `output: 'export'`). Future cutover: add Cloudflare Pages deploy workflow/config, point publish to `out/`, then remove `netlify.toml` and update `README.md` deploy references. Do not invent a host.

## Notes

- Next.js 14.2 with `output: 'export'` and `images.unoptimized: true` (`next.config.js`).
- Netlify build: `bun install && bun run build`, publish `out/`, `BUN_VERSION` 1.3.6 (`netlify.toml`).
- CI quality job: Node 22, `npm ci`, lint, typecheck, Jest with coverage, build (`ci.yml`); plus Semgrep security scan and docs verification jobs.
- Content is file-backed static data, not a database; analytics/tracking explicitly avoided in agent instructions.
- No `wrangler.toml`. No backend, API, auth, or forms.
- Fonts are loaded at build via `next/font/google` in `app/layout.tsx` (EB Garamond, IM Fell English, Petit Formal Script). Look details belong in `DESIGN.md`.
- Key trees: `app/` routes, `components/`, `lib/content/` + `lib/assets.ts`, `public/images/` + `public/texts/`, `.github/docs/`, `docs/reviews/`.
