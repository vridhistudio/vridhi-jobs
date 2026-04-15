const steps = [
  {
    n: '01',
    title: 'Discovery',
    desc: 'We learn your goals, users, and constraints. 1–2 calls, a detailed brief, and a fixed-scope proposal — no ambiguity.',
  },
  {
    n: '02',
    title: 'Design',
    desc: 'Wireframes → high-fidelity mockups. We design in Figma, iterate fast, and only build once you love what you see.',
  },
  {
    n: '03',
    title: 'Build',
    desc: 'Weekly previews, a shared task board, and direct access to the engineers writing your code. No layers of PM overhead.',
  },
  {
    n: '04',
    title: 'Launch',
    desc: 'CI/CD, monitoring, and a smooth handoff. We stay on for 30 days post-launch. Your product ships on time.',
  },
];

export default function Process() {
  return (
    <section id="process" className="section-pad px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <div className="tag mb-4">How we work</div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#F8FAFC] leading-tight">
            From idea to live
            <br />
            <span className="text-gradient-emerald">in weeks, not months</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#10B981]/20 to-transparent" />

          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="flex flex-col gap-4">
                {/* Number circle */}
                <div className="w-14 h-14 rounded-full glass border border-[#10B981]/25 flex items-center justify-center">
                  <span className="font-mono text-sm font-bold text-[#10B981]">{s.n}</span>
                </div>
                <h3 className="text-lg font-display font-bold text-[#F8FAFC]">{s.title}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
