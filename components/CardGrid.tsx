import { ReactNode } from 'react';

/**
 * Represents a single card in the grid
 */
interface Card {
  /** Emoji icon displayed at the top of the card */
  emoji: string;
  /** Card heading/title */
  heading: string;
  /** Card description text */
  description: string;
  /** Optional action button or link element */
  action?: ReactNode;
}

/**
 * Props for the CardGrid component
 */
interface CardGridProps {
  /** Array of cards to display in the grid */
  cards: Card[];
  /** Visual variant for theming (matches syllogistic argument stages) */
  variant?: 'crisis' | 'restoration' | 'vision' | 'neutral';
  /** Number of columns in the grid (2 or 3) */
  columns?: 2 | 3;
  /** Additional CSS classes */
  className?: string;
}

/**
 * CardGrid Component
 * 
 * A responsive grid layout for displaying cards with emoji, heading, description, and optional action.
 * Used throughout the philosophy page for consistent card patterns (Three Poisons, Warrior Poet Vision,
 * CTAs, Practical Examples).
 * 
 * @example
 * ```tsx
 * <CardGrid
 *   variant="crisis"
 *   columns={3}
 *   cards={[
 *     {
 *       emoji: "📱",
 *       heading: "Screens",
 *       description: "Replace wonder & sensory integration",
 *       action: <CTAButton href="/resources">Learn More</CTAButton>
 *     }
 *   ]}
 * />
 * ```
 */
export default function CardGrid({
  cards,
  variant = 'neutral',
  columns = 3,
  className = '',
}: Readonly<CardGridProps>) {
  // Map variants to border colors (matching SyllogismSection theming)
  const variantBorders = {
    crisis: 'border-red-700',
    restoration: 'border-green-700',
    vision: 'border-gold',
    neutral: 'border-charcoal/50',
  };

  const borderColor = variantBorders[variant];

  // Responsive grid classes based on column count
  const gridCols = columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3';

  return (
    <div className={`grid grid-cols-1 ${gridCols} gap-6 ${className}`}>
      {cards.map((card, index) => (
        <div
          key={index}
          className={`bg-white border-2 ${borderColor} rounded-lg p-6 text-center space-y-4`}
        >
          {/* Heading */}
          <h4 className="font-playfair text-2xl font-bold text-forest">
            {card.heading}
          </h4>

          {/* Description */}
          <p className="text-base text-charcoal/90 leading-relaxed">
            {card.description}
          </p>

          {/* Optional Action */}
          {card.action && <div className="mt-4">{card.action}</div>}
        </div>
      ))}
    </div>
  );
}
