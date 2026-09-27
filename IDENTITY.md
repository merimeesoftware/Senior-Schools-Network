# IDENTITY.md

Visual authority for the Senior Schools Network site. Product truth lives in `PURPOSE.md`. Do not mix them.

Philosophies live in `DESIGN.global.md` (prize first, then the walk; world as the medium). This file paints only this surface: one world, parchment ground, charcoal ink, forest action, one gold accent.

Tokens below are the ones already committed in `tailwind.config.ts`, `app/layout.tsx`, and `app/globals.css`. Do not invent a second palette or type family.

## Surface

- Product / repo: Senior Schools Network (`merimeesoftware/Senior-Schools-Network`)
- Surface name: site
- Visitor mode: Persuade + Read (house assignment in `DESIGN.global.md`)
- One-sentence world: A matte enclosed garden — aged paper, forest green, one gold light — built for reading.

## Prize and path

Bind `DESIGN.global.md`. The prize sentence and button verbs are `PURPOSE.md`. This section only places them.

- Two-second prize: the locked public threshold from `PURPOSE.md` (want + direct CTA), readable with motion off. Do not write a second prize line here.
- Door / direct CTA placement: first viewport. Primary action uses the forest button. One transitional action may sit beside it.
- Rooms (named in type; skippable): Home (`/`), Philosophy (`/philosophy`), Schools & Programs (`/network-directory`), Engage (`/engage`). Texts (`/texts/[slug]`), Contact (`/contact`), and Privacy (`/privacy`) are rooms off the header.
- Directory / header: `Navigation` is the persistent door row. Wander is not required.
- Totem: none. No 3D object. The wordmark is type, not a toy.
- Still plate: the static pages themselves. There is no volume layer.
- Volume: none.
- Sound: off. Do not add audio.
- Local names: `HeroSection` (threshold), `Navigation` (door row), `ContentContainer` (reading measure), `QuoteCard` / `QuoteImageBreak` (still plates inside the read).

## Anti-references

- Not glassy, gradient-text, or SaaS card chrome. Matte paper, hairline borders, quiet shadow.
- Not a purple-to-blue AI gradient, rainbow accent, or second aesthetic beside the garden.
- Not Netflix rows, dense app chrome, or a spatial riddle in front of **Find a School**.
- Not Playfair Display, Merriweather, or Lato as a new stack. Those names survive only as Tailwind aliases onto the live families below.

## Type

Loaded in `app/layout.tsx` via `next/font`:

| Role | Family | CSS variable | Tailwind |
|------|--------|--------------|----------|
| Display / headings | IM Fell English | `--font-heading` | `font-heading` |
| Body | EB Garamond | `--font-body` | `font-body` |
| Accent script | Petit Formal Script | `--font-accent` | `font-accent` |

Legacy aliases in `tailwind.config.ts` (`font-playfair`, `font-merriweather`, `font-lato`) point at those variables. `font-lato` currently resolves to the heading variable. Do not load a sans family to “fix” the alias.

Scale (`tailwind.config.ts`):

| Token | Size | Line height | Use |
|-------|------|-------------|-----|
| `text-hero` | 3rem | 1.2 | Hero |
| `text-display` | 2.5rem | 1.2 | Page title |
| `text-heading-1` | 2rem | 1.3 | H1 |
| `text-heading-2` | 1.5rem | 1.4 | H2 |
| `text-heading-3` | 1.25rem | 1.4 | H3 / card title |
| `text-body-lg` | 1.125rem | 1.6 | Lead |
| `text-body` | 1rem | 1.6 | Body |
| `text-body-sm` | 0.875rem | 1.5 | Meta, captions |

Rules: headings use IM Fell; long reading uses EB Garamond. Italics for quotations. Drop caps only in narrative sections. Uppercase sparingly. Headings scale down on small screens. Body floor is 16px. Petit Formal Script is rare ornament, not UI chrome.

## Color

Ground, ink, action, accent — from `tailwind.config.ts`.

| Token | Hex | Job |
|-------|-----|-----|
| `parchment` | `#F5F1E9` | Ground |
| `parchment-light` | `#FDFDFD` | Cards |
| `parchment-dark` | `#E8E2D5` | Quiet bands |
| `charcoal` | `#4A4A4A` | Ink |
| `forest` | `#3B5A3E` | Headers, primary buttons, borders |
| `forest-dark` | `#2A4129` | Hover on forest |
| `forest-light` | `#4A6B4D` | Soft forest fill |
| `gold` | `#CDAF6F` | Accent: links, quote rules, focus, icons |
| `gold-light` | `#E5D4A6` | Highlight |
| `gold-dark` | `#B89A5A` | Accent hover |

