'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const services = [
  {
    n: '01',
    title: 'Digital Presence',
    desc: 'Professional websites and apps that load fast, look great, and convert visitors into customers.',
    items: ['Business website design', 'Mobile app development', 'E-commerce stores', 'Website maintenance & updates', 'Domain, hosting & SSL setup'],
    cta: 'Explore websites →',
    href: '#work',
    color: '#10B981',
  },
  {
    n: '02',
    title: 'Business Growth',
    desc: 'Data-driven marketing that brings real leads — not just traffic and vanity metrics.',
    items: ['Meta & Google ad campaigns', 'Social media management', 'WhatsApp marketing automation', 'Search engine optimisation', 'Content creation & strategy'],
    cta: 'Start a campaign →',
    href: '#contact',
    color: '#F59E0B',
  },
  {
    n: '03',
    title: 'Business Services',
    desc: 'From idea to registered company — we handle all the legal and identity groundwork.',
    items: ['Private Limited company registration', 'NGO / Section 8 registration', 'GST registration & filing', 'Logo & brand identity design', 'Business cards & print collateral'],
    cta: 'Register your business →',
    href: '#contact',
    color: '#6366F1',
  },
  {
    n: '04',
    title: 'Tech Products & SaaS',
    desc: "Beyond services — we build tools and take on high-impact projects that others won't.",
    items: ['WhatsApp CRM & bulk sender', 'SaaS software licensing', 'Election & political PR campaigns', 'Custom automation workflows', 'Influencer marketing tie-ups'],
    cta: 'Explore products →',
    href: '#products',
    color: '#EC4899',
  },
];

export default function Services() {
  const ref = useScrollReveal();
  return (
    <section id="services" ref={ref as React.RefObject<HTMLElement>} className="section-pad px-6 bg-[#0c0c0c]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <div data-reveal>
            <span className="section-label">What we do</span>
            <h2 className="font-serif font-black leading-tight mt-3"
              style={{ fontSize: 'clamp(2.4rem,5.5vw,3.8rem)' }}>
              One agency.<br /><em className="not-italic" style={{ color: '#10B981' }}>Every need.</em>
            </h2>
          </div>
          <p data-reveal data-delay="1" className="text-[#666] max-w-sm leading-relaxed text-sm">
            We handle your complete digital infrastructure — from building your business online to growing it globally.
          </p>
        </div>

        {/* Numbered service rows */}
        <div className="divide-y divide-[rgba(255,255,255,0.06)]">
          {services.map((s, i) => (
            <div
              key={s.n}
              data-reveal
              data-delay={String(i + 1)}
              className="grid md:grid-cols-[72px_1fr_280px] gap-8 md:gap-12 py-12 group"
            >
              {/* Number */}
              <span className="font-mono text-xs text-[#333] pt-1.5 select-none">{s.n}</span>

              {/* Title + desc + CTA */}
              <div>
                <h3 className="font-serif text-2xl font-bold mb-3 text-[#f0f0f0] group-hover:text-white transition-colors">
                  {s.title}
                </h3>
                <p className="text-[#666] text-sm leading-relaxed mb-5 max-w-md">{s.desc}</p>
                <a
                  href={s.href}
                  className="text-sm font-semibold inline-flex items-center gap-1.5 transition-all duration-200 hover:gap-3"
                  style={{ color: s.color }}
                >
                  {s.cta}
                </a>
              </div>

              {/* Items list */}
              <ul className="flex flex-col gap-2.5 mt-1">
                {s.items.map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[#555]">
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: s.color }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
