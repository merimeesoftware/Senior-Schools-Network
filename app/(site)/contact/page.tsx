import QuoteCard from '@/components/QuoteCard';
import SectionHeading from '@/components/SectionHeading';
import ContentContainer from '@/components/ContentContainer';
import CTAButton from '@/components/CTAButton';
import { getQuotesBySource } from '@/lib/content';
import OptimizedImage from '@/components/OptimizedImage';
import { getRandomAsset } from '@/lib/assets';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    "Get guidance on school affiliation, home application, or founding aligned with John Senior's philosophy.",
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact - Senior Schools Network',
    description:
      'Connect for enrollment, homeschool resources, or founding support. We are here to guide.',
    url: 'https://seniorschoolsnetwork.org/contact',
    images: [{ url: '/og-image-enclosed-garden.jpg', width: 1200, height: 630 }],
  },
};

export default async function ContactPage() {
  const quotes = await getQuotesBySource('Mythopoeia');
  const legendMakers = quotes.find((q) => q.id === 'mythopoeia-legend-makers');
  // Hero imagery suggestion: sacred art / correspondence aesthetic
  // Load scripture and literary quotes from centralized index
  const scriptureQuotes = await getQuotesBySource('Knox');
  const restQuote = scriptureQuotes.find((q) => q.id === 'matthew-11-28');
  const heroAsset = getRandomAsset({ category: 'beauty', tags: ['sacred-art', 'paradise'] });

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-parchment to-parchment-light">
        <ContentContainer width="wide" padding="lg">
          <SectionHeading level={1} align="center" decorated>
            Reach Out for Guidance
          </SectionHeading>

          {heroAsset && (
            <div className="mt-8 max-w-4xl mx-auto">
              <OptimizedImage
                asset={heroAsset}
                alt="Sacred-inspired imagery for correspondence and guidance"
                showCaption={true}
                imageClassName="rounded-organic-lg shadow-organic"
                sizes="(max-width: 768px) 100vw, 80vw"
                priority
              />
            </div>
          )}

          {restQuote && (
            <div className="mt-8">
              <QuoteCard
                quote={restQuote.quote}
                author={restQuote.author}
                source={restQuote.source}
                variant="scripture"
              />
            </div>
          )}

          <div className="mt-8 text-center max-w-3xl mx-auto">
            <p className="text-body-lg leading-relaxed">
              Whether you're a parent seeking school information, an educator
              exploring affiliation, or a visionary founder, we welcome your
              questions and inquiries. The network is here to support the
              restoration of wonder-filled education.
            </p>
          </div>
        </ContentContainer>
      </section>

      {/* Contact Options */}
      <section className="section-container py-section">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="card-elevated text-center">
            <h3 className="text-heading-3 font-playfair text-forest mb-4">
              Parents & Families
            </h3>
            <p className="text-body mb-6 leading-relaxed">
              Inquire about affiliated schools, enrollment information, or
              resources for home application.
            </p>
            <CTAButton href="/schools" variant="outline" size="md" fullWidth>
              Browse Schools
            </CTAButton>
          </div>

          <div className="card-elevated text-center">
            <h3 className="text-heading-3 font-playfair text-forest mb-4">
              Educators & Schools
            </h3>
            <p className="text-body mb-6 leading-relaxed">
              Apply for network affiliation or connect with like-minded Catholic
              educators.
            </p>
            <CTAButton href="/join-found" variant="outline" size="md" fullWidth>
              Learn About Affiliation
            </CTAButton>
          </div>

          <div className="card-elevated text-center">
            <h3 className="text-heading-3 font-playfair text-forest mb-4">
              Aspiring Founders
            </h3>
            <p className="text-body mb-6 leading-relaxed">
              Seek informal guidance for launching a school grounded in Senior's
              philosophy.
            </p>
            <CTAButton href="/join-found" variant="outline" size="md" fullWidth>
              Explore Founding Resources
            </CTAButton>
          </div>
        </div>

        <div className="card-elevated border-l-4 border-gold">
          <SectionHeading level={2} className="mb-6">
            Contact Form
          </SectionHeading>

          <p className="text-body leading-relaxed mb-6">
            A live contact form will be implemented in Phase 3. For now, please
            use the resources below to explore the network, or check back soon
            for direct contact options.
          </p>

          <div className="bg-parchment-dark p-6 rounded-organic">
            <h3 className="text-heading-3 font-playfair text-forest mb-4">
              In the Meantime:
            </h3>
            <ul className="space-y-2 text-body">
              <li className="flex items-start">
                <span className="text-gold mr-2">✦</span>
                <span>
                  Review our{' '}
                  <a
                    href="/philosophy"
                    className="text-gold hover:text-gold-dark underline"
                  >
                    Philosophy & Resources
                  </a>{' '}
                  to understand the vision
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">✦</span>
                <span>
                  Browse the{' '}
                  <a
                    href="/schools"
                    className="text-gold hover:text-gold-dark underline"
                  >
                    Schools Directory
                  </a>{' '}
                  for affiliated institutions
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">✦</span>
                <span>
                  Download resources for{' '}
                  <a
                    href="/home-application"
                    className="text-gold hover:text-gold-dark underline"
                  >
                    Home Application
                  </a>{' '}
                  or{' '}
                  <a
                    href="/join-found"
                    className="text-gold hover:text-gold-dark underline"
                  >
                    Founding
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Scripture Encouragement */}
      <section className="bg-spiritual/10 py-section-sm">
        <ContentContainer width="narrow">
          <div className="text-center">
            {legendMakers && (
              <QuoteCard
                quote={legendMakers.quote}
                author={legendMakers.author}
                source={legendMakers.source}
                variant="embedded"
              />
            )}

            <p className="text-body-lg mt-8 leading-relaxed">
              Your participation — whether as a parent, educator, or founder —
              is part of this restoration. We look forward to connecting with
              you.
            </p>
          </div>
        </ContentContainer>
      </section>
    </>
  );
}
