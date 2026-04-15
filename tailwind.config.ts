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
        bg: {
          DEFAULT: '#050A14',
          secondary: '#0A1628',
          card: '#0D1B2E',
        },
        emerald: {
          DEFAULT: '#10B981',
          light: '#34D399',
          dark: '#059669',
          glow: 'rgba(16,185,129,0.15)',
        },
        amber: {
          DEFAULT: '#F59E0B',
          light: '#FCD34D',
          dark: '#D97706',
          glow: 'rgba(245,158,11,0.15)',
        },
        text: {
          primary: '#F8FAFC',
          secondary: '#94A3B8',
          muted: '#475569',
        },
        glass: {
          DEFAULT: 'rgba(255,255,255,0.03)',
          border: 'rgba(255,255,255,0.07)',
          hover: 'rgba(255,255,255,0.06)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        display: ['var(--font-syne)', 'Syne', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
      animation: {
        aurora: 'aurora 12s ease-in-out infinite',
        'aurora-delay': 'aurora 15s ease-in-out infinite 4s',
        'aurora-slow': 'aurora 18s ease-in-out infinite 8s',
        'marquee-left': 'marquee-left 30s linear infinite',
        'marquee-right': 'marquee-right 35s linear infinite',
        float: 'float 4s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        aurora: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.35' },
          '33%': { transform: 'translate(40px, -60px) scale(1.15)', opacity: '0.55' },
          '66%': { transform: 'translate(-30px, 30px) scale(0.9)', opacity: '0.25' },
        },
        'marquee-left': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'marquee-right': {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(16,185,129,0.3), 0 0 40px rgba(16,185,129,0.1)' },
          '50%': { boxShadow: '0 0 40px rgba(16,185,129,0.5), 0 0 80px rgba(16,185,129,0.2)' },
        },
      },
      backgroundImage: {
        'gradient-emerald': 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
        'gradient-amber': 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
        'gradient-hero': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(16,185,129,0.15) 0%, transparent 60%)',
        'gradient-card': 'linear-gradient(135deg, rgba(16,185,129,0.05) 0%, rgba(245,158,11,0.05) 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
