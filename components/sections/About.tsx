'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const metrics = [
  { value: '50+', label: 'Happy clients worldwide' },
  { value: '36+', label: 'Live template demos' },
  { value: '3 days', label: 'Average delivery time' },
  { value: '0', label: 'Hidden charges. Ever.' },
];

export default function About() {
  const ref = useScrollReveal();
  return (
    <section id="about" ref={ref as React.RefObject<HTMLElement>} className="section-pad px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div data-reveal>
            <span className="section-label">About us</span>
            <h2 className="font-serif text-[clamp(2.2rem,5vw,3.5rem)] font-black leading-tight mt-2 mb-6">
              We don't just build websites.<br /><em className="text-[#10B981]">We build businesses.</em>
            </h2>
            <p className="text-[#888] leading-relaxed mb-4">
              Vridhi Studio was built by a team of developers and digital strategists who combine technical depth with real-world business understanding. We've worked with founders across India, Southeast Asia, and beyond — from early-stage startups to established businesses.
            </p>
            <p className="text-[#888] leading-relaxed mb-8">
              Legally registered, digitally present, and actively growing — that's the promise we make to every business we work with.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://wa.me/917255961822" target="_blank" rel="noopener noreferrer" className="btn-primary">Talk to us →</a>
              <a href="mailto:hello@vridhi.dev" className="btn-ghost">hello@vridhi.dev</a>
            </div>
          </div>

          <div data-reveal data-delay="1" className="grid grid-cols-2 gap-4">
            {metrics.map((m) => (
              <div key={m.label} className="card p-7">
                <div className="font-serif text-4xl font-black mb-2" style={{ color: '#10B981' }}>{m.value}</div>
                <div className="text-sm text-[#888] leading-snug">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
