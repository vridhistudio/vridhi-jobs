'use client';

import { useEffect, useRef } from 'react';

const stats = [
  { value: '50+', label: 'Clients Worldwide' },
  { value: '3 days', label: 'Avg. Delivery' },
  { value: '8', label: 'Service Verticals' },
  { value: '3', label: 'Countries Active' },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('[data-reveal]');
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      }),
      { threshold: 0.1 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col justify-center px-6 pt-36 pb-24 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 65%)', filter: 'blur(80px)' }} />
      <div className="absolute bottom-10 left-0 w-[600px] h-[500px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 70%)', filter: 'blur(100px)' }} />

      <div className="relative z-10 max-w-6xl mx-auto w-full">

        {/* Label */}
        <div data-reveal className="mb-8">
          <span className="section-label">Full-Stack Digital Agency · Available Worldwide</span>
        </div>

        {/* Headline — editorial scale */}
        <h1 data-reveal data-delay="1" className="font-serif font-black leading-[0.97] tracking-tight mb-8"
          style={{ fontSize: 'clamp(3.5rem, 9.5vw, 7rem)' }}>
          We Build.<br />
          We <em className="not-italic" style={{ color: '#10B981' }}>Register.</em><br />
          We Grow.
        </h1>

        {/* Sub */}
        <p data-reveal data-delay="2" className="text-lg text-[#666] leading-relaxed max-w-lg mb-12">
          Websites, apps, business registrations, ad campaigns, SaaS —
          Vridhi Studio handles your complete digital journey.{' '}
          <span style={{ color: '#F59E0B' }}>Trusted by founders across India, Southeast Asia & beyond.</span>
        </p>

        {/* CTAs */}
        <div data-reveal data-delay="3" className="flex flex-wrap gap-4 mb-24">
          <a href="https://wa.me/917255961822" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Start a Project →
          </a>
          <a href="#work" className="btn-ghost">View Our Work</a>
        </div>

        {/* Stats strip — borderless, background-shift separation */}
        <div data-reveal data-delay="4" className="grid grid-cols-2 md:grid-cols-4 rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.06)]">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`bg-[#0d0d0d] px-8 py-8 ${i < stats.length - 1 ? 'border-r border-[rgba(255,255,255,0.06)]' : ''}`}
            >
              <div className="font-serif text-[2.6rem] font-black text-[#f0f0f0] leading-none mb-2">{s.value}</div>
              <div className="text-xs text-[#444] uppercase tracking-[0.14em]">{s.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
