import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

/* ─── Section label helper ─────────────────────────────── */
function SectionLabel({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${light ? 'text-[#10B981]' : 'text-[#10B981]'}`}>
      {children}
    </p>
  );
}

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* ── 2. HERO ──────────────────────────────────────── */}
      <section className="bg-[#0A0F1E] py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          {/* Badge */}
          <span className="inline-block bg-white/10 text-white/70 rounded-full px-4 py-1.5 text-xs font-semibold mb-7">
            🌿 Lucknow&apos;s #1 Placement Service
          </span>

          {/* Headline */}
          <h1 className="font-display font-extrabold text-5xl md:text-[68px] leading-[1.05] tracking-tight text-white">
            Find Work in<br />
            <span className="text-[#10B981]">Lucknow &amp; UP</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-lg text-white/60 max-w-xl mx-auto leading-relaxed">
            500+ candidates placed. Personal service. Free for job seekers. Get placed in 48 hours.
          </p>

          {/* CTA row */}
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link
              href="/jobs"
              className="rounded-full bg-[#10B981] text-white font-semibold px-7 py-3.5 hover:bg-[#059669] hover:shadow-[0_0_0_4px_rgba(16,185,129,0.20)] transition-all duration-200"
            >
              Browse Jobs →
            </Link>
            <Link
              href="/apply"
              className="border-2 border-white/20 text-white rounded-full px-7 py-3.5 font-semibold hover:bg-white/10 transition-all duration-200"
            >
              Apply Now
            </Link>
            <a
              href="https://wa.me/918579898230"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#25D366] text-white font-semibold px-7 py-3.5 hover:bg-[#1ebe5d] transition-all duration-200"
            >
              💬 WhatsApp Anita
            </a>
          </div>

          {/* Social proof */}
          <div className="mt-10 flex items-center justify-center gap-3">
            <div className="flex -space-x-2">
              <div className="w-9 h-9 rounded-full border-2 border-[#0A0F1E] bg-violet-500 flex items-center justify-center font-bold text-xs text-white">P</div>
              <div className="w-9 h-9 rounded-full border-2 border-[#0A0F1E] bg-amber-500 flex items-center justify-center font-bold text-xs text-white">R</div>
              <div className="w-9 h-9 rounded-full border-2 border-[#0A0F1E] bg-rose-500 flex items-center justify-center font-bold text-xs text-white">A</div>
              <div className="w-9 h-9 rounded-full border-2 border-[#0A0F1E] bg-sky-500 flex items-center justify-center font-bold text-xs text-white">S</div>
              <div className="w-9 h-9 rounded-full border-2 border-[#0A0F1E] bg-emerald-500 flex items-center justify-center font-bold text-xs text-white">M</div>
            </div>
            <p className="text-sm text-white/60">
              Joined by <strong className="text-white">500+</strong> job seekers this year
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. STATS BAR ─────────────────────────────────── */}
      <section className="bg-[#10B981] py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="hidden md:grid md:grid-cols-4 gap-6 text-center text-white">
            {[
              { val: '500+', label: 'Placements Done' },
              { val: '7+',   label: 'Years Active'    },
              { val: '200+', label: 'Employers'       },
              { val: '48h',  label: 'Response Time'   },
            ].map(({ val, label }, i) => (
              <div key={label} className="flex items-center gap-0">
                {i > 0 && <div className="hidden md:block w-px bg-white/20 self-stretch mr-6" />}
                <div className="flex-1">
                  <div className="font-display font-extrabold text-4xl leading-none">{val}</div>
                  <div className="text-sm text-white/80 mt-1">{label}</div>
                </div>
              </div>
            ))}
          </div>
          {/* Mobile grid */}
          <div className="grid grid-cols-2 gap-6 text-center text-white md:hidden">
            {[
              { val: '500+', label: 'Placements Done' },
              { val: '7+',   label: 'Years Active'    },
              { val: '200+', label: 'Employers'       },
              { val: '48h',  label: 'Response Time'   },
            ].map(({ val, label }) => (
              <div key={label}>
                <div className="font-display font-extrabold text-4xl leading-none">{val}</div>
                <div className="text-sm text-white/80 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. CATEGORIES ────────────────────────────────── */}
      <section className="bg-[#F9FAFB] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionLabel>What are you looking for?</SectionLabel>
          <h2 className="font-display font-bold text-3xl text-[#111827] mt-2">Browse by Category</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">
            {[
              { emoji: '🏠', count: '42', label: 'Work From Home', desc: 'Apply from anywhere'    },
              { emoji: '🌱', count: '38', label: 'Fresher Jobs',   desc: 'No experience needed'   },
              { emoji: '⏰', count: '21', label: 'Part-Time',      desc: 'Flexible hours'         },
              { emoji: '💼', count: '87', label: 'Full-Time',      desc: 'Office-based roles'     },
            ].map(({ emoji, count, label, desc }) => (
              <Link
                key={label}
                href="/jobs"
                className="bg-white rounded-2xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] cursor-pointer
                  hover:bg-[#10B981] hover:shadow-[0_20px_40px_rgba(16,185,129,0.20)] hover:-translate-y-1
                  group transition-all duration-200"
              >
                <span className="cat-emoji text-4xl block mb-4 transition-transform duration-200 group-hover:scale-110">{emoji}</span>
                <div className="font-display font-extrabold text-2xl text-[#10B981] group-hover:text-white">{count}</div>
                <div className="font-semibold text-[#111827] group-hover:text-white mt-0.5">{label}</div>
                <div className="text-xs text-[#6B7280] group-hover:text-white/80 mt-1">{desc}</div>
                <div className="mt-4 text-[#10B981] group-hover:text-white font-bold text-lg">→</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. FEATURED JOBS ─────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header row */}
          <div className="flex justify-between items-end">
            <div>
              <SectionLabel>Fresh & verified</SectionLabel>
              <h2 className="font-display font-bold text-3xl text-[#111827] mt-2">Latest Openings</h2>
            </div>
            <Link href="/jobs" className="text-sm font-semibold text-[#10B981] hover:underline hidden sm:inline shrink-0">
              View all 12 →
            </Link>
          </div>

          {/* 3-col grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {[
              { title: 'Data Entry Operator',   type: 'Work From Home',  typeBg: 'bg-[#ECFDF5]', typeFg: 'text-[#059669]', avatarBg: 'bg-emerald-500', initial: 'D', tags: ['Fresher OK'],       salary: '₹8,000 – ₹12,000',  location: 'Lucknow, UP',         posted: '1 day ago'  },
              { title: 'Receptionist',          type: 'Full-Time',       typeBg: 'bg-blue-50',    typeFg: 'text-blue-700',  avatarBg: 'bg-blue-500',    initial: 'R', tags: ['Female Preferred'], salary: '₹10,000 – ₹15,000', location: 'Gomti Nagar',         posted: '2 days ago' },
              { title: 'Sales Executive',       type: 'Full-Time',       typeBg: 'bg-blue-50',    typeFg: 'text-blue-700',  avatarBg: 'bg-indigo-500',  initial: 'S', tags: ['Incentives'],       salary: '₹12,000 – ₹18,000', location: 'Kanpur',              posted: '3 days ago' },
              { title: 'Telecaller',            type: 'Part-Time / WFH', typeBg: 'bg-amber-50',   typeFg: 'text-amber-700', avatarBg: 'bg-amber-500',   initial: 'T', tags: ['Fresher OK'],       salary: '₹6,000 – ₹10,000',  location: 'Lucknow, UP',         posted: '3 days ago' },
              { title: 'Accounts Assistant',    type: 'Full-Time',       typeBg: 'bg-blue-50',    typeFg: 'text-blue-700',  avatarBg: 'bg-violet-500',  initial: 'A', tags: ['Graduate'],         salary: '₹15,000 – ₹22,000', location: 'Hazratganj',          posted: '4 days ago' },
              { title: 'Back Office Executive', type: 'Full-Time',       typeBg: 'bg-blue-50',    typeFg: 'text-blue-700',  avatarBg: 'bg-rose-500',    initial: 'B', tags: [],                   salary: '₹9,000 – ₹14,000',  location: 'Noida',               posted: '5 days ago' },
            ].map((job) => (
              <div
                key={job.title + job.location}
                className="bg-white rounded-2xl p-5 flex flex-col shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(16,185,129,0.10)] hover:-translate-y-1 transition-all duration-200"
              >
                {/* Top row */}
                <div className="flex justify-between items-start">
                  <div>
                    <div className={`w-10 h-10 rounded-xl ${job.avatarBg} flex items-center justify-center text-white font-bold text-sm`}>
                      {job.initial}
                    </div>
                    <p className="text-xs text-[#9CA3AF] mt-1">Confidential</p>
                  </div>
                  <span className={`rounded-full text-xs font-semibold px-3 py-1 ${job.typeBg} ${job.typeFg}`}>
                    {job.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-[#111827] text-base mt-3 leading-snug">{job.title}</h3>

                {/* Tags */}
                {job.tags.length > 0 && (
                  <div className="flex gap-1.5 flex-wrap mt-2">
                    {job.tags.map((tag) => (
                      <span key={tag} className="text-[11px] font-semibold px-2.5 py-1 bg-amber-50 text-amber-700 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Salary */}
                <div className="mt-auto pt-3">
                  <span className="font-display font-bold text-[#111827] text-lg">{job.salary}</span>
                  <span className="text-xs text-[#9CA3AF]">/mo</span>
                </div>

                {/* Bottom info */}
                <div className="flex justify-between text-xs text-[#9CA3AF] mt-2">
                  <span>📍 {job.location}</span>
                  <span>🕐 {job.posted}</span>
                </div>

                {/* WhatsApp button */}
                <a
                  href={`https://wa.me/918579898230?text=${encodeURIComponent(`Hi Anita, I want to apply for ${job.title} in ${job.location}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full py-2.5 rounded-xl bg-[#25D366] text-white text-sm font-semibold hover:bg-[#1ebe5d] transition-colors text-center block"
                >
                  💬 Apply on WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. HOW IT WORKS ──────────────────────────────── */}
      <section className="bg-[#0A0F1E] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <SectionLabel>Simple process</SectionLabel>
            <h2 className="font-display font-bold text-3xl text-white mt-2">3 Steps to Your Next Job</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              {
                num: '01', icon: '📝',
                title: 'Apply in 30 Seconds',
                desc:  'Fill our simple form or just WhatsApp Anita your name and the kind of job you want.',
              },
              {
                num: '02', icon: '👩‍💼',
                title: 'Anita Reviews You',
                desc:  'She personally calls you within 48 hours, understands your needs, and finds matching roles.',
              },
              {
                num: '03', icon: '🎉',
                title: 'Get Placed',
                desc:  'Get connected to employers directly. No spam, no waiting — just the right job for you.',
              },
            ].map(({ num, icon, title, desc }) => (
              <div key={num} className="bg-white/5 rounded-2xl p-7 relative overflow-hidden">
                {/* Big faded number */}
                <div className="absolute -top-2 -right-3 font-display font-extrabold text-[100px] text-white opacity-[0.04] leading-none select-none pointer-events-none">
                  {num}
                </div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#10B981] mb-3">Step {num}</p>
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl mb-4">
                  {icon}
                </div>
                <h3 className="font-display font-bold text-white text-lg">{title}</h3>
                <p className="text-sm text-white/60 leading-relaxed mt-2">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. TESTIMONIALS ──────────────────────────────── */}
      <section className="bg-[#F9FAFB] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <SectionLabel>Real stories</SectionLabel>
            <h2 className="font-display font-bold text-3xl text-[#111827] mt-2">What Job Seekers Say</h2>
          </div>

          {/* Horizontal scroll */}
          <div className="flex gap-5 overflow-x-auto scrollbar-hide pb-2 mt-10 -mx-4 px-4">
            {[
              { avatarBg: 'bg-rose-400',   initial: 'P', name: 'Priya Sharma',  role: 'Data Entry, Lucknow',       quote: 'I applied on WhatsApp and got a call the same evening. Anita aunty is so helpful — she found me a WFH job in 3 days!'                                       },
              { avatarBg: 'bg-sky-500',    initial: 'R', name: 'Rahul Verma',   role: 'Sales Exec, Kanpur',        quote: 'I was jobless for 4 months. Vridhi Jobs placed me in a week. Salary is better than I expected.'                                                            },
              { avatarBg: 'bg-violet-500', initial: 'S', name: 'Sunita Gupta',  role: 'Receptionist, Lucknow',    quote: 'Completely free service, very personal. Anita called me 3 times to make sure I was comfortable with the employer.'                                           },
              { avatarBg: 'bg-amber-500',  initial: 'A', name: 'Amit Kumar',    role: 'Accounts, Hazratganj',      quote: 'Better than Naukri for Lucknow jobs. You get a real person who knows local employers.'                                                                      },
              { avatarBg: 'bg-emerald-500',initial: 'N', name: 'Neha Singh',    role: 'Telecaller WFH',            quote: 'I\'m a fresher and was nervous, but Anita guided me through the entire interview process. Got placed!'                                                      },
            ].map(({ avatarBg, initial, name, role, quote }) => (
              <div
                key={name}
                className="w-[300px] md:w-[340px] shrink-0 bg-white rounded-2xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
              >
                <div className="text-[#F59E0B] text-sm mb-3">★★★★★</div>
                <p className="text-[#374151] text-sm leading-relaxed italic mb-5">&ldquo;{quote}&rdquo;</p>
                <div className="flex gap-3 items-center">
                  <div className={`w-10 h-10 rounded-full ${avatarBg} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                    {initial}
                  </div>
                  <div>
                    <div className="font-semibold text-[#111827] text-sm">{name}</div>
                    <div className="text-xs text-[#6B7280]">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. ANITA CTA ─────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="rounded-3xl overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.07)] grid lg:grid-cols-5">

            {/* Left panel */}
            <div className="lg:col-span-2 bg-[#064E3B] p-10">
              {/* Avatar */}
              <div className="w-16 h-16 rounded-2xl bg-[#10B981] flex items-center justify-center text-white font-display font-extrabold text-2xl shadow-[0_0_0_4px_rgba(16,185,129,0.25)]">
                AS
              </div>

              <p className="font-display font-bold text-xl text-white mt-5">Anita Srivastava</p>
              <p className="text-sm text-white/60 mt-1">Founder &amp; Placement Consultant</p>

              <blockquote className="mt-5 text-sm text-white/80 leading-relaxed italic border-l-4 border-[#10B981] pl-4">
                &ldquo;I treat every candidate like family. My job is done only when you&rsquo;ve joined and settled in.&rdquo;
              </blockquote>

              <div className="mt-6 space-y-2.5">
                <a href="tel:+918579898230" className="flex gap-2 items-center text-sm text-white/70 hover:text-white transition-colors">
                  <span>📞</span> +91 85798 98230
                </a>
                <a href="mailto:anita@vridhijobs.in" className="flex gap-2 items-center text-sm text-white/70 hover:text-white transition-colors">
                  <span>✉️</span> anita@vridhijobs.in
                </a>
              </div>
            </div>

            {/* Right panel */}
            <div className="lg:col-span-3 bg-white p-10">
              <h3 className="font-display font-bold text-2xl text-[#111827] mb-2">Don&rsquo;t see the right job?</h3>
              <p className="text-[#6B7280] text-sm mb-8">
                Reach out directly — Anita will match you personally, no forms needed.
              </p>

              <div className="space-y-2">
                <a
                  href="https://wa.me/918579898230"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl hover:bg-[#F9FAFB] transition-colors"
                >
                  <div className="bg-[#ECFDF5] w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0">💬</div>
                  <div className="flex-1">
                    <div className="font-semibold text-[#111827] text-sm">WhatsApp Anita</div>
                    <div className="text-sm text-[#6B7280]">Fastest — reply in minutes</div>
                  </div>
                  <span className="text-[#10B981] font-bold">→</span>
                </a>

                <a
                  href="tel:+918579898230"
                  className="flex items-center gap-4 p-4 rounded-2xl hover:bg-[#F9FAFB] transition-colors"
                >
                  <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0">📞</div>
                  <div className="flex-1">
                    <div className="font-semibold text-[#111827] text-sm">Call Directly</div>
                    <div className="text-sm text-[#6B7280]">Mon–Sat, 10 AM – 6 PM</div>
                  </div>
                  <span className="text-[#10B981] font-bold">→</span>
                </a>

                <Link
                  href="/apply"
                  className="flex items-center gap-4 p-4 rounded-2xl hover:bg-[#F9FAFB] transition-colors"
                >
                  <div className="bg-amber-50 w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0">📝</div>
                  <div className="flex-1">
                    <div className="font-semibold text-[#111827] text-sm">Fill Application</div>
                    <div className="text-sm text-[#6B7280]">Takes 2 minutes</div>
                  </div>
                  <span className="text-[#10B981] font-bold">→</span>
                </Link>
              </div>

              <p className="mt-6 text-xs text-[#9CA3AF]">📞 +91 85798 98230 · anita@vridhijobs.in</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
