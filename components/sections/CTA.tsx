export default function CTA() {
  return (
    <section id="contact" className="section-pad px-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative glass rounded-3xl overflow-hidden p-10 md:p-16 text-center">
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(16,185,129,0.08) 0%, transparent 70%)' }} />

          <div className="relative z-10 flex flex-col items-center gap-6">
            <div className="tag">Let's build something</div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-[#F8FAFC] leading-tight">
              Ready to go digital
              <br />
              <span className="text-gradient-emerald">the right way?</span>
            </h2>
            <p className="max-w-lg text-[#94A3B8] text-lg leading-relaxed">
              15-minute free call. No obligation. We'll tell you exactly what you need — and what you don't.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="https://wa.me/919693245941?text=Hi%20Vridhi%20Studio%2C%20I%20want%20a%20free%20consultation" target="_blank" rel="noopener noreferrer" className="btn-emerald text-base">
                📲 WhatsApp Us Now
              </a>
              <a href="mailto:hello@vridhi.dev" className="btn-outline text-base">
                ✉ hello@vridhi.dev
              </a>
            </div>
            <p className="text-xs text-[#475569]">Usually respond within 30 minutes · Mon–Sat, 9am–9pm IST</p>
          </div>
        </div>
      </div>
    </section>
  );
}
