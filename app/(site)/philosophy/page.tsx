import QuoteCard from '@/components/QuoteCard';
import SectionHeading from '@/components/SectionHeading';
import ContentContainer from '@/components/ContentContainer';
import StageBadge from '@/components/StageBadge';
import CTAButton from '@/components/CTAButton';
import { Accordion, AccordionItem } from '@/components/Accordion';
import { getScriptureWaypoints, getQuotesBySource } from '@/lib/content';
import { STAGE_METADATA, getAllStages } from '@/lib/content/stages';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Philosophy & Resources',
  description:
    'Explore the educational philosophy of John Senior: poetic knowledge, physical discipline for gymnasium stage, and wonder-filled formation rooted in Catholic tradition.',
  openGraph: {
    title: 'Philosophy & Resources - Senior Schools Network',
    description:
      'Four core concepts: poetic knowledge, physical discipline, poetic-scientific foundations, and liturgical rhythm.',
    url: 'https://seniorschoolsnetwork.org/philosophy',
    images: [{ url: '/og-image-enclosed-garden.jpg', width: 1200, height: 630 }],
  },
};

export default async function PhilosophyPage() {
  const scriptureWaypoints = await getScriptureWaypoints();
  const quotes = await getQuotesBySource();
  const allStages = getAllStages();

  // Get featured quote for philosophy
  const featuredQuote = quotes.find((q) => q.id === 'mythopoeia-law');

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-parchment to-parchment-light">
        <ContentContainer width="wide" padding="lg">
          <SectionHeading level={1} align="center" decorated>
            Philosophy & Resources
          </SectionHeading>

          {featuredQuote && (
            <div className="mt-8">
              <QuoteCard
                quote={featuredQuote.quote}
                author={featuredQuote.author}
                source={featuredQuote.source}
                variant="hero"
              />
            </div>
          )}

          <div className="mt-8 text-center max-w-3xl mx-auto">
            <p className="text-body-lg leading-relaxed">
              The educational vision of Dr. John Senior begins with{' '}
              <strong className="text-forest">wonder</strong>, progresses
              through{' '}
              <strong className="text-gymnasium">
                physical discipline and adventure
              </strong>
              , and nurtures the soul's ascent to{' '}
              <strong className="text-spiritual">wisdom</strong> — all rooted
              in Catholic faith and the poetic mode of knowing.
            </p>
          </div>
        </ContentContainer>
      </section>

      {/* Core Concepts */}
      <section className="section-container py-section">
        <SectionHeading level={2} align="center" className="mb-12">
          Core Concepts
        </SectionHeading>

        <Accordion type="single" defaultValue="poetic-knowledge" className="max-w-4xl mx-auto">
          <AccordionItem value="poetic-knowledge" title="Poetic Knowledge">
            <div className="space-y-4">
              <p className="text-body leading-relaxed">
                Intuitive, connatural knowing through senses, emotions, and
                imagination — contrasting with purely rational modes. As Hugh of
                St. Victor taught, wisdom begins with sensory delight: a child
                encountering nature, stories stirring the heart, music evoking
                transcendence.
              </p>
              <p className="text-body leading-relaxed">
                This mode of knowing precedes and grounds analytical thought. Rather than
                beginning with definitions and abstractions, poetic knowledge invites
                wonder through direct experience — walking in forests, listening to
                ballads, contemplating starlight. The child knows the tree not by
                botanical classification but by climbing it, sitting beneath its shade,
                marveling at autumn leaves.
              </p>
              <p className="text-body-sm text-charcoal/70 italic border-l-4 border-gold pl-4">
                "The poetic mode begins with wonder, sensory delight, and
                imagination — a foundation for all later knowledge." — James Taylor
              </p>
            </div>
          </AccordionItem>

          <AccordionItem value="physical-discipline" title="Physical Discipline & Adventure">
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <StageBadge stage="gymnasium" size="sm" />
                <span className="text-body-sm text-charcoal/60">Ages 7-13</span>
              </div>
              <p className="text-body leading-relaxed">
                The gymnasium stage (ages 7-13) emphasizes bodily rigor, outdoor
                challenges, and experiential learning to form resilient "warrior
                poets." Through sports, liturgical hikes, and benevolent neglect,
                boys especially develop physical toughness alongside spiritual
                formation.
              </p>
              <p className="text-body leading-relaxed">
                Modern culture often fails this stage through sedentary lifestyles,
                excessive safety protocols, and lack of adventure. Senior advocated for
                regular outdoor expeditions, physical games that test courage, and
                stories of heroic virtue (Robin Hood, King Arthur, lives of warrior
                saints). Parents practice "benevolent neglect" — allowing boys to take
                risks, fall, recover, and grow resilient.
              </p>
              <p className="text-body-sm text-charcoal/70 italic border-l-4 border-gymnasium pl-4">
                "Adventure, stories, physical discipline" — John Senior, <em>The Restoration of Innocence</em>
              </p>
            </div>
          </AccordionItem>

          <AccordionItem value="poetic-science" title="Poetic Foundations for Scientific Pursuit">
            <div className="space-y-4">
              <p className="text-body leading-relaxed">
                Wonder and imagination serve as fertile soil for disciplined
                inquiry. Modern education's premature push of STEM disrupts
                natural stages, "poisoning the soil" with fragmentation. Recovery
                of poetic modes enables diverse intellectual fruits — including
                scientific excellence — while rejecting metrics that prioritize
                rote skills over holistic formation.
              </p>
              <p className="text-body leading-relaxed">
                When children first encounter natural phenomena through wonder
                (stargazing, observing insects, feeling textures), they develop a
                connatural relationship with creation. This poetic foundation later
                supports rigorous scientific inquiry — but only if abstraction follows
                experience. Forcing formulas before fascination "poisons the soil,"
                producing mechanistic thinking divorced from reality and beauty.
              </p>
              <p className="text-body leading-relaxed">
                Senior's approach produces graduates capable of excellence in STEM fields
                precisely because their early formation cultivated wonder, imagination,
                and integrated knowing — not despite rejecting premature specialization.
              </p>
            </div>
          </AccordionItem>

          <AccordionItem value="liturgical-rhythm" title="Liturgical Rhythm">
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <StageBadge stage="spiritual" size="sm" />
                <span className="text-body-sm text-charcoal/60">All Stages</span>
              </div>
              <p className="text-body leading-relaxed">
                Daily prayer, sacraments, and seasonal feasts are woven
                organically into learning and adventure. Education mirrors the
                "hortus conclusus" (enclosed garden) — a protected space for
                innocence where repose, virtue, and wonder flourish in harmony
                with the Church's calendar.
              </p>
              <p className="text-body leading-relaxed">
                Families and schools aligned with Senior's vision structure their days
                around the Liturgy of the Hours, celebrate saints' feasts with special
                readings and activities, and observe liturgical seasons through color,
                music, and practice. Advent becomes a time of anticipation and
                preparation; Lent, a season of physical and spiritual discipline.
              </p>
              <p className="text-body leading-relaxed">
                This rhythm resists the tyranny of clock-time and mechanized schedules,
                instead cultivating repose (Pieper's <em>otium</em>) — leisure rooted in
                worship and contemplation, essential for cultural renewal.
              </p>
            </div>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Stages of Development */}
      <section className="bg-parchment-dark py-section">
        <ContentContainer width="wide">
          <SectionHeading level={2} align="center" decorated className="mb-8">
            Stages of Development
          </SectionHeading>

          <p className="text-center text-body-lg max-w-3xl mx-auto mb-12 leading-relaxed">
            Each stage builds upon wonder and sensory delight, progressing
            organically through physical formation to imaginative depth and
            spiritual wisdom. Below are the four developmental phases central to
            Senior's vision.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allStages.map((stageName) => {
              const stage = STAGE_METADATA[stageName];
              return (
                <div key={stageName} className="card-elevated">
                  <div className="flex items-center gap-3 mb-4">
                    <StageBadge stage={stageName} size="md" />
                    <div>
                      <h3 className="text-heading-3 font-playfair text-forest">
                        {stage.label}
                      </h3>
                      <p className="text-body-sm text-charcoal/60">
                        Ages {stage.ageRange}
                      </p>
                    </div>
                  </div>
                  <p className="text-body mb-4 leading-relaxed">
                    <strong className="text-forest">Focus:</strong>{' '}
                    {stage.focus}
                  </p>
                  <p className="text-body-sm text-charcoal/70 leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <CTAButton href="/schools" variant="primary" size="lg">
              Explore Schools by Stage
            </CTAButton>
          </div>
        </ContentContainer>
      </section>

      {/* Scripture Waypoints */}
      <section className="section-container py-section-sm">
        <SectionHeading level={2} align="center" className="mb-8">
          Scripture Anchors
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {scriptureWaypoints.slice(0, 3).map((waypoint) => (
            <QuoteCard
              key={waypoint.id}
              quote={waypoint.text}
              author={waypoint.verse}
              variant="scripture"
            />
          ))}
        </div>

        <p className="text-center text-body-sm text-charcoal/60 mt-8 italic">
          These verses guide our three user flows: school consideration
          (Ephesians 6:4), home application (Proverbs 22:6), and founding
          inspiration (Matthew 11:28).
        </p>
      </section>

      {/* Resources CTA */}
      <section className="bg-gold/10 py-section-sm">
        <ContentContainer width="narrow">
          <div className="text-center">
            <SectionHeading level={2} align="center" className="mb-6">
              Explore Further
            </SectionHeading>
            <p className="text-body-lg mb-8 leading-relaxed">
              Dive deeper into book lists, excerpts from Senior and companions,
              and resources for adapting this philosophy to your context.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
