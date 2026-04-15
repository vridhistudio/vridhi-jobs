const services = [
  {
    n: '01',
    icon: '⬡',
    title: 'Digital Presence',
    desc: 'Professional websites and apps that load fast, look great, and turn visitors into customers.',
    items: ['Business website design', 'Mobile app development', 'E-commerce stores', 'Website maintenance & updates', 'Domain, hosting & SSL setup'],
    cta: 'Explore websites →',
    href: '#pricing',
    color: '#10B981',
  },
  {
    n: '02',
    icon: '◎',
    title: 'Business Growth',
    desc: 'Data-driven marketing that brings real leads and customers — not just traffic and likes.',
    items: ['Meta & Google ad campaigns', 'Social media management', 'WhatsApp marketing automation', 'Search engine optimisation', 'Content creation & strategy'],
    cta: 'Start a campaign →',
    href: '#pricing',
    color: '#F59E0B',
  },
  {
    n: '03',
    icon: '⬟',
    title: 'Business Services',
    desc: 'From idea to registered company — we handle all the legal and identity groundwork.',
    items: ['Private Limited company registration', 'NGO / Section 8 registration', 'GST registration & filing', 'Logo & brand identity design', 'Business cards & print collateral'],
    cta: 'Register your business →',
    href: '#pricing',
    color: '#6366F1',
  },
  {
    n: '04',
    icon: '◈',
    title: 'Tech Products & SaaS',
    desc: 'Beyond services — we build tools and take on high-impact projects that others won\'t.',
    items: ['WhatsApp CRM & bulk sender', 'SaaS software licensing', 'Election & political PR campaigns', 'Custom automation workflows', 'Influencer marketing tie-ups'],
    cta: 'Explore products →',
    href: '#products',
    color: '#EC4899',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-pad px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <div className="tag mb-4">What we do</div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#F8FAFC] leading-tight">
            One agency.
            <br />
            <span className="text-gradient-emerald">Every need.</span>
          </h2>
          <p className="mt-4 max-w-xl text-[#94A3B8]">
            We are not a typical web agency. We handle your complete digital infrastructure —
            from building your business legally to growing it online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.n} className="glass glass-hover rounded-2xl p-8 flex flex-col gap-4 group transition-all duration-300">
              <div className="flex items-start justify-between">
                <span className="text-3xl" style={{ color: s.color }}>{s.icon}</span>
                <span className="font-mono text-xs text-[#475569]">{s.n}</span>
              </div>
              <h3 className="text-xl font-display font-bold text-[#F8FAFC]">{s.title}</h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed">{s.desc}</p>
              <ul className="flex flex-col gap-1.5 mt-1">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#94A3B8]">
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: s.color }} />
                    {item}
                  </li>
                ))}
              </ul>
              <a href={s.href} className="mt-auto pt-2 text-sm font-semibold transition-colors hover:opacity-80" style={{ color: s.color }}>
                {s.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
