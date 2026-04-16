'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: '/jobs', label: 'Find Jobs' },
    { href: '/hire', label: 'Post a Job' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E5E7EB] shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#10B981] flex items-center justify-center">
            <span className="text-white font-bold text-sm font-display">V</span>
          </div>
          <span className="font-display font-bold text-[#111827] text-lg leading-none">
            Vridhi <span className="text-[#10B981]">Jobs</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                path === href
                  ? 'text-[#10B981] bg-[#ECFDF5]'
                  : 'text-[#6B7280] hover:text-[#111827] hover:bg-[#F3F4F6]'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/apply"
            className="px-4 py-2 text-sm font-semibold text-[#10B981] border border-[#10B981] rounded-lg hover:bg-[#ECFDF5] transition-colors"
          >
            I&rsquo;m Looking for Work
          </Link>
          <Link
            href="/hire"
            className="px-4 py-2 text-sm font-semibold text-white bg-[#10B981] rounded-lg hover:bg-[#059669] transition-colors"
          >
            Hire Candidates
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-[#6B7280]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#E5E7EB] px-4 py-4 flex flex-col gap-2">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-lg text-sm font-medium text-[#374151] hover:bg-[#F3F4F6]"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/apply"
            onClick={() => setOpen(false)}
            className="mt-2 px-4 py-3 text-sm font-semibold text-center text-white bg-[#10B981] rounded-lg"
          >
            I&rsquo;m Looking for Work
          </Link>
        </div>
      )}
    </header>
  );
}
