'use client';
import { useEffect, useState, useRef } from 'react';

interface Section {
  id: string;
  label: string;
  number: string;
}

interface ProgressIndicatorProps {
  sections: Section[];
  position?: 'sticky-top' | 'sticky-side';
  className?: string;
  hideUntilId?: string; // ID of element - hide indicator until this element is visible
}

export default function ProgressIndicator({
  sections,
  position = 'sticky-top',
  className = '',
  hideUntilId,
}: Readonly<ProgressIndicatorProps>) {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || '');
  const [isVisible, setIsVisible] = useState(!hideUntilId); // Start visible if no hideUntilId
  const observerRef = useRef<IntersectionObserver | null>(null);
  const visibilityObserverRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Observer for tracking active section
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: [0, 0.3, 0.6, 1],
        rootMargin: '-100px 0px -50% 0px',
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    // Observer for visibility control
    if (hideUntilId) {
      visibilityObserverRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setIsVisible(entry.isIntersecting || entry.boundingClientRect.top < 0);
          });
        },
        {
          threshold: 0,
          rootMargin: '0px',
        }
      );

      const hideUntilElement = document.getElementById(hideUntilId);
      if (hideUntilElement && visibilityObserverRef.current) {
        visibilityObserverRef.current.observe(hideUntilElement);
      }
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (visibilityObserverRef.current) {
        visibilityObserverRef.current.disconnect();
      }
    };
  }, [sections, hideUntilId]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (position === 'sticky-side') {
    return (
      <nav
        className={`hidden lg:block fixed left-8 top-1/3 z-30 transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } ${className}`}
        aria-label="Argument progress"
      >
        <ul className="space-y-4">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={`
                  flex items-center gap-3 p-2 rounded-lg transition-all
                  ${
                    activeSection === section.id
                      ? 'bg-gold/20 text-forest font-semibold'
                      : 'text-charcoal/60 hover:text-forest hover:bg-gold/10'
                  }
                `}
                aria-current={activeSection === section.id ? 'location' : undefined}
              >
                <span className="text-2xl font-playfair">{section.number}</span>
                <span className="text-sm font-lato">{section.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  return (
    <nav
      className={`sticky top-20 left-0 right-0 z-30 bg-parchment/95 backdrop-blur-sm border-b border-forest/20 ${className}`}
      aria-label="Argument progress"
    >
      <div className="max-w-7xl mx-auto px-6">
        <ul className="flex justify-center gap-2 md:gap-6 py-3">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={`
                  px-4 md:px-6 py-2 text-sm font-lato transition-all
                  ${
                    activeSection === section.id
                      ? 'text-forest font-semibold border-b-4 border-gold'
                      : 'text-charcoal/60 hover:text-forest'
                  }
                `}
                aria-current={activeSection === section.id ? 'location' : undefined}
              >
                <span className="md:hidden text-lg font-playfair">{section.number}</span>
                <span className="hidden md:inline">
                  <span className="font-playfair mr-2">{section.number}</span>
                  {section.label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
