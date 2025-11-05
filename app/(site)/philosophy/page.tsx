import QuoteCard from '@/components/QuoteCard';
import SectionHeading from '@/components/SectionHeading';
import ContentContainer from '@/components/ContentContainer';
import InteractiveStages from '@/components/InteractiveStages';
import CTAButton from '@/components/CTAButton';
import OptimizedImage from '@/components/OptimizedImage';
import { Accordion, AccordionItem } from '@/components/Accordion';
import { getQuotesBySource } from '@/lib/content';
import { getAxiomsQuotesBySection } from '@/lib/content/axioms';
import { getRandomAssetFromFolder } from '@/lib/assets';
import RotatingQuotes from '@/components/RotatingQuotes';
import ResourceTeaser from '@/components/ResourceTeaser';
import EssentialTextsGrid from '@/components/EssentialTextsGrid';
import { getTextTeaser } from '@/lib/content/teasers';
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
  const scriptureQuotes = await getQuotesBySource('Knox');

  // Get foundational wisdom quotes for hero section - provide all for rotating display
  const foundationalQuotes = await getAxiomsQuotesBySection('Quote Bank: Foundational Wisdom');
  
  // Get a random hero image for visual interest (manuscript or classical art)
  const heroAsset = getRandomAssetFromFolder('sacred-texts');

  // Get teasers for resource lists
  const booksTeaser = await getTextTeaser('Book-Suggestions-by-Stage', 'THE NURSERY', 5);
  const mediaTeaser = await getTextTeaser('Media-Suggestions', 'Adventure & Heroism', 5);
  const musicTeaser = await getTextTeaser('Music-Recommendations', 'Beginner-Friendly Classical Works', 5);
  const artTeaser = await getTextTeaser('Art-Suggestions', 'Book Illustrators', 5);

  // Essential texts for grid display
  const essentialTexts = [
    {
      slug: 'integrated_humanities_lecture',
      title: 'Integrated Humanities Lecture',
      author: 'Dr. Dennis Quinn & Dr. Frank Nelick',
      description: "The IHP lecture laying out Senior's educational philosophy in action - practical, succinct, and essential for understanding the gymnasium stage.",
      tags: ['philosophy', 'education', 'poetic-knowledge'],
    },
    {
      slug: '1927-GK-Chesterton-The-Outline-of-Sanity',
      title: 'The Outline of Sanity',
      author: 'G.K. Chesterton',
      description: "Chesterton's defense of distributism and cultural sanity against modern mechanization and concentration.",
      tags: ['distributism', 'culture', 'sanity'],
    },
    {
      slug: 'Boethius%20the%20Consolation%20of%20Philosophy',
      title: 'The Consolation of Philosophy',
      author: 'Boethius',
      description: 'Medieval masterwork blending philosophy and poetry to explore providence, fortune, and true happiness.',
      tags: ['philosophy', 'medieval', 'providence'],
    },
    {
      slug: 'Mythopoeia',
      title: 'Mythopoeia',
      author: 'J.R.R. Tolkien',
      description: "Tolkien's poem defending myth-making and imaginative sub-creation as participation in truth.",
      tags: ['myth', 'imagination', 'poetry'],
    },
    {
      slug: 'The%20Preventative%20System',
      title: 'The Preventative System',
      author: 'St. John Bosco',
      description: "St. Don Bosco's educational philosophy emphasizing prevention over punishment through loving guidance, reason, religion, and kindness.",
      tags: ['education', 'virtue', 'discipline'],
    },
    {
      slug: 'other%20textual%20excerpts',
      title: 'Other Textual Excerpts',
      description: 'A compilation of passages from Hugh of St. Victor, medieval scholastics, and others providing context for poetic knowledge and sensory formation.',
      tags: ['medieval', 'philosophy', 'excerpts'],
    },
  ];

  return (
    <>
      {/* Hero Section with Full-Width Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {heroAsset && (
          <>
            <div className="absolute inset-0 z-0 overflow-hidden">
              <div className="hero-image-pan absolute inset-0 w-full" style={{ height: '120vh' }}>
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
            </div>
            <div className="absolute inset-0 z-[1] bg-gradient-to-b from-charcoal/40 via-charcoal/30 to-charcoal/60"></div>
          </>
        )}

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
          <SectionHeading level={1} align="center" decorated className="text-white [text-shadow:_0_2px_8px_rgb(0_0_0_/_80%)]">
            Philosophy & Resources
          </SectionHeading>

          {foundationalQuotes && foundationalQuotes.length > 0 && (
            <RotatingQuotes quotes={foundationalQuotes} autoplay={false} />
          )}
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
                    objectFit="cover"
                    className="h-full w-full"
                  />
                </div>
              </div>
            </div>
          </AccordionItem>

          <AccordionItem value="physical-discipline" title="Adventure, Story, & Physical Discipline">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-charcoal/90">
                  The gymnasium stage (ages 7-13) emphasizes bodily rigor, outdoor
                  challenges, and experiential learning to form resilient "Chivalric
                  Wayfarers." Through sports, liturgical life, and benevolent neglect,
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
                    objectFit="cover"
                    className="h-full w-full"
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
                    objectFit="cover"
                    className="h-full w-full"
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
                    objectFit="cover"
                    className="h-full w-full"
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
            Scriptural Anchors
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

        </ContentContainer>
      </section>

      {/* Resources & Lists Section */}
      <section id="resources" className="py-20 bg-white">
        <ContentContainer width="wide">
          <SectionHeading level={2} align="center" className="mb-8">
            Resources & Lists
          </SectionHeading>
          
          <p className="text-center text-xl text-charcoal/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            Curated recommendations for books, media, music, and art to support poetic formation. 
            Each list offers a sampling here with full resources available to view or download.
          </p>

          {/* Resource Teasers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {booksTeaser && (
              <ResourceTeaser
                title="Book Suggestions by Developmental Stage"
                description="A curated reading list organized by developmental stages, emphasizing imaginative literature"
                items={booksTeaser.items}
                fullListUrl="/texts/Book-Suggestions-by-Stage"
                icon="📚"
              />
            )}
            
            {mediaTeaser && (
              <ResourceTeaser
                title="Media Suggestions"
                description="Films and shows embodying wonder, adventure, and virtue"
                items={mediaTeaser.items}
                fullListUrl="/texts/Media-Suggestions"
                icon="🎬"
              />
            )}
            
            {musicTeaser && (
              <ResourceTeaser
                title="Music Recommendations"
                description="Classical, liturgical, and folk music for cultivating beauty"
                items={musicTeaser.items}
                fullListUrl="/texts/Music-Recommendations"
                icon="🎵"
              />
            )}
            
            {artTeaser && (
              <ResourceTeaser
                title="Art Suggestions"
                description="Visual art and artists for wonder-filled formation"
                items={artTeaser.items}
                fullListUrl="/texts/Art-Suggestions"
                icon="🎨"
              />
            )}
          </div>

          {/* Essential Texts */}
          <div className="mt-16 pt-16 border-t-2 border-charcoal/10">
            <SectionHeading level={3} align="center" className="mb-8">
              Essential Texts for Further Study
            </SectionHeading>
            
            <p className="text-center text-lg text-charcoal/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              Explore the foundational philosophical texts and excerpts behind this educational vision. 
              Read John Senior, Chesterton, Tolkien, and medieval sources to deepen your understanding.
            </p>

            <EssentialTextsGrid texts={essentialTexts} />
            
            <div className="mt-12 text-center">
              <CTAButton href="/texts/Essential-Texts-Reading-List" variant="outline" size="lg">
                View Complete Reading List
              </CTAButton>
            </div>
          </div>
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
              Connect with schools embodying this philosophy, discover ways to engage in your community,
              and access the full resource library above.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <CTAButton href="/engage" variant="primary" size="lg">
                Engage & Connect
              </CTAButton>
              <CTAButton href="/schools" variant="outline" size="lg">
                Explore Schools
              </CTAButton>
            </div>
          </div>
        </ContentContainer>
      </section>
    </>
  );
}
