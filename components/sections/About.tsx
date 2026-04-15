'use client';
import Reveal from '@/components/Reveal';

const metrics = [
  { value: '50+',    label: 'Happy clients worldwide' },
  { value: '36+',    label: 'Live template demos' },
  { value: '3 days', label: 'Average delivery time' },
  { value: '0',      label: 'Hidden charges. Ever.' },
];

export default function About() {
  return (
    <section id="about" className="section-pad px-6 bg-[#0c0c0c]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          <Reveal>
            <span className="section-label">About us</span>
            <h2 className="font-serif font-black leading-tight mt-3 mb-6"
              style={{ fontSize: 'clamp(2.4rem,5.5vw,3.8rem)' }}>
              We don't just build websites.<br />
              <em className="not-italic" style={{ color: '#10B981' }}>We build businesses.</em>
            </h2>
            <p className="text-[#777] leading-relaxed mb-4 text-sm">
              Vridhi Studio was built by a team of developers and digital strategists who combine technical depth with real-world business understanding. We've worked with founders across India, Southeast Asia, and beyond — from early-stage startups to established businesses.
            </p>
            <p className="text-[#777] leading-relaxed mb-8 text-sm">
              Legally registered, digitally present, and actively growing — that's the promise we make to every business we work with.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://wa.me/917255961822" target="_blank" rel="noopener noreferrer" className="btn-primary">Talk to us →</a>
              <a href="mailto:hello@vridhi.dev" className="btn-ghost">hello@vridhi.dev</a>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
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
      </div>
    </section>
  );
}
