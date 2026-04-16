import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function HirePage() {
  return (
    <>
      <Navbar />

      <section className="bg-white border-b border-[#E5E7EB] py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ECFDF5] rounded-full text-xs font-semibold text-[#059669] mb-4">
            500+ placements done · Free for employers
          </div>
          <h1 className="font-display font-bold text-3xl text-[#111827] mb-2">Hire the Right Candidate, Fast</h1>
          <p className="text-[#6B7280] text-sm">Tell us what you need — we&rsquo;ll match you with pre-screened candidates from Lucknow, Kanpur, and nearby cities.</p>
        </div>
      </section>

      <section className="py-12 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 md:p-8 shadow-sm">
                <h2 className="font-display font-bold text-xl text-[#111827] mb-6">Post a Job Opening</h2>
                <div className="space-y-5">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#374151] mb-1.5">Company / Business Name *</label>
                      <input type="text" placeholder="e.g. Sharma Enterprises" className="w-full px-3 py-2.5 text-sm border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#10B981] text-[#111827] placeholder-[#9CA3AF]" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#374151] mb-1.5">Contact Person Name *</label>
                      <input type="text" placeholder="Your name" className="w-full px-3 py-2.5 text-sm border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#10B981] text-[#111827] placeholder-[#9CA3AF]" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#374151] mb-1.5">Mobile Number *</label>
                      <div className="flex">
                        <span className="px-3 py-2.5 bg-[#F9FAFB] border border-r-0 border-[#E5E7EB] rounded-l-lg text-sm text-[#6B7280] font-medium">+91</span>
                        <input type="tel" placeholder="98765 43210" className="flex-1 px-3 py-2.5 text-sm border border-[#E5E7EB] rounded-r-lg focus:outline-none focus:border-[#10B981] text-[#111827] placeholder-[#9CA3AF]" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#374151] mb-1.5">Email Address</label>
                      <input type="email" placeholder="you@company.com" className="w-full px-3 py-2.5 text-sm border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#10B981] text-[#111827] placeholder-[#9CA3AF]" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#374151] mb-1.5">Job Title / Role *</label>
                      <input type="text" placeholder="e.g. Receptionist, Data Entry Operator" className="w-full px-3 py-2.5 text-sm border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#10B981] text-[#111827] placeholder-[#9CA3AF]" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#374151] mb-1.5">Number of Openings *</label>
                      <input type="number" min="1" placeholder="e.g. 2" className="w-full px-3 py-2.5 text-sm border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#10B981] text-[#111827] placeholder-[#9CA3AF]" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#374151] mb-1.5">Salary Range (per month) *</label>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 flex">
                        <span className="px-3 py-2.5 bg-[#F9FAFB] border border-r-0 border-[#E5E7EB] rounded-l-lg text-sm text-[#6B7280] font-medium">₹</span>
                        <input type="number" placeholder="From" className="flex-1 px-3 py-2.5 text-sm border border-[#E5E7EB] rounded-r-lg focus:outline-none focus:border-[#10B981] text-[#111827] placeholder-[#9CA3AF]" />
                      </div>
                      <span className="text-[#6B7280] text-sm font-medium">–</span>
                      <div className="flex-1 flex">
                        <span className="px-3 py-2.5 bg-[#F9FAFB] border border-r-0 border-[#E5E7EB] rounded-l-lg text-sm text-[#6B7280] font-medium">₹</span>
                        <input type="number" placeholder="To" className="flex-1 px-3 py-2.5 text-sm border border-[#E5E7EB] rounded-r-lg focus:outline-none focus:border-[#10B981] text-[#111827] placeholder-[#9CA3AF]" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#374151] mb-2">Work Type *</label>
                    <div className="flex flex-wrap gap-3">
                      {['Full-Time', 'Part-Time', 'Work From Home', 'Contract'].map(opt => (
                        <label key={opt} className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="worktype" className="accent-[#10B981]" />
                          <span className="text-sm text-[#374151]">{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#374151] mb-1.5">Location / Area *</label>
                    <input type="text" placeholder="e.g. Gomti Nagar, Lucknow" className="w-full px-3 py-2.5 text-sm border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#10B981] text-[#111827] placeholder-[#9CA3AF]" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#374151] mb-1.5">Job Description / Requirements</label>
                    <textarea rows={4} placeholder="Describe the role, required skills, timings, or any specific requirements..." className="w-full px-3 py-2.5 text-sm border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#10B981] text-[#111827] placeholder-[#9CA3AF] resize-none"></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#374151] mb-1.5">How did you hear about us?</label>
                    <select className="w-full px-3 py-2.5 text-sm border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#10B981] text-[#374151] bg-white">
                      <option>Google</option>
                      <option>WhatsApp</option>
                      <option>Referral</option>
                      <option>Social Media</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <button className="w-full py-3 bg-[#10B981] text-white font-semibold rounded-lg hover:bg-[#059669] transition-colors text-sm">
                    Submit Job Requirement
                  </button>
                  <p className="text-center text-xs text-[#6B7280]">
                    Or call us directly:{' '}
                    <a href="tel:+918579898230" className="text-[#10B981] font-semibold">📞 8579898230</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm">
                <h3 className="font-display font-semibold text-[#111827] mb-4 text-sm">Why Hire Through Us?</h3>
                <ul className="space-y-3 text-sm text-[#374151]">
                  {[
                    '✅ Free for employers',
                    '✅ Pre-screened candidates only',
                    '✅ Fast turnaround — 3 to 5 days',
                    '✅ Specialised in Lucknow & UP region',
                    '✅ Direct WhatsApp coordination',
                    '✅ Personal attention from Anita',
                  ].map(item => (
                    <li key={item} className="leading-snug">{item}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#ECFDF5] border border-[#A7F3D0] rounded-2xl p-6">
                <div className="w-14 h-14 rounded-full bg-[#10B981] flex items-center justify-center text-white font-display font-bold text-lg mb-4">AS</div>
                <h3 className="font-display font-semibold text-[#111827] mb-0.5">Anita Srivastava</h3>
                <p className="text-xs text-[#6B7280] mb-4">Placement Consultant</p>
                <div className="space-y-2">
                  <a href="tel:+918579898230" className="flex items-center gap-2 text-sm text-[#374151] hover:text-[#10B981]">📞 +91 85798 98230</a>
                  <a href="https://wa.me/918579898230" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-[#25D366] hover:underline">💬 WhatsApp Anita</a>
                </div>
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
