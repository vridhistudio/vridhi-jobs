'use client';
import Reveal from '@/components/Reveal';

const categories = [
  { n: '01', title: 'Clinic & Hospital',       count: 5, desc: 'OPD, multi-specialty, dental, skin clinics',          color: '#10B981', bg: 'rgba(16,185,129,0.05)'  },
  { n: '02', title: 'Restaurant & Food',        count: 6, desc: 'Fine dining, fast food, cloud kitchens, cafés',       color: '#F59E0B', bg: 'rgba(245,158,11,0.05)'  },
  { n: '03', title: 'Gym & Fitness',            count: 7, desc: 'Gyms, yoga studios, sports academies',               color: '#EC4899', bg: 'rgba(236,72,153,0.05)'  },
  { n: '04', title: 'Coaching & Education',     count: 6, desc: 'Competitive exams, institutes, e-learning',          color: '#6366F1', bg: 'rgba(99,102,241,0.05)'  },
  { n: '05', title: 'NGO & Non-Profit',         count: 6, desc: 'Fundraising, welfare, social organisations',         color: '#14B8A6', bg: 'rgba(20,184,166,0.05)'  },
  { n: '06', title: 'Business & Corporate',     count: 6, desc: 'Consultancies, agencies, trading companies',         color: '#8B5CF6', bg: 'rgba(139,92,246,0.05)'  },
];

export default function Work() {
  return (
    <section id="work" className="section-pad px-6">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <Reveal>
            <span className="section-label">Our work</span>
            <h2 className="font-serif font-black leading-tight mt-3"
              style={{ fontSize: 'clamp(2.4rem,5.5vw,3.8rem)' }}>
              Templates built<br /><em className="not-italic" style={{ color: '#10B981' }}>for the world.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="text-[#777] max-w-xs leading-relaxed text-sm">
            36+ live demos across 6 industries. Ready to launch in 3 days, fully customised to your brand.
          </Reveal>
        </div>

        {/* Color block grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(255,255,255,0.05)] rounded-2xl overflow-hidden mb-6">
          {categories.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 0.06}>
              <div className="bg-[#080808] hover:bg-[#0f0f0f] transition-colors duration-300 p-9 flex flex-col gap-5 cursor-default h-full">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#333]">{c.n}</span>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full" style={{ color: c.color, background: c.bg }}>
                    {c.count} designs
                  </span>
                </div>
                <div className="w-8 h-[2px] rounded-full" style={{ background: c.color }} />
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-bold text-[#f0f0f0] mb-2">{c.title}</h3>
                  <p className="text-[#555] text-sm leading-relaxed">{c.desc}</p>
                </div>
                <span className="text-xs text-[#333] font-mono">Ready to launch →</span>
              </div>
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
            <a href="https://wa.me/917255961822?text=Hi%20Vridhi%20Studio%2C%20I%20want%20to%20start%20a%20website%20project" target="_blank" rel="noopener noreferrer" className="btn-primary flex-shrink-0">
              Start on WhatsApp →
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
