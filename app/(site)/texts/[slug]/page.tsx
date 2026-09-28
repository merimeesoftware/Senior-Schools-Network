import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import MarkdownContent from '@/components/content/MarkdownContent';
import ChamberHeader from '@/components/layout/ChamberHeader';
import ContentContainer from '@/components/layout/ContentContainer';
import CTAButton from '@/components/ui/CTAButton';
import {
  getAllTextSlugs,
  getTextContent,
  textExists,
} from '@/lib/content/teasers';
import { stripRestatedTitle } from '@/lib/content/reading';
import { SITE_ORIGIN } from '@/lib/site';

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
      url: `${SITE_ORIGIN}/texts/${slug}`,
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
  // The ChamberHeader already states title/author; the body must not restate them.
  const body = stripRestatedTitle(content, metadata);

  return (
    <>
      <ChamberHeader
        title={metadata.title}
        meta={
          <>
            {metadata.author && (
              <p className="text-xl text-charcoal/70">by {metadata.author}</p>
            )}
            {metadata.description && (
              <p className="mt-2">{metadata.description}</p>
            )}
            <p className="mt-4 text-sm">
              💡 Tip: Use your browser's print function (Ctrl+P / Cmd+P) to save
              this as a PDF
            </p>
          </>
        }
      />

      {/* Content Section */}
      <section className="py-8 bg-white">
        <ContentContainer width="normal">
          <MarkdownContent content={body} />
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
              <CTAButton href="/engage#resources" variant="primary" size="lg">
                View All Texts
              </CTAButton>
            </div>
          </div>
        </ContentContainer>
      </section>
    </>
  );
}
