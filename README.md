# Senior Schools Network

A static website promoting schools aligned with Dr. John Senior's philosophy of poetic knowledge, sensory-based learning, and Catholic formation.

**Canonical site**: [seniorschools.org](https://seniorschools.org)

Until DNS cutover, the live site is still the Netlify deploy at [seniorschoolnetwork.netlify.app](https://seniorschoolnetwork.netlify.app). Legacy hosts (`seniorschoolnetwork.com`, `seniorschoolnetwork.org`, and their `www` names, plus `www.seniorschools.org`) will 301 to the canonical origin. See [docs/deploy-cloudflare.md](docs/deploy-cloudflare.md).

## Quick Start

```bash
# Install Bun (if not installed)
irm https://bun.sh/install.ps1 | iex   # Windows PowerShell
curl -fsSL https://bun.sh/install | bash   # macOS/Linux

# Install dependencies
bun install

# Start development server
bun run dev
# → http://localhost:3000
```

## Available Commands

| Command | Description |
|---------|-------------|
| `bun run dev` | Start Next.js dev server with hot reload |
| `bun run build` | Build static site to `out/` folder |
| `bun run preview` | Serve built site locally (port 3000) |
| `bun run test` | Run Jest test suite (366 tests) |
| `bun run test:watch` | Run tests in watch mode |
| `bun run test:coverage` | Generate coverage report |
| `bun run lint` | Run ESLint |
| `bun run typecheck` | Run TypeScript type checking |
| `bun run format` | Format code with Prettier |
| `bun run format:check` | Check formatting without changes |
| `bun run deploy:cloudflare` | Optional local `wrangler deploy` (run `bun run build` first). Production CI/CD is Workers Builds |
| `bun run preview:cloudflare` | Optional local `wrangler preview` (run `bun run build` first). Branch previews are Workers Builds |

## Tech Stack

- **Runtime**: [Bun](https://bun.sh) 1.3.6
- **Framework**: Next.js 14.2 (static export)
- **Styling**: Tailwind CSS 3.4
- **Testing**: Jest 30 + React Testing Library
- **Deployment**: Cloudflare Workers + Static Assets via Workers Builds. `netlify.toml` remains until post-cutover cleanup.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── (site)/            # Main site routes
│   │   ├── page.tsx       # Homepage
│   │   ├── philosophy/    # Philosophy section
│   │   ├── schools/       # Schools directory
│   │   ├── texts/         # Essential texts
│   │   └── ...
│   ├── layout.tsx         # Root layout + global metadata
│   ├── sitemap.ts         # Generated sitemap
│   └── robots.ts          # Generated robots.txt
├── components/            # React components
├── lib/                   # Utilities and content helpers
│   ├── assets.ts          # Image manifest
│   ├── markdown.ts        # Markdown/quote parsing
│   └── content/           # Content type definitions
├── public/                # Static assets
│   ├── images/            # Site images
│   └── texts/             # Downloadable PDFs
├── PURPOSE.md             # Product and philosophy truth
├── IDENTITY.md              # Look
├── MISSION.md        # Layers and constraints
├── TECH_STACK.md          # Runtime and deploy
└── DOC_INDEX.md           # Which file owns what
```

## Contributing

### Before You Start

1. Read [DOC_INDEX.md](DOC_INDEX.md) for load order
2. Read [PURPOSE.md](PURPOSE.md) before changing words or modes
3. Read [IDENTITY.md](IDENTITY.md) before changing look, and [MISSION.md](MISSION.md) plus [TECH_STACK.md](TECH_STACK.md) before changing structure or deploy

### Development Workflow

1. Create a feature branch from `main`
2. Make changes with tests where applicable
3. Run full validation before committing:
   ```bash
   bun run typecheck && bun run lint && bun run test
   ```
4. Build and preview to verify:
   ```bash
   bun run build && bun run preview
   ```
5. Open a pull request with clear description

### Code Style

- TypeScript strict mode enabled
- Prettier for formatting (run `bun run format`)
- ESLint with Next.js and accessibility rules
- Components use functional patterns with proper ARIA attributes

## Content System

### Quotes

Quotes are parsed from `public/texts/PHILOSOPHICAL-AXIOMS.md` using `getAxiomsQuotesBySection()`. Each section is tagged for use in specific components (hero, rotating quotes, etc.).

### Images

Static image manifest in `lib/assets.ts`. Images stored in `public/images/` with descriptive filenames.

### Schools Data

School directory defined in `lib/content/network.ts` and rendered via the NetworkFilter component.

## Deployment

**Target**: Cloudflare Workers + Static Assets (assets-only Worker, static `out/`).

**Still in place**: Netlify (`netlify.toml`) until DNS cutover. Do not remove it in the same change that adds Wrangler config.

| | |
|--|--|
| Build | `bun install && bun run build` |
| Output | `out/` |
| Worker config | `wrangler.jsonc` (`name`: `senior-schools-network`) |
| Canonical origin | `https://seniorschools.org` |
| CI/CD | [Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/) only |

Workers Builds is the native Cloudflare↔GitHub connection. Commands live in the dashboard, not in git:

| Branch | Build | Then |
| --- | --- | --- |
| `main` | `bun run build` | `npx wrangler deploy` |
| any other branch | `bun run build` | `npx wrangler preview` |

`npx wrangler preview` publishes a Worker Preview and does not replace the active deployment. Cloudflare comments the Preview URL on the pull request. Host 301s are Bulk Redirects in the Cloudflare dashboard. Workers Static Assets does not support domain-level redirects in `_redirects`.

This repo has no GitHub Actions workflows and does not use repository secrets `CLOUDFLARE_API_TOKEN` or `CLOUDFLARE_ACCOUNT_ID`.

Optional local tools (run `bun run build` first; these scripts do not build):

```bash
bun run deploy:cloudflare
bun run preview:cloudflare
```

Full cutover steps: [docs/deploy-cloudflare.md](docs/deploy-cloudflare.md).

## Documentation

Canon (see [DOC_INDEX.md](DOC_INDEX.md)):

| Document | Purpose |
|----------|---------|
| [PURPOSE.md](PURPOSE.md) | Philosophy, five modes, StoryBrand, public lines |
| [IDENTITY.md](IDENTITY.md) | World, type, color, components, imagery |
| [MISSION.md](MISSION.md) | Layers and constraints |
| [TECH_STACK.md](TECH_STACK.md) | Runtime, CI, deploy |
| [copilot-instructions.md](.github/copilot-instructions.md) | AI agent guardrails |

House law, shared across merimeesoftware and not rewritten for this site: [PRODUCT.global.md](PRODUCT.global.md), [DESIGN.global.md](DESIGN.global.md).

Former notes under `.github/docs/` are removed. Canon lives only in the root files above.

## License

Content © Senior Schools Network. Code available for educational use.

