/**
 * VisionSyllogismRecap Component
 * 
 * Renders the complete syllogistic argument recap showing I + II = ∴ III with color-coded parts.
 * 
 * Part of the Conclusion (The Vision) in the syllogistic argument structure.
 * 
 * @component
 * @param {VisionSyllogismRecapProps} props - Component props
 * @param {string} [props.className] - Optional CSS class name for styling
 * 
 * @example
 * ```tsx
 * <VisionSyllogismRecap />
 * ```
 */

interface VisionSyllogismRecapProps {
  className?: string;
}

export function VisionSyllogismRecap({ className = '' }: VisionSyllogismRecapProps) {
  return (
    <div className={`max-w-3xl mx-auto bg-parchment-light border-2 border-gold rounded-lg p-8 space-y-6 ${className}`}>
      <h3 className="font-playfair text-3xl font-bold text-forest text-center">
        The Argument Complete
      </h3>

      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-16 text-center">
            <span className="text-4xl font-playfair text-red-700/50">I.</span>
          </div>
          <div className="flex-1">
            <p className="text-lg text-charcoal/90">
              <strong className="text-red-900">The Crisis:</strong> Modern education has failed
              our sons through screens, softness, and specialized knowledge—poisoning the gymnasium
              and poetic stages.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-16 text-center">
            <span className="text-4xl font-playfair text-green-700/50">II.</span>
          </div>
          <div className="flex-1">
            <p className="text-lg text-charcoal/90">
              <strong className="text-green-900">The Restoration:</strong> Poetic knowledge—cultivated
              through the four stages—is the remedy. The gymnasium stage (7-13) builds the
              physical and moral courage prerequisite for all higher learning.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-16 text-center">
            <span className="text-4xl font-playfair text-gold">∴</span>
          </div>
          <div className="flex-1">
            <p className="text-lg text-charcoal/90">
              <strong className="text-gold-dark">The Vision:</strong> Boys formed in the
              gymnasium—physically resilient, morally courageous—and rooted in poetic knowledge will
              become warrior poets: men who defend truth, build families, and restore Christian
              culture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
