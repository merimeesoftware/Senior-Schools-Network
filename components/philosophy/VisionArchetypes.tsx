'use client';
import CardGrid from "@/components/content/CardGrid";

/**
 * VisionArchetypes Component
 * 
 * Defines the formation archetypes: Chivalric Wayfarer (gymnasium), Poetic Guardian (outcome).
 * Shows the five modes and what the soul is doing in each.
 * 
 * Part of the Conclusion (The Vision) in the syllogistic argument structure.
 * 
 * @component
 * @param {VisionArchetypesProps} props - Component props
 * @param {string} [props.className] - Optional CSS class name for styling
 * @param {boolean} [props.summaryMode=true] - Whether to show summary view initially
 * 
 * @example
 * ```tsx
 * <VisionArchetypes />
 * ```
 */

interface VisionArchetypesProps {
  className?: string;
}

export function VisionArchetypes({ className = '' }: VisionArchetypesProps) {
  // Always show full content - concise enough to display fully
  return (
    <div className={`space-y-12 ${className}`}>
      <h3 className="font-playfair text-4xl font-bold text-gold-dark text-center">
        Chivalric Wayfarers & Poetic Guardians
      </h3>

      <p className="text-lg text-charcoal/90 text-center max-w-3xl mx-auto leading-relaxed">
        The musical teaches repose, the gymnastic adventure, the poetic the first look, the romantic the quest that look demands, and the virtuous the cost of keeping faith with both.
      </p>

      {/* Formation Aspects Table */}
      <div className="max-w-4xl mx-auto overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gold/20">
              <th className="border-2 border-gold p-4 text-left font-playfair text-lg text-gold-dark">Mode</th>
              <th className="border-2 border-gold p-4 text-left font-playfair text-lg text-gold-dark">What the soul is doing</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-2 border-gold/50 p-4 font-medium text-charcoal">Musical</td>
              <td className="border-2 border-gold/50 p-4 text-charcoal/80">Repose; Muses as lullaby, rhyme, picture; first delight</td>
            </tr>
            <tr className="bg-parchment/30">
              <td className="border-2 border-gold/50 p-4 font-medium text-charcoal">Gymnastic</td>
              <td className="border-2 border-gold/50 p-4 text-charcoal/80">Naked contact with things; rules; arranged adventure</td>
            </tr>
            <tr>
              <td className="border-2 border-gold/50 p-4 font-medium text-charcoal">Poetic</td>
              <td className="border-2 border-gold/50 p-4 text-charcoal/80">Yearning as knowing: image, song, pudor, presence</td>
            </tr>
            <tr className="bg-parchment/30">
              <td className="border-2 border-gold/50 p-4 font-medium text-charcoal">Romantic</td>
              <td className="border-2 border-gold/50 p-4 text-charcoal/80">Quest, ordeal, vow; battles that cannot be arranged</td>
            </tr>
            <tr>
              <td className="border-2 border-gold/50 p-4 font-medium text-charcoal">Virtuous</td>
              <td className="border-2 border-gold/50 p-4 text-charcoal/80">Justice, suffering, governing, keeping faith</td>
            </tr>
          </tbody>
        </table>
      </div>

      <CardGrid
        variant="vision"
        columns={3}
        cards={[
          {
            emoji: "⚔️",
            heading: "Chivalric Wayfarer",
            description: "Forged in the gymnasium through sport, adventure, and discipline. Physically resilient, morally courageous, ready to defend truth and family. The foundation stage that enables all higher formation."
          },
          {
            emoji: "📜",
            heading: "Poetic Guardian",
            description: "The complete formation: integrated mind, ordered soul, liturgical wisdom. Sees reality as a unified whole. Defends families and culture with humility while anchored in divine order."
          },
          {
            emoji: "✝️",
            heading: "Catholic Formation",
            description: "Education ordered to eternal truth, not mere career preparation. \"The farther you go... you really don't know very much at all\" (Socrates)—yet they live fully human lives, succeeding while soul-anchored."
          }
        ]}
      />

      <div className="bg-parchment/50 border-2 border-gold rounded-lg p-8 max-w-3xl mx-auto">
        <p className="text-lg text-charcoal/90 text-center leading-relaxed italic">
          "It has a hold on you... the hold of love."
        </p>
        <p className="text-sm text-charcoal/70 text-center mt-2">
          — From the Integrated Humanities Lecture
        </p>
      </div>
    </div>
  );
}
