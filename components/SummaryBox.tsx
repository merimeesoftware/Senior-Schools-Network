import { ReactNode } from 'react';

/**
 * Props for the SummaryBox component
 */
interface SummaryBoxProps {
  /** Visual variant matching syllogistic argument type */
  variant: 'major-premise' | 'minor-premise' | 'conclusion';
  /** Optional title displayed above content */
  title?: string;
  /** Content to display in the box */
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * SummaryBox Component
 * 
 * A bordered summary/conclusion box with variant-specific theming for displaying
 * syllogistic conclusions and key takeaways. Used to emphasize important summaries
 * throughout the philosophy page.
 * 
 * @example
 * ```tsx
 * <SummaryBox variant="major-premise" title="The Crisis Established:">
 *   <p className="text-xl leading-relaxed">
 *     Modern education has failed our sons by poisoning the well of wonder...
 *   </p>
 * </SummaryBox>
 * ```
 */
export default function SummaryBox({
  variant,
  title,
  children,
  className = '',
}: Readonly<SummaryBoxProps>) {
  // Map variants to styling (matching SyllogismSection theming)
  const variantStyles = {
    'major-premise': {
      bg: 'bg-red-100',
      border: 'border-4 border-red-700',
      titleColor: 'text-red-900',
    },
    'minor-premise': {
      bg: 'bg-green-100',
      border: 'border-4 border-green-700',
      titleColor: 'text-green-900',
    },
    conclusion: {
      bg: 'bg-gold/5',
      border: 'border-2 border-gold/40',
      titleColor: 'text-gold-dark',
    },
  };

  const styles = variantStyles[variant];

  return (
    <div
      className={`max-w-4xl mx-auto ${styles.bg} ${styles.border} rounded-lg p-8 md:p-8 sm:p-6 text-center ${className}`}
    >
      {title && (
        <h3 className={`font-playfair text-2xl font-bold ${styles.titleColor} mb-4`}>
          {title}
        </h3>
      )}
      <div className="text-charcoal/90 leading-relaxed">{children}</div>
    </div>
  );
}
