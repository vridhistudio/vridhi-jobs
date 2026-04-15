'use client';
import Reveal from '@/components/Reveal';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Owner, Sharma Restaurant',
    quote: "After the website went live, we started getting 3× more calls. We went from invisible to ranking at the top of local search. Vridhi Studio delivered exactly what they promised.",
    initials: 'PS',
    color: '#10B981',
  },
  {
    name: 'Rahul Mehta',
    role: 'Director, MediCare Clinic',
    quote: "Got company registration and website from one place. In 7 days we had our incorporation certificate, GST, and a live website. Incredibly professional team.",
    initials: 'RM',
    color: '#F59E0B',
  },
  {
    name: 'Ankit Gupta',
    role: 'Founder, BrightPath Coaching',
    quote: "The ad campaign brought 40+ new admissions in the first month on a modest budget. These guys focus on results, not just deliverables. Highest ROI I've seen.",
    initials: 'AG',
    color: '#6366F1',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad px-6">
      <div className="max-w-6xl mx-auto">

        <Reveal className="mb-16">
          <span className="section-label">Client stories</span>
          <h2 className="font-serif font-black leading-tight mt-3"
            style={{ fontSize: 'clamp(2.4rem,5.5vw,3.8rem)' }}>
            Real results.<br /><em className="not-italic" style={{ color: '#10B981' }}>Real businesses.</em>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-px bg-[rgba(255,255,255,0.05)] rounded-2xl overflow-hidden">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div className="bg-[#080808] p-10 flex flex-col gap-6 h-full">
                <div className="text-[#F59E0B] text-sm tracking-wider select-none">★★★★★</div>
                <p className="text-[#777] text-sm leading-relaxed flex-1">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-6 border-t border-[rgba(255,255,255,0.05)]">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-[#080808] flex-shrink-0" style={{ background: t.color }}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#f0f0f0]">{t.name}</div>
                    <div className="text-xs text-[#555]">{t.role}</div>
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
