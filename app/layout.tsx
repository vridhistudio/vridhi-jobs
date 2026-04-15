import type { Metadata, Viewport } from 'next';
import { Inter, Syne, Playfair_Display } from 'next/font/google';
import './globals.css';
import SmoothScroll from './providers/SmoothScroll';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Postly — LinkedIn AI Post Writer',
  description:
    'Write viral LinkedIn posts in seconds with AI. Built-in hook templates, tone presets, and a scheduler — right inside your browser. Free Chrome extension.',
  keywords: ['linkedin post writer', 'ai linkedin', 'linkedin growth', 'chrome extension', 'Postly'],
  authors: [{ name: 'Vridhi Studio', url: 'https://vridhi.dev' }],
  openGraph: {
    title: 'Postly — LinkedIn AI Post Writer',
    description: 'Write viral LinkedIn posts in seconds with AI. Free Chrome extension.',
    url: 'https://postly.vridhi.dev',
    siteName: 'Postly',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Postly — LinkedIn AI Post Writer',
    description: 'Write viral LinkedIn posts in seconds. Free Chrome extension by Vridhi Studio.',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#6366F1',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
