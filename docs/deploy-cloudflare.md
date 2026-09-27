# Deploy on Cloudflare Workers + Static Assets

Target host for the static export (`next.config.js` `output: 'export'` → `out/`).

This is an **assets-only Worker**. There is no Worker script (`wrangler.jsonc` has no `main`). Do not add `@cloudflare/next-on-pages`, OpenNext, or vinext.

`netlify.toml` stays in the repo until DNS has moved and the Netlify site is decommissioned. Delete it in the post-cutover cleanup, not before.

## What ships in the repo

| File                                      | Role                                                                                                                                                                    |
| ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `wrangler.jsonc`                            | Worker name `senior-schools-network`, assets directory `./out`, `not_found_handling: 404-page`, `html_handling: auto-trailing-slash`, `compatibility_date` `2026-09-26`, `preview_urls: true`, Custom Domain `seniorschools.org` (`routes` with `custom_domain: true`), empty `previews` block |
| `public/_headers`                           | Copied to `out/_headers` by `next build`. Security headers on `/*`. Immutable cache on `/_next/static/*`, `/images/*`, and `/assets/*`. `X-Robots-Tag: noindex` on `*.*.workers.dev` |
| `public/_redirects`                         | Copied to `out/_redirects`. **Comments only.** Path redirects can be added later. Host redirects cannot                                                                                   |
| `lib/site.ts`                               | Canonical origin `https://seniorschools.org` for metadata, sitemap, robots, and Open Graph                                                                                                |

`html_handling: auto-trailing-slash` matches Next's default `trailingSlash: false`, which emits `philosophy.html` and serves it at `/philosophy`. Confirm that on the first `workers.dev` deploy before changing DNS.

## CI/CD: Workers Builds

[Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/) is the only CI/CD. It is the native Cloudflare↔GitHub connection already attached to `senior-schools-network`. This repo has no `.github/workflows/`. Deploy does not use GitHub Actions or the repository secrets `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`.

Commands configured in the dashboard (not in git):

| Branch | Build | Command after the build |
| --- | --- | --- |
| `main` | `bun run build` | `npx wrangler deploy` |
| any other branch | `bun run build` | `npx wrangler preview` |

