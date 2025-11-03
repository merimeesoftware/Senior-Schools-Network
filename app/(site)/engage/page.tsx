import QuoteCard from '@/components/QuoteCard';
import SectionHeading from '@/components/SectionHeading';
import ContentContainer from '@/components/ContentContainer';
import CTAButton from '@/components/CTAButton';
import { getQuotesBySource } from '@/lib/content';
import OptimizedImage from '@/components/OptimizedImage';
import { getRandomAsset } from '@/lib/assets';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Engage with the Network',
  description:
    'Submit your school, explore the gymnasium gap, and find inspiration to carry these ideas forward in your community.',
  alternates: { canonical: '/engage' },
  openGraph: {
    title: 'Engage - Senior Schools Network',
    description:
      'Connect with the network, submit schools, and discover ways to bring poetic education to your home, parish, or community.',
    url: 'https://seniorschoolsnetwork.org/engage',
    images: [{ url: '/og-image-enclosed-garden.jpg', width: 1200, height: 630 }],
  },
};

export default async function EngagePage() {
  const scriptureQuotes = await getQuotesBySource('Knox');
  const flowQuote = scriptureQuotes.find((q) => q.id === 'matthew-11-28');
  const quotes = await getQuotesBySource();
  const adventureQuote = quotes.find((q) => q.id === 'adventure-stories');
  const heroAsset = getRandomAsset({ category: 'beauty', tags: ['sacred-art', 'paradise'] });

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-parchment to-parchment-light">
        <ContentContainer width="wide" padding="lg">
          <SectionHeading level={1} align="center" decorated>
            Engage with the Network
          </SectionHeading>

          {heroAsset && (
            <div className="mt-8 max-w-4xl mx-auto">
              <OptimizedImage
                asset={heroAsset}
                alt="Sacred art inspiring community engagement"
                showCaption={true}
                imageClassName="rounded-organic-lg shadow-organic"
                sizes="(max-width: 768px) 100vw, 80vw"
                priority
              />
            </div>
          )}

          {flowQuote && (
            <div className="mt-8">
              <QuoteCard
                quote={flowQuote.quote}
                author={flowQuote.author}
                source={flowQuote.source}
                variant="scripture"
              />
            </div>
          )}

          <div className="mt-8 text-center max-w-3xl mx-auto">
            <p className="text-body-lg leading-relaxed">
              This site presents ideas for restoring wonder-filled education. Here you can submit schools to the network, reflect on the gymnasium gap, and find inspiration to carry these principles into your home, parish, or community.
            </p>
          </div>
        </ContentContainer>
      </section>

      {/* Submit a School */}
      <section className="section-container py-section">
        <div className="card-elevated">
          <SectionHeading level={2} className="mb-6">
            Submit a School to the Network
          </SectionHeading>

          <p className="text-body leading-relaxed mb-6">
            If your school embodies poetic knowledge, physical discipline, and Catholic formation aligned with John Senior's vision, we invite you to join our loose affiliation. This increases visibility and connects you with like-minded educators.
          </p>

          <div className="bg-parchment-dark p-6 rounded-organic mb-6">
            <h3 className="text-heading-3 font-playfair text-forest mb-4">
              Affiliation Benefits:
            </h3>
            <ul className="space-y-2 text-body">
              <li className="flex items-start">
                <span className="text-gold mr-2">✦</span>
                <span>Increased visibility in our schools directory</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">✦</span>
                <span>Connection with other aligned schools and educators</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">✦</span>
                <span>Shared inspiration and support in the restoration</span>
              </li>
            </ul>
          </div>

          <CTAButton href="#contact" variant="primary" size="lg" fullWidth>
            Submit Your School
          </CTAButton>
        </div>
      </section>

      {/* The Gymnasium Gap */}
      <section className="bg-parchment-dark py-section">
        <ContentContainer width="wide">
          <SectionHeading level={2} align="center" className="mb-8">
            The Gymnasium Gap
          </SectionHeading>

          <p className="text-center text-body-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            The gymnasium stage (ages 7-13) is critically underserved in modern education. This vital phase, where physical discipline, adventure, and stories form resilient "warrior poets," remains largely absent from our schools.
          </p>

          <div className="card-elevated border-l-4 border-gymnasium max-w-4xl mx-auto">
            {adventureQuote && (
              <QuoteCard
                quote={adventureQuote.quote}
                author={adventureQuote.author}
                source={adventureQuote.source}
                variant="embedded"
              />
            )}

            <p className="text-body leading-relaxed mt-6">
              Homeschooling excels in the nursery. High schools and liberal arts colleges exist for older students. But the gymnasium — where boys and girls develop through outdoor challenges, liturgical rhythms, and heroic tales — is the missing link in our educational landscape.
            </p>
          </div>
        </ContentContainer>
      </section>

      {/* Carrying Ideas Forward */}
      <section className="section-container py-section">
        <SectionHeading level={2} align="center" className="mb-8">
          Carrying the Ideas Forward
        </SectionHeading>

        <p className="text-center text-body-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          This site is my personal exploration of these thoughts, presented to inspire you to consider how you might bring these principles to your own context. Here are some suggestions for starting small in your community.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card-elevated">
            <h3 className="text-heading-3 font-playfair text-forest mb-4">
              Parish-Based Initiatives
            </h3>
            <p className="text-body leading-relaxed mb-6">
              Start a boys' club at your parish with the mission of serving Mass. Gather boys for shared experiences in service, adventure, sports, and fellowship.
            </p>
            <ul className="space-y-2 text-body-sm">
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>Weekly meetings with altar serving practice</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>Outdoor adventures and sports activities</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>Shared reading of heroic stories and saints' lives</span>
              </li>
            </ul>
          </div>

          <div className="card-elevated">
            <h3 className="text-heading-3 font-playfair text-forest mb-4">
              Home & Community Ideas
            </h3>
            <p className="text-body leading-relaxed mb-6">
              Any gathering where children come together for missions, adventures, sports, or common experiences can embody these principles.
            </p>
            <ul className="space-y-2 text-body-sm">
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>Neighborhood adventure clubs</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>Family hiking and exploration groups</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>Liturgical year celebrations and traditions</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-body-lg leading-relaxed max-w-2xl mx-auto">
            These are starting points for reflection. The key is creating spaces where wonder, discipline, and spiritual formation can flourish organically.
          </p>
        </div>
      </section>

      {/* Simple Contact */}
      <section className="bg-gold/10 py-section-sm" id="contact">
        <ContentContainer width="narrow">
          <div className="text-center">
            <SectionHeading level={2} align="center" className="mb-6">
              Get in Touch
            </SectionHeading>
            <p className="text-body-lg mb-8 leading-relaxed">
              Have questions about the network, want to submit a school, or need inspiration for your own initiatives? We'd love to hear from you.
            </p>

            <div className="card-elevated max-w-2xl mx-auto">
              <p className="text-body leading-relaxed mb-6">
                A contact form will be implemented soon. For now, please explore our philosophy and schools directory, or reach out through our social channels.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton href="/philosophy" variant="outline" size="lg">
                  Explore Philosophy
                </CTAButton>
                <CTAButton href="/schools" variant="primary" size="lg">
                  Browse Schools
                </CTAButton>
              </div>
            </div>
          </div>
        </ContentContainer>
      </section>
    </>
  );
}