import type { Config } from 'tailwindcss';

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
        nursery: {
          DEFAULT: '#A8C4D4',
          light: '#C5DBE6',
          dark: '#8AACBE',
        },
        gymnasium: {
          DEFAULT: '#7A5C3E',
          light: '#9A7B5D',
          dark: '#5A4029',
        },
        poetic: {
          DEFAULT: '#8B4C4C',
          light: '#A56B6B',
          dark: '#6B3232',
        },
        spiritual: {
          DEFAULT: '#B8A8C4',
          light: '#D0C5D9',
          dark: '#9B8AAF',
        },
        charcoal: '#4A4A4A',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        merriweather: ['var(--font-merriweather)', 'serif'],
        lato: ['var(--font-lato)', 'sans-serif'],
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
