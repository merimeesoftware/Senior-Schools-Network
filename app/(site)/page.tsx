import Link from 'next/link';
import QuoteCard from '@/components/QuoteCard';
import CTAButton from '@/components/CTAButton';
import SectionHeading from '@/components/SectionHeading';
import ContentContainer from '@/components/ContentContainer';
import StageBadge from '@/components/StageBadge';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-parchment to-parchment-light">
        <ContentContainer width="wide" padding="lg">
          <QuoteCard
            quote="Wonder is the beginning of wisdom"
            author="Ancient Proverb"
            variant="hero"
          />

          <div className="mt-8 text-center max-w-3xl mx-auto">
            <p className="text-body-lg leading-relaxed mb-6">
              Welcome to the Senior Schools Network — a loose affiliation of
              Catholic schools embodying{' '}
              <span className="font-semibold text-forest">
                poetic knowledge
              </span>
              ,{' '}
              <span className="font-semibold text-forest">
                sensory-based learning
              </span>
              , and{' '}
              <span className="font-semibold text-forest">
                spiritual formation
              </span>{' '}
              rooted in the educational philosophy of Dr. John Senior.
            </p>
            <p className="text-body-lg leading-relaxed text-charcoal/80">
              Our emphasis:{' '}
              <strong className="text-gymnasium">
                Adventure, stories, physical discipline
              </strong>{' '}
              — forming resilient "warrior poets" through the gymnasium stage
              and beyond.
            </p>
          </div>
        </ContentContainer>
      </section>

      {/* Call to Action Grid */}
      <section className="section-container py-section-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/schools" className="card group">
            <h3 className="text-heading-3 font-playfair text-forest mb-3 group-hover:text-forest-dark transition-colors">
              Explore Schools
            </h3>
            <p className="text-body-sm mb-4">
              Discover affiliated schools embodying Senior's vision of education
              as soul formation.
            </p>
            <span className="text-gold text-sm font-lato font-semibold group-hover:text-gold-dark">
              Browse Directory →
            </span>
          </Link>

          <Link href="/philosophy" className="card group">
            <h3 className="text-heading-3 font-playfair text-forest mb-3 group-hover:text-forest-dark transition-colors">
              Discover Resources
            </h3>
            <p className="text-body-sm mb-4">
              Browse excerpts, book lists, and philosophical foundations for
              poetic learning.
            </p>
            <span className="text-gold text-sm font-lato font-semibold group-hover:text-gold-dark">
              View Resources →
            </span>
          </Link>

          <Link href="/home-application" className="card group">
            <h3 className="text-heading-3 font-playfair text-forest mb-3 group-hover:text-forest-dark transition-colors">
              Download Gymnasium Guide
            </h3>
            <p className="text-body-sm mb-4">
              Non-prescriptive resources for adapting adventure and discipline
              at home.
            </p>
            <span className="text-gold text-sm font-lato font-semibold group-hover:text-gold-dark">
              Get Guide →
            </span>
          </Link>

          <Link href="/join-found" className="card group">
            <h3 className="text-heading-3 font-playfair text-forest mb-3 group-hover:text-forest-dark transition-colors">
              Start a School
            </h3>
            <p className="text-body-sm mb-4">
              Restore the gymnasium for warrior poets — informal guidance for
              founders.
            </p>
            <span className="text-gold text-sm font-lato font-semibold group-hover:text-gold-dark">
              Learn More →
            </span>
          </Link>
        </div>
      </section>

      {/* Stage Badges Demo */}
      <section className="bg-parchment-dark py-section-sm">
        <ContentContainer width="wide">
          <SectionHeading level={2} align="center" decorated>
            Stages of Development
          </SectionHeading>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <StageBadge stage="nursery" size="lg" />
            <StageBadge stage="gymnasium" size="lg" />
            <StageBadge stage="poetic" size="lg" />
            <StageBadge stage="spiritual" size="lg" />
          </div>
          <p className="text-center text-charcoal/70 mt-6 max-w-2xl mx-auto">
            Each stage builds upon wonder and sensory delight, progressing
            organically through physical formation to imaginative depth and
            spiritual wisdom.
          </p>
        </ContentContainer>
      </section>

      {/* Featured Quote */}
      <section className="section-container py-section-sm">
        <QuoteCard
          quote="Blessed are the legend-makers with their rhyme of things not found within recorded time"
          author="J.R.R. Tolkien"
          source="Mythopoeia"
          variant="hero"
        />
      </section>

      {/* CTA Section */}
      <section className="bg-spiritual/10 py-section-sm">
        <ContentContainer width="narrow">
          <div className="text-center">
            <SectionHeading level={2} align="center" className="mb-6">
              Join the Restoration
            </SectionHeading>
            <p className="text-body-lg mb-8">
              Whether you're a parent seeking authentic education, an educator
              exploring affiliation, or a visionary founder, we invite you to
              participate in the renewal of wonder-filled learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/schools" variant="primary" size="lg">
                Find a School
              </CTAButton>
              <CTAButton href="/join-found" variant="outline" size="lg">
                Start Your Journey
              </CTAButton>
            </div>
          </div>
        </ContentContainer>
      </section>
    </>
  );
}
