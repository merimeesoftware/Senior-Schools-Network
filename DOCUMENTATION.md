# Documentation Structure - Senior Schools Network

## Overview

This document defines the streamlined documentation architecture for the Senior Schools Network project. Following a consolidation effort in early Phase 3, we reduced documentation sprawl from 9+ files to 5 core documents, creating clear hierarchy and eliminating redundancy while maintaining philosophical alignment with the north star.

**Last Updated**: October 7, 2025  
**Status**: Active (Phase 3 in progress)

---

## Documentation Hierarchy

### Tier 1: Strategic Vision (Immutable Foundation)

These documents define the unchanging philosophical and technical foundations of the project. They are referenced by all other documentation and should only be updated for clarifications, never for tactical changes.

#### 1. README.md (North Star)

**Location**: `/README.md`  
**Purpose**: Immutable philosophical foundation and project vision  
**Owner**: Project Lead  
**Update Frequency**: Rarely (major philosophical refinements only)

**Contents**:
- John Senior's educational philosophy (poetic knowledge, wonder, sensory learning)
- Core concepts: Gymnasium emphasis, three-path system, Catholic fidelity
- Foundational influence of the Integrated Humanities Program (IHP)
- StoryBrand user flows for all three paths
- Guardrails and principles for all development

**Key Principle**: All project decisions must align with this document. If a feature or approach contradicts the README.md, it is out of scope.

**Derivation Chain**: All other documents derive from or reference this north star.

---

#### 2. technical.md (Technical Architecture)

**Location**: `.github/docs/technical.md`  
**Purpose**: Technical stack, architecture patterns, and implementation standards  
**Owner**: Technical Lead  
**Update Frequency**: Quarterly or when major tech decisions change

**Contents**:
- Technology stack (Next.js, Tailwind, react-markdown, Jest)
- Architecture patterns (component-based, static-first, CI/CD)
- Deployment strategy (Netlify primary, GitHub Pages fallback)
- Security and accessibility standards (WCAG AA, CSP headers)
- Development workflow and tooling (ESLint, Prettier, Semgrep, Trivy)

**Key Principle**: Technical implementation must derive from this document. Phases reference it for stack-specific guidance.

**Relationship to README.md**: Technical choices support philosophical goals (e.g., static generation for "repose," Markdown for narrative immersion).

---

### Tier 2: Active Development (Living Documents)

These documents track ongoing work and evolve with each phase. They provide actionable guidance for current development while maintaining historical context.

#### 3. PROJECT_NOTES.md (Development History)

**Location**: `/PROJECT_NOTES.md`  
**Purpose**: Complete development log across all phases  
**Owner**: Development Team  
**Update Frequency**: Daily during active development, phase summaries at completion

**Contents**:
- **Phase 1**: Planning & content gathering (archived)
- **Phase 2**: Core development log with completion summary
  - Environment setup decisions
  - Component library documentation
  - Content integration notes
  - Testing and validation results
  - **Phase 2 Completion Summary**: Consolidated from CHECKLIST.md, includes:
    - Validation status (100% compliance across all criteria)
    - Build results (ESLint, TypeScript, tests, build)
    - Philosophical achievements (wonder, gymnasium, Catholic fidelity)
    - Technical architecture validation
    - Outstanding items for Phase 3
- **Phase 3+**: To be documented as work progresses

**Key Principle**: Single source of truth for "what happened" in each phase. Includes decisions, outcomes, and lessons learned.

**Consolidation Note**: Previously split between PROJECT_NOTES.md and CHECKLIST.md. Now unified for clarity.

---

#### 4. current-phase.md (Active Phase Guide)

**Location**: `.github/docs/current-phase.md`  
**Purpose**: Checklist, objectives, and acceptance criteria for the current phase  
**Owner**: Phase Lead  
**Update Frequency**: Updated at phase transitions (typically weekly)

**Contents** (Phase 3 Example):
- Phase overview and objectives
- Detailed deliverables by category (assets, performance, accessibility, content, SEO, testing)
- Checklists for:
  - Philosophical alignment (90%+ required)
  - Technical alignment (90%+ required)
  - StoryBrand/User Flows (90%+ required)
  - Content readiness (85%+ required)
  - Guardrails compliance (100% required)
