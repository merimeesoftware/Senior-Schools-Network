/**
 * Network directory data
 * Schools and programs aligned with John Senior's educational philosophy
 */

import type { Stage } from '@/lib/types/content';

/**
 * Type of organization in the network
 */
export type NetworkMemberType = 'school' | 'program';

/**
 * Education level for filtering
 */
export type EducationLevel = 'grade-school' | 'middle-school' | 'high-school' | 'college';

/**
 * Network member interface for schools and programs
 */
export interface NetworkMember {
  id: string;
  name: string;
  location: string;
  stages: readonly Stage[];
  type: NetworkMemberType;
  description: string;
  website: string;
  admissionsLink: string;
  supportLink: string;
  faith: string[];
  logoPath?: string; // Path to logo in public/assets/logos/schools/
  grades: string;
  educationLevels: readonly EducationLevel[];
  coordinates?: { lat: number; lng: number }; // For map display
}

/**
 * Schools in the network
 */
export const SCHOOLS: NetworkMember[] = [
  {
    id: 'st-dunstans-academy',
    name: "St. Dunstan's Academy",
    location: 'Roseland, Virginia, US',
    stages: ['poetic'] as const,
    type: 'school',
    description:
      "St. Dunstan’s Academy, an all-boys Anglican boarding school for grades 9-12, embraces a philosophy of Christian formation through classical academics, farming, and skilled trades, guiding young men toward godliness via prayer, song, study, apprenticeship, and rites of passage. Rooted in Catholic and Western traditions, it cultivates poetic knowledge of the True, Good, and Beautiful through deep liturgical rhythm and sensory immersion in nature, including farming and outdoor activities like woodlands obstacle courses and archery. Holistic formation integrates wonder in unique spaces such as tree houses, emphasizing play, leisure, and good work to inspire joy and intellectual virtue.",
    website: 'https://stdunstansacademy.org/',
    admissionsLink: 'https://stdunstansacademy.org/contact/',
    supportLink: 'https://stdunstansacademy.org/donate/',
    faith: ['Anglican'],
    logoPath: 'Dunston Shield.webp',
    grades: 'High School (9-12)',
    educationLevels: ['high-school'] as const,
    coordinates: { lat: 37.8521, lng: -78.9039 },
  },
  {
    id: 'st-josephs-academy',
    name: "St. Joseph's Academy",
    location: 'Ann Arbor, Michigan, US',
    stages: ['poetic'] as const,
    type: 'school',
    description:
      "St. Joseph the Worker Academy, a classical all-boys school inspired by St. John Bosco and Dr. John Senior, forms young men in the image of the Heavenly Father through immersion in beauty, virtue, physical labor, natural sciences, Scripture, and encounters with Christ in the Mass. The curriculum engages the Western Tradition via theology, literature, history, science, mathematics, fine arts, and Latin, while the Bosco Program fosters poetic wonder through poetry, philosophy, and craft mastery as pathways to a beautiful life. Sensory immersion in tangible experiences and arts integration cultivates holistic education of head, heart, and hands, preparing boys as faithful fathers rooted in truth, goodness, and beauty.",
    website: 'https://www.saintjosephtheworkeracademy.org/',
    admissionsLink: 'https://www.saintjosephtheworkeracademy.org/',
    supportLink: 'https://www.saintjosephtheworkeracademy.org/',
    faith: ['Roman Catholic'],
    logoPath: 'Saint Joseph the Worker Highschool.webp',
    grades: 'Middle and High School',
    educationLevels: ['middle-school', 'high-school'] as const,
    coordinates: { lat: 42.2808, lng: -83.7430 },
  },
  {
    id: 'gregory-the-great-academy',
    name: 'Gregory the Great Academy',
    location: 'Elmhurst Township, Pennsylvania, US',
    stages: ['poetic'] as const,
    type: 'school',
    description:
      "Gregory the Great Academy, a private Catholic boys' boarding school for grades 9-12, delivers a liberal arts education in the Catholic tradition, cultivating virtue, faith, and intellect through adventurous encounters with the good, true, and beautiful. Emphasizing the poetic mode of learning, it forms whole and happy men by prioritizing good hearts alongside good minds, fostering growth in wisdom through wonder in a technology-free environment. Integrating sensory immersion via natural world encounters and liturgical rhythm through daily Lauds, chores, classes, Holy Mass, and recreation, the academy weaves narrative into virile, pious formation where students engage in diverse activities from choir to unicycling and animal care.",
    website: 'https://gregorythegreatacademy.org/',
    admissionsLink: 'https://gregorythegreatacademy.org/admissions/',
    supportLink: 'https://gregorythegreatacademy.org/support-the-academy/',
    faith: ['Roman Catholic'],
    logoPath: 'Gregory The Great.webp',
    grades: 'High School (9-12)',
    educationLevels: ['high-school'] as const,
    coordinates: { lat: 41.4472, lng: -75.5712 },
  },
  {
    id: 'la-salette-academy',
    name: 'La Salette Academy',
    location: 'Georgetown, Illinois, US',
    stages: ['gymnasium', 'poetic'] as const,
    type: 'school',
    description:
      "La Salette Academy cultivates Catholic men through academic excellence, duty, discipline, and holiness, inspiring perfection in every action within a framework aligned with Catholic tradition. It fosters poetic knowledge by blending intellectual rigor with spiritual depth, nurturing wonder through communal brotherhood and narrative pursuits of virtue. Sensory immersion via athletics such as cross country, basketball, and rugby, alongside liturgical and student life activities, supports holistic formation, shaping leaders who embody unrelenting virtue and noble ideals.",
    website: 'https://www.lasalette.net/',
    admissionsLink: 'https://www.lasalette.net/admissions',
    supportLink: 'https://www.lasalette.net/donate',
    faith: ['Catholic SSPX'],
    logoPath: 'La Salette.webp',
    grades: 'High School',
    educationLevels: ['high-school'] as const,
    coordinates: { lat: 39.9739, lng: -87.6364 },
  },
  {
    id: 'saint-andrews-academy',
    name: "Saint Andrew's Academy",
    location: 'Verona, Kentucky, US',
    stages: ['poetic'] as const,
    type: 'school',
    description:
        "Saint Andrew's Academy provides a rigorous classical education rooted in traditional Catholic doctrine and practice, emphasizing the poetic mode of learning to form young people in virtue, intellectual excellence, and fidelity to the Catholic Faith. As part of a trio of academies inspired by John Senior's teachings, it integrates wonder through encounters with the good, true, and beautiful, fostering sensory immersion and narrative depth in a supportive community. Holistic formation unites faith, academics, and moral growth, preparing students to live virtuously in alignment with Western and Catholic traditions.",
    website: 'https://saintandrewsacademy.org/',
    admissionsLink: 'https://saintandrewsacademy.org/#sp-vqahlt',
    supportLink: 'https://saintandrewsacademy.org/season-of-growth-campaign/',
    faith: ['Roman Catholic'],
    logoPath: 'St. Andrews.webp',
    grades: 'High School',
    educationLevels: ['high-school'] as const,
    coordinates: { lat: 38.8176, lng: -84.6613 },
  },
  {
    id: 'college-of-st-joseph-the-worker',
    name: 'College of St. Joseph the Worker',
    location: 'Steubenville, Ohio, US',
    stages: ['poetic', 'spiritual'] as const,
    type: 'school',
    description:
        "The College of St. Joseph the Worker embodies the Catholic intellectual tradition, pursuing truth, beauty, and goodness through a liberal arts curriculum integrated with hands-on skilled trades training in areas like carpentry and plumbing. This approach fosters poetic knowledge via the theology of work, emphasizing excellence in craftsmanship and the moral dignity of labor as modeled by Christ. Holistic formation unites head, heart, and hands, preparing debt-free graduates to sanctify families, workplaces, and communities through intellectual, spiritual, and practical virtues.",
    website: 'https://www.collegeofstjoseph.com/',
    admissionsLink: 'https://www.collegeofstjoseph.com/apply',
    supportLink: 'https://www.collegeofstjoseph.com/donate',
    faith: ['Roman Catholic'],
    logoPath: 'St. Joseph the Worker College.webp',
    grades: 'College',
    educationLevels: ['college'] as const,
    coordinates: { lat: 40.3698, lng: -80.6340 },
  },
  {
    id: 'wyoming-catholic-college',
    name: 'Wyoming Catholic College',
    location: 'Lander, Wyoming, US',
    stages: ['poetic', 'spiritual'] as const,
    type: 'school',
    description:
        "Wyoming Catholic College, an intentional and deeply Catholic academic community, heals modern fragmentation by steeping students in wonder and forming them in wisdom through classical learning and the Western tradition. Its philosophy emphasizes poetic knowledge with strong sensory immersion in nature, viewing it as 'God's First Book' via unique outdoor expeditions that foster enchantment and truth. Key programs integrate academics, arts, and liturgical rhythm, cultivating holistic formation in a supportive environment aligned with Catholic ideals.",
    website: 'https://wyomingcatholic.edu/',
    admissionsLink: 'https://wyomingcatholic.edu/admissions',
    supportLink: '',
    faith: ['Roman Catholic'],
    logoPath: 'Wyoming Catholic College.webp',
    grades: 'College',
    educationLevels: ['college'] as const,
    coordinates: { lat: 42.8330, lng: -108.7307 },
  },
  {
    id: 'childrens-tradition',
    name: "The Children's Tradition",
    location: 'Homeschooling',
    stages: ['nursery', 'gymnasium'] as const,
    type: 'program',
    description:
    "The Children's Tradition offers a homeschool curriculum inspired by John Senior and Charlotte Mason, focusing on gymnastic and musical education through sensory-emotional immersion in nature and books. It nurtures wonder and delight in elementary years, providing an embodied classical education that calls students to hard things while fostering poetic knowledge. The program integrates faith and virtue, aligning with narrative and sensory-based learning for holistic child formation.",
    website: 'https://www.thechildrenstradition.com/',
    admissionsLink: '',
    supportLink: '',
    faith: ['Catholic'],
    logoPath: "The Childrens Tradition.webp",
    grades: 'Elementary (K-6)',
    educationLevels: ['grade-school'] as const,
 },
];

