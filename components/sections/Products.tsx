'use client';
import Reveal from '@/components/Reveal';

const products = [
  {
    label: 'WA',
    title: 'WhatsApp CRM & Bulk Sender',
    badge: 'Popular',
    desc: 'A browser extension that turns your WhatsApp Business into a full marketing tool. Send 1,000+ messages/day, schedule campaigns, track responses — without getting banned.',
    features: ['Bulk message sending (safe mode)', 'Contact list import from Excel', 'Auto follow-up sequences', 'Reply tracking dashboard', 'Works with WhatsApp Business'],
    cta: 'Get Extension →',
    color: '#10B981',
  },
  {
    label: 'LT',
    title: 'LeadTrack — CRM for Small Business',
    badge: 'New',
    desc: 'A simple, fast CRM built for small businesses worldwide. Track your leads, follow-ups, and deals without enterprise-level complexity.',
    features: ['Lead pipeline with drag & drop', 'WhatsApp + call log integration', 'Team collaboration (up to 5 users)', 'Automated follow-up reminders', '14-day free trial, no card needed'],
    cta: 'Start Free Trial →',
    color: '#F59E0B',
  },
];

export default function Products() {
  return (
    <section id="products" className="section-pad px-6">
      <div className="max-w-6xl mx-auto">

        <Reveal className="mb-14">
          <span className="section-label">Our products</span>
          <h2 className="font-serif font-black leading-tight mt-3"
            style={{ fontSize: 'clamp(2.4rem,5.5vw,3.8rem)' }}>
            Tools we built.<br /><em className="not-italic" style={{ color: '#10B981' }}>Built for scale.</em>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5">
          {products.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="card overflow-hidden flex flex-col h-full">
                <div className="h-0.5" style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }} />
                <div className="p-9 flex flex-col gap-5 flex-1">
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold text-[#080808]" style={{ background: p.color }}>
                      {p.label}
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ color: p.color, background: `${p.color}15`, border: `1px solid ${p.color}25` }}>{p.badge}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold">{p.title}</h3>
                  <p className="text-[#777] text-sm leading-relaxed">{p.desc}</p>
                  <ul className="flex flex-col gap-2.5">
                    {p.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-sm text-[#777]">
                        <span className="text-xs flex-shrink-0" style={{ color: p.color }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="https://wa.me/917255961822" target="_blank" rel="noopener noreferrer"
                    className="mt-auto text-sm font-bold flex items-center gap-1.5 transition-all hover:gap-3" style={{ color: p.color }}>
                    {p.cta}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
