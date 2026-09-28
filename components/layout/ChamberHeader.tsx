import { ReactNode } from 'react';
import ContentContainer from './ContentContainer';

interface ChamberHeaderProps {
  /** Locked room name (IDENTITY.md rooms) or a text's own title. */
  title: string;
  /** Muted line(s) under the place-name — author, description. */
  meta?: ReactNode;
  /** Gold ✦ ornament above the place-name. */
  decorated?: boolean;
}

/**
 * Arrival plate for rooms off the header (Texts, Contact, Privacy).
 * The absolute Navigation gradient overlays the top ~24vh of every page,
 * so the place-name clears it with pt-[28vh] and sits on clean parchment:
 * type as architecture, no imagery.
 */
export default function ChamberHeader({
  title,
  meta,
  decorated = true,
}: Readonly<ChamberHeaderProps>) {
  return (
    <header className="bg-parchment parchment-texture border-b border-charcoal/10">
      <ContentContainer
        width="narrow"
        padding="none"
        className="pt-[28vh] pb-12 text-center"
      >
        {decorated && (
          <span aria-hidden="true" className="block text-gold text-lg mb-6">
            ✦
          </span>
        )}
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-forest">
          {title}
        </h1>
        {meta && (
          <div className="mt-6 max-w-2xl mx-auto text-lg text-charcoal/60 leading-relaxed">
            {meta}
          </div>
        )}
      </ContentContainer>
    </header>
  );
}
