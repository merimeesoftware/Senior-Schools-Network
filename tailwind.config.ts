import type { Config } from 'tailwindcss';

/**
 * Mode colors. Authority for names is PRODUCT.md, not these hexes.
 * musical aliases the former nursery hex; gymnastic aliases the former gymnasium hex.
 * romantic: deeper wine than poetic rose `#8B4C4C`, warm enough to sit with gold `#CDAF6F`.
 * virtuous: sage beside forest `#3B5A3E` (city / household), distinct from musical blue.
 * `spiritual` stays as liturgical chrome only — not a mode.
 */
const musical = {
  DEFAULT: '#A8C4D4',
  light: '#C5DBE6',
  dark: '#8AACBE',
};

const gymnastic = {
  DEFAULT: '#7A5C3E',
  light: '#9A7B5D',
  dark: '#5A4029',
};

const romantic = {
  DEFAULT: '#7C3F4E',
  light: '#A86B78',
  dark: '#5C2C38',
};

const virtuous = {
  DEFAULT: '#3E5C48',
  light: '#6B8A74',
  dark: '#2C4334',
};

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Enclosed Garden palette inspired by visual site plan
        parchment: {
          DEFAULT: '#F5F1E9',
          light: '#FDFDFD',
          dark: '#E8E2D5',
        },
        forest: {
          DEFAULT: '#3B5A3E',
          dark: '#2A4129',
          light: '#4A6B4D',
        },
        gold: {
          DEFAULT: '#CDAF6F',
          light: '#E5D4A6',
          dark: '#B89A5A',
        },
        musical,
        gymnastic,
        poetic: {
          DEFAULT: '#8B4C4C',
          light: '#A56B6B',
          dark: '#6B3232',
        },
        romantic,
        virtuous,
        // Legacy color aliases (not mode names). nursery/gymnasium match the new tokens.
        // spiritual remains lavender for liturgical chrome already in the CSS.
        nursery: musical,
        gymnasium: gymnastic,
        spiritual: {
          DEFAULT: '#B8A8C4',
          light: '#D0C5D9',
          dark: '#9B8AAF',
        },
        charcoal: '#4A4A4A',
      },
      fontFamily: {
        // New semantic font names
        body: ['var(--font-body)', 'Georgia', 'serif'],
        heading: ['var(--font-heading)', 'Georgia', 'serif'],
        accent: ['var(--font-accent)', 'cursive'],
        // Legacy aliases — map old names to new fonts for backward compat
        playfair: ['var(--font-heading)', 'Georgia', 'serif'],
        merriweather: ['var(--font-body)', 'Georgia', 'serif'],
        lato: ['var(--font-heading)', 'Georgia', 'serif'],
      },
      fontSize: {
        hero: ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        display: ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading-1': ['2rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'heading-2': ['1.5rem', { lineHeight: '1.4' }],
        'heading-3': ['1.25rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        body: ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
      },
      spacing: {
        section: '5rem',
        'section-sm': '3rem',
      },
      borderRadius: {
        organic: '8px',
        'organic-lg': '12px',
        'organic-xl': '16px',
      },
      boxShadow: {
        organic: '0 4px 6px rgba(0, 0, 0, 0.1)',
        'organic-md': '0 6px 12px rgba(0, 0, 0, 0.12)',
        'organic-lg': '0 10px 20px rgba(0, 0, 0, 0.15)',
        'organic-inner': 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
      },
      maxWidth: {
        content: '65ch',
        prose: '75ch',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'gradient-radial-top': 'radial-gradient(ellipse at top, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
