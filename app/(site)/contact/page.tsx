import ContentContainer from '@/components/layout/ContentContainer';
import SectionHeading from '@/components/ui/SectionHeading';
import CTAButton from '@/components/ui/CTAButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact the Senior Schools Network for inquiries about Catholic education rooted in poetic knowledge.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-parchment">
      {/* Spacer for absolute navigation */}
      <div className="h-24" aria-hidden="true" />
      
      <div className="pt-8 pb-20">
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
                href="tel:+1-440-876-8036" 
                className="text-gold hover:text-gold-dark transition-colors font-lato font-semibold underline decoration-2 underline-offset-4"
              >
                (440) 876-8036
              </a>
            </p>
            <p className="text-sm text-charcoal/60">
              Call or text
            </p>
          </div>

          {/* About the Creator */}
          <div className="bg-white rounded-organic-lg p-8 border border-charcoal/10">
            <h2 className="text-2xl font-playfair text-forest mb-4 text-center">
              About the Creator of this Site: Michael Merimee
            </h2>
            <p className="text-body leading-relaxed">
              My own education was varied and, at times, chaotic: 
              homeschooled, then moving through an early classical Catholic school, 
              a boarding academy, Gregory the Great Academy (where I first encountered Senior’s 
              poetic vision in practice), a conventional Catholic high school, Wyoming Catholic College, 
              community college, and online courses. After teaching at a couple of local classical schools, 
              I transitioned to engineering to support my family. In my adult years and especially as a father, 
              this patchwork of approaches—classical, modern, and Senior-inspired—drove me to study educational 
              philosophies deeply over the last decade. I became convinced that Senior’s and the IHP’s emphasis 
              on wonder, sense, story, and liturgy offers a soul-nourishing alternative to schematized
              modern education and many of the prevailing classical models being pursued in this recent revival of
              Catholic Education. I created this network to gather, connect, 
              and inspire those already living this vision and those discerning how to begin.
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
              They are in the thick of it and can help you best!
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
      </div>
    </main>
  );
}
