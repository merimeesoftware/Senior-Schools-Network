import Link from 'next/link';

interface EssentialText {
  slug: string;
  title: string;
  author?: string;
  description: string;
  tags?: string[];
}

interface EssentialTextsGridProps {
  texts: EssentialText[];
}

/**
 * Grid display of essential texts with links to full documents
 */
export default function EssentialTextsGrid({ texts }: EssentialTextsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {texts.map((text) => (
        <Link
          key={text.slug}
          href={`/texts/${text.slug}`}
          className="block group"
        >
          <div className="bg-white border border-charcoal/10 rounded-lg p-6 h-full shadow-sm hover:shadow-md hover:border-spiritual/30 transition-all">
            {/* Title */}
            <h3 className="text-xl font-playfair text-forest mb-2 group-hover:text-spiritual transition-colors">
              {text.title}
            </h3>

            {/* Author */}
            {text.author && (
              <p className="text-sm text-charcoal/60 mb-3">
                by {text.author}
              </p>
            )}

            {/* Description */}
            <p className="text-base text-charcoal/80 leading-relaxed mb-4 line-clamp-3">
              {text.description}
            </p>

            {/* Tags */}
            {text.tags && text.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-auto">
                {text.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-2 py-1 bg-parchment-dark text-charcoal/70 text-xs rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Read Link */}
            <div className="mt-4 pt-4 border-t border-charcoal/10">
              <span className="text-sm text-spiritual font-medium group-hover:underline">
                Read Full Text →
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
