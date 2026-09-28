import Link from 'next/link';
import type { Metadata } from 'next';
import ChamberHeader from '@/components/layout/ChamberHeader';
import ContentContainer from '@/components/layout/ContentContainer';
import CTAButton from '@/components/ui/CTAButton';
import { getLivingEssentialTexts } from '@/lib/content/essential-texts';
import { SITE_ORIGIN } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Texts',
  description:
    'Showcase the philosophy, share primary texts and resource lists, and connect stakeholders at seniorschools.org.',
  alternates: { canonical: '/texts' },
  openGraph: {
    title: 'Texts - Senior Schools Network',
    description:
      'Showcase the philosophy, share primary texts and resource lists, and connect stakeholders at seniorschools.org.',
    url: `${SITE_ORIGIN}/texts`,
    images: [
      { url: '/og-image-enclosed-garden.jpg', width: 1200, height: 630 },
    ],
  },
};

/**
 * Index chamber for /texts. Arrival matches the text reader: type-led
 * parchment plate. Work titles are the doors; the page name is the only h1.
 */
export default async function TextsIndexPage() {
  const texts = await getLivingEssentialTexts();

  return (
    <>
      <ChamberHeader title="Texts" />

      <section className="bg-parchment">
        <ContentContainer width="normal">
          <ul className="list-none space-y-6">
            {texts.map((text) => (
              <li key={text.slug}>
                <Link
                  href={`/texts/${text.slug}`}
                  className="card block focus-visible-ring group"
                >
                  <h2 className="font-heading text-heading-2 text-forest group-hover:text-forest-dark transition-colors">
                    {text.title}
                  </h2>
                  {text.author && (
                    <p className="mt-2 text-charcoal/70">by {text.author}</p>
                  )}
                  {text.description && (
                    <p className="mt-3 text-body leading-relaxed text-charcoal/80">
                      {text.description}
                    </p>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-12 text-center">
            <CTAButton href="/philosophy" variant="outline" size="lg">
              Explore the Philosophy
            </CTAButton>
          </div>
        </ContentContainer>
      </section>
    </>
  );
}
