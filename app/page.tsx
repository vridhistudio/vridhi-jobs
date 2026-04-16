import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

/* ─── Marquee items ─────────────────────────────────────── */
const marqueeItems = [
  'Data Entry', 'Receptionist', 'Telecalling', 'Sales Executive',
  'Back Office', 'Work From Home ✓', 'Fresher OK ✓', 'Lucknow',
  'Kanpur', 'Noida', 'Accounts Assistant', 'Customer Support',
  'Always Free ✓', 'Office Assistant',
];

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* ══════════════════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════════════════ */}
      <section className="bg-[#0A0F1E] relative overflow-hidden min-h-[92vh] flex items-center">

        {/* Grid texture */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />

        {/* Radial glow — left center */}
        <div className="absolute inset-y-0 left-0 w-[700px] bg-[radial-gradient(ellipse,rgba(16,185,129,0.10)_0%,transparent_65%)]" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full py-28">
          <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-center">

            {/* ── LEFT ── */}
            <div>
              {/* Pill badge */}
              <div className="inline-flex items-center gap-2 bg-white/[0.07] border border-white/[0.10] rounded-full px-4 py-1.5 mb-9">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse shrink-0" />
                <span className="text-xs font-semibold text-white/70 tracking-wide">Lucknow&apos;s #1 Placement Service</span>
              </div>

              {/* Giant headline */}
              <h1
                className="font-display font-black leading-[0.90] tracking-[-0.04em] text-white"
                style={{ fontSize: 'clamp(52px,7vw,88px)' }}
              >
                Your Next<br />
                Job Is One<br />
                <span className="text-[#10B981]">WhatsApp</span><br />
                Away
              </h1>

              {/* Subtitle */}
              <p className="mt-7 text-white/40 text-base md:text-lg leading-relaxed max-w-md">
                500+ candidates placed across Lucknow &amp; UP. Personal service by Anita Srivastava. Completely free for job seekers.
              </p>

              {/* CTAs */}
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/918579898230?text=Hi%20Anita%2C%20I%20am%20looking%20for%20a%20job"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white font-bold px-7 py-3.5 text-sm transition-all duration-200 hover:brightness-110"
                  style={{ boxShadow: '0 4px 24px rgba(37,211,102,0.40)' }}
                >
                  💬 WhatsApp Anita
                </a>
                <Link
                  href="/jobs"
                  className="inline-flex items-center gap-2 rounded-full bg-white/[0.08] border border-white/[0.08] text-white font-bold px-7 py-3.5 text-sm hover:bg-white/[0.14] transition-all duration-200"
                >
                  Browse Jobs →
                </Link>
              </div>

              {/* Social proof */}
              <div className="mt-10 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[
                    { bg: 'bg-violet-500', l: 'P' },
                    { bg: 'bg-amber-500',  l: 'R' },
                    { bg: 'bg-rose-500',   l: 'A' },
                    { bg: 'bg-sky-500',    l: 'S' },
                    { bg: 'bg-emerald-500',l: 'M' },
                  ].map(({ bg, l }) => (
                    <div
                      key={l + bg}
                      className={`w-9 h-9 rounded-full border-2 border-[#0A0F1E] ${bg} flex items-center justify-center font-bold text-xs text-white`}
                    >
                      {l}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-white/50">
                  <strong className="text-white">200+</strong> people placed this year
                </p>
              </div>
            </div>

            {/* ── RIGHT — Floating job cards ── */}
            <div className="hidden lg:block relative h-[480px]">

              {/* Radial glow behind cards */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.12)_0%,transparent_70%)]" />

              {/* Card 1 — Data Entry */}
              <div
                className="absolute top-0 left-4 w-[265px] bg-white/[0.07] backdrop-blur-md border border-white/10 rounded-2xl p-5"
                style={{ transform: 'rotate(2deg)' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500 flex items-center justify-center text-white font-bold text-sm shrink-0">D</div>
                  <div>
                    <p className="text-white font-bold text-sm leading-tight">Data Entry Operator</p>
                    <p className="text-white/40 text-xs">📍 Lucknow</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#10B981] font-bold text-sm">₹12,000<span className="text-white/30 font-normal text-xs">/mo</span></span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 bg-white/10 text-white/60 rounded-full">WFH</span>
                </div>
              </div>

              {/* Card 2 — Receptionist */}
              <div
                className="absolute top-[148px] left-0 w-[265px] bg-white/[0.07] backdrop-blur-md border border-white/10 rounded-2xl p-5"
                style={{ transform: 'rotate(-1deg)' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-500 flex items-center justify-center text-white font-bold text-sm shrink-0">R</div>
                  <div>
                    <p className="text-white font-bold text-sm leading-tight">Receptionist</p>
                    <p className="text-white/40 text-xs">📍 Gomti Nagar</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#10B981] font-bold text-sm">₹15,000<span className="text-white/30 font-normal text-xs">/mo</span></span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 bg-white/10 text-white/60 rounded-full">Full-Time</span>
                </div>
              </div>

              {/* Card 3 — Telecaller */}
              <div
                className="absolute top-[296px] left-6 w-[265px] bg-white/[0.07] backdrop-blur-md border border-white/10 rounded-2xl p-5"
                style={{ transform: 'rotate(1deg)' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-500 flex items-center justify-center text-white font-bold text-sm shrink-0">T</div>
                  <div>
                    <p className="text-white font-bold text-sm leading-tight">Telecaller</p>
                    <p className="text-white/40 text-xs">📍 Kanpur</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#10B981] font-bold text-sm">₹10,000<span className="text-white/30 font-normal text-xs">/mo</span></span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 bg-white/10 text-white/60 rounded-full">Part-Time</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 2 — MARQUEE
      ══════════════════════════════════════════════════════ */}
      <section className="bg-[#10B981] py-3.5 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="inline-flex items-center gap-3 mx-6 text-sm font-semibold text-white/80"
            >
              <span className="w-1 h-1 rounded-full bg-white/50 shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 3 — STATS  (pure typography, no boxes)
      ══════════════════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#F3F4F6]">
            {[
              { val: '500+', label: 'Placements Done',   sub: 'Across Lucknow & UP'            },
              { val: '7+',   label: 'Years Active',      sub: 'Est. 2018, still going'          },
              { val: '200+', label: 'Employers Trust Us',sub: 'And growing every month'         },
              { val: '48h',  label: 'Response Time',     sub: 'Avg. callback from Anita'        },
            ].map(({ val, label, sub }) => (
              <div key={label} className="px-6 md:px-10 first:pl-0 last:pr-0 py-4">
                <div
                  className="font-display font-black leading-none text-[#111827]"
                  style={{ fontSize: 'clamp(44px,6vw,80px)' }}
                >
                  {val}
                </div>
                <p className="text-sm font-semibold text-[#374151] mt-2">{label}</p>
                <p className="text-xs text-[#9CA3AF] mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 4 — BENTO CATEGORIES
      ══════════════════════════════════════════════════════ */}
      <section className="bg-[#F9FAFB] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#10B981] mb-3">
            What are you looking for?
          </p>
          <h2
            className="font-display font-black tracking-[-0.03em] text-[#111827] mb-10"
            style={{ fontSize: 'clamp(32px,4vw,48px)' }}
          >
            Browse by Category
          </h2>

          <div
            className="grid grid-cols-2 md:grid-cols-6 gap-3"
            style={{ gridAutoRows: '180px' }}
          >
            {/* WFH — wide */}
            <Link
              href="/jobs"
              className="col-span-2 md:col-span-4 bg-[#064E3B] rounded-3xl p-7 flex flex-col justify-between hover:scale-[1.015] transition-transform duration-200 cursor-pointer"
            >
              <span className="text-3xl">💻</span>
              <div>
                <h3 className="font-display font-black text-2xl text-white leading-tight">
                  Work From Home
                </h3>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-white/40 text-sm">Apply from anywhere in UP</p>
                  <span className="text-[#10B981] font-bold text-sm">40+ roles →</span>
                </div>
              </div>
            </Link>

            {/* Fresher — tall */}
            <Link
              href="/jobs"
              className="col-span-1 md:col-span-2 row-span-2 bg-[#10B981] rounded-3xl p-7 flex flex-col justify-between hover:scale-[1.015] transition-transform duration-200 cursor-pointer"
            >
              <span className="text-3xl">🌱</span>
              <div>
                <h3 className="font-display font-black text-2xl text-white leading-tight mb-2">
                  Fresher Friendly
                </h3>
                <p className="text-white/70 text-sm leading-snug mb-4">
                  No experience? No problem. We&apos;ll get you started.
                </p>
                <p className="text-xl font-black text-white">25+ open</p>
              </div>
            </Link>

            {/* Office — dark */}
            <Link
              href="/jobs"
              className="col-span-1 md:col-span-2 bg-[#0A0F1E] rounded-3xl p-6 flex flex-col justify-between hover:scale-[1.015] transition-transform duration-200 cursor-pointer"
            >
              <span className="text-2xl">🏢</span>
              <div>
                <p className="font-bold text-lg text-white leading-tight">Office Roles</p>
                <p className="text-white/30 text-xs mt-1">Lucknow · Kanpur · Noida</p>
              </div>
            </Link>

            {/* Part-Time — white */}
            <Link
              href="/jobs"
              className="col-span-1 md:col-span-2 bg-white rounded-3xl p-6 flex flex-col justify-between transition-all duration-200 cursor-pointer hover:-translate-y-1 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(16,185,129,0.12)]"
            >
              <span className="text-2xl">⏰</span>
              <div>
                <p className="font-bold text-lg text-[#111827] leading-tight">Part-Time</p>
                <p className="text-[#9CA3AF] text-xs mt-1">12+ flexible roles</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 5 — JOB LISTINGS (list view)
      ══════════════════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Header */}
          <div className="flex justify-between items-end mb-8">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#10B981] mb-2">
                Fresh &amp; verified
              </p>
              <h2
                className="font-display font-black tracking-[-0.03em] text-[#111827]"
                style={{ fontSize: 'clamp(28px,3.5vw,40px)' }}
              >
                Latest Openings
              </h2>
            </div>
            <Link
              href="/jobs"
              className="text-sm font-semibold text-[#10B981] hover:underline hidden sm:inline shrink-0"
            >
              View all →
            </Link>
          </div>

          {/* Job rows */}
          <div className="divide-y divide-[#F9FAFB]">
            {[
              { title: 'Data Entry Operator', type: 'WFH',       color: 'bg-emerald-500', location: 'Lucknow, UP',        salary: '₹8k–12k',  tag: 'Fresher OK'       },
              { title: 'Receptionist',         type: 'Full-Time', color: 'bg-blue-500',    location: 'Gomti Nagar',        salary: '₹10k–15k', tag: 'Female Pref'      },
              { title: 'Sales Executive',      type: 'Full-Time', color: 'bg-indigo-500',  location: 'Kanpur',             salary: '₹12k–18k', tag: 'Incentives'       },
              { title: 'Telecaller',           type: 'Part-Time', color: 'bg-amber-500',   location: 'Lucknow, UP',        salary: '₹6k–10k',  tag: 'Fresher OK'       },
              { title: 'Customer Support',     type: 'WFH',       color: 'bg-teal-500',    location: 'Remote / UP',        salary: '₹10k–14k', tag: 'Laptop Req'       },
              { title: 'Accounts Assistant',   type: 'Full-Time', color: 'bg-violet-500',  location: 'Hazratganj',         salary: '₹15k–22k', tag: 'Graduate'         },
            ].map((job) => {
              const typeClass =
                job.type === 'WFH'
                  ? 'bg-[#ECFDF5] text-[#059669]'
                  : job.type === 'Part-Time'
                  ? 'bg-amber-50 text-amber-700'
                  : 'bg-blue-50 text-blue-700';

              return (
                <div
                  key={job.title + job.location}
                  className="flex items-center gap-4 py-4 md:py-5 -mx-3 px-3 rounded-2xl group hover:bg-[#F9FAFB] transition-colors"
                >
                  {/* Avatar */}
                  <div
                    className={`w-10 h-10 md:w-11 md:h-11 rounded-xl ${job.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}
                  >
                    {job.title[0]}
                  </div>

                  {/* Title + location */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-display font-bold text-[#111827] text-sm md:text-base truncate">
                        {job.title}
                      </span>
                      {job.tag && (
                        <span className="hidden sm:inline text-[11px] font-semibold px-2 py-0.5 bg-amber-50 text-amber-600 rounded-full shrink-0">
                          {job.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#9CA3AF] mt-0.5">📍 {job.location}</p>
                  </div>

                  {/* Type pill */}
                  <div className="hidden md:block shrink-0">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${typeClass}`}>
                      {job.type}
                    </span>
                  </div>

                  {/* Salary */}
                  <div className="text-right shrink-0">
                    <span className="font-display font-bold text-[#111827] text-sm md:text-base">
                      {job.salary}
                    </span>
                    <span className="text-xs text-[#9CA3AF]">/mo</span>
                  </div>

                  {/* Apply */}
                  <a
                    href={`https://wa.me/918579898230?text=${encodeURIComponent(`Hi Anita, I want to apply for ${job.title} in ${job.location}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:block shrink-0 px-4 py-2 rounded-full bg-[#F3F4F6] text-[#374151] text-sm font-semibold group-hover:bg-[#10B981] group-hover:text-white transition-colors"
                  >
                    Apply
                  </a>
                </div>
              );
            })}
          </div>

          {/* Mobile CTA */}
          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/jobs"
              className="inline-flex items-center gap-2 rounded-full bg-[#10B981] text-white font-bold px-6 py-3 text-sm"
            >
              View all jobs →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 6 — HOW IT WORKS
      ══════════════════════════════════════════════════════ */}
      <section className="bg-[#0A0F1E] py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#10B981] mb-5">
            Simple process
          </p>
          <h2
            className="font-display font-black tracking-[-0.03em] text-white mb-16 leading-tight"
            style={{ fontSize: 'clamp(32px,4vw,48px)' }}
          >
            How We Get<br />
            <span className="text-[#10B981]">You Placed</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                ghost: '01',
                title: 'Browse or WhatsApp',
                body:  'Find a role you like or just send your details to Anita on WhatsApp — takes 60 seconds.',
              },
              {
                ghost: '02',
                title: 'Anita Reviews You',
                body:  'She personally shortlists you, preps you for the interview, and submits your profile to the employer.',
              },
              {
                ghost: '03',
                title: 'Get Placed',
                body:  'Interview, offer letter, joining. Anita stays with you until you\'re settled in your new role.',
              },
            ].map(({ ghost, title, body }) => (
              <div key={ghost} className="relative">

                {/* Giant ghost number */}
                <div
                  className="absolute -top-8 -left-4 font-black text-white select-none pointer-events-none leading-none"
                  style={{ fontSize: '160px', opacity: 0.04 }}
                >
                  {ghost}
                </div>

                {/* Content */}
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-[#10B981]/10 border border-[#10B981]/25 text-[#10B981] font-bold text-sm flex items-center justify-center mb-5">
                    {ghost}
                  </div>
                  <h3 className="font-display font-bold text-white text-xl mb-3">{title}</h3>
                  <p className="text-white/35 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 7 — ANITA CTA
      ══════════════════════════════════════════════════════ */}
      <section className="bg-[#10B981] py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_420px] gap-12 md:gap-16 items-center">

            {/* ── LEFT ── */}
            <div>
              <p className="text-white/55 text-sm font-semibold mb-5">
                Your personal placement consultant
              </p>
              <h2
                className="font-display font-black tracking-[-0.04em] text-white leading-[1.0]"
                style={{ fontSize: 'clamp(36px,5vw,64px)' }}
              >
                Anita Handles<br />
                It From Start<br />
                to Finish
              </h2>
              <p className="text-white/55 text-base leading-relaxed max-w-sm mt-6">
                One call, one person, one goal — getting you a job you actually want to go to every morning.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/918579898230?text=Hi%20Anita%2C%20I%20need%20help%20finding%20a%20job"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-[#064E3B] font-bold px-7 py-3.5 text-sm hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-all duration-200"
                >
                  💬 WhatsApp Now
                </a>
                <Link
                  href="/jobs"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 text-white font-bold px-7 py-3.5 text-sm hover:bg-white/10 transition-all duration-200"
                >
                  See Open Roles →
                </Link>
              </div>
            </div>

            {/* ── RIGHT card ── */}
            <div className="bg-white/[0.12] backdrop-blur rounded-3xl p-8 border border-white/[0.15]">

              {/* Avatar + name */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-14 h-14 rounded-2xl bg-[#064E3B] flex items-center justify-center font-display font-extrabold text-xl text-white shrink-0"
                  style={{ boxShadow: '0 0 0 3px rgba(255,255,255,0.20)' }}
                >
                  AS
                </div>
                <div>
                  <p className="text-lg font-bold text-white leading-tight">Anita Srivastava</p>
                  <p className="text-white/50 text-sm">Founder &amp; Placement Consultant</p>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-[17px] text-white/85 leading-relaxed italic mb-6">
                &ldquo;I treat every candidate like family. My job is done only when you&rsquo;ve joined and settled in.&rdquo;
              </blockquote>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-0 border-t border-white/15 pt-6">
                {[
                  { val: '500+', label: 'Placed'    },
                  { val: '7+',   label: 'Years'     },
                  { val: '48h',  label: 'Response'  },
                ].map(({ val, label }) => (
                  <div key={label} className="text-center">
                    <p className="font-black text-white text-xl leading-none">{val}</p>
                    <p className="text-white/45 text-xs mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
