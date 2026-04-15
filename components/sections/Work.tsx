const projects = [
  {
    title: 'Jeevan Jalsa Foundation',
    category: 'NGO Platform',
    desc: 'Full-stack NGO platform with member management, certificate generation, donation tracking, and admin CMS. Laravel API + Tailwind frontend.',
    stack: ['Laravel', 'MySQL', 'Tailwind', 'HTML'],
    color: '#F5C400',
    year: '2025',
  },
  {
    title: 'Jist Dedication Social Foundation',
    category: 'Non-profit Website',
    desc: 'Donation portal, volunteer management, and public-facing website for a social foundation with payment integration and content management.',
    stack: ['Laravel', 'MySQL', 'Tailwind'],
    color: '#10B981',
    year: '2025',
  },
  {
    title: 'ExamCraft',
    category: 'EdTech SaaS',
    desc: 'Competitive exam preparation SaaS — question banks, mock tests, analytics, and leaderboards. Built for scale from day one.',
    stack: ['Next.js', 'Supabase', 'TypeScript'],
    color: '#6366F1',
    year: '2025',
  },
  {
    title: 'ECCI',
    category: 'Corporate Website',
    desc: 'Corporate information system with custom CMS, event management, and multilingual content support for an international organization.',
    stack: ['Next.js', 'Laravel', 'PostgreSQL'],
    color: '#F59E0B',
    year: '2025',
  },
];

export default function Work() {
  return (
    <section id="work" className="section-pad px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="tag mb-4">Selected work</div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#F8FAFC] leading-tight">
              Products we've
              <br />
              <span className="text-gradient-emerald">shipped</span>
            </h2>
          </div>
          <p className="text-[#475569] text-sm max-w-xs">
            Real projects. Real clients. Real growth.
          </p>
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="glass glass-hover rounded-2xl overflow-hidden group transition-all duration-300 cursor-default"
            >
              {/* Color bar */}
              <div
                className="h-1.5 w-full"
                style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }}
              />
              <div className="p-8 flex flex-col gap-3">
                <div className="flex items-center justify-between gap-2">
                  <span
                    className="text-xs font-mono font-semibold tracking-widest uppercase"
                    style={{ color: p.color }}
                  >
                    {p.category}
                  </span>
                  <span className="text-xs text-[#475569] font-mono">{p.year}</span>
                </div>
                <h3 className="text-xl font-display font-bold text-[#F8FAFC]">{p.title}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {p.stack.map((t) => (
                    <span key={t} className="text-xs font-mono text-[#475569] border border-white/5 rounded-full px-2.5 py-0.5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
