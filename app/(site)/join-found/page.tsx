import QuoteCard from '@/components/QuoteCard';
import SectionHeading from '@/components/SectionHeading';
import ContentContainer from '@/components/ContentContainer';
import CTAButton from '@/components/CTAButton';
import { getScriptureWaypoints, getQuotesBySource } from '@/lib/content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Join the Network / Found a School | Senior Schools Network',
  description:
    'Restore the gymnasium stage for Chivalric Wayfarers. Informal guidance, founding toolkit, and network support for aspiring educators and visionaries.',
  openGraph: {
    title: 'Founding Resources - Senior Schools Network',
    description:
      'Restore the gymnasium gap: Founder\'s Toolkit, network support, and encouragement. Matthew 11:28 flow.',
    url: 'https://seniorschoolsnetwork.org/join-found',
    images: [{ url: '/og-image-enclosed-garden.jpg', width: 1200, height: 630 }],
  },
};

export default async function JoinFoundPage() {
  const scriptureWaypoints = await getScriptureWaypoints();
  const foundingFlowWaypoint = scriptureWaypoints.find(
    (w) => w.id === 'matthew-11-28'
  );
  const quotes = await getQuotesBySource();
  const adventureQuote = quotes.find((q) => q.id === 'adventure-stories');

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-parchment to-parchment-light">
        <ContentContainer width="wide" padding="lg">
          <SectionHeading level={1} align="center" decorated>
            Join the Network / Found a School
          </SectionHeading>

          {foundingFlowWaypoint && (
            <div className="mt-8">
              <QuoteCard
                quote={foundingFlowWaypoint.text}
                author={foundingFlowWaypoint.verse}
                variant="scripture"
              />
            </div>
          )}

          <div className="mt-8 text-center max-w-3xl mx-auto">
            <p className="text-body-lg leading-relaxed">
              The gymnasium stage (ages 7-13) is sorely lacking in modern
              education. We invite visionaries to restore this vital phase
              through founding aligned schools, with informal guidance and
              network support.
            </p>
          </div>
        </ContentContainer>
      </section>

      {/* The Gap */}
      <section className="section-container py-section">
        <div className="card-elevated border-l-4 border-gymnasium">
          <SectionHeading level={2} className="mb-6">
            The Gymnasium Gap
          </SectionHeading>

          <p className="text-body leading-relaxed mb-6">
            Homeschooling excels in the nursery. High schools and liberal arts
            colleges exist for older students. But the gymnasium stage — where
            physical discipline, adventure, and stories form resilient "warrior
            poets" — remains critically underserved.
          </p>

          {adventureQuote && (
            <QuoteCard
              quote={adventureQuote.quote}
              author={adventureQuote.author}
              source={adventureQuote.source}
              variant="embedded"
            />
          )}

          <p className="text-body leading-relaxed mt-6">
            This is the frontier: founding stage-specific schools (especially
            for boys ages 7-13) that embody benevolent neglect, outdoor
            challenges, and liturgical rhythms. The network offers encouragement,
            not schemas — inspiration, not prescription.
          </p>
        </div>
      </section>

      {/* Founder's Toolkit */}
      <section className="bg-parchment-dark py-section">
        <ContentContainer width="wide">
          <SectionHeading level={2} align="center" className="mb-8">
            Founder's Toolkit
          </SectionHeading>

          <p className="text-center text-body-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            A non-prescriptive resource for launching a school grounded in
            Senior's philosophy. Includes planning prompts, educator sourcing
            ideas, and philosophical grounding — flexible for your context.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-elevated">
              <h3 className="text-heading-3 font-playfair text-forest mb-4">
                Philosophical Foundations
              </h3>
              <ul className="space-y-2 text-body">
                <li className="flex items-start">
                  <span className="text-gold mr-2">✦</span>
                  <span>Poetic knowledge vs. schemas: avoiding rigidity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✦</span>
                  <span>Stages of development and organic progression</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✦</span>
                  <span>Catholic exclusivity and liturgical integration</span>
                </li>
              </ul>
            </div>

            <div className="card-elevated">
              <h3 className="text-heading-3 font-playfair text-forest mb-4">
                Practical Planning
              </h3>
              <ul className="space-y-2 text-body">
                <li className="flex items-start">
                  <span className="text-gold mr-2">✦</span>
                  <span>Finding good educators (trust over credentials)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✦</span>
                  <span>
                    Stage-specific programming (e.g., gymnasium emphasis)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✦</span>
                  <span>
                    Outdoor spaces, liturgical rhythms, and family integration
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <CTAButton href="/downloads/founders-toolkit-placeholder.md" variant="primary" size="lg">
              Download Founder's Toolkit (Placeholder)
            </CTAButton>
          </div>
        </ContentContainer>
      </section>

      {/* Network Support */}
      <section className="section-container py-section">
        <SectionHeading level={2} align="center" className="mb-8">
          Network Affiliation & Support
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="card-elevated">
            <h3 className="text-heading-3 font-playfair text-forest mb-4">
              For Existing Schools
            </h3>
            <p className="text-body leading-relaxed mb-6">
              If your school already embodies poetic knowledge, physical
              discipline, and Catholic formation, we invite you to apply for
              network affiliation. Gain visibility, connect with like-minded
              educators, and inspire others.
            </p>
            <CTAButton href="/contact" variant="primary" size="md" fullWidth>
              Apply to Affiliate
            </CTAButton>
          </div>

          <div className="card-elevated">
            <h3 className="text-heading-3 font-playfair text-forest mb-4">
              For Aspiring Founders
            </h3>
            <p className="text-body leading-relaxed mb-6">
              If you're discerning a call to found a new school (especially
              gymnasium-focused), reach out for informal guidance. The network
              offers encouragement, connections, and philosophical grounding —
              not rigid requirements.
            </p>
            <CTAButton href="/contact" variant="outline" size="md" fullWidth>
              Reach Out for Guidance
            </CTAButton>
          </div>
        </div>

        <div className="text-center p-8 bg-spiritual/10 rounded-organic">
          <p className="text-body-lg leading-relaxed max-w-2xl mx-auto">
            <strong className="text-forest">Success Vision:</strong>{' '}
            Stage-specific schools founded (e.g., gymnasium for boys),
            restoration of missing formation, and a renaissance of wonder-filled
            education rooted in Catholic tradition.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gold/10 py-section-sm">
        <ContentContainer width="narrow">
          <div className="text-center">
            <SectionHeading level={2} align="center" className="mb-6">
              Ready to Begin?
            </SectionHeading>
            <p className="text-body-lg mb-8 leading-relaxed">
              Whether you're an established school seeking affiliation or a
              visionary founder, the network welcomes your participation in this
              restoration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/contact" variant="primary" size="lg">
                Contact Us
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
