export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-playfair text-forest mb-6">Contact</h1>

      <div className="max-w-2xl mx-auto">
        <div className="quote-block">
          <p className="text-xl">"Reach Out for Guidance"</p>
        </div>

        <div className="prose mt-8">
          <p className="text-lg leading-relaxed mb-6">
            Whether you're a parent seeking a school, an educator exploring
            affiliation, or an aspiring founder, we welcome your inquiries.
          </p>

          <div className="card">
            <h2 className="text-xl font-playfair text-forest mb-4">
              Contact Form
            </h2>
            <p className="text-sm text-charcoal/70 mb-6">
              Interactive contact form coming soon in Phase 3. For now, please
              note your interest and check back for updates.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-lato font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  disabled
                  className="w-full px-4 py-2 border border-charcoal/20 rounded-organic bg-parchment-light"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-lato font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  disabled
                  className="w-full px-4 py-2 border border-charcoal/20 rounded-organic bg-parchment-light"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-lato font-semibold mb-2">
                  Message
                </label>
                <textarea
                  disabled
                  rows={6}
                  className="w-full px-4 py-2 border border-charcoal/20 rounded-organic bg-parchment-light"
                  placeholder="Your message..."
                />
              </div>

              <button className="btn-primary w-full" disabled>
                Submit (Coming Soon)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
