# MISSION

Cutover ship status: Netlify → Cloudflare Workers Static Assets, then Bulk Redirects onto `https://seniorschools.org`.

Layers: `ARCHITECTURE.md`. Procedure: `docs/deploy-cloudflare.md`. Runtime and CI: `TECH_STACK.md`.

**Last probe:** 2026-10-02, read-only DNS and HTTPS. No DNS, Wrangler, or dashboard change was made for this note. Prior integrator probe: 2026-09-28.

## Live

- `seniorschools.org` — Worker Custom Domain attached. HTTPS returns 200 from Cloudflare, with the site security headers and no Netlify request id.
- Worker `senior-schools-network` is assets-only. Config: `wrangler.jsonc`.
- An extra `workers.dev` domain is declined. Michael said none is needed.
- `netlify.toml` remains. The Netlify site is still the origin behind the old hosts below.

## Left

- `www.seniorschools.org` — NXDOMAIN. Needs a proxied AAAA `100::` (or equivalent) so Bulk Redirects can see www.
- `seniorschoolnetwork.com` and `seniorschoolnetwork.org` — still orange-cloud Cloudflare in front of the Netlify origin. Each apex returns 200. Neither 301s to `seniorschools.org`.
- `www.seniorschoolnetwork.com` and `www.seniorschoolnetwork.org` — each 301s to `https://seniorschoolnetwork.com/`, not to `https://seniorschools.org/`.
- Bulk Redirects stay in the Cloudflare dashboard, not in this repo. Approved rows are `docs/deploy-cloudflare.md` §3: `www.seniorschools.org` and the four old hosts → `https://seniorschools.org/` with 301, subpath and query preserved. Create them in the dashboard or by a token path.
- Smoke those redirects after they exist.
- Tear down Netlify only after the redirects, that smoke, and Michael’s confirmation that the cutover has stabilized.

## Pointers

- `docs/deploy-cloudflare.md` — commands, redirect rows, rollback.
- `ARCHITECTURE.md` — static-export and edge layers.
- `TECH_STACK.md` — runtime and Workers Builds commands.
