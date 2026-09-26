'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import OptimizedImage from '../media/OptimizedImage';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/philosophy', label: 'Philosophy' },
  { href: '/network-directory', label: 'Schools & Programs' },
  { href: '/engage', label: 'Engage' },
];

function isNavItemActive(pathname: string, href: string): boolean {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

function navLinkClass(active: boolean, mobile: boolean): string {
  return [
    'font-lato inline-flex items-center min-h-11 whitespace-nowrap rounded-md transition-colors focus-visible-ring',
    mobile ? 'w-full px-3 text-base' : 'px-4 text-lg',
    active
      ? 'text-gold underline decoration-gold decoration-2 underline-offset-4'
      : 'text-parchment hover:text-gold hover:bg-forest-dark',
  ].join(' ');
}

export default function Navigation() {
  const pathname = usePathname() ?? '';
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className="text-parchment-light absolute top-0 left-0 right-0 z-50"
      role="navigation"
      aria-label="Main navigation"
      style={{
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0) 100%)',
        paddingBottom: '2vh',
      }}
    >
      <div className="section-container">
        <div className="flex justify-between h-[22vh] items-center mx-auto">
          <Link href="/" className="flex shrink-0 items-center gap-5 min-h-11 focus-visible-ring rounded">
            <OptimizedImage
              assetId="ssn-logo"
              imageClassName="h-[18vh] w-auto"
              alt="The Senior School Network"
            />
            <span className="font-accent text-xl text-parchment-light hidden lg:inline">
              The Senior School Network
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex shrink-0 items-center space-x-1">
            {navItems.map((item) => {
              const active = isNavItemActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={navLinkClass(active, false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center min-h-11 min-w-11 text-parchment hover:text-gold focus-visible-ring rounded"
              aria-label={
                isOpen ? 'Close navigation menu' : 'Open navigation menu'
              }
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-forest-dark shadow-organic-inner"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => {
              const active = isNavItemActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={navLinkClass(active, true)}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
