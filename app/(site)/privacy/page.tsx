import ContentContainer from '@/components/ContentContainer';
import SectionHeading from '@/components/SectionHeading';

export const metadata = {
  title: 'Privacy Policy | Senior Schools Network',
  description: 'Privacy policy for the Senior Schools Network website.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-parchment py-20">
      <ContentContainer width="narrow">
        <SectionHeading level={1} align="center">
          Privacy Policy
        </SectionHeading>
        
        <div className="prose prose-lg mt-8 text-charcoal/90 leading-relaxed space-y-6">
          <p>
            The Senior Schools Network is committed to protecting your privacy. 
            This website collects minimal data and does not track users beyond 
            basic analytics necessary for site improvement.
          </p>
          
          <h2 className="text-2xl font-playfair text-forest mt-8 mb-4">
            Data Collection
          </h2>
          <p>
            Contact forms collect only name and email address for correspondence purposes. 
            This information is used solely to respond to your inquiries and is not 
            shared with third parties.
          </p>
          
          <h2 className="text-2xl font-playfair text-forest mt-8 mb-4">
            Analytics
          </h2>
          <p>
            We may use basic web analytics to understand how visitors use our site. 
            This helps us improve the user experience. No personally identifiable 
            information is collected through analytics.
          </p>
          
          <h2 className="text-2xl font-playfair text-forest mt-8 mb-4">
            Third Parties
          </h2>
          <p>
            We do not sell, trade, or otherwise transfer your information to 
            outside parties. Your privacy is sacred to us.
          </p>
          
          <h2 className="text-2xl font-playfair text-forest mt-8 mb-4">
            Questions
          </h2>
          <p>
            If you have any questions about this privacy policy, please{' '}
            <a href="/contact" className="text-gold hover:underline">
              contact us
            </a>.
          </p>
        </div>
      </ContentContainer>
    </main>
  );
}
