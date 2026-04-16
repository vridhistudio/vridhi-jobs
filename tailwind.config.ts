import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary:  { DEFAULT: '#10B981', light: '#34D399', dark: '#059669', bg: '#ECFDF5' },
        amber:    { DEFAULT: '#F59E0B', light: '#FCD34D', bg: '#FFFBEB' },
        surface:  '#FFFFFF',
        pagebg:   '#F8FAFC',
        border:   '#E5E7EB',
        muted:    '#6B7280',
        dark:     '#111827',
      },
      fontFamily: {
        sans:    ['var(--font-inter)', 'Inter', 'sans-serif'],
        display: ['var(--font-jakarta)', 'Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
