'use client';

import { useEffect, useRef } from 'react';

const stats = [
  { value: '50+', label: 'Clients served' },
  { value: '3 days', label: 'Website delivery' },
  { value: '8', label: 'Service verticals' },
  { value: '3', label: 'Countries served' },
];

const showcaseCards = [
  { title: 'MediCare Clinic', cat: 'Website Design', sub: 'Healthcare · Lucknow, UP', color: '#10B981' },
  { title: 'Nakshatra Corp', cat: 'Brand + Registration', sub: 'Legal + Branding · Patna', color: '#F59E0B' },
  { title: 'Janbol Campaign', cat: 'Digital PR', sub: 'Election PR · Bihar', color: '#6366F1' },
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      el.style.setProperty('--mx', `${x}px`);
      el.style.setProperty('--my', `${y}px`);
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-16 overflow-hidden">
      {/* Aurora blobs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)', animation: 'aurora 12s ease-in-out infinite', filter: 'blur(60px)' }} />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)', animation: 'aurora 15s ease-in-out infinite 4s', filter: 'blur(60px)' }} />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-6">
        <div className="tag" style={{ animation: 'fadeUp 0.6s ease-out 0.1s forwards', opacity: 0 }}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
          Full-Stack Digital Agency · Available Worldwide
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold leading-[1.05] tracking-tight" style={{ animation: 'fadeUp 0.7s ease-out 0.2s forwards', opacity: 0 }}>
          <span className="text-[#F8FAFC]">We Build.</span>
          <br />
          <span className="text-[#F8FAFC]">We Register.</span>
          <br />
          <span className="text-gradient-emerald">We Grow.</span>
        </h1>

        <p className="max-w-xl text-lg md:text-xl text-[#94A3B8] leading-relaxed" style={{ animation: 'fadeUp 0.7s ease-out 0.35s forwards', opacity: 0 }}>
          From professional websites to business registrations, ad campaigns to SaaS products —
          Vridhi Studio handles your complete digital journey.
          <span className="text-[#F59E0B]"> Trusted by founders across India, Southeast Asia & beyond.</span>
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4" style={{ animation: 'fadeUp 0.7s ease-out 0.5s forwards', opacity: 0 }}>
          <a href="https://wa.me/917255961822" target="_blank" rel="noopener noreferrer" className="btn-emerald text-base">
            📲 Start a Project →
          </a>
          <a href="#work" className="btn-outline text-base">View Our Work</a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-4" style={{ animation: 'fadeUp 0.7s ease-out 0.65s forwards', opacity: 0 }}>
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl md:text-3xl font-display font-bold text-gradient-emerald">{s.value}</div>
              <div className="text-xs text-[#475569] mt-0.5 uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Showcase cards */}
        <div className="flex flex-wrap justify-center gap-4 mt-6" style={{ animation: 'fadeUp 0.7s ease-out 0.8s forwards', opacity: 0 }}>
          {showcaseCards.map((c) => (
            <div key={c.title} className="glass glass-hover rounded-xl p-4 flex items-center gap-3 cursor-default min-w-[200px]">
              <div className="w-2 h-10 rounded-full flex-shrink-0" style={{ background: c.color }} />
              <div className="text-left">
                <div className="text-sm font-bold text-[#F8FAFC]">{c.title}</div>
                <div className="text-xs font-semibold" style={{ color: c.color }}>{c.cat}</div>
                <div className="text-xs text-[#475569]">{c.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-px h-10 bg-gradient-to-b from-[#10B981] to-transparent animate-pulse" />
        <span className="text-[10px] uppercase tracking-widest text-[#475569]">scroll</span>
      </div>
    </section>
  );
}