- Execution plan (day-by-day breakdown)
- Pass/fail criteria
- Review process
- Success vision

**Key Principle**: This document is the "to-do list" for active work. At phase end, content is summarized and archived to PROJECT_NOTES.md, then current-phase.md is replaced with next phase.

**Derivation Chain**: Derives objectives from README.md philosophy and technical.md architecture.

---

### Tier 3: Reference Documentation (Comprehensive Guides)

These documents provide detailed reference information for design, implementation, and content management. They are consulted during development but don't change frequently.

#### 5. design-system.md (Complete Design Reference)

**Location**: `.github/docs/design-system.md`  
**Purpose**: Complete design system from visual philosophy to component specifications  
**Owner**: Design Lead + Development Team  
**Update Frequency**: Updated when design tokens, components, or patterns change

**Contents** (8 Parts):
1. **Visual Philosophy & Design Language**: Aesthetic principles, inspirations, tone
2. **Information Architecture & User Flows**: Site structure, three-path StoryBrand flows
3. **Component Library**: Detailed specs for all 13+ components (props, usage, accessibility)
4. **Design Patterns**: Reusable composition patterns (hero, card grid, CTA section, etc.)
5. **Asset Requirements & Inventory**: Complete asset tracking and quality standards
6. **Accessibility Standards**: WCAG 2.1 AA compliance, testing checklist
7. **Implementation Notes**: Tailwind config, global CSS utilities, responsive breakpoints
8. **Content Guidelines**: Tone, voice, quote integration, derivation chain

**Key Principle**: Single source of truth for all design decisions, eliminating duplication across multiple files.

**Consolidation Note**: Merges previously separate files:
- `site-blueprint.md` (user flows, IA)
- `visual site plan.md` (colors, typography, imagery)
- `component-inventory.md` (component specs)
- `assets-inventory.md` (asset tracking)

**Relationship to technical.md**: Design system implementation uses tech stack defined in technical.md (e.g., Tailwind for tokens, Next.js for components).

---

## Archived Documentation

### .github/archive/

**Purpose**: Historical reference for completed planning documents

**Contents**:
- `roadmap.md`: Original multi-phase roadmap (Phase 1-4). Now superseded by current-phase.md for active work, but retained for historical context.

**Access**: Read-only. Not actively maintained.

---

## Deleted Documentation

The following files were consolidated and deleted during the Phase 3 reorganization:

- ❌ `CHECKLIST.md` → Merged into PROJECT_NOTES.md (Phase 2 Completion Summary)
- ❌ `docs/site-blueprint.md` → Merged into design-system.md (Part 2: IA & User Flows)
- ❌ `docs/visual site plan.md` → Merged into design-system.md (Part 1: Visual Philosophy)
- ❌ `docs/component-inventory.md` → Merged into design-system.md (Part 3: Component Library)
- ❌ `docs/assets-inventory.md` → Merged into design-system.md (Part 5: Asset Requirements)
- ❌ `docs/` directory → Removed (empty after consolidation)

---

## Document Relationships & Derivation Chain

```
README.md (North Star: Philosophy)
    ↓
    ├─→ technical.md (Architecture derived from philosophical goals)
    │       ↓
    │       └─→ design-system.md (Design implements architecture)
    │
    └─→ current-phase.md (Active work aligned with philosophy)
            ↓
            └─→ PROJECT_NOTES.md (History of execution)
```

**Key Principle**: All documents ultimately derive from README.md. Technical choices support philosophy, design implements architecture, phases execute aligned work, and history records outcomes.

---

## Usage Guidelines

### For Developers

**Starting a new feature?**
1. Check **README.md** for philosophical alignment
2. Consult **technical.md** for stack/architecture decisions
3. Reference **design-system.md** for component specs and patterns
4. Follow **current-phase.md** checklist for acceptance criteria
5. Document decisions in **PROJECT_NOTES.md**

**Encountering a conflict?**
- Hierarchy: README.md > technical.md > design-system.md > current-phase.md
- If lower-tier doc contradicts higher-tier, higher-tier wins
- Update lower-tier doc to align, never change north star without consensus

