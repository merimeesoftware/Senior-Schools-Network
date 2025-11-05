'use client';
import { useState } from 'react';
import Link from 'next/link';
import CTAButton from '@/components/CTAButton';
import ContentContainer from '@/components/ContentContainer';
import InteractiveStages from '@/components/InteractiveStages';
import OptimizedImage from '@/components/OptimizedImage';
import { getRandomAssetFromFolder } from '@/lib/assets';
import RotatingQuotes from '@/components/RotatingQuotes';
import ScrollIndicator from '@/components/ScrollIndicator';

// Metadata moved to layout or generated via generateMetadata in parent

export default function HomePage() {
  // Pre-load 3 random landscape images for hero rotation
  const [heroImages] = useState(() => [
    getRandomAssetFromFolder('landscapes'),
    getRandomAssetFromFolder('landscapes'),
    getRandomAssetFromFolder('landscapes'),
  ]);
  
  const [heroImageIndex, setHeroImageIndex] = useState(0);
  
  // Pre-load quotes from axioms (this will now run on client)
  const [heroQuotes] = useState(() => {
    // Fallback quotes for hero section
    return [
      {
        id: 'poetic-knowledge-1',
        quote: 'Poetic knowledge is the key to motivation because it is about what is REAL... Connection and wonder are the driving forces. Love is the anchor.',
        author: 'John Senior',
        source: 'The Restoration of Christian Culture',
        category: 'philosophy' as const,
      },
      {
        id: 'poetic-knowledge-2',
        quote: 'Poetic knowledge is the attempt to know the way a child knows things, or the way a lover knows the beloved. It gets inside and becomes a part of what is known.',
        author: 'John Senior',
        source: 'The Restoration of Christian Culture',
        category: 'philosophy' as const,
      },
      {
        id: 'sense-story-1',
        quote: 'We learn to love what is good by seeing and touching and tasting what is good—through sense and story, not through systems.',
        author: 'John Senior',
        source: 'The Restoration of Christian Culture',
        category: 'philosophy' as const,
      },
    ];
  });
  
  const [legendMakersQuote] = useState({
    id: 'mythopoeia-legend-makers',
    quote: 'Blessed are the legend-makers with their rhyme of things not found within recorded time.',
    author: 'J.R.R. Tolkien',
    source: 'Mythopoeia',
    category: 'beauty' as const,
  });
  
  const handleHeroRefresh = () => {
    setHeroImageIndex((i) => (i + 1) % heroImages.length);
  };

  return (
    <>
      {/* Hero Section with Full-Width Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {heroImages[heroImageIndex] && (
          <>
            <div className="hero-image-pan absolute inset-0 z-0 w-full" style={{ height: '120vh' }}>
              <OptimizedImage
                asset={heroImages[heroImageIndex]}
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
          {heroQuotes.length > 0 && (
            <RotatingQuotes 
              quotes={heroQuotes} 
              autoplay={false}
              showRefreshButton={true}
              onRefresh={handleHeroRefresh}
            />
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
        
        <ScrollIndicator />
      </section>

      {/* Welcome Section - Clean Typography */}
      <section className="py-20 bg-parchment">
        <ContentContainer width="narrow">
          <div className="text-center space-y-8">
            <p className="text-xl md:text-2xl leading-relaxed text-forest">
              The educational vision of Dr. John Senior begins with{' '}
              <strong>wonder</strong>, progresses through{' '}
              <strong>physical discipline and adventure</strong>, and nurtures
              the soul's ascent to <strong>wisdom</strong> — all rooted in a
              liturgical rhythm and the poetic mode of knowing.
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

            <Link href="/philosophy" className="group block">
              <div className="text-center space-y-6 p-8 hover:bg-parchment/30 transition-all duration-300 rounded-lg">
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

            <Link href="/engage" className="group block">
              <div className="text-center space-y-6 p-8 hover:bg-parchment/30 transition-all duration-300 rounded-lg">
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
              <CTAButton href="/engage" variant="outline" size="lg">
                Engage with Network
              </CTAButton>
            </div>
          </div>
        </ContentContainer>
      </section>
    </>
  );
}
