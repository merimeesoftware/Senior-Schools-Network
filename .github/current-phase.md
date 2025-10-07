# Phase 1: Planning & Content Gathering

## Overview
This phase focuses on synthesizing the uploaded content from documents such as *The Restoration of Innocence* by John Senior, the "Thousand Good Books" list, excerpts from Hugh of St. Victor, G.K. Chesterton's *The Outline of Sanity*, Tolkien's *Mythopoeia*, Boethius's *The Consolation of Philosophy*, the encyclical *Rerum Novarum*, and Aquinas's *Summa Theologica* (QQ. 84-88). We will outline the site structure, define user flows inspired by the StoryBrand methodology, and integrate guiding quotes from the content and Scripture to move users through the experience. All elements are grounded in Senior's philosophy of poetic knowledge—intuitive, sensory-based apprehension rooted in wonder—and Catholic tradition, emphasizing organic discovery over imposed schemas.

The goal is to create a site blueprint that positions visitors (parents, educators, aspiring school founders) as the "heroes" seeking restoration of innocence in education, with Senior's ideas as the wise "guide." User flows will incorporate quotes to evoke wonder, narrative immersion, and spiritual reflection, drawing directly from the documents. Scripture (from the Douay-Rheims Bible, as recommended in Senior's list) will anchor the flows in eternal truths.

Expected Outcomes:
- A detailed site blueprint (structure and flows) documented here.
- Synthesized content files (e.g., JSON or Markdown for excerpts, book lists in tables).
- Wireframe sketches or descriptions for visual layout.
- Assets list (e.g., images from book covers in PDFs).
- Updated repository ready for Phase 2 prompts.

