# Cloudflare Deployment — Decision & Handoff

**Date:** 2026-09-14
**Status:** Part A (repo prep) complete. Part B (account + domain wiring) pending next session.

## Decision: Cloudflare Workers (Static Assets)

We are deploying to **Cloudflare Workers with Static Assets**, not Cloudflare Pages.

- **Rationale (long-term):** Cloudflare directs new investment to Workers. Their
  [Pages→Workers migration guide](https://developers.cloudflare.com/workers/static-assets/migration-guides/migrate-from-pages/)
  states Workers has "a distinctly broader set of features … (Durable Objects, Cron Triggers,
  and more comprehensive Observability)" at the **same cost** (static-asset requests are free).
  Pages remains supported but is effectively in maintenance mode.
- **Fit:** The roadmap anticipates dynamic needs (a real contact form + Turnstile, possibly
  Email Workers). On Workers, static hosting and server logic are one deployment unit — add a
  route/binding to the *same* Worker when needed, with **no platform migration**.
- **Minimal now:** Keep the current Next.js **static export** (`output: 'export'` → `out/`) and
  serve `out/` as assets. No SSR adapter yet. If real SSR/server components are ever wanted, the
  clean upgrade path is Cloudflare's [vinext](https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/)
  adapter (which also supports static exports).

This supersedes the earlier "Pages, for simplicity" recommendation in
`architecture-cloudflare-review.md` §6.1 — that was the lowest-risk *parity* answer; Workers is
the better *long-term* answer.

## Part A — done (in this branch)

- `wrangler.jsonc` — assets-only Worker (`name: senior-schools-network`, `assets.directory: ./out`,
  `html_handling: auto-trailing-slash`, `not_found_handling: 404-page`). No `main` yet.
- `public/_headers` — copied into `out/` at build; mirrors prior Netlify security headers and adds
  a precise `immutable` cache rule for `/_next/static/*`.
- `public/_redirects` — copied into `out/`; canonicalizes `www` → apex (portable fallback; a
  zone-level Redirect Rule is preferred once the domain is on Cloudflare).
- `package.json` — `deploy` (`bun run build && wrangler deploy`) and `cf:preview`
  (`bun run build && wrangler dev`) scripts; `wrangler` added as a devDependency.
- `.github/workflows/ci.yml` — CI switched from `npm ci` (which could not work — no
  `package-lock.json`) to `oven-sh/setup-bun` + `bun install --frozen-lockfile`.
- `.gitignore` — ignores `.wrangler` and `.dev.vars`.

Verified: `bun run build` emits `out/_headers` + `out/_redirects`; `bun run typecheck` and
`bun run lint` pass; `wrangler deploy --dry-run` reads 191 assets and validates the config.

## Prerequisites for Part B (next session)

1. **Porkbun MCP** loaded (registrar: buy/confirm domain, set nameservers).
2. **A Cloudflare MCP with DNS/zone + Workers deploy** capability, **or** Cloudflare API token /
   `wrangler login` credentials in Secrets. (The Cloudflare MCP attached in the previous session
   was Workers-bindings/builds/observability only — no DNS/zone tools.)
3. **Confirm the domain.** As of 2026-09-14, `seniorschoolsnetwork.com` and `.org` both resolve
   **NXDOMAIN** (not registered / not delegated). Decide the canonical name and register it if
   needed. Assumed canonical: **apex `seniorschoolsnetwork.com`**, with `www` redirecting to it.

## Part B — steps

1. **Deploy the Worker:** `bun run deploy` (i.e. `wrangler deploy`) with Cloudflare creds, or
   connect the repo to **Workers Builds** (build `bun run build`, deploy `out/`). Workers Builds
   can be monitored via the Cloudflare-builds MCP.
2. **Add the zone** `seniorschoolsnetwork.com` to Cloudflare → note the two assigned Cloudflare
   nameservers.
3. **At Porkbun (MCP):** set the domain's nameservers to the Cloudflare NS (full-zone delegation).
   (If registering fresh, buy the domain first.)
4. **Attach custom domains** to the Worker: apex + `www` (Cloudflare auto-creates the proxied DNS
   records since the zone is now on Cloudflare).
5. **Canonicalization + TLS:** enable "Always Use HTTPS"; add a zone Redirect Rule for `www` →
   apex (the `_redirects` file is the fallback).
6. **Verify:** `dig NS/A seniorschoolsnetwork.com`, confirm TLS, curl the security/cache headers,
   and run Lighthouse against the live URL (behind the CDN, performance should exceed the local
   audit numbers).

## Known follow-ups (separate from this deployment)

- **Tests are red on `main`** (~13/28 suites — content drift). With CI now on Bun, the `quality`
  job will *run* and surface these; fixing them is a tracked follow-up (see
  `architecture-cloudflare-review.md` §5.2).
- **`docs-check` CI job** asserts ~10 files that don't exist — it will still fail until rewritten.
- **Decommission Netlify** after DNS cutover is confirmed healthy (remove `netlify.toml` / disable
  the Netlify site).
