# Next steps

This file is not a source of truth. Canon load order is root [`DOC_INDEX.md`](../../DOC_INDEX.md).

Open implementation work (not decided here; do not treat as locks):

- Align directory filters and stage UI to the five modes in [`PRODUCT.md`](../../PRODUCT.md). `lib/content/stages.ts`, `InteractiveStages`, and `StageBadge` still use the older four-column set.
- Curate `QuoteImageBreak` and hero pairings from `public/texts/` and `public/images/`. Do not invent quotations.
- Footer: GitHub link is still unbuilt. Keep the footer sparse (`DESIGN.md`).

Decisions that already landed: five-mode lock is `PRODUCT.md`; host target is Cloudflare Workers + Static Assets (`TECH_STACK.md`, `docs/deploy-cloudflare.md`); quotes stay file-backed.
