import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function HirePage() {
  return (
    <>
      <Navbar />

      {/* Page header */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-[#ECFDF5] text-[#059669] rounded-full px-4 py-1.5 text-xs font-bold mb-4">
            500+ placements done &middot; Free for employers
          </div>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight text-[#111827]">
            Hire the Right Candidate, Fast
          </h1>
          <p className="text-[#6B7280] mt-3 max-w-lg leading-relaxed">
            Tell us what you need &mdash; we&rsquo;ll send you pre-screened candidates from Lucknow, Kanpur &amp; UP.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-[#F9FAFB] py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 sm:px-6">

          {/* Form card */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_32px_64px_rgba(0,0,0,0.07)]">
              <h2 className="font-display font-bold text-2xl text-[#111827] mb-8">Post a Job Opening</h2>

              <div className="space-y-5">

                {/* Company + Contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#374151] mb-1.5">
                      Company / Business Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Sharma Enterprises"
                      className="w-full rounded-full bg-[#F3F4F6] border-0 px-5 py-3 text-[15px] text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#10B981]/20 focus:bg-white transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#374151] mb-1.5">
                      Contact Person Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-full bg-[#F3F4F6] border-0 px-5 py-3 text-[15px] text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#10B981]/20 focus:bg-white transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Mobile + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#374151] mb-1.5">
                      Mobile Number <span className="text-red-400">*</span>
                    </label>
                    <div className="flex">
                      <span className="px-4 py-3 bg-[#F3F4F6] rounded-l-full text-sm text-[#6B7280] font-medium border-r border-[#E5E7EB]">+91</span>
                      <input
                        type="tel"
                        placeholder="98765 43210"
                        className="flex-1 rounded-r-full bg-[#F3F4F6] border-0 px-5 py-3 text-[15px] text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#10B981]/20 focus:bg-white transition-all duration-200"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#374151] mb-1.5">
                      Email Address <span className="text-[#9CA3AF] font-normal">(optional)</span>
                    </label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      className="w-full rounded-full bg-[#F3F4F6] border-0 px-5 py-3 text-[15px] text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#10B981]/20 focus:bg-white transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Job Title + Openings */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#374151] mb-1.5">
                      Job Title / Role <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Receptionist, Data Entry"
                      className="w-full rounded-full bg-[#F3F4F6] border-0 px-5 py-3 text-[15px] text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#10B981]/20 focus:bg-white transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#374151] mb-1.5">
                      Number of Openings <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="number"
                      min="1"
                      placeholder="e.g. 2"
                      className="w-full rounded-full bg-[#F3F4F6] border-0 px-5 py-3 text-[15px] text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#10B981]/20 focus:bg-white transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Salary range */}
                <div>
                  <label className="block text-sm font-semibold text-[#374151] mb-1.5">
                    Salary Range (per month) <span className="text-red-400">*</span>
                  </label>
                  <div className="flex items-center gap-3">
                    <div className="flex flex-1">
                      <span className="px-3 py-3 bg-[#F3F4F6] rounded-l-full text-sm text-[#6B7280] font-medium border-r border-[#E5E7EB]">₹</span>
                      <input
                        type="number"
                        placeholder="Min"
                        className="rounded-r-full flex-1 bg-[#F3F4F6] border-0 px-5 py-3 text-[15px] text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#10B981]/20 focus:bg-white transition-all duration-200"
                      />
                    </div>
                    <span className="text-[#9CA3AF] text-sm font-medium shrink-0">&ndash;</span>
                    <div className="flex flex-1">
                      <span className="px-3 py-3 bg-[#F3F4F6] rounded-l-full text-sm text-[#6B7280] font-medium border-r border-[#E5E7EB]">₹</span>
                      <input
                        type="number"
                        placeholder="Max"
                        className="rounded-r-full flex-1 bg-[#F3F4F6] border-0 px-5 py-3 text-[15px] text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#10B981]/20 focus:bg-white transition-all duration-200"
                      />
                    </div>
                  </div>
                </div>

                {/* Work Type */}
                <div>
                  <label className="block text-sm font-semibold text-[#374151] mb-2.5">
                    Work Type <span className="text-red-400">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['Full-Time', 'Part-Time', 'Work From Home', 'Contract'].map((opt) => (
                      <label
                        key={opt}
                        className="border border-[#E5E7EB] rounded-2xl px-4 py-3 cursor-pointer hover:border-[#10B981] hover:bg-[#ECFDF5] transition-all text-sm font-medium text-[#374151] flex items-center gap-2"
                      >
                        <input type="radio" name="worktype" className="accent-[#10B981] shrink-0" />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-semibold text-[#374151] mb-1.5">
                    Location / Area <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Gomti Nagar, Lucknow"
                    className="w-full rounded-full bg-[#F3F4F6] border-0 px-5 py-3 text-[15px] text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#10B981]/20 focus:bg-white transition-all duration-200"
                  />
                </div>

                {/* Job Description */}
                <div>
                  <label className="block text-sm font-semibold text-[#374151] mb-1.5">Job Description / Requirements</label>
                  <textarea
                    rows={4}
                    placeholder="Describe the role, required skills, timings, or any specific requirements..."
                    className="w-full rounded-2xl bg-[#F3F4F6] border-0 px-5 py-3 text-[15px] text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#10B981]/20 focus:bg-white transition-all duration-200 resize-none"
                  />
                </div>

                {/* How did you hear */}
                <div>
                  <label className="block text-sm font-semibold text-[#374151] mb-1.5">How did you hear about us?</label>
                  <select className="w-full rounded-2xl bg-[#F3F4F6] border-0 px-5 py-3 text-[15px] text-[#374151] focus:outline-none focus:ring-2 focus:ring-[#10B981]/20 focus:bg-white transition-all duration-200">
                    <option>Google</option>
                    <option>WhatsApp</option>
                    <option>Referral</option>
                    <option>Social Media</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Submit */}
                <button className="w-full py-3.5 rounded-full bg-[#10B981] text-white font-semibold text-[15px] hover:bg-[#059669] hover:shadow-[0_0_0_4px_rgba(16,185,129,0.20)] transition-all duration-200">
                  Submit Job Requirement &rarr;
                </button>
                <p className="text-center text-xs text-[#6B7280] mt-3">
                  Or call:{' '}
                  <a href="tel:+918579898230" className="text-[#10B981] font-semibold">
                    📞 +91 85798 98230
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">

            {/* Why hire */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <p className="font-display font-semibold text-[#111827] text-sm mb-4">Why Hire Through Us?</p>
              <ul className="space-y-2.5">
                {[
                  ['🆓', 'Free for employers'],
                  ['🔍', 'Pre-screened candidates'],
                  ['⚡', '3–5 day turnaround'],
                  ['📍', 'Lucknow & UP specialists'],
                  ['💬', 'WhatsApp coordination'],
                  ['👩‍💼', 'Personal attention from Anita'],
                ].map(([icon, text]) => (
                  <li key={text} className="flex gap-2 items-start text-sm text-[#374151]">
                    <span className="shrink-0">{icon}</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Anita card — dark */}
            <div className="bg-[#064E3B] rounded-3xl p-6">
              <div className="w-14 h-14 rounded-2xl bg-[#10B981] flex items-center justify-center text-white font-display font-extrabold text-xl shadow-[0_0_0_3px_rgba(16,185,129,0.30)]">
                AS
              </div>
              <p className="font-display font-bold text-white mt-4">Anita Srivastava</p>
              <p className="text-xs text-white/60 mt-0.5">Founder &amp; Placement Consultant</p>
              <p className="text-sm text-white/80 leading-relaxed italic border-l-4 border-[#10B981] pl-3 mt-4">
                &ldquo;I personally review every application and call within 48 hours.&rdquo;
              </p>
              <a
                href="https://wa.me/918579898230"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 w-full py-2.5 rounded-full bg-[#25D366] text-white text-sm font-semibold text-center block hover:bg-[#1ebe5d] transition-colors"
              >
                💬 WhatsApp Anita
              </a>
            </div>

            {/* How it works */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <p className="font-display font-semibold text-[#111827] text-sm mb-4">How It Works</p>
              <div className="space-y-3">
                {[
                  ['1', 'Submit this form'],
                  ['2', 'Anita shortlists candidates'],
                  ['3', 'You interview & hire'],
                ].map(([n, step]) => (
                  <div key={n} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center text-xs font-bold text-[#10B981] shrink-0 mt-0.5">
                      {n}
                    </div>
                    <p className="text-sm text-[#374151] leading-snug">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Working hours */}
            <div className="bg-white rounded-2xl p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-2 mb-3">
                <span>🕐</span>
                <span className="font-semibold text-sm text-[#111827]">Working Hours</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#374151]">Mon &ndash; Sat</span>
                <span className="text-[#10B981] font-semibold">10 AM &ndash; 6 PM</span>
              </div>
              <div className="flex justify-between text-sm text-[#9CA3AF] mt-1.5">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