- Muted ink floor: charcoal on parchment. Do not drop body text below the contrast already used (`charcoal` / `charcoal/70` on parchment). Target WCAG AA 4.5:1 for text.
- Accent jobs: links, quote borders, focus rings, small ornaments. Gold is not a second button system competing with forest. Secondary buttons may use gold fill with charcoal text (`btn-secondary` in `app/globals.css`).
- Dark mode: no.
- Forbidden: purple-to-blue AI gradients, rainbow accents, gradient text, glossy glass as the brand.

### Mode color tokens (current UI, not a new palette)

These five tokens are the live network modes in `tailwind.config.ts`, in the locked order. Public mode names are `PURPOSE.md`: musical → gymnastic → poetic → romantic → virtuous. Places are paint only (garden, gymnasium); they are not mode names. Hexes document the committed palette. They are not the taxonomy.

| Token | Default | Light | Dark |
|-------|---------|-------|------|
| `musical` | `#A8C4D4` | `#C5DBE6` | `#8AACBE` |
| `gymnastic` | `#7A5C3E` | `#9A7B5D` | `#5A4029` |
| `poetic` | `#8B4C4C` | `#A56B6B` | `#6B3232` |
| `romantic` | `#7C3F4E` | `#A86B78` | `#5C2C38` |
| `virtuous` | `#3E5C48` | `#6B8A74` | `#2C4334` |

Legacy class aliases, not mode names: `nursery` → `musical`, `gymnasium` → `gymnastic`. Same hexes, so older classes still paint.

`spiritual` (`#B8A8C4` / light `#D0C5D9` / dark `#9B8AAF`) is liturgical chrome only. It is not a network mode.

### Seasonal shifts

`app/globals.css` sets `--color-primary`, `--color-gold`, and `--color-parchment` from `[data-season]` on `<body>` (Tridentine seasons in `lib/utils/liturgical.ts`). That is a committed shift of the ground for the year, not a second brand. Most chrome still uses the Tailwind parchment / forest / gold / charcoal tokens above. `:root` `--color-primary` is `#4A7A4A`, which is not the same hex as Tailwind `forest`. Do not add another season color in this file.

## Density and space

| Token | Value | Use |
|-------|-------|-----|
| `py-section` / `spacing.section` | 5rem | Large section padding |
| `py-section-sm` | 3rem | Compact section |
| `gap-content` | 2rem | Block gap |
| `gap-card` | 1.5rem | Card grid |
| `max-w-content` | 65ch | Long reading |
| `max-w-prose` | 75ch | Standard measure |
| Wide | 80rem | Hero, galleries |
| Radius `organic` / `organic-lg` / `organic-xl` | 8px / 12px / 16px | Buttons, cards, heroes |
| Touch target | 44×44px minimum | Controls |

Breakpoints are Tailwind defaults (`sm` 640, `md` 768, `lg` 1024, `xl` 1280, `2xl` 1536). Mobile stacks first. No horizontal scroll.

Border language: hairline `border-charcoal/10` on cards; 2px forest or gold where a control or quote needs a rule. No heavy frames. Optional `✦` on `SectionHeading` via the decorated prop.

## Elevation

Shadows from `tailwind.config.ts` (low opacity, matte):

| Token | Value |
|-------|-------|
| `shadow-organic` | `0 4px 6px rgba(0, 0, 0, 0.1)` |
| `shadow-organic-md` | `0 6px 12px rgba(0, 0, 0, 0.12)` |
| `shadow-organic-lg` | `0 10px 20px rgba(0, 0, 0, 0.15)` |
| `shadow-organic-inner` | `inset 0 2px 4px rgba(0, 0, 0, 0.06)` |

Cards use `shadow-organic` and rise to `shadow-organic-md` on hover. Modals and elevated cards may use `shadow-organic-lg`. Do not use `shadow-lg` as decoration.

Header: absolute, gradient from black to transparent, parchment-light type (`Navigation`). Footer: forest ground, parchment type, 4px gold top rule.

## Motion

- Budget: minimal.
- Allowed: color and shadow transitions ~200ms; accordion height 200ms ease-out; fade and slide-in up to 300ms; hero image vertical pan where a hero already uses it.
- Forbidden: looping pulse dots, bounce-in heroes, motion that appears before the prize sentence, autoplay the visitor cannot pause.
- Reduced motion: honor `prefers-reduced-motion` (already used for fade and texture in `app/globals.css`). The still page is the site.

## Components

