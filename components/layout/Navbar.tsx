'use client';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
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
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass border-b border-[rgba(255,255,255,0.07)]' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 flex items-center gap-6 py-4">
          <a href="#" className="flex items-center gap-2.5 mr-auto">
            <div className="w-8 h-8 rounded-lg bg-[#10B981] flex items-center justify-center">
              <span className="text-[#080808] font-black text-sm font-serif">V</span>
            </div>
            <span className="font-display font-bold text-base text-[#f0f0f0] tracking-wide">
              Vridhi<span className="text-[#10B981]">.</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="px-4 py-2 rounded-full text-sm font-medium text-[#888] hover:text-[#f0f0f0] hover:bg-[rgba(255,255,255,0.05)] transition-all duration-200">
                {l.label}
              </a>
            ))}
          </nav>

          <a href="https://wa.me/917255961822" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex btn-primary text-sm px-5 py-2.5">
            Book a Call →
          </a>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-full text-[#888] hover:text-[#f0f0f0] hover:bg-[rgba(255,255,255,0.05)] transition-all" aria-label="Toggle menu">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 md:hidden" onClick={() => setOpen(false)}>
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <div className="absolute top-20 left-4 right-4 card p-6 flex flex-col gap-3" onClick={(e) => e.stopPropagation()}>
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-base font-medium text-[#888] hover:text-[#10B981] py-2 border-b border-[rgba(255,255,255,0.05)] last:border-0 transition-colors">
                {l.label}
              </a>
            ))}
            <a href="https://wa.me/917255961822" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="btn-primary text-sm text-center mt-2">
              Book a Call →
            </a>
          </div>
        </div>
      )}
    </>
  );
}
