import Link from 'next/link';

const col1 = [
  { href: '/jobs',    label: 'Browse Jobs'    },
  { href: '/apply',   label: 'Apply Now'      },
  { href: '/hire',    label: 'Post a Job'     },
  { href: '/about',   label: 'About Us'       },
  { href: '/contact', label: 'Contact'        },
];

const col2 = [
  { href: '/jobs?filter=wfh',       label: 'Work From Home' },
  { href: '/jobs?filter=fresher',   label: 'Fresher Jobs'   },
  { href: '/jobs?filter=part-time', label: 'Part-Time'      },
  { href: '/jobs?filter=full-time', label: 'Full-Time'      },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0F1E] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">

          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-brand flex items-center justify-center">
                <span className="text-white font-display font-extrabold text-base">V</span>
              </div>
              <span className="font-display font-extrabold text-xl">
                Vridhi <span className="text-brand">Jobs</span>
              </span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed mb-5 max-w-[200px]">
              Lucknow&rsquo;s personal placement service. Always free for job seekers.
            </p>
            <a href="https://wa.me/918579898230" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#25D366] rounded-full text-sm font-semibold hover:bg-[#1ebe5d] transition-colors">
              💬 WhatsApp Us
            </a>
          </div>

          {/* Links */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-white/40 mb-4">Navigate</p>
            <ul className="space-y-2.5">
              {col1.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-white/60 hover:text-brand transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-white/40 mb-4">Job Types</p>
            <ul className="space-y-2.5">
              {col2.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-white/60 hover:text-brand transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-white/40 mb-4">Contact</p>
            <ul className="space-y-3 text-sm text-white/60">
              <li><a href="tel:+918579898230" className="hover:text-brand transition-colors">📞 +91 85798 98230</a></li>
              <li><a href="mailto:anita@vridhijobs.in" className="hover:text-brand transition-colors">✉️ anita@vridhijobs.in</a></li>
              <li className="leading-snug">📍 Lucknow, Uttar Pradesh</li>
              <li className="text-white/40">Mon–Sat · 10 AM – 6 PM</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/30">
          <p>© 2025 Vridhi Jobs. Part of <span className="text-brand">Vridhi Studio</span>.</p>
          <p>Made with ♥ in Lucknow</p>
        </div>
      </div>
    </footer>
  );
}
