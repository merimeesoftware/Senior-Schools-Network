# Technical Overview for Senior Schools Network Platform

## Guiding Principles
- **Simplicity & Elegance**: The design evokes Senior's "hortus conclusus"—a clean, intuitive interface that prioritizes narrative flow and wonder-evoking elements over complexity. This ensures the platform serves as a promotional tool for loose school affiliations, fostering organic connections without imposing schemas.
- **Philosophical Alignment**: Technical choices support poetic knowledge (e.g., immersive, Markdown-rendered excerpts for sensory         integration) and Catholic exclusivity (e.g., content presentation grounded in faith-based themes from uploaded documents).
- **Scalability & Maintainability**: Start with a static-first approach for low overhead, allowing future expansions (e.g., API for school submissions) while integrating CI/CD for efficient iterations.
- **Accessibility & Ethics**: Adhere to WCAG standards (e.g., ARIA labels for interactive elements); minimize data collection to emphasize charity and humility; ensure all outputs respect the north star's focus on soul-centric formation.
- **Open-Source Focus**: Prioritize free, open-source tools to align with humane, distributist principles (per Chesterton's *The Outline of Sanity*), avoiding vendor lock-in and promoting community-driven development.

## Technology Stack
- **Frontend Framework**: Next.js – Chosen for its hybrid static/SSR capabilities, excellent SEO for promoting Senior's ideas, and seamless integration with Markdown for content-heavy pages. It supports the project's narrative flows through optimized routing and static exports, ensuring fast loads that evoke repose.
- **Styling**: Tailwind CSS – Utility-first approach for rapid, consistent designs that mimic natural harmony (e.g., garden-like layouts). It enables mobile-first responsiveness without bloat, aligning with simplicity.
- **Content Management & Interactivity**: react-markdown (with MDX for enhanced rendering) – Selected over react-pdf for excerpt viewers due to its lightweight nature, better searchability, and accessibility. Supports interactive elements like collapsible sections for book excerpts or quote highlights, drawing from documents like *The Restoration of Innocence*. Tables for book lists (e.g., stages of development) will be rendered natively in Markdown.
- **Build Tools**: npm (for dependency management) – Simple and standard; paired with ESLint/Prettier for code quality.
- **Testing**: Jest – Open-source, free, and integrated for unit/integration tests on components (e.g., ensuring excerpt rendering aligns with poetic themes).
- **Code Quality Tools**: ESLint + Prettier (for linting/formatting) and Semgrep (for pattern-based analysis) – These provide high-quality, OSS checks; ESLint enforces React/Next.js best practices, Prettier ensures consistent style, and Semgrep detects code smells/anti-patterns.
- **Security Tools**: Trivy (for vulnerability scanning) + Semgrep (security mode for SAST) – Both OSS/free; Trivy scans dependencies (e.g., npm packages), while Semgrep covers OWASP patterns, ensuring the platform's integrity without complexity.

## Architecture
- **Component-Based Design**: Reusable, modular components (e.g., QuoteCard for integrating excerpts from Tolkien's *Mythopoeia* or Aquinas's *Summa*; BookTable for rendering staged lists from Senior's resources). This promotes organic growth, allowing easy additions like media embeds from resources.md.
- **Data Flow**: Static props fetched from Markdown files (e.g., /content/*.md for excerpts); no initial backend—use getStaticProps in Next.js for pre-rendering. If dynamic features (e.g., affiliation forms) evolve, integrate simple serverless functions.
- **Interactivity**: Minimal JS for user engagement (e.g., form submissions via react-hook-form); Markdown-rendered content with remark plugins for syntax highlighting or embeds (e.g., YouTube videos from excerpts.md).
- **Performance Optimizations**: Next.js Image for lazy-loaded assets (e.g., book covers from PDFs); code-splitting for fast initial loads; caching for static pages to ensure seamless narrative exploration.
- **Security Posture**: Static generation minimizes attack surfaces; use Content Security Policy (CSP) headers; scan for secrets/vulnerabilities in CI/CD. Ethical data handling: No unnecessary tracking; forms collect only essential info (e.g., school affiliation details) with explicit consent.
- **Accessibility Features**: Semantic HTML; ARIA attributes on interactive elements (e.g., expandable excerpts); color contrast compliant with Tailwind; alt text for images derived from document contexts (e.g., "Illustration of poetic knowledge from Hugh of St. Victor").

## CI/CD Integration
Prioritizing CI/CD for automated, reliable workflows, we use GitHub Actions (free for public repos, OSS-friendly, and tightly integrated with your GitHub-based repo). This enables continuous validation of code quality/security, aligning with the project's iterative, wonder-led refinement.

- **Workflow Structure** (.github/workflows/ci.yml):
  - **Triggers**: On push/PR to main/develop branches.
  - **Jobs**:
    - Lint & Format: Run ESLint + Prettier; auto-fix where possible.
    - Test: Execute Jest suites.
    - Quality Scan: Semgrep for code smells/patterns.
    - Security Scan: Trivy for vulnerabilities (e.g., npm audit equivalent).
    - Build: Next.js build/test.
    - Deploy Preview: On PRs, deploy to a preview environment (e.g., Netlify deploy previews).
- **Integration Ease**: All tools run as simple Actions marketplace steps (e.g., `semgrep/semgrep-action`, `aquasecurity/trivy-action`). Example YAML snippet:
  ```
  jobs:
    quality:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v3
        - uses: semgrep/semgrep-action@v1
          with: { config: auto }
  ```
- **Benefits**: Prevents scaffolding waste through automated cleanup (e.g., via scripts in workflow); ensures every commit aligns with north star (e.g., fail on misaligned code via custom ESLint rules for tone/content references).

## Deployment
- **Primary Option**: Netlify – Selected for its free tier, seamless Git integration, and support for static/SSR sites. It handles forms (e.g., affiliation applications) natively, auto-deploys on commits, and provides preview URLs for phases. Aligns with simplicity—drag-and-drop from GitHub; includes basic analytics without invasive tracking.
- **Configuration**: Connect repo to Netlify; set build command (`next build && next export` for static); deploy to custom domain if available. CI/CD hooks: Actions trigger Netlify builds.
- **Fallback**: GitHub Pages – For zero-cost, fully OSS deployment; export static site and push to gh-pages branch via Actions.

## Development Workflow
- **Derivation Chain**: Phase-specific tech docs (e.g., current-phase-technical.md) adapt this overview (e.g., specify Markdown components for excerpts).
- **AI Integration**: Prompts in /prompts reference this doc for constraints (e.g., "Use react-markdown for excerpt viewers; integrate Semgrep in CI/CD").
- **Version Control**: Git branches per phase (e.g., feature/phase-1); PR reviews for alignment checks.
- **Monitoring & Maintenance**: Post-deploy, use Netlify's built-in analytics; manual audits for philosophical fidelity (e.g., ensure content evokes wonder per excerpts.md).

This technical overview ensures the platform remains faithful to Senior's vision, leveraging high-quality OSS tools for a robust, ethically grounded build. Updates should derive from discussions and commit with references to the north star.