import Link from 'next/link';
import CTAButton from '@/components/CTAButton';
import ContentContainer from '@/components/ContentContainer';
import InteractiveStages from '@/components/InteractiveStages';
import { getQuotesBySource } from '@/lib/content';
import OptimizedImage from '@/components/OptimizedImage';
import { getRandomAsset } from '@/lib/assets';
import type { Metadata } from 'next';
import RotatingQuotes from '@/components/RotatingQuotes';
import { getAxiomsQuotesBySection } from '@/lib/content/axioms';

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
  // Choose curated section from PHILOSOPHICAL-AXIOMS.md for THIS page
  const axiomsHeroQuotes = await getAxiomsQuotesBySection('On Wonder & Beginnings');

  const heroQuote = quotes.find((q) => q.id === 'wonder-wisdom');
  const legendMakersQuote = quotes.find((q) => q.id === 'mythopoeia-legend-makers');
  const heroAsset = getRandomAsset({ category: 'beauty', tags: ['hudson-river-school', 'landscape'] });
  // Provide all curated quotes to a tiny client component that picks one once per load
  let heroQuotesDisplayed = [] as typeof axiomsHeroQuotes;
  if (axiomsHeroQuotes?.length) {
    heroQuotesDisplayed = axiomsHeroQuotes;
  } else if (heroQuote) {
    heroQuotesDisplayed = [heroQuote];
  }

  return (
    <>
      {/* Hero Section with Full-Width Image */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {heroAsset && (
          <>
            <div className="absolute inset-0 z-0">
              <OptimizedImage
                asset={heroAsset}
                alt="Classical landscape evoking wonder"
                showCaption={false}
                fill={true}
                objectFit="cover"
                sizes="100vw"
                priority
                className="w-full h-full"
              />
            </div>
            <div className="absolute inset-0 z-[1] bg-gradient-to-b from-charcoal/40 via-charcoal/30 to-parchment"></div>
          </>
        )}
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
          {heroQuotesDisplayed.length > 0 && (
            <RotatingQuotes quotes={heroQuotesDisplayed} autoplay={false} />
          )}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <CTAButton href="/schools" variant="primary" size="lg">
              Explore Schools
            </CTAButton>
            <CTAButton href="/philosophy" variant="outline" size="lg">
              Our Philosophy
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Welcome Section - Clean Typography */}
      <section className="py-20 bg-parchment">
        <ContentContainer width="narrow">
          <div className="text-center space-y-8">
            <p className="text-2xl md:text-3xl font-playfair leading-relaxed text-forest">
              A loose affiliation of schools embodying{' '}
              <span className="italic">poetic knowledge</span>,{' '}
              <span className="italic">sensory-based learning</span>, and{' '}
              <span className="italic">spiritual formation</span>{' '}
              the restorational vision of{' '}
              <span className="font-semibold">Dr. John Senior and the IHP</span>.
            </p>
          </div>
        </ContentContainer>
      </section>

      {/* Three Paths - Minimalist Cards */}
      <section className="py-20 bg-white">
        <ContentContainer width="wide">
          <h2 className="text-4xl md:text-5xl font-playfair text-center text-forest mb-16">
            Three Paths to Restoration
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Link href="/schools" className="group block">
              <div className="text-center space-y-6 p-8 hover:bg-parchment/30 transition-all duration-300 rounded-lg">
                <div className="text-6xl mb-4">🏛️</div>
                <h3 className="text-2xl font-playfair text-forest group-hover:text-gold transition-colors">
                  Senior Schools
                </h3>
                <p className="text-lg leading-relaxed text-charcoal/80">
                  Discover affiliated schools embodying Dr. John Senior's vision of poetic knowledge, physical discipline, and authentic Catholic formation.
                </p>
                <p className="text-sm italic text-charcoal/60 border-t border-charcoal/20 pt-4">
                  Ephesians 6:4 - "Bring them up in the discipline and instruction of the Lord"
                </p>
                <span className="inline-block text-gold font-lato font-semibold group-hover:translate-x-2 transition-transform">
                  Explore Schools →
                </span>
              </div>
            </Link>

            <Link href="/home-application" className="group block">
              <div className="text-center space-y-6 p-8 hover:bg-parchment/30 transition-all duration-300 rounded-lg">
                <div className="text-6xl mb-4">🏡</div>
                <h3 className="text-2xl font-playfair text-forest group-hover:text-gold transition-colors">
                  Homeschooling
                </h3>
                <p className="text-lg leading-relaxed text-charcoal/80">
                  Access guides, book lists, and family adventure ideas for bringing Senior's vision into your home education.
                </p>
                <p className="text-sm italic text-charcoal/60 border-t border-charcoal/20 pt-4">
                  Proverbs 22:6 - "Train up a child in the way he should go"
                </p>
                <span className="inline-block text-gold font-lato font-semibold group-hover:translate-x-2 transition-transform">
                  Get Resources →
                </span>
              </div>
            </Link>

            <Link href="/join-found" className="group block">
              <div className="text-center space-y-6 p-8 hover:bg-parchment/30 transition-all duration-300 rounded-lg">
                <div className="text-6xl mb-4">🌱</div>
                <h3 className="text-2xl font-playfair text-forest group-hover:text-gold transition-colors">
                  Personal Education
                </h3>
                <p className="text-lg leading-relaxed text-charcoal/80">
                  Access the Founder's Toolkit and receive informal guidance for starting a school aligned with Senior's principles.
                </p>
                <p className="text-sm italic text-charcoal/60 border-t border-charcoal/20 pt-4">
                  Matthew 11:28 - "Come to me... and I will refresh you"
                </p>
                <span className="inline-block text-gold font-lato font-semibold group-hover:translate-x-2 transition-transform">
                  Start a School →
                </span>
              </div>
            </Link>
          </div>
        </ContentContainer>
      </section>

      {/* Stages - Interactive with Explanations */}
      <section className="py-20 bg-parchment-dark">
        <ContentContainer width="wide">
          <h2 className="text-4xl md:text-5xl font-playfair text-center text-forest mb-8">
            Stages of Development
          </h2>
          <p className="text-center text-xl text-charcoal/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            Each stage builds upon wonder and sensory delight, progressing
            organically through physical formation to imaginative depth and
            spiritual wisdom.
          </p>
          <InteractiveStages />
        </ContentContainer>
      </section>

      {/* Featured Quote - Elegant Typography */}
      <section className="py-20 bg-white">
        <ContentContainer width="narrow">
          {legendMakersQuote && (
            <blockquote className="text-center space-y-6">
              <p className="text-2xl md:text-4xl font-playfair italic text-forest leading-relaxed">
                "{legendMakersQuote.quote}"
              </p>
              <footer className="text-xl text-charcoal/70">
                <cite className="not-italic">— {legendMakersQuote.author}</cite>
                {legendMakersQuote.source && (
                  <span className="block text-sm mt-2 text-charcoal/50">{legendMakersQuote.source}</span>
                )}
              </footer>
            </blockquote>
          )}
        </ContentContainer>
      </section>

      {/* Final CTA - Bold and Clear */}
      <section className="py-20 bg-gradient-to-b from-spiritual/10 to-spiritual/20">
        <ContentContainer width="narrow">
          <div className="text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-playfair text-forest">
              Join the Restoration
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed text-charcoal/80 max-w-2xl mx-auto">
              Whether you're a parent seeking authentic education, an educator
              exploring affiliation, or a visionary founder, we invite you to
              participate in the renewal of wonder-filled learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
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
