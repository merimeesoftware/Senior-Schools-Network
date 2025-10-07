import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <div className="quote-block max-w-3xl mx-auto">
          <p className="text-2xl md:text-3xl text-charcoal">
            "Wonder is the beginning of wisdom"
          </p>
          <p className="text-sm mt-2 not-italic text-charcoal/70">
            — Ancient Proverb
          </p>
        </div>

        <div className="mt-8 max-w-2xl mx-auto">
          <p className="text-lg leading-relaxed mb-6">
            Welcome to the Senior Schools Network — a loose affiliation of
            Catholic schools embodying{' '}
            <span className="font-semibold">poetic knowledge</span>,{' '}
            <span className="font-semibold">sensory-based learning</span>, and{' '}
            <span className="font-semibold">spiritual formation</span> rooted in
            the educational philosophy of Dr. John Senior.
          </p>
          <p className="text-lg leading-relaxed text-charcoal/80">
            Our emphasis:{' '}
            <strong>Adventure, stories, physical discipline</strong> — forming
            resilient "warrior poets" through the gymnasium stage (ages 7-13)
            and beyond.
          </p>
        </div>
      </section>

      {/* Call to Action Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <Link
          href="/schools"
          className="card hover:shadow-xl transition-shadow"
        >
          <h3 className="text-xl font-playfair text-forest mb-3">
            Explore Schools
          </h3>
          <p className="text-sm">
            Discover affiliated schools embodying Senior's vision of education
            as soul formation.
          </p>
        </Link>

        <Link
          href="/philosophy"
          className="card hover:shadow-xl transition-shadow"
        >
          <h3 className="text-xl font-playfair text-forest mb-3">
            Discover Resources
          </h3>
          <p className="text-sm">
            Browse excerpts, book lists, and philosophical foundations for
            poetic learning.
          </p>
        </Link>

        <Link
          href="/home-application"
          className="card hover:shadow-xl transition-shadow"
        >
          <h3 className="text-xl font-playfair text-forest mb-3">
            Download Gymnasium Guide
          </h3>
          <p className="text-sm">
            Non-prescriptive resources for adapting adventure and discipline at
            home.
          </p>
        </Link>

        <Link
          href="/join-found"
          className="card hover:shadow-xl transition-shadow"
        >
          <h3 className="text-xl font-playfair text-forest mb-3">
            Start a School
          </h3>
          <p className="text-sm">
            Restore the gymnasium for warrior poets — informal guidance for
            founders.
          </p>
        </Link>
      </section>

      {/* Featured Quote */}
      <section className="mb-16">
        <div className="card max-w-4xl mx-auto bg-spiritual/10">
          <blockquote className="text-center">
            <p className="text-xl font-playfair italic text-charcoal mb-4">
              "Blessed are the legend-makers with their rhyme of things not
              found within recorded time"
            </p>
            <footer className="text-sm font-lato text-charcoal/70">
              — J.R.R. Tolkien, <cite>Mythopoeia</cite>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Placeholder for Featured Schools */}
      <section>
        <h2 className="text-3xl font-playfair text-center mb-8 text-forest">
          Featured Schools & Resources
        </h2>
        <p className="text-center text-charcoal/70 max-w-2xl mx-auto">
          Content coming soon: Highlighted schools from our network and curated
          resources for the stages of development.
        </p>
      </section>
    </div>
  );
}
