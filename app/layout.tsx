import type { Metadata, Viewport } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Vridhi Jobs — Find Jobs in Lucknow, Kanpur & UP',
  description:
    'Find office, WFH, part-time and fresher jobs in Lucknow, Kanpur, Noida and across Uttar Pradesh. Placement services by Anita Srivastava. Free for job seekers.',
  keywords: ['jobs in lucknow', 'jobs in kanpur', 'placement services lucknow', 'work from home jobs UP', 'fresher jobs lucknow', 'Vridhi Jobs'],
  authors: [{ name: 'Vridhi Studio', url: 'https://vridhi.dev' }],
  openGraph: {
    title: 'Vridhi Jobs — Placement Services in Lucknow & UP',
    description: 'Free placement service for job seekers in Lucknow, Kanpur, Noida and UP. Office, WFH & fresher roles.',
    url: 'https://jobs.vridhi.dev',
    siteName: 'Vridhi Jobs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vridhi Jobs — Find Jobs in UP',
    description: 'Free placement service. Lucknow, Kanpur, Noida & UP. Apply via WhatsApp.',
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
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
