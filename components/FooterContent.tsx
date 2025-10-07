import { getScriptureWaypoints } from '@/lib/content';
import ScriptureCarousel from './ScriptureCarousel';

export default async function FooterContent() {
  const scriptureWaypoints = await getScriptureWaypoints();

  return (
    <>
      {/* Scripture Waypoints Carousel */}
      <div className="mb-8">
        <h2 className="text-xl font-playfair text-gold mb-6 text-center">
          Scripture Waypoints
        </h2>
        <ScriptureCarousel waypoints={scriptureWaypoints} />
      </div>

      {/* Copyright */}
      <div className="border-t border-forest-light pt-8 text-center text-sm font-lato text-parchment-light/80">
        <p>
          © {new Date().getFullYear()} Senior Schools Network. Promoting
          schools aligned with poetic knowledge and Catholic formation.
        </p>
      </div>
    </>
  );
}
