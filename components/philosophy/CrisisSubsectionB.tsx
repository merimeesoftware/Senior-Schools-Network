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
        Modern education has neutered boyhood through risk elimination—dodgeball banned, tree-climbing forbidden, contact sports replaced with "cooperative games." The gymnasium stage (ages 7-13) demands sport, Latin, and adventure to build physical courage. Without this foundation, boys become morally and physically soft, unable to endure intellectual rigor or spiritual trial.
      </p>

      <ProblemSolutionPanel
        layout="split"
        collapsible={false}
        problem={{
          title: "The Problem: Elimination of Risk",
          description: "Modern education has neutered boyhood. Dodgeball is banned. Tree-climbing is forbidden. Recess is supervised. Contact sports are replaced with \"cooperative games.\" The result? Boys who have never experienced the thrill of danger or the discipline of physical training.\n\nThe gymnasium stage (ages 7-13) is the developmental window for physical formation: sport, Latin memory, ordered habit. Senior calls it \"the years of discipline.\" Without this foundation, boys cannot develop the moral courage prerequisite for higher learning.",
          quote: {
            id: "physical-softness",
            quote: "Result: Physical softness produces moral weakness. Chivalric Wayfarers cannot emerge from bubble-wrapped boyhood.",
            author: "",
            source: "",
            category: "discipline" as const,
          }
        }}
        solution={{
          title: "The Solution: Gymnasium Rigor",
          description: "Senior's gymnasium stage demands three things: Sport (rugby, boxing, swimming—full-contact, high-risk), Latin (memory training, ordered mind), and Adventure (camping, exploration, danger under benevolent supervision).\n\nThis is not optional enrichment. Physical courage and discipline are prerequisites for intellectual and spiritual formation. The boy who has never endured physical hardship cannot endure intellectual rigor or spiritual trial.",
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
            quote: "The gymnasium stage—ages seven to thirteen—is the period of physical formation. Sport, Latin, and adventure build the ordered habits and physical courage without which higher learning is impossible. Modern education has abandoned this stage, producing boys who are intellectually precocious but morally and physically soft.",
            author: "Dr. John Senior",
            source: "The Restoration of Christian Culture",
            showSourceLink: true,
            sourceSlug: "restoration-of-christian-culture"
          },
          {
            quote: "Physical discipline is spiritual discipline. The boy who learns to endure cold water, hard ground, and aching muscles learns to endure intellectual frustration and spiritual dryness. Without the gymnasium, the poetic stage collapses—there is no soil for higher learning.",
            author: "James Taylor",
            source: "Poetic Knowledge: The Recovery of Education",
            showSourceLink: true,
            sourceSlug: "poetic-knowledge-recovery-education"
          },
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
