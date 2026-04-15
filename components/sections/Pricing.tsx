'use client';

import { useState } from 'react';

const tabs = ['Websites', 'Marketing', 'Registration', 'Social Media'];

const plans: Record<string, { name: string; price: string; period: string; desc: string; features: string[]; badge?: string; color: string }[]> = {
  Websites: [
    {
      name: 'Starter',
      price: '₹9,999',
      period: 'one-time · no hidden charges',
      desc: 'Perfect for first-time businesses going digital. Fast, clean, and conversion-ready.',
      features: ['3-page responsive website', 'WhatsApp chat button', 'Google Maps integration', 'Mobile-first design', 'Delivered in 3 business days'],
      color: '#10B981',
    },
    {
      name: 'Growth',
      price: '₹29,999',
      period: 'one-time · includes 1-year hosting',
      desc: 'For businesses serious about leads. Includes SEO setup and Google Business Profile.',
      features: ['Up to 10 custom pages', '1-year free hosting included', 'On-page SEO setup', 'Google Business Profile setup', 'WhatsApp lead capture form', '2 rounds of free revisions'],
      badge: 'Most Popular',
      color: '#F59E0B',
    },
    {
      name: 'Premium',
      price: '₹49,999',
      period: 'custom quote for complex projects',
      desc: 'Full-scale custom websites with automation, booking systems, and SaaS integrations.',
      features: ['Unlimited pages, fully custom', 'Online booking / appointment system', 'WhatsApp automation & CRM', 'Payment gateway integration', '3-month post-launch support', 'Priority 24/7 WhatsApp support'],
      color: '#6366F1',
    },
  ],
  Marketing: [
    {
      name: 'Starter Campaign',
      price: '₹8,000',
      period: 'per month (ad spend separate)',
      desc: 'Ideal for first-time advertisers. Meta (Facebook/Instagram) ads with targeting setup.',
      features: ['Campaign setup & ad creatives (4)', 'Audience targeting & optimisation', 'Weekly performance report', 'WhatsApp lead notification'],
      color: '#10B981',
    },
    {
      name: 'Growth Campaign',
      price: '₹18,000',
      period: 'per month (ad spend separate)',
      desc: 'Meta + Google ads with landing page, retargeting, and lead tracking.',
      features: ['Meta + Google Ads management', 'Dedicated landing page design', 'Retargeting campaigns', 'Lead CRM integration', 'Bi-weekly strategy calls'],
      badge: 'Best Value',
      color: '#F59E0B',
    },
    {
      name: 'Election / PR',
      price: 'Custom',
      period: 'depends on constituency & scope',
      desc: 'Full digital PR for elections — WhatsApp broadcast, ad campaigns, social media blitz, and real-time monitoring.',
      features: ['Voter data targeting', 'WhatsApp bulk campaigns', 'Social media war room', 'Real-time sentiment monitoring', 'Video & creative production'],
      color: '#6366F1',
    },
  ],
  Registration: [
    {
      name: 'Business Setup',
      price: '₹5,999',
      period: 'all-inclusive · no extra charges',
      desc: 'Get your business officially registered and running with all compliance basics covered.',
      features: ['GST registration', 'Udyam / MSME registration', 'Business bank account guidance', 'PAN & TAN application'],
      badge: 'Most Popular',
      color: '#10B981',
    },
    {
      name: 'Private Limited',
      price: '₹14,999',
      period: 'complete Pvt. Ltd. incorporation',
      desc: 'Full company registration — from DIN to certificate of incorporation, all handled.',
      features: ['Director DIN & DSC', 'MCA filing & incorporation', 'Certificate of Incorporation', 'PAN, TAN, GST registration', 'Compliance checklist'],
      color: '#F59E0B',
    },
    {
      name: 'NGO / Section 8',
      price: '₹19,999',
      period: 'complete NGO setup',
      desc: 'Section 8 company or trust registration for non-profit organisations, with 12A & 80G support.',
      features: ['Trust or Section 8 registration', '12A & 80G application', 'FCRA guidance', 'Donor management website', '3-month compliance support'],
      color: '#6366F1',
    },
  ],
  'Social Media': [
    {
      name: 'Basic',
      price: '₹5,999',
      period: 'per month',
      desc: 'Consistent social media presence on 2 platforms with regular posting.',
      features: ['12 posts/month (Instagram + Facebook)', 'Captions in Hindi + English', 'Basic graphic design', 'Story updates (8/month)'],
      color: '#10B981',
    },
    {
      name: 'Growth',
      price: '₹12,999',
      period: 'per month',
      desc: 'Active growth strategy with reels, engagement, and monthly analytics.',
      features: ['20 posts + 4 Reels/month', '3 platforms (Insta, FB, WhatsApp)', 'Community management & replies', 'Monthly analytics report', 'Festival & topical creatives'],
      badge: 'Recommended',
      color: '#F59E0B',
    },
    {
      name: 'Full Management',
      price: '₹24,999',
      period: 'per month',
      desc: 'Complete social media outsourcing — we run your accounts like an in-house team.',
      features: ['Unlimited posts across all platforms', 'Video shoots & reels production', 'Influencer collaboration', 'Paid campaign management', 'Dedicated account manager'],
      color: '#6366F1',
    },
  ],
};

export default function Pricing() {
  const [active, setActive] = useState('Websites');
  const current = plans[active];

  return (
    <section id="pricing" className="section-pad px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="tag mb-4">Pricing</div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#F8FAFC] leading-tight">
            Choose your service.
            <br />
            <span className="text-gradient-emerald">All prices include GST.</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {tabs.map((t) => (
            <button key={t} onClick={() => setActive(t)} className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${active === t ? 'bg-[#10B981] text-[#050A14]' : 'glass text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/5'}`}>
              {t}
            </button>
          ))}
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6">
          {current.map((p) => (
            <div key={p.name} className={`relative glass rounded-2xl overflow-hidden flex flex-col transition-all duration-300 ${p.badge ? 'ring-1 ring-[#10B981]/30' : ''}`}>
              {p.badge && (
                <div className="absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full bg-[#10B981] text-[#050A14]">
                  {p.badge}
                </div>
              )}
              <div className="h-1" style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }} />
              <div className="p-7 flex flex-col gap-4 flex-1">
                <div>
                  <h3 className="text-lg font-display font-bold text-[#F8FAFC]">{p.name}</h3>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-3xl font-display font-bold" style={{ color: p.color }}>{p.price}</span>
                  </div>
                  <p className="text-xs text-[#475569] mt-0.5">{p.period}</p>
                </div>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{p.desc}</p>
                <ul className="flex flex-col gap-2 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-[#94A3B8]">
                      <span className="mt-0.5 flex-shrink-0 text-xs" style={{ color: p.color }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/919693245941" target="_blank" rel="noopener noreferrer" className="mt-4 w-full text-center py-2.5 rounded-full text-sm font-bold transition-all border" style={{ color: p.color, borderColor: `${p.color}40` }}>
                  Get started →
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-[#475569]">
          Need something custom?{' '}
          <a href="https://wa.me/919693245941" target="_blank" rel="noopener noreferrer" className="text-[#10B981] hover:underline">
            WhatsApp us — we'll give you a quote in 2 hours.
          </a>
        </p>
      </div>
    </section>
  );
}
