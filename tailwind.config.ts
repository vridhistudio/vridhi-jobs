import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand:   { DEFAULT: '#10B981', dark: '#059669', light: '#34D399', tint: '#ECFDF5', tint2: '#D1FAE5' },
        dark:    { DEFAULT: '#0A0F1E', 2: '#111827', 3: '#1F2937' },
        dg:      '#064E3B',
        surface: { DEFAULT: '#FFFFFF', 2: '#F9FAFB', 3: '#F3F4F6' },
        ink:     { DEFAULT: '#111827', 2: '#374151', 3: '#6B7280', 4: '#9CA3AF' },
        wa:      '#25D366',
      },
      fontFamily: {
        sans:    ['var(--font-inter)',    'Inter',             'sans-serif'],
        display: ['var(--font-jakarta)', 'Plus Jakarta Sans', 'sans-serif'],
      },
      fontSize: {
        'hero': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '800' }],
        'h2':   ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h3':   ['1.375rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '700' }],
      },
      boxShadow: {
        'card':        '0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.03)',
        'card-hover':  '0 20px 40px rgba(16,185,129,0.10), 0 8px 16px rgba(0,0,0,0.04)',
        'deep':        '0 32px 64px rgba(0,0,0,0.07)',
        'glow':        '0 0 0 4px rgba(16,185,129,0.20)',
        'nav':         '0 2px 20px rgba(0,0,0,0.08)',
        'btn':         '0 4px 14px rgba(16,185,129,0.30)',
      },
      borderRadius: {
        'pill': '9999px',
      },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        'fade-up': { '0%': { opacity: '0', transform: 'translateY(16px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
      animation: {
        marquee:  'marquee 24s linear infinite',
        'fade-up': 'fade-up 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};

export default config;
