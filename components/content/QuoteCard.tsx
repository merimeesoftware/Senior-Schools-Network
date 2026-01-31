interface QuoteCardProps {
  quote: string;
  author?: string;
  source?: string;
  variant?: 'default' | 'hero' | 'scripture' | 'embedded';
  className?: string;
}

export default function QuoteCard({
  quote,
  author,
  source,
  variant = 'default',
  className = '',
}: Readonly<QuoteCardProps>) {
  const variantStyles = {
    default: 'card',
    hero: 'card-elevated text-center max-w-4xl mx-auto',
    scripture: 'card bg-spiritual/10 border-l-4 border-spiritual',
    embedded: 'quote-block',
  };

  const quoteSize = {
    default: 'text-lg',
    hero: 'text-xl md:text-2xl',
    scripture: 'text-lg',
    embedded: 'text-lg',
  };

  return (
    <blockquote className={`${variantStyles[variant]} ${className}`}>
      <p
        className={`${quoteSize[variant]} font-playfair italic text-charcoal mb-3`}
      >
        "{quote}"
      </p>
      {(author || source) && (
        <footer className="text-sm font-lato text-charcoal/70 not-italic">
          {author && <span className="font-semibold">— {author}</span>}
          {source && <cite className="ml-1">({source})</cite>}
        </footer>
      )}
    </blockquote>
  );
}
