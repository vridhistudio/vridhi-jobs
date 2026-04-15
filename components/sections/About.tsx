const metrics = [
  { value: '50+', label: 'Happy clients worldwide' },
  { value: '36+', label: 'Live template demos across 6 niches' },
  { value: '3 days', label: 'Average website delivery time' },
  { value: '0', label: 'Hidden charges. Ever.' },
];

export default function About() {
  return (
    <section id="about" className="section-pad px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="tag">About us</div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#F8FAFC] leading-tight">
              We don't just build
              <br />
              <span className="text-gradient-emerald">websites. We build businesses.</span>
            </h2>
            <p className="text-[#94A3B8] leading-relaxed">
              Vridhi Studio was built by a team of developers and digital strategists who combine
              technical depth with real-world business understanding. We've worked with founders
              across India, Southeast Asia, and beyond — from early-stage startups to established businesses.
            </p>
            <p className="text-[#94A3B8] leading-relaxed">
              Legally registered, digitally present, and actively growing — that's the promise we
              make to every business we work with.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://wa.me/917255961822" target="_blank" rel="noopener noreferrer" className="btn-emerald text-sm">
                Talk to us →
              </a>
              <a href="mailto:hello@vridhi.dev" className="btn-outline text-sm">
                hello@vridhi.dev
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {metrics.map((m) => (
              <div key={m.label} className="glass rounded-2xl p-6 flex flex-col gap-2">
                <div className="text-3xl font-display font-bold text-gradient-emerald">{m.value}</div>
                <div className="text-sm text-[#94A3B8] leading-snug">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
