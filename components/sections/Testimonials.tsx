const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Owner, Sharma Restaurant · Patna',
    quote: 'Website tayar hone ke baad mujhe 3x zyada phone calls aane lage. Pehle koi online nahi dhundhta tha — ab Google pe top pe hain. Vridhi Studio ne jo promise kiya, woh deliver kiya.',
    translation: 'After the website was ready, I started getting 3x more phone calls. Now we rank on top of Google.',
    initials: 'PS',
    color: '#10B981',
  },
  {
    name: 'Rahul Mehta',
    role: 'Director, MediCare Clinic · Lucknow',
    quote: 'Company registration aur website dono ek hi jagah se ho gayi. 7 din mein sab kuch ready tha — GST, company certificate, aur website live. Bohot professional team hai.',
    translation: 'Got both company registration and website from one place. Everything ready in 7 days.',
    initials: 'RM',
    color: '#F59E0B',
  },
  {
    name: 'Ankit Gupta',
    role: 'Founder, BrightPath Coaching · Varanasi',
    quote: 'Facebook ads se pehle mahine mein 40+ admissions aaye coaching centre mein. Bohot kam investment mein bohot zyada return mila. Ye log result pe focus karte hain, sirf kaam nahi.',
    translation: '40+ admissions in the first month from Facebook ads. Very high ROI on a small budget.',
    initials: 'AG',
    color: '#6366F1',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <div className="tag mb-4">Client stories</div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#F8FAFC] leading-tight">
            Real results.
            <br />
            <span className="text-gradient-emerald">Real businesses.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="glass glass-hover rounded-2xl p-8 flex flex-col gap-4 transition-all duration-300">
              <div className="flex items-center gap-1 text-[#F59E0B] text-sm">{'★★★★★'}</div>
              <p className="text-[#94A3B8] text-sm leading-relaxed italic">"{t.quote}"</p>
              <p className="text-xs text-[#475569] leading-relaxed">({t.translation})</p>
              <div className="flex items-center gap-3 mt-auto pt-2 border-t border-white/5">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-[#050A14]" style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}99)` }}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-[#F8FAFC]">{t.name}</div>
                  <div className="text-xs text-[#475569]">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
