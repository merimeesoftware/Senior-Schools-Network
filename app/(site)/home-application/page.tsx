import QuoteCard from '@/components/QuoteCard';
import SectionHeading from '@/components/SectionHeading';
import ContentContainer from '@/components/ContentContainer';
import StageBadge from '@/components/StageBadge';
import CTAButton from '@/components/CTAButton';
import { getScriptureWaypoints, getBookListsByStage } from '@/lib/content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources for Home Application',
  description:
    "Non-prescriptive resources for homeschooling families: gymnasium guides, book lists, and inspiration for adapting Senior's philosophy at home.",
  openGraph: {
    title: 'Home Application Resources - Senior Schools Network',
    description:
      'Gymnasium guide for families, adventure book lists, and non-prescriptive inspiration. Proverbs 22:6 flow.',
    url: 'https://seniorschoolsnetwork.org/home-application',
    images: [{ url: '/og-image-enclosed-garden.jpg', width: 1200, height: 630 }],
  },
};

export default async function HomeApplicationPage() {
  const scriptureWaypoints = await getScriptureWaypoints();
  const homeFlowWaypoint = scriptureWaypoints.find(
    (w) => w.id === 'proverbs-22-6'
  );
  const gymnasiumBooks = await getBookListsByStage('gymnasium');

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-parchment to-parchment-light">
        <ContentContainer width="wide" padding="lg">
          <SectionHeading level={1} align="center" decorated>
            Resources for Home Application
          </SectionHeading>

          <div className="mt-8 text-center max-w-3xl mx-auto">
            <p className="text-body-lg leading-relaxed mb-6">
              Homeschooling shines in the nursery stage — but the gymnasium
              awaits your courage. We offer non-prescriptive inspiration for
              adapting adventure, discipline, and poetic learning at home.
            </p>
          </div>

          {homeFlowWaypoint && (
            <div className="mt-8">
              <QuoteCard
                quote={homeFlowWaypoint.text}
                author={homeFlowWaypoint.verse}
                variant="scripture"
              />
            </div>
          )}
        </ContentContainer>
      </section>

      {/* Gymnasium Guide */}
      <section className="section-container py-section">
        <div className="card-elevated border-l-4 border-gymnasium">
          <div className="flex items-center gap-3 mb-6">
            <StageBadge stage="gymnasium" size="md" />
            <SectionHeading level={2} className="mb-0">
              Gymnasium Guide for Families
            </SectionHeading>
          </div>

          <p className="text-body leading-relaxed mb-6">
            A non-prescriptive resource for integrating physical discipline,
            outdoor adventure, and liturgical rhythms into family life. Includes
            book lists, activity ideas, and inspiration from{' '}
            <em>The Restoration of Innocence</em>.
          </p>

          <div className="bg-parchment-dark p-6 rounded-organic mb-6">
            <h3 className="text-heading-3 font-playfair text-forest mb-4">
              What's Inside:
            </h3>
            <ul className="space-y-2 text-body">
              <li className="flex items-start">
                <span className="text-gold mr-2">✦</span>
                <span>Benevolent neglect principles for ages 7-13</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">✦</span>
                <span>
                  Liturgical hike planning and outdoor challenge ideas
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">✦</span>
                <span>
                  Adventure book lists (
                  {gymnasiumBooks
                    .slice(0, 3)
                    .map((b) => b.title)
                    .join(', ')}
                  ...)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">✦</span>
                <span>
                  Integrating sports, rigor, and repose with family rhythms
                </span>
              </li>
            </ul>
          </div>

          <CTAButton href="/downloads/gymnasium-guide-placeholder.md" variant="primary" size="lg" fullWidth>
            Download Gymnasium Guide (Placeholder)
          </CTAButton>
        </div>
      </section>

      {/* Book Lists */}
      <section className="bg-parchment-dark py-section">
        <ContentContainer width="wide">
          <SectionHeading level={2} align="center" className="mb-8">
            Featured Book Lists
          </SectionHeading>

          <p className="text-center text-body-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            From the <em>Thousand Good Books List</em>, curated for each
            developmental stage. These are inspirations, not prescriptions —
            adapt freely to your family's rhythms.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-elevated">
              <div className="flex items-center gap-3 mb-4">
                <StageBadge stage="nursery" size="sm" />
                <h3 className="text-heading-3 font-playfair text-forest">
                  Nursery (Ages 2-7)
                </h3>
              </div>
              <p className="text-body-sm mb-4 text-charcoal/70">
                Sensory delight, fables, and wonder
              </p>
              <ul className="text-body-sm space-y-1">
                <li>• Mother Goose, Aesop's Fables</li>
                <li>• Peter Rabbit, Winnie the Pooh</li>
                <li>• Classic fairy tales and nursery rhymes</li>
              </ul>
            </div>

            <div className="card-elevated border-l-4 border-gymnasium">
              <div className="flex items-center gap-3 mb-4">
                <StageBadge stage="gymnasium" size="sm" />
                <h3 className="text-heading-3 font-playfair text-forest">
                  Gymnasium (Ages 7-13)
                </h3>
              </div>
              <p className="text-body-sm mb-4 text-charcoal/70">
                Adventure, courage, physical heroism
              </p>
              <ul className="text-body-sm space-y-1">
                {gymnasiumBooks.slice(0, 3).map((book) => (
                  <li key={book.id}>
                    • {book.author}, <em>{book.title}</em>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <CTAButton href="/philosophy" variant="outline" size="lg">
              View Full Book Lists by Stage
            </CTAButton>
          </div>
        </ContentContainer>
      </section>

      {/* Encouragement */}
      <section className="section-container py-section-sm">
        <QuoteCard
          quote="Homeschooling shines in nursery — gymnasium awaits your courage"
          variant="embedded"
        />

        <div className="mt-12 text-center">
          <p className="text-body-lg max-w-2xl mx-auto leading-relaxed mb-8">
            The gymnasium stage (ages 7-13) is sorely lacking in modern
            education, yet homeschoolers are uniquely positioned to restore it.
            Through family adventures, outdoor challenges, and organic learning,
            you can unpoison the soil for your children's holistic formation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/schools" variant="primary" size="lg">
              Explore Schools
            </CTAButton>
            <CTAButton href="/contact" variant="outline" size="lg">
              Connect with Network
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
