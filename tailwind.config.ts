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
        },
        forest: {
          DEFAULT: '#3B5A3E',
          dark: '#2A4129',
        },
        gold: {
          DEFAULT: '#CDAF6F',
          light: '#E5D4A6',
        },
        nursery: '#A8C4D4',
        gymnasium: '#7A5C3E',
        poetic: '#8B4C4C',
        spiritual: '#B8A8C4',
        charcoal: '#4A4A4A',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        merriweather: ['var(--font-merriweather)', 'serif'],
        lato: ['var(--font-lato)', 'sans-serif'],
      },
      borderRadius: {
        organic: '8px',
        'organic-lg': '12px',
      },
    },
  },
  plugins: [],
};

export default config;
