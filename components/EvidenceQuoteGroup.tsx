import EvidenceQuote from './EvidenceQuote';

/**
 * Props for a single evidence quote (derived from EvidenceQuote component)
 */
export interface EvidenceQuoteItem {
  /** The quote text */
  quote: string;
  /** Optional author name */
  author?: string;
  /** Optional source citation */
  source?: string;
  /** Optional evidence label (e.g., "From The Restoration of Innocence, Ch. 5") */
  evidenceLabel?: string;
  /** Whether to show a link to the source text */
  showSourceLink?: boolean;
  /** Slug for the source text page (required if showSourceLink is true) */
  sourceSlug?: string;
}

/**
 * Props for the EvidenceQuoteGroup component
 */
interface EvidenceQuoteGroupProps {
  /** Array of quote objects to display */
  quotes: EvidenceQuoteItem[];
  /** Visual variant matching syllogistic argument type */
  variant: 'major-premise' | 'minor-premise' | 'conclusion';
  /** Optional title (default: "Evidence from the Sources") */
  title?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * EvidenceQuoteGroup Component
 * 
 * A container component that renders a heading and multiple EvidenceQuote components
 * with proper spacing. Eliminates repetitive "Evidence from the Sources" sections
 * throughout the philosophy page.
 * 
 * @example
 * ```tsx
 * <EvidenceQuoteGroup
 *   variant="major-premise"
 *   quotes={[
 *     {
 *       quote: "Wonder is the first disposition of the soul...",
 *       author: "Dr. John Senior",
 *       source: "The Restoration of Christian Culture",
 *       showSourceLink: true,
 *       sourceSlug: "restoration-of-christian-culture"
 *     },
 *     {
 *       quote: "The senses are gateways to the soul...",
 *       author: "Dr. Dennis Quinn",
 *       source: "IHP Lecture I"
 *     }
 *   ]}
 * />
 * ```
 */
export default function EvidenceQuoteGroup({
  quotes,
  variant,
  title = 'Evidence from the Sources',
  className = '',
}: Readonly<EvidenceQuoteGroupProps>) {
  return (
    <div className={`space-y-8 mt-12 ${className}`}>
      {/* Heading */}
      <h4 className="font-playfair text-2xl font-bold text-forest text-center">
        {title}
      </h4>

      {/* Quotes */}
      <div className="space-y-8">
        {quotes.map((quote, index) => (
          <EvidenceQuote
            key={index}
            variant={variant}
            quote={quote.quote}
            author={quote.author}
            source={quote.source}
            evidenceLabel={quote.evidenceLabel}
            showSourceLink={quote.showSourceLink}
            sourceSlug={quote.sourceSlug}
          />
        ))}
      </div>
    </div>
  );
}
