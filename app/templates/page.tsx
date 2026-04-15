'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Reveal from '@/components/Reveal';

type Tier = 'starter' | 'growth' | 'premium';

interface Template {
  name: string;
  img: string;
  tier: Tier;
  desc: string;
  demo: string;
}

interface Niche {
  id: string;
  label: string;
  icon: string;
  color: string;
  templates: Template[];
}

const niches: Niche[] = [
  {
    id: 'clinic',
    label: 'Clinic & Healthcare',
    icon: '🏥',
    color: '#10B981',
    templates: [
      { name: 'CarePoint',      img: '/imgs/tpl-carepoint.jpg',      tier: 'starter', desc: 'Clean clinic site with appointment booking CTA and doctor profiles.',                          demo: 'https://wc-carepoint.vercel.app' },
      { name: 'Swasthya Seva',  img: '/imgs/tpl-swasthyaseva.jpg',   tier: 'starter', desc: 'Health clinic template with trust signals and WhatsApp booking.',                             demo: 'https://wc-swasthyaseva.vercel.app' },
      { name: 'MedCore',        img: '/imgs/tpl-medcore.jpg',         tier: 'growth',  desc: 'Multi-specialty clinic with SEO-optimised pages, blog section, and patient testimonials.',    demo: 'https://wc-medcore.vercel.app' },
      { name: 'DermaGlow',      img: '/imgs/tpl-dermaglow.jpg',       tier: 'growth',  desc: 'Skin & beauty clinic template with before/after gallery and online consultation booking.',    demo: 'https://wc-dermaglow.vercel.app' },
      { name: 'ApexMed',        img: '/imgs/tpl-apexmed.jpg',         tier: 'premium', desc: 'Full hospital/clinic system with online appointments, doctor dashboard CTA, and lab links.',  demo: 'https://wc-apexmed.vercel.app' },
    ],
  },
  {
    id: 'restaurant',
    label: 'Restaurant & Food',
    icon: '🍽️',
    color: '#F59E0B',
    templates: [
      { name: "SpiceRoute",     img: '/imgs/tpl-spiceroute.jpg',      tier: 'starter', desc: 'Bold restaurant template with photo menu, timings, and Google Maps integration.',             demo: 'https://wc-spiceroute.vercel.app' },
      { name: "Devi's Kitchen", img: '/imgs/tpl-deviskitchen.jpg',    tier: 'starter', desc: 'Warm, homestyle eatery with chef story, specials section, and WhatsApp order.',               demo: 'https://wc-deviskitchen.vercel.app' },
      { name: 'Ember & Salt',   img: '/imgs/tpl-ember-salt.jpg',      tier: 'growth',  desc: 'Premium dining template with table reservation, gallery, and chef\'s tasting menu.',          demo: 'https://wc-ember-salt.vercel.app' },
      { name: 'Botanica',       img: '/imgs/tpl-botanica.jpg',        tier: 'growth',  desc: 'Health-café template with loyalty program CTA and delivery platform links.',                  demo: 'https://wc-botanica.vercel.app' },
      { name: 'Avadh',          img: '/imgs/tpl-avadh.jpg',           tier: 'premium', desc: 'Heritage fine-dining — event hosting, corporate catering inquiry, and reservation system.',   demo: 'https://wc-avadh.vercel.app' },
      { name: 'Rasayan',        img: '/imgs/tpl-rasayan.jpg',         tier: 'premium', desc: 'Modern fusion restaurant with online ordering integration and loyalty programme.',             demo: 'https://wc-rasayan.vercel.app' },
    ],
  },
  {
    id: 'gym',
    label: 'Gym & Fitness',
    icon: '💪',
    color: '#EC4899',
    templates: [
      { name: 'StudioZen',  img: '/imgs/tpl-studiozen.jpg',  tier: 'starter', desc: 'Yoga & wellness studio with class schedule, plans, and WhatsApp join CTA.',                     demo: 'https://wc-studiozen.vercel.app' },
      { name: 'FormX',      img: '/imgs/tpl-formx.jpg',      tier: 'starter', desc: 'No-nonsense gym template with trainers, membership plans, and transformation gallery.',          demo: 'https://wc-formx.vercel.app' },
      { name: 'IronPath',   img: '/imgs/tpl-ironpath.jpg',   tier: 'growth',  desc: 'Serious strength gym with equipment showcase, trainer bios, and online membership signup.',      demo: 'https://wc-ironpath.vercel.app' },
      { name: 'PeakZone',   img: '/imgs/tpl-peakzone.jpg',   tier: 'growth',  desc: 'CrossFit & functional fitness studio with class types and challenge events.',                    demo: 'https://wc-peakzone.vercel.app' },
      { name: 'FitZone',    img: '/imgs/tpl-fitzone.jpg',    tier: 'growth',  desc: 'High-energy gym with membership plans, trainers, and WhatsApp join flow.',                       demo: 'https://wc-fitzone.vercel.app' },
      { name: 'BurnLab',    img: '/imgs/tpl-burnlab.jpg',    tier: 'premium', desc: 'High-performance gym brand with diet plans, trainer app CTA, and corporate wellness.',           demo: 'https://wc-burnlab.vercel.app' },
      { name: 'ApexBody',   img: '/imgs/tpl-apexbody.jpg',   tier: 'premium', desc: 'Multi-location fitness chain with franchise info, coach certification, and member portal.',     demo: 'https://wc-apexbody.vercel.app' },
    ],
  },
  {
    id: 'coaching',
    label: 'Coaching & Education',
    icon: '📚',
    color: '#6366F1',
    templates: [
      { name: 'ShikshaPlus', img: '/imgs/tpl-shikshaplus.jpg', tier: 'starter', desc: 'Coaching centre with subject cards, batch schedule, and result testimonials.',                   demo: 'https://wc-shikshaplus.vercel.app' },
      { name: 'ProdigyHub',  img: '/imgs/tpl-prodigyhub.jpg',  tier: 'starter', desc: 'NEET/JEE/IAS coaching with faculty profiles, result counter, and free demo class CTA.',          demo: 'https://wc-prodigyhub.vercel.app' },
      { name: 'AcademiaX',   img: '/imgs/tpl-academiax.jpg',   tier: 'growth',  desc: 'Modern ed-tech coaching site with live class schedule, video testimonials, and app download.',   demo: 'https://wc-academiax.vercel.app' },
      { name: 'Vidyapeeth',  img: '/imgs/tpl-vidyapeeth.jpg',  tier: 'growth',  desc: 'Traditional coaching with trust-building design, alumni results, and parent reviews.',           demo: 'https://wc-vidyapeeth.vercel.app' },
      { name: 'GyanPath',    img: '/imgs/tpl-gyanpath.jpg',    tier: 'premium', desc: 'Full coaching institute with online test series portal, doubt solver CTA, and rank predictor.',  demo: 'https://wc-gyanpath.vercel.app' },
      { name: 'EduElite',    img: '/imgs/tpl-eduelite.jpg',    tier: 'premium', desc: 'Premium institute with franchise model page, online admissions, scholarship form, and media room.', demo: 'https://wc-eduelite.vercel.app' },
    ],
  },
  {
    id: 'ngo',
    label: 'NGO & Non-Profit',
    icon: '🤝',
    color: '#14B8A6',
    templates: [
      { name: 'Akanksha', img: '/imgs/tpl-akanksha.jpg', tier: 'starter', desc: 'Community NGO with mission, programmes, volunteer signup, and donation CTA.',                          demo: 'https://wc-akanksha.vercel.app' },
      { name: 'Shakti',   img: '/imgs/tpl-shakti.jpg',   tier: 'starter', desc: 'Women empowerment NGO with impact stories, events calendar, and partner logos.',                      demo: 'https://wc-shakti.vercel.app' },
      { name: 'Arogya',   img: '/imgs/tpl-arogya.jpg',   tier: 'growth',  desc: 'Health & sanitation NGO with programme pages, beneficiary stats, and CSR partnership form.',          demo: 'https://wc-arogya.vercel.app' },
      { name: 'Dharitri', img: '/imgs/tpl-dharitri.jpg', tier: 'growth',  desc: 'Environment & sustainability NGO with tree-planting tracker, campaigns, and annual report.',          demo: 'https://wc-dharitri.vercel.app' },
      { name: 'Asha',     img: '/imgs/tpl-asha.jpg',     tier: 'premium', desc: 'FCRA-ready NGO site with donation gateway, project reports, trustees page, and media kit.',           demo: 'https://wc-asha.vercel.app' },
      { name: 'Prayas',   img: '/imgs/tpl-prayas.jpg',   tier: 'premium', desc: 'Multi-programme NGO with CMS-style blog, volunteer management, and grant tracking dashboard.',        demo: 'https://wc-prayas.vercel.app' },
    ],
  },
  {
    id: 'business',
    label: 'Business & Corporate',
    icon: '💼',
    color: '#8B5CF6',
    templates: [
      { name: 'Nexus',    img: '/imgs/tpl-nexus.jpg',     tier: 'starter', desc: 'Clean corporate identity with services, team, and contact form.',                                    demo: 'https://wc-nexus.vercel.app' },
      { name: 'Aashiyana',img: '/imgs/tpl-aashiyana.jpg', tier: 'starter', desc: 'Real estate & property business template with listings, amenities, and enquiry CTA.',               demo: 'https://wc-aashiyana.vercel.app' },
      { name: 'Vertex',   img: '/imgs/tpl-vertex.jpg',    tier: 'growth',  desc: 'B2B services company with case studies, client logos, proposal request, and blog.',                  demo: 'https://wc-vertex.vercel.app' },
      { name: 'Ignite',   img: '/imgs/tpl-ignite.jpg',    tier: 'growth',  desc: 'Startup & agency growth template with metrics section, investor pitch, and team showcase.',          demo: 'https://wc-ignite.vercel.app' },
      { name: 'Meridian', img: '/imgs/tpl-meridian.jpg',  tier: 'premium', desc: 'Enterprise-grade corporate site with multi-page structure, careers, press, and IR section.',         demo: 'https://wc-meridian.vercel.app' },
      { name: 'Arcadia',  img: '/imgs/tpl-arcadia.jpg',   tier: 'premium', desc: 'Premium consulting & advisory firm with thought leadership, case studies, and RFP system.',          demo: 'https://wc-arcadia.vercel.app' },
    ],
  },
];

