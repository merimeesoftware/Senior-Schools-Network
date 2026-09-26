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
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 mb-8 text-sm border-b border-parchment/20 pb-8">
          <Link
            href="/privacy"
            className="inline-flex items-center justify-center min-h-11 min-w-11 px-3 text-parchment/80 hover:text-gold transition-colors focus-visible-ring rounded"
          >
            Privacy Policy
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center min-h-11 min-w-11 px-3 text-parchment/80 hover:text-gold transition-colors focus-visible-ring rounded"
          >
            Contact
          </Link>
          <a
            href="https://github.com/merimeesoftware/Senior-Schools-Network"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center min-h-11 min-w-11 px-3 text-parchment/80 hover:text-gold transition-colors focus-visible-ring rounded"
          >
            GitHub
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
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
