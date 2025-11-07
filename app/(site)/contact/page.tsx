import ContentContainer from '@/components/ContentContainer';
import SectionHeading from '@/components/SectionHeading';

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
        
        <div className="prose prose-lg mt-8 text-charcoal/90 leading-relaxed space-y-6">
          <p className="text-xl text-center">
            We welcome inquiries about the Senior Schools Network, affiliated schools, 
            and the educational vision of Dr. John Senior.
          </p>
          
          <div className="bg-parchment-light rounded-organic-lg p-8 mt-8 text-center border-2 border-gold/20">
            <h2 className="text-2xl font-playfair text-forest mb-4">
              Email
            </h2>
            <p className="text-lg">
              <a 
                href="mailto:info@seniorschools.org" 
                className="text-gold hover:text-gold-dark transition-colors font-lato font-semibold underline decoration-2 underline-offset-4"
              >
                info@seniorschools.org
              </a>
            </p>
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
