import SectionHeading from '@/components/SectionHeading';
import ContentContainer from '@/components/ContentContainer';
import ImageGallery from '@/components/ImageGallery';
import { imageAssets } from '@/lib/assets';
import type { ImageAsset } from '@/lib/assets';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galleries',
  description:
    'Curated collections aligned to stages and themes: sacred art, landscapes, nursery illustrations, and adventure for gymnasium formation.',
  alternates: { canonical: '/gallery' },
  openGraph: {
    title: 'Galleries - Senior Schools Network',
    description:
      'Explore sacred art, landscapes, Beatrix Potter, nursery illustrations, Otto of the Silver Hand, Robin Hood, and adventure scenes.',
    url: 'https://seniorschoolsnetwork.org/gallery',
    images: [{ url: '/og-image-enclosed-garden.jpg', width: 1200, height: 630 }],
  },
};

export default function GalleryPage() {
  const nurseryIllustrations = imageAssets.filter((a: ImageAsset) =>
    a.src.includes('/images/nursery-illustrations/')
  );
  return (
    <>
      <section className="bg-gradient-to-b from-parchment to-parchment-light">
        <ContentContainer width="wide" padding="lg">
          <SectionHeading level={1} align="center" decorated>
            Curated Galleries
          </SectionHeading>
          <p className="text-body-lg leading-relaxed text-center mt-6 max-w-3xl mx-auto">
            Collections from our image manifest, aligned to stages and themes. All images include descriptive alt text and captions where helpful.
          </p>
        </ContentContainer>
      </section>

      <section className="section-container py-section">
        <SectionHeading level={2} align="center" className="mb-8">
          Sacred Art & Illuminations
        </SectionHeading>
        <ImageGallery
          tag="sacred-art"
          showCaptions={true}
          columns={{ mobile: 1, tablet: 2, desktop: 3 }}
          gap="lg"
          className="max-w-6xl mx-auto mb-16"
        />

        <SectionHeading level={2} align="center" className="mb-8">
          Landscapes of Wonder
        </SectionHeading>
        <ImageGallery
          tag="hudson-river-school"
          showCaptions={true}
          columns={{ mobile: 1, tablet: 2, desktop: 3 }}
          gap="lg"
          className="max-w-6xl mx-auto mb-16"
        />

        <SectionHeading level={2} align="center" className="mb-8">
          Beatrix Potter Nursery
        </SectionHeading>
        <ImageGallery
          tag="beatrix-potter"
          showCaptions={true}
          columns={{ mobile: 1, tablet: 3, desktop: 4 }}
          gap="lg"
          className="max-w-6xl mx-auto mb-16"
        />

        <SectionHeading level={2} align="center" className="mb-8">
          Nursery Illustrations
        </SectionHeading>
        <ImageGallery
          assets={nurseryIllustrations}
          showCaptions={true}
          columns={{ mobile: 1, tablet: 2, desktop: 3 }}
          gap="lg"
          className="max-w-6xl mx-auto mb-16"
        />

        <SectionHeading level={2} align="center" className="mb-8">
          Otto of the Silver Hand
        </SectionHeading>
        <ImageGallery
          tag="otto"
          showCaptions={true}
          columns={{ mobile: 1, tablet: 2, desktop: 3 }}
          gap="lg"
          className="max-w-6xl mx-auto mb-16"
        />

        <SectionHeading level={2} align="center" className="mb-8">
          Robin Hood Adventures
        </SectionHeading>
        <ImageGallery
          tag="robin-hood"
          showCaptions={true}
          columns={{ mobile: 1, tablet: 2, desktop: 3 }}
          gap="lg"
          className="max-w-6xl mx-auto mb-16"
        />

        <SectionHeading level={2} align="center" className="mb-8">
          Adventure & Discipline
        </SectionHeading>
        <ImageGallery
          category="discipline"
          showCaptions={true}
          columns={{ mobile: 1, tablet: 2, desktop: 3 }}
          gap="lg"
          className="max-w-6xl mx-auto"
        />
      </section>
    </>
  );
}
