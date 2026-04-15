'use client';
import Reveal from '@/components/Reveal';

export default function CTA() {
  return (
    <section id="contact" className="section-pad px-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[#0d0d0d] p-12 md:p-20 text-center">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 110%, rgba(16,185,129,0.09) 0%, transparent 70%)' }} />
          <div className="relative z-10">
            <Reveal>
              <span className="section-label mx-auto">Let's build something</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif font-black leading-tight mt-4 mb-6"
                style={{ fontSize: 'clamp(2.5rem,6vw,4.5rem)' }}>
                Ready to go digital<br /><em className="not-italic" style={{ color: '#10B981' }}>the right way?</em>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-[#777] text-lg leading-relaxed max-w-lg mx-auto mb-10">
                15-minute free call. No obligation. We'll tell you exactly what you need — and what you don't.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
                <a href="https://wa.me/917255961822?text=Hi%20Vridhi%20Studio%2C%20I%20want%20a%20free%20consultation" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  WhatsApp Us Now →
                </a>
                <a href="mailto:hello@vridhi.dev" className="btn-ghost">hello@vridhi.dev</a>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <p className="text-xs text-[#444]">Usually respond within 30 minutes · Mon–Sat, 9am–9pm IST</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