---

### For Phase Transitions

**At end of current phase:**
1. Summarize outcomes in **PROJECT_NOTES.md** (add "Phase X Completion Summary")
2. Archive phase-specific content from **current-phase.md** into PROJECT_NOTES.md
3. Replace **current-phase.md** with next phase objectives
4. Update **design-system.md** if new components/patterns were added
5. Rarely update **README.md** or **technical.md** (only for major shifts)

---

### For Content Creators

**Adding new content?**
1. Ensure authenticity: All quotes must derive from uploaded texts (no fabrication)
2. Check **design-system.md Part 8** for tone, voice, and content guidelines
3. Follow three-path system from **README.md** (school, home, founding)
4. Maintain non-prescriptive ethos (inspirational, not mandated)
5. Include proper attribution and Scripture ties where relevant

---

## Documentation Quality Standards

### Completeness
- ✅ Each document has clear purpose, owner, and update frequency
- ✅ No orphaned content (everything has a home)
- ✅ No duplication across documents

### Accessibility
- ✅ Markdown formatting for readability
- ✅ Clear headings for navigation
- ✅ Tables for structured data
- ✅ Code examples where relevant

### Alignment
- ✅ All derive from README.md north star
- ✅ Cross-references explicit (e.g., "per technical.md")
- ✅ Conflicts resolved via hierarchy

### Maintenance
- ✅ Last updated date on all docs
- ✅ Review cycle defined (phase-end for active docs)
- ✅ Version control via Git (commit messages reference philosophy)

---

## Benefits of Consolidated Structure

### Before Consolidation (Phase 2)
- 📄 9+ markdown files across 3 locations
- 🔄 Duplication: Component specs in 2 places, visual design in 2 places
- 🤷 Unclear hierarchy: Which doc is source of truth?
- ⏱️ Time-consuming: Search across many files to find info

### After Consolidation (Phase 3)
- 📄 **5 core documents** with clear purpose
- ✅ **Zero duplication**: Each concept has one home
- 📊 **Clear hierarchy**: README.md > technical.md > current-phase.md > PROJECT_NOTES.md
- ⚡ **Faster navigation**: Know exactly where to look

**Metrics**:
- 44% reduction in document count (9 → 5)
- 100% clarity on source of truth
- 0 orphaned content pieces
- Single comprehensive design reference (design-system.md)

---

## Document Ownership & Review

| Document | Owner | Review Frequency | Last Review |
|----------|-------|------------------|-------------|
| README.md | Project Lead | Annually or major changes | Oct 7, 2025 |
| technical.md | Technical Lead | Quarterly | Oct 7, 2025 |
| design-system.md | Design Lead + Dev Team | End of each phase | Oct 7, 2025 |
| current-phase.md | Phase Lead | Phase transition (weekly) | Oct 7, 2025 |
| PROJECT_NOTES.md | Development Team | Daily during phases | Oct 7, 2025 |

---

## Feedback & Improvements

**Found a gap or duplication?**
1. Submit issue via GitHub Issues
2. Tag with `documentation` label
3. Propose specific consolidation or addition
4. Cross-reference north star for alignment

**Proposing new document?**
- Must have clear, unique purpose not covered by existing 5 docs
- Must derive from README.md north star
- Requires consensus from project lead

---

## Conclusion

This streamlined structure ensures the Senior Schools Network documentation remains:

✅ **Aligned**: All docs derive from README.md north star  
✅ **Efficient**: No duplication, clear hierarchy  
✅ **Accessible**: Easy navigation, known sources of truth  
✅ **Maintainable**: Defined owners, review cycles, version control  
✅ **Scalable**: Structure works for Phase 3, 4, and beyond

**Core Principle**: Fewer, more robust sources of truth amplify effectiveness while reducing cognitive overhead—mirroring the project's philosophy of organic simplicity over rigid schemas.

---

**Document Owner**: Project Lead + Development Team  
**Review Cycle**: Updated at major structure changes  
**Last Updated**: October 7, 2025 (Phase 3 Consolidation)
