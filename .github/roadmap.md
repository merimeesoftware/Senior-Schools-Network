# Development Roadmap for Senior Schools Network Platform

## Overview
This roadmap document outlines the phased development approach for the Senior Schools Network digital platform, aligning with the project's north star (README.md) and technical overview (technical.md). The roadmap emphasizes an iterative, organic process that mirrors John Senior's philosophy of poetic knowledge—fostering wonder through flexible, educator-driven growth rather than rigid schemas. Phases are designed to build incrementally, starting from content grounded in uploaded documents (e.g., *The Restoration of Innocence*, the "Thousand Good Books" list, and excerpts from complementary texts) and progressing to a live, accessible site that promotes loose school affiliations.

The roadmap prioritizes simplicity, with each phase deriving from high-level guides (e.g., technical.md for stack choices like Next.js and Markdown rendering). Estimated timelines assume part-time effort (e.g., 4-6 hours/day) and incorporate CI/CD integration via GitHub Actions for automated quality/security checks (e.g., ESLint, Semgrep, Trivy). Dependencies ensure traceability, and outcomes focus on deliverables that enhance narrative immersion and Catholic fidelity.

Total estimated duration: 2-4 weeks, with flexibility for refinements. Phases include built-in review points to validate alignment with themes like sensory delight and restoration of innocence.

## Roadmap Phases

| Phase | Description & Key Activities | Dependencies | Estimated Timeline | Expected Outcomes & Deliverables |
|-------|------------------------------|--------------|--------------------|----------------------------------|
| **Phase 1: Planning & Content Gathering** | Synthesize content from uploaded documents (e.g., extract excerpts via Markdown files for poetic knowledge themes from Taylor/Hugh of St. Victor; categorize "Thousand Good Books" into tables by stages). Refine site structure (e.g., home, philosophy, network directory) and user flows using StoryBrand methodology, interweaving quotes/Scripture (e.g., Proverbs 22:6 for encouragement sections). Gather assets (e.g., book covers) and create wireframes. Run initial CI/CD setup tests (e.g., lint base repo). | North star (README.md); uploaded documents; instructions.md for guardrails. | Week 1 (Days 1-3) | Updated repo with /content folder (Markdown excerpts, tables); site-blueprint.md with flows/wireframes; assets inventory. Baseline CI/CD workflow committed. This phase ensures content evokes wonder without prescriptive curricula. |
| **Phase 2: Core Development** | Implement foundational components using Next.js and Tailwind (e.g., homepage with hero quote from *Mythopoeia*; philosophy page with react-markdown for excerpts). Integrate interactivity (e.g., collapsible book lists, affiliation forms via react-hook-form). Derive prompts from current-phase.md, executing via Copilot with the prompt loop for cleanup. Run quality/security scans in CI/CD on PRs (e.g., Semgrep for patterns, Trivy for vulnerabilities). | Phase 1 outputs (content Markdown, blueprint); technical.md (stack details). | Week 1-2 (Days 4-7) | Functional prototype in repo (core pages committed to feature branch); initial tests passing in Jest. CI/CD pipeline validating builds. Outcomes include a draft platform showcasing Senior's ideas and school promotions. |
| **Phase 3: Refinement & Testing** | Enhance usability and alignment (e.g., add ARIA labels for accessibility; optimize narrative flows with Scripture anchors like Matthew 11:28). Conduct unit/integration tests (Jest) and manual reviews for poetic coherence (e.g., ensure excerpts foster sensory wonder). Iterate via agentic AI fixes, incorporating cleanup loop to remove scaffolding (e.g., temp files). Run full CI/CD scans (ESLint/Prettier for style, Semgrep/Trivy for security). Gather feedback on preview deploys. | Phase 2 prototype; instructions.md for ethical checks. | Week 2 (Days 8-10) | Polished site with refinements documented in phase-3.md (e.g., bug reports, alignment notes). All tests passing; deployment-ready build. This phase ensures the platform inspires organic affiliations through refined, faith-grounded features. |
| **Phase 4: Deployment & Launch** | Automate deployment via Netlify (primary) or GitHub Pages (fallback), integrating with CI/CD (e.g., auto-deploy on main merge). Add basic monitoring (Netlify analytics) and post-launch tasks (e.g., domain setup). Perform final validation for north star alignment (e.g., no content on prototype school). Document maintenance procedures (e.g., updating Markdown excerpts). | Phase 3 polished site; technical.md deployment config. | Week 3 (Days 11-14) | Live platform online; deployment scripts in repo (.github/workflows/deploy.yml). Post-launch guide in phase-4.md, including monitoring plans. The outcome is a vibrant hub promoting Senior's vision, ready for network growth. |

## Key Dependencies and Milestones
- **Cross-Phase Dependencies**: Each phase builds on prior deliverables (e.g., Phase 2 uses Phase 1's Markdown content for rendering). CI/CD is integrated from Phase 1, running on all commits/PRs to catch issues early.
- **Milestones**:
  - End of Phase 1: Content synthesis complete; blueprint approved.
  - End of Phase 2: Prototype demo in local/VS Code environment.
  - End of Phase 3: All scans/tests green; ready for deploy.
  - End of Phase 4: Site live; initial promotion (e.g., share link via network contacts).
- **Risk Mitigation**: If delays occur (e.g., content extraction challenges), use tools like search_pdf_attachment for deeper dives. Phase reviews include manual checks against north star (e.g., ensure no rigid curricula imposition).

## Iteration and Adaptation
- **Review Loops**: At phase end, run a "validation prompt" (derived from instructions.md) to confirm outputs align with poetic themes.
- **Scalability Notes**: Post-launch, roadmap can extend (e.g., Phase 5: Enhancements like user-submitted school profiles).
- **Tie to North Star**: Phases promote discovery and encouragement, using tech to amplify wonder through grounded content.

This roadmap is a living document—commit updates as phases progress, with references to technical.md for implementation details.