# 09. Liturgical Seasonality

**Goal**: Implement Tridentine (1962 Rubrics) calendar theming - seasonal colors/themes based on date

**Time**: 6-8 hours  
**Files**: `lib/utils/liturgical.ts` (new), `lib/content/liturgical-themes.json` (new), `app/layout.tsx`, `app/globals.css`, `tailwind.config.ts`

---

## Overview

Homepage colors/themes change based on liturgical season:
- **Advent** (violet) - Preparation
- **Christmas** (white/gold) - Celebration
- **Lent** (violet) - Penance
- **Easter** (white) - Victory
- **Ordinary Time** (green) - Growth
- **November Requiem** (black/violet) - Remembrance (current month!)

---

## Step 1: Date Calculator

`lib/utils/liturgical.ts`:

```typescript
export type LiturgicalSeason = 'advent' | 'christmas' | 'epiphany' | 'septuagesima' | 'lent' | 'easter' | 'pentecost' | 'requiem';
export type LiturgicalColor = 'violet' | 'white' | 'green' | 'red' | 'rose' | 'black' | 'gold';

export interface SeasonInfo {
  season: LiturgicalSeason;
  color: LiturgicalColor;
  theme: string;
  isRequiem?: boolean;
}

// Easter calculation (Gauss algorithm)
export function calculateEaster(year: number): Date {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
}

export function calculateAshWednesday(year: number): Date {
  const easter = calculateEaster(year);
  const ash = new Date(easter);
  ash.setDate(easter.getDate() - 46);
  return ash;
}

export function calculateSeptuagesima(year: number): Date {
  const easter = calculateEaster(year);
  const sept = new Date(easter);
  sept.setDate(easter.getDate() - 63);
  return sept;
}

export function calculateTrinitySunday(year: number): Date {
  const easter = calculateEaster(year);
  const trinity = new Date(easter);
  trinity.setDate(easter.getDate() + 56);
  return trinity;
}

export function calculateAdventStart(year: number): Date {
  const christmas = new Date(year, 11, 25);
  const advent = new Date(christmas);
  advent.setDate(christmas.getDate() - 28);
  while (advent.getDay() !== 0) advent.setDate(advent.getDate() - 1);
  return advent;
}

export function getCurrentLiturgicalSeason(date: Date = new Date()): SeasonInfo {
  const year = date.getFullYear();
  const month = date.getMonth();
  
  const easter = calculateEaster(year);
  const ashWednesday = calculateAshWednesday(year);
  const septuagesima = calculateSeptuagesima(year);
  const trinitySunday = calculateTrinitySunday(year);
  const adventStart = calculateAdventStart(year);
  
  const isBetween = (check: Date, start: Date, end: Date): boolean => {
    return check >= start && check <= end;
  };
  
  // November Requiem (priority)
  if (month === 10) {
    return { season: 'requiem', color: 'black', theme: 'Remembrance of the dead', isRequiem: true };
  }
  
  // Advent
  const adventEnd = new Date(year, 11, 24);
  if (isBetween(date, adventStart, adventEnd)) {
    return { season: 'advent', color: 'violet', theme: 'Preparation for Christ's birth' };
  }
  
  // Christmas
  const christmasStart = new Date(year, 11, 24);
  const christmasEnd = new Date(year + 1, 0, 13);
  if (isBetween(date, christmasStart, christmasEnd)) {
    return { season: 'christmas', color: 'white', theme: 'Joyous celebration of Incarnation' };
  }
  
  // Epiphany
  const epiphanyStart = new Date(year, 0, 14);
  if (isBetween(date, epiphanyStart, septuagesima)) {
    return { season: 'epiphany', color: 'green', theme: 'Divine manifestation' };
  }
  
  // Septuagesima
  const sepTuesday = new Date(ashWednesday);
  sepTuesday.setDate(ashWednesday.getDate() - 1);
  if (isBetween(date, septuagesima, sepTuesday)) {
    return { season: 'septuagesima', color: 'violet', theme: 'Pre-Lent preparation' };
  }
  
  // Lent
  const holySaturday = new Date(easter);
  holySaturday.setDate(easter.getDate() - 1);
  if (isBetween(date, ashWednesday, holySaturday)) {
    return { season: 'lent', color: 'violet', theme: 'Penance and fasting' };
  }
  
  // Easter
  const easterEnd = new Date(trinitySunday);
  easterEnd.setDate(trinitySunday.getDate() - 1);
  if (isBetween(date, easter, easterEnd)) {
    return { season: 'easter', color: 'white', theme: 'Resurrection victory' };
  }
  
  // Pentecost (Ordinary Time)
  return { season: 'pentecost', color: 'green', theme: 'Holy Spirit in Church Age' };
}

export function getSeasonClassName(seasonInfo?: SeasonInfo): string {
  const info = seasonInfo || getCurrentLiturgicalSeason();
  return `season-${info.season}`;
}
```

---

## Step 2: Seasonal Themes

