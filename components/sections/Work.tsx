'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const categories = [
  { icon: '🏥', title: 'Clinic & Hospital', count: 5, desc: 'OPD, multi-specialty, dental, skin clinics', color: '#10B981', templates: ['CarePoint', 'Swasthya Seva', 'MedCore', 'DermaGlow', 'ApexMed'] },
  { icon: '🍽️', title: 'Restaurant & Dhaba', count: 6, desc: 'Fine dining, fast food, dhabas, cloud kitchens', color: '#F59E0B', templates: ['SpiceRoute', "Devi's Kitchen", 'Ember & Salt', 'Botanica', 'Avadh', 'Rasayan'] },
  { icon: '💪', title: 'Gym & Fitness', count: 7, desc: 'Gyms, yoga studios, sports academies', color: '#EC4899', templates: ['StudioZen', 'FormX', 'IronPath', 'PeakZone', 'BurnLab', 'ApexBody', 'FitZone'] },
  { icon: '📚', title: 'Coaching & Institute', count: 6, desc: 'UPSC, medical, engineering, competitive exams', color: '#6366F1', templates: ['ShikshaPlus', 'ProdigyHub', 'AcademiaX', 'Vidyapeeth', 'GyanPath', 'EduElite'] },
  { icon: '🤝', title: 'NGO & Trust', count: 6, desc: 'Fundraising, welfare, social organisations', color: '#14B8A6', templates: ['Akanksha', 'Shakti', 'Arogya', 'Dharitri', 'Asha', 'Prayas'] },
  { icon: '💼', title: 'Business & Corporate', count: 6, desc: 'Consultancies, agencies, trading companies', color: '#8B5CF6', templates: ['Nexus', 'Aashiyana', 'Vertex', 'Ignite', 'Meridian', 'Arcadia'] },
];

export default function Work() {
  const ref = useScrollReveal();
  return (
    <section id="work" ref={ref as React.RefObject<HTMLElement>} className="section-pad px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div data-reveal>
            <span className="section-label">Our work</span>
            <h2 className="font-serif text-[clamp(2.2rem,5vw,3.5rem)] font-black leading-tight mt-2">
              Templates built<br /><em className="text-[#10B981]">for the world.</em>
            </h2>
          </div>
          <p data-reveal data-delay="1" className="text-[#888] max-w-xs leading-relaxed">
            36+ live demos across 6 industries. Ready to launch in 3 days, fully customised.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((c, i) => (
            <div key={c.title} data-reveal data-delay={String((i % 3) + 1)} className="card p-7 flex flex-col gap-4 cursor-default">
              <div className="flex items-center justify-between">
                <span className="text-3xl">{c.icon}</span>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full" style={{ color: c.color, background: `${c.color}15`, border: `1px solid ${c.color}25` }}>
                  {c.count} designs
                </span>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold">{c.title}</h3>
                <p className="text-[#555] text-sm mt-1">{c.desc}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {c.templates.slice(0, 3).map(t => (
                  <span key={t} className="text-xs font-mono text-[#555] border border-[rgba(255,255,255,0.06)] rounded-full px-2 py-0.5">{t}</span>
                ))}
                {c.templates.length > 3 && (
                  <span className="text-xs font-mono text-[#555] border border-[rgba(255,255,255,0.06)] rounded-full px-2 py-0.5">+{c.templates.length - 3}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div data-reveal className="mt-10 card p-10 text-center">
          <h3 className="font-serif text-2xl font-bold mb-2">Like what you see? Let's make it yours.</h3>
          <p className="text-[#888] text-sm mb-6">Pick any template, tell us your business name, and we'll go live in 3 days. No designer needed.</p>
          <a href="https://wa.me/917255961822?text=Hi%20Vridhi%20Studio%2C%20I%20want%20to%20start%20a%20website%20project" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Start on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
