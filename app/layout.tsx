import type { Metadata, Viewport } from 'next';
import { Inter, Syne, Playfair_Display } from 'next/font/google';
import './globals.css';

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
  title: 'Vridhi Studio — We Build. We Register. We Grow.',
  description:
    'Full-stack digital agency. Websites, apps, business registration, ad campaigns & SaaS products — built for ambitious founders worldwide.',
  keywords: ['web development', 'mobile apps', 'AI automation', 'SaaS', 'digital agency', 'Vridhi Studio'],
  authors: [{ name: 'Vridhi Studio', url: 'https://vridhi.dev' }],
  openGraph: {
    title: 'Vridhi Studio — We Build. We Register. We Grow.',
    description: 'Full-stack digital agency. Web, mobile, AI & SaaS.',
    url: 'https://vridhi.dev',
    siteName: 'Vridhi Studio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vridhi Studio',
    description: 'We build digital products that grow.',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#10B981',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} ${playfair.variable} scroll-smooth`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
