import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const values = [
  { icon: '🤝', title: 'Honesty First', desc: 'We never promise what we can\'t deliver. No false offers, no hidden fees.' },
  { icon: '🎁', title: 'Free for Job Seekers', desc: 'We never charge candidates. Our service to job seekers is always 100% free.' },
  { icon: '⚡', title: 'Quick Turnaround', desc: 'We work fast. Most candidates hear back within 48 hours of applying.' },
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
      <section className="bg-white border-b border-[#E5E7EB] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-display font-bold text-3xl md:text-4xl text-[#111827] mb-4">
            Connecting Talent with Opportunity —<br className="hidden sm:block" />
            One Placement at a Time
          </h1>
          <p className="text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
            We&rsquo;re a boutique placement service based in Lucknow, helping job seekers across Uttar Pradesh find the right opportunity — and helping businesses find the right people.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-14 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="font-display font-bold text-2xl text-[#111827] mb-5">Our Story</h2>
              <div className="space-y-4 text-[#374151] leading-relaxed text-sm">
                <p>
                  Started in 2018 as <strong>Annu Placement Services</strong>, we&rsquo;ve helped over 500 candidates land jobs across Lucknow, Kanpur, Noida, and beyond.
                </p>
                <p>
                  We specialize in placing candidates for office, telecalling, data entry, sales, receptionist, and back-office roles — especially for freshers, women returning to work, and those looking for flexible or work-from-home opportunities.
                </p>
                <p>
                  In 2025, we partnered with <strong>Vridhi Studio</strong> to expand our reach digitally, while keeping our personal, WhatsApp-first approach to placement.
                </p>
              </div>
            </div>
            <div className="bg-[#10B981] rounded-2xl p-8 text-white">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { val: '500+', label: 'Placements Done' },
                  { val: '7+', label: 'Years Experience' },
                  { val: '200+', label: 'Employer Partners' },
                  { val: '4', label: 'Cities Covered' },
                ].map(({ val, label }) => (
                  <div key={label}>
                    <div className="font-display font-bold text-3xl mb-0.5">{val}</div>
                    <div className="text-sm text-green-100">{label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/20 text-sm text-green-100">
                Lucknow · Kanpur · Noida · Remote
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Anita */}
      <section className="py-14 bg-white border-t border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display font-bold text-2xl text-[#111827] mb-8 text-center">Meet Anita</h2>
            <div className="bg-[#ECFDF5] border border-[#A7F3D0] rounded-2xl p-8 flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-20 h-20 rounded-full bg-[#10B981] border-4 border-white shadow-lg flex items-center justify-center text-white font-display font-bold text-2xl shrink-0 mx-auto sm:mx-0">
                AS
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-display font-bold text-xl text-[#111827]">Anita Srivastava</h3>
                <p className="text-[#6B7280] text-sm mb-4">Founder & Placement Consultant</p>
                <p className="text-[#374151] text-sm leading-relaxed mb-4">
                  Anita has been working in the recruitment space since 2018. She personally handles every placement — from the first call to the final offer letter. She speaks Hindi and English, understands both employer and candidate needs, and is known for her quick follow-ups and honest guidance.
                </p>
                <blockquote className="border-l-4 border-[#10B981] pl-4 text-sm italic text-[#374151] mb-5">
                  &ldquo;I treat every candidate like family. My job is done only when they&rsquo;ve joined and settled in.&rdquo;
                </blockquote>
                <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
                  <a href="tel:+918579898230" className="inline-flex items-center justify-center gap-2 px-4 py-2 border border-[#10B981] text-[#10B981] font-semibold rounded-lg text-sm hover:bg-white transition-colors">
                    📞 +91 85798 98230
                  </a>
                  <a href="https://wa.me/918579898230" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#25D366] text-white font-semibold rounded-lg text-sm hover:bg-[#1ebe5d] transition-colors">
                    💬 WhatsApp
                  </a>
                  <a href="mailto:anita@vridhijobs.in" className="inline-flex items-center justify-center gap-2 px-4 py-2 border border-[#E5E7EB] text-[#374151] font-semibold rounded-lg text-sm hover:bg-white transition-colors">
                    ✉️ Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 bg-[#F8FAFC] border-t border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl text-[#111827] mb-2 text-center">Our Values</h2>
          <p className="text-[#6B7280] text-sm text-center mb-10">The principles that guide everything we do</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map(({ icon, title, desc }) => (
              <div key={title} className="bg-white border border-[#E5E7EB] rounded-xl p-6">
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="font-display font-semibold text-[#111827] mb-2">{title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-14 bg-white border-t border-[#E5E7EB]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl text-[#111827] mb-2 text-center">Frequently Asked Questions</h2>
          <p className="text-[#6B7280] text-sm text-center mb-10">Everything you need to know</p>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <details key={q} className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl group">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none">
                  <span className="font-display font-semibold text-[#111827] text-sm">{q}</span>
                  <span className="text-[#10B981] font-bold text-lg group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-4 text-sm text-[#6B7280] leading-relaxed">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[#F8FAFC] border-t border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display font-bold text-2xl text-[#111827] mb-3">Ready to Get Started?</h2>
          <p className="text-[#6B7280] text-sm mb-6">Whether you&rsquo;re looking for a job or looking to hire, we&rsquo;re here to help.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/apply" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#10B981] text-white font-semibold rounded-lg text-sm hover:bg-[#059669] transition-colors">
              Apply for a Job →
            </Link>
            <Link href="/hire" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#E5E7EB] text-[#374151] font-semibold rounded-lg text-sm hover:bg-white transition-colors">
              Post a Job Opening
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
