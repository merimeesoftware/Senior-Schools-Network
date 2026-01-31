/**
 * Represents a single column in the comparison diagram
 */
interface ComparisonColumn {
  /** Column label (e.g., "Modern Education") */
  label: string;
  /** Array of steps/stages (e.g., ["📱Screens (0-13)", "🛡️Gymnasium (skipped)"]) */
  steps: string[];
  /** Result text displayed at bottom (e.g., "= Alienated Technician") */
  result: string;
}

/**
 * Props for the ComparisonDiagram component
 */
interface ComparisonDiagramProps {
  /** Diagram title */
  title: string;
  /** Left column (typically problem/modern path) */
  leftColumn: ComparisonColumn;
  /** Right column (typically solution/classical path) */
  rightColumn: ComparisonColumn;
  /** Optional subtitle/description */
  description?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * ComparisonDiagram Component
 * 
 * Two-column flow diagram showing contrasting paths with steps, arrows, and results.
 * Used for visualizing the difference between modern and classical education approaches.
 * 
 * @example
 * ```tsx
 * <ComparisonDiagram
 *   title="The Poisoned Well: STEM Without Poetic Soil"
 *   description="Specialization must grow from poetic soil, not replace it"
 *   leftColumn={{
 *     label: "Modern Education",
 *     steps: ["📱Screens (0-13)", "🛡️Gymnasium (skipped)", "🔬STEM-first"],
 *     result: "= Alienated Technician"
 *   }}
 *   rightColumn={{
 *     label: "Classical Education",
 *     steps: ["🌿Nursery (0-7)", "🛡️Gymnasium (7-13)", "🔬Science (from soil)"],
 *     result: "= Integrated Warrior Poet"
 *   }}
 * />
 * ```
 */
export default function ComparisonDiagram({
  title,
  leftColumn,
  rightColumn,
  description,
  className = '',
}: Readonly<ComparisonDiagramProps>) {
  return (
    <div className={`max-w-3xl mx-auto ${className}`}>
      <div className="bg-parchment-light border-2 border-red-700/40 rounded-lg p-8 space-y-6">
        {/* Title */}
        <h4 className="font-playfair text-2xl font-bold text-forest text-center mb-6">
          {title}
        </h4>

        {/* Optional Description */}
        {description && (
          <p className="text-center text-base text-charcoal/70 italic mb-8">
            {description}
          </p>
        )}

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column (Problem/Modern) */}
          <div className="flex flex-col space-y-4">
            {/* Label */}
            <div className="font-playfair text-lg font-bold text-center mb-4 text-red-900">
              {leftColumn.label}
            </div>

            {/* Steps with Arrows */}
            <div className="flex flex-col items-center space-y-2">
              {leftColumn.steps.map((step, index) => (
                <div key={index} className="w-full">
                  <div className="text-base text-charcoal/90 text-center">
                    {step}
                  </div>
                  {index < leftColumn.steps.length - 1 && (
                    <div className="text-center text-charcoal/40 my-1">↓</div>
                  )}
                </div>
              ))}
            </div>

            {/* Result */}
            <div className="text-center font-bold text-lg mt-4 text-red-900">
              {leftColumn.result}
            </div>
          </div>

          {/* Right Column (Solution/Classical) */}
          <div className="flex flex-col space-y-4">
            {/* Label */}
            <div className="font-playfair text-lg font-bold text-center mb-4 text-green-900">
              {rightColumn.label}
            </div>

            {/* Steps with Arrows */}
            <div className="flex flex-col items-center space-y-2">
              {rightColumn.steps.map((step, index) => (
                <div key={index} className="w-full">
                  <div className="text-base text-charcoal/90 text-center">
                    {step}
                  </div>
                  {index < rightColumn.steps.length - 1 && (
                    <div className="text-center text-charcoal/40 my-1">↓</div>
                  )}
                </div>
              ))}
            </div>

            {/* Result */}
            <div className="text-center font-bold text-lg mt-4 text-green-900">
              {rightColumn.result}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
