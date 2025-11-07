import Link from 'next/link';

interface EvidenceQuoteProps {
  quote: string;
  author?: string;
  source?: string;
  evidenceLabel?: string;
  showSourceLink?: boolean;
  sourceSlug?: string;
  variant?: 'major-premise' | 'minor-premise' | 'conclusion';
  className?: string;
}

export default function EvidenceQuote({
  quote,
  author,
  source,
  evidenceLabel,
  showSourceLink = false,
  sourceSlug,
  variant = 'major-premise',
  className = '',
}: Readonly<EvidenceQuoteProps>) {
  const borderColors = {
    'major-premise': 'border-red-800/40',
    'minor-premise': 'border-green-800/40',
    conclusion: 'border-gold/60',
  };

  const borderColor = borderColors[variant];

  return (
    <div
      className={`evidence-quote border-l-8 ${borderColor} pl-6 py-4 bg-gold/5 ${className}`}
    >
      {/* Evidence Label */}
      {evidenceLabel && (
        <p className="text-xs uppercase tracking-wider text-forest/60 mb-2 font-lato font-semibold">
          Evidence: {evidenceLabel}
        </p>
      )}

      {/* Quote Text */}
      <blockquote className="text-lg md:text-xl font-merriweather italic text-charcoal leading-relaxed mb-4">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Attribution */}
      {(author || source) && (
        <div className="flex items-center gap-2 text-base text-charcoal/70 font-lato">
          {author && <span className="font-semibold">{author}</span>}
          {author && source && <span>—</span>}
          {source && (
            showSourceLink && sourceSlug ? (
              <Link
                href={`/texts/${sourceSlug}`}
                className="hover:text-forest transition-colors underline decoration-dotted inline-flex items-center gap-1 focus-visible-ring"
              >
                {source}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
            ) : (
              <span className="italic">{source}</span>
            )
          )}
        </div>
      )}
    </div>
  );
}
