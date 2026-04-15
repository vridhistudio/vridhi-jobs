const products = [
  {
    icon: '📲',
    title: 'WhatsApp CRM & Bulk Sender',
    desc: 'A browser extension that turns your WhatsApp Business into a full marketing tool. Send 1,000+ messages/day, schedule campaigns, track responses — all without getting banned.',
    features: ['Bulk message sending (safe mode)', 'Contact list import from Excel', 'Auto follow-up sequences', 'Reply tracking dashboard', 'Works with WhatsApp Business'],
    cta: 'Get Extension →',
    color: '#10B981',
    badge: 'Popular',
  },
  {
    icon: '📊',
    title: 'LeadTrack — CRM for Small Business',
    desc: 'A simple, fast CRM built for small businesses worldwide. Track your leads, follow-ups, and deals without the complexity of Salesforce or the cost of enterprise tools.',
    features: ['Lead pipeline with drag & drop', 'WhatsApp + call log integration', 'Team collaboration (up to 5 users)', 'Automated follow-up reminders', '14-day free trial, no card needed'],
    cta: 'Start Free Trial →',
    color: '#F59E0B',
    badge: 'New',
  },
];

export default function Products() {
  return (
    <section id="products" className="section-pad px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <div className="tag mb-4">Our products</div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#F8FAFC] leading-tight">
            Tools we built.
            <br />
            <span className="text-gradient-emerald">Built for scale.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {products.map((p) => (
            <div key={p.title} className="glass glass-hover rounded-2xl overflow-hidden flex flex-col transition-all duration-300">
              <div className="h-1" style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }} />
              <div className="p-8 flex flex-col gap-4 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <span className="text-3xl">{p.icon}</span>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ color: p.color, background: `${p.color}15`, border: `1px solid ${p.color}30` }}>
                    {p.badge}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-[#F8FAFC]">{p.title}</h3>
                </div>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{p.desc}</p>
                <ul className="flex flex-col gap-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[#94A3B8]">
                      <span className="text-xs" style={{ color: p.color }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/919693245941" target="_blank" rel="noopener noreferrer" className="mt-auto pt-2 text-sm font-bold transition-opacity hover:opacity-70" style={{ color: p.color }}>
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
