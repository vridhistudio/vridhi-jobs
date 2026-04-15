'use client';

import { useEffect, useRef } from 'react';

const stats = [
  { value: '50+', label: 'Clients Served' },
  { value: '3 days', label: 'Website Delivery' },
  { value: '8', label: 'Service Verticals' },
  { value: '3', label: 'Countries Served' },
];

const cards = [
  { title: 'MediCare Clinic', cat: 'Website Design', sub: 'Healthcare · Lucknow, UP', accent: '#10B981' },
  { title: 'Nakshatra Corp', cat: 'Brand + Registration', sub: 'Legal + Branding · Patna', accent: '#F59E0B' },
  { title: 'Janbol Campaign', cat: 'Digital PR', sub: 'Election PR · Bihar', accent: '#6366F1' },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('[data-reveal]');
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col justify-center px-6 pt-32 pb-20 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.09) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)', filter: 'blur(80px)' }} />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Label */}
        <div data-reveal className="mb-6">
          <span className="section-label">Full-Stack Digital Agency · Available Worldwide</span>
        </div>

        {/* Headline */}
        <h1 data-reveal data-delay="1" className="font-serif text-[clamp(3rem,8vw,6rem)] font-black leading-[1.02] tracking-tight mb-6 max-w-4xl">
          We Build.<br />
          We <em className="italic text-accent-DEFAULT not-italic" style={{ color: '#10B981' }}>Register.</em><br />
          We Grow.
        </h1>

        {/* Sub */}
        <p data-reveal data-delay="2" className="text-lg text-[#888] leading-relaxed max-w-xl mb-10">
          From professional websites to business registrations, ad campaigns to SaaS products —
          Vridhi Studio handles your complete digital journey.{' '}
          <span className="text-[#F59E0B]">Trusted by founders across India, Southeast Asia & beyond.</span>
        </p>

        {/* CTAs */}
        <div data-reveal data-delay="3" className="flex flex-wrap gap-4 mb-16">
          <a href="https://wa.me/917255961822" target="_blank" rel="noopener noreferrer" className="btn-primary">
            📲 Start a Project →
          </a>
          <a href="#work" className="btn-ghost">View Our Work</a>
        </div>

        {/* Showcase cards */}
        <div data-reveal data-delay="2" className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">
          {cards.map((c) => (
            <div key={c.title} className="card p-5 flex items-center gap-4 cursor-default">
              <div className="w-1 h-12 rounded-full flex-shrink-0" style={{ background: c.accent }} />
              <div>
                <div className="text-sm font-semibold text-[#f0f0f0]">{c.title}</div>
                <div className="text-xs font-semibold mt-0.5" style={{ color: c.accent }}>{c.cat}</div>
                <div className="text-xs text-[#555] mt-0.5">{c.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats strip */}
        <div data-reveal data-delay="3" className="grid grid-cols-2 md:grid-cols-4 border border-[rgba(255,255,255,0.07)] rounded-[20px] overflow-hidden">
          {stats.map((s, i) => (
            <div key={s.label} className={`bg-[#080808] px-6 py-7 text-center ${i < stats.length - 1 ? 'border-r border-[rgba(255,255,255,0.07)]' : ''}`}>
              <div className="font-serif text-4xl font-black text-[#f0f0f0] leading-none mb-2">{s.value}</div>
              <div className="text-xs text-[#555] uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