Primitive source: `components/layout/*`, `components/ui/*`, `components/content/*`, `components/media/*`, `components/interactive/*`, `components/philosophy/*`. Compose from these. Do not freehand a second button, accordion, quote, or image.

| Pattern | Path | Look job |
|---------|------|----------|
| `ContentContainer` | `components/layout/ContentContainer.tsx` | Measure: narrow / normal / wide / full |
| `SectionHeading` | `components/ui/SectionHeading.tsx` | IM Fell headings; optional `✦` |
| `BrandHeader` | `components/layout/BrandHeader.tsx` | Wordmark |
| `Navigation` | `components/layout/Navigation.tsx` | Header doors; mobile drawer |
| `Footer` | `components/layout/Footer.tsx` | Forest band, scripture row |
| `HeroSection` | `components/layout/HeroSection.tsx` | First viewport |
| `CTAButton` | `components/ui/CTAButton.tsx` | primary (forest/gold type), secondary (gold/charcoal), outline |
| `Accordion` | `components/ui/Accordion.tsx` | Collapsible read |
| `QuoteCard` | `components/content/QuoteCard.tsx` | hero / scripture / default / embedded |
| `QuoteImageBreak` | `components/content/QuoteImageBreak.tsx` | Image plus quotation plate |
| `StageBadge` | `components/ui/StageBadge.tsx` | Color chip for the five mode tokens |
| `OptimizedImage` | `components/media/OptimizedImage.tsx` | Manifest image |
| `ImageGallery` | `components/media/ImageGallery.tsx` | Filtered grid |
| `ScriptureCarousel` | `components/content/ScriptureCarousel.tsx` | Rotating waypoints; pause on hover |

Patterns that belong: parchment cards, gold left-rule quotes, forest primary buttons, stage chips only where a filter already uses the five mode tokens.

Patterns that do not: new button variants, chat bubbles, glass panels, a badge color invented outside the five mode tokens and the liturgical `spiritual` chrome.

Button classes in `app/globals.css` (`.btn-primary`, `.btn-secondary`, `.btn-outline`, `.card`, `.quote-block`, `.focus-visible-ring`) are the utility layer. Match them.

## Imagery

Manifest: `lib/assets.ts`. Files: `public/images/` (WebP). Components: `OptimizedImage`, `ImageGallery`.

Collections already in the tree include `art-sacred/`, `beatrix-potter/`, `landscapes/`, `nursery-illustrations/`, `otto-of-the-silver-hand/`, `robin-hood/`, `winnie-the-pooh/`, `adventure/`.

- Painterly, muted, graded toward parchment, forest, and earth. Public-domain classics plus commissioned or generated plates that match that grade.
- Alt text describes what is seen. Caption words, if any, come from `PURPOSE.md` and `public/texts/` — do not invent quotations in this file.
- Hero: priority load, wide. Below the fold: lazy. Default quality 85. Provide a `sizes` attribute.
- Logos and favicon live under `public/assets/logos/`. OG image: `public/og-image-enclosed-garden.jpg` (1200×630).
- Remapping to the five modes is done in the UI. Asset tags in `lib/assets.ts` may still lag. Do not invent new image treatments for that lag.

## Interaction

Every clickable element:

- Hover: forest darkens, gold brightens, or shadow steps from `organic` to `organic-md`, as the existing button and card classes do.
- Active: the same transition. Do not add a new press-scale token in this pass.
- Focus-visible: 2px ring, gold or forest, 2px offset on parchment (`.focus-visible-ring`). Never `outline-none` without that ring.
- Keyboard: Tab through controls, Escape closes the mobile drawer, skip link to `#main-content`.
- Carousels: `aria-live="polite"` and a way to pause.

## Accessibility

WCAG 2.1 AA. Semantic regions (`nav`, `main`, `footer`). Associated form labels. Text scales to 200%. No horizontal scroll. Touch targets at least 44×44px. Contrast: charcoal on parchment for body; gold and forest for controls at least 3:1 against their ground.

## References

No files in `design/refs/` yet. Visual kin already named in the retired design notes, used only as atmosphere: illuminated manuscripts, Beatrix Potter, Howard Pyle, Claude Lorrain, Pre-Raphaelite paint. Steal density and matte paper. Do not steal another product’s type or accent. Do not copy Bonfire’s shelf or Quarto’s studio chrome.

## Unification notes

- Shared tokens we might extract later: none until a house kit exists. Names in `DESIGN.global.md` (`Threshold`, `ChamberDoor`, `RoomStill`) stay names.
- Must stay unique to this surface: parchment / forest / gold, IM Fell + EB Garamond, the enclosed-garden still plate.
