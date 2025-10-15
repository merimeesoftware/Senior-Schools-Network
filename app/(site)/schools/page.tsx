import QuoteCard from '@/components/QuoteCard';
import SectionHeading from '@/components/SectionHeading';
import ContentContainer from '@/components/ContentContainer';
import CTAButton from '@/components/CTAButton';
import SchoolsFilter from '@/components/SchoolsFilter';
import type { School } from '@/components/SchoolsFilter';
import { getQuotesBySource } from '@/lib/content';
import OptimizedImage from '@/components/OptimizedImage';
import { getRandomAsset } from '@/lib/assets';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Schools Directory',
  description:
    "Discover Catholic schools aligned with John Senior: poetic knowledge, gymnasium formation, and wonder-filled tradition.",
  alternates: { canonical: '/schools' },
  openGraph: {
    title: 'Schools Directory - Senior Schools Network',
    description:
      'Find affiliated schools by stage focus: nursery, gymnasium, poetic, or spiritual formation. Ephesians 6:4 flow.',
    url: 'https://seniorschoolsnetwork.org/schools',
    images: [{ url: '/og-image-enclosed-garden.jpg', width: 1200, height: 630 }],
  },
};

// Mock school data (placeholder until real dataset available)
const MOCK_SCHOOLS: School[] = [
  {
    id: 'school-1',
    name: 'Example Classical Academy',
    location: 'Placeholder City, State',
    stages: ['gymnasium', 'poetic'] as const,
    type: 'High School Boarding',
    description:
      'A placeholder school emphasizing physical discipline, adventure, and classical formation for ages 13-18.',
  },
  {
    id: 'school-2',
    name: 'St. Joseph Gymnasium',
    location: 'Placeholder Town, State',
    stages: ['gymnasium'] as const,
    type: 'Gymnasium (Ages 7-13)',
    description:
      'Focused exclusively on the gymnasium stage, forming resilient Chivalric Wayfarers through outdoor adventure and liturgical rhythms.',
  },
  {
    id: 'school-3',
    name: 'Our Lady of Wonder College',
    location: 'Placeholder Region, State',
    stages: ['poetic', 'spiritual'] as const,
    type: 'Liberal Arts College',
    description:
      'Poetic foundations for scientific and spiritual pursuits, integrating wonder with disciplined inquiry.',
  },
];

export default async function SchoolsPage() {
  const scriptureQuotes = await getQuotesBySource('Knox');
  const schoolFlowQuote = scriptureQuotes.find((q) => q.id === 'ephesians-6-4');
  // Hero imagery suggestion: gymnasium/adventure/discipline
  // Using tags like 'adventure', 'robin-hood', or assets from Otto/Robin Hood collections
  const heroAsset = getRandomAsset({ category: 'discipline', tags: ['adventure', 'robin-hood'] });

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-parchment to-parchment-light">
        <ContentContainer width="wide" padding="lg">
          <SectionHeading level={1} align="center" decorated>
            Schools Directory
          </SectionHeading>

          {heroAsset && (
            <div className="mt-8 max-w-4xl mx-auto">
              <OptimizedImage
                asset={heroAsset}
                alt="Adventure and discipline for gymnasium stage"
                showCaption={true}
                imageClassName="rounded-organic-lg shadow-organic"
                sizes="(max-width: 768px) 100vw, 80vw"
                priority
              />
            </div>
          )}

          <div className="mt-8 text-center max-w-3xl mx-auto">
            <p className="text-body-lg leading-relaxed mb-6">
              Explore affiliated schools that embody Senior's vision: forming
              students through <strong className="text-gymnasium">physical discipline and adventure</strong>,
              rooted in <strong className="text-forest">poetic knowledge</strong> and{' '}
              <strong className="text-spiritual">Catholic faith</strong>.
            </p>
          </div>

          {schoolFlowQuote && (
            <div className="mt-8">
              <QuoteCard
                quote={schoolFlowQuote.quote}
                author={schoolFlowQuote.author}
                source={schoolFlowQuote.source}
                variant="scripture"
              />
            </div>
          )}
        </ContentContainer>
      </section>

      {/* Filter Section & School Listings */}
      <SchoolsFilter schools={MOCK_SCHOOLS} />

      {/* Application CTA */}
      <section className="bg-spiritual/10 py-section-sm">
        <ContentContainer width="narrow">
          <div className="text-center">
            <SectionHeading level={2} align="center" className="mb-6">
              Is Your School Aligned?
            </SectionHeading>
            <p className="text-body-lg mb-8 leading-relaxed">
              If your school embodies poetic knowledge, physical discipline, and
              Catholic formation, we invite you to apply for network
              affiliation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/contact" variant="primary" size="lg">
                Apply to Affiliate
              </CTAButton>
              <CTAButton href="/philosophy" variant="outline" size="lg">
                Review Philosophy
              </CTAButton>
            </div>
          </div>
        </ContentContainer>
      </section>
    </>
  );
}
