import ContentContainer from '@/components/layout/ContentContainer';
import CTAButton from '@/components/ui/CTAButton';
import HeroSection from '@/components/layout/HeroSection';
import NetworkFilter from '@/components/interactive/NetworkFilter';
import { NETWORK_MEMBERS } from '@/lib/content/network';
import { getAxiomsQuotesBySection } from '@/lib/content/axioms';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Schools & Programs',
  description:
    "Discover schools and programs aligned with John Senior's vision: poetic knowledge, gymnasium formation, and wonder-filled tradition.",
  alternates: { canonical: '/network-directory' },
  openGraph: {
    title: 'Schools & Programs - Senior Schools Network',
    description:
      'Find affiliated schools and programs by stage focus: nursery, gymnasium, poetic, or spiritual formation.',
    url: 'https://seniorschoolsnetwork.org/network-directory',
    images: [{ url: '/og-image-enclosed-garden.jpg', width: 1200, height: 630 }],
  },
};

export default async function NetworkDirectoryPage() {
  // Get hero quotes from Mission and Adventure section
  const heroQuotes = await getAxiomsQuotesBySection('Quote Bank: Mission and Adventure');

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        imageFolder="otto-of-the-silver-hand"
        quotes={heroQuotes}
        imageAlt="Medieval education and formation"
        title="Schools & Programs"
        showButtons={false}
      />

      {/* Filter Section & Listings */}
      <div id="filters">
        <NetworkFilter members={NETWORK_MEMBERS} />
      </div>

      {/* Application CTA */}
      <section className="bg-spiritual/10 py-section-sm">
        <ContentContainer width="narrow">
          <div className="text-center">
            <h2 className="text-heading-2 font-playfair text-forest mb-6">
              Is Your School or Program Aligned?
            </h2>
            <p className="text-body-lg mb-8 leading-relaxed">
              If your organization embodies poetic knowledge, physical discipline, and
              authentic formation, we invite you to apply for network
              affiliation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/engage" variant="primary" size="lg">
                Engage & Connect
              </CTAButton>
              <CTAButton href="/philosophy" variant="outline" size="lg">
                Review Philosophy
              </CTAButton>
            </div>
          </div>
        </ContentContainer>
      </section>
    </>
  );
}
