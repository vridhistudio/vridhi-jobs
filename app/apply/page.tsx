import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ApplyPage() {
  return (
    <>
      <Navbar />

      {/* Page header */}
      <section className="bg-white border-b border-[#E5E7EB] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ECFDF5] border border-[#A7F3D0] rounded-full text-xs font-semibold text-[#059669] mb-4">
            ✅ 100% Free for job seekers — always
          </div>
          <h1 className="font-display font-bold text-3xl md:text-4xl text-[#111827] mb-3">Apply for a Job</h1>
          <p className="text-[#6B7280] max-w-lg">Tell us about yourself — Anita personally reviews every application and calls you within 48 hours.</p>
        </div>
      </section>

      {/* Body */}
      <section className="py-14 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Form card */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-panel border border-[#E5E7EB]">
                <h2 className="font-display font-bold text-xl text-[#111827] mb-6">Your Details</h2>
                <div className="space-y-5">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#374151] mb-1.5">Full Name <span className="text-red-400">*</span></label>
                      <input type="text" placeholder="e.g. Priya Sharma"
                        className="w-full px-4 py-3 text-sm border border-[#E5E7EB] rounded-xl focus:outline-none focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/10 text-[#111827] placeholder-[#9CA3AF] transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#374151] mb-1.5">Mobile Number <span className="text-red-400">*</span></label>
                      <div className="flex">
                        <span className="px-3 py-3 bg-[#F9FAFB] border border-r-0 border-[#E5E7EB] rounded-l-xl text-sm text-[#6B7280] font-medium">+91</span>
                        <input type="tel" placeholder="98765 43210"
                          className="flex-1 px-4 py-3 text-sm border border-[#E5E7EB] rounded-r-xl focus:outline-none focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/10 text-[#111827] placeholder-[#9CA3AF] transition-all" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#374151] mb-1.5">Email Address <span className="text-[#9CA3AF] font-normal">(optional)</span></label>
                    <input type="email" placeholder="priya@example.com"
                      className="w-full px-4 py-3 text-sm border border-[#E5E7EB] rounded-xl focus:outline-none focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/10 text-[#111827] placeholder-[#9CA3AF] transition-all" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#374151] mb-1.5">Highest Qualification <span className="text-red-400">*</span></label>
                      <select className="w-full px-4 py-3 text-sm border border-[#E5E7EB] rounded-xl focus:outline-none focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/10 text-[#374151] bg-white transition-all">
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
                      <select className="w-full px-4 py-3 text-sm border border-[#E5E7EB] rounded-xl focus:outline-none focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/10 text-[#374151] bg-white transition-all">
                        <option>Fresher (No experience)</option>
                        <option>Less than 1 year</option>
                        <option>1 – 2 years</option>
                        <option>2 – 5 years</option>
                        <option>5+ years</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#374151] mb-1.5">Skills / What kind of work can you do? <span className="text-red-400">*</span></label>
                    <textarea rows={3} placeholder="e.g. Data entry, MS Excel, typing, customer support, telecalling, accounts..."
                      className="w-full px-4 py-3 text-sm border border-[#E5E7EB] rounded-xl focus:outline-none focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/10 text-[#111827] placeholder-[#9CA3AF] resize-none transition-all" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#374151] mb-2.5">Work Type Preference <span className="text-red-400">*</span></label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['Work From Home', 'Full-Time Office', 'Part-Time', 'Any / Flexible'].map(opt => (
                        <label key={opt} className="relative flex items-center gap-2 px-3 py-2.5 border border-[#E5E7EB] rounded-xl cursor-pointer hover:border-[#10B981] hover:bg-[#ECFDF5] transition-all has-[:checked]:border-[#10B981] has-[:checked]:bg-[#ECFDF5]">
                          <input type="radio" name="worktype" className="accent-[#10B981] shrink-0" />
                          <span className="text-xs font-medium text-[#374151]">{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#374151] mb-1.5">Preferred Location <span className="text-red-400">*</span></label>
                      <input type="text" placeholder="e.g. Gomti Nagar, Lucknow"
                        className="w-full px-4 py-3 text-sm border border-[#E5E7EB] rounded-xl focus:outline-none focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/10 text-[#111827] placeholder-[#9CA3AF] transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#374151] mb-1.5">Expected Salary / Month</label>
                      <input type="text" placeholder="e.g. ₹10,000 – ₹15,000"
                        className="w-full px-4 py-3 text-sm border border-[#E5E7EB] rounded-xl focus:outline-none focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/10 text-[#111827] placeholder-[#9CA3AF] transition-all" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#374151] mb-1.5">Attach Resume <span className="text-[#9CA3AF] font-normal">(optional)</span></label>
                    <div className="border-2 border-dashed border-[#E5E7EB] rounded-xl p-6 text-center hover:border-[#10B981] hover:bg-[#ECFDF5]/50 transition-all cursor-pointer group">
                      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">📎</div>
                      <p className="text-sm font-medium text-[#374151]">Click to upload or drag &amp; drop</p>
                      <p className="text-xs text-[#9CA3AF] mt-1">PDF, DOC up to 5MB · Not mandatory</p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#374151] mb-1.5">How did you hear about us?</label>
                    <select className="w-full px-4 py-3 text-sm border border-[#E5E7EB] rounded-xl focus:outline-none focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/10 text-[#374151] bg-white transition-all">
                      <option>WhatsApp</option>
                      <option>Google Search</option>
                      <option>Friend / Referral</option>
                      <option>Social Media</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <button className="w-full py-3.5 bg-[#10B981] text-white font-semibold rounded-xl hover:bg-[#059669] active:scale-[0.99] transition-all text-sm shadow-[0_4px_16px_rgba(16,185,129,0.3)]">
                    Submit Application →
                  </button>
                  <p className="text-center text-xs text-[#6B7280]">
                    Prefer WhatsApp?{' '}
                    <a href="https://wa.me/918579898230" target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-semibold hover:underline">
                      💬 Message Anita directly
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">

              {/* Anita card */}
              <div className="bg-[#064E3B] rounded-2xl p-6 text-white">
                <div className="w-14 h-14 rounded-2xl bg-[#10B981] flex items-center justify-center font-display font-bold text-lg mb-4 shadow-glow-green">AS</div>
                <h3 className="font-display font-semibold text-white mb-0.5">Anita Srivastava</h3>
                <p className="text-xs text-green-300 mb-4">Founder & Placement Consultant</p>
                <p className="text-sm text-green-100 leading-relaxed mb-5 border-l-4 border-[#10B981] pl-3 italic">
                  &ldquo;I personally review every application and call within 48 hours.&rdquo;
                </p>
                <div className="space-y-2.5">
                  <a href="tel:+918579898230" className="flex items-center gap-2 text-sm text-green-200 hover:text-white transition-colors">
                    📞 +91 85798 98230
                  </a>
                  <a href="https://wa.me/918579898230" target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 bg-[#25D366] text-white font-semibold rounded-xl text-sm hover:bg-[#1ebe5d] transition-colors">
                    💬 WhatsApp Anita
                  </a>
                </div>
              </div>

              {/* Why us */}
              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-card">
                <h3 className="font-display font-semibold text-[#111827] mb-4 text-sm">Why Apply Through Us?</h3>
                <ul className="space-y-2.5">
                  {[
                    ['✅', '100% free — we never charge candidates'],
                    ['✅', 'Personal guidance at every step'],
                    ['✅', 'Direct connection with employers'],
                    ['✅', 'Lucknow, Kanpur, Noida & UP region'],
                    ['✅', 'WFH & part-time roles available'],
                    ['✅', 'Fresher-friendly openings'],
                  ].map(([icon, text]) => (
                    <li key={text} className="flex items-start gap-2 text-sm text-[#374151] leading-snug">
                      <span className="shrink-0 mt-0.5">{icon}</span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hours */}
              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">🕐</span>
                  <h3 className="font-display font-semibold text-[#111827] text-sm">Working Hours</h3>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#374151] font-medium">Mon – Sat</span>
                  <span className="text-[#10B981] font-semibold">10 AM – 6 PM</span>
                </div>
                <div className="flex justify-between text-sm mt-1.5">
                  <span className="text-[#9CA3AF]">Sunday</span>
                  <span className="text-[#9CA3AF]">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
