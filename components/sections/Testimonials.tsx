'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Owner, Sharma Restaurant',
    quote: 'After the website went live, we started getting 3× more calls. We went from invisible to ranking at the top of local search. Vridhi Studio delivered exactly what they promised.',
    initials: 'PS',
    color: '#10B981',
  },
  {
    name: 'Rahul Mehta',
    role: 'Director, MediCare Clinic',
    quote: 'Got company registration and website from one place. In 7 days we had our incorporation certificate, GST, and a live website. Incredibly professional team.',
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
  const ref = useScrollReveal();
  return (
    <section id="testimonials" ref={ref as React.RefObject<HTMLElement>} className="section-pad px-6 bg-[#0c0c0c]">
      <div className="max-w-6xl mx-auto">

        <div className="mb-16" data-reveal>
          <span className="section-label">Client stories</span>
          <h2 className="font-serif font-black leading-tight mt-3"
            style={{ fontSize: 'clamp(2.4rem,5.5vw,3.8rem)' }}>
            Real results.<br /><em className="not-italic" style={{ color: '#10B981' }}>Real businesses.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-[rgba(255,255,255,0.05)] rounded-2xl overflow-hidden">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              data-reveal
              data-delay={String(i + 1)}
              className="bg-[#080808] p-10 flex flex-col gap-6"
            >
              <div className="text-[#F59E0B] text-sm tracking-wider select-none">★★★★★</div>
              <p className="text-[#666] text-sm leading-relaxed flex-1">"{t.quote}"</p>
              <div className="flex items-center gap-3 pt-6 border-t border-[rgba(255,255,255,0.05)]">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-[#080808] flex-shrink-0"
                  style={{ background: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#f0f0f0]">{t.name}</div>
                  <div className="text-xs text-[#444]">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