/**
 * Programs in the network (non-school organizations)
 */
export const PROGRAMS: NetworkMember[] = [
  {
    id: 'iliad-athletics',
    name: 'Iliad Athletics',
    location: 'United States (National)',
    stages: ['gymnasium', 'poetic'] as const,
    type: 'program',
    description:
        "Iliad Athletics nurtures lifelong fitness grounded in classic American values, transforming physical education to integrate body, mind, and soul through fitness, nature immersion, and character development aligned with classical and Western traditions. It fosters poetic knowledge via wonder in the outdoors as a lifelong playground, emphasizing sensory experiences through strenuous activities and narrative-driven challenges that echo ancient virtues. Unique programs like the immersive Educator Certification Course and youth camps cultivate grit, teamwork, and self-mastery for holistic formation, preparing participants for life's demands beyond the classroom.",
    website: 'https://iliadathletics.com/',
    admissionsLink: 'https://iliadathletics.com/training-and-professional-development/',
    supportLink: '',
    faith: [],
    logoPath: 'Iliad Athletics.webp',
    grades: 'K-12',
    educationLevels: ['grade-school', 'middle-school', 'high-school'] as const,
  },
  {
    id: 'sebaste',
    name: 'Sebaste',
    location: 'Gallup, New Mexico, US',
    stages: ['gymnasium', 'poetic'] as const,
    type: 'program',
    description:
        "Sebaste challenges young men to become great saints through adventure, brotherhood, physical challenge, and prayer, addressing masculinity crises with transformative experiences rooted in devotion, trial, and eternal fraternal bonds within Catholic tradition. It fosters poetic knowledge by emphasizing wonder in transcendent truth, goodness, and beauty, with sensory immersion via raw physical trials and pseudo-monastic retreats featuring shared work, prayer, and narrative reflections. The 9-week SHRINE internship and custom events like ultra-marathon-inspired journeys integrate liturgical rhythm and mentorship, cultivating holistic formation for virtuous leaders who encounter God's love through hardship and community.",
    website: 'https://www.sebaste.org/',
    admissionsLink: '',
    supportLink: 'https://www.sebaste.org/donate',
    faith: ['Catholic'],
    logoPath: 'sebaste-logo-red-w-background.webp',
    grades: 'Middle School to College',
    educationLevels: ['middle-school', 'high-school', 'college'] as const,
    coordinates: { lat: 35.5281, lng: -108.7426 },
  },
];

