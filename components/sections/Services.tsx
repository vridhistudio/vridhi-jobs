'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const services = [
  {
    n: '{01}', title: 'Digital Presence',
    desc: 'Professional websites and apps that load fast, look great, and turn visitors into customers.',
    items: ['Business website design', 'Mobile app development', 'E-commerce stores', 'Website maintenance & updates', 'Domain, hosting & SSL setup'],
    cta: 'Explore websites →', href: '#work', color: '#10B981',
  },
  {
    n: '{02}', title: 'Business Growth',
    desc: 'Data-driven marketing that brings real leads and customers — not just traffic and likes.',
    items: ['Meta & Google ad campaigns', 'Social media management', 'WhatsApp marketing automation', 'Search engine optimisation', 'Content creation & strategy'],
    cta: 'Start a campaign →', href: '#contact', color: '#F59E0B',
  },
  {
    n: '{03}', title: 'Business Services',
    desc: 'From idea to registered company — we handle all the legal and identity groundwork.',
    items: ['Private Limited company registration', 'NGO / Section 8 registration', 'GST registration & filing', 'Logo & brand identity design', 'Business cards & print collateral'],
    cta: 'Register your business →', href: '#contact', color: '#6366F1',
  },
  {
    n: '{04}', title: 'Tech Products & SaaS',
    desc: "Beyond services — we build tools and take on high-impact projects that others won't.",
    items: ['WhatsApp CRM & bulk sender', 'SaaS software licensing', 'Election & political PR campaigns', 'Custom automation workflows', 'Influencer marketing tie-ups'],
    cta: 'Explore products →', href: '#products', color: '#EC4899',
  },
];

export default function Services() {
  const ref = useScrollReveal();
  return (
    <section id="services" ref={ref as React.RefObject<HTMLElement>} className="section-pad px-6 bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div data-reveal>
            <span className="section-label">What we do</span>
            <h2 className="font-serif text-[clamp(2.2rem,5vw,3.5rem)] font-black leading-tight mt-2">
              One agency.<br /><em className="text-[#10B981]">Every need.</em>
            </h2>
          </div>
          <p data-reveal data-delay="1" className="text-[#888] max-w-sm leading-relaxed">
            We handle your complete digital infrastructure — from building your business online to growing it globally.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s) => (
            <div key={s.n} data-reveal className="card p-9 flex flex-col gap-4">
              <span className="text-xs font-semibold tracking-widest text-[#555]">{s.n}</span>
              <h3 className="font-serif text-2xl font-bold">{s.title}</h3>
              <p className="text-[#888] text-sm leading-relaxed">{s.desc}</p>
              <ul className="flex flex-col gap-2.5 mt-1">
                {s.items.map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[#888]">
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: s.color }} />
                    {item}
                  </li>
                ))}
              </ul>
              <a href={s.href} className="mt-4 text-sm font-semibold flex items-center gap-1.5 transition-all hover:gap-3" style={{ color: s.color }}>
                {s.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
