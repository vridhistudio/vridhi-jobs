import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const values = [
  { icon: '🤝', title: 'Honesty First', desc: 'We never promise what we can\'t deliver. No false offers, no hidden fees — ever.' },
  { icon: '🎁', title: 'Free for Job Seekers', desc: 'We never charge candidates. Our service to job seekers is always 100% free.' },
  { icon: '⚡', title: 'Quick Turnaround', desc: 'We work fast. Most candidates hear back within 48 hours of applying.' },
];

const stats = [
  { val: '500+', label: 'Placements Done' },
  { val: '7+',   label: 'Years Experience' },
  { val: '200+', label: 'Employer Partners' },
  { val: '4',    label: 'Cities Covered' },
];

const faqs = [
  { q: 'Do you charge candidates?', a: 'No. Our service is completely free for job seekers. We never charge any registration or placement fee.' },
  { q: 'What types of jobs do you place?', a: 'We place candidates for office jobs, telecalling, data entry, sales, reception, accounts, back-office roles, and work-from-home positions.' },
  { q: 'Which cities do you cover?', a: 'Lucknow, Kanpur, Noida, and other UP cities. Work-from-home roles are available for candidates across India.' },
  { q: 'How do I apply?', a: 'Fill out our application form or WhatsApp Anita directly at +91 85798 98230. We respond within 48 hours.' },
  { q: 'How long does placement take?', a: 'Most placements happen within 3–7 days of your application, depending on the available roles and your profile.' },
  { q: 'Do you help freshers?', a: 'Absolutely. We have many openings specifically suitable for freshers and candidates with no prior experience.' },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-white border-b border-[#E5E7EB] py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ECFDF5] border border-[#A7F3D0] rounded-full text-xs font-semibold text-[#059669] mb-5">
            Est. 2018 · Lucknow, Uttar Pradesh
          </div>
          <h1 className="font-display font-bold text-3xl md:text-4xl text-[#111827] mb-4">
            Connecting Talent with Opportunity —<br className="hidden sm:block" />
            One Placement at a Time
          </h1>
          <p className="text-[#6B7280] leading-relaxed">
            We&rsquo;re a boutique placement service based in Lucknow, helping job seekers across Uttar Pradesh find the right opportunity — and helping businesses find the right people.
          </p>
        </div>
      </section>

      {/* Stats strip */}
      <div className="bg-[#0F172A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map(({ val, label }) => (
              <div key={label}>
                <div className="font-display font-extrabold text-4xl text-white mb-1">{val}</div>
                <div className="text-sm text-slate-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-semibold text-[#10B981] uppercase tracking-wider mb-3">Our Story</p>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-[#111827] mb-5">From a Small Office in Lucknow to 500+ Placements</h2>
              <div className="space-y-4 text-[#374151] leading-relaxed text-sm">
                <p>
                  Started in 2018 as <strong>Annu Placement Services</strong>, we&rsquo;ve helped over 500 candidates land jobs across Lucknow, Kanpur, Noida, and beyond.
                </p>
                <p>
                  We specialize in placing candidates for office, telecalling, data entry, sales, receptionist, and back-office roles — especially for freshers, women returning to work, and those looking for flexible or work-from-home opportunities.
                </p>
                <p>
                  In 2025, we partnered with <strong>Vridhi Studio</strong> to expand our reach digitally, while keeping our personal, WhatsApp-first approach to placement that our candidates and employers have always trusted.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🏆', title: '500+ Candidates Placed', desc: 'Across Lucknow, Kanpur, Noida & more' },
                { icon: '🤝', title: '200+ Employer Partners', desc: 'Businesses that trust us to find them talent' },
                { icon: '🌐', title: 'Remote Roles Available', desc: 'WFH opportunities across India' },
                { icon: '📅', title: '7 Years in Business', desc: 'Established and trusted since 2018' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="bg-white border border-[#E5E7EB] rounded-2xl p-5 hover:shadow-card-hover hover:-translate-y-0.5 transition-all">
                  <div className="text-2xl mb-3">{icon}</div>
                  <h3 className="font-display font-semibold text-[#111827] text-sm mb-1">{title}</h3>
                  <p className="text-xs text-[#6B7280] leading-snug">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Anita */}
      <section className="py-16 bg-white border-t border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-[#10B981] uppercase tracking-wider mb-2">The Person Behind Every Placement</p>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-[#111827]">Meet Anita</h2>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-3xl overflow-hidden shadow-panel">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Left dark panel */}
              <div className="lg:col-span-2 bg-[#064E3B] p-8 flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="w-20 h-20 rounded-2xl bg-[#10B981] flex items-center justify-center text-white font-display font-bold text-2xl mb-5 shadow-glow-green">AS</div>
                <h3 className="font-display font-bold text-xl text-white mb-1">Anita Srivastava</h3>
                <p className="text-sm text-green-300 mb-5">Founder & Placement Consultant</p>
                <div className="flex flex-col gap-2.5 w-full">
                  <a href="tel:+918579898230" className="flex items-center justify-center lg:justify-start gap-2 text-sm text-green-200 hover:text-white transition-colors">
                    📞 +91 85798 98230
                  </a>
                  <a href="https://wa.me/918579898230" target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 bg-[#25D366] text-white font-semibold rounded-xl text-sm hover:bg-[#1ebe5d] transition-colors">
                    💬 WhatsApp Anita
                  </a>
                  <a href="mailto:anita@vridhijobs.in"
                    className="flex items-center justify-center gap-2 py-2.5 border border-green-700 text-green-200 font-semibold rounded-xl text-sm hover:bg-green-800/30 transition-colors">
                    ✉️ anita@vridhijobs.in
                  </a>
                </div>
              </div>
              {/* Right content */}
              <div className="lg:col-span-3 p-8">
                <blockquote className="border-l-4 border-[#10B981] pl-4 mb-6">
                  <p className="text-[#111827] font-display font-semibold text-lg leading-snug italic">
                    &ldquo;I treat every candidate like family. My job is done only when they&rsquo;ve joined and settled in.&rdquo;
                  </p>
                </blockquote>
                <p className="text-[#374151] text-sm leading-relaxed mb-6">
                  Anita has been working in the recruitment space since 2018. She personally handles every placement — from the first call to the final offer letter. She speaks Hindi and English, understands both employer and candidate needs, and is known for her quick follow-ups and honest guidance.
                </p>
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#E5E7EB]">
                  {[['500+', 'Placed'], ['7+', 'Years'], ['48h', 'Response']].map(([val, lbl]) => (
                    <div key={lbl} className="text-center">
                      <div className="font-display font-bold text-2xl text-[#10B981]">{val}</div>
                      <div className="text-xs text-[#6B7280] mt-0.5">{lbl}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-[#F8FAFC] border-t border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-[#10B981] uppercase tracking-wider mb-2">What We Stand For</p>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-[#111827]">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map(({ icon, title, desc }) => (
              <div key={title} className="bg-white border border-[#E5E7EB] rounded-2xl p-6 hover:shadow-card-hover hover:-translate-y-0.5 transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#ECFDF5] flex items-center justify-center text-2xl mb-4">{icon}</div>
                <h3 className="font-display font-semibold text-[#111827] mb-2">{title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-white border-t border-[#E5E7EB]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-[#10B981] uppercase tracking-wider mb-2">Got Questions?</p>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-[#111827]">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <details key={q} className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl group overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none select-none">
                  <span className="font-display font-semibold text-[#111827] text-sm pr-4">{q}</span>
                  <span className="w-6 h-6 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center text-[#10B981] font-bold text-base group-open:rotate-45 transition-transform shrink-0">+</span>
                </summary>
                <div className="px-6 pb-5 pt-1 text-sm text-[#6B7280] leading-relaxed border-t border-[#E5E7EB]">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F8FAFC] border-t border-[#E5E7EB]">
        <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-[#111827] mb-3">Ready to Get Started?</h2>
          <p className="text-[#6B7280] text-sm mb-8">Whether you&rsquo;re looking for a job or looking to hire, we&rsquo;re here to help — personally.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/apply" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#10B981] text-white font-semibold rounded-full text-sm hover:bg-[#059669] transition-colors shadow-[0_4px_16px_rgba(16,185,129,0.3)]">
              Apply for a Job →
            </Link>
            <Link href="/hire" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#E5E7EB] bg-white text-[#374151] font-semibold rounded-full text-sm hover:border-[#10B981] hover:text-[#10B981] transition-colors">
              Post a Job Opening
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