/**
 * All network members (schools + programs combined)
 */
export const NETWORK_MEMBERS: NetworkMember[] = [...SCHOOLS, ...PROGRAMS];

/**
 * Get a network member by ID
 */
export function getMemberById(id: string): NetworkMember | undefined {
  return NETWORK_MEMBERS.find((member) => member.id === id);
}

/**
 * Filter network members by stage
 */
export function getMembersByStage(stage: Stage): NetworkMember[] {
  return NETWORK_MEMBERS.filter((member) => member.stages.includes(stage));
}

/**
 * Filter network members by type
 */
export function getMembersByType(type: NetworkMemberType): NetworkMember[] {
  return NETWORK_MEMBERS.filter((member) => member.type === type);
}

/**
 * Filter schools by faith tradition
 */
export function getMembersByFaith(faith: string): NetworkMember[] {
  return NETWORK_MEMBERS.filter((member) =>
    member.faith.some((f) => f.toLowerCase().includes(faith.toLowerCase()))
  );
}

/**
 * Get all unique faith traditions
 */
export function getAllFaiths(): string[] {
  const faiths = new Set<string>();
  NETWORK_MEMBERS.forEach((member) => {
    member.faith.forEach((f) => faiths.add(f));
  });
  return Array.from(faiths).sort();
}

/**
 * Get counts by type
 */
export function getNetworkCounts(): { schools: number; programs: number; total: number } {
  return {
    schools: SCHOOLS.length,
    programs: PROGRAMS.length,
    total: NETWORK_MEMBERS.length,
  };
}

/**
 * Education level metadata for display
 */
export const EDUCATION_LEVEL_METADATA: Record<
  EducationLevel,
  { label: string; shortLabel: string }
> = {
  'grade-school': { label: 'Grade School', shortLabel: 'K-8' },
  'middle-school': { label: 'Middle School', shortLabel: '6-8' },
  'high-school': { label: 'High School', shortLabel: '9-12' },
  college: { label: 'College', shortLabel: 'College' },
};

/**
 * Filter network members by education level
 */
export function getMembersByEducationLevel(level: EducationLevel): NetworkMember[] {
  return NETWORK_MEMBERS.filter((member) => member.educationLevels.includes(level));
}

/**
 * Get all members that have coordinates (for map display)
 */
export function getMembersWithCoordinates(): NetworkMember[] {
  return NETWORK_MEMBERS.filter((member) => member.coordinates !== undefined);
}
