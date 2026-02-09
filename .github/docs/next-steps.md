# Next Steps & Technical Backlog

> This document tracks potential improvements, shelved features, and technical debt for the Senior Schools Network platform. Items are prioritized by impact and effort. Use this as a living backlog rather than detailed phase plans—AI-assisted development has reduced the need for granular prompts.

**Last Updated**: January 31, 2026

---

## Active Priorities

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

**Commands**:
- `bun run images:convert` — Convert all PNG/JPG to WebP (keep originals)
- `bun run images:convert:clean` — Convert and remove originals
- `bun run images:convert:dry` — Preview what would be converted

### 4. QuoteImageBreak Performance Optimization
**Status**: Shelved  
**Impact**: Low (current implementation works)

Potential improvements:
- Add `IntersectionObserver` to only activate parallax when visible
- Reduce image height from 140vh to 120vh
- Test CSS-only `background-attachment: fixed` alternative

**Note**: Current visual outcome is correct—optimize only if performance issues arise.

---

## Technical Debt

### Testing Coverage
- Current: ~85% pass rate (434 passing, 76 failing)
- Target: 100% pass rate, 60% coverage short-term
- **Failing tests**: `InteractiveStages.crisis.test.tsx` needs updates after component refactor (button text changed from "View Crisis" to "Crisis View", visual indicator features removed)
- **Missing tests**: Navigation, OptimizedImage, ImageGallery, SchoolsFilter, ScriptureCarousel

### InteractiveStages Test Alignment
**Status**: Needs attention  
**Issue**: Component was refactored to use two-button toggle design ("Restoration View" / "Crisis View") but tests still look for old "View Crisis" / "View Solution" button names. Also removed: mode indicator icons, "Crisis Mode" text display.  
**Fix**: Update test file to match current component implementation.

### Structured Data
**Decision**: Shelved  
**Rationale**: For a small network site with ~20 schools, Schema.org markup provides marginal SEO benefit. Rich results (star ratings, contact cards) require review data we don't have. Revisit if organic traffic becomes significant.

### Font Subsetting
- Current: Full Google Fonts via `next/font`
- Potential: Self-host subsetted fonts for ~20KB savings
- **Decision**: Keep current approach—simplicity over marginal gain

---

## Shelved Features

### Database for Quotes/Images
**Decision**: Keep static  
**Rationale**: ~50 quotes and ~47 images don't justify database complexity. Current PHILOSOPHICAL-AXIOMS.md quote banks work well with section-based parsing. Revisit only if:
- Quote volume exceeds 200+
- Admin editing without rebuild becomes essential
- Dynamic personalization is needed

### Render Migration
**Decision**: Stay with Netlify  
**Rationale**: For pure static sites, Netlify's edge CDN and native Next.js plugin are optimal. Render's advantages (databases, SSR) are irrelevant for static architecture. Revisit if:
- SSR/API routes become necessary
- Netlify pricing or features change

### Service Worker / Offline Support
**Decision**: Deferred  
**Rationale**: Low value for content site. Users unlikely to need offline access. Adds complexity.

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

### January 2026 Cleanup
- [x] Deleted redundant `jest.setup.js` (TypeScript version sufficient)
- [x] Moved `test-liturgical.ts` to `lib/utils/__tests__/`
- [x] Added `build-output.txt` to `.gitignore`
- [x] Archived Phase 3 detailed prompts (no longer needed)

### Phase 3 Deliverables
- [x] Asset integration (all placeholder images replaced)
- [x] Accessibility (skip links, focus management, reduced motion)
- [x] SEO metadata (titles, descriptions, Open Graph)
- [x] Sitemap and robots.txt
- [x] Curated image galleries

---

## Workflow Evolution

### Old Workflow (Pre-2025)
1. Create detailed phase plan with checklists
2. Write series of structured prompts
3. AI executes prompts sequentially
4. Manual validation against checklists

### Current Workflow (2026+)
1. Maintain high-level north star (README.md) and design constraints
2. Use conversational AI for implementation
3. Track decisions and shelved items in this backlog
4. Validate with automated tests + spot checks

**Key insight**: Detailed prompts are now obsolete. Modern AI agents can:
- Infer context from codebase structure
- Make reasonable architectural decisions
- Ask clarifying questions when needed
- Self-correct based on errors

**Recommendation**: Keep `.github/prompts/` for complex multi-step tasks or specialized domain knowledge (e.g., philosophical alignment criteria), but don't require prompts for routine development.

---

## Decision Log

| Date | Decision | Rationale |
|------|----------|-----------|
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

**Quote Parsing**: Use `getAxiomsQuotesBySection()` with section titles from PHILOSOPHICAL-AXIOMS.md:
- `"Quote Bank: Sense and Story"`
- `"Quote Bank: Poetic Knowledge"`
- `"Quote Bank: Mission and Adventure"`
- `"Quote Bank: Liturgical Rhythm and Rest"`
- `"Quote Bank: Foundational Wisdom"`

**Potential New Quote Banks** (to derive from `public/texts/`):
- Scripture passages from `QUOTES.md` (Knox translation, organized by theme)
- Chesterton quotes from `1927-GK-Chesterton-The-Outline-of-Sanity.md`
- Boethius on consolation from `Boethius-the-Consolation-of-Philosophy.md`
- Don Bosco on education from `The-Preventative-System.md`
- Tolkien's Mythopoeia from `Mythopoeia.md`

**Image Assets**: All images in `lib/assets.ts` manifest. Collections in `public/images/`:
- `adventure/` — outdoor, exploration imagery
- `art-sacred/` — religious art, icons
- `beatrix-potter/` — nursery stage illustrations
- `landscapes/` — nature, contemplative scenes
- `medieval-tales/` — chivalric, gymnasium themes
- `otto-of-the-silver-hand/` — medieval youth adventure
- `robin-hood/` — adventure, heroism
- `sacred-texts/` — scripture, manuscripts
- `winnie-the-pooh/` — nursery stage classics

**Build Commands**:
```bash
bun install          # Install dependencies
bun run dev          # Development server
bun run build        # Production build
bun run test         # Run tests
```
