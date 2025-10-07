# Site Blueprint (Phase 1)

Derived from README.md (north star), .github/current-phase.md, .github/technical.md, and .github/roadmap.md.

## Purpose
Promote a loose network of Catholic schools aligned with John Senior’s philosophy. Inspire discovery and affiliation; avoid prescriptive curricula.

## Information Architecture
- Home
- About John Senior
- Philosophy & Resources
  - Poetic Knowledge
  - Stages of Development (Book Lists)
  - Excerpts (Markdown-driven)
  - Scripture Ties
  - Media Embeds
- Schools Network (Directory)
- Join the Network (Application/Encouragement)
- Contact

## Primary User Flow (StoryBrand)
1. Hero enters with problem (fragmentation) → guided by Senior’s ideas
2. Plan: Explore resources → View schools → Apply/Start
3. Action: CTAs — Explore Schools, Apply, Start
4. Success: Restoration of innocence (quotes/scripture anchors)

## Quotes/Scripture Waypoints (Sources)
- Mythopoeia ("We make still by the law...")
- Proverbs 22:6; Matthew 11:28; Ephesians 5:15-16
- Hugh of St. Victor and Taylor/Senior on poetic knowledge

## Text Wireframes (Low-Fi)
- Home: Hero quote, brief explainer, three CTAs, featured schools/resources
- Philosophy: Tabs/sections for concepts, table for book lists
- Schools: Filterable list (static for now)
- Join: Encouragement text, outline of application fields (no form in Phase 1)
- Contact: Placeholder copy and guidance (no live form)

## User Personas (StoryBrand Heroes)

### Persona 1: The Seeking Parent
- **Demographics**: Catholic parent (ages 30-45) with children ages 5-12; concerned about cultural decay and fragmented modern education
- **Goals**: Find a school that forms souls, not just minds; education rooted in wonder, faith, and classical beauty
- **Pain Points**: Overwhelmed by standardized curricula; fears loss of innocence in secular systems; seeks authentic Catholic alternatives
- **Success Metrics**: Child enrolled in affiliated school or inspired to homeschool with network resources; experiences restoration of wonder
- **StoryBrand Role**: Hero entering with problem (fragmentation) → guided by Senior's ideas → success (soul formation)

### Persona 2: The Discerning Educator
- **Demographics**: Catholic teacher/administrator (ages 28-55) at independent or Catholic school; trained in traditional or Montessori methods but seeking deeper philosophical grounding
- **Goals**: Align teaching practice with poetic knowledge; integrate liturgical rhythm and sensory-based learning; connect with like-minded educators
- **Pain Points**: Isolated in secular environments; lacks resources for implementing Senior's ideas; uncertain how to balance structure and organic growth
- **Success Metrics**: School joins network; gains access to curated book lists and excerpts; participates in mutual support community
- **StoryBrand Role**: Hero seeking wisdom → guided by network resources/community → success (transformation of practice)

### Persona 3: The Aspiring Founder
- **Demographics**: Catholic visionary (ages 35-60) inspired to start a school; may be parent, former educator, or benefactor; limited experience with school administration
- **Goals**: Launch a school embodying poetic knowledge and Catholic tradition; find informal guidance without rigid curricula; gather resources and encouragement
- **Pain Points**: Overwhelmed by logistics; fears imposing schemas that contradict Senior's organic approach; needs models and mentorship
- **Success Metrics**: School founded with network affiliation; accesses "Thousand Good Books" lists and philosophy excerpts; receives informal support from existing schools
- **StoryBrand Role**: Hero with vision but uncertainty → guided by network encouragement/plan → success ("form saints-in-the-making")

## User Stories

### Discovery Flow Stories
- **As a parent**, I recognize my child's education lacks wonder and seek alternatives that restore innocence through stories, nature, and faith.
- **As an educator**, I want to explore schools aligned with poetic knowledge so I can discern if my institution should join the network or if I should transition to an affiliated school.
- **As a founder**, I am inspired by Senior's ideas but need practical encouragement and resources to start a school without imposing rigid curricula.

### Resource Exploration Stories
- **As a parent**, I want to browse curated book lists (e.g., Nursery: Mother Goose; Gymnasium: Robin Hood) so I can nurture my child's imagination at home.
- **As an educator**, I want to read excerpts from Senior, Tolkien, and Aquinas so I can integrate poetic knowledge into my teaching practice.
- **As a founder**, I want to download resources and reach out for informal guidance so I can launch a school grounded in wonder and Catholic tradition.

### Affiliation Flow Stories
- **As an educator**, I want to apply for network affiliation so my school gains visibility and connects with a supportive community.
- **As a founder**, I want to follow a simple plan (Explore → View Schools → Apply/Start) so I can achieve the success of forming "saints-in-the-making."

## Marketing & Narrative Immersion Strategy
The site functions as a storytelling tool, using quotes and Scripture as "waypoints" to guide users through narrative paths. This approach promotes the network organically by evoking wonder and spiritual reflection, rather than through prescriptive mandates.

### Key Strategies:
- **Quotes as Anchors**: Hero sections, page headers, and modals feature quotes from sources (e.g., *Mythopoeia*: "We make still by the law in which we're made"; Hugh of St. Victor on sensory ascent) to immerse users in poetic knowledge before they encounter practical information.
- **Scripture Ties**: Verses like Proverbs 22:6 ("Train up a child...") and Matthew 11:28 ("Come to me, all you that labour...") frame the network as a faith-grounded guide, positioning affiliation as a spiritual act.
- **Narrative Progression**: User flows mirror StoryBrand's 7-part framework, with each page advancing the "hero's journey" from problem (fragmentation) to success (restoration). CTAs like "Explore Schools" and "Start Your School" serve as plot points.
- **Sensory Language**: Descriptions emphasize experiential elements (e.g., "enclosed garden," "liturgical hikes") to align with poetic, connatural knowing.
- **Non-Prescriptive Tone**: Resources are presented as "inspiration" rather than "requirements," maintaining the organic, educator-driven ethos.

This strategy ensures the site itself embodies Senior's philosophy, making promotion a byproduct of authentic, wonder-filled content.

## Accessibility Notes
- Semantic headings, descriptive link text, ARIA for collapsible sections (Phase 2)

## Content Sources
- content/phase-1-excerpts.md
- content/texts/* (Mythopoeia, Summa, Thousand Good Books List, etc.)

## Out-of-Scope (Phase 1)
- Next.js/Tailwind implementation
- Interactive forms or analytics
