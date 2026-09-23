# DESIGN.md

Visual authority for this surface. Product truth lives in `PRODUCT.md`. Do not mix them.

Philosophies live in `design-global` (prize first, then the walk; world as the medium). This file paints only what that skill allows — one world, one ground, one ink, one accent. No "and also a second aesthetic."

Fill every section before Pass B.

Live tokens from `tailwind.config.ts`, `app/layout.tsx`, `app/globals.css`. Older names in `.github/docs/design-system.md` (Playfair / Merriweather / Lato as loaded families) are leftovers. Code wins.

## Surface

- Product / repo: Senior Schools Network (`merimeesoftware/Senior-Schools-Network`)
- Surface name: site
- Visitor mode: Persuade (primary) + Read (secondary)
- One-sentence world: an enclosed garden of wonder — parchment, forest, and gold; classical Catholic humanism, not SaaS chrome

## Prize and path

Bind `design-global`. Names only until a shared kit exists.

- Two-second prize (want + winning + door, readable with motion off): type on the first viewport must name formation and the school door. Live hero is a full-bleed landscape plus rotating quotes; the prize line is missing. Fix in copy (`PRODUCT.md`), not by adding a second aesthetic. `(proposed)`
- Door / direct CTA placement (first viewport): hero button row (`HeroSection` `showButtons`)
- Rooms (named in type; skippable): Home, Philosophy, Schools & Programs, Engage, Texts, Contact, Privacy
- Directory / `ChamberDoor` equivalent (header or persistent chrome): `components/layout/Navigation.tsx` — Home, Philosophy, Schools & Programs, Engage
- Totem (one object per room, or none): landscape / enclosed-garden hero plate; school crest on directory cards
- Still plate / `RoomStill` (what reduced-motion and weak GPU see): parchment ground, heading type, still hero image, gold/forest buttons. No volume required.
- Volume (optional enhancement of the plate — none | later | this pass): later (hero vertical pan and quote parallax exist; they are weather, not the catalog)
- Sound (off by default): off
- Local names for kit primitives used here (`Threshold`, `Arrival`, `ShelfRow`, `GuideAsk`): `HeroSection` (threshold), `Navigation` (chamber doors), `QuoteImageBreak` (arrival / still), `SectionHeading` / `InteractiveStages` (shelf), `CTAButton` (guide ask)

## Anti-references

What this must not resemble. Be specific.

- Not: purple-to-blue AI gradients, Inter-as-voice, glassy SaaS dashboards
- Not: Netflix row catalogs or mined spatial puzzles as the only path
- Not: a second dark-mode luxury skin on top of parchment

## Type

- Display: IM Fell English (`--font-heading`, `font-heading` / legacy `font-playfair`)
- Body: EB Garamond (`--font-body`, `font-body` / legacy `font-merriweather`)
- Mono (if any): none
- Accent script: Petit Formal Script (`--font-accent`) — wordmark only, not body
- Scale notes: `text-hero` 3rem / 1.2 / -0.02em; `text-display` 2.5rem; body 1rem / 1.6; body floor `text-body-sm` 0.875rem. Headings are heading face; UI chrome currently still uses `font-lato` which aliases to the heading face.
- Rules: never use Inter as the voice of the product unless this section names it

## Color

- Ground: parchment `#F5F1E9` (light `#FDFDFD`, dark `#E8E2D5`)
- Ink: charcoal `#4A4A4A`
- Muted ink floor: `text-charcoal/70` (do not drop secondary text below this)
- Accent (one): gold `#CDAF6F` (light `#E5D4A6`, dark `#B89A5A`)
- Accent jobs: links, quote rules, focus rings, primary button text on forest
- Forest `#3B5A3E` is live chrome (headers, primary button fill, nav hover). One-accent law wants gold only; forest is already shipped. Human must decide whether forest stays as ground-of-chrome or yields. `(proposed)`
- Dark mode: no
- Forbidden: purple-to-blue AI gradients, rainbow accents, gradient text
- Mode tints (room color in the plate/numeral, not a second brand): live tokens are still four (`nursery`, `gymnasium`, `poetic`, `spiritual`). Locked modes are five (`musical`, `gymnastic`, `poetic`, `romantic`, `virtuous`). Map `nursery` → musical. Do not invent a sixth. Hex for romantic/virtuous is unset. `(proposed)`
- Liturgical season CSS variables exist on `<html data-season>` (`app/globals.css`). They may tint, not replace, ground/ink/accent.

## Density and space

- Internal pad default: cards `p-6` / `p-8` (`card`, `card-elevated`); prefer tightening toward `p-5` on new work
- Block gap: `py-20` / `py-section` (5rem) between major regions; `gap-8` on the three-path grid
- Radius: `rounded-organic` 8px, `rounded-organic-lg` 12px, `rounded-organic-xl` 16px
- Border language: hairline `border-charcoal/10` plus left-accent bars (`border-l-4` stage color, `border-l-4 border-gold` on quotes). No heavy chrome frames.

## Elevation

- Cards / panels: `shadow-organic` (`0 4px 6px rgba(0,0,0,0.1)`), parchment-light fill
- Sticky / overlay: nav is absolute over the hero with a dark gradient wash, not a solid bar
- Shadows: layered and quiet (`organic` → `organic-md` → `organic-lg`). Do not use `shadow-lg` as decoration.

## Motion

- Budget: present
- Allowed: 200ms color/shadow on buttons; accordion 0.2s height; `FadeIn` via IntersectionObserver; quote fade 0.3s
- Live extra: hero `vertical-pan` keyframe; `QuoteImageBreak` parallax; card `hover:-translate-y-1`. Keep as weather. Do not add looping pulse.
- Forbidden: looping pulse dots, bounce-in heroes, motion that precedes meaning
- Reduced motion: honor `prefers-reduced-motion` (`.animate-fadeIn` already does). Extend to hero pan and parallax when touching those files. `(proposed)`

## Components

- Primitive source: `@/components/ui/*` (CTAButton, Accordion, FadeIn, SectionHeading, StageBadge) plus layout/content/interactive/media/philosophy
- Do not freehand: dialogs, dropdowns, date pickers. Accordion is Radix `@radix-ui/react-accordion`.
- Patterns that belong here: QuoteCard, QuoteImageBreak, HeroSection, Networks/Schools filters, InteractiveStages, scripture waypoints in the footer
- Patterns that do not: chat bubbles, dashboard KPI cards, auth shells

## Interaction

Every clickable element:

- Hover: gold on parchment/forest (`hover:text-gold`, `hover:bg-forest-dark`); primary fill darkens to `forest-dark`
- Active: `scale-[0.98]` or the token named here — not yet on most buttons. Add when touching a control. `(proposed)`
- Focus-visible: `.focus-visible-ring` / `focus:ring-2 focus:ring-gold` — never outline-none without a replacement

## References

Put files in `design/refs/` and list them.

1. (none in-repo)
2.
3.
4.

What to steal from the refs: density / type scale / border contrast / micro-padding. What not to steal: their brand color, their logo lockup, their copy.

In-repo stills to match, not a second mood board: `public/images/landscapes/`, `public/images/art-sacred/`, `public/assets/logos/ssn-placeholder-logo.svg`. Written IA in `.github/docs/design-system.md` is a leftover; this file wins on look.

## Unification notes

Leave blank until a later pass sits this file next to other surfaces.

- Shared tokens we might extract later: parchment / forest / gold naming; organic radius and shadow
- Must stay unique to this surface: IM Fell + EB Garamond + Petit Formal Script; enclosed-garden world; five-mode tints
