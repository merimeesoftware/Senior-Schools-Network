import QuoteCard from '@/components/QuoteCard';
import SectionHeading from '@/components/SectionHeading';
import ContentContainer from '@/components/ContentContainer';
import QuoteImageBreak from '@/components/QuoteImageBreak';
import { getAxiomsQuotesBySection } from '@/lib/content/axioms';
import CTAButton from '@/components/CTAButton';
import { getQuotesBySource } from '@/lib/content';
import EssentialTextsGrid from '@/components/EssentialTextsGrid';
import HeroSection from '@/components/HeroSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Engage with the Network',
  description:
    'Explore philosophical resources, connect with like-minded educators, and find inspiration for bringing poetic education to your community.',
  alternates: { canonical: '/engage' },
  openGraph: {
    title: 'Engage - Senior Schools Network',
    description:
      'Discover philosophical foundations, curated resources, and connect with others inspired by John Senior\'s vision of education.',
    url: 'https://seniorschoolsnetwork.org/engage',
    images: [{ url: '/og-image-enclosed-garden.jpg', width: 1200, height: 630 }],
  },
};

export default async function EngagePage() {
  const quotes = await getQuotesBySource();
  const adventureQuote = quotes.find((q) => q.id === 'adventure-stories');
  const liturgicalQuotes = await getAxiomsQuotesBySection('Quote Bank: Liturgical Rhythm and Rest');
  
  // Hero quotes - inspiration focused
  const heroQuotes = quotes.filter((q) => 
    ['real-stars', 'education-vision', 'adventure-stories'].includes(q.id)
  );

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
      {/* Hero Section */}
      <HeroSection
        imageFolder="adventure"
        quotes={heroQuotes.length > 0 ? heroQuotes : quotes.slice(0, 3)}
        title="Engage"
        showButtons={false}
        imageAlt="Inspiration for educational restoration"
      />

      {/* Submit a School */}
      <section className="section-container py-section">
        <div className="card-elevated">
          <SectionHeading level={2} className="mb-6">
            Submit a School or Program
          </SectionHeading>

          <p className="text-body leading-relaxed mb-6">
            If your school or program embodies poetic knowledge, physical discipline, and Catholic formation aligned with John Senior's vision, we invite you to join this loose network. Inclusion increases visibility and connects you with like-minded educators.
          </p>

          <CTAButton href="#contact" variant="primary" size="lg" fullWidth>
            Submit for Inclusion
          </CTAButton>
        </div>
      </section>

      {/* The Gymnasium Gap */}
      <section className="bg-parchment-dark py-section">
        <ContentContainer width="wide">
          <SectionHeading level={2} align="center" className="mb-8">
            The Gymnasium Gap
          </SectionHeading>

          <p className="text-center text-body-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            The gymnasium stage (ages 7-13) is critically underserved in modern education. This vital phase, where physical discipline, adventure, and stories form resilient "warrior poets," remains largely absent from our schools.
          </p>

          <div className="card-elevated border-l-4 border-gymnasium max-w-4xl mx-auto">
            {adventureQuote && (
              <QuoteCard
                quote={adventureQuote.quote}
                author={adventureQuote.author}
                source={adventureQuote.source}
                variant="embedded"
              />
            )}

            <p className="text-body leading-relaxed mt-6">
              Homeschooling excels in the nursery. High schools and liberal arts colleges exist for older students. But the gymnasium — where boys and girls develop through outdoor challenges, liturgical rhythms, and heroic tales — is the missing link in our educational landscape.
            </p>
          </div>
        </ContentContainer>
      </section>

      {/* Starting in Your Community */}
      <section className="section-container py-section">
        <SectionHeading level={2} align="center" className="mb-8">
          Starting in Your Community
        </SectionHeading>

        <p className="text-center text-body-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          You don't need a formal school to begin. These principles can take root wherever children gather—in parishes, neighborhoods, and homes. Here are some ideas for small-scale implementation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card-elevated">
            <h3 className="text-heading-3 font-playfair text-forest mb-4">
              Parish-Based Initiatives
            </h3>
            <p className="text-body leading-relaxed mb-6">
              A boys' club at your parish with the mission of serving Mass can provide shared experiences in service, adventure, sports, and fellowship.
            </p>
            <ul className="space-y-2 text-body-sm">
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>Weekly meetings with altar serving practice</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>Outdoor adventures and sports activities</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>Shared reading of heroic stories and saints' lives</span>
              </li>
            </ul>
          </div>

          <div className="card-elevated">
            <h3 className="text-heading-3 font-playfair text-forest mb-4">
              Home & Neighborhood Ideas
            </h3>
            <p className="text-body leading-relaxed mb-6">
              Any gathering where children come together for missions, adventures, sports, or common experiences can embody these principles.
            </p>
            <ul className="space-y-2 text-body-sm">
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>Neighborhood adventure clubs</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>Family hiking and exploration groups</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>Liturgical year celebrations and traditions</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <QuoteImageBreak
        quotes={liturgicalQuotes}
        imageFolder="art-sacred"
        imageAlt="Sacred art and liturgical beauty"
        showRefreshButton={true}
        enableParallax={true}
      />

      {/* Connect & Contact */}
      <section className="bg-gold/10 py-section-sm" id="contact">
        <ContentContainer width="narrow">
          <div className="text-center">
            <SectionHeading level={2} align="center" className="mb-6">
              Connect with the Network
            </SectionHeading>
            <p className="text-body-lg mb-8 leading-relaxed">
              Interested in starting something in your community? While we don't have formal founding guides, we can help connect you with educators and founders already doing this work.
            </p>

            <div className="card-elevated max-w-2xl mx-auto">
              <p className="text-body leading-relaxed mb-6">
                Reach out directly to share ideas, ask questions, or connect with others in the network. You can also contact schools directly through their own websites listed in the directory.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton href="/contact" variant="primary" size="lg">
                  Contact Us
                </CTAButton>
                <CTAButton href="/network-directory" variant="outline" size="lg">
                  Browse Directory
                </CTAButton>
              </div>
            </div>
          </div>
        </ContentContainer>
      </section>
      {/* Essential Texts Section */}
      <section id="resources" className="py-20 bg-white">
        <ContentContainer width="wide">
          <SectionHeading level={2} align="center" className="mb-8">
            Essential Texts for Further Study
          </SectionHeading>
          
          <p className="text-center text-xl text-charcoal/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            Explore the foundational philosophical texts and excerpts behind this educational vision. 
            Read John Senior, Chesterton, Tolkien, and medieval sources to deepen your understanding.
          </p>

          <EssentialTextsGrid texts={essentialTexts} />
          
          <div className="mt-12 text-center">
            <CTAButton href="/texts/Essential-Texts-Reading-List" variant="outline" size="lg">
              View Complete Reading List
            </CTAButton>
          </div>
        </ContentContainer>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-b from-spiritual/10 to-spiritual/20">
        <ContentContainer width="narrow">
          <div className="text-center space-y-6">
            <SectionHeading level={2} align="center">
              Explore the Network
            </SectionHeading>
            <p className="text-xl leading-relaxed text-charcoal/80 max-w-2xl mx-auto">
              Discover schools and programs already embodying this vision across all developmental stages.
            </p>
            <div className="pt-4">
              <CTAButton href="/network-directory" variant="primary" size="lg">
                Browse the Directory
              </CTAButton>
            </div>
          </div>
        </ContentContainer>
      </section>
    </>
  );
}