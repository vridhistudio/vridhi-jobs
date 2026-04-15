'use client';
import Reveal from '@/components/Reveal';

const metrics = [
  { value: '50+',    label: 'Happy clients worldwide' },
  { value: '36+',    label: 'Live template demos' },
  { value: '3 days', label: 'Average delivery time' },
  { value: '0',      label: 'Hidden charges. Ever.' },
];

const team = [
  {
    name: 'Vikram S.',
    role: 'Founder & Full-Stack Developer',
    bio: 'Builds everything from Next.js frontends to Laravel APIs. Ships fast without cutting corners.',
    initials: 'VS',
    color: '#10B981',
  },
  {
    name: 'Priya K.',
    role: 'UI/UX & Brand Designer',
    bio: 'Turns briefs into pixel-perfect products. Obsessed with typography, spacing, and first impressions.',
    initials: 'PK',
    color: '#6366F1',
  },
  {
    name: 'Rahul A.',
    role: 'Growth & Campaigns Lead',
    bio: 'Runs Meta and Google ads that actually convert. Has managed ₹50L+ in ad spend across verticals.',
    initials: 'RA',
    color: '#F59E0B',
  },
];

export default function About() {
  return (
    <section id="about" className="section-pad px-6">
      <div className="max-w-6xl mx-auto">

        {/* Top: story + metrics */}
        <div className="grid md:grid-cols-2 gap-14 items-center mb-20">
          <Reveal>
            <span className="section-label">About us</span>
            <h2 className="font-serif font-black leading-tight mt-3 mb-6"
              style={{ fontSize: 'clamp(2.4rem,5.5vw,3.8rem)' }}>
              We don't just build websites.<br />
              <em className="not-italic" style={{ color: '#10B981' }}>We build businesses.</em>
            </h2>
            <p className="text-[#777] leading-relaxed mb-4 text-sm">
              Vridhi Studio is a small, senior team — developers, designers, and marketers who move fast and take ownership. We've worked with founders across India, Southeast Asia, and the Middle East, from first-time entrepreneurs to funded startups.
            </p>
            <p className="text-[#777] leading-relaxed mb-8 text-sm">
              No account managers, no handoffs — you work directly with the people building your product. That's why we deliver in days, not months.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://wa.me/917255961822" target="_blank" rel="noopener noreferrer" className="btn-primary">Talk to us →</a>
              <a href="mailto:hello@vridhi.dev" className="btn-ghost">hello@vridhi.dev</a>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="grid grid-cols-2 gap-px bg-[rgba(255,255,255,0.05)] rounded-2xl overflow-hidden">
              {metrics.map((m) => (
                <div key={m.label} className="bg-[#080808] p-8 flex flex-col gap-2">
                  <div className="font-serif text-4xl font-black" style={{ color: '#10B981' }}>{m.value}</div>
                  <div className="text-sm text-[#666] leading-snug">{m.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Team */}
        <Reveal>
          <div className="mb-10">
            <span className="section-label">The team</span>
            <h3 className="font-serif text-2xl font-bold mt-2">
              People behind the work
            </h3>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {team.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div className="card p-7 flex flex-col gap-4">
                {/* Avatar */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold text-[#080808] flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}99)` }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-[#f0f0f0] text-sm">{t.name}</div>
                    <div className="text-xs text-[#555] mt-0.5">{t.role}</div>
                  </div>
                </div>
                {/* Bio */}
                <p className="text-[#666] text-sm leading-relaxed">{t.bio}</p>
                {/* Accent line */}
                <div className="w-8 h-0.5 rounded-full mt-auto" style={{ background: t.color }} />
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
