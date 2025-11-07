import QuoteCard from '@/components/QuoteCard';
import SectionHeading from '@/components/SectionHeading';
import ContentContainer from '@/components/ContentContainer';
import OptimizedImage from '@/components/OptimizedImage';
import { getQuotesBySource } from '@/lib/content';
import { getAxiomsQuotesBySection } from '@/lib/content/axioms';
import { getRandomAssetFromFolder } from '@/lib/assets';
import RotatingQuotes from '@/components/RotatingQuotes';
import SyllogismSection from '@/components/SyllogismSection';
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
    { id: 'major-premise', label: 'Modern Education Fails', number: 'I' },
    { id: 'minor-premise', label: 'Poetic Mode Restores', number: 'II' },
    { id: 'conclusion', label: 'Embrace the Poetic Path', number: '∴' },
  ];

  // Get foundational wisdom quotes for hero section - provide all for rotating display
  const foundationalQuotes = await getAxiomsQuotesBySection('Quote Bank: Foundational Wisdom');
  
  // Get a random hero image for visual interest (manuscript or classical art)
  const heroAsset = getRandomAssetFromFolder('sacred-texts');

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
              </div>
              <h3 className="font-playfair text-2xl font-bold text-green-900 mb-3">
                Poetic knowledge is the remedy.
              </h3>
              <p className="text-base text-charcoal/70 mb-3 italic">
                The Restoration
              </p>
              <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                The four stages restore the natural order: nursery (wonder), gymnasium
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

      {/* Wrap argument sections with progress indicator */}
      <div className="relative">
        {/* Progress Indicator - Tracks syllogistic argument flow */}
        <ProgressIndicator 
          sections={argumentSections} 
          position="sticky-side" 
          hideUntilId="major-premise"
        />

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
        subtitle="The four stages restore the natural order: wonder, discipline, integration, and wisdom. The gymnasium stage (7-13) is the pivot—building physical courage and ordered habit as prerequisites for poetic and spiritual formation."
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
      </div>

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
    </>
  );
}
