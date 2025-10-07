import QuoteCard from '@/components/QuoteCard';
import SectionHeading from '@/components/SectionHeading';
import ContentContainer from '@/components/ContentContainer';
import CTAButton from '@/components/CTAButton';
import { getScriptureWaypoints } from '@/lib/content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Reach out for guidance on school affiliation, home application, or founding initiatives aligned with John Senior\'s philosophy.',
  openGraph: {
    title: 'Contact - Senior Schools Network',
    description:
      'Connect for enrollment, homeschool resources, or founding support. We are here to guide.',
    url: 'https://seniorschoolsnetwork.org/contact',
    images: [{ url: '/og-image-enclosed-garden.jpg', width: 1200, height: 630 }],
  },
};

export default async function ContactPage() {
  const scriptureWaypoints = await getScriptureWaypoints();
  const foundingWaypoint = scriptureWaypoints.find(
    (w) => w.id === 'matthew-11-28'
  );

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-parchment to-parchment-light">
        <ContentContainer width="wide" padding="lg">
          <SectionHeading level={1} align="center" decorated>
            Reach Out for Guidance
          </SectionHeading>

          {foundingWaypoint && (
            <div className="mt-8">
              <QuoteCard
                quote={foundingWaypoint.text}
                author={foundingWaypoint.verse}
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
            <QuoteCard
              quote="Blessed are the legend-makers with their rhyme of things not found within recorded time"
              author="J.R.R. Tolkien"
              source="Mythopoeia"
              variant="embedded"
            />

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
