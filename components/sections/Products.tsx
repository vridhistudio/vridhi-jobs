'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const products = [
  {
    icon: '📲', title: 'WhatsApp CRM & Bulk Sender', badge: 'Popular',
    desc: 'A browser extension that turns your WhatsApp Business into a full marketing tool. Send 1,000+ messages/day, schedule campaigns, track responses — all without getting banned.',
    features: ['Bulk message sending (safe mode)', 'Contact list import from Excel', 'Auto follow-up sequences', 'Reply tracking dashboard', 'Works with WhatsApp Business'],
    cta: 'Get Extension →', color: '#10B981',
  },
  {
    icon: '📊', title: 'LeadTrack — CRM for Small Business', badge: 'New',
    desc: 'A simple, fast CRM built for small businesses worldwide. Track your leads, follow-ups, and deals without enterprise-level complexity.',
    features: ['Lead pipeline with drag & drop', 'WhatsApp + call log integration', 'Team collaboration (up to 5 users)', 'Automated follow-up reminders', '14-day free trial, no card needed'],
    cta: 'Start Free Trial →', color: '#F59E0B',
  },
];

export default function Products() {
  const ref = useScrollReveal();
  return (
    <section id="products" ref={ref as React.RefObject<HTMLElement>} className="section-pad px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14" data-reveal>
          <span className="section-label">Our products</span>
          <h2 className="font-serif text-[clamp(2.2rem,5vw,3.5rem)] font-black leading-tight mt-2">
            Tools we built.<br /><em className="text-[#10B981]">Built for scale.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {products.map((p) => (
            <div key={p.title} data-reveal className="card overflow-hidden flex flex-col">
              <div className="h-0.5" style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }} />
              <div className="p-9 flex flex-col gap-5 flex-1">
                <div className="flex items-start justify-between">
                  <span className="text-3xl">{p.icon}</span>
                  <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ color: p.color, background: `${p.color}15`, border: `1px solid ${p.color}25` }}>{p.badge}</span>
                </div>
                <h3 className="font-serif text-xl font-bold">{p.title}</h3>
                <p className="text-[#888] text-sm leading-relaxed">{p.desc}</p>
                <ul className="flex flex-col gap-2.5">
                  {p.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[#888]">
                      <span className="text-xs flex-shrink-0" style={{ color: p.color }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/917255961822" target="_blank" rel="noopener noreferrer" className="mt-auto text-sm font-bold flex items-center gap-1.5 transition-all hover:gap-3" style={{ color: p.color }}>
                  {p.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
