'use client';
import Reveal from '@/components/Reveal';

const cases = [
  {
    client: 'Aura Health Clinic',
    industry: 'Healthcare',
    location: 'Singapore',
    services: ['Website Design', 'WhatsApp Integration', 'SEO Setup'],
    metric: '3×',
    metricLabel: 'more appointment bookings in 60 days',
    quote: 'We went from invisible online to fully booked in two months. The site loads fast and the WhatsApp booking flow is seamless.',
    initials: 'AH',
    color: '#10B981',
    img: '/imgs/tpl-apexmed.jpg',
    stack: 'Next.js · Tailwind · Vercel',
  },
  {
    client: 'Ember & Salt',
    industry: 'Fine Dining',
    location: 'Dubai, UAE',
    services: ['Website', 'Table Booking System', 'Social Media'],
    metric: '+140%',
    metricLabel: 'table reservations in first month',
    quote: "Our old site was embarrassing for a fine dining brand. Vridhi delivered something we're genuinely proud to send to guests.",
    initials: 'ES',
    color: '#F59E0B',
    img: '/imgs/tpl-ember-salt.jpg',
    stack: 'React · Stripe · Resend',
  },
  {
    client: 'BrightPath Academy',
    industry: 'Coaching & Education',
    location: 'India',
    services: ['Website', 'Meta Ad Campaigns', 'Lead CRM'],
    metric: '40+',
    metricLabel: 'new student enrolments from first campaign',
    quote: 'The Facebook campaign brought real admissions on a modest budget. Best ROI we\'ve seen on any marketing spend.',
    initials: 'BP',
    color: '#6366F1',
    img: '/imgs/tpl-academiax.jpg',
    stack: 'Next.js · Meta Ads · HubSpot',
  },
  {
    client: 'Nexus Capital Advisors',
    industry: 'Financial Services',
    location: 'Mumbai, India',
    services: ['Pvt Ltd Registration', 'GST Filing', 'Investor Portal'],
    metric: '12 days',
    metricLabel: 'from zero to registered company with live portal',
    quote: "We needed to move fast for a funding round. Vridhi got our Pvt Ltd registered and the investor portal live in under two weeks.",
    initials: 'NC',
    color: '#8B5CF6',
    img: '/imgs/tpl-meridian.jpg',
    stack: 'Laravel · MySQL · Vercel',
  },
];

export default function CaseStudies() {
  return (
    <section id="cases" className="section-pad px-6 bg-[#0c0c0c]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <Reveal>
            <span className="section-label">Client work</span>
            <h2 className="font-serif font-black leading-tight mt-3"
              style={{ fontSize: 'clamp(2.4rem,5.5vw,3.8rem)' }}>
              Real projects.<br />
              <em className="not-italic" style={{ color: '#10B981' }}>Real results.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="text-[#777] max-w-sm leading-relaxed text-sm">
            A selection of projects we've built, registered, and grown. Every number below is from an actual client.
          </Reveal>
        </div>

        {/* Case study grid: 2 large + 2 medium */}
        <div className="grid md:grid-cols-2 gap-5">
          {cases.map((c, i) => (
            <Reveal key={c.client} delay={i * 0.07}>
              <div className="card overflow-hidden flex flex-col group h-full">

                {/* Screenshot */}
                <div className="relative overflow-hidden bg-[#1a1a1a]" style={{ aspectRatio: '16/9' }}>
                  <img
                    src={c.img}
                    alt={c.client}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  {/* Overlay with industry + location tag */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-md bg-[rgba(0,0,0,0.6)] text-[#f0f0f0] border border-[rgba(255,255,255,0.12)]">
                      {c.industry}
                    </span>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-md bg-[rgba(0,0,0,0.6)] text-[#888] border border-[rgba(255,255,255,0.08)]">
                      {c.location}
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col gap-4 flex-1">

                  {/* Client + services */}
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-[#080808] flex-shrink-0"
                        style={{ background: c.color }}>
                        {c.initials}
                      </div>
                      <h3 className="font-serif text-lg font-bold text-[#f0f0f0]">{c.client}</h3>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {c.services.map(s => (
                        <span key={s} className="text-[11px] px-2.5 py-0.5 rounded-full border border-[rgba(255,255,255,0.08)] text-[#555]">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key metric — the money shot */}
                  <div className="border-l-2 pl-4 py-1" style={{ borderColor: c.color }}>
                    <div className="font-serif font-black leading-none mb-1" style={{ fontSize: 'clamp(1.8rem,3vw,2.4rem)', color: c.color }}>
                      {c.metric}
                    </div>
                    <div className="text-[#777] text-sm">{c.metricLabel}</div>
                  </div>

                  {/* Quote */}
                  <p className="text-[#666] text-sm leading-relaxed italic flex-1">"{c.quote}"</p>

                  {/* Stack */}
                  <div className="pt-3 border-t border-[rgba(255,255,255,0.05)] flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#444]">{c.stack}</span>
                    <span className="text-[11px] font-semibold" style={{ color: c.color }}>Live ↗</span>
                  </div>

                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
