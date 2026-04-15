import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg:      { DEFAULT: '#080808', alt: '#0f0f0f' },
        surface: { DEFAULT: '#141414', hover: '#1e1e1e' },
        accent:  { DEFAULT: '#10B981', light: '#34D399', dark: '#059669' },
        amber:   { DEFAULT: '#F59E0B', light: '#FCD34D' },
        text:    { DEFAULT: '#f0f0f0', muted: '#888888', faint: '#555555' },
        border:  { DEFAULT: 'rgba(255,255,255,0.07)', hover: 'rgba(255,255,255,0.14)' },
      },
      fontFamily: {
        sans:     ['var(--font-inter)', 'Inter', 'sans-serif'],
        display:  ['var(--font-syne)', 'Syne', 'sans-serif'],
        serif:    ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
      },
      borderRadius: {
        card: '20px',
        pill: '9999px',
      },
      animation: {
        'marquee-left': 'marquee-left 30s linear infinite',
        aurora:         'aurora 12s ease-in-out infinite',
        'aurora-slow':  'aurora 18s ease-in-out infinite 6s',
      },
    },
  },
  plugins: [],
};

export default config;
