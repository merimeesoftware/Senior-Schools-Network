# Next steps

This file is not a source of truth. Canon load order is root [`DOC_INDEX.md`](../../DOC_INDEX.md).

Open implementation work (not decided here; do not treat as locks):

- Align directory filters and stage UI to the five modes in [`PRODUCT.md`](../../PRODUCT.md). `lib/content/stages.ts`, `InteractiveStages`, and `StageBadge` still use the older four-column set.
- Curate `QuoteImageBreak` and hero pairings from `public/texts/` and `public/images/`. Do not invent quotations.
- Footer: GitHub link is still unbuilt. Keep the footer sparse (`DESIGN.md`).

Decisions that already landed: five-mode lock is `PRODUCT.md`; host target is Cloudflare Workers + Static Assets (`TECH_STACK.md`, `docs/deploy-cloudflare.md`); CI/CD is Workers Builds only (`main`: `bun run build` then `npx wrangler deploy`; other branches: `bun run build` then `npx wrangler preview`). GitHub Actions workflows (`.github/workflows/ci.yml`, `.github/workflows/deploy-cloudflare.yml`) are removed. Do not restore them or the GitHub secrets `CLOUDFLARE_API_TOKEN` / `CLOUDFLARE_ACCOUNT_ID`. Local `deploy:cloudflare` and `preview:cloudflare` stay optional. Quotes stay file-backed.
