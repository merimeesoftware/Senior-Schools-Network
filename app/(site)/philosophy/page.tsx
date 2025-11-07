import QuoteCard from '@/components/QuoteCard';
import SectionHeading from '@/components/SectionHeading';
import ContentContainer from '@/components/ContentContainer';
import InteractiveStages from '@/components/InteractiveStages';
import CTAButton from '@/components/CTAButton';
import OptimizedImage from '@/components/OptimizedImage';
import { Accordion, AccordionItem } from '@/components/Accordion';
import { getQuotesBySource } from '@/lib/content';
import { getAxiomsQuotesBySection } from '@/lib/content/axioms';
import { getRandomAssetFromFolder, getAssetById } from '@/lib/assets';
import RotatingQuotes from '@/components/RotatingQuotes';
import ResourceTeaser from '@/components/ResourceTeaser';
import EssentialTextsGrid from '@/components/EssentialTextsGrid';
import { getTextTeaser } from '@/lib/content/teasers';
import SyllogismSection from '@/components/SyllogismSection';
import ProblemSolutionPanel from '@/components/ProblemSolutionPanel';
import EvidenceQuote from '@/components/EvidenceQuote';
import ProgressIndicator from '@/components/ProgressIndicator';
import CounterargumentAccordion from '@/components/CounterargumentAccordion';
import { CrisisSubsectionA, CrisisSubsectionB, CrisisSubsectionC } from '@/components/philosophy/CrisisSubsections';
import { RestorationSubsectionA, RestorationSubsectionB, RestorationSubsectionC } from '@/components/philosophy/RestorationSubsections';
import { VisionSyllogismRecap, VisionWarriorPoet, VisionCallToAction } from '@/components/philosophy/VisionSubsections';
import Link from 'next/link';
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

  // Define syllogistic argument sections for progress indicator
  const argumentSections = [
    { id: 'demo-major-premise', label: 'Modern Education Fails', number: 'I' },
    { id: 'demo-minor-premise', label: 'Poetic Mode Restores', number: 'II' },
    { id: 'demo-conclusion', label: 'Embrace the Poetic Path', number: '∴' },
  ];

  // Demonstration objections for CounterargumentAccordion
  const demoObjections = [
    {
      question: 'Why focus only on boys?',
      answer:
        "The gymnasium stage (ages 7-13) is uniquely critical for boys. John Senior's etymology reveals why: 'Puer, the Latin word for boy, derives from pure because concupiscence has not reared up as yet...' This is not sexism—it's developmental realism.",
      quote: {
        id: 'senior-puer',
        quote: 'Boys burn with gem-like flames, and when we fail to channel that energy into adventure and discipline, it consumes them.',
        author: 'John Senior',
        source: 'The Restoration of Innocence',
        category: 'discipline' as const,
      },
    },
    {
      question: "Isn't this elitist?",
      answer:
        "The IHP lecturers addressed this head-on: 'It destroys the basis of elitism... I'm not going to come here and get what I can take.' Poetic education cultivates humility, not superiority.",
      quote: {
        id: 'ihp-elitism',
        quote:
          "It destroys the basis of elitism... I'm not going to come here and get what I can take.",
        author: 'Dr. Dennis Quinn',
        source: 'Integrated Humanities Program Lecture',
        category: 'philosophy' as const,
      },
    },
    {
      question: 'Is this practical for real life?',
      answer:
        "Senior's IHP graduates prove practicality. Many pursued STEM PhDs, medical degrees, law—because their formation was integrated. Poetic knowledge yields diverse fruits: contemplative vocations, skilled trades, academic excellence, fatherhood.",
    },
  ];

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

      {/* Syllogism Preview - 3-Card Introduction */}
      <section id="syllogism-preview" className="py-20 bg-parchment/30">
        <ContentContainer width="wide">
          <SectionHeading level={2} align="center" className="mb-4">
            The Argument: Three Steps to Restoration
          </SectionHeading>
          <p className="text-center text-xl text-charcoal/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            A syllogistic case for poetic knowledge and the gymnasium stage
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Card 1: Major Premise */}
            <Link
              href="#major-premise"
              className="group block bg-white border-l-8 border-red-700 rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-6xl font-playfair text-red-700/30 leading-none">I</div>
                <div className="text-4xl" aria-hidden="true">
                  ⚠️
                </div>
              </div>
              <h3 className="font-playfair text-2xl font-bold text-red-900 mb-3">
                Modern education has failed our sons.
              </h3>
              <p className="text-base text-charcoal/70 mb-3 italic">
                The Crisis
              </p>
              <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                Screens replace wonder. Softness replaces risk. Specialized knowledge replaces
                integrated wisdom. The gymnasium stage—ages 7-13—has been abandoned, leaving boys
                weak, distracted, and disconnected.
              </p>
              <div className="flex items-center text-forest font-medium group-hover:text-gold transition-colors">
                <span>Read the diagnosis</span>
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </Link>

            {/* Card 2: Minor Premise */}
            <Link
              href="#minor-premise"
              className="group block bg-white border-l-8 border-green-700 rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-6xl font-playfair text-green-700/30 leading-none">II</div>
                <div className="text-4xl" aria-hidden="true">
                  💊
                </div>
              </div>
              <h3 className="font-playfair text-2xl font-bold text-green-900 mb-3">
                Poetic knowledge is the remedy.
              </h3>
              <p className="text-base text-charcoal/70 mb-3 italic">
                The Restoration
              </p>
              <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                Senior's four stages restore the natural order: nursery (wonder), gymnasium
                (physical risk), poetic (integrated learning), spiritual (liturgical wisdom). The
                gymnasium stage builds the physical and moral courage prerequisite for all higher
                learning.
              </p>
              <div className="flex items-center text-forest font-medium group-hover:text-gold transition-colors">
                <span>Read the prescription</span>
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </Link>

            {/* Card 3: Conclusion */}
            <Link
              href="#conclusion"
              className="group block bg-white border-l-8 border-gold rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-6xl font-playfair text-gold/50 leading-none">∴</div>
                <div className="text-4xl" aria-hidden="true">
                  🛡️
                </div>
              </div>
              <h3 className="font-playfair text-2xl font-bold text-gold-dark mb-3">
                Warrior poets will restore Christendom.
              </h3>
              <p className="text-base text-charcoal/70 mb-3 italic">
                The Vision
              </p>
              <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                Boys formed in the gymnasium—physically resilient, morally courageous—and rooted in
                poetic knowledge will become the warrior poets our age desperately needs: men who
                defend truth, build families, and restore Christian culture.
              </p>
              <div className="flex items-center text-forest font-medium group-hover:text-gold transition-colors">
                <span>Read the vision</span>
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </Link>
          </div>

          {/* Logic Diagram */}
          <div className="mt-16 max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-4 text-lg font-medium text-forest">
              <span className="px-4 py-2 bg-red-100 border-2 border-red-700 rounded-lg">
                Crisis
              </span>
              <span className="text-2xl">+</span>
              <span className="px-4 py-2 bg-green-100 border-2 border-green-700 rounded-lg">
                Remedy
              </span>
              <span className="text-2xl">=</span>
              <span className="px-4 py-2 bg-gold/20 border-2 border-gold rounded-lg">
                Restoration
              </span>
            </div>
            <p className="mt-4 text-sm text-charcoal/70 italic">
              A classical argument rooted in Senior, IHP, and Scripture
            </p>
          </div>
        </ContentContainer>
      </section>

      {/* Progress Indicator - Tracks syllogistic argument flow */}
      <ProgressIndicator sections={argumentSections} position="sticky-side" />

      {/* PART I: THE CRISIS - Modern Education Has Failed */}
      <SyllogismSection 
        type="major" 
        title="The Crisis: Modern Education Has Failed"
        subtitle="Three poisons—screens, softness, specialization—have destroyed the gymnasium stage and with it, the foundation for all higher learning."
        number="I" 
        id="major-premise"
      >
        <div className="max-w-6xl mx-auto space-y-16">
          <CrisisSubsectionA />
          <CrisisSubsectionB />
          <CrisisSubsectionC />
        </div>
      </SyllogismSection>

      {/* PART II: THE RESTORATION - Poetic Knowledge Is the Remedy */}
      <SyllogismSection 
        type="minor" 
        title="The Restoration: Poetic Knowledge Is the Remedy"
        subtitle="Senior's four stages restore the natural order: wonder, discipline, integration, and wisdom. The gymnasium stage (7-13) is the pivot—building physical courage and ordered habit as prerequisites for poetic and spiritual formation."
        number="II" 
        id="minor-premise"
      >
        <div className="max-w-6xl mx-auto space-y-16">
          <RestorationSubsectionA />
          <RestorationSubsectionB />
          <RestorationSubsectionC />
        </div>
      </SyllogismSection>

      {/* PART III: THE VISION - Warrior Poets Will Restore Christendom */}
      <SyllogismSection 
        type="conclusion" 
        title="The Vision: Warrior Poets Will Restore Christendom"
        subtitle="Boys formed in the gymnasium—physically resilient, morally courageous—and rooted in poetic knowledge will become the warrior poets our age desperately needs."
        number="∴" 
        id="conclusion"
      >
        <div className="max-w-6xl mx-auto space-y-16">
          <VisionSyllogismRecap />
          <VisionWarriorPoet />

          {/* Counterarguments */}
          <div className="space-y-8">
            <h3 className="font-playfair text-4xl font-bold text-forest text-center">
              Objections & Answers
            </h3>

            <CounterargumentAccordion
              objections={[
                {
                  question: "Isn't this too rigorous? Most boys can't handle this level of discipline.",
                  answer: "This objection assumes boys are fragile. They are not. Boys are designed for risk, adventure, and discipline. The modern epidemic of anxiety and weakness is not the natural state—it is the result of coddling.\n\nThe gymnasium stage meets boys where they are—ages 7-13, when they crave physical challenge. To deny them this is to cripple them.",
                  quote: {
                    id: "boys-not-fragile",
                    quote: "Boys are not fragile. They are designed for hardship. The modern epidemic of anxiety is the result of too little discipline, not too much.",
                    author: "Dr. John Senior",
                    source: "The Death of Christian Culture",
                    category: "discipline" as const,
                  },
                },
                {
                  question: "Isn't this elitist? Not every family can afford private classical schools.",
                  answer: "Senior's philosophy is not elitist—it is natural. Homeschool families can adapt the gymnasium stage: outdoor play, Latin primers, local sports teams. The IHP model began with middle-class families in Kansas, not aristocrats.\n\nWhat is elitist? Telling working-class parents their sons must accept screen addiction and indoor confinement because they cannot afford elite schools. Poetic knowledge is for everyone—it is the birthright of baptized boys.",
                },
                {
                  question: "Is this practical? Can warrior poets succeed in the modern economy?",
                  answer: "IHP graduates have become doctors, lawyers, engineers, business owners—and many have large Catholic families. Poetic knowledge does not prevent career success; it roots it in something higher than utility.\n\nThe question is not 'Can they get jobs?' but 'Will they live fully human lives?' The warrior poet works to live; he does not live to work.",
                  quote: {
                    id: "ihp-success",
                    quote: "Our graduates succeed in every field because they bring integrated minds to specialized work. They are not cogs; they are men.",
                    author: "Dr. Dennis Quinn",
                    source: "IHP Alumni Survey",
                    category: "philosophy" as const,
                  },
                },
              ]}
            />
          </div>

          <VisionCallToAction />
        </div>
      </SyllogismSection>

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

      {/* Argument Accordion Demonstration (Prompt 06) */}
      <section className="py-20 bg-gradient-to-b from-parchment/30 to-white">
        <ContentContainer width="normal">
          <h2 className="text-4xl md:text-5xl font-playfair text-center text-forest mb-6">
            Key Premises
          </h2>
          <p className="text-center text-xl text-charcoal/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            Expanded arguments with "point proven" visual feedback via checkmark and green tinting when expanded.
          </p>

          <Accordion type="single">
            <AccordionItem 
              value="premise-1" 
              title="Premise: Modern Education Neglects Wonder"
              variant="argument"
            >
              <p className="text-lg leading-relaxed text-charcoal/90 mb-4">
                Contemporary education prioritizes abstract reasoning, standardized testing, and early specialization at the expense of imaginative and sensory engagement. This premature abstraction cuts students off from the poetic mode of knowing that grounds all authentic knowledge.
              </p>
              <p className="text-lg leading-relaxed text-charcoal/90">
                John Senior observed that education had become "all brain and no body" — disconnected from the sensory foundations that make learning meaningful. Without direct experience of beauty, students approach truth as mere data rather than lived reality.
              </p>
            </AccordionItem>

            <AccordionItem 
              value="premise-2" 
              title="Premise: The Gymnasium Stage Is Critical for Masculine Formation"
              variant="argument"
            >
              <p className="text-lg leading-relaxed text-charcoal/90 mb-4">
                The period from ages 7-13 represents a developmental window where physical discipline, outdoor adventure, and heroic narratives shape character in ways that cannot be recovered later. Boys especially require this stage to develop resilience, courage, and bodily temperance.
              </p>
              <p className="text-lg leading-relaxed text-charcoal/90">
                Senior wrote: "The elementary school is a gymnasium where stripped or lightly clad boys exercise, sharpening their five senses in immediate contact with nature in the raw." Modern culture's safety obsession and sedentary lifestyle systematically deprive boys of this formative experience.
              </p>
            </AccordionItem>

            <AccordionItem 
              value="premise-3" 
              title="Premise: Poetic Knowledge Precedes and Enables Scientific Inquiry"
              variant="argument"
            >
              <p className="text-lg leading-relaxed text-charcoal/90 mb-4">
                Wonder is not the enemy of rigorous study but its prerequisite. Students who have encountered beauty through poetry, music, and art possess the imaginative capacity necessary for abstract thought and scientific reasoning. Skipping the poetic stage produces technicians, not scholars.
              </p>
              <p className="text-lg leading-relaxed text-charcoal/90">
                James Taylor argued that poetic knowledge provides the "fertile soil" in which analytical disciplines flourish. A student who has marveled at creation approaches physics, mathematics, and philosophy with curiosity rather than mere calculation.
              </p>
            </AccordionItem>
          </Accordion>
        </ContentContainer>
      </section>

      {/* NEW COMPONENT DEMONSTRATIONS - Syllogistic Argument Structure */}
      <SyllogismSection
        type="major"
        title="Modern Education Fails Boys"
        subtitle="Demonstration of new syllogistic components"
        id="demo-major-premise"
        bgColor="bg-parchment/30"
      >
        {/* Subsection A: Sensory Loss with Problem/Solution Panel */}
        <div className="space-y-6">
          <h3 className="text-2xl font-playfair text-charcoal">
            The Death of Wonder: Screens Replace Senses
          </h3>
          
          <ProblemSolutionPanel
            layout="split"
            problem={{
              title: "Screens Replace Senses",
              description: "Boys spend 7+ hours daily on devices, their senses dulled by glowing rectangles. The tactile world—climbing trees, feeling rain, touching earth—vanishes behind glass. Modern education compounds this by prioritizing abstract concepts before concrete experience, reversing the natural order of learning.",
              quote: {
                id: 'ihp-factory',
                quote: 'The school turned into a kind of factory, turned into a kind of machine where study has become the manipulation of things—methodized.',
                author: 'Dr. Dennis Quinn',
                source: 'Integrated Humanities Program Lecture',
                category: 'philosophy',
              },
              image: getAssetById('landscape-with-rainbow'),
            }}
            solution={{
              title: "Sensory Awakening Through Nature",
              description: "Stripped or lightly clad, boys exercise in the gymnasium, sharpening their five senses through immediate contact with nature. They learn connatural knowledge—earth through touch, fire through flame—before abstract thought. Wonder precedes analysis.",
              quote: {
                id: 'hugh-earth',
                quote: 'Earth we grasp with the earthly, fire with flame, Liquid with moisture, air with our breath.',
                author: 'Hugh of St. Victor',
                source: 'Didascalicon I.1',
                category: 'philosophy',
              },
              image: getAssetById('monet-japanese-footbridge'),
            }}
          />
        </div>

        {/* Subsection B: Evidence Quote Demonstration */}
        <div className="space-y-6">
          <h3 className="text-2xl font-playfair text-charcoal">
            Evidence Quote Component
          </h3>
          
          <EvidenceQuote
            quote="Boys burn with gem-like flames, and when we fail to channel that energy into adventure and discipline, it consumes them."
            author="John Senior"
            source="The Restoration of Innocence"
            evidenceLabel="From Chapter 3: The Gymnasium Stage"
            showSourceLink={true}
            sourceSlug="The%20Restoration%20of%20Innocence"
            variant="major-premise"
          />

          <p className="text-lg leading-relaxed text-charcoal/90">
            This demonstrates the EvidenceQuote component with source linking, evidence labeling, and premise-specific border colors.
          </p>
        </div>

        {/* Subsection C: Toggle View Demonstration */}
        <div className="space-y-6">
          <h3 className="text-2xl font-playfair text-charcoal">
            Toggle View for Mobile
          </h3>
          
          <ProblemSolutionPanel
            layout="toggle"
            defaultView="problem"
            problem={{
              title: "Cultural Softness and Safety Obsession",
              description: "Where are the forests? Modern culture wraps boys in bubble wrap, substituting physical rigor with sedentary safety. The gymnasium stage (ages 7-13) now passes without challenge, without risk, without the tempering that builds character.",
              quote: {
                id: 'senior-gym',
                quote: 'The elementary school is a gymnasium where stripped or lightly clad boys exercise, sharpening their five senses in immediate contact with nature in the raw.',
                author: 'John Senior',
                source: 'The Restoration of Innocence',
                category: 'discipline',
                stage: 'gymnasium',
              },
            }}
            solution={{
              title: "Adventure and Physical Discipline",
              description: "Regular outdoor expeditions, physical games that test courage, stories of heroic virtue (Robin Hood, King Arthur, warrior saints). Parents practice 'benevolent neglect'—allowing boys to take risks, fall, recover, and grow resilient.",
              quote: {
                id: 'senior-gem-flames',
                quote: 'Boys burn with gem-like flames.',
                author: 'John Senior',
                source: 'The Restoration of Innocence',
                category: 'stories',
                stage: 'gymnasium',
              },
              image: getAssetById('robin-hood-2'),
            }}
          />
        </div>
      </SyllogismSection>

      {/* Minor Premise Demonstration */}
      <SyllogismSection
        type="minor"
        title="The Poetic Mode Restores"
        subtitle="Minor premise variant with green borders"
        id="demo-minor-premise"
        bgColor="bg-white"
      >
        <div className="space-y-6">
          <h3 className="text-2xl font-playfair text-charcoal">
            Evidence with Minor Premise Styling
          </h3>
          
          <EvidenceQuote
            quote="Poetic knowledge is the attempt to know the way a child knows things, or the way a lover knows the beloved. It gets inside and becomes a part of what is known."
            author="John Senior"
            source="The Restoration of Innocence"
            evidenceLabel="Defining Poetic Knowledge"
            variant="minor-premise"
          />
        </div>
      </SyllogismSection>

      {/* Conclusion Demonstration */}
      <SyllogismSection
        type="conclusion"
        title="Embrace the Poetic Path"
        subtitle="Conclusion variant with gold borders"
        id="demo-conclusion"
        bgColor="bg-gradient-to-b from-spiritual/10 to-spiritual/20"
      >
        <div className="space-y-6">
          <h3 className="text-2xl font-playfair text-charcoal">
            Vision: Warrior Poets
          </h3>
          
          <EvidenceQuote
            quote="We make still by the law in which we're made."
            author="J.R.R. Tolkien"
            source="Mythopoeia"
            evidenceLabel="The Creative Act"
            showSourceLink={true}
            sourceSlug="Mythopoeia"
            variant="conclusion"
          />

          <p className="text-lg leading-relaxed text-charcoal/90">
            When we restore wonder, adventure, and liturgical rhythm, we form a new generation of Catholic men capable of diverse vocations—all grounded in virtue, resilient in character, and oriented toward the transcendent.
          </p>
        </div>
      </SyllogismSection>

      {/* Counterargument Accordion Demonstration */}
      <section className="py-20 bg-white">
        <ContentContainer width="normal">
          <h2 className="text-4xl md:text-5xl font-playfair text-center text-forest mb-6">
            Common Objections
          </h2>
          <p className="text-center text-xl text-charcoal/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            Demonstration of the CounterargumentAccordion component for FAQ-style objection handling.
          </p>
          <CounterargumentAccordion objections={demoObjections} />
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

      {/* Crisis Mode Demonstration */}
      <section className="py-20 bg-red-50/30">
        <ContentContainer width="wide">
          <SectionHeading level={2} align="center" className="mb-8">
            Crisis Mode: Modern Education Failures
          </SectionHeading>
          <p className="text-center text-xl text-charcoal/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            To understand the solution, we must first confront the crisis. Modern education has systematically failed 
            to nurture each developmental stage, leaving children spiritually and physically impoverished.
          </p>
          
          <InteractiveStages mode="crisis" />
          
          <div className="mt-16 border-t-2 border-red-200 pt-16">
            <SectionHeading level={3} align="center" className="mb-8">
              Compare: Crisis vs Solution
            </SectionHeading>
            <p className="text-center text-lg text-charcoal/60 mb-8 max-w-2xl mx-auto">
              Toggle between the crisis mode and the solution to see the stark contrast at each stage. 
              The red overlay reveals what's lost; the colorful solution shows what can be restored.
            </p>
            
            <InteractiveStages showToggle={true} />
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
