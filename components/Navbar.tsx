'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/jobs',    label: 'Browse Jobs'  },
  { href: '/hire',    label: 'Post a Job'   },
  { href: '/about',   label: 'About'        },
  { href: '/contact', label: 'Contact'      },
];

export default function Navbar() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-white transition-all duration-300 ${scrolled ? 'shadow-nav' : ''}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-[72px] flex items-center justify-between gap-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="w-9 h-9 rounded-xl bg-brand flex items-center justify-center shadow-btn">
            <span className="text-white font-display font-extrabold text-base">V</span>
          </div>
          <span className="font-display font-extrabold text-[#111827] text-xl leading-none tracking-tight">
            Vridhi <span className="text-brand">Jobs</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href}
              className={`px-4 py-2 rounded-full text-[14px] font-medium transition-all duration-150 ${
                path === href
                  ? 'bg-brand-tint text-brand font-semibold'
                  : 'text-ink-3 hover:text-ink hover:bg-surface-3'
              }`}>
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-2 shrink-0">
          <Link href="/apply"
            className="px-5 py-2.5 text-[14px] font-semibold text-brand border-2 border-brand/30 rounded-full hover:border-brand hover:bg-brand-tint transition-all duration-200">
            I&rsquo;m Hiring
          </Link>
          <Link href="/hire"
            className="px-5 py-2.5 text-[14px] font-semibold text-white bg-brand rounded-full shadow-btn hover:bg-brand-dark hover:shadow-glow transition-all duration-200">
            Find Talent
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-xl text-ink-3 hover:bg-surface-3 transition-colors"
          aria-label="Menu">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-t border-surface-3 px-4 py-4 space-y-1">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}
              className={`block px-4 py-3 rounded-xl text-[15px] font-medium transition-colors ${
                path === href ? 'bg-brand-tint text-brand font-semibold' : 'text-ink-2 hover:bg-surface-3'
              }`}>
              {label}
            </Link>
          ))}
          <div className="flex gap-2 pt-3">
            <Link href="/apply" onClick={() => setOpen(false)}
              className="flex-1 text-center py-3 text-[14px] font-semibold text-brand border-2 border-brand/30 rounded-full">
              Find Work
            </Link>
            <Link href="/hire" onClick={() => setOpen(false)}
              className="flex-1 text-center py-3 text-[14px] font-semibold text-white bg-brand rounded-full">
              Post Job
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
