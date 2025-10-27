import QuoteCard from '@/components/QuoteCard';
import SectionHeading from '@/components/SectionHeading';
import ContentContainer from '@/components/ContentContainer';
import InteractiveStages from '@/components/InteractiveStages';
import CTAButton from '@/components/CTAButton';
import OptimizedImage from '@/components/OptimizedImage';
import { Accordion, AccordionItem } from '@/components/Accordion';
import { getQuotesBySource } from '@/lib/content';
import { getRandomAsset } from '@/lib/assets';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Philosophy & Resources',
  description:
    "Explore John Senior's philosophy: poetic knowledge, gymnasium discipline, and wonder-filled Catholic formation.",
  alternates: { canonical: '/philosophy' },
  openGraph: {
    title: 'Philosophy & Resources - Senior Schools Network',
    description:
      'Four core concepts: poetic knowledge, physical discipline, poetic-scientific foundations, and liturgical rhythm.',
    url: 'https://seniorschoolsnetwork.org/philosophy',
    images: [{ url: '/og-image-enclosed-garden.jpg', width: 1200, height: 630 }],
  },
};

export default async function PhilosophyPage() {
  const quotes = await getQuotesBySource();
  const scriptureQuotes = await getQuotesBySource('Knox');

  // Get featured quote for philosophy
  const featuredQuote = quotes.find((q) => q.id === 'mythopoeia-law');
  
  // Get a random hero image for visual interest (manuscript or classical art)
  const heroAsset = getRandomAsset({ 
    category: 'beauty', 
    tags: ['illuminated-manuscript', 'sacred-art'] 
  });

  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {heroAsset && (
          <>
            <div className="absolute inset-0 z-0">
              <OptimizedImage
                asset={heroAsset}
                alt="Illuminated manuscript symbolizing poetic knowledge"
                showCaption={false}
                fill={true}
                objectFit="cover"
                sizes="100vw"
                priority
                className="w-full h-full"
              />
            </div>
            <div className="absolute inset-0 z-[1] bg-gradient-to-b from-charcoal/70 via-charcoal/65 to-charcoal/60"></div>
          </>
        )}

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
          <SectionHeading level={1} align="center" decorated className="text-white [text-shadow:_0_2px_8px_rgb(0_0_0_/_80%)]">
            Philosophy & Resources
          </SectionHeading>

          {featuredQuote && (
            <div className="mt-8">
              <blockquote className="text-center space-y-6">
                <p className="text-2xl md:text-3xl font-playfair italic text-white leading-relaxed [text-shadow:_0_2px_8px_rgb(0_0_0_/_80%)]">
                  "{featuredQuote.quote}"
                </p>
                <footer className="text-lg text-parchment/95 [text-shadow:_0_1px_4px_rgb(0_0_0_/_60%)]">
                  <cite className="not-italic">— {featuredQuote.author}</cite>
                  {featuredQuote.source && (
                    <span className="block text-sm mt-2 text-parchment/90">({featuredQuote.source})</span>
                  )}
                </footer>
              </blockquote>
            </div>
          )}

          <div className="mt-8 text-center max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl leading-relaxed text-white [text-shadow:_0_2px_6px_rgb(0_0_0_/_75%)]">
              The educational vision of Dr. John Senior begins with{' '}
              <strong className="text-parchment">wonder</strong>, progresses
              through{' '}
              <strong className="text-parchment">
                physical discipline and adventure
              </strong>
              , and nurtures the soul's ascent to{' '}
              <strong className="text-parchment">wisdom</strong> — all rooted
              in Catholic faith and the poetic mode of knowing.
            </p>
          </div>
        </div>
      </section>

      {/* Core Concepts */}
      <section className="py-20 bg-white">
        <ContentContainer width="full">
          <SectionHeading level={2} align="center" className="mb-16">
            Core Concepts
          </SectionHeading>

          <Accordion type="single" defaultValue="poetic-knowledge" className="max-w-5xl mx-auto space-y-4">
          <AccordionItem value="poetic-knowledge" title="Poetic Knowledge">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-charcoal/90">
                  Intuitive, connatural knowing through senses, emotions, and
                  imagination — contrasting with purely rational modes. As Hugh of
                  St. Victor taught, wisdom begins with sensory delight: a child
                  encountering nature, stories stirring the heart, music evoking
                  transcendence.
                </p>
                <p className="text-lg leading-relaxed text-charcoal/90">
                  This mode of knowing precedes and grounds analytical thought. Rather than
                  beginning with definitions and abstractions, poetic knowledge invites
                  wonder through direct experience — walking in forests, listening to
                  ballads, contemplating starlight. The child knows the tree not by
                  botanical classification but by climbing it, sitting beneath its shade,
                  marveling at autumn leaves.
                </p>
                <div className="bg-gold/10 border-l-4 border-gold p-6 rounded-r-lg">
                  <p className="text-base italic text-charcoal/80 leading-relaxed">
                    "The poetic mode begins with wonder, sensory delight, and
                    imagination — a foundation for all later knowledge."
                  </p>
                  <p className="text-sm text-charcoal/60 mt-2">— James Taylor</p>
                </div>
              </div>
              <div className="min-h-[500px]">
                <div className="aspect-[4/3] relative overflow-hidden rounded-lg shadow-md h-full bg-parchment/20">
                  <OptimizedImage
                    assetId="landscape-with-rainbow"
                    alt="Natural wonder"
                    showCaption={false}
                    fill={true}
                    objectFit="contain"
                    className="h-full w-full"
                    imageClassName="object-contain"
                  />
                </div>
              </div>
            </div>
          </AccordionItem>

          <AccordionItem value="physical-discipline" title="Physical Discipline & Adventure">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-charcoal/90">
                  The gymnasium stage (ages 7-13) emphasizes bodily rigor, outdoor
                  challenges, and experiential learning to form resilient "warrior
                  poets." Through sports, liturgical hikes, and benevolent neglect,
                  boys especially develop physical toughness alongside spiritual
                  formation.
                </p>
                <p className="text-lg leading-relaxed text-charcoal/90">
                  Modern culture often fails this stage through sedentary lifestyles,
                  excessive safety protocols, and lack of adventure. Senior advocated for
                  regular outdoor expeditions, physical games that test courage, and
                  stories of heroic virtue (Robin Hood, King Arthur, lives of warrior
                  saints). Parents practice "benevolent neglect" — allowing boys to take
                  risks, fall, recover, and grow resilient.
                </p>
                <div className="bg-gymnasium/10 border-l-4 border-gymnasium p-6 rounded-r-lg">
                  <p className="text-base italic text-charcoal/80 leading-relaxed">
                    "Adventure, stories, physical discipline"
                  </p>
                  <p className="text-sm text-charcoal/60 mt-2">
                    — John Senior, <em>The Restoration of Innocence</em>
                  </p>
                </div>
              </div>
              <div className="min-h-[500px]">
                <div className="aspect-[4/3] relative overflow-hidden rounded-lg shadow-md h-full bg-parchment/20">
                  <OptimizedImage
                    assetId="robin-hood-2"
                    alt="Adventure and courage"
                    showCaption={false}
                    fill={true}
                    objectFit="contain"
                    className="h-full w-full"
                    imageClassName="object-contain"
                  />
                </div>
              </div>
            </div>
          </AccordionItem>

          <AccordionItem value="poetic-science" title="Poetic Foundations for Scientific Pursuit">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-charcoal/90">
                  Wonder and imagination serve as fertile soil for disciplined
                  inquiry. Modern education's premature push of STEM disrupts
                  natural stages, "poisoning the soil" with fragmentation. Recovery
                  of poetic modes enables diverse intellectual fruits — including
                  scientific excellence — while rejecting metrics that prioritize
                  rote skills over holistic formation.
                </p>
                <p className="text-lg leading-relaxed text-charcoal/90">
                  When children first encounter natural phenomena through wonder
                  (stargazing, observing insects, feeling textures), they develop a
                  connatural relationship with creation. This poetic foundation later
                  supports rigorous scientific inquiry — but only if abstraction follows
                  experience. Forcing formulas before fascination "poisons the soil,"
                  producing mechanistic thinking divorced from reality and beauty.
                </p>
                <p className="text-lg leading-relaxed text-charcoal/90">
                  Senior's approach produces graduates capable of excellence in STEM fields
                  precisely because their early formation cultivated wonder, imagination,
                  and integrated knowing — not despite rejecting premature specialization.
                </p>
              </div>
              <div className="min-h-[500px]">
                <div className="aspect-[4/3] relative overflow-hidden rounded-lg shadow-md h-full bg-parchment/20">
                  <OptimizedImage
                    assetId="monet-japanese-footbridge"
                    alt="Wonder and contemplation"
                    showCaption={false}
                    fill={true}
                    objectFit="contain"
                    className="h-full w-full"
                    imageClassName="object-contain"
                  />
                </div>
              </div>
            </div>
          </AccordionItem>

          <AccordionItem value="liturgical-rhythm" title="Liturgical Rhythm">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-charcoal/90">
                  Daily prayer, sacraments, and seasonal feasts are woven
                  organically into learning and adventure. Education mirrors the
                  "hortus conclusus" (enclosed garden) — a protected space for
                  innocence where repose, virtue, and wonder flourish in harmony
                  with the Church's calendar.
                </p>
                <p className="text-lg leading-relaxed text-charcoal/90">
                  Families and schools aligned with Senior's vision structure their days
                  around the Liturgy of the Hours, celebrate saints' feasts with special
                  readings and activities, and observe liturgical seasons through color,
                  music, and practice. Advent becomes a time of anticipation and
                  preparation; Lent, a season of physical and spiritual discipline.
                </p>
                <p className="text-lg leading-relaxed text-charcoal/90">
                  This rhythm resists the tyranny of clock-time and mechanized schedules,
                  instead cultivating repose (Pieper's <em>otium</em>) — leisure rooted in
                  worship and contemplation, essential for cultural renewal.
                </p>
              </div>
              <div className="min-h-[500px]">
                <div className="aspect-[4/3] relative overflow-hidden rounded-lg shadow-md h-full bg-parchment/20">
                  <OptimizedImage
                    assetId="garden-of-eden"
                    alt="The enclosed garden"
                    showCaption={false}
                    fill={true}
                    objectFit="contain"
                    className="h-full w-full"
                    imageClassName="object-contain"
                  />
                </div>
              </div>
            </div>
          </AccordionItem>
        </Accordion>
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
          
          <div className="mt-12 text-center">
            <CTAButton href="/schools" variant="primary" size="lg">
              Explore Schools by Stage
            </CTAButton>
          </div>
        </ContentContainer>
      </section>

      {/* Scripture Waypoints */}
      <section className="py-16 bg-parchment/30">
        <ContentContainer width="wide">
          <SectionHeading level={2} align="center" className="mb-12">
            Scripture Anchors
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {scriptureQuotes.slice(0, 3).map((sq) => (
              <QuoteCard
                key={sq.id}
                quote={sq.quote}
                author={sq.author}
                source={sq.source}
                variant="scripture"
              />
            ))}
          </div>

          <p className="text-center text-base text-charcoal/60 mt-10 italic max-w-3xl mx-auto">
            These verses guide our three user flows: school consideration
            (Ephesians 6:4), home application (Proverbs 22:6), and founding
            inspiration (Matthew 11:28).
          </p>
        </ContentContainer>
      </section>

      {/* Resources CTA */}
      <section className="py-20 bg-gradient-to-b from-spiritual/10 to-spiritual/20">
        <ContentContainer width="narrow">
          <div className="text-center space-y-8">
            <SectionHeading level={2} align="center">
              Explore Further
            </SectionHeading>
            <p className="text-xl md:text-2xl leading-relaxed text-charcoal/80 max-w-2xl mx-auto">
              Dive deeper into book lists, excerpts from Senior and companions,
              and resources for adapting this philosophy to your context.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <CTAButton href="/home-application" variant="primary" size="lg">
                Resources for Families
              </CTAButton>
              <CTAButton href="/join-found" variant="outline" size="lg">
                Guidance for Founders
              </CTAButton>
            </div>
          </div>
        </ContentContainer>
      </section>
    </>
  );
}
