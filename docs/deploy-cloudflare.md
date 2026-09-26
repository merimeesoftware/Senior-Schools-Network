# Deploy on Cloudflare Workers + Static Assets

Target host for the static export (`next.config.js` `output: 'export'` → `out/`).

This is an **assets-only Worker**. There is no Worker script (`wrangler.jsonc` has no `main`). Do not add `@cloudflare/next-on-pages`, OpenNext, or vinext.

`netlify.toml` stays in the repo until DNS has moved and the Netlify site is decommissioned. Delete it in the post-cutover cleanup, not before.

## What ships in the repo

| File                                      | Role                                                                                                                                                                    |
| ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `wrangler.jsonc`                            | Worker name `senior-schools-network`, assets directory `./out`, `not_found_handling: 404-page`, `html_handling: auto-trailing-slash`, `compatibility_date` `2026-09-26`, `preview_urls: true`, empty `previews` block |
| `public/_headers`                           | Copied to `out/_headers` by `next build`. Security headers on `/*`. Immutable cache on `/_next/static/*`, `/images/*`, and `/assets/*`. `X-Robots-Tag: noindex` on `*.*.workers.dev` |
| `public/_redirects`                         | Copied to `out/_redirects`. **Comments only.** Path redirects can be added later. Host redirects cannot                                                                                   |
| `.github/workflows/deploy-cloudflare.yml`   | On push to `main`: Bun install, lint, typecheck, build, then `wrangler deploy` when secrets exist                                                                                         |
| `lib/site.ts`                               | Canonical origin `https://seniorschools.org` for metadata, sitemap, robots, and Open Graph                                                                                                |

`html_handling: auto-trailing-slash` matches Next's default `trailingSlash: false`, which emits `philosophy.html` and serves it at `/philosophy`. Confirm that on the first `workers.dev` deploy before changing DNS.

## Branch previews

[Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/) is already connected to `senior-schools-network`. This repo does not change that connection, and it does not add a second preview workflow.

Commands configured in the dashboard (not in git):

| Branch | Build | Command after the build |
| --- | --- | --- |
| `main` | `bun run build` | `npx wrangler deploy` |
| any other branch | `bun run build` | `npx wrangler preview` |

