/**
 * Represents a single column in the study grid
 */
interface StudyColumn {
  /** Column heading (e.g., "What They Study:") */
  heading: string;
  /** List of items/topics in this column */
  items: string[];
}

/**
 * Props for the StudyGrid component
 */
interface StudyGridProps {
  /** Grid title */
  title: string;
  /** Left column data */
  leftColumn: StudyColumn;
  /** Right column data */
  rightColumn: StudyColumn;
  /** Optional description text */
  description?: string;
  /** Optional footer text */
  footer?: string;
  /** Visual variant for theming */
  variant?: 'restoration' | 'neutral';
  /** Additional CSS classes */
  className?: string;
}

/**
 * StudyGrid Component
 * 
 * Two-column list comparison showing contrasting categories or study topics.
 * Used to illustrate curriculum differences or educational approaches.
 * 
 * @example
 * ```tsx
 * <StudyGrid
 *   title="The IHP Model: Integrated Humanities"
 *   description="Students spend three years studying Great Books..."
 *   variant="restoration"
 *   leftColumn={{
 *     heading: "What They Study:",
 *     items: ["Homer, Virgil, Dante", "Gregorian chant, polyphony"]
 *   }}
 *   rightColumn={{
 *     heading: "What They Don't Study (Yet):",
 *     items: ["Career-focused majors", "Modern political theory"]
 *   }}
 *   footer="First integration, then specialization."
 * />
 * ```
 */
export default function StudyGrid({
  title,
  leftColumn,
  rightColumn,
  description,
  footer,
  variant = 'neutral',
  className = '',
}: Readonly<StudyGridProps>) {
  // Variant-specific styling
  const borderColor = variant === 'restoration' ? 'border-green-700/40' : 'border-charcoal/20';
  const headingColor = variant === 'restoration' ? 'text-green-900' : 'text-forest';

  return (
    <div
      className={`bg-parchment-light border-2 ${borderColor} rounded-lg p-8 space-y-6 ${className}`}
    >
      {/* Title */}
      <h4 className="font-playfair text-2xl font-bold text-forest text-center">
        {title}
      </h4>

      {/* Description */}
      {description && (
        <p className="text-base text-charcoal/90 leading-relaxed">
          {description}
        </p>
      )}

      {/* Two-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-3">
          <h5 className={`font-playfair text-lg font-bold ${headingColor}`}>
            {leftColumn.heading}
          </h5>
          <ul className="text-base text-charcoal/90 space-y-1 list-disc list-inside">
            {leftColumn.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Right Column */}
        <div className="space-y-3">
          <h5 className={`font-playfair text-lg font-bold ${headingColor}`}>
            {rightColumn.heading}
          </h5>
          <ul className="text-base text-charcoal/90 space-y-1 list-disc list-inside">
            {rightColumn.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer */}
      {footer && (
        <p className="text-center text-sm text-charcoal/70 italic mt-4">
          {footer}
        </p>
      )}
    </div>
  );
}
