/**
 * Schools network data
 * Real schools from Senior Schools Network CSV
 */

import type { Stage } from '@/lib/types/content';

export interface School {
  id: string;
  name: string;
  location: string;
  stages: readonly Stage[];
  type: string;
  description: string;
  website: string;
  admissionsLink: string;
  supportLink: string;
  faith: string[];
  logoPath?: string; // Path to logo in public/assets/logos/schools/
}

/**
 * All schools in the network
 */
export const SCHOOLS: School[] = [
  {
    id: 'st-dunstans-academy',
    name: "St. Dunstan's Academy",
    location: 'United States',
    stages: ['poetic'] as const,
    type: 'High School',
    description:
      "St. Dunstan's Academy provides a comprehensive high school education grounded in classical and Christian principles. Founded on the vision of restoring poetic knowledge and wonder in education, the school emphasizes literature, rhetoric, and virtue formation within a liturgical framework.",
    website: 'https://stdunstansacademy.org/',
    admissionsLink: 'https://stdunstansacademy.org/contact/',
    supportLink: 'https://stdunstansacademy.org/donate/',
    faith: ['Anglican'],
    logoPath: 'Dunston Shield.png',
  },
  {
    id: 'st-josephs-academy',
    name: "St. Joseph's Academy",
    location: 'United States',
    stages: ['poetic'] as const,
    type: 'High School',
    description:
      "St. Joseph's Academy is dedicated to forming young Catholics through a rigorous classical education in the tradition of poetic knowledge. The school integrates faith, virtue, and intellectual excellence to cultivate disciples of Christ who think deeply and live virtuously.",
    website: 'https://www.saintjosephtheworkeracademy.org/',
    admissionsLink: 'https://www.saintjosephtheworkeracademy.org/',
    supportLink: 'https://www.saintjosephtheworkeracademy.org/',
    faith: ['Roman Catholic'],
    logoPath: 'Saint Joseph the Worker Highschool.png',
  },
  {
    id: 'gregory-the-great-academy',
    name: 'Gregory the Great Academy',
    location: 'United States',
    stages: ['poetic'] as const,
    type: 'High School',
    description:
      'Gregory the Great Academy forms high school students in the classical liberal arts tradition with a distinctly Catholic perspective. The school emphasizes the poetic mode of learning, cultivating intellectual virtue, moral character, and spiritual depth.',
    website: 'https://gregorythegreatacademy.org/',
    admissionsLink: 'https://gregorythegreatacademy.org/admissions/',
    supportLink: 'https://gregorythegreatacademy.org/support-the-academy/',
    faith: ['Roman Catholic'],
    logoPath: 'Gregory The Great.png',
  },
  {
    id: 'la-salette-academy',
    name: 'La Salette Academy',
    location: 'United States',
    stages: ['gymnasium', 'poetic'] as const,
    type: 'Middle School & High School',
    description:
      'La Salette Academy serves both middle and high school students, offering classical Catholic education rooted in the Traditional Latin Mass. The school fosters discipline, intellectual formation, and spiritual growth through rigorous academics and liturgical life.',
    website: 'https://www.lasalette.net/',
    admissionsLink: 'https://www.lasalette.net/admissions',
    supportLink: 'https://www.lasalette.net/donate',
    faith: ['Catholic SSPX'],
    logoPath: 'La Salette.png',
  },
  {
    id: 'saint-andrews-academy',
    name: "Saint Andrew's Academy",
    location: 'United States',
    stages: ['poetic'] as const,
    type: 'High School',
    description:
      "Saint Andrew's Academy provides a rigorous classical education rooted in traditional Catholic doctrine and practice. Emphasizing the poetic mode of learning, the school forms young people in virtue, intellectual excellence, and fidelity to the Catholic Faith.",
    website: 'https://saintandrewsacademy.org/',
    admissionsLink: 'https://saintandrewsacademy.org/#sp-puubit',
    supportLink: 'https://saintandrewsacademy.org/support-the-academy',
    faith: ['Catholic SSPX'],
    logoPath: 'St. Andrews.png',
  },
  {
    id: 'st-martins-academy',
    name: "St. Martin's Academy",
    location: 'United States',
    stages: ['poetic'] as const,
    type: 'High School',
    description:
      "St. Martin's Academy offers classical Catholic high school education with emphasis on the humanities, virtue formation, and spiritual life. The school seeks to restore wonder and poetic knowledge as essential modes of learning in the context of Catholic faith.",
    website: 'https://saintmartinsacademy.org/',
    admissionsLink: 'https://saintmartinsacademy.org/#admissions',
    supportLink: 'https://saintmartinsacademy.org/raise-the-rafters/',
    faith: ['Roman Catholic'],
    logoPath: 'Martins Academy.png',
  },
];

/**
 * Get a school by ID
 */
export function getSchoolById(id: string): School | undefined {
  return SCHOOLS.find((school) => school.id === id);
}

/**
 * Filter schools by stage
 */
export function getSchoolsByStage(stage: Stage): School[] {
  return SCHOOLS.filter((school) => school.stages.includes(stage));
}

/**
 * Filter schools by faith tradition
 */
export function getSchoolsByFaith(faith: string): School[] {
  return SCHOOLS.filter((school) =>
    school.faith.some((f) => f.toLowerCase().includes(faith.toLowerCase()))
  );
}

/**
 * Get all unique faith traditions
 */
export function getAllFaiths(): string[] {
  const faiths = new Set<string>();
  SCHOOLS.forEach((school) => {
    school.faith.forEach((f) => faiths.add(f));
  });
  return Array.from(faiths).sort();
}
