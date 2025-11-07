export type LiturgicalSeason = 'advent' | 'christmas' | 'epiphany' | 'septuagesima' | 'lent' | 'easter' | 'pentecost' | 'requiem';
export type LiturgicalColor = 'violet' | 'white' | 'green' | 'red' | 'rose' | 'black' | 'gold';

export interface SeasonInfo {
  season: LiturgicalSeason;
  color: LiturgicalColor;
  theme: string;
  isRequiem?: boolean;
}

// Easter calculation using Gauss algorithm for Gregorian calendar
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
  
  // November Requiem (priority - entire month)
  if (month === 10) {
    return { season: 'requiem', color: 'black', theme: 'Remembrance of the faithful departed', isRequiem: true };
  }
  
  // Advent (4 Sundays before Christmas)
  const adventEnd = new Date(year, 11, 24);
  if (isBetween(date, adventStart, adventEnd)) {
    return { season: 'advent', color: 'violet', theme: 'Preparation for Christ\'s birth' };
  }
  
  // Christmas (Dec 25 - Jan 13, eve of Epiphany)
  const christmasStart = new Date(year, 11, 25);
  const christmasEnd = new Date(year + 1, 0, 13);
  if (isBetween(date, christmasStart, christmasEnd)) {
    return { season: 'christmas', color: 'white', theme: 'Joyous celebration of Incarnation' };
  }
  
  // Epiphany (Jan 14 - Septuagesima)
  const epiphanyStart = new Date(year, 0, 14);
  const epiphanySept = calculateSeptuagesima(year);
  const epiphanyEnd = new Date(epiphanySept);
  epiphanyEnd.setDate(epiphanySept.getDate() - 1);
  if (isBetween(date, epiphanyStart, epiphanyEnd)) {
    return { season: 'epiphany', color: 'green', theme: 'Divine manifestation to the nations' };
  }
  
  // Septuagesima (3 weeks before Lent)
  const sepTuesday = new Date(ashWednesday);
  sepTuesday.setDate(ashWednesday.getDate() - 1);
  if (isBetween(date, septuagesima, sepTuesday)) {
    return { season: 'septuagesima', color: 'violet', theme: 'Pre-Lenten preparation' };
  }
  
  // Lent (Ash Wednesday - Holy Saturday)
  const holySaturday = new Date(easter);
  holySaturday.setDate(easter.getDate() - 1);
  if (isBetween(date, ashWednesday, holySaturday)) {
    return { season: 'lent', color: 'violet', theme: 'Penance and fasting' };
  }
  
  // Easter (Easter Sunday - day before Trinity)
  const easterEnd = new Date(trinitySunday);
  easterEnd.setDate(trinitySunday.getDate() - 1);
  if (isBetween(date, easter, easterEnd)) {
    return { season: 'easter', color: 'white', theme: 'Resurrection victory' };
  }
  
  // Pentecost/Ordinary Time (all other periods)
  return { season: 'pentecost', color: 'green', theme: 'Holy Spirit in the Church Age' };
}

export function getSeasonClassName(seasonInfo?: SeasonInfo): string {
  const info = seasonInfo || getCurrentLiturgicalSeason();
  return `season-${info.season}`;
}
