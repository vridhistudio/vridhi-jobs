export default function CTA() {
  return (
    <section id="contact" className="section-pad px-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative glass rounded-3xl overflow-hidden p-10 md:p-16 text-center">
          {/* Background glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(16,185,129,0.08) 0%, transparent 70%)',
            }}
          />

          <div className="relative z-10 flex flex-col items-center gap-6">
            <div className="tag">Let's build together</div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-[#F8FAFC] leading-tight">
              Have an idea?
              <br />
              <span className="text-gradient-emerald">Let's make it real.</span>
            </h2>
            <p className="max-w-lg text-[#94A3B8] text-lg leading-relaxed">
              We take on a handful of projects each month to give every client our full focus.
              Reach out early — let's talk scope and timeline.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="mailto:hello@vridhi.dev" className="btn-emerald text-base">
                hello@vridhi.dev →
              </a>
              <a href="https://wa.me/919XXXXXXXXX" className="btn-outline text-base">
                WhatsApp us
              </a>
            </div>
            {/* Trust micro-copy */}
            <div className="flex flex-wrap justify-center gap-6 mt-2 text-xs text-[#475569]">
              <span>✓ Reply within 24 hours</span>
              <span>✓ Free 30-min strategy call</span>
              <span>✓ Fixed-price quotes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