const tierConfig = {
  starter: { label: 'Starter',  bg: 'rgba(255,255,255,0.06)', color: '#555' },
  growth:  { label: 'Growth',   bg: 'rgba(16,185,129,0.1)',   color: '#10B981' },
  premium: { label: 'Premium',  bg: 'rgba(245,158,11,0.1)',   color: '#F59E0B' },
};

const filters = [
  { id: 'all', label: 'All Templates' },
  ...niches.map(n => ({ id: n.id, label: n.label.split(' &')[0] })),
];

export default function TemplatesPage() {
  const [active, setActive] = useState('all');

  const visible = active === 'all' ? niches : niches.filter(n => n.id === active);
  const total = niches.reduce((s, n) => s + n.templates.length, 0);

  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-0">

        {/* ── Page hero ────────────────────────────────────── */}
        <section className="px-6 pt-40 pb-16 border-b border-[rgba(255,255,255,0.06)]">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <span className="section-label">Live Template Demos</span>
              <h1 className="font-serif font-black leading-[0.97] mt-3 mb-5"
                style={{ fontSize: 'clamp(3rem,7vw,5.5rem)' }}>
                Pick your niche.<br />
                <em className="not-italic" style={{ color: '#10B981' }}>Go live in 3 days.</em>
              </h1>
              <p className="text-[#777] text-lg leading-relaxed max-w-xl">
                {total} ready-made website templates across {niches.length} business categories.
                Fully designed, mobile-responsive, and customisable with your brand.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── Sticky filter bar ────────────────────────────── */}
        <div className="sticky top-[65px] z-40 bg-[rgba(8,8,8,0.95)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.06)] px-6 py-4">
          <div className="max-w-6xl mx-auto flex items-center gap-2 overflow-x-auto scrollbar-hide">
            {filters.map(f => (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={`flex-shrink-0 text-[0.8rem] font-medium px-4 py-2 rounded-full border transition-all duration-200 ${
                  active === f.id
                    ? 'bg-[#10B981] border-[#10B981] text-[#080808] font-semibold'
                    : 'border-[rgba(255,255,255,0.1)] text-[#666] hover:text-[#f0f0f0] hover:border-[rgba(255,255,255,0.2)]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Template sections ─────────────────────────────── */}
        <AnimatePresence mode="wait">
          {visible.map(niche => (
            <motion.section
              key={niche.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="px-6 py-20 border-b border-[rgba(255,255,255,0.05)]"
            >
              <div className="max-w-6xl mx-auto">

                {/* Niche header */}
                <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
                  <div>
                    <div className="text-3xl mb-3">{niche.icon}</div>
                    <h2 className="font-serif text-3xl font-bold" style={{ color: niche.color }}>{niche.label}</h2>
                    <p className="text-[#444] text-sm mt-1">{niche.templates.length} templates · Starter / Growth / Premium</p>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-[#444]">
                    <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#444]" />Starter</span>
                    <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#10B981]" />Growth</span>
                    <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#F59E0B]" />Premium</span>
                  </div>
                </Reveal>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {niche.templates.map((t, i) => (
                    <Reveal key={t.name} delay={i * 0.05}>
                      <div className="card overflow-hidden flex flex-col group">
                        {/* Preview image */}
                        <div className="relative aspect-[16/10] overflow-hidden bg-[#1a1a1a]">
                          <img
                            src={t.img}
                            alt={t.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <a
                              href={t.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[0.8rem] font-semibold bg-[#10B981] text-[#080808] px-4 py-2 rounded-full"
                            >
                              Live Demo →
                            </a>
                          </div>
                        </div>

                        {/* Card body */}
                        <div className="p-5 flex flex-col gap-3 flex-1">
                          <span
                            className="text-[0.65rem] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full self-start"
                            style={{ background: tierConfig[t.tier].bg, color: tierConfig[t.tier].color }}
                          >
                            {tierConfig[t.tier].label}
                          </span>
                          <h3 className="font-serif text-lg font-bold text-[#f0f0f0]">{t.name}</h3>
                          <p className="text-[#666] text-xs leading-relaxed flex-1">{t.desc}</p>
                          <div className="flex items-center justify-between pt-4 border-t border-[rgba(255,255,255,0.05)]">
                            <a
                              href="https://wa.me/917255961822?text=Hi%20Vridhi%20Studio%2C%20I%20want%20to%20get%20started%20with%20a%20template"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs font-semibold text-[#10B981] hover:text-[#34D399] transition-colors"
                            >
                              Get this →
                            </a>
                            <a
                              href={t.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-[#444] hover:text-[#888] transition-colors"
                            >
                              Live demo ↗
                            </a>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>

              </div>
            </motion.section>
          ))}
        </AnimatePresence>

        {/* ── CTA banner ───────────────────────────────────── */}
        <section className="px-6 py-24 text-center">
          <div className="max-w-2xl mx-auto">
            <Reveal>
              <h2 className="font-serif font-black leading-tight mb-4"
                style={{ fontSize: 'clamp(2rem,4.5vw,3.2rem)' }}>
                Like what you see?<br />
                <em className="not-italic" style={{ color: '#10B981' }}>Let's make it yours.</em>
              </h2>
              <p className="text-[#777] text-lg mb-10">
                Pick any template, tell us your business name, and we'll go live in 3 days. No designer needed.
              </p>
              <a
                href="https://wa.me/917255961822?text=Hi%20Vridhi%20Studio%2C%20I%20want%20to%20get%20started%20with%20a%20template"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Start on WhatsApp →
              </a>
            </Reveal>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
