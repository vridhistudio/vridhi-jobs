import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const faqs = [
  {
    q: 'Do you charge candidates?',
    a: 'No. Our service is completely free for job seekers. We never charge any registration or placement fee.',
  },
  {
    q: 'What types of jobs do you place?',
    a: 'We place candidates for office jobs, telecalling, data entry, sales, reception, accounts, back-office roles, and work-from-home positions.',
  },
  {
    q: 'Which cities do you cover?',
    a: 'Lucknow, Kanpur, Noida, and other UP cities. Work-from-home roles are available for candidates across India.',
  },
  {
    q: 'How do I apply?',
    a: 'Fill out our application form or WhatsApp Anita directly at +91 85798 98230. We respond within 48 hours.',
  },
  {
    q: 'How long does placement take?',
    a: 'Most placements happen within 3–7 days of your application, depending on the available roles and your profile.',
  },
  {
    q: 'Do you help freshers?',
    a: 'Absolutely. We have many openings specifically suitable for freshers and candidates with no prior experience.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* 1. Dark hero */}
      <section
        className="bg-[#0A0F1E] py-24 text-center relative overflow-hidden"
        style={{
          backgroundImage:
            'linear-gradient(rgba(16,185,129,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(16,185,129,0.03) 1px,transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/[0.08] border border-white/[0.10] text-white/50 rounded-full px-4 py-1.5 text-xs font-medium mb-6">
            Est. 2018 &middot; Lucknow, UP
          </div>
          <h1
            className="font-display font-black text-white tracking-[-0.04em] leading-[1.05] text-center"
            style={{ fontSize: 'clamp(40px,5vw,72px)' }}
          >
            Connecting Talent with<br />
            <span className="text-[#10B981]">Opportunity</span>
          </h1>
          <p className="text-white/40 max-w-xl mx-auto mt-5 leading-relaxed text-[17px]">
            A boutique placement service from Lucknow, helping job seekers across Uttar Pradesh find the right opportunity — and businesses find the right people.
          </p>
        </div>
      </section>

      {/* 2. Stats strip — brand green, editorial typography */}
      <section className="bg-[#10B981] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
            {[
              { val: '500+', label: 'Placements Done', sub: 'Since 2018' },
              { val: '7+',   label: 'Years Active',    sub: 'Est. 2018' },
              { val: '200+', label: 'Employers',       sub: 'Who trust us' },
              { val: '4',    label: 'Cities',          sub: 'Across UP' },
            ].map(({ val, label, sub }) => (
              <div key={label} className="text-center px-4 py-2">
                <div
                  className="font-display font-black text-white leading-none"
                  style={{ fontSize: 'clamp(44px,5vw,72px)' }}
                >
                  {val}
                </div>
                <div className="text-white/70 text-sm font-semibold mt-2">{label}</div>
                <div className="text-white/50 text-xs mt-0.5">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Our Story */}
      <section className="bg-[#F9FAFB] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#10B981] mb-3">Our Story</p>
              <h2
                className="font-display font-black text-[#111827] mb-5 leading-tight"
                style={{ fontSize: 'clamp(24px,3vw,36px)' }}
              >
                From a Small Office to 500+ Placements
              </h2>
              <div className="space-y-4 text-[#374151] leading-relaxed text-[15px]">
                <p>
                  Started in 2018 as <strong>Annu Placement Services</strong>, we&rsquo;ve helped over 500 candidates
                  land jobs across Lucknow, Kanpur, Noida, and beyond.
                </p>
                <p>
                  We specialize in placing candidates for office, telecalling, data entry, sales, receptionist, and
                  back-office roles &mdash; especially for freshers, women returning to work, and those looking for
                  flexible or work-from-home opportunities.
                </p>
                <p>
                  In 2025, we partnered with <strong>Vridhi Studio</strong> to expand our reach digitally, while
                  keeping our personal, WhatsApp-first approach that our candidates and employers have always trusted.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🏆', title: '500+ Candidates Placed', desc: 'Across Lucknow, Kanpur, Noida & more' },
                { icon: '🤝', title: '200+ Employers',         desc: 'Businesses that trust us to find talent' },
                { icon: '🌐', title: 'Remote Roles Available', desc: 'WFH opportunities across India' },
                { icon: '📅', title: '7 Years in Business',    desc: 'Established and trusted since 2018' },
              ].map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-white rounded-2xl p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(16,185,129,0.10)] transition-all"
                >
                  <div className="text-2xl mb-3">{icon}</div>
                  <h3 className="font-display font-semibold text-[#111827] text-sm mb-1">{title}</h3>
                  <p className="text-xs text-[#6B7280] leading-snug">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Meet Anita */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#10B981] mb-2">
              The Person Behind Every Placement
            </p>
            <h2
              className="font-display font-black text-[#111827]"
              style={{ fontSize: 'clamp(24px,3vw,36px)' }}
            >
              Meet Anita
            </h2>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.07)] grid lg:grid-cols-5 max-w-4xl mx-auto mt-10">
            {/* Left — dark panel */}
            <div className="lg:col-span-2 bg-[#064E3B] p-10 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="w-20 h-20 rounded-2xl bg-[#10B981] flex items-center justify-center text-white font-display font-black text-2xl shadow-[0_0_0_4px_rgba(16,185,129,0.25)]">
                AS
              </div>
              <h3 className="font-display font-black text-2xl text-white mt-5">Anita Srivastava</h3>
              <p className="text-sm text-white/60 mt-1">Founder &amp; Placement Consultant</p>
              <div className="flex flex-col gap-2.5 w-full mt-6">
                <a
                  href="https://wa.me/918579898230"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#25D366] text-white text-sm font-semibold hover:bg-[#1ebe5d] transition-colors"
                >
                  💬 WhatsApp Anita
                </a>
                <a
                  href="tel:+918579898230"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-full border border-white/20 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
                >
                  📞 +91 85798 98230
                </a>
                <a
                  href="mailto:anita@vridhijobs.in"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-full border border-white/20 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
                >
                  ✉️ anita@vridhijobs.in
                </a>
              </div>
            </div>

            {/* Right — content */}
            <div className="lg:col-span-3 bg-white p-10">
              <p
                className="font-display font-bold text-[#111827] leading-snug italic mb-5"
                style={{ fontSize: 'clamp(18px,2vw,22px)' }}
              >
                &ldquo;I treat every candidate like family. My job is done only when they&rsquo;ve joined and settled in.&rdquo;
              </p>
              <p className="text-sm text-[#6B7280] leading-relaxed mb-8">
                Anita has been working in the recruitment space since 2018. She personally handles every placement &mdash;
                from the first call to the final offer letter. She speaks Hindi and English, understands both employer and
                candidate needs, and is known for her quick follow-ups and honest guidance.
              </p>
              <div className="grid grid-cols-3 pt-6 border-t border-[#F3F4F6]">
                {[
                  { val: '500+', label: 'Placed' },
                  { val: '7+',   label: 'Years' },
                  { val: '48h',  label: 'Response' },
                ].map(({ val, label }) => (
                  <div key={label} className="text-center">
                    <div className="font-display font-black text-3xl text-[#10B981]">{val}</div>
                    <div className="text-xs text-[#6B7280] mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Values — alternating cards */}
      <section className="bg-[#F9FAFB] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#10B981] mb-2">What We Stand For</p>
            <h2
              className="font-display font-black text-[#111827]"
              style={{ fontSize: 'clamp(24px,3vw,36px)' }}
            >
              Our Values
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 — white */}
            <div className="bg-white rounded-2xl p-7 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(16,185,129,0.10)] transition-all shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <div className="w-12 h-12 rounded-xl bg-[#ECFDF5] flex items-center justify-center text-2xl mb-5">🤝</div>
              <h3 className="font-display font-black text-[#111827] text-lg">Honesty First</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed mt-2">
                We never promise what we can&apos;t deliver. No false offers, no hidden fees &mdash; ever.
              </p>
            </div>
            {/* Card 2 — dark, accent */}
            <div className="bg-[#0A0F1E] rounded-2xl p-7 hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#10B981]/20 flex items-center justify-center text-2xl mb-5">🎁</div>
              <h3 className="font-display font-black text-white text-lg">Free for Job Seekers</h3>
              <p className="text-sm text-white/60 leading-relaxed mt-2">
                We never charge candidates. Our service to job seekers is always 100% free.
              </p>
            </div>
            {/* Card 3 — white */}
            <div className="bg-white rounded-2xl p-7 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(16,185,129,0.10)] transition-all shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <div className="w-12 h-12 rounded-xl bg-[#ECFDF5] flex items-center justify-center text-2xl mb-5">⚡</div>
              <h3 className="font-display font-black text-[#111827] text-lg">Quick Turnaround</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed mt-2">
                We work fast. Most candidates hear back within 48 hours of applying.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#10B981] mb-2">Got Questions?</p>
            <h2
              className="font-display font-black text-[#111827]"
              style={{ fontSize: 'clamp(24px,3vw,36px)' }}
            >
              Frequently Asked
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <details key={q} className="bg-[#F9FAFB] rounded-2xl overflow-hidden group">
                <summary className="flex justify-between items-center px-6 py-4 cursor-pointer list-none select-none">
                  <span className="font-display font-semibold text-[#111827] text-sm pr-4">{q}</span>
                  <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#10B981] font-bold group-open:rotate-45 transition-transform shrink-0">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5 pt-1 text-sm text-[#6B7280] leading-relaxed">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA — brand green */}
      <section className="bg-[#10B981] py-20 text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <h2
            className="font-display font-black text-white leading-tight"
            style={{ fontSize: 'clamp(28px,4vw,44px)' }}
          >
            Ready to Get Started?
          </h2>
          <p className="text-white/60 text-[15px] mt-3 mb-8">
            Whether you&rsquo;re looking for a job or looking to hire, we&rsquo;re here to help &mdash; personally.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#064E3B] font-bold text-sm hover:bg-[#ECFDF5] transition-all duration-200"
            >
              Apply for a Job &rarr;
            </Link>
            <Link
              href="/hire"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/30 text-white font-bold text-sm hover:bg-white/10 transition-all duration-200"
            >
              Post a Job Opening
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
