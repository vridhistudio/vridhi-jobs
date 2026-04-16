import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ApplyPage() {
  return (
    <>
      <Navbar />

      {/* Dark page header */}
      <section
        className="bg-[#0A0F1E] py-16 relative overflow-hidden"
        style={{
          backgroundImage:
            'linear-gradient(rgba(16,185,129,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(16,185,129,0.03) 1px,transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#10B981]/10 border border-[#10B981]/20 text-[#10B981] rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] mb-5">
            Always Free
          </div>
          <h1
            className="font-display font-black text-white tracking-[-0.04em] leading-[1.05]"
            style={{ fontSize: 'clamp(40px,5vw,64px)' }}
          >
            Apply for a Job
          </h1>
          <p className="text-white/40 mt-4 max-w-md leading-relaxed text-[15px]">
            Tell us about yourself — Anita personally reviews every application and calls within 48 hours.
          </p>
          <div className="inline-flex flex-wrap gap-2 mt-5">
            {[
              '✅ Free for candidates',
              '⚡ 48h response',
              '💬 WhatsApp support',
            ].map((pill) => (
              <span
                key={pill}
                className="bg-white/[0.08] border border-white/[0.10] rounded-full px-3 py-1 text-xs text-white/50 font-medium"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-[#F9FAFB] py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 sm:px-6">

          {/* Form card */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_32px_64px_rgba(0,0,0,0.07)]">
              <h2
                className="font-display font-black text-[#111827] mb-8"
                style={{ fontSize: 'clamp(22px,3vw,28px)' }}
              >
                Your Details
              </h2>

              <div className="space-y-5">

                {/* Name + Mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#374151] mb-1.5">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Priya Sharma"
                      className="w-full rounded-full bg-[#F3F4F6] border-0 px-5 py-3 text-[15px] text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#10B981]/20 focus:bg-white transition-all duration-200"
                    />
                  </div>
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
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-[#374151] mb-1.5">
                    Email Address <span className="text-[#9CA3AF] font-normal">(optional)</span>
                  </label>
                  <input
                    type="email"
                    placeholder="priya@example.com"
                    className="w-full rounded-full bg-[#F3F4F6] border-0 px-5 py-3 text-[15px] text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#10B981]/20 focus:bg-white transition-all duration-200"
                  />
                </div>

                {/* Qualification + Experience */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#374151] mb-1.5">
                      Highest Qualification <span className="text-red-400">*</span>
                    </label>
                    <select className="w-full rounded-2xl bg-[#F3F4F6] border-0 px-5 py-3 text-[15px] text-[#374151] focus:outline-none focus:ring-2 focus:ring-[#10B981]/20 focus:bg-white transition-all duration-200">
                      <option value="">Select qualification</option>
                      <option>10th Pass</option>
                      <option>12th Pass</option>
                      <option>Graduate (B.A / B.Com / B.Sc)</option>
                      <option>Graduate (B.Tech / Engineering)</option>
                      <option>Post-Graduate</option>
                      <option>Diploma</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#374151] mb-1.5">Work Experience</label>
                    <select className="w-full rounded-2xl bg-[#F3F4F6] border-0 px-5 py-3 text-[15px] text-[#374151] focus:outline-none focus:ring-2 focus:ring-[#10B981]/20 focus:bg-white transition-all duration-200">
                      <option>Fresher (No experience)</option>
                      <option>Less than 1 year</option>
                      <option>1 &ndash; 2 years</option>
                      <option>2 &ndash; 5 years</option>
                      <option>5+ years</option>
                    </select>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <label className="block text-sm font-semibold text-[#374151] mb-1.5">
                    Skills / What kind of work? <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Data entry, MS Excel, typing, customer support, telecalling, accounts..."
                    className="w-full rounded-2xl bg-[#F3F4F6] border-0 px-5 py-3 text-[15px] text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#10B981]/20 focus:bg-white transition-all duration-200 resize-none"
                  />
                </div>

                {/* Work Type tiles */}
                <div>
                  <label className="block text-sm font-semibold text-[#374151] mb-2.5">
                    Work Type Preference <span className="text-red-400">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['Work From Home', 'Full-Time', 'Part-Time', 'Any / Flexible'].map((opt) => (
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

                {/* Location + Salary */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#374151] mb-1.5">
                      Preferred Location <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Gomti Nagar, Lucknow"
                      className="w-full rounded-full bg-[#F3F4F6] border-0 px-5 py-3 text-[15px] text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#10B981]/20 focus:bg-white transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#374151] mb-1.5">Expected Salary / Month</label>
                    <input
                      type="text"
                      placeholder="e.g. ₹10,000 – ₹15,000"
                      className="w-full rounded-full bg-[#F3F4F6] border-0 px-5 py-3 text-[15px] text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#10B981]/20 focus:bg-white transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Resume upload */}
                <div>
                  <label className="block text-sm font-semibold text-[#374151] mb-1.5">
                    Attach Resume <span className="text-[#9CA3AF] font-normal">(optional)</span>
                  </label>
                  <div className="border-2 border-dashed border-[#E5E7EB] rounded-2xl p-8 text-center hover:border-[#10B981] hover:bg-[#ECFDF5]/30 transition-all cursor-pointer">
                    <div className="text-2xl mb-2">📎</div>
                    <p className="text-sm font-medium text-[#374151]">Click to upload or drag &amp; drop</p>
                    <p className="text-xs text-[#9CA3AF] mt-1">PDF, DOC up to 5MB &middot; Not mandatory</p>
                  </div>
                </div>

                {/* How did you hear */}
                <div>
                  <label className="block text-sm font-semibold text-[#374151] mb-1.5">How did you hear about us?</label>
                  <select className="w-full rounded-2xl bg-[#F3F4F6] border-0 px-5 py-3 text-[15px] text-[#374151] focus:outline-none focus:ring-2 focus:ring-[#10B981]/20 focus:bg-white transition-all duration-200">
                    <option>WhatsApp</option>
                    <option>Google Search</option>
                    <option>Friend / Referral</option>
                    <option>Social Media</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Submit */}
                <button className="w-full py-3.5 rounded-full bg-[#10B981] text-white font-bold text-[15px] hover:bg-[#059669] hover:shadow-[0_0_0_4px_rgba(16,185,129,0.20)] transition-all duration-200">
                  Submit Application &rarr;
                </button>
                <p className="text-center text-xs text-[#6B7280] mt-3">
                  Or WhatsApp:{' '}
                  <a
                    href="https://wa.me/918579898230"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] font-semibold"
                  >
                    💬 +91 85798 98230
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">

            {/* Anita dark card */}
            <div className="bg-[#064E3B] rounded-3xl p-6">
              <div className="w-14 h-14 rounded-2xl bg-[#10B981] flex items-center justify-center text-white font-display font-black text-xl shadow-[0_0_0_3px_rgba(16,185,129,0.30)]">
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

            {/* Why apply */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#10B981] mb-1">Benefits</p>
              <p className="font-display font-bold text-[#111827] text-[15px] mb-4">Why Apply Through Us?</p>
              <ul className="space-y-2.5">
                {[
                  '✅ 100% free — never charge candidates',
                  '✅ Personal guidance at every step',
                  '✅ Direct connection with employers',
                  '✅ Lucknow, Kanpur, Noida & UP',
                  '✅ WFH & part-time roles available',
                  '✅ Fresher-friendly openings',
                ].map((item) => (
                  <li key={item} className="flex gap-2 items-start text-sm text-[#374151]">
                    {item}
                  </li>
                ))}
              </ul>
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
