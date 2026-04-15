import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vridhi Studio — We Build Digital Products That Grow',
  description:
    'Full-stack digital agency specialising in web development, mobile apps, AI automation, and SaaS products. We turn ambitious ideas into market-ready products.',
  keywords: ['web development', 'mobile apps', 'AI automation', 'SaaS', 'digital agency', 'Vridhi Studio'],
  authors: [{ name: 'Vridhi Studio', url: 'https://vridhi.dev' }],
  openGraph: {
    title: 'Vridhi Studio — We Build Digital Products That Grow',
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
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
