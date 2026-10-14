'use client';
import ProblemSolutionPanel from "@/components/content/ProblemSolutionPanel";
import EvidenceQuoteGroup from "@/components/content/EvidenceQuoteGroup";

/**
 * CrisisSubsectionB Component
 * 
 * Renders Part I, Section B: Cultural Softness & the Gymnasium Crisis.
 * Shows elimination of physical risk and proposes gymnasium rigor.
 * 
 * Part of the Major Premise (The Crisis) in the syllogistic argument structure.
 * 
 * @component
 * @param {CrisisSubsectionBProps} props - Component props
 * @param {string} [props.className] - Optional CSS class name for styling
 * 
 * @example
 * ```tsx
 * <CrisisSubsectionB />
 * ```
 */

interface CrisisSubsectionBProps {
  className?: string;
}

export function CrisisSubsectionB({ className = '' }: CrisisSubsectionBProps) {
  // Always show full content
  return (
    <div id="major-premise-b" className={`space-y-8 ${className}`}>
      <h3 className="font-playfair text-4xl font-bold text-red-900">
        B. Cultural Softness & the Gymnasium Crisis
      </h3>

      <p className="text-lg text-charcoal/80 leading-relaxed">
        Modern education has neutered boyhood through risk elimination—dodgeball banned, tree-climbing forbidden, contact sports replaced with "cooperative games." The gymnastic years (roughly 7–13) demand sport, Latin, and adventure to build physical courage. Without this foundation, boys become morally and physically soft, unable to endure intellectual rigor or spiritual trial.
      </p>

      <ProblemSolutionPanel
        layout="split"
        collapsible={false}
        problem={{
          title: "The Problem: Elimination of Risk",
          description: "Modern education has neutered boyhood. Dodgeball is banned. Tree-climbing is forbidden. Recess is supervised. Contact sports are replaced with \"cooperative games.\" The result? Boys who have never experienced the thrill of danger or the discipline of physical training.\n\nThe gymnastic years (roughly 7–13) are naked contact with things, rules, and arranged adventure. Softness bubble-wraps children out of arranged adventure and real contact. Without this foundation, boys cannot develop the moral courage prerequisite for higher learning.",
          quote: {
            id: "physical-softness",
            quote: "Result: Physical softness produces moral weakness. Chivalric Wayfarers cannot emerge from bubble-wrapped boyhood.",
            author: "",
            source: "",
            category: "discipline" as const,
          }
        }}
        solution={{
          title: "The Solution: The Gymnastic Years",
          description: "The gymnastic years demand three things: Sport (rugby, boxing, swimming—full-contact, high-risk), Latin (memory training, ordered mind), and Adventure (camping, exploration, danger under benevolent supervision).\n\nThis is not optional enrichment. Physical courage and discipline are prerequisites for intellectual and spiritual formation. The boy who has never endured physical hardship cannot endure intellectual rigor or spiritual trial.",
          quote: {
            id: "physical-resilience",
            quote: "Result: Physical resilience breeds moral courage. The Chivalric Wayfarer is forged in the gymnasium.",
            author: "",
            source: "",
            category: "philosophy" as const,
          }
        }}
      />

      <EvidenceQuoteGroup
        variant="major-premise"
        title="Evidence from the Sources"
        collapsible={false}
        quotes={[
          {
            quote: "Train up a child in the way he should go; even when he is old he will not depart from it.",
            author: "Proverbs 22:6",
            source: "Scripture (ESV)"
          },
          {
            quote: "Do you not know that in a race all the runners run, but only one receives the prize? So run that you may obtain it. Every athlete exercises self-control in all things. They do it to receive a perishable wreath, but we an imperishable.",
            author: "1 Corinthians 9:24-25",
            source: "Scripture (ESV)"
          }
        ]}
      />
    </div>
  );
}
