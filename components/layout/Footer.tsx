const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1 flex flex-col gap-4">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center">
                <span className="text-[#050A14] font-bold text-sm">V</span>
              </div>
              <span className="font-display font-bold text-base text-[#F8FAFC]">Vridhi<span className="text-[#10B981]">.</span></span>
            </a>
            <p className="text-sm text-[#475569] leading-relaxed">
              India's full-stack digital agency. Websites, apps, business registrations, ad campaigns,
              and SaaS products — built for Bharat's boldest founders.
            </p>
            <div className="flex items-center gap-3">
              {[
                { label: 'In', href: 'https://instagram.com/vridhistudio' },
                { label: 'Li', href: 'https://linkedin.com/company/vridhi-studio' },
                { label: 'Yt', href: 'https://youtube.com/@vridhistudio' },
                { label: 'Wa', href: 'https://wa.me/919693245941' },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="w-8 h-8 glass rounded-full flex items-center justify-center text-xs font-bold text-[#94A3B8] hover:text-[#10B981] hover:border-[#10B981]/30 transition-colors">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-[#F8FAFC] mb-4">Services</h4>
            <ul className="flex flex-col gap-2.5">
              {['Website Design', 'App Development', 'Ad Campaigns', 'Social Media', 'Business Registration', 'Logo Design'].map((s) => (
                <li key={s}><a href="#services" className="text-sm text-[#475569] hover:text-[#10B981] transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Work */}
          <div>
            <h4 className="text-sm font-bold text-[#F8FAFC] mb-4">Templates</h4>
            <ul className="flex flex-col gap-2.5">
              {['Clinic Templates', 'Restaurant Templates', 'Gym Templates', 'Coaching Templates', 'NGO Templates', 'Business Templates'].map((s) => (
                <li key={s}><a href="#work" className="text-sm text-[#475569] hover:text-[#10B981] transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-[#F8FAFC] mb-4">Contact</h4>
            <ul className="flex flex-col gap-2.5">
              <li><a href="https://wa.me/919693245941" target="_blank" rel="noopener noreferrer" className="text-sm text-[#475569] hover:text-[#10B981] transition-colors">+91 96932 45941</a></li>
              <li><a href="mailto:hello@vridhi.dev" className="text-sm text-[#475569] hover:text-[#10B981] transition-colors">hello@vridhi.dev</a></li>
              <li><span className="text-sm text-[#475569]">Bihar & UP, India</span></li>
            </ul>
            <a href="https://wa.me/919693245941" target="_blank" rel="noopener noreferrer" className="mt-5 inline-block btn-emerald text-xs px-4 py-2">
              Book Free Call →
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[#475569]">© {year} Vridhi Studio. Built with ❤️ for Bharat.</p>
          <p className="text-xs text-[#475569]">Made by Hari · Bihar, India</p>
        </div>
      </div>
    </footer>
  );
}
