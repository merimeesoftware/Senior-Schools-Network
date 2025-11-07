import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import MarkdownContent from '@/components/MarkdownContent';
import ContentContainer from '@/components/ContentContainer';
import SectionHeading from '@/components/SectionHeading';
import CTAButton from '@/components/CTAButton';
import {
  getAllTextSlugs,
  getTextContent,
  textExists,
} from '@/lib/content/teasers';

interface TextPageProps {
  params: {
    slug: string;
  };
}

/**
 * Generate static paths for all text files at build time
 */
export async function generateStaticParams() {
  const slugs = await getAllTextSlugs();
  return slugs.map((slug) => ({
    // Next.js handles URL encoding automatically
    slug: slug,
  }));
}

/**
 * Generate metadata for SEO
 */
export async function generateMetadata({
  params,
}: TextPageProps): Promise<Metadata> {
  const { slug } = params;
  const textContent = await getTextContent(slug);

  if (!textContent) {
    return {
      title: 'Text Not Found',
    };
  }

  const { metadata } = textContent;

  return {
    title: `${metadata.title} - Senior Schools Network`,
    description:
      metadata.description ||
      `Read ${metadata.title}${metadata.author ? ` by ${metadata.author}` : ''} - part of the Senior Schools Network resource library.`,
    alternates: {
      canonical: `/texts/${slug}`,
    },
    openGraph: {
      title: `${metadata.title} - Senior Schools Network`,
      description:
        metadata.description ||
        `Explore ${metadata.title} and other resources for poetic knowledge and Catholic formation.`,
      url: `https://seniorschoolsnetwork.org/texts/${slug}`,
      type: 'article',
    },
  };
}

/**
 * Text page component - displays full markdown content
 */
export default async function TextPage({ params }: TextPageProps) {
  const { slug } = params;

  // Check if text exists
  const exists = await textExists(slug);
  if (!exists) {
    notFound();
  }

  const textContent = await getTextContent(slug);
  if (!textContent) {
    notFound();
  }

  const { metadata, content } = textContent;

  return (
    <>
      {/* Breadcrumb Navigation */}
      <section className="bg-parchment-light py-4 border-b border-charcoal/10">
        <ContentContainer width="wide">
          <nav className="text-sm text-charcoal/60" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <a
                  href="/"
                  className="hover:text-spiritual transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <span className="mx-2">/</span>
              </li>
              <li>
                <a
                  href="/philosophy#resources"
                  className="hover:text-spiritual transition-colors"
                >
                  Resources
                </a>
              </li>
              <li>
                <span className="mx-2">/</span>
              </li>
              <li className="text-charcoal/90 font-medium" aria-current="page">
                {metadata.title}
              </li>
            </ol>
          </nav>
        </ContentContainer>
      </section>

      {/* Header Section */}
      <section className="bg-gradient-to-b from-parchment to-white py-12 md:py-16">
        <ContentContainer width="narrow">
          <SectionHeading level={1} align="center" decorated>
            {metadata.title}
          </SectionHeading>

          {metadata.author && (
            <p className="text-center text-xl text-charcoal/70 mt-4">
              by {metadata.author}
            </p>
          )}

          {metadata.description && (
            <p className="text-center text-lg text-charcoal/60 mt-4 max-w-2xl mx-auto leading-relaxed">
              {metadata.description}
            </p>
          )}

          {metadata.tags && metadata.tags.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {metadata.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-3 py-1 bg-gold/20 text-charcoal/80 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Print Guidance */}
          <div className="mt-8 text-center">
            <p className="text-sm text-charcoal/60">
              💡 Tip: Use your browser's print function (Ctrl+P / Cmd+P) to save this as a PDF
            </p>
          </div>
        </ContentContainer>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16 bg-white">
        <ContentContainer width="normal">
          <MarkdownContent content={content} />
        </ContentContainer>
      </section>

      {/* Navigation Footer */}
      <section className="py-12 bg-parchment/30">
        <ContentContainer width="narrow">
          <div className="text-center space-y-6">
            <p className="text-lg text-charcoal/70">
              Explore more resources and philosophy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/philosophy" variant="outline" size="lg">
                ← Back to Philosophy
              </CTAButton>
              <CTAButton href="/philosophy#resources" variant="primary" size="lg">
                View All Resources
              </CTAButton>
            </div>
          </div>
        </ContentContainer>
      </section>
    </>
  );
}
