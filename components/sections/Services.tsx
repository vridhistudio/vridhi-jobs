const services = [
  {
    icon: '⬡',
    title: 'Web Development',
    desc: 'Full-stack web apps built with Next.js, React, and Laravel. From marketing sites to complex SaaS dashboards — pixel-perfect and production-ready.',
    tags: ['Next.js', 'React', 'Laravel', 'TypeScript'],
    price: 'From $1,200',
  },
  {
    icon: '◎',
    title: 'Mobile Apps',
    desc: 'Cross-platform apps with React Native. iOS + Android from a single codebase. Clean UX, native feel, built to scale.',
    tags: ['React Native', 'Expo', 'iOS', 'Android'],
    price: 'From $2,500',
  },
  {
    icon: '⬟',
    title: 'AI Automation',
    desc: 'Custom AI workflows, chatbots, and automation systems that save hours every day. OpenAI, Anthropic, and custom LLM integrations.',
    tags: ['OpenAI', 'Anthropic', 'n8n', 'Python'],
    price: 'From $800',
  },
  {
    icon: '◈',
    title: 'SaaS Products',
    desc: 'End-to-end SaaS development — architecture, auth, billing, dashboard, and launch. We turn MVPs into scalable businesses.',
    tags: ['Supabase', 'Stripe', 'Vercel', 'PostgreSQL'],
    price: 'From $3,500',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-pad px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <div className="tag mb-4">What we do</div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#F8FAFC] leading-tight">
            Services built for
            <br />
            <span className="text-gradient-emerald">ambitious founders</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="glass glass-hover rounded-2xl p-8 flex flex-col gap-4 group transition-all duration-300 cursor-default"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-3xl text-[#10B981]">{s.icon}</span>
                <span className="text-xs font-mono text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/20 rounded-full px-3 py-1">
                  {s.price}
                </span>
              </div>
              <h3 className="text-xl font-display font-bold text-[#F8FAFC]">{s.title}</h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed">{s.desc}</p>
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {s.tags.map((t) => (
                  <span key={t} className="text-xs font-mono text-[#475569] border border-white/5 rounded-full px-2.5 py-0.5">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
