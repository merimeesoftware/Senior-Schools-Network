# MISSION.md

Layers and constraints for the Senior Schools Network site. Runtime, package manager, CI commands, and host checklist live in `TECH_STACK.md` and `docs/deploy-cloudflare.md`. Words live in `PURPOSE.md`. Look lives in `IDENTITY.md`.

## What this is

One static website. No backend, database, API, or auth. A visitor receives prebuilt HTML.

```
Visitor
  → Cloudflare Bulk Redirects (host 301s; not in the repo)
    → assets-only Worker `senior-schools-network`
      → static `out/` from Next.js `output: 'export'`
        → app/(site) routes
          → components
            → lib/content + public/texts + lib/assets.ts
```

## Layers

| Layer | Where | Owns |
|-------|--------|------|
| Routes | `app/(site)/*`, `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts` | Pages the visitor can open |
| Components | `components/layout`, `ui`, `content`, `media`, `interactive`, `philosophy` | Presentation. They do not redefine philosophy |
| Content | `lib/content/*`, `public/texts/*`, `lib/assets.ts`, `public/images/` | Schools, quotes, texts, image manifest. File-backed |
| Site constants | `lib/site.ts` | Canonical origin `https://seniorschools.org` |
| Export | `next.config.js` (`output: 'export'`, `images.unoptimized: true`) | `out/` |
| Edge | `wrangler.jsonc`, `public/_headers`, `public/_redirects` | How `out/` is served. No Worker script (`main` is unset) |
| Until cutover | `netlify.toml` | The current Netlify build. Remove only after DNS has moved |

Live routes: `/`, `/philosophy`, `/network-directory`, `/engage`, `/texts/[slug]`, `/contact`, `/privacy`.

## Constraints

- Static first. Do not add a server runtime, D1, auth, or a form backend in order to look finished.
- The Worker is assets-only. Do not add `@cloudflare/next-on-pages`, OpenNext, or a `main` script so that host redirects can live in the Worker. Host 301s are Cloudflare Bulk Redirects. Path notes may live in `public/_redirects`; domain redirects cannot.
- Keep `netlify.toml` until DNS cutover and rollback are done. See `docs/deploy-cloudflare.md`.
- No analytics or tracking.
- Quotes and primary texts come from `public/texts/` (including `PHILOSOPHICAL-AXIOMS.md` as a quote bank). Do not invent quotations in components.
- Mode *names*, order, and filters are `PURPOSE.md` (musical → gymnastic → poetic → romantic → virtuous). `lib/content/stages.ts`, `InteractiveStages`, and `StageBadge` still speak the older four-column set. That is a later code pass. This file does not authorize a sixth mode or a rename.
- Dev and production builds share `.next/`. Do not run `bun run build` while `bun run dev` is running. Operational detail: `AGENTS.md`.
- Accessibility is part of the layer: semantic HTML, ARIA on interactive controls, keyboard paths. Look tokens: `IDENTITY.md`.

## What is not a layer

- StoryBrand, mode definitions, and public lines — `PURPOSE.md`.
- Palette, type, and components’ visual rules — `IDENTITY.md`.
- Bun version and Workers Builds commands — `TECH_STACK.md`.
- Page-by-page copy proposals — `docs/reviews/`.
- Phase plans. Older docs spoke of Phase 2 / Phase 3. Those are not a roadmap. The durable shape is the static export plus the Cloudflare cutover above.

## Pointers

- `TECH_STACK.md` — language, deploy target, CI, gaps.
- `docs/deploy-cloudflare.md` — Workers Builds commands, Bulk Redirects, cutover order.
- `wrangler.jsonc` — `assets.directory`: `./out`, `not_found_handling`: `404-page`, `html_handling`: `auto-trailing-slash`, empty `previews` block for `wrangler preview`.