## Content Synthesis
We begin by reviewing and organizing uploaded content to ensure authenticity:
- **Key Themes Extracted**:
  - Poetic Knowledge: "Poetic knowledge is the attempt to know the way a child knows things, or the way a lover knows the beloved. It gets inside and becomes a part of what is known." (from `content/phase-1-excerpts.md`, Taylor's synthesis of Senior).
  - Wonder and Restoration: "Wonder is the beginning of wisdom. Aristotle stated that 'all men by nature desire to know,' but this desire is first sparked by wonder." (from `content/phase-1-excerpts.md`).
  - Stages of Development: Explanations of the different stages and education proper to each. This can be a good place to have categorized book lists from `content/texts/Thousand Good Books List.md` (e.g., Nursery: Mother Goose; Gymnasium: Robin Hood).
  - Spiritual Grounding: "The Bible. For cultural purposes, there are only two English Bibles: for the Protestants the King James Version and for Catholics the Douay-Rheims." (from Senior's list; see `content/texts/the-restoration-of-innocence.md`).
  - Cultural Critique: "Now we wish it to be understood that our policy is to give him power by giving him these things." (from Chesterton's *The Outline of Sanity*, emphasizing property and independence; reference excerpts compiled in `content/phase-1-excerpts.md`).
  - Faith and Justice: "Every man has by nature the right to possess property as his own." (from *Rerum Novarum*).
  - Intellectual Soul: "The human soul understands itself through its own act of understanding." (from Aquinas's *Summa Theologica*, Q. 88; see `content/texts/summa-1084-1088.md`).
  - Sub-Creation: "The heart of man is not compound of lies, but draws some wisdom from the only Wise." (from Tolkien's *Mythopoeia*; see `content/texts/Mythopoeia.md`).
  - Consolation: "The highest curative in life is the pursuit of Wisdom." (adapted from Boethius's *The Consolation of Philosophy*; reference in `content/phase-1-excerpts.md`).

- **Organized Outputs**:
  - Book Lists: Tables by life stages (e.g., Nursery, Gymnasium) for easy integration.
  - Excerpts: Markdown files with 5-10 key passages per document, tagged for themes (e.g., wonder, liturgical rhythm).
  - Scripture Ties: Selected verses like Ephesians 5:15-16 ("See, brethren, how you walk circumspectly... redeeming the time, because the days are evil") to frame restoration.
  - Assets: Extract book covers/images from PDFs; list media links (e.g., videos, podcasts) in `docs/assets-inventory.md` with sources.

This synthesis ensures the site is deeply rooted in the content, promoting schools organically through inspirational narratives.

## Site Structure Outline
The site adopts a simple, hierarchical structure evoking classical order and natural flow, like Senior's "hortus conclusus" (enclosed garden). It uses a clean, mobile-responsive design with narrative elements (e.g., scrolling sections guided by quotes). No complex features—focus on discovery and connection.

- **Home Page**: Introduction to Senior's philosophy and the network. Hero section with a wonder-evoking quote: "Wonder is the beginning of wisdom" (`content/phase-1-excerpts.md`). Overview of poetic knowledge, call to explore schools/resources.
- **About John Senior**: Biography drawn from prefaces and excerpts, grounded in his vision: "Education is not merely about filling a child’s mind with knowledge; it is about forming their soul" (`content/phase-1-excerpts.md`).
- **Philosophy & Resources**: Core ideas (poetic knowledge, stages of development) with tables of book lists. Sub-sections for excerpts and Scripture ties (e.g., Proverbs 1:7: "The fear of the Lord is the beginning of wisdom").
- **Schools Network**: Directory of existing schools (from your list, primarily high schools/colleges), with profiles highlighting organic alignments. Map or list view.
- **Join the Network**: Application form for affiliation; encouragement for starting schools with informal guidance (e.g., "Find good educators and begin with wonder," per Senior).
- **Blog/Insights**: Articles analyzing content (e.g., Tolkien's sub-creation in education), grounded in documents.
- **Contact**: Inquiry form for outreach, tied to Scripture like Matthew 7:7 ("Ask, and it shall be given you").

Footer: Network ethos quote: "We make still by the law in which we were made" (from *Mythopoeia*).

## User Flows with StoryBrand Integration
User flows are designed using StoryBrand's 7-part framework, positioning the visitor as the "hero" (seeking authentic education), the network/Senior's ideas as the "guide," and restoration of innocence as the "success." Flows guide users through narrative paths, interspersed with quotes from content and Scripture to evoke wonder and spiritual depth. Flows are simple, intuitive, and mobile-friendly.

### StoryBrand Elements Alignment Checklist

| StoryBrand Element | Presence in Current-Phase.md/Site-Blueprint.md | Alignment with Vision/Marketing | Spiritual Formation Link |
|--------------------|------------------------------------------------|--------------------------------|-------------------------|
| **Character (Hero Enters)** | Home page introduces problem (e.g., "Modern education's fragmentation" via Hugh of St. Victor quote). | Strong: Frames user as seeker of authentic education, evoking wonder. Marketing: Draws in via relatable cultural decay. | Hero begins journey toward moral restoration through recognition of spiritual and human emptiness in secular education. |
| **Has a Problem** | Highlights external (decay), internal (loss of wonder), philosophical issues. | Excellent: Ties to poetic knowledge loss, non-prescriptively. User Story: "As a parent, I recognize my child's education lacks wonder and seek alternatives." | Problem rooted in soul fragmentation; lack of liturgical rhythm and sensory-based knowing prevents holistic formation. |
| **Meets a Guide** | Introduces Senior/network as authority, with Scripture (e.g., Matthew 11:28). | Aligned: Network as wise, faith-grounded guide. Marketing: Builds trust through quotes. | Guide embodies Catholic tradition; Scripture anchors guidance in eternal truth, positioning network as spiritual mentor. |
| **Gives a Plan** | Step-by-step: Explore resources → View schools → Apply/Start. | Clear: Organic progression via flows (e.g., Home → Philosophy → Directory). User Story: "As an educator, I follow a simple path to affiliate without rigid requirements." | Plan integrates moral formation through stages of development (nursery, gymnasium); emphasizes educators as formative agents, not schemas. |
| **Calls to Action** | Prominent CTAs: "Explore Schools," "Apply to Join," "Start Your School." | Effective: Mobile-friendly, intuitive. Marketing: Encourages affiliation as success path. | CTAs frame participation as spiritual vocation ("form saints-in-the-making"); ties action to restoration of innocence. |
| **Avoids Failure** | Warns of decay (e.g., Ephesians 5:16 quote). | Subtle: Motivates without fear-mongering, aligning with charitable tone. | Failure = continued soul fragmentation; warnings grounded in Scripture (e.g., "days are evil") call to urgency of faith-rooted education. |
| **Ends in Success** | Vision of restored innocence (e.g., *Mythopoeia* quote). | Poetic: Emphasizes soul formation. User Story: "As a founder, I achieve 'form saints-in-the-making' through network support." | Success = wisdom through wonder, liturgical life, and virtue; Tolkien's sub-creation imagery evokes participation in divine creativity. |

This table ensures every StoryBrand element explicitly ties to spiritual/moral formation, reinforcing the site's purpose as a tool for soul-centric education.

### Primary Flow: Discovery to Affiliation (Parent/Educator as Hero)
1. **A Character (Hero Enters)**: User lands on Home. Problem introduced: Modern education's fragmentation ("The mind, stupefied by bodily sensations... has forgotten what it was," from Hugh of St. Victor in excerpts.md).
2. **Has a Problem**: Highlight external (cultural decay), internal (loss of wonder), philosophical (schema failures) issues. Quote: "Without love, education is nothing" (excerpts.md).
3. **Meets a Guide**: Introduce Senior/network as empathetic authority. Scripture: "Come to me, all you that labour... and I will refresh you" (Matthew 11:28, Douay-Rheims).
4. **Who Gives Them a Plan**: Step-by-step: Explore resources → View schools → Apply/Start. Quote: "Connection and wonder are the driving forces. Love is the anchor" (excerpts.md).
5. **Calls Them to Action**: Prominent CTAs: "Explore Schools," "Apply to Join," "Start Your School."
6. **That Helps Avoid Failure**: Warn of continued decay without action. Quote: "The days are evil" (Ephesians 5:16).
7. **And Ends in Success**: Vision of restored innocence. Quote: "Blessed are the legend-makers with their rhyme of things not found within recorded time" (from *Mythopoeia*).

**Flow Diagram (Text-Based Wireframe)**:
- Home → Click "Learn More" (guided by wonder quote) → Philosophy Page → Interact with book table → CTA: "Find a School" → Network Directory → Profile view → "Apply to Join" form.
- Alternative: Home → "Start a School" section → Encouragement quote ("The highest curative in life is the pursuit of Wisdom," from Boethius) → Contact form.

### Secondary Flow: Resource Exploration (Aspiring Founder as Hero)
1. **Character/Problem**: Seeks inspiration amid educational woes.
2. **Guide/Plan**: Navigate to Resources; plan: Read excerpts → Download lists → Reach out.
3. **Action/Success**: CTA to contact; success: "Form saints-in-the-making" (excerpts.md). Scripture: "Train up a child in the way he should go" (Proverbs 22:6).

**Flow Diagram**:
- Home → "Resources" (quote: "Poetic knowledge synthesizes, brings together, integrates") → Browse excerpts → Download PDF → "Inspired? Contact Us."

All flows emphasize organic progression, with quotes/Scripture as "waypoints" (e.g., overlay modals or section headers) to immerse users in content.

## Text Wireframes with Spiritual Formation Emphasis
The following wireframes describe the visual layout and content structure for each page, with explicit connections to moral and spiritual formation. All elements are designed to foster soul-centric growth through wonder, liturgical rhythm, and sensory engagement.

### Home Page Wireframe
- **Hero Section**: Large background image (e.g., garden or natural landscape evoking "hortus conclusus"). Overlay quote: "Wonder is the beginning of wisdom" (from excerpts.md). Subtitle: "Restoring innocence through poetic knowledge and Catholic tradition."
- **Brief Explainer**: 2-3 sentences introducing Senior's philosophy; emphasizes soul formation over schema. Link to "About John Senior" page.
- **Three CTAs** (prominent buttons):
  1. "Explore Schools" → Network Directory
  2. "Discover Resources" → Philosophy & Resources page
  3. "Start Your School" → Join the Network page
- **Featured Schools/Resources**: Carousel or grid of 3-4 schools with images and 1-sentence descriptions. Section for "Latest Insights" (blog previews).
- **Spiritual Formation Note**: Hero quote anchors user in wonder as prerequisite for wisdom (per Aristotle via Senior); CTAs frame participation as spiritual vocation. Natural imagery evokes innocence and repose, aligning with liturgical rhythm.

### About John Senior Page Wireframe
- **Biography Section**: Photo (if available) and 3-4 paragraphs from excerpts/prefaces; emphasizes his vision of education as soul formation.
- **Key Quotes**: Pull-out box with 2-3 Senior quotes (e.g., "Education is not merely about filling a child's mind...").
- **Related Resources**: Links to Philosophy page and Thousand Good Books List.
- **Spiritual Formation Note**: Biography contextualizes Senior's work within Catholic intellectual tradition; quotes emphasize moral and spiritual aims, grounding network in faith-rooted authority.

### Philosophy & Resources Page Wireframe
- **Tabbed/Accordion Sections**:
  1. **Poetic Knowledge**: Definition, examples from Taylor/Senior; sensory ascent per Hugh of St. Victor.
  2. **Stages of Development**: Table of stages (Nursery, Gymnasium, Poetic, Spiritual) with age ranges, focus, and curated book lists (from Thousand Good Books List.md).
  3. **Excerpts**: Expandable quotes from documents (e.g., Tolkien's *Mythopoeia*, Aquinas's *Summa*, Boethius). Each with attribution and source file reference.
  4. **Scripture Ties**: Selected verses (e.g., Proverbs 1:7, Matthew 11:28) with brief reflections linking to education.
  5. **Media Embeds**: Placeholder for videos/podcasts (listed in assets-inventory.md).
- **Download CTAs**: Buttons to download PDFs of book lists or excerpts (if prepared in Phase 2).
- **Spiritual Formation Note**: Stages table explicitly ties life phases to liturgical/moral development (e.g., Nursery = fables for virtue; Gymnasium = adventure for courage; Poetic = classics for wisdom); Scripture ties frame knowledge as path to holiness. Accordion design encourages contemplative exploration, aligning with poetic mode.

### Schools Network (Directory) Page Wireframe
- **Filter/Search Bar**: By location, grade levels, affiliations (static for Phase 1).
- **School Profiles**: Grid or list view with thumbnails, names, brief descriptions (1-2 sentences), and "Learn More" links (to placeholder profiles).
- **Map View** (optional for Phase 2): Interactive map with pins for each school.
- **CTA**: "Apply to Join the Network" button at bottom.
- **Spiritual Formation Note**: Directory showcases living examples of soul-centric education; profiles emphasize organic implementations of poetic knowledge, inspiring others to participate in restoration. "Learn More" links invite deeper engagement with each school's unique charism.

### Join the Network Page Wireframe
- **Encouragement Section**: 2-3 paragraphs inspiring founders/educators, with quotes (e.g., "The highest curative in life is the pursuit of Wisdom," from Boethius; "Find good educators and begin with wonder," per Senior).
- **Application Outline**: Bulleted list of fields (not a live form in Phase 1): school name, location, contact, brief philosophy statement, alignment with Senior's ideas. Note: "Informal process; we seek mutual support, not uniformity."
- **Scripture Anchor**: Proverbs 22:6 ("Train up a child in the way he should go...").
- **Contact CTA**: Link to Contact page or email placeholder.
- **Spiritual Formation Note**: Encouragement frames affiliation as spiritual act ("form saints-in-the-making"); application process emphasizes charism over checklist, aligning with non-prescriptive ethos. Scripture anchors page in parental/educational vocation as sacred duty.

### Blog/Insights Page Wireframe (Optional for Phase 1)
- **Article List**: Titles, dates, 1-paragraph summaries, "Read More" links.
- **Featured Post**: Highlighted article with image and longer excerpt.
- **Spiritual Formation Note**: Blog deepens understanding of poetic knowledge through analysis (e.g., Tolkien's sub-creation as model for curriculum); each post ties themes to faith and moral formation, extending network's role as spiritual guide.

### Contact Page Wireframe
- **Placeholder Copy**: 1-2 sentences inviting inquiries; Scripture like Matthew 7:7 ("Ask, and it shall be given you").
- **Guidance**: "For questions about affiliation, resources, or starting a school, reach us at [email]."
- **No Live Form** (deferred to Phase 2).
- **Spiritual Formation Note**: Scripture frames contact as invitation to dialogue with guide; emphasizes openness and charity, aligning with network's role as empathetic mentor.

### Footer (All Pages)
- **Network Ethos Quote**: "We make still by the law in which we're made" (from *Mythopoeia*).
- **Links**: Privacy policy placeholder, copyright, social media icons (optional).
- **Spiritual Formation Note**: Footer quote reinforces sub-creation theme, positioning education as participation in divine order; serves as final "waypoint" anchoring user's journey in faith.

## Assets Gathering
- **Images**: Book covers from PDFs; symbolic icons (e.g., garden for hortus conclusus).
- **Media**: List and track media links in `docs/assets-inventory.md`; prepare thumbnails.
- **Additional**: Simple wireframes documented in `docs/site-blueprint.md`; ensure all grounded in documents.

## Next Steps
- Produce Phase 1 prompts in `.github/prompts/phase-1/` and populate `content/phase-1-excerpts.md` with sourced quotes.
- Commit synthesized content to repo.
- Review for alignment: Does it promote without prescribing? (Yes, per north star.)

## Phase 1 Readiness and Validation Checklist

Before proceeding to execution, verify alignment across the following dimensions. This checklist serves as a "definition of done" for Phase 1 planning.

### Philosophical Alignment (95%+ Required)
- [ ] **North Star Adherence**: All documents reflect README.md's core principles: poetic knowledge, sensory-based learning, narrative immersion, natural exploration, and Catholic fidelity.
- [ ] **Non-Prescriptive Promotion**: Content promotes network organically through inspiration, not mandates. No rigid curricula imposed.
- [ ] **Source Traceability**: Quotes, themes, and ideas mapped to repository sources (e.g., excerpts.md, Thousand Good Books List, Mythopoeia, Summa).
- [ ] **Stages of Development**: Book lists and resources organized by life phases (Nursery, Gymnasium, Poetic, Spiritual) with clear educational focus.
- [ ] **Spiritual/Moral Formation**: Explicit ties to liturgical rhythm, virtue cultivation, and soul formation in wireframes and flows.
- [ ] **Catholic Exclusivity**: Maintains fidelity to Catholic tradition via Scripture (Douay-Rheims), encyclicals, and Senior's faith-rooted pedagogy.

### Technical Alignment (90%+ Required)
- [ ] **Phase Boundaries**: No Next.js/Tailwind code in Phase 1 outputs; focus on Markdown files, text wireframes, and planning documents.
- [ ] **Output Formats**: Deliverables include docs/site-blueprint.md, content synthesis (excerpts, book tables), docs/assets-inventory.md, and prompts.
- [ ] **Accessibility**: Wireframes include ARIA notes for collapsibles, semantic headings, and descriptive link text.
- [ ] **Roadmap Alignment**: Timeline matches roadmap.md's Week 1 (Days 1-3) for content gathering and blueprint; no premature tooling setup.
- [ ] **Technical.md Compatibility**: Outputs prepared for future react-markdown rendering, static-first architecture, and simplicity-driven design.

### StoryBrand & User Flow Integration (90%+ Required)
- [ ] **7-Part Framework**: All elements present (Character → Problem → Guide → Plan → Action → Avoid Failure → Success) in current-phase.md and site-blueprint.md.
- [ ] **Hero Positioning**: Visitors (parents, educators, founders) framed as heroes; network/Senior's ideas as empathetic guide.
- [ ] **Narrative Waypoints**: Quotes and Scripture integrated as storytelling anchors in flows (e.g., hero sections, page headers, modals).
- [ ] **User Personas**: Explicit personas documented in site-blueprint.md with demographics, goals, pain points, and success metrics.
- [ ] **User Stories**: Stories for discovery, resource exploration, and affiliation flows documented (e.g., "As a parent, I seek alternatives...").
- [ ] **Marketing Clarity**: Narrative immersion strategy articulated; explains how flows promote network organically through wonder-filled content.
- [ ] **Spiritual Formation Links**: StoryBrand table explicitly connects each element to moral/spiritual aims (e.g., Plan → stages of development; Success → restoration of innocence).

### Content Readiness (85%+ Required)
- [ ] **Excerpts Synthesized**: Key passages from documents organized in content/phase-1-excerpts.md or equivalent; tagged by theme (wonder, liturgical rhythm, etc.).
- [ ] **Book Lists Prepared**: Thousand Good Books List formatted in tables by stage (Nursery, Gymnasium, etc.) with examples.
- [ ] **Scripture Ties Identified**: Selected verses (e.g., Proverbs 22:6, Matthew 11:28, Ephesians 5:15-16) mapped to pages/flows.
- [ ] **Assets Inventoried**: docs/assets-inventory.md lists planned images (e.g., book covers), media links (videos/podcasts), and sources.
- [ ] **Wireframes Documented**: Text-based wireframes for Home, About, Philosophy, Schools, Join, Contact in current-phase.md with spiritual formation notes.

### Guardrails & Instructions Compliance
- [ ] **Instructions.md Adherence**: Content boundaries respected (no fabricated quotes; Catholic fidelity; no prototype school content).
- [ ] **Ethical Focus**: Charitable, non-partisan tone; no moralizing. Treats users as adults pursuing truth.
- [ ] **Privacy/Security**: No secrets, analytics, or data collection in Phase 1 plans.
- [ ] **Tenets Embedded**: Formal tone, content grounding, organic focus maintained throughout documents.

### Execution Readiness
- [ ] **Clear Deliverables**: Blueprint, synthesized content, wireframes, assets inventory, and prompts scoped and described.
- [ ] **Timeline Feasibility**: Week 1 (Days 1-3) timeline realistic for part-time effort; built-in reviews for fidelity.
- [ ] **Iteration Plan**: Validation prompts from instructions.md ready to run; process for refinements without delay outlined.
- [ ] **Team Alignment**: All collaborators (human and AI) understand mission, scope, and source of truth hierarchy (README.md > technical.md > roadmap.md > current-phase.md).

### Pass/Fail Criteria
- **Pass**: ≥90% in Philosophical, Technical, StoryBrand; ≥85% in Content; 100% in Guardrails.
- **Fail**: If any critical gap found (e.g., prescriptive tone, missing StoryBrand elements, fabricated quotes), address immediately before proceeding to execution.

### Review Process
1. Run this checklist after completing planning documents.
2. Cross-reference against README.md, instructions.md, and technical.md.
3. Identify gaps; iterate on current-phase.md and site-blueprint.md.
4. Re-run checklist; pass = ready to execute Phase 1 deliverables.

This checklist ensures Phase 1 outputs provide a poetic, faith-grounded foundation for Phase 2 prototyping, fully aligned with the project's north star.

---

This blueprint sets a poetic, faith-grounded foundation for the site.