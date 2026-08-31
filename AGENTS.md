# AGENTS.md

## Cursor Cloud specific instructions

This repo is the **Senior Schools Network** site: a single, fully static **Next.js 14 (App Router, `output: 'export'`)** website. There is no backend, database, API, or auth — all content is file-backed under `lib/content/`, `public/texts/`, and `public/images/`. Standard commands live in `README.md` and `package.json` scripts; prefer those.

### Runtime / package manager
- **Bun is the package manager** (`bun.lock`, `bunfig.toml`); use `bun install` and `bun run <script>`. Bun is preinstalled at `~/.bun/bin` (also on PATH via `~/.bashrc`) and the startup update script keeps deps in sync. Node 22 is also available.
- Do not use `npm ci` locally: there is no `package-lock.json` in the repo (the GitHub Actions CI workflow references `npm ci`, which is a repo-level inconsistency, not a local-setup step).

### Running / building
- Dev server: `bun run dev` → http://localhost:3000 (hot reload). This single process is the whole product.
- Static build: `bun run build` (emits `out/`); `bun run preview` serves the built `out/` on port 3000.
- The homepage and `OptimizedImage` component emit verbose `[OptimizedImage] ...` and Next.js dev logs in dev mode — this is expected noise, not errors.

### Lint / typecheck / test
- `bun run lint` (Next/ESLint) and `bun run typecheck` (`tsc --noEmit`) both pass clean.
- `bun run test` (Jest + React Testing Library). NOTE: as of environment setup, a subset of test suites fail (~13 suites / ~76 tests) due to **pre-existing content drift** — the tests assert older copy/emoji/markup than the current components render (e.g. "warrior poets" vs "Chivalric Wayfarers", missing emoji nodes, stale snapshots). These failures are unrelated to environment setup and exist on a clean `main` checkout. Do not assume your changes caused them; re-check against a clean tree, and update snapshots with `bun run test -- -u` only if intentionally re-baselining.
