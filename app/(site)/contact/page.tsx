import ContentContainer from '@/components/ContentContainer';
import SectionHeading from '@/components/SectionHeading';
import CTAButton from '@/components/CTAButton';

export const metadata = {
  title: 'Contact | Senior Schools Network',
  description: 'Contact the Senior Schools Network for inquiries about Catholic education rooted in poetic knowledge.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-parchment py-20">
      <ContentContainer width="narrow">
        <SectionHeading level={1} align="center">
          Contact
        </SectionHeading>
        
        <div className="mt-8 text-charcoal/90 leading-relaxed space-y-8">
          <p className="text-xl text-center">
            Questions about the network, the philosophy, or interested in connecting 
            with others pursuing this vision? Reach out directly.
          </p>
          
          {/* Phone Contact */}
          <div className="bg-parchment-light rounded-organic-lg p-8 text-center border-2 border-gold/20">
            <h2 className="text-2xl font-playfair text-forest mb-4">
              Phone
            </h2>
            <p className="text-lg mb-2">
              <a 
                href="tel:+1-555-123-4567" 
                className="text-gold hover:text-gold-dark transition-colors font-lato font-semibold underline decoration-2 underline-offset-4"
              >
                (555) 123-4567
              </a>
            </p>
            <p className="text-sm text-charcoal/60">
              Call or text
            </p>
          </div>

          {/* About the Creator */}
          <div className="bg-white rounded-organic-lg p-8 border border-charcoal/10">
            <h2 className="text-2xl font-playfair text-forest mb-4 text-center">
              About the Creator
            </h2>
            <p className="text-body leading-relaxed">
              This site was created by a father and educator inspired by John Senior's vision 
              of poetic education. While not yet having founded a school or program personally, 
              this network exists to gather, connect, and inspire those already doing this work — 
              and those discerning how to begin.
            </p>
          </div>

          {/* Direct Contact with Schools */}
          <div className="bg-forest/5 rounded-organic-lg p-8 text-center">
            <h2 className="text-xl font-playfair text-forest mb-4">
              Contact Schools Directly
            </h2>
            <p className="text-body leading-relaxed mb-6">
              For specific questions about individual schools and programs, we encourage 
              you to reach out to them directly through their own websites and contact pages.
            </p>
            <CTAButton href="/network-directory" variant="outline" size="md">
              Browse the Directory
            </CTAButton>
          </div>
          
          <p className="text-center text-charcoal/70 mt-8 italic">
            "Come to me, all you that labour and are burdened; I will give you rest." 
            <span className="block mt-2 not-italic text-sm">— Matthew 11:28</span>
          </p>
        </div>
      </ContentContainer>
    </main>
  );
}
