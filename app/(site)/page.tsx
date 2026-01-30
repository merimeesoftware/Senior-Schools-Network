import Link from 'next/link';
import CTAButton from '@/components/CTAButton';
import ContentContainer from '@/components/ContentContainer';
import InteractiveStages from '@/components/InteractiveStages';
import QuoteImageBreak from '@/components/QuoteImageBreak';
import HeroSection from '@/components/HeroSection';
import FadeIn from '@/components/FadeIn';
import { getAxiomsQuotesBySection } from '@/lib/content/axioms';

// Metadata moved to layout or generated via generateMetadata in parent

export default async function HomePage() {
  // Get hero quotes from Foundational Wisdom section in axioms
  const heroQuotes = await getAxiomsQuotesBySection('Quote Bank: Sense and Story');
  
  // Beauty quotes from Poetic Knowledge section in axioms
  const beautyQuotes = await getAxiomsQuotesBySection('Quote Bank: Poetic Knowledge');
  
  // Mission & Adventure quotes from axioms
  const missionQuotes = await getAxiomsQuotesBySection('Quote Bank: Mission and Adventure');

  return (
    <>
      {/* Hero Section with Full-Width Image */}
      <HeroSection
        imageFolder="landscapes"
        quotes={heroQuotes}
        imageAlt="Classical landscape evoking wonder"
        showButtons={true}
        buttons={[
          { text: 'Explore Directory', href: '/network-directory', variant: 'hero-primary' },
          { text: 'Our Philosophy', href: '/philosophy', variant: 'hero-outline' },
        ]}
      />

      {/* Welcome Section - Clean Typography */}
      <section className="py-20 bg-parchment parchment-texture">
        <ContentContainer width="narrow">
          <FadeIn>
            <div className="text-center space-y-8">
              <p className="text-xl md:text-2xl leading-relaxed text-forest">
                The educational vision of Dr. John Senior begins with{' '}
                <strong>wonder</strong>, progresses through{' '}
                <strong>physical discipline and adventure</strong>, and nurtures
                the soul's ascent to <strong>wisdom</strong>, — all rooted in a
                liturgical rhythm and the poetic mode of knowing.
              </p>
            </div>
          </FadeIn>
        </ContentContainer>
      </section>

      {/* Three Paths - Minimalist Cards */}
      <section className="py-20 bg-white">
        <ContentContainer width="wide">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-playfair text-center text-forest mb-16">
              Three Paths to Restoration
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <FadeIn delay={0}>
              <Link href="/network-directory" className="group block">
              <div className="text-center space-y-6 p-8 hover:bg-parchment/30 transition-all duration-300 rounded-lg border-l-4 border-gymnasium">
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
            </FadeIn>

            <FadeIn delay={150}>
              <Link href="/philosophy" className="group block">
              <div className="text-center space-y-6 p-8 hover:bg-parchment/30 transition-all duration-300 rounded-lg border-l-4 border-poetic">
                <h3 className="text-2xl font-playfair text-forest group-hover:text-gold transition-colors">
                  Philosophy & Resources
                </h3>
                <p className="text-lg leading-relaxed text-charcoal/80">
                  Explore Dr. John Senior's vision of poetic knowledge, access book lists, and find resources for each developmental stage.
                </p>
                <p className="text-sm italic text-charcoal/60 border-t border-charcoal/20 pt-4">
                  Proverbs 22:6 - "Train up a child in the way he should go"
                </p>
                <span className="inline-block text-gold font-lato font-semibold group-hover:translate-x-2 transition-transform">
                  Explore Resources →
                </span>
              </div>
              </Link>
            </FadeIn>

            <FadeIn delay={300}>
              <Link href="/engage" className="group block">
              <div className="text-center space-y-6 p-8 hover:bg-parchment/30 transition-all duration-300 rounded-lg border-l-4 border-spiritual">
                <h3 className="text-2xl font-playfair text-forest group-hover:text-gold transition-colors">
                  Engage & Connect
                </h3>
                <p className="text-lg leading-relaxed text-charcoal/80">
                  Submit your school to the network, reflect on the gymnasium gap, and find inspiration to carry these ideas forward.
                </p>
                <p className="text-sm italic text-charcoal/60 border-t border-charcoal/20 pt-4">
                  Matthew 11:28 - "Come to me... and I will refresh you"
                </p>
                <span className="inline-block text-gold font-lato font-semibold group-hover:translate-x-2 transition-transform">
                  Get Involved →
                </span>
              </div>
              </Link>
            </FadeIn>
          </div>
        </ContentContainer>
      </section>

      {/* Quote/Image Break - Mission & Adventure */}
      <QuoteImageBreak
        quotes={missionQuotes}
        imageFolder="adventure"
        imageAlt="Chivalric wayfarer adventure"
        showRefreshButton={true}
        enableParallax={true}
      />

      {/* Stages - Interactive with Explanations */}
      <section className="py-20 bg-parchment-dark">
        <ContentContainer width="wide">
          <FadeIn threshold={0.3}>
            <h2 className="text-4xl md:text-5xl font-playfair text-center text-forest mb-8">
              Stages of Development
            </h2>
            <p className="text-center text-xl text-charcoal/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              Each stage builds upon wonder and sensory delight, progressing
              organically through physical formation to imaginative depth and
              spiritual wisdom.
            </p>
            <InteractiveStages />
          </FadeIn>
        </ContentContainer>
      </section>

      {/* Quote/Image Break - Beauty & Wonder */}
      <QuoteImageBreak
        quotes={beautyQuotes}
        imageFolder="art-sacred"
        imageAlt="Sacred art and beauty"
        showRefreshButton={true}
        enableParallax={true}
      />

      {/* Final CTA - Bold and Clear */}
      <section className="py-20 bg-gradient-to-b from-spiritual/10 to-spiritual/20">
        <ContentContainer width="narrow">
          <FadeIn>
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
                <CTAButton href="/network-directory" variant="primary" size="lg">
                  Find a School
                </CTAButton>
                <CTAButton href="/engage" variant="outline" size="lg">
                  Engage with Network
                </CTAButton>
              </div>
            </div>
          </FadeIn>
        </ContentContainer>
      </section>
    </>
  );
}
