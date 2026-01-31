import CTAButton from '../ui/CTAButton';

interface ResourceTeaserProps {
  title: string;
  items: string[];
  fullListUrl: string;
  icon?: string;
  description?: string;
}

/**
 * Display a teaser/preview of a resource list with first N items
 * and a CTA to view the full list
 */
export default function ResourceTeaser({
  title,
  items,
  fullListUrl,
  icon,
  description,
}: ResourceTeaserProps) {
  return (
    <div className="bg-white border border-charcoal/10 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        {icon && <span className="text-3xl" aria-hidden="true">{icon}</span>}
        <div className="flex-1">
          <h3 className="text-2xl font-playfair text-forest mb-2">{title}</h3>
          {description && (
            <p className="text-sm text-charcoal/70 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Teaser Items */}
      {items.length > 0 ? (
        <ul className="space-y-2 mb-6">
          {items.map((item, index) => (
            <li
              key={index}
              className="text-base text-charcoal/90 leading-relaxed flex items-start"
            >
              <span className="text-gold mr-2 mt-1 flex-shrink-0">•</span>
              <span className="flex-1">{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-charcoal/60 italic mb-6">
          Content coming soon...
        </p>
      )}

      {/* Fade Effect for "More Below" Visual Hint */}
      {items.length >= 5 && (
        <div className="relative -mt-4 mb-4 h-8 bg-gradient-to-b from-transparent to-white pointer-events-none" />
      )}

      {/* CTA Button */}
      <div className="pt-2 border-t border-charcoal/10">
        <CTAButton
          href={fullListUrl}
          variant="outline"
          size="md"
          fullWidth
        >
          View Full List →
        </CTAButton>
      </div>
    </div>
  );
}
