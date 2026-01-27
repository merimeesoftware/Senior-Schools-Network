import QuoteCard from '@/components/QuoteCard';
import SectionHeading from '@/components/SectionHeading';
import ContentContainer from '@/components/ContentContainer';
import OptimizedImage from '@/components/OptimizedImage';
import QuoteImageBreak from '@/components/QuoteImageBreak';
import { getQuotesBySource } from '@/lib/content';
import { getAxiomsQuotesBySection } from '@/lib/content/axioms';
import { getRandomAssetFromFolder } from '@/lib/assets';
import RotatingQuotes from '@/components/RotatingQuotes';
import SyllogismSection from '@/components/SyllogismSection';
import ProgressIndicator from '@/components/ProgressIndicator';
import CounterargumentAccordion from '@/components/CounterargumentAccordion';
import SubsectionTabs from '@/components/SubsectionTabs';
import { CrisisSubsectionA, CrisisSubsectionB, CrisisSubsectionC } from '@/components/philosophy/CrisisSubsections';
import { RestorationSubsectionA } from '@/components/philosophy/RestorationSubsections';
import { VisionSyllogismRecap, VisionArchetypes, VisionCallToAction } from '@/components/philosophy/VisionSubsections';
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
    { id: 'major-premise', label: 'The Failure', number: 'I' },
    { id: 'minor-premise', label: 'The Opportunity', number: 'II' },
    { id: 'conclusion', label: 'The Vision', number: '∴' },
  ];

  // Get foundational wisdom quotes for hero section - provide all for rotating display
  const foundationalQuotes = await getAxiomsQuotesBySection('Quote Bank: Foundational Wisdom');
  
  // Quote banks for image breaks between sections
  const missionQuotes = await getAxiomsQuotesBySection('Quote Bank: Mission and Adventure');
  const liturgicalQuotes = await getAxiomsQuotesBySection('Quote Bank: Liturgical Rhythm and Rest');
  
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
                Modern education fragments the soul.
              </h3>
              <p className="text-base text-charcoal/70 mb-3 italic">
                The Gap
              </p>
              <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                Screens dominate, stealing sensory wonder from boys who once climbed trees and felt raw nature. 
                Softness coddles, replacing risk with confinement, while specialization silos knowledge, 
                abandoning integrated wisdom. This leaves sons weak, distracted, disconnected—cultural decay 
                where "the end of the world was long ago" (Chesterton).
              </p>
              <div className="flex items-center text-forest font-medium group-hover:text-gold transition-colors">
                <span>Explore the gap</span>
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
                Through nursery repose, gymnasium adventure, poetic integration, and spiritual liturgy, 
                boys reclaim wonder via senses and stories. Physical courage builds moral foundations; 
                narrative immersion awakens the soul. As Senior teaches, "Poetic knowledge gets inside 
                and becomes a part of what is known"—a flexible path for resilient formation.
              </p>
              <div className="flex items-center text-forest font-medium group-hover:text-gold transition-colors">
                <span>Discover the path</span>
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
                Chivalric Wayfarers restore Christendom.
              </h3>
              <p className="text-base text-charcoal/70 mb-3 italic">
                The Outcome
              </p>
              <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                Formed as Poetic Guardians, boys emerge resilient, courageous, rooted in truth—defending 
                families and culture with humility. "The farther you go... you really don't know very much 
                at all" (Socrates via lecture), yet they live fully human lives, succeeding in fields while 
                anchored in divine order, not utility.
              </p>
              <div className="flex items-center text-forest font-medium group-hover:text-gold transition-colors">
                <span>See the vision</span>
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
                Failure
              </span>
              <span className="text-2xl">+</span>
              <span className="px-4 py-2 bg-green-100 border-2 border-green-700 rounded-lg">
                Opportunity
              </span>
              <span className="text-2xl">=</span>
              <span className="px-4 py-2 bg-gold/20 border-2 border-gold rounded-lg">
                Vision
              </span>
            </div>
            <p className="mt-4 text-sm text-charcoal/70 italic">
              A classical argument rooted in Senior, animating principles, and Scripture
            </p>
          </div>
        </ContentContainer>
      </section>

      <QuoteImageBreak
        quotes={liturgicalQuotes}
        imageFolder="art-sacred"
        imageAlt="Sacred art and liturgical beauty"
        showRefreshButton={true}
        enableParallax={true}
      />

      {/* Wrap argument sections with progress indicator */}
      <div className="relative">
        {/* Progress Indicator - Tracks syllogistic argument flow */}
        <ProgressIndicator 
          sections={argumentSections} 
          position="sticky-side" 
          hideUntilId="major-premise"
        />

        {/* PART I: THE FAILURE - Modern Education's Gaps */}
        <SyllogismSection 
        type="major" 
        title="The Failure: Modern Education's Gaps"
        subtitle="Three poisons—screens, softness, specialization—erode the foundation for wonder and integrated learning."
        number="I" 
        id="major-premise"
      >
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* Summary: Three Poisons - Moved to top for TL;DR */}
          <div className="bg-red-50 rounded-lg p-6">
            <h3 className="font-playfair text-2xl font-bold text-red-900 mb-4">
              Summary: The Three Poisons
            </h3>
            <p className="text-base text-charcoal/90 leading-relaxed mb-6">
              Modern education has systematically destroyed the gymnasium and poetic stages through three interconnected failures:
            </p>
            
            {/* Compact 3-column card grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="font-playfair font-bold text-red-900 mb-2 text-xl">Screens</div>
                <div className="text-sm text-charcoal/70 leading-snug">
                  Replace wonder & sensory integration
                </div>
              </div>
              
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="font-playfair font-bold text-red-900 mb-2 text-xl">Softness</div>
                <div className="text-sm text-charcoal/70 leading-snug">
                  Replace risk & physical discipline
                </div>
              </div>
              
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="font-playfair font-bold text-red-900 mb-2 text-xl">Specialization</div>
                <div className="text-sm text-charcoal/70 leading-snug">
                  Replace integrated poetic knowledge
                </div>
              </div>
            </div>
          </div>

          {/* Tabbed subsections */}
          <SubsectionTabs
            variant="crisis"
            tabs={[
              {
                id: 'loss-of-wonder',
                label: 'Loss of Wonder & Sensory Integration',
                content: <CrisisSubsectionA />
              },
              {
                id: 'gymnasium-crisis',
                label: 'Cultural Softness & Gymnasium Crisis',
                content: <CrisisSubsectionB />
              },
              {
                id: 'specialization',
                label: 'The Specialized Knowledge Crisis',
                content: <CrisisSubsectionC />
              }
            ]}
          />
        </div>
      </SyllogismSection>

      {/* Quote/Image Break - Between Failure and Opportunity */}
      <QuoteImageBreak
        quotes={missionQuotes}
        imageFolder="adventure"
        imageAlt="Adventure and physical discipline"
        showRefreshButton={true}
        enableParallax={true}
      />

      {/* PART II: THE OPPORTUNITY - Poetic Restoration */}
      <SyllogismSection 
        type="minor" 
        title="The Opportunity: Poetic Restoration"
        subtitle="Restore through four stages: nursery wonder, gymnasium risk, poetic integration, spiritual wisdom."
        number="II" 
        id="minor-premise"
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-lg text-charcoal/70 italic mb-8">
            Toggle between views to see how each stage should be restored vs. how modern education fails
          </p>
          <RestorationSubsectionA />
        </div>
      </SyllogismSection>

      {/* Quote/Image Break - Between Opportunity and Vision */}
      <QuoteImageBreak
        quotes={liturgicalQuotes}
        imageFolder="art-sacred"
        imageAlt="Sacred art and liturgical beauty"
        showRefreshButton={true}
        enableParallax={true}
      />

      {/* PART III: THE VISION - Chivalric Wayfarers for Christendom */}
      <SyllogismSection 
        type="conclusion" 
        title="The Vision: Chivalric Wayfarers for Christendom"
        subtitle="Boys as Poetic Guardians: resilient, courageous, restoring culture through truth and families."
        number="∴" 
        id="conclusion"
      >
        <div className="max-w-6xl mx-auto">
          <SubsectionTabs
            variant="vision"
            tabs={[
              {
                id: 'syllogism-recap',
                label: 'The Argument Complete',
                content: <VisionSyllogismRecap />
              },
              {
                id: 'archetypes',
                label: 'Chivalric Wayfarers & Poetic Guardians',
                content: <VisionArchetypes />
              }
            ]}
          />
        </div>
      </SyllogismSection>

      {/* Objections & Answers - Always Visible */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="font-playfair text-4xl font-bold text-forest text-center mb-12">
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
                question: "Is this practical? Can these boys succeed in the modern economy?",
                answer: "Graduates become doctors, lawyers, engineers—rooted in wisdom beyond utility. They bring integrated minds to work, living fully human lives. Question isn't jobs, but souls.",
                quote: {
                  id: "ihp-success",
                  quote: "Our graduates succeed in every field because they bring integrated minds to specialized work. They are not cogs; they are men.",
                  author: "Dr. Dennis Quinn",
                  source: "IHP Alumni Survey",
                  category: "philosophy" as const,
                },
              },
              {
                question: "Isn't this anti-modern?",
                answer: "Poetic mode awakens wonder as foundation for modernity, not opposition. It integrates senses with reason, countering fragmentation without rejecting progress. \"Wonder is the beginning of wisdom\" (Aristotle)—humbly pursuing truth in a mechanized world.",
              },
              {
                question: "Isn't this anti-science? Won't my child fall behind in STEM?",
                answer: "Poetic foundations nurture imagination essential for science; wonder as \"fertile soil\" orders knowledge organically. IHP principles yield integrated thinkers succeeding in STEM while soul-anchored. Without poetic base, analysis fragments—Senior restores wholeness for true discovery.",
              },
            ]}
          />
        </div>
      </section>

      {/* Your Path Forward - Always Visible */}
      <section className="py-16 bg-parchment/30">
        <div className="max-w-6xl mx-auto px-6">
          <VisionCallToAction />
        </div>
      </section>
      </div>

      {/* Scripture Waypoints
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
      </section> */}
    </>
  );
}
