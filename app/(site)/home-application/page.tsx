export default function HomeApplicationPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-playfair text-forest mb-6">
        Resources for Home Application
      </h1>

      <div className="quote-block">
        <p className="text-xl">
          "Homeschooling shines in nursery — gymnasium awaits your courage"
        </p>
      </div>

      <div className="prose max-w-none mt-8">
        <p className="text-lg leading-relaxed mb-6">
          Many homeschooling families excel at the nursery stage (ages 0-7) but
          find the gymnasium stage (ages 7-13) more challenging. Here you'll
          find non-prescriptive inspiration for adapting Senior's ideas —
          adventure, physical discipline, and stories — into your family life.
        </p>

        <h2 className="text-2xl font-playfair text-forest mb-4">
          Available Resources
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="card">
            <h3 className="text-xl font-playfair text-forest mb-3">
              Gymnasium Guide for Families
            </h3>
            <p className="text-sm mb-4">
              Non-prescriptive PDF with family adventure ideas, book
              recommendations, and liturgical integration tips.
            </p>
            <button className="btn-primary text-sm" disabled>
              Download (Coming Soon)
            </button>
          </div>

          <div className="card">
            <h3 className="text-xl font-playfair text-forest mb-3">
              Book Lists by Stage
            </h3>
            <p className="text-sm mb-4">
              Curated selections for home use, organized by developmental stage
              with emphasis on adventure and formation.
            </p>
            <button className="btn-secondary text-sm" disabled>
              View Lists (Coming Soon)
            </button>
          </div>
        </div>

        <div className="card bg-spiritual/10 mt-8">
          <blockquote>
            <p className="text-lg font-playfair italic mb-2">
              "Train up a child in the way he should go: and when he is old, he
              will not depart from it"
            </p>
            <footer className="text-sm font-lato text-charcoal/70">
              — Proverbs 22:6
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
