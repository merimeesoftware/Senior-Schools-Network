# Visual check

Machine stills for a pull request review. The check photographs the static export, or an allowlisted deployed origin, and writes a paste-ready `summary.md`. It does not deploy, and it does not use the Jest suite.

This is the Senior Schools Network port of the marriages-of-grace preview stills check (`scripts/visual-check.mjs`, `scripts/lib/visual-rules.mjs`, `scripts/lib/nav-guard.mjs`, and the visual self-tests). A `build-sha` stamp, phone LCP, comp pixel deltas, and uploading stills to a git branch are not part of this port.

## One command

```bash
bun run stills
```

That runs `bun run build`, serves `out/` on `127.0.0.1` with the Worker's `auto-trailing-slash` and `404-page` behavior, and captures full-page JPEG stills.

Capture a deployed origin instead of building:

```bash
bun run stills -- --url https://<label>-senior-schools-network.<subdomain>.workers.dev
```

Allowed origins, and no others:

- `https://<label>-senior-schools-network.<subdomain>.workers.dev`
- `https://senior-schools-network.<subdomain>.workers.dev`
- `https://seniorschools.org`

Any other host, including localhost passed as `--url`, exits 2. The browser context is locked to that origin. Off-origin navigations and redirects are aborted.

## Flags

| Flag                                       | Meaning                                                                                                           |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| `--url <origin>`                           | Deployed origin. Does not build.                                                                                  |
| `--out <dir>`                              | Output directory. Default `checks-out/<sha7>/`.                                                                   |
| `--dir <static-root>`                      | Serve this directory instead of building.                                                                         |
| `--routes <file>`                          | Route list. Default `scripts/stills/routes.json`.                                                                 |
| `--sha <sha>`                              | Commit recorded in the report. Default `git rev-parse HEAD`.                                                      |
| `--not-found-handling 404-page\|index-200` | `404-page` matches the Worker. `index-200` is the self-test hook for a server that returns 200 for unknown paths. |

## Routes and viewports

Routes live in `scripts/stills/routes.json`:

| Path                 | Still name                      |
| -------------------- | ------------------------------- |
| `/`                  | `home-<w>x<h>.jpg`              |
| `/philosophy`        | `philosophy-<w>x<h>.jpg`        |
| `/texts`             | `texts-<w>x<h>.jpg`             |
| `/texts/<slug>`      | `text-sample-<w>x<h>.jpg`       |
| `/network-directory` | `network-directory-<w>x<h>.jpg` |
| `/engage`            | `engage-<w>x<h>.jpg`            |
| `/contact`           | `contact-<w>x<h>.jpg`           |
| `/privacy`           | `privacy-<w>x<h>.jpg`           |
| `/visual-check-404`  | `not-found-<w>x<h>.jpg`         |

The text slug is taken from the built `out/texts/` (or `public/texts/*.md` when there is no build). `Boethius-the-Consolation-of-Philosophy` is preferred when it is present.

Viewports, all full page:

- `390x667`
- `390x844`
- `1440x900`

Nine routes at three viewports is 27 stills. A page taller than 65000px is scaled so the whole page still fits in one JPEG. `summary.md` names that scale. It is not a hard failure.

## Hard checks

Exit 0 means every hard check passed.

- HTTP: each content route ends on a 2xx response. `/visual-check-404` must be 404.
- Placeholder copy: `[COPY]`, `Lorem ipsum`, or `TODO` in rendered text, hidden text, attributes, or raw HTML.

Exit 1 means a hard check failed. The stills and `summary.md` are still written.

Exit 2 means bad input or setup: the URL is not allowlisted, Chrome failed to start, or the build failed.

A missing Dean comp is not a hard check and is not a pass. It is listed under **No comp** in `summary.md`, one row per skipped route and viewport. When `design/comps/<template>/renders/*-390.webp|png|jpg` or the `1440` file exists, the check writes a labeled side-by-side JPEG, "Comp (Dean)" beside "Build `<sha7>`".

## Output

`checks-out/<sha7>/` is gitignored.

| File                       | Role                                                                      |
| -------------------------- | ------------------------------------------------------------------------- |
| `<route>-<w>x<h>.jpg`      | Full-page still                                                           |
| `<route>-<w>x<h>-comp.jpg` | Side-by-side, only when a comp file exists                                |
| `summary.md`               | Paste into the PR review                                                  |
| `results.json`             | Same facts as JSON, including the commit sha and `local build` or the URL |

## Self-test

```bash
bun run test:stills
```

Planted fixtures in a temp directory prove the exit codes:

| Fixture                  | Exit                                                 |
| ------------------------ | ---------------------------------------------------- |
| Page containing `[COPY]` | 1                                                    |
| Unknown paths return 200 | 1                                                    |
| Off-list host            | 2                                                    |
| Missing comp             | 0, and the route is listed under No comp, not passed |

## CI and attaching stills

`.github/workflows/stills.yml` runs on `pull_request` and `workflow_dispatch`. It installs with `bun install --frozen-lockfile`, runs `bun run test:stills`, then `bun run stills` against the local static build. It uploads `checks-out/` as the `checks-out` artifact. Permissions are `contents: read`. It does not run Jest, deploy, or use secrets.

Workers Builds is still the only deploy. This workflow does not replace it.

To attach stills to a review:

1. Open the workflow run and download the `checks-out` artifact, or use a local `checks-out/<sha7>/`.
2. Paste `summary.md` into the review.
3. Attach the stills the review needs. The phone still is `home-390x667.jpg`. The desktop still is `home-1440x900.jpg`.
