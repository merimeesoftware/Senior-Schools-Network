---
title: Phase 3 Prompt 05 - SEO Metadata and Open Graph Images
---

## Purpose

Complete SEO metadata and ensure Open Graph/Twitter images are defined for major pages.

## Required Context

- .github/docs/current-phase.md (SEO & Metadata objectives)
- app/layout.tsx (metadata config)
- app/(site)/**/page.tsx (page-level metadata if any)
- public/og-image-enclosed-garden.md (source/notes for OG)

## Prompt Loop

1. Preflight: Inventory pages needing metadata and OG images.
2. Implement: Add title/description metadata per page; define OG default and page-specific overrides.
3. Validate: Use an OG preview tool and check meta tags in rendered HTML.
4. Document: Record decisions for titles/descriptions and OG selection.

## Tasks

- Ensure each major route has unique title and meta description per the checklist.
- Add Open Graph images for Home, Philosophy, Schools, Home-Application, Join-Found, Contact.
- Confirm canonical URLs and robots/sitemap are configured per technical.md.

## Success Criteria

- All pages have unique, descriptive titles (<60 chars) and descriptions (<160 chars).
- OG images render correctly when shared.

## Hand-off

Proceed to Prompt 06 once metadata validates and OG previews look correct.
