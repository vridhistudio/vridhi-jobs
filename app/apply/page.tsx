import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ApplyPage() {
  return (
    <>
      <Navbar />

      <section className="bg-white border-b border-[#E5E7EB] py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="font-display font-bold text-3xl text-[#111827] mb-2">Apply for a Job</h1>
          <p className="text-[#6B7280] text-sm">Tell us about yourself — Anita will personally review your application and match you with the right opportunities.</p>
        </div>
      </section>

      <section className="py-12 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 md:p-8 shadow-sm">
                <h2 className="font-display font-bold text-xl text-[#111827] mb-6">Your Details</h2>
                <div className="space-y-5">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#374151] mb-1.5">Full Name *</label>
                      <input type="text" placeholder="e.g. Priya Sharma" className="w-full px-3 py-2.5 text-sm border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#10B981] text-[#111827] placeholder-[#9CA3AF]" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#374151] mb-1.5">Mobile Number *</label>
                      <div className="flex">
                        <span className="px-3 py-2.5 bg-[#F9FAFB] border border-r-0 border-[#E5E7EB] rounded-l-lg text-sm text-[#6B7280] font-medium">+91</span>
                        <input type="tel" placeholder="98765 43210" className="flex-1 px-3 py-2.5 text-sm border border-[#E5E7EB] rounded-r-lg focus:outline-none focus:border-[#10B981] text-[#111827] placeholder-[#9CA3AF]" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#374151] mb-1.5">Email Address</label>
                    <input type="email" placeholder="priya@example.com (optional)" className="w-full px-3 py-2.5 text-sm border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#10B981] text-[#111827] placeholder-[#9CA3AF]" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#374151] mb-1.5">Highest Qualification *</label>
                      <select className="w-full px-3 py-2.5 text-sm border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#10B981] text-[#374151] bg-white">
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
                      <select className="w-full px-3 py-2.5 text-sm border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#10B981] text-[#374151] bg-white">
                        <option>Fresher (No experience)</option>
                        <option>Less than 1 year</option>
                        <option>1 – 2 years</option>
                        <option>2 – 5 years</option>
                        <option>5+ years</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#374151] mb-1.5">Skills / What kind of work can you do? *</label>
                    <textarea rows={3} placeholder="e.g. Data entry, MS Excel, typing, customer support, telecalling, accounts..." className="w-full px-3 py-2.5 text-sm border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#10B981] text-[#111827] placeholder-[#9CA3AF] resize-none"></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#374151] mb-2">Work Type Preference *</label>
                    <div className="flex flex-wrap gap-3">
                      {['Work From Home', 'Full-Time Office', 'Part-Time', 'Any / Flexible'].map(opt => (
                        <label key={opt} className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="worktype" className="accent-[#10B981]" />
                          <span className="text-sm text-[#374151]">{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#374151] mb-1.5">Preferred Location / Area *</label>
                    <input type="text" placeholder="e.g. Gomti Nagar, Lucknow" className="w-full px-3 py-2.5 text-sm border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#10B981] text-[#111827] placeholder-[#9CA3AF]" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#374151] mb-1.5">Expected Salary (per month)</label>
                    <input type="text" placeholder="e.g. ₹10,000 – ₹15,000" className="w-full px-3 py-2.5 text-sm border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#10B981] text-[#111827] placeholder-[#9CA3AF]" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#374151] mb-1.5">Attach Resume (optional)</label>
                    <div className="border-2 border-dashed border-[#E5E7EB] rounded-lg p-6 text-center hover:border-[#10B981] transition-colors cursor-pointer">
                      <div className="text-2xl mb-2">📎</div>
                      <p className="text-sm text-[#6B7280]">Click to upload or drag & drop</p>
                      <p className="text-xs text-[#9CA3AF] mt-1">PDF, DOC up to 5MB · Not mandatory</p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#374151] mb-1.5">How did you hear about us?</label>
                    <select className="w-full px-3 py-2.5 text-sm border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#10B981] text-[#374151] bg-white">
                      <option>WhatsApp</option>
                      <option>Google Search</option>
                      <option>Friend / Referral</option>
                      <option>Social Media</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <button className="w-full py-3 bg-[#10B981] text-white font-semibold rounded-lg hover:bg-[#059669] transition-colors text-sm">
                    Submit Application
                  </button>
                  <p className="text-center text-xs text-[#6B7280]">
                    Or WhatsApp directly:{' '}
                    <a href="https://wa.me/918579898230" target="_blank" rel="noopener noreferrer" className="text-[#10B981] font-semibold">
                      💬 +91 85798 98230
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="bg-[#ECFDF5] border border-[#A7F3D0] rounded-2xl p-6">
                <div className="w-14 h-14 rounded-full bg-[#10B981] flex items-center justify-center text-white font-display font-bold text-lg mb-4">AS</div>
                <h3 className="font-display font-semibold text-[#111827] mb-1">Anita Srivastava</h3>
                <p className="text-xs text-[#6B7280] mb-4">Founder & Placement Consultant</p>
                <p className="text-sm text-[#374151] leading-relaxed mb-4">
                  &ldquo;I personally review every application. Once you submit, I&rsquo;ll call or WhatsApp you within 48 hours.&rdquo;
                </p>
                <div className="space-y-2">
                  <a href="tel:+918579898230" className="flex items-center gap-2 text-sm text-[#374151] hover:text-[#10B981]">
                    📞 +91 85798 98230
                  </a>
                  <a href="https://wa.me/918579898230" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-[#25D366] hover:underline">
                    💬 WhatsApp Anita
                  </a>
                </div>
              </div>

              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6">
                <h3 className="font-display font-semibold text-[#111827] mb-4 text-sm">Why Apply Through Us?</h3>
                <ul className="space-y-3 text-sm text-[#374151]">
                  {[
                    '✅ 100% free — we never charge candidates',
                    '✅ Personal guidance at every step',
                    '✅ Direct connection with employers',
                    '✅ Lucknow, Kanpur, Noida & UP region',
                    '✅ WFH & part-time roles available',
                    '✅ Fresher-friendly openings',
                  ].map(item => (
                    <li key={item} className="leading-snug">{item}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6">
                <h3 className="font-display font-semibold text-[#111827] mb-3 text-sm">Working Hours</h3>
                <p className="text-sm text-[#6B7280]">Mon – Sat: 10:00 AM – 6:00 PM</p>
                <p className="text-sm text-[#9CA3AF] mt-1">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
