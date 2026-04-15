const categories = [
  {
    icon: '🏥',
    title: 'Clinic & Hospital',
    count: 5,
    desc: 'OPD, multi-specialty, dental, skin clinics',
    color: '#10B981',
    templates: ['CarePoint', 'Swasthya Seva', 'MedCore', 'DermaGlow', 'ApexMed'],
  },
  {
    icon: '🍽️',
    title: 'Restaurant & Dhaba',
    count: 6,
    desc: 'Fine dining, fast food, dhabas, cloud kitchens',
    color: '#F59E0B',
    templates: ['SpiceRoute', "Devi's Kitchen", 'Ember & Salt', 'Botanica', 'Avadh', 'Rasayan'],
  },
  {
    icon: '💪',
    title: 'Gym & Fitness',
    count: 7,
    desc: 'Gyms, yoga studios, sports academies',
    color: '#EC4899',
    templates: ['StudioZen', 'FormX', 'IronPath', 'PeakZone', 'BurnLab', 'ApexBody', 'FitZone'],
  },
  {
    icon: '📚',
    title: 'Coaching & Institute',
    count: 6,
    desc: 'UPSC, medical, engineering, competitive exams',
    color: '#6366F1',
    templates: ['ShikshaPlus', 'ProdigyHub', 'AcademiaX', 'Vidyapeeth', 'GyanPath', 'EduElite'],
  },
  {
    icon: '🤝',
    title: 'NGO & Trust',
    count: 6,
    desc: 'Fundraising, welfare, social organisations',
    color: '#14B8A6',
    templates: ['Akanksha', 'Shakti', 'Arogya', 'Dharitri', 'Asha', 'Prayas'],
  },
  {
    icon: '💼',
    title: 'Business & Corporate',
    count: 6,
    desc: 'Consultancies, agencies, trading companies',
    color: '#8B5CF6',
    templates: ['Nexus', 'Aashiyana', 'Vertex', 'Ignite', 'Meridian', 'Arcadia'],
  },
];

export default function Work() {
  return (
    <section id="work" className="section-pad px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <div className="tag mb-4">Our work</div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#F8FAFC] leading-tight">
            Templates built
            <br />
            <span className="text-gradient-emerald">for Bharat.</span>
          </h2>
          <p className="mt-4 max-w-xl text-[#94A3B8]">
            Every template is ready to launch in 3 days, fully customised with your name, logo, and content.
            36+ live demos across 6 niches.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((c) => (
            <div key={c.title} className="glass glass-hover rounded-2xl p-6 flex flex-col gap-4 group transition-all duration-300 cursor-default">
              <div className="flex items-center justify-between">
                <span className="text-3xl">{c.icon}</span>
                <span className="font-mono text-xs px-2.5 py-1 rounded-full border" style={{ color: c.color, borderColor: `${c.color}30`, background: `${c.color}10` }}>
                  {c.count} designs
                </span>
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-[#F8FAFC]">{c.title}</h3>
                <p className="text-[#475569] text-sm mt-1">{c.desc}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {c.templates.slice(0, 4).map((t) => (
                  <span key={t} className="text-xs font-mono text-[#475569] border border-white/5 rounded-full px-2 py-0.5">{t}</span>
                ))}
                {c.templates.length > 4 && (
                  <span className="text-xs font-mono text-[#475569] border border-white/5 rounded-full px-2 py-0.5">+{c.templates.length - 4} more</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center glass rounded-2xl p-8">
          <h3 className="text-xl font-display font-bold text-[#F8FAFC]">Like what you see? Let's make it yours.</h3>
          <p className="text-[#94A3B8] text-sm mt-2 mb-6">Pick any template, tell us your business name, and we'll go live in 3 days. No designer needed.</p>
          <a href="https://wa.me/919693245941?text=Hi%20Vridhi%20Studio%2C%20I%20want%20to%20start%20a%20website%20project" target="_blank" rel="noopener noreferrer" className="btn-emerald text-sm">
            Start on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
