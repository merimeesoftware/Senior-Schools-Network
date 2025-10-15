---
title: Phase 3 Prompt 03 - Gallery and Collection Wiring
---

## Purpose

Wire curated galleries and image collections aligned to stages and categories using the image manifest.

## Required Context

- IMAGE-SYSTEM-SUMMARY.md
- lib/assets.ts
- components/ImageGallery.tsx
- app/(site)/philosophy/page.tsx
- app/(site)/gallery/page.tsx

## Prompt Loop

1. Preflight: Review stage/category taxonomy in lib/types/content.ts and assets metadata.
2. Implement: Place ImageGallery instances with documented filters (stage/category/tag) and sensible responsive columns.
3. Validate: Confirm captions, alt text, and column behavior across breakpoints.
4. Document: List collections and filters used per section.

## Tasks

- Philosophy: Ensure a gallery section showcases sacred art and adventure imagery per sections; consider two galleries (beauty, discipline).
- Gallery page: Ensure each collection is represented; add missing sections if necessary.
- Add captions where they clarify the philosophical connection; keep under 140 chars.

## Success Criteria

- Galleries render reliably with responsive columns and meaningful captions.
- Filters map to actual assets; no empty galleries.

## Hand-off

Proceed to Prompt 04 after galleries are curated and verified.
