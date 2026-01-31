'use client';
import CardGrid from "@/components/content/CardGrid";

/**
 * VisionArchetypes Component
 * 
 * Defines the formation archetypes: Chivalric Wayfarer (gymnasium), Poetic Guardian (outcome).
 * Shows how the four stages produce integrated Catholic men.
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
        The outcome of the four stages: Physical courage (gymnasium) + integrated learning (poetic) + 
        liturgical wisdom (spiritual) = men who live fully human lives, not as cogs in a machine.
      </p>

      {/* Formation Aspects Table */}
      <div className="max-w-4xl mx-auto overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gold/20">
              <th className="border-2 border-gold p-4 text-left font-playfair text-lg text-gold-dark">Formation Aspect</th>
              <th className="border-2 border-gold p-4 text-left font-playfair text-lg text-gold-dark">Stage Contribution</th>
              <th className="border-2 border-gold p-4 text-left font-playfair text-lg text-gold-dark">Example Outcome</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-2 border-gold/50 p-4 font-medium text-charcoal">Physical Resilience</td>
              <td className="border-2 border-gold/50 p-4 text-charcoal/80">Gymnasium</td>
              <td className="border-2 border-gold/50 p-4 text-charcoal/80">Endures hardships as Chivalric Wayfarer, defending with courage.</td>
            </tr>
            <tr className="bg-parchment/30">
              <td className="border-2 border-gold/50 p-4 font-medium text-charcoal">Moral Courage</td>
              <td className="border-2 border-gold/50 p-4 text-charcoal/80">Poetic</td>
              <td className="border-2 border-gold/50 p-4 text-charcoal/80">Integrates senses/emotions, pursuing truth humbly.</td>
            </tr>
            <tr>
              <td className="border-2 border-gold/50 p-4 font-medium text-charcoal">Integrated Wisdom</td>
              <td className="border-2 border-gold/50 p-4 text-charcoal/80">Spiritual</td>
              <td className="border-2 border-gold/50 p-4 text-charcoal/80">Anchored in liturgy, restores families/Christendom as Poetic Guardian.</td>
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
