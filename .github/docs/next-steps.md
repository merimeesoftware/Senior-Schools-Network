# Next Steps & Technical Backlog

> This document tracks potential improvements, shelved features, and technical debt for the Senior Schools Network platform. Items are prioritized by impact and effort. Use this as a living backlog rather than detailed phase plans—AI-assisted development has reduced the need for granular prompts.

**Last Updated**: September 15, 2026

---

## Active Priorities

### 0. Align site UI and filters to the locked five modes
**Status**: Next content pass  
**Impact**: High (taxonomy, Copilot, directory)

Canonical card: `.github/docs/stages.md`.

Modes in order: musical, gymnastic, poetic, romantic, virtuous.

**Scope**:
- `InteractiveStages` and philosophy subsections still say “four stages” in places
- Schools / network filters should use the five slugs
- Map legacy “garden” / “nursery” tags to `musical`
- Book and Western lists retagged in a later pass

### 1. Content Curation: QuoteImageBreak & HeroSection Updates
**Status**: Next up  
**Impact**: High (visual impact, philosophical alignment)

Curate relevant quotes and images for all visual break components across the site. This requires reviewing page content and selecting thematically appropriate pairings.

**Scope**:
- **Homepage** (`app/(site)/page.tsx`): 1 HeroSection, 2 QuoteImageBreak
- **Philosophy** (`app/(site)/philosophy/page.tsx`): 3 QuoteImageBreak
- **Engage** (`app/(site)/engage/page.tsx`): 1 HeroSection, 1 QuoteImageBreak
- **Network Directory** (`app/(site)/network-directory/page.tsx`): 1 HeroSection

**Process**:
1. Review each page's content and thematic focus
2. Curate images from `public/images/` collections (adventure, art-sacred, landscapes, medieval-tales, etc.)
3. Select quotes from existing quote banks or derive new sections
4. Update components with curated content

**Quote Source Expansion**:
Derive additional quote bank sections in `PHILOSOPHICAL-AXIOMS.md` from:
- `public/texts/QUOTES.md` (Scripture passages, Knox translation)
- Full texts in `public/texts/` (Chesterton, Boethius, Don Bosco, etc.)
- Organize by thematic relevance to page content

### 2. Footer Enhancement
**Status**: Planned  
**Impact**: Medium (navigation, credibility)

Add GitHub repository link and other relevant external links to footer.

- [ ] Add GitHub repo link
- [ ] Consider adding: Email contact, social links if applicable
- [ ] Maintain minimal aesthetic—don't overcrowd

**Current Footer**: Only has Privacy Policy and Contact links.

### 3. Automated WebP Conversion ✅ COMPLETE
**Status**: Complete  
**Impact**: Medium (reduces manual image prep, smaller file sizes)

- [x] Install sharp as dev dependency
- [x] Create `scripts/convert-images.ts`
- [x] Add npm scripts for manual and prebuild conversion
- [x] Test with existing images (85% size reduction achieved)

### 4. QuoteImageBreak Performance Optimization
**Status**: Shelved  
**Impact**: Low (current implementation works)

---

## Technical Debt

### Testing Coverage
- Current: ~85% pass rate (434 passing, 76 failing)
- Target: 100% pass rate, 60% coverage short-term
- **Failing tests**: `InteractiveStages.crisis.test.tsx` needs updates after component refactor (button text changed from "View Crisis" to "Crisis View", visual indicator features removed)
- **Missing tests**: Navigation, OptimizedImage, ImageGallery, SchoolsFilter, ScriptureCarousel

### InteractiveStages Test Alignment
**Status**: Needs attention  
**Issue**: Component was refactored to use two-button toggle design ("Restoration View" / "Crisis View") but tests still look for old button names. Five-mode labels will require a further test pass.  
**Fix**: Update tests to match current component, then to stages.md.

### Structured Data
**Decision**: Shelved

### Font Subsetting
**Decision**: Keep current approach—simplicity over marginal gain

---

## Shelved Features

### Database for Quotes/Images
**Decision**: Keep static

### Render Migration
**Decision**: Stay with Netlify

### Service Worker / Offline Support
**Decision**: Deferred

---

## Completed Items (Archive)

### January 31, 2026 - SEO & Cleanup
- [x] Fixed PHILOSOPHICAL-AXIOMS.md path reference (moved to `public/texts/`)
- [x] Renamed "other textual excerpts.md" → "other-textual-excerpts.md" (URL compatibility)
- [x] Updated sitemap.ts with all routes including /contact, /privacy, /texts/*
- [x] Added canonical URLs to homepage, contact, privacy pages
- [x] Fixed page title format to use template pattern
- [x] Removed breadcrumb from text pages, minimized whitespace
- [x] Resolved merge conflicts (HeroSection.tsx, Navigation.tsx) for PR #7
- [x] Component restructure: 35 components reorganized into 5 subdirectories (layout, content, ui, interactive, philosophy)

### Bun Migration (January 2026)
- [x] Install Bun runtime (v1.3.6)
- [x] Verify `bun install` works with all dependencies
- [x] Verify `bun run build` produces identical output
- [x] Test Jest compatibility with Bun runtime (366 tests passing)
- [x] Update netlify.toml for Bun builds
- [x] Remove npm lock file, use bun.lock
- [x] Create bunfig.toml configuration

---

## Decision Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-09-15 | Lock five modes: musical, gymnastic, poetic, romantic, virtuous | Same grammatical fashion; musical = Muses/garden; poetic look before romantic quest; card at `.github/docs/stages.md` |
| 2026-01-31 | Curate QuoteImageBreak content next | High visual impact, aligns philosophy with imagery |
| 2026-01-31 | Expand AXIOMS.md from QUOTES.md | Consolidate quote sources for programmatic access |
| 2026-01-31 | Add GitHub link to footer | Transparency, open source credibility |
| 2026-01-31 | Defer test fixes | Merge completion priority over test alignment |
| 2026-01-24 | Stay with Netlify | Static site, edge CDN optimal |
| 2026-01-24 | Keep static quotes | Volume doesn't justify DB |
| 2026-01-24 | Migrate to Bun | Faster builds, modern tooling |
| 2026-01-24 | Use AXIOMS.md for quotes | Already organized in quote banks |
| 2026-01-24 | Archive detailed prompts | AI workflow evolved |
| 2026-01-24 | Full Bun migration complete | All scripts, builds, tests working |

---

## Quick Reference

**Stages**: `.github/docs/stages.md` — slugs `musical` `gymnastic` `poetic` `romantic` `virtuous`.

**Quote Parsing**: Use `getAxiomsQuotesBySection()` with section titles from PHILOSOPHICAL-AXIOMS.md:
- `"Quote Bank: Sense and Story"`
- `"Quote Bank: Poetic Knowledge"`
- `"Quote Bank: Mission and Adventure"`
- `"Quote Bank: Liturgical Rhythm and Rest"`
- `"Quote Bank: Foundational Wisdom"`

**Image Assets**: All images in `lib/assets.ts` manifest. Collections in `public/images/`:
- `adventure/` — outdoor, exploration imagery
- `art-sacred/` — religious art, icons
- `beatrix-potter/` — musical-mode illustrations
- `landscapes/` — nature, contemplative scenes
- `medieval-tales/` — chivalric, gymnastic and romantic themes
- `otto-of-the-silver-hand/` — medieval youth adventure
- `robin-hood/` — adventure, heroism
- `sacred-texts/` — scripture, manuscripts
- `winnie-the-pooh/` — musical-mode classics

**Build Commands**:
```bash
bun install          # Install dependencies
bun run dev          # Development server
bun run build        # Production build
bun run test         # Run tests
```
