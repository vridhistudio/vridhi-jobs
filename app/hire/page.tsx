import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const perks = [
  ['🆓', 'Completely free for employers'],
  ['🔍', 'Pre-screened, interview-ready candidates'],
  ['⚡', 'Fast turnaround — 3 to 5 business days'],
  ['📍', 'Specialists in Lucknow & UP region'],
  ['💬', 'Direct WhatsApp coordination'],
  ['👩‍💼', 'Personal attention from Anita'],
];

export default function HirePage() {
  return (
    <>
      <Navbar />

      {/* Page header */}
      <section className="bg-white border-b border-[#E5E7EB] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ECFDF5] border border-[#A7F3D0] rounded-full text-xs font-semibold text-[#059669] mb-4">
            500+ placements done · Free for employers
          </div>
          <h1 className="font-display font-bold text-3xl md:text-4xl text-[#111827] mb-3">Hire the Right Candidate, Fast</h1>
          <p className="text-[#6B7280] max-w-lg">Tell us what you need — we&rsquo;ll match you with pre-screened candidates from Lucknow, Kanpur, and nearby cities.</p>
        </div>
      </section>

      {/* Body */}
      <section className="py-14 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Form card */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-panel border border-[#E5E7EB]">
                <h2 className="font-display font-bold text-xl text-[#111827] mb-6">Post a Job Opening</h2>
                <div className="space-y-5">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#374151] mb-1.5">Company / Business Name <span className="text-red-400">*</span></label>
                      <input type="text" placeholder="e.g. Sharma Enterprises"
                        className="w-full px-4 py-3 text-sm border border-[#E5E7EB] rounded-xl focus:outline-none focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/10 text-[#111827] placeholder-[#9CA3AF] transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#374151] mb-1.5">Contact Person Name <span className="text-red-400">*</span></label>
                      <input type="text" placeholder="Your name"
                        className="w-full px-4 py-3 text-sm border border-[#E5E7EB] rounded-xl focus:outline-none focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/10 text-[#111827] placeholder-[#9CA3AF] transition-all" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#374151] mb-1.5">Mobile Number <span className="text-red-400">*</span></label>
                      <div className="flex">
                        <span className="px-3 py-3 bg-[#F9FAFB] border border-r-0 border-[#E5E7EB] rounded-l-xl text-sm text-[#6B7280] font-medium">+91</span>
                        <input type="tel" placeholder="98765 43210"
                          className="flex-1 px-4 py-3 text-sm border border-[#E5E7EB] rounded-r-xl focus:outline-none focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/10 text-[#111827] placeholder-[#9CA3AF] transition-all" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#374151] mb-1.5">Email Address <span className="text-[#9CA3AF] font-normal">(optional)</span></label>
                      <input type="email" placeholder="you@company.com"
                        className="w-full px-4 py-3 text-sm border border-[#E5E7EB] rounded-xl focus:outline-none focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/10 text-[#111827] placeholder-[#9CA3AF] transition-all" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#374151] mb-1.5">Job Title / Role <span className="text-red-400">*</span></label>
                      <input type="text" placeholder="e.g. Receptionist, Data Entry"
                        className="w-full px-4 py-3 text-sm border border-[#E5E7EB] rounded-xl focus:outline-none focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/10 text-[#111827] placeholder-[#9CA3AF] transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#374151] mb-1.5">Number of Openings <span className="text-red-400">*</span></label>
                      <input type="number" min="1" placeholder="e.g. 2"
                        className="w-full px-4 py-3 text-sm border border-[#E5E7EB] rounded-xl focus:outline-none focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/10 text-[#111827] placeholder-[#9CA3AF] transition-all" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#374151] mb-1.5">Salary Range (per month) <span className="text-red-400">*</span></label>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 flex">
                        <span className="px-3 py-3 bg-[#F9FAFB] border border-r-0 border-[#E5E7EB] rounded-l-xl text-sm text-[#6B7280] font-medium">₹</span>
                        <input type="number" placeholder="From"
                          className="flex-1 px-4 py-3 text-sm border border-[#E5E7EB] rounded-r-xl focus:outline-none focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/10 text-[#111827] placeholder-[#9CA3AF] transition-all" />
                      </div>
                      <span className="text-[#9CA3AF] text-sm font-medium">–</span>
                      <div className="flex-1 flex">
                        <span className="px-3 py-3 bg-[#F9FAFB] border border-r-0 border-[#E5E7EB] rounded-l-xl text-sm text-[#6B7280] font-medium">₹</span>
                        <input type="number" placeholder="To"
                          className="flex-1 px-4 py-3 text-sm border border-[#E5E7EB] rounded-r-xl focus:outline-none focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/10 text-[#111827] placeholder-[#9CA3AF] transition-all" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#374151] mb-2.5">Work Type <span className="text-red-400">*</span></label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['Full-Time', 'Part-Time', 'Work From Home', 'Contract'].map(opt => (
                        <label key={opt} className="flex items-center gap-2 px-3 py-2.5 border border-[#E5E7EB] rounded-xl cursor-pointer hover:border-[#10B981] hover:bg-[#ECFDF5] transition-all has-[:checked]:border-[#10B981] has-[:checked]:bg-[#ECFDF5]">
                          <input type="radio" name="worktype" className="accent-[#10B981] shrink-0" />
                          <span className="text-xs font-medium text-[#374151]">{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#374151] mb-1.5">Location / Area <span className="text-red-400">*</span></label>
                    <input type="text" placeholder="e.g. Gomti Nagar, Lucknow"
                      className="w-full px-4 py-3 text-sm border border-[#E5E7EB] rounded-xl focus:outline-none focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/10 text-[#111827] placeholder-[#9CA3AF] transition-all" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#374151] mb-1.5">Job Description / Requirements</label>
                    <textarea rows={4} placeholder="Describe the role, required skills, timings, or any specific requirements..."
                      className="w-full px-4 py-3 text-sm border border-[#E5E7EB] rounded-xl focus:outline-none focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/10 text-[#111827] placeholder-[#9CA3AF] resize-none transition-all" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#374151] mb-1.5">How did you hear about us?</label>
                    <select className="w-full px-4 py-3 text-sm border border-[#E5E7EB] rounded-xl focus:outline-none focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/10 text-[#374151] bg-white transition-all">
                      <option>Google</option>
                      <option>WhatsApp</option>
                      <option>Referral</option>
                      <option>Social Media</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <button className="w-full py-3.5 bg-[#10B981] text-white font-semibold rounded-xl hover:bg-[#059669] active:scale-[0.99] transition-all text-sm shadow-[0_4px_16px_rgba(16,185,129,0.3)]">
                    Submit Job Requirement →
                  </button>
                  <p className="text-center text-xs text-[#6B7280]">
                    Or call us directly:{' '}
                    <a href="tel:+918579898230" className="text-[#10B981] font-semibold hover:underline">📞 +91 85798 98230</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">

              {/* Why hire */}
              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-card">
                <h3 className="font-display font-semibold text-[#111827] mb-4 text-sm">Why Hire Through Us?</h3>
                <ul className="space-y-2.5">
                  {perks.map(([icon, text]) => (
                    <li key={text} className="flex items-start gap-2 text-sm text-[#374151] leading-snug">
                      <span className="shrink-0 mt-0.5">{icon}</span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Anita card */}
              <div className="bg-[#064E3B] rounded-2xl p-6 text-white">
                <div className="w-14 h-14 rounded-2xl bg-[#10B981] flex items-center justify-center font-display font-bold text-lg mb-4 shadow-glow-green">AS</div>
                <h3 className="font-display font-semibold text-white mb-0.5">Anita Srivastava</h3>
                <p className="text-xs text-green-300 mb-4">Placement Consultant</p>
                <div className="space-y-2.5">
                  <a href="tel:+918579898230" className="flex items-center gap-2 text-sm text-green-200 hover:text-white transition-colors">📞 +91 85798 98230</a>
                  <a href="https://wa.me/918579898230" target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 bg-[#25D366] text-white font-semibold rounded-xl text-sm hover:bg-[#1ebe5d] transition-colors">
                    💬 WhatsApp Anita
                  </a>
                </div>
              </div>

              {/* How it works mini */}
              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6">
                <h3 className="font-display font-semibold text-[#111827] mb-4 text-sm">How It Works</h3>
                <div className="space-y-3">
                  {[
                    ['1', 'Submit this form with your requirement'],
                    ['2', 'Anita reviews and shortlists candidates'],
                    ['3', 'You interview and hire — done!'],
                  ].map(([n, step]) => (
                    <div key={n} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center text-xs font-bold text-[#10B981] shrink-0 mt-0.5">{n}</div>
                      <p className="text-sm text-[#374151] leading-snug">{step}</p>
                    </div>
                  ))}
                </div>
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
