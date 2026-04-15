'use client';
import Reveal from '@/components/Reveal';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Owner, Aura Health Clinic',
    location: 'Singapore',
    quote: "We went from zero online presence to fully booked in two months. The site loads in under 2 seconds, the WhatsApp booking flow is seamless, and I didn't have to explain anything technical — they just handled it.",
    metric: '3× bookings',
    initials: 'PS',
    color: '#10B981',
  },
  {
    name: 'Marcus R.',
    role: 'Director, Ember & Salt',
    location: 'Dubai, UAE',
    quote: "Our old site was embarrassing for a fine dining brand. What Vridhi delivered felt like a proper agency production — the table reservation flow, the photography layout, the mobile experience. Guests actually compliment it.",
    metric: '+140% reservations',
    initials: 'MR',
    color: '#F59E0B',
  },
  {
    name: 'Ankit Gupta',
    role: 'Founder, BrightPath Academy',
    location: 'India',
    quote: "The Meta campaign brought 40+ real admissions in month one on a modest budget. They set up the targeting, wrote the creatives, and optimised it week by week. I just had to handle the calls.",
    metric: '40+ enrolments',
    initials: 'AG',
    color: '#6366F1',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad px-6 bg-[#0c0c0c]">
      <div className="max-w-6xl mx-auto">

        <Reveal className="mb-16">
          <span className="section-label">Client stories</span>
          <h2 className="font-serif font-black leading-tight mt-3"
            style={{ fontSize: 'clamp(2.4rem,5.5vw,3.8rem)' }}>
            Real results.<br /><em className="not-italic" style={{ color: '#10B981' }}>Real businesses.</em>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div className="card p-8 flex flex-col gap-5 h-full">

                {/* Stars + metric badge */}
                <div className="flex items-center justify-between">
                  <div className="text-[#F59E0B] text-sm tracking-wider select-none">★★★★★</div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full"
                    style={{ color: t.color, background: `${t.color}12`, border: `1px solid ${t.color}25` }}>
                    {t.metric}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-[#777] text-sm leading-relaxed flex-1">"{t.quote}"</p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-5 border-t border-[rgba(255,255,255,0.05)]">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-[#080808] flex-shrink-0"
                    style={{ background: t.color }}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#f0f0f0]">{t.name}</div>
                    <div className="text-xs text-[#555]">{t.role} · {t.location}</div>
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
