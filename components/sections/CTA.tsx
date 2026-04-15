'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function CTA() {
  const ref = useScrollReveal();
  return (
    <section id="contact" ref={ref as React.RefObject<HTMLElement>} className="section-pad px-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative card overflow-hidden p-12 md:p-20 text-center">
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 110%, rgba(16,185,129,0.07) 0%, transparent 70%)' }} />
          <div className="relative z-10">
            <div data-reveal>
              <span className="section-label mx-auto">Let's build something</span>
            </div>
            <h2 data-reveal data-delay="1" className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-tight mt-4 mb-6">
              Ready to go digital<br /><em className="text-[#10B981]">the right way?</em>
            </h2>
            <p data-reveal data-delay="2" className="text-[#888] text-lg leading-relaxed max-w-lg mx-auto mb-10">
              15-minute free call. No obligation. We'll tell you exactly what you need — and what you don't.
            </p>
            <div data-reveal data-delay="3" className="flex flex-wrap items-center justify-center gap-4 mb-6">
              <a href="https://wa.me/917255961822?text=Hi%20Vridhi%20Studio%2C%20I%20want%20a%20free%20consultation" target="_blank" rel="noopener noreferrer" className="btn-primary">
                📲 WhatsApp Us Now
              </a>
              <a href="mailto:hello@vridhi.dev" className="btn-ghost">✉ hello@vridhi.dev</a>
            </div>
            <p data-reveal data-delay="4" className="text-xs text-[#555]">Usually respond within 30 minutes · Mon–Sat, 9am–9pm IST</p>
          </div>
        </div>
      </div>
    </section>
  );
}
