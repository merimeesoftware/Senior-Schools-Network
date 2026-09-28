import Link from 'next/link';
import CTAButton from '@/components/ui/CTAButton';
import ContentContainer from '@/components/layout/ContentContainer';
import InteractiveStages from '@/components/interactive/InteractiveStages';
import QuoteImageBreak from '@/components/content/QuoteImageBreak';
import HeroSection from '@/components/layout/HeroSection';
import FadeIn from '@/components/ui/FadeIn';
import { getAxiomsQuotesBySection } from '@/lib/content/axioms';
import { homeHeroQuotes } from '@/lib/content/quotes';
import { ONE_LINER } from '@/lib/content/public-lines';
import { homeHeroLandscapeIds } from '@/lib/assets';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default async function HomePage() {
  // Beauty quotes from Poetic Knowledge section in axioms
  const beautyQuotes = await getAxiomsQuotesBySection('Quote Bank: Poetic Knowledge');
  
  // Mission & Adventure quotes from axioms
  const missionQuotes = await getAxiomsQuotesBySection('Quote Bank: Mission and Adventure');

  return (
    <>
      {/* Hero Section with Full-Width Image */}
      <HeroSection
        imageFolder="landscapes"
        preferredAssetIds={homeHeroLandscapeIds}
        quotes={homeHeroQuotes}
        brandLine={ONE_LINER}
        showQuoteSource
        showQuoteRefresh
        imageAlt="Classical landscape evoking wonder"
        showButtons={true}
        buttons={[
          { text: 'Find a School', href: '/network-directory', variant: 'hero-primary' },
          { text: 'Explore the Philosophy', href: '/philosophy', variant: 'hero-outline' },
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
      <section className="py-20 bg-parchment-light">
        <ContentContainer width="wide">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-playfair text-center text-forest mb-16">
              Three Paths to Restoration
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <FadeIn delay={0}>
              <Link href="/network-directory" className="group block">
              <div className="text-center space-y-6 p-8 hover:bg-parchment/30 transition-all duration-300 rounded-lg border border-charcoal/10 border-l-2 border-l-forest/40 group-hover:border-l-gold">
                <h3 className="text-2xl font-playfair text-forest group-hover:text-gold transition-colors">
                  Find a school for your child
                </h3>
                <p className="text-lg leading-relaxed text-charcoal/80">
                  A map to schools that form children through wonder, adventure, and faith — especially the years most schooling forgets.
                </p>
                <p className="text-sm italic text-charcoal/60 border-t border-charcoal/20 pt-4">
                  Ephesians 6:4 - "Bring them up in the discipline and instruction of the Lord"
                </p>
                <span className="inline-block text-gold font-lato font-semibold group-hover:translate-x-2 transition-transform">
                  Find a School →
                </span>
              </div>
              </Link>
            </FadeIn>

            <FadeIn delay={150}>
              <Link href="/engage#resources" className="group block">
              <div className="text-center space-y-6 p-8 hover:bg-parchment/30 transition-all duration-300 rounded-lg border border-charcoal/10 border-l-2 border-l-forest/40 group-hover:border-l-gold">
                <h3 className="text-2xl font-playfair text-forest group-hover:text-gold transition-colors">
                  Bring this home
                </h3>
                <p className="text-lg leading-relaxed text-charcoal/80">
                  Enrich formation at home in this Catholic and Senior tradition — sources first, shaped to the child's mode; poetic knowledge before method kits.
                </p>
                <p className="text-sm italic text-charcoal/60 border-t border-charcoal/20 pt-4">
                  Proverbs 22:6 - "Train up a child in the way he should go"
                </p>
                <span className="inline-block text-gold font-lato font-semibold group-hover:translate-x-2 transition-transform">
                  Read the Sources →
                </span>
              </div>
              </Link>
            </FadeIn>

            <FadeIn delay={300}>
              <Link href="/engage#contact" className="group block">
              <div className="text-center space-y-6 p-8 hover:bg-parchment/30 transition-all duration-300 rounded-lg border border-charcoal/10 border-l-2 border-l-forest/40 group-hover:border-l-gold">
                <h3 className="text-2xl font-playfair text-forest group-hover:text-gold transition-colors">
                  Start or strengthen a school
                </h3>
                <p className="text-lg leading-relaxed text-charcoal/80">
                  Connect with people already doing the work, and list a school that forms children through sense, story, and liturgy.
                </p>
                <p className="text-sm italic text-charcoal/60 border-t border-charcoal/20 pt-4">
                  Matthew 11:28 - "Come to me... and I will refresh you"
                </p>
                <span className="inline-block text-gold font-lato font-semibold group-hover:translate-x-2 transition-transform">
                  Connect with the Network →
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
              Every age has its own door to wonder.
            </h2>
            <p className="text-center text-xl text-charcoal/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              The musical teaches repose, the gymnastic adventure, the poetic the first look, the romantic the quest that look demands, and the virtuous the cost of keeping faith with both.
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
      <section className="py-20 bg-parchment-dark">
        <ContentContainer width="narrow">
          <FadeIn>
            <div className="text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-playfair text-forest">
                Your child's formation starts with the next click.
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
                <CTAButton href="/philosophy" variant="outline" size="lg">
                  Explore the Philosophy
                </CTAButton>
              </div>
            </div>
          </FadeIn>
        </ContentContainer>
      </section>
    </>
  );
}
