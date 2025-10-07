import { Suspense } from 'react';
import FooterContent from './FooterContent';

export default function Footer() {
  return (
    <footer
      className="bg-forest text-parchment mt-auto border-t-4 border-gold"
      role="contentinfo"
    >
      <div className="section-container py-12">
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
