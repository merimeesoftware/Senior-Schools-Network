import CardGrid from "@/components/CardGrid";

/**
 * VisionWarriorPoet Component
 * 
 * Defines the three components of a warrior poet: Warrior (physical), Poet (intellectual), Catholic (spiritual).
 * 
 * Part of the Conclusion (The Vision) in the syllogistic argument structure.
 * 
 * @component
 * @param {VisionWarriorPoetProps} props - Component props
 * @param {string} [props.className] - Optional CSS class name for styling
 * 
 * @example
 * ```tsx
 * <VisionWarriorPoet />
 * ```
 */

interface VisionWarriorPoetProps {
  className?: string;
}

export function VisionWarriorPoet({ className = '' }: VisionWarriorPoetProps) {
  return (
    <div className={`space-y-12 ${className}`}>
      <h3 className="font-playfair text-4xl font-bold text-gold-dark text-center">
        What Is a Warrior Poet?
      </h3>

      <CardGrid
        variant="vision"
        columns={3}
        cards={[
          {
            emoji: "🛡️",
            heading: "Warrior",
            description: "Physically resilient, morally courageous, ready to defend truth and family. Forged in the gymnasium through sport, adventure, and discipline."
          },
          {
            emoji: "🎨",
            heading: "Poet",
            description: "Rooted in poetic knowledge: music, art, philosophy integrated through liturgical rhythm. Sees reality as a unified whole, not fragmented facts."
          },
          {
            emoji: "✝️",
            heading: "Catholic",
            description: "Formed in liturgical wisdom, rooted in Tradition, ordered to eternal truth. Education is formation for heaven, not mere career preparation."
          }
        ]}
      />

      <p className="text-lg text-charcoal/90 text-center max-w-3xl mx-auto leading-relaxed">
        The warrior poet is not a romantic ideal but the natural outcome of Senior's four stages.
        Physical courage (gymnasium) + integrated learning (poetic) + liturgical wisdom (spiritual)
        = men who can restore Christendom.
      </p>
    </div>
  );
}
