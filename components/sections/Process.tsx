'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const steps = [
  {
    n: '01',
    title: 'Discovery Call',
    desc: 'WhatsApp or phone — 15 minutes. We understand your business, goals, and what you actually need.',
  },
  {
    n: '02',
    title: 'Design & Build',
    desc: 'We customise the right template or build from scratch. Weekly progress updates throughout.',
  },
  {
    n: '03',
    title: 'Review & Launch',
    desc: 'You review, request changes, we polish and push live. Domain & hosting setup included.',
  },
  {
    n: '04',
    title: 'Grow Together',
    desc: 'Ongoing maintenance, ad campaigns, and new features as your business scales.',
  },
];

export default function Process() {
  const ref = useScrollReveal();
  return (
    <section id="process" ref={ref as React.RefObject<HTMLElement>} className="section-pad px-6 bg-[#0c0c0c]">
      <div className="max-w-6xl mx-auto">

        <div className="mb-20" data-reveal>
          <span className="section-label">How it works</span>
          <h2 className="font-serif font-black leading-tight mt-3"
            style={{ fontSize: 'clamp(2.4rem,5.5vw,3.8rem)' }}>
            Simple as <em className="not-italic" style={{ color: '#10B981' }}>1, 2, 3, 4.</em>
          </h2>
        </div>

        {/* Steps as a horizontal row on desktop, vertical on mobile */}
        <div className="grid md:grid-cols-4 gap-px bg-[rgba(255,255,255,0.05)] rounded-2xl overflow-hidden">
          {steps.map((s, i) => (
            <div
              key={s.n}
              data-reveal
              data-delay={String(i + 1)}
              className="bg-[#080808] p-9 flex flex-col gap-5"
            >
              <span className="font-mono text-xs text-[#10B981]">{s.n}</span>
              <div className="w-6 h-px bg-[rgba(255,255,255,0.1)]" />
              <h3 className="font-serif text-lg font-bold text-[#f0f0f0]">{s.title}</h3>
              <p className="text-[#555] text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
