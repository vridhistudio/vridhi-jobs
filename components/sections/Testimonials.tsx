'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const testimonials = [
  { name: 'Priya Sharma', role: 'Owner, Sharma Restaurant · Patna', quote: 'After the website went live, I started getting 3x more phone calls. We went from invisible to ranking at the top of Google. Vridhi Studio delivered exactly what they promised.', initials: 'PS', color: '#10B981' },
  { name: 'Rahul Mehta', role: 'Director, MediCare Clinic · Lucknow', quote: "Got both company registration and website from one place. In 7 days we had our GST certificate, company incorporation, and live website. Incredibly professional team.", initials: 'RM', color: '#F59E0B' },
  { name: 'Ankit Gupta', role: 'Founder, BrightPath Coaching · Varanasi', quote: 'The Facebook ad campaign brought 40+ admissions in the first month on a small budget. These guys focus on results, not just deliverables. Highest ROI I\'ve seen.', initials: 'AG', color: '#6366F1' },
];

export default function Testimonials() {
  const ref = useScrollReveal();
  return (
    <section id="testimonials" ref={ref as React.RefObject<HTMLElement>} className="section-pad px-6 bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14" data-reveal>
          <span className="section-label">Client stories</span>
          <h2 className="font-serif text-[clamp(2.2rem,5vw,3.5rem)] font-black leading-tight mt-2">
            Real results.<br /><em className="text-[#10B981]">Real businesses.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div key={t.name} data-reveal data-delay={String(i + 1)} className="card p-8 flex flex-col gap-4">
              <div className="text-[#F59E0B] text-sm tracking-wider">★★★★★</div>
              <p className="text-[#888] text-sm leading-relaxed flex-1">"{t.quote}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-[rgba(255,255,255,0.06)]">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-[#080808]" style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}99)` }}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#f0f0f0]">{t.name}</div>
                  <div className="text-xs text-[#555]">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
