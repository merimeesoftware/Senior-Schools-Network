'use client';

import Link from 'next/link';
import { useState } from 'react';
import OptimizedImage from '../media/OptimizedImage';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/philosophy', label: 'Philosophy' },
    { href: '/network-directory', label: 'Schools & Programs' },
    { href: '/engage', label: 'Engage' },
  ];

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
          <Link href="/" className="flex items-center gap-5 focus-visible-ring rounded">
            <OptimizedImage
              assetId="ssn-logo"
              imageClassName="h-[18vh] w-auto"
              alt="The Senior School Network"
            />
            <span className="font-accent text-xl text-parchment-light hidden sm:inline">
              The Senior School Network
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-lato text-parchment hover:text-gold hover:bg-forest-dark transition-colors px-4 py-2 rounded-md text-lg focus-visible-ring"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-parchment hover:text-gold focus-visible-ring p-2 rounded"
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
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-lato text-parchment hover:text-gold hover:bg-forest block px-3 py-2 rounded-md text-base transition-colors focus-visible-ring"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
