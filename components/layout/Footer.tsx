const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.07)] pt-16 pb-8 px-6 bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1 flex flex-col gap-4">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#10B981] flex items-center justify-center">
                <span className="text-[#080808] font-black text-sm font-serif">V</span>
              </div>
              <span className="font-display font-bold text-base text-[#f0f0f0]">Vridhi<span className="text-[#10B981]">.</span></span>
            </a>
            <p className="text-sm text-[#555] leading-relaxed">
              Full-stack digital agency. Websites, apps, business registrations, ad campaigns, and SaaS products — built for the world's boldest founders.
            </p>
            <div className="flex items-center gap-2">
              {[
                { label: 'In', href: 'https://instagram.com/vridhistudio' },
                { label: 'Li', href: 'https://linkedin.com/company/vridhi-studio' },
                { label: 'Yt', href: 'https://youtube.com/@vridhistudio' },
                { label: 'Wa', href: 'https://wa.me/917255961822' },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="w-8 h-8 card flex items-center justify-center text-xs font-bold text-[#888] hover:text-[#10B981] transition-colors">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#f0f0f0] mb-4">Services</h4>
            <ul className="flex flex-col gap-2.5">
              {['Website Design', 'App Development', 'Ad Campaigns', 'Social Media', 'Business Registration', 'Logo Design'].map((s) => (
                <li key={s}><a href="#services" className="text-sm text-[#555] hover:text-[#10B981] transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#f0f0f0] mb-4">Templates</h4>
            <ul className="flex flex-col gap-2.5">
              {['Clinic Templates', 'Restaurant Templates', 'Gym Templates', 'Coaching Templates', 'NGO Templates', 'Business Templates'].map((s) => (
                <li key={s}><a href="#work" className="text-sm text-[#555] hover:text-[#10B981] transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#f0f0f0] mb-4">Contact</h4>
            <ul className="flex flex-col gap-2.5">
              <li><a href="https://wa.me/917255961822" target="_blank" rel="noopener noreferrer" className="text-sm text-[#555] hover:text-[#10B981] transition-colors">+91 72559 61822</a></li>
              <li><a href="mailto:hello@vridhi.dev" className="text-sm text-[#555] hover:text-[#10B981] transition-colors">hello@vridhi.dev</a></li>
              <li><span className="text-sm text-[#555]">India · Remote Worldwide</span></li>
            </ul>
            <a href="https://wa.me/917255961822" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex btn-primary text-xs px-4 py-2">
              Book Free Call →
            </a>
          </div>
        </div>

        <div className="border-t border-[rgba(255,255,255,0.06)] pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[#555]">© {year} Vridhi Studio. Built with ❤️ for founders worldwide.</p>
          <p className="text-xs text-[#555]">Vridhi Studio · India</p>
        </div>
      </div>
    </footer>
  );
}
