'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import CTAButton from '@/components/CTAButton';
import ContentContainer from '@/components/ContentContainer';
import InteractiveStages from '@/components/InteractiveStages';
import OptimizedImage from '@/components/OptimizedImage';
import { getRandomAssetFromFolder } from '@/lib/assets';
import RotatingQuotes from '@/components/RotatingQuotes';

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
  
  // Mission & Adventure quotes for visual break section
  const [missionQuotes] = useState(() => [
    {
      id: 'boys-gem-flames',
      quote: 'Boys burn with gem-like flames',
      author: 'John Senior',
      category: 'adventure' as const,
    },
    {
      id: 'puer-etymology',
      quote: 'Puer, the Latin word for "boy," derives from "pure" because concupiscence has not reared up as yet. "Pure" comes from pyros, purifying "fire" (boys burn with gem-like flames) which in turn derives from pu, an Indo-European root meaning "power," or potential force like the energy in atoms and the elements.',
      author: 'John Senior',
      source: 'Restoration of Innocence',
      category: 'adventure' as const,
    },
    {
      id: 'gymnasium-naked',
      quote: 'The elementary school is a gymnasium (from gymnos, "naked") where stripped or lightly clad boys exercise, sharpening their five senses in immediate contact with nature in the raw.',
      author: 'John Senior',
      source: 'Restoration of Innocence I.3',
      category: 'adventure' as const,
    },
    {
      id: 'ballad-second-birth',
      quote: 'For the end of the world was long ago, And all we dwell to-day As children of some second birth, Like a strange people left on earth After a judgment day.',
      author: 'G.K. Chesterton',
      source: 'The Ballad of the White Horse',
      category: 'adventure' as const,
    },
  ]);
  
  const [adventureImages] = useState(() => [
    getRandomAssetFromFolder('adventure'),
    getRandomAssetFromFolder('adventure'),
    getRandomAssetFromFolder('adventure'),
  ]);
  
  const [adventureImageIndex, setAdventureImageIndex] = useState(0);
  
  // Parallax effect for quote/image break
  const breakSectionRef = useRef<HTMLDivElement>(null);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      if (breakSectionRef.current) {
        const rect = breakSectionRef.current.getBoundingClientRect();
        const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
        setParallaxOffset(clampedProgress * 20); // Move 20% over scroll range
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initialize on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleHeroRefresh = () => {
    setHeroImageIndex((i) => (i + 1) % heroImages.length);
  };
  
  const handleMissionRefresh = () => {
    setAdventureImageIndex((i) => (i + 1) % adventureImages.length);
  };

  return (
    <>
      {/* Hero Section with Full-Width Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {heroImages[heroImageIndex] && (
          <>
            <div className="absolute inset-0 z-0 w-full h-full">
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

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center flex flex-col justify-between min-h-screen">
          <div className="flex-1 flex flex-col justify-center pt-20">
            <div className="pt-16 md:pt-24">
              {heroQuotes.length > 0 && (
                <RotatingQuotes 
                  quotes={heroQuotes} 
                  autoplay={false}
                  showRefreshButton={false}
                  onRefresh={handleHeroRefresh}
                />
              )}
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
              <CTAButton href="/schools" variant="primary" size="lg">
                Explore Schools
              </CTAButton>
              <CTAButton href="/philosophy" variant="outline" size="lg">
                Our Philosophy
              </CTAButton>
            </div>
          </div>
          
          {/* Refresh button at bottom */}
          <div className="pb-8">
            <button
              onClick={handleHeroRefresh}
              className="group flex items-center gap-2 mx-auto text-gold/80 hover:text-gold transition-colors focus-visible-ring rounded-full p-2"
              aria-label="New Inspiration"
            >
              <svg
                className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </button>
          </div>
        </div>
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

      {/* Quote/Image Break - Mission & Adventure */}
      <section 
        ref={breakSectionRef}
        className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden"
      >
        {/* Background image with parallax */}
        {adventureImages[adventureImageIndex] && (
          <div 
            className="absolute inset-0 z-0 scale-110"
            style={{
              transform: `translateY(${parallaxOffset}%)`,
              willChange: 'transform',
            }}
          >
            <OptimizedImage
              asset={adventureImages[adventureImageIndex]}
              alt="Chivalric wayfarer adventure"
              fill={true}
              objectFit="cover"
              sizes="100vw"
              className="w-full h-full"
            />
          </div>
        )}
        
        {/* Dark overlay */}
        <div className="absolute inset-0 z-[1] bg-charcoal/50"></div>
        
        {/* Quote with refresh button */}
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          {missionQuotes.length > 0 && (
            <RotatingQuotes 
              quotes={missionQuotes}
              autoplay={false}
              showRefreshButton={true}
              onRefresh={handleMissionRefresh}
              quoteClassName="text-2xl md:text-4xl font-playfair italic text-white leading-relaxed drop-shadow-2xl"
              authorClassName="text-lg md:text-xl text-parchment/90 font-lato mt-4"
            />
          )}
        </div>
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