`wrangler preview` creates a [Worker Preview](https://developers.cloudflare.com/workers/previews/) for that branch. It does not replace the active deployment. Cloudflare comments the Preview URL on the pull request. The command fails unless `wrangler.jsonc` contains a `previews` block. This Worker has no bindings, so the block is empty. Assets and `compatibility_date` stay at the top level.

`wrangler.jsonc` sets `preview_urls: true`. Wrangler still calls the field `preview_urls`. Setting it explicitly keeps workers.dev Preview URLs on if `workers_dev` is later turned off. The next production deploy applies that setting.

Closed PR #13 used `wrangler versions upload` as the non-production command. The connected Builds project already uses `npx wrangler preview`, which is the current preview command. This change does not switch it back. A GitHub Actions job that also ran `wrangler versions upload` would publish a second URL beside the Builds preview, so that job is not added.

`.github/workflows/deploy-cloudflare.yml` still deploys `main` with `wrangler deploy` when `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` are set. Workers Builds also deploys `main`. Both are already in place. This change does not remove either. When both succeed, the same commit is published twice.

No new Cloudflare dashboard steps. Do not install another GitHub App connection, and do not change the preview command.

Local equivalent of the non-production command, after `bun run build`:

```bash
bun run preview:cloudflare
```

`public/_headers` sends `X-Robots-Tag: noindex` for `https://:version.:subdomain.workers.dev/*`. That pattern is one hostname label plus the account subdomain, so it matches the production `workers.dev` host and Version URLs. It does not match `https://seniorschools.org`. Cloudflare adds `noindex` on its own for workers.dev Worker Preview URLs; this rule covers Version URLs and the production workers.dev host.

## Why host 301s are not in `_redirects`

[Workers Static Assets redirects](https://developers.cloudflare.com/workers/static-assets/redirects/) support path splats and status codes. **Domain-level redirects are unsupported** and are ignored. The same docs say to use [Bulk Redirects](https://developers.cloudflare.com/rules/url-forwarding/bulk-redirects/), which run in front of the Worker and can sit alongside `_redirects`.

A Worker script that inspects `Host` would also work, but only if `assets.run_worker_first` is enabled. That invokes the Worker for every asset request (billable) on a site that otherwise needs no compute. Bulk Redirects keep the Worker assets-only.

## Dashboard steps (not in this repo)

Do this in Cloudflare. Do not change live DNS until the `workers.dev` (or custom-domain) preview has been checked.

### 1. API token and GitHub secrets

The deploy workflow does not deploy until both secrets are set. It still runs lint, typecheck, and build, then emits a notice and skips deploy.

| GitHub secret           | Value                                                                                                                                                                                                    |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CLOUDFLARE_API_TOKEN`  | Custom token with **Account → Workers Scripts → Edit**, scoped to the account that will own the Worker. [Create a token](https://developers.cloudflare.com/workers/ci-cd/external-cicd/github-actions/). |
| `CLOUDFLARE_ACCOUNT_ID` | Account ID from the Workers dashboard                                                                                                                                                                    |

No token is stored in the repo.

### 2. First deploy

Either push to `main` after the secrets exist, or locally:

```bash
bun install
bun run build
bunx wrangler deploy
```

`wrangler deploy` publishes `out/` using `wrangler.jsonc`. It does not run the Next build.

Check, before any DNS change:

- `/`, `/philosophy`, `/network-directory`, `/engage`, `/contact`, `/privacy`
- one `/texts/<slug>` page
- an unknown path returns the site 404 page (status 404)
- response headers include `X-Frame-Options: DENY` and `X-Content-Type-Options: nosniff`
- the `workers.dev` response includes `X-Robots-Tag: noindex` (the canonical host does not)
- a file under `/_next/static/` sends `Cache-Control: public, max-age=31536000, immutable`

### 3. Canonical custom domain

Add **`seniorschools.org`** as a custom domain on the `senior-schools-network` Worker (Workers & Pages → the Worker → Settings → Domains & Routes → Add → Custom domain). Cloudflare creates the proxied DNS record when the zone is on the same account.

Enable **Always Use HTTPS** on that zone so `http://seniorschools.org` upgrades to `https://` before any other rule.

### 4. Host 301s (path and query preserved)

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

### 5. Cutover and rollback

1. Lower DNS TTL on the hostnames you will move.
2. Leave the Netlify site (`seniorschoolnetwork.netlify.app`) running.
3. Point only the Cloudflare zones / custom domain when the preview looks right.
4. Rollback is pointing DNS back at Netlify. Keep `netlify.toml` until that rollback window is closed.

## Uncertain choices

- **`html_handling: auto-trailing-slash`** is the Workers default and matches this export. If a route 404s on the first deploy, inspect `out/` for `route.html` vs `route/index.html` before changing it.
- **`workers.dev` stays enabled** (Wrangler default) so the first deploy has a URL before the custom domain exists. `public/_headers` sends `X-Robots-Tag: noindex` on that host and on Version URLs. Set `"workers_dev": false` later if that hostname should not remain public. `preview_urls: true` keeps workers.dev Preview URLs on if `workers_dev` is turned off.
- **The GitHub deploy job skips, and does not fail, when the two secrets are unset.** That keeps `main` green until the token exists. Workers Builds can still deploy `main` without those GitHub secrets. After cutover, change the skip into a hard failure if a missing token should block the branch.
- **Deploy does not wait on the `quality` or `test` CI jobs.** Both use Bun. `quality` runs lint, typecheck, and build. `test` runs Jest, which still has pre-existing content-drift failures on `main` and is not a deploy gate. The deploy workflow runs its own lint, typecheck, and build.
