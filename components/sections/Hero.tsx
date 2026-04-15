'use client';

import { useEffect, useRef } from 'react';

const stats = [
  { value: '15+', label: 'Projects delivered' },
  { value: '3', label: 'Countries served' },
  { value: '100%', label: 'Client retention' },
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const { innerWidth: w, innerHeight: h } = window;
      const x = (e.clientX / w - 0.5) * 20;
      const y = (e.clientY / h - 0.5) * 20;
      el.style.setProperty('--mx', `${x}px`);
      el.style.setProperty('--my', `${y}px`);
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-16 overflow-hidden"
    >
      {/* Aurora blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)',
          animation: 'aurora 12s ease-in-out infinite',
          transform: 'translate(var(--mx, 0), var(--my, 0))',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)',
          animation: 'aurora 15s ease-in-out infinite 4s',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-6">
        {/* Badge */}
        <div className="tag animate-fade-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
          Available for new projects
        </div>

        {/* Headline */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold leading-[1.05] tracking-tight opacity-0"
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards', animation: 'fadeUp 0.7s ease-out 0.2s forwards' }}
        >
          <span className="text-[#F8FAFC]">We build products</span>
          <br />
          <span className="text-gradient-emerald">that grow</span>
        </h1>

        {/* Sub */}
        <p
          className="max-w-xl text-lg md:text-xl text-[#94A3B8] leading-relaxed opacity-0"
          style={{ animation: 'fadeUp 0.7s ease-out 0.35s forwards' }}
        >
          Vridhi Studio is a full-stack digital agency crafting web apps, mobile products,
          AI automation systems, and SaaS platforms for founders who ship.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap items-center justify-center gap-4 opacity-0"
          style={{ animation: 'fadeUp 0.7s ease-out 0.5s forwards' }}
        >
          <a href="#contact" className="btn-emerald text-base">
            Start a project →
          </a>
          <a href="#work" className="btn-outline text-base">
            See our work
          </a>
        </div>

        {/* Stats */}
        <div
          className="mt-8 flex flex-wrap justify-center gap-8 opacity-0"
          style={{ animation: 'fadeUp 0.7s ease-out 0.65s forwards' }}
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-display font-bold text-gradient-emerald">{s.value}</div>
              <div className="text-xs text-[#475569] mt-0.5 uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-px h-10 bg-gradient-to-b from-[#10B981] to-transparent animate-pulse" />
        <span className="text-[10px] uppercase tracking-widest text-[#475569]">scroll</span>
      </div>
    </section>
  );
}
