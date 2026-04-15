'use client';
import Link from 'next/link';
import Reveal from '@/components/Reveal';

const categories = [
  {
    title: 'Clinic & Healthcare',
    count: 5,
    desc: 'OPD, multi-specialty, dental, skin & beauty clinics',
    color: '#10B981',
    bg: 'rgba(16,185,129,0.08)',
    featured: '/imgs/tpl-apexmed.jpg',
    thumbs: ['/imgs/tpl-carepoint.jpg', '/imgs/tpl-medcore.jpg', '/imgs/tpl-dermaglow.jpg'],
  },
  {
    title: 'Restaurant & Food',
    count: 6,
    desc: 'Fine dining, fast food, cloud kitchens & cafés',
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.08)',
    featured: '/imgs/tpl-ember-salt.jpg',
    thumbs: ['/imgs/tpl-spiceroute.jpg', '/imgs/tpl-botanica.jpg', '/imgs/tpl-avadh.jpg'],
  },
  {
    title: 'Gym & Fitness',
    count: 7,
    desc: 'Gyms, yoga studios, CrossFit & sports academies',
    color: '#EC4899',
    bg: 'rgba(236,72,153,0.08)',
    featured: '/imgs/tpl-burnlab.jpg',
    thumbs: ['/imgs/tpl-studiozen.jpg', '/imgs/tpl-ironpath.jpg', '/imgs/tpl-peakzone.jpg'],
  },
  {
    title: 'Coaching & Education',
    count: 6,
    desc: 'Competitive exams, institutes & e-learning platforms',
    color: '#6366F1',
    bg: 'rgba(99,102,241,0.08)',
    featured: '/imgs/tpl-academiax.jpg',
    thumbs: ['/imgs/tpl-prodigyhub.jpg', '/imgs/tpl-vidyapeeth.jpg', '/imgs/tpl-eduelite.jpg'],
  },
  {
    title: 'NGO & Non-Profit',
    count: 6,
    desc: 'Fundraising, welfare & social organisations',
    color: '#14B8A6',
    bg: 'rgba(20,184,166,0.08)',
    featured: '/imgs/tpl-asha.jpg',
    thumbs: ['/imgs/tpl-akanksha.jpg', '/imgs/tpl-dharitri.jpg', '/imgs/tpl-prayas.jpg'],
  },
  {
    title: 'Business & Corporate',
    count: 6,
    desc: 'Consultancies, agencies & trading companies',
    color: '#8B5CF6',
    bg: 'rgba(139,92,246,0.08)',
    featured: '/imgs/tpl-meridian.jpg',
    thumbs: ['/imgs/tpl-nexus.jpg', '/imgs/tpl-vertex.jpg', '/imgs/tpl-arcadia.jpg'],
  },
];

export default function Work() {
  return (
    <section id="work" className="section-pad px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <Reveal>
            <span className="section-label">Our work</span>
            <h2 className="font-serif font-black leading-tight mt-3"
              style={{ fontSize: 'clamp(2.4rem,5.5vw,3.8rem)' }}>
              Templates built<br /><em className="not-italic" style={{ color: '#10B981' }}>for the world.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="text-[#777] max-w-xs leading-relaxed text-sm">
            36+ live designs across 6 industries. Ready to launch in 3 days, fully customised to your brand.
          </Reveal>
        </div>

        {/* Template cards with screenshots */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
          {categories.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 0.06}>
              <Link href="/templates" className="card overflow-hidden flex flex-col group block">

                {/* Thin accent bar */}
                <div className="h-[3px]" style={{ background: `linear-gradient(90deg, ${c.color}, transparent)` }} />

                {/* Featured screenshot */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#1a1a1a]">
                  <img
                    src={c.featured}
                    alt={c.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-sm font-semibold text-white">Browse {c.count} designs →</span>
                  </div>
                  {/* Count badge — always visible */}
                  <div className="absolute top-3 right-3">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm"
                      style={{ color: c.color, background: c.bg, border: `1px solid ${c.color}30` }}>
                      {c.count} designs
                    </span>
                  </div>
                </div>

                {/* Thumbnail strip */}
                <div className="flex gap-1.5 px-4 pt-3">
                  {c.thumbs.map((t, ti) => (
                    <div
                      key={ti}
                      className="flex-1 rounded-md overflow-hidden border border-[rgba(255,255,255,0.07)]"
                      style={{ aspectRatio: '16/10' }}
                    >
                      <img
                        src={t}
                        alt=""
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>

                {/* Card body */}
                <div className="px-5 pt-4 pb-5 flex flex-col gap-2">
                  <h3 className="font-serif text-lg font-bold text-[#f0f0f0] group-hover:text-white transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-[#555] text-[0.8rem] leading-relaxed">{c.desc}</p>
                  <span className="text-[0.8rem] font-semibold mt-1 transition-all group-hover:gap-2 flex items-center gap-1.5"
                    style={{ color: c.color }}>
                    View all templates →
                  </span>
                </div>

              </Link>
            </Reveal>
          ))}
        </div>

        {/* CTA row */}
        <Reveal>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#0c0c0c] border border-[rgba(255,255,255,0.06)] rounded-2xl px-10 py-8">
            <div>
              <h3 className="font-serif text-xl font-bold mb-1">Like what you see?</h3>
              <p className="text-[#666] text-sm">Pick a template, tell us your brand — we'll go live in 3 days.</p>
            </div>
            <a
              href="https://wa.me/917255961822?text=Hi%20Vridhi%20Studio%2C%20I%20want%20to%20start%20a%20website%20project"
              target="_blank" rel="noopener noreferrer"
              className="btn-primary flex-shrink-0"
            >
              Start on WhatsApp →
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
