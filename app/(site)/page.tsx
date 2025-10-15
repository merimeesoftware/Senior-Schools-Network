import Link from 'next/link';
import QuoteCard from '@/components/QuoteCard';
import CTAButton from '@/components/CTAButton';
import SectionHeading from '@/components/SectionHeading';
import ContentContainer from '@/components/ContentContainer';
import StageBadge from '@/components/StageBadge';
import { getQuotesBySource } from '@/lib/content';
import OptimizedImage from '@/components/OptimizedImage';
import { getRandomAsset } from '@/lib/assets';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wonder-Filled Catholic Education',
  description:
    'Catholic schools embodying poetic knowledge, physical discipline, and formation. Discover schools, home resources, and founding guidance.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Senior Schools Network - Restoring Innocence Through Wonder',
    description:
      'Explore schools, resources, and founding support aligned with poetic knowledge, gymnasium emphasis, and Catholic formation.',
    url: 'https://seniorschoolsnetwork.org',
    images: [{ url: '/og-image-enclosed-garden.jpg', width: 1200, height: 630 }],
  },
};

export default async function HomePage() {
  const quotes = await getQuotesBySource();

  const heroQuote = quotes.find((q) => q.id === 'wonder-wisdom');
  const legendMakersQuote = quotes.find((q) => q.id === 'mythopoeia-legend-makers');
  const adventureQuote = quotes.find((q) => q.id === 'adventure-stories');
  const heroAsset = getRandomAsset({ category: 'beauty', tags: ['hudson-river-school', 'landscape'] });

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-parchment to-parchment-light">
        <ContentContainer width="wide" padding="lg">
          {heroQuote && (
            <QuoteCard
              quote={heroQuote.quote}
              author={heroQuote.author}
              variant="hero"
            />
          )}

          {heroAsset && (
            <div className="mt-8 max-w-4xl mx-auto">
              <OptimizedImage
                asset={heroAsset}
                alt="Classical landscape evoking wonder"
                showCaption={true}
                imageClassName="rounded-organic-lg shadow-organic"
                sizes="(max-width: 768px) 100vw, 80vw"
                priority
              />
            </div>
          )}

          <div className="mt-8 text-center max-w-3xl mx-auto">
            <p className="text-body-lg leading-relaxed mb-6">
              Welcome to the Senior Schools Network — a loose affiliation of
              Catholic schools embodying{' '}
              <span className="font-semibold text-forest">
                poetic knowledge
              </span>
              ,{' '}
              <span className="font-semibold text-forest">
                sensory-based learning
              </span>
              , and{' '}
              <span className="font-semibold text-forest">
                spiritual formation
              </span>{' '}
              rooted in the educational philosophy of Dr. John Senior.
            </p>
            {adventureQuote && (
              <p className="text-body-lg leading-relaxed text-charcoal/80">
                Our emphasis:{' '}
                <strong className="text-gymnasium">
                  "{adventureQuote.quote}"
                </strong>{' '}
                — forming resilient "Chivalric Wayfarers" through the gymnasium stage
                and beyond.
              </p>
            )}
          </div>
        </ContentContainer>
      </section>

      {/* Three-Path CTAs */}
      <section className="section-container py-section">
        <SectionHeading level={2} align="center" className="mb-8">
          Three Paths to Restoration
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Link href="/schools" className="card-elevated group hover:shadow-organic-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🏛️</span>
              <h3 className="text-heading-3 font-playfair text-forest group-hover:text-forest-dark transition-colors">
                School Consideration
              </h3>
            </div>
            <p className="text-body mb-4 leading-relaxed">
              Parents seeking gymnasium-stage education or high school formation
              — discover affiliated schools embodying Senior's vision.
            </p>
            <p className="text-body-sm italic text-charcoal/70 mb-4">
              <strong>Waypoint:</strong> Ephesians 6:4 - "Bring them up in the
              discipline and instruction of the Lord"
            </p>
            <span className="text-gold text-sm font-lato font-semibold group-hover:text-gold-dark">
              Explore Schools →
            </span>
          </Link>

          <Link href="/home-application" className="card-elevated group hover:shadow-organic-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🏡</span>
              <h3 className="text-heading-3 font-playfair text-forest group-hover:text-forest-dark transition-colors">
                Home Application
              </h3>
            </div>
            <p className="text-body mb-4 leading-relaxed">
              Homeschoolers excelling in nursery but seeking gymnasium
              inspiration — download guides, book lists, and family adventure
              ideas.
            </p>
            <p className="text-body-sm italic text-charcoal/70 mb-4">
              <strong>Waypoint:</strong> Proverbs 22:6 - "Train up a child in
              the way he should go"
            </p>
            <span className="text-gold text-sm font-lato font-semibold group-hover:text-gold-dark">
              Get Resources →
            </span>
          </Link>

          <Link href="/join-found" className="card-elevated group hover:shadow-organic-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🌱</span>
              <h3 className="text-heading-3 font-playfair text-forest group-hover:text-forest-dark transition-colors">
                Founding Inspiration
              </h3>
            </div>
            <p className="text-body mb-4 leading-relaxed">
              Visionaries recognizing the gymnasium gap — access the Founder's
              Toolkit and reach out for informal guidance from the network.
            </p>
            <p className="text-body-sm italic text-charcoal/70 mb-4">
              <strong>Waypoint:</strong> Matthew 11:28 - "Come to me... and I
              will refresh you"
            </p>
            <span className="text-gold text-sm font-lato font-semibold group-hover:text-gold-dark">
              Start a School →
            </span>
          </Link>
        </div>
      </section>

      {/* Stage Badges Demo */}
      <section className="bg-parchment-dark py-section-sm">
        <ContentContainer width="wide">
          <SectionHeading level={2} align="center" decorated>
            Stages of Development
          </SectionHeading>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <StageBadge stage="nursery" size="lg" />
            <StageBadge stage="gymnasium" size="lg" />
            <StageBadge stage="poetic" size="lg" />
            <StageBadge stage="spiritual" size="lg" />
          </div>
          <p className="text-center text-charcoal/70 mt-6 max-w-2xl mx-auto">
            Each stage builds upon wonder and sensory delight, progressing
            organically through physical formation to imaginative depth and
            spiritual wisdom.
          </p>
        </ContentContainer>
      </section>

      {/* Featured Quote */}
      <section className="section-container py-section-sm">
        {legendMakersQuote && (
          <QuoteCard
            quote={legendMakersQuote.quote}
            author={legendMakersQuote.author}
            source={legendMakersQuote.source}
            variant="hero"
          />
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-spiritual/10 py-section-sm">
        <ContentContainer width="narrow">
          <div className="text-center">
            <SectionHeading level={2} align="center" className="mb-6">
              Join the Restoration
            </SectionHeading>
            <p className="text-body-lg mb-8 leading-relaxed">
              Whether you're a parent seeking authentic education, an educator
              exploring affiliation, or a visionary founder, we invite you to
              participate in the renewal of wonder-filled learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/schools" variant="primary" size="lg">
                Find a School
              </CTAButton>
              <CTAButton href="/philosophy" variant="outline" size="lg">
                Explore Philosophy
              </CTAButton>
            </div>
          </div>
        </ContentContainer>
      </section>
    </>
  );
}
