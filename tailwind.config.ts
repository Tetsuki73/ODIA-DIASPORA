import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F9F1E7',
        parchment: '#FAF4EC',
        espresso: '#2B1810',
        muted: '#5A4636',
        orange: '#C65A1A',
        orangeDark: '#A94A12',
        orangeTint: '#F3E3D3',
        borderLight: '#E8D5C0',
      },
      boxShadow: {
        soft: '0 12px 30px rgba(43, 24, 16, 0.08)',
      },
      fontFamily: {
        heading: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      screens: {
        xs: '360px',
      },
    },
  },
  plugins: [],
};

export default config;
