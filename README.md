# Senior Schools Network

A static website promoting schools aligned with Dr. John Senior's philosophy of poetic knowledge, sensory-based learning, and Catholic formation.

**Live Site**: [seniorschoolsnetwork.com](https://seniorschoolsnetwork.com)

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
| `bun run test` | Run Jest test suite |
| `bun run test:watch` | Run tests in watch mode |
| `bun run test:coverage` | Generate coverage report |
| `bun run lint` | Run ESLint |
| `bun run typecheck` | Run TypeScript type checking |
| `bun run format` | Format code with Prettier |
| `bun run format:check` | Check formatting without changes |
| `bun run cf:dev` | Serve the built `out/` directory via Wrangler (run `bun run build` first) |
| `bun run cf:deploy` | Build the static export and deploy production (`wrangler deploy`) |
| `bun run cf:preview` | Build and upload a Worker version with a preview URL (`wrangler versions upload`) |

## Tech Stack

- **Runtime**: [Bun](https://bun.sh) 1.3.6
- **Framework**: Next.js 14.2 (static export)
- **Styling**: Tailwind CSS 3.4
- **Testing**: Jest 30 + React Testing Library
- **Deployment**: Cloudflare Workers Static Assets (Workers Builds; feature-branch preview URLs)

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
│   ├── _headers           # Cloudflare security + cache headers
│   ├── images/            # Site images
│   └── texts/             # Downloadable PDFs
├── wrangler.jsonc         # Cloudflare Workers Static Assets config
└── .github/docs/          # Project documentation
    ├── north-star.md      # Philosophical foundation
    ├── technical.md       # Technical architecture
    ├── design-system.md   # UI/styling guide
    └── next-steps.md      # Backlog and decisions
```

## Contributing

### Before You Start

1. Read [.github/docs/north-star.md](.github/docs/north-star.md) for philosophical context
2. Review [.github/docs/technical.md](.github/docs/technical.md) for architecture decisions
3. Check [.github/docs/next-steps.md](.github/docs/next-steps.md) for current priorities

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

The site is a fully static Next.js export (`output: 'export'`). Hosting is **Cloudflare Workers Static Assets** via **Workers Builds** (Cloudflare pulls from GitHub — no API token in GitHub Actions).

**Worker name**: `senior-schools-network` (must match `wrangler.jsonc`)  
**Asset directory**: `out`  
**Headers**: `public/_headers` is copied into `out/` by the Next export.

### Connect GitHub once (no per-app token)

1. Cloudflare dashboard → [Workers & Pages](https://dash.cloudflare.com/?to=/:account/workers-and-pages) → **Create** → **Import a repository** (or open the Worker → **Settings** → **Builds** → **Connect**).
2. Install the **Cloudflare Workers and Pages** GitHub App on `merimeesoftware` (org owner / GitHub Apps Manager). Limit it to selected repos.
3. Import `Senior-Schools-Network`. Use these build settings:

| Setting | Value |
|---------|-------|
| Production branch | `main` |
| Build command | `bun run build` |
| Deploy command | `npx wrangler deploy` |
| Non-production deploy command | `npx wrangler versions upload` |

4. Under **Settings → Build → Branch control**, enable **Builds for non-production branches**.

After that, later apps on the same GitHub account are “pick the repo” — Cloudflare stores the build token on its side.

### What deploys where

| Git event | Command | Result |
|-----------|---------|--------|
| Push / merge to `main` | `wrangler deploy` | Production Worker (`senior-schools-network.<subdomain>.workers.dev`, then the custom domain) |
| Push to a feature branch / PR | `wrangler versions upload` | A **preview URL** for that version. Cloudflare comments the URL on the PR. |

Preview URLs look like `<hash>-senior-schools-network.<subdomain>.workers.dev`. Each feature branch gets its own live site; they do not overwrite each other (a single shared “dev” Worker would). Preview hostnames are `noindex` via `public/_headers`.

Custom-domain DNS cutover (`seniorschoolsnetwork.com` / `.org`) is a dashboard step after the production `*.workers.dev` URL is verified. Keep `netlify.toml` until Cloudflare is proven in production; rollback is pointing DNS back to Netlify.

Manual / local:
```bash
bun run build && bun run preview          # static files locally
bun run build && bunx wrangler dev        # Wrangler local
bun run cf:deploy                         # production (needs wrangler login)
bun run cf:preview                        # upload a preview version
```

## Documentation

| Document | Purpose |
|----------|---------|
| [north-star.md](.github/docs/north-star.md) | Philosophical foundation and mission |
| [technical.md](.github/docs/technical.md) | Architecture and technical decisions |
| [design-system.md](.github/docs/design-system.md) | Colors, typography, component patterns |
| [next-steps.md](.github/docs/next-steps.md) | Backlog and decision log |
| [copilot-instructions.md](.github/copilot-instructions.md) | AI agent guardrails |

## License

Content © Senior Schools Network. Code available for educational use.

