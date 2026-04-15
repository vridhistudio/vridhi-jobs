'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const steps = [
  { n: '01', title: 'Discovery Call', desc: 'WhatsApp or phone call. We understand your business, goals, and budget in 15 minutes.' },
  { n: '02', title: 'Design & Build', desc: 'We customise the right template or build from scratch. You get weekly progress updates.' },
  { n: '03', title: 'Review & Launch', desc: 'You review, request changes, we polish and push live. Domain setup included.' },
  { n: '04', title: 'Grow Together', desc: 'Ongoing maintenance, ad campaigns, and new features as your business scales.' },
];

export default function Process() {
  const ref = useScrollReveal();
  return (
    <section id="process" ref={ref as React.RefObject<HTMLElement>} className="section-pad px-6 bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14" data-reveal>
          <span className="section-label">How it works</span>
          <h2 className="font-serif text-[clamp(2.2rem,5vw,3.5rem)] font-black leading-tight mt-2">
            Simple as <em className="text-[#10B981]">1, 2, 3, 4.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <div key={s.n} data-reveal data-delay={String(i + 1)} className="flex flex-col gap-4">
              <div className="w-14 h-14 rounded-full border border-[rgba(16,185,129,0.25)] bg-[rgba(16,185,129,0.06)] flex items-center justify-center">
                <span className="font-mono text-sm font-bold text-[#10B981]">{s.n}</span>
              </div>
              <h3 className="font-serif text-lg font-bold">{s.title}</h3>
              <p className="text-[#888] text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