`npx wrangler deploy` on `main` publishes the active deployment from `out/`. `npx wrangler preview` on every other branch creates a [Worker Preview](https://developers.cloudflare.com/workers/previews/). A preview does not replace the active deployment. Cloudflare comments the Preview URL on the pull request. The preview command fails unless `wrangler.jsonc` contains a `previews` block. This Worker has no bindings, so the block is empty. Assets and `compatibility_date` stay at the top level.

`wrangler.jsonc` sets `preview_urls: true`. Wrangler still calls the field `preview_urls`. Setting it explicitly keeps workers.dev Preview URLs on if `workers_dev` is later turned off. The next production deploy applies that setting.

Closed PR #13 used `wrangler versions upload` as the non-production command. The connected Builds project uses `npx wrangler preview`, which is the current preview command.

The Git connection and these two commands stay as they are. Do not add a GitHub Actions workflow beside them.

Optional local tools. They do not run the Next build. Run `bun run build` first:

```bash
bun run deploy:cloudflare
bun run preview:cloudflare
```

`public/_headers` sends `X-Robots-Tag: noindex` for `https://:version.:subdomain.workers.dev/*`. That pattern is one hostname label plus the account subdomain, so it matches the production `workers.dev` host and Version URLs. It does not match `https://seniorschools.org`. Cloudflare adds `noindex` on its own for workers.dev Worker Preview URLs; this rule covers Version URLs and the production workers.dev host.

## Why host 301s are not in `_redirects`

[Workers Static Assets redirects](https://developers.cloudflare.com/workers/static-assets/redirects/) support path splats and status codes. **Domain-level redirects are unsupported** and are ignored. The same docs say to use [Bulk Redirects](https://developers.cloudflare.com/rules/url-forwarding/bulk-redirects/), which run in front of the Worker and can sit alongside `_redirects`.

A Worker script that inspects `Host` would also work, but only if `assets.run_worker_first` is enabled. That invokes the Worker for every asset request (billable) on a site that otherwise needs no compute. Bulk Redirects keep the Worker assets-only. The canonical host is not a redirect. It is the Custom Domain in `wrangler.jsonc` (section 2).

## Dashboard steps (not in this repo)

Host 301s, Always Use HTTPS, and cutover stay in Cloudflare. The canonical custom domain is declared in `wrangler.jsonc` and applied by `wrangler deploy` (section 2). Do not change live DNS until the `workers.dev` preview has been checked.

### 1. First deploy

Push to `main`. Workers Builds runs `bun run build`, then `npx wrangler deploy`.

The same publish from a machine already logged in to Wrangler:

```bash
bun install
bun run build
bun run deploy:cloudflare
```

`wrangler deploy` publishes `out/` using `wrangler.jsonc`. It does not run the Next build.

Check, before any DNS change:

- `/`, `/philosophy`, `/network-directory`, `/engage`, `/contact`, `/privacy`
- one `/texts/<slug>` page
- an unknown path returns the site 404 page (status 404)
- response headers include `X-Frame-Options: DENY` and `X-Content-Type-Options: nosniff`
- the `workers.dev` response includes `X-Robots-Tag: noindex` (the canonical host does not)
- a file under `/_next/static/` sends `Cache-Control: public, max-age=31536000, immutable`

### 2. Canonical custom domain

`wrangler.jsonc` declares **`seniorschools.org`** as a Custom Domain:

```jsonc
"routes": [
  { "pattern": "seniorschools.org", "custom_domain": true }
]
```

Workers Builds on `main` runs `npx wrangler deploy`, which attaches that hostname. The same publish from a logged-in machine is `bun run deploy:cloudflare` after `bun run build`. Cloudflare creates the proxied DNS record and the certificate when the zone is on the same account. The Worker is the origin for `seniorschools.org` only.

Do not declare `www.seniorschools.org` or any `seniorschoolnetwork.*` host as a Custom Domain. Those stay Bulk Redirect or Single Redirect targets (section 3). If they are attached to the Worker and the redirect list is missing, they serve the site and create duplicate hosts.

**Deploy precondition.** Cloudflare refuses a Custom Domain on a hostname that already has a CNAME. Live DNS currently has `seniorschools.org` and `www.seniorschools.org` as proxied CNAMEs to `seniorschoolnetwork.com` (the Netlify chain). Before a deploy can attach the domain, those apex and www CNAMEs on the `seniorschools.org` zone must be removed, or the conflicting records cleared, so Cloudflare can create the Custom Domain records. DNS at merge time is handled outside this repo. Do not add DNS tooling here.

Enable **Always Use HTTPS** on that zone so `http://seniorschools.org` upgrades to `https://` before any other rule. That setting stays in the dashboard.

### 3. Host 301s (path and query preserved)

Create one account-level Bulk Redirect List and attach it to every zone below. For each row:

- Status code: **301**
- **Subpath matching: on**
- **Preserve path suffix: on** (default)
- **Preserve query string: on** (default is off — turn it on)
- **Include subdomains: off** (www is listed explicitly so other subdomains are not redirected)

| Source URL                             | Target URL                   |
| -------------------------------------- | ---------------------------- |
| `https://www.seniorschools.org/`       | `https://seniorschools.org/` |
| `https://seniorschoolnetwork.com/`     | `https://seniorschools.org/` |
| `https://www.seniorschoolnetwork.com/` | `https://seniorschools.org/` |
| `https://seniorschoolnetwork.org/`     | `https://seniorschools.org/` |
| `https://www.seniorschoolnetwork.org/` | `https://seniorschools.org/` |

`https://seniorschools.org` is not a source. The unregistered name `seniorschoolsnetwork.org` (extra "s") is not a source.

With subpath matching and preserve path suffix, `https://www.seniorschools.org/philosophy?x=1` becomes `https://seniorschools.org/philosophy?x=1`.

Each source hostname needs a **proxied** DNS record (orange cloud) in its zone, or the redirect never sees the request. Those hostnames do **not** need to be custom domains on the Worker. If they are attached to the Worker and the redirect list is missing, they will serve the site and create duplicate hosts. Attach the redirect list before those records proxy traffic.

Enable **Always Use HTTPS** on each legacy zone so `http://` is upgraded to the `https://` source URLs above. If a zone cannot use that setting, duplicate each row with an `http://` source.

Equivalent per-zone option: a Single Redirect with a custom filter, dynamic target, status 301, and preserve query string:

```
http.host eq "www.seniorschools.org"
→ concat("https://seniorschools.org", http.request.uri.path)
```

Repeat for the other four hosts. Preview one path-and-query URL in the dashboard before deploying the rule.

### 4. Cutover and rollback

1. Lower DNS TTL on the hostnames you will move.
2. Leave the Netlify site (`seniorschoolnetwork.netlify.app`) running.
3. When the `workers.dev` preview looks right, clear the conflicting apex and www CNAMEs on `seniorschools.org` (section 2) and deploy so Cloudflare attaches that Custom Domain. Point the legacy zones for the Bulk Redirects in section 3.
4. Rollback is pointing DNS back at Netlify. Keep `netlify.toml` until that rollback window is closed.

## Uncertain choices

- **`html_handling: auto-trailing-slash`** is the Workers default and matches this export. If a route 404s on the first deploy, inspect `out/` for `route.html` vs `route/index.html` before changing it.
- **`workers.dev` stays enabled** (Wrangler default) so the first deploy has a URL before the custom domain exists. `public/_headers` sends `X-Robots-Tag: noindex` on that host and on Version URLs. Set `"workers_dev": false` later if that hostname should not remain public. `preview_urls: true` keeps workers.dev Preview URLs on if `workers_dev` is turned off.
- **Workers Builds is the deploy.** It runs the build and Wrangler commands above. It does not run Jest. The suite still has pre-existing content-drift failures on `main`; run `bun run lint`, `bun run typecheck`, and `bun run test` locally.
