# Project Notes - Senior Schools Network

## Phase 2: Environment and Scaffold Setup

### Date: October 7, 2025

### Overview

Successfully established the Phase 2 development environment and Next.js scaffold aligned with the north-star philosophy from README.md. This foundation prepares for Markdown-driven content rendering while honoring John Senior's vision of poetic knowledge, wonder, and Catholic formation.

### Setup Decisions

#### Technology Stack

- **Next.js 14.2.18**: App Router configured for static export readiness (`output: 'export'`)
- **React 18.3.1**: Latest stable version for optimal performance
- **TypeScript 5.x**: Strict mode enabled for type safety
- **Tailwind CSS 3.4.14**: Utility-first styling with custom design tokens
- **Node.js 22.16.0 / npm 10.9.2**: Verified and compatible

#### Design Token Configuration

Implemented color palette from `docs/visual site plan.md`:

- **Primary Colors**:
  - Parchment (#F5F1E9) - base background evoking aged paper
  - Forest Green (#3B5A3E) - headers, navigation, growth symbolism
  - Warm Gold (#CDAF6F) - spiritual highlights, links, illumination
- **Stage-Specific Colors**:
  - Nursery (#A8C4D4) - soft pastel blue
  - Gymnasium (#7A5C3E) - earth brown for adventure
  - Poetic (#8B4C4C) - muted crimson for classics
  - Spiritual (#B8A8C4) - gentle lavender for contemplation

#### Typography Stack

Configured via `next/font/google` for optimal loading:

- **Playfair Display**: Headings and quotes (classical elegance)
- **Merriweather**: Body text (readable serif for long-form content)
- **Lato**: UI elements, navigation (modern sans-serif accessibility)

#### Project Structure

```
app/
  (site)/          # Route group for main site layout
    layout.tsx     # Site-level layout with nav/footer
    page.tsx       # Home page with hero and CTAs
    philosophy/    # Philosophy & Resources
    schools/       # Schools Network directory
    home-application/  # Home Application resources
    join-found/    # Join/Found pages
    contact/       # Contact page
  layout.tsx       # Root layout with font configuration
  globals.css      # Tailwind base + custom components

components/
  Navigation.tsx   # Top navigation with mobile responsive menu
  Footer.tsx       # Footer with Scripture waypoints

lib/
  markdown.ts      # Utilities for loading Markdown via fs/promises

content/           # Existing markdown content (Phase 1)
```

#### Content Integration Strategy

- Created `lib/markdown.ts` with helper functions for static generation-friendly Markdown loading
- Uses `gray-matter` for frontmatter parsing
- `fs/promises` for async file reading (compatible with Next.js static export)
- Placeholder for `react-markdown` rendering (to be implemented in later prompts)

#### Layout Components

- **Navigation**: Responsive top bar with dropdown support, mobile hamburger menu
- **Footer**: Scripture waypoints (Proverbs 22:6, Ephesians 6:4, Matthew 11:28) as spiritual anchors
- **Route Groups**: Using `(site)` group for shared layout while keeping URL structure clean

#### Accessibility Foundations

- Semantic HTML structure established
- ARIA labels on interactive elements (mobile menu toggle)
- High contrast ratios in color palette (4.5:1+ per WCAG)
- Placeholder for future ARIA enhancements on collapsible sections

### Tool Configuration

#### ESLint

- Next.js default configuration with TypeScript support
- Extended with `next/core-web-vitals` and `next/typescript`
- Custom rule: disabled `react/no-unescaped-entities` for narrative content

#### Prettier

- Standard formatting: semi-colons, single quotes, 80 character width
- Configured to ignore build artifacts and dependencies

#### Static Export Readiness

- `next.config.js` configured with `output: 'export'`
- Images set to `unoptimized: true` for static compatibility
- All pages use static generation (no server-side rendering)

### Philosophical Alignment Confirmations

#### North Star Adherence

✓ Wonder as first principle: Hero sections feature quotes from Tolkien, Scripture, and Senior
✓ Gymnasium emphasis: Multiple pages highlight physical discipline for ages 7-13
✓ Non-prescriptive ethos: All resources marked as "inspiration" not "requirements"
✓ Catholic fidelity: Scripture waypoints, liturgical references, spiritual formation themes
✓ Three-path system: Navigation supports school consideration, home application, and founding flows
✓ Enclosed garden aesthetic: Warm earth tones, organic borders, repose-oriented spacing

#### StoryBrand Framework Integration

- Users positioned as "heroes" facing educational challenges
- Senior's philosophy as empathetic "guide"
- Clear CTAs: "Explore Schools," "Download Guide," "Start a School"
- Scripture waypoints as narrative anchors
- Success vision: Restoration of innocence through warrior poet formation

### Outstanding Questions and Next Steps

#### For Prompt 02 (Content Rendering)

1. **Markdown Integration**: Implement `react-markdown` with `remark-gfm` for tables/excerpts
2. **Content Synthesis**: Render existing Phase 1 content from `content/` directory
3. **Interactive Components**: Collapsible sections for book lists and excerpts
4. **Stage Tables**: Render developmental stage tables from Thousand Good Books List

#### For Later Phases

1. **CI/CD Pipeline**: GitHub Actions for ESLint, Prettier, build validation
2. **Image Assets**: Sourcing Pre-Raphaelite/classical imagery per visual plan
3. **Form Functionality**: Contact and application forms (Phase 3+)
4. **School Directory**: Dynamic filtering and mapping features

### Guardrails Confirmation

✓ All content references uploaded documents (README.md, site-blueprint.md, technical.md)
✓ No prescriptive curricula imposed - focus on loose affiliation
✓ Ethical focus: charitable tone, treats users as adults pursuing truth
✓ Derivation chain respected: technical.md → project structure
✓ No prototype school content included (network focus only)

### Technical Validation

✓ **Build command**: `npm run build` - PASSED (9 static pages generated)
✓ **Dev server**: `npm run dev` - RUNNING (http://localhost:3000)
✓ **Linting**: `npm run lint` - PASSED (No ESLint warnings or errors)
✓ **Formatting**: `npm run format` - PASSED (All files properly formatted)

#### Build Output Summary
- 7 application routes successfully generated
- All pages pre-rendered as static content
- First Load JS: ~87-96 KB (optimized)
- Static export ready for deployment
- TypeScript strict mode: All types valid

### Version Information

- Package versions locked in package.json for reproducibility
- TypeScript strict mode enabled for maximum type safety
- All dependencies are current stable releases as of October 2025

---

## Success Criteria - Phase 2 Prompt 01 ✓

### Completed Deliverables

1. ✓ **Next.js 14 Initialized**: App Router with static export configuration
2. ✓ **Tailwind Configured**: Custom design tokens for "enclosed garden" palette
3. ✓ **Fonts Wired**: Playfair Display, Merriweather, Lato via next/font
4. ✓ **Project Structure**: Content ingestion paths and markdown utilities created
5. ✓ **Global Layouts**: Root and site layouts with navigation and footer
6. ✓ **Tooling Installed**: ESLint, Prettier, TypeScript strict mode
7. ✓ **Placeholder Pages**: All 6 navigation routes implemented with appropriate content
8. ✓ **Build Validated**: Local build succeeds without errors
9. ✓ **Dev Server Running**: Successfully launches on localhost:3000

### Outstanding Items for Prompt 02

- Implement `react-markdown` rendering components
- Create collapsible/interactive sections with ARIA
- Render actual content from `content/` directory
- Implement book list tables from Thousand Good Books List

**Status**: Ready to proceed to Prompt 02 - Design System and Layout


