import { Suspense } from 'react';
import Link from 'next/link';
import FooterContent from './FooterContent';

export default function Footer() {
  return (
    <footer
      className="bg-forest text-parchment mt-auto border-t-4 border-gold"
      role="contentinfo"
    >
      <div className="section-container py-12">
        {/* Utility links row */}
        <div className="flex justify-center gap-8 mb-8 text-sm border-b border-parchment/20 pb-8">
          <Link 
            href="/privacy" 
            className="text-parchment/80 hover:text-gold transition-colors focus-visible-ring rounded px-2 py-1"
          >
            Privacy Policy
          </Link>
          <Link 
            href="/contact" 
            className="text-parchment/80 hover:text-gold transition-colors focus-visible-ring rounded px-2 py-1"
          >
            Contact
          </Link>
        </div>
        
        <Suspense
          fallback={
            <div className="text-center text-parchment-light/60">
              Loading scripture waypoints...
            </div>
          }
        >
          <FooterContent />
        </Suspense>
      </div>
    </footer>
  );
}