`lib/content/liturgical-themes.json`:

```json
{
  "requiem": {
    "colors": {
      "primary": "#4A4A4A",
      "gold": "#B89A5A",
      "parchment": "#E8DCC8",
      "charcoal": "#2C2C2C"
    },
    "gradients": {
      "hero": "linear-gradient(to bottom, rgba(74,74,74,0.5), rgba(44,44,44,0.7))"
    }
  },
  "advent": {
    "colors": {
      "primary": "#7B2D8E",
      "gold": "#B8860B",
      "parchment": "#D8C8B8"
    },
    "gradients": {
      "hero": "linear-gradient(to bottom, rgba(123,45,142,0.3), rgba(58,48,82,0.5))"
    }
  },
  "christmas": {
    "colors": {
      "primary": "#FFFFFF",
      "gold": "#D4AF37",
      "parchment": "#FFF8E7"
    },
    "gradients": {
      "hero": "linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(212,175,55,0.3))"
    }
  },
  "lent": {
    "colors": {
      "primary": "#5A3A6A",
      "gold": "#8A6A5A",
      "parchment": "#D0C8C0"
    },
    "gradients": {
      "hero": "linear-gradient(to bottom, rgba(90,58,106,0.4), rgba(58,58,58,0.6))"
    }
  },
  "easter": {
    "colors": {
      "primary": "#FFFFFF",
      "gold": "#FFD700",
      "parchment": "#FFFAEB"
    },
    "gradients": {
      "hero": "linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(255,215,0,0.4))"
    }
  },
  "pentecost": {
    "colors": {
      "primary": "#4A7A4A",
      "gold": "#B8860B",
      "parchment": "#E8E0D0"
    },
    "gradients": {
      "hero": "linear-gradient(to bottom, rgba(74,122,74,0.2), rgba(44,74,44,0.3))"
    }
  }
}
```

---

## Step 3: Apply to Layout

`app/layout.tsx`:

```typescript
import { getCurrentLiturgicalSeason, getSeasonClassName } from '@/lib/utils/liturgical';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const seasonInfo = getCurrentLiturgicalSeason();
  const seasonClass = getSeasonClassName(seasonInfo);
  
  return (
    <html lang="en">
      <body 
        className={`${inter.variable} ${playfair.variable} ${lato.variable} ${seasonClass}`}
        data-season={seasonInfo.season}
        data-season-color={seasonInfo.color}
      >
        {children}
      </body>
    </html>
  );
}
```

---

## Step 4: CSS Custom Properties

`app/globals.css`:

```css
:root {
  --color-primary: #4A7A4A;
  --color-gold: #B8860B;
  --color-parchment: #E8E0D0;
  --gradient-hero: linear-gradient(to bottom, rgba(74,122,74,0.2), rgba(44,74,44,0.3));
}

[data-season="requiem"] {
  --color-primary: #4A4A4A;
  --color-gold: #B89A5A;
  --color-parchment: #E8DCC8;
  --gradient-hero: linear-gradient(to bottom, rgba(74,74,74,0.5), rgba(44,44,44,0.7));
}

[data-season="advent"] {
  --color-primary: #7B2D8E;
  --color-gold: #B8860B;
  --color-parchment: #D8C8B8;
  --gradient-hero: linear-gradient(to bottom, rgba(123,45,142,0.3), rgba(58,48,82,0.5));
}

[data-season="christmas"] {
  --color-primary: #FFFFFF;
  --color-gold: #D4AF37;
  --color-parchment: #FFF8E7;
  --gradient-hero: linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(212,175,55,0.3));
}

[data-season="lent"] {
  --color-primary: #5A3A6A;
  --color-gold: #8A6A5A;
  --color-parchment: #D0C8C0;
  --gradient-hero: linear-gradient(to bottom, rgba(90,58,106,0.4), rgba(58,58,58,0.6));
}

[data-season="easter"] {
  --color-primary: #FFFFFF;
  --color-gold: #FFD700;
  --color-parchment: #FFFAEB;
  --gradient-hero: linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(255,215,0,0.4));
}

.hero-gradient {
  background: var(--gradient-hero);
}
```

---

## Step 5: Use in Homepage

`app/(site)/page.tsx`:

```typescript
{/* Hero with seasonal gradient */}
<section className="relative min-h-[85vh] lg:min-h-screen ...">
  <OptimizedImage ... />
  
  {/* Replace fixed gradient with seasonal */}
  <div className="absolute inset-0 z-[1] hero-gradient"></div>
  
  {/* content */}
</section>
```

---

## Validate

- [ ] November shows Requiem theme (muted grays, dimmed gold)
- [ ] Body has `data-season="requiem"` attribute
- [ ] Easter calculation accurate for 2024-2026
- [ ] CSS custom properties update per season
- [ ] Gradient overlay changes smoothly
- [ ] No console errors
- [ ] Test across year (manually change system date)

**Test Easter Dates**:
- 2024: March 31
- 2025: April 20
- 2026: April 5
