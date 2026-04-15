'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${
          scrolled ? 'pt-3' : 'pt-5'
        }`}
      >
        <nav
          className={`flex items-center gap-2 rounded-full px-4 py-2.5 transition-all duration-300 ${
            scrolled
              ? 'glass shadow-lg shadow-black/30 w-auto max-w-2xl'
              : 'bg-transparent w-full max-w-6xl mx-6'
          }`}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 mr-4 flex-shrink-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-emerald flex items-center justify-center shadow-lg shadow-emerald-glow">
              <span className="text-[#050A14] font-bold text-sm font-display">V</span>
            </div>
            <span className="font-display font-bold text-base text-[#F8FAFC] tracking-wide">
              Vridhi
              <span className="text-[#10B981]">.</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1 flex-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-1.5 rounded-full text-sm font-medium text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/5 transition-all duration-200"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block ml-auto">
            <a href="#contact" className="btn-emerald text-sm px-5 py-2">
              Start a project →
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden ml-auto p-2 rounded-full text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/5 transition-all"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setOpen(false)}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className="absolute top-20 left-4 right-4 glass rounded-2xl p-6 flex flex-col gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-[#94A3B8] hover:text-[#10B981] py-2 border-b border-white/5 last:border-0 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-emerald text-sm text-center mt-2"
            >
              Start a project →
            </a>
          </div>
        </div>
      )}
    </>
  );
}
