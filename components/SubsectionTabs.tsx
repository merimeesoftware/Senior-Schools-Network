'use client';

import { useState, useRef } from 'react';

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface SubsectionTabsProps {
  tabs: Tab[];
  variant: 'crisis' | 'restoration' | 'vision';
  className?: string;
}

/**
 * SubsectionTabs Component
 * 
 * Converts vertical A/B/C subsection stacks into horizontal tab interfaces,
 * dramatically reducing page height while maintaining all content accessibility.
 * 
 * Features:
 * - Color-coded by section variant (crisis=red, restoration=green, vision=gold)
 * - Keyboard navigation (arrows, Home, End)
 * - ARIA compliant for screen readers
 * - Smooth fade-in transitions
 * - Mobile responsive
 * 
 * @example
 * ```tsx
 * <SubsectionTabs
 *   variant="crisis"
 *   tabs={[
 *     { id: 'a', label: 'Loss of Wonder', content: <CrisisSubsectionA /> },
 *     { id: 'b', label: 'Gymnasium Crisis', content: <CrisisSubsectionB /> },
 *     { id: 'c', label: 'Specialization', content: <CrisisSubsectionC /> }
 *   ]}
 * />
 * ```
 */
export default function SubsectionTabs({
  tabs,
  variant,
  className = '',
}: Readonly<SubsectionTabsProps>) {
  const [activeTab, setActiveTab] = useState(0);
  const tabListRef = useRef<HTMLDivElement>(null);

  // Variant-specific styling
  const variantStyles = {
    crisis: {
      activeBg: 'bg-red-100',
      activeText: 'text-red-900',
      activeBorder: 'border-red-700',
      inactiveText: 'text-red-700',
      hoverBg: 'hover:bg-red-50',
      panelBorder: 'border-red-700',
    },
    restoration: {
      activeBg: 'bg-green-100',
      activeText: 'text-green-900',
      activeBorder: 'border-green-700',
      inactiveText: 'text-green-700',
      hoverBg: 'hover:bg-green-50',
      panelBorder: 'border-green-700',
    },
    vision: {
      activeBg: 'bg-gold/20',
      activeText: 'text-gold-dark',
      activeBorder: 'border-gold',
      inactiveText: 'text-gold-dark',
      hoverBg: 'hover:bg-gold/10',
      panelBorder: 'border-gold',
    },
  };

  const styles = variantStyles[variant];

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let newIndex: number | null = null;

    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        newIndex = index > 0 ? index - 1 : tabs.length - 1;
        break;
      case 'ArrowRight':
        e.preventDefault();
        newIndex = index < tabs.length - 1 ? index + 1 : 0;
        break;
      case 'Home':
        e.preventDefault();
        newIndex = 0;
        break;
      case 'End':
        e.preventDefault();
        newIndex = tabs.length - 1;
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        setActiveTab(index);
        return;
      default:
        return;
    }

    // Focus the new tab
    if (newIndex !== null) {
      const tabButtons = tabListRef.current?.querySelectorAll('button');
      tabButtons?.[newIndex]?.focus();
    }
  };

  // Letter prefixes for tabs
  const getLetterPrefix = (index: number): string => {
    return String.fromCharCode(65 + index); // A, B, C, D...
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Tab List */}
      <div
        ref={tabListRef}
        role="tablist"
        aria-label="Subsection navigation"
        className="flex flex-wrap gap-3 mb-8 pb-4 border-b-2 border-charcoal/20"
      >
        {tabs.map((tab, index) => {
          const isActive = activeTab === index;
          const letter = getLetterPrefix(index);

          return (
            <button
              key={tab.id}
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveTab(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={`
                px-5 py-4 rounded-lg font-lato font-semibold text-base
                transition-all duration-200
                border-2 shadow-sm
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-forest/50
                ${
                  isActive
                    ? `${styles.activeBg} ${styles.activeText} ${styles.activeBorder} shadow-md`
                    : `${styles.inactiveText} ${styles.hoverBg} border-charcoal/20 hover:border-charcoal/40 hover:shadow-md`
                }
              `}
            >
              <span className="font-playfair text-xl font-bold mr-2">{letter}.</span>
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Panels */}
      {tabs.map((tab, index) => {
        const isActive = activeTab === index;

        return (
          <div
            key={tab.id}
            role="tabpanel"
            id={`panel-${tab.id}`}
            aria-labelledby={`tab-${tab.id}`}
            hidden={!isActive}
            className={`
              ${isActive ? 'animate-fadeIn' : ''}
            `}
          >
            {tab.content}
          </div>
        );
      })}
    </div>
  );
}
