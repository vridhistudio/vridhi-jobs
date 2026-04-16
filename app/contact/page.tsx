import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <section className="bg-white border-b border-[#E5E7EB] py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="font-display font-bold text-3xl text-[#111827] mb-2">Get in Touch</h1>
          <p className="text-[#6B7280] text-sm">Have a question about a job or want to list a vacancy? Reach out — we respond fast.</p>
        </div>
      </section>

      <section className="py-12 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Contact cards */}
            <div className="space-y-4">

              {/* WhatsApp — most prominent */}
              <div className="bg-[#ECFDF5] border border-[#A7F3D0] rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center text-white text-xl shrink-0">💬</div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-[#111827] mb-0.5">WhatsApp Us</h3>
                    <p className="text-xs text-[#6B7280] mb-3">Fastest way to reach us. Send your name, qualification and the type of job you&rsquo;re looking for.</p>
                    <p className="text-sm font-semibold text-[#111827] mb-3">+91 85798 98230</p>
                    <a
                      href="https://wa.me/918579898230"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white font-semibold rounded-lg text-sm hover:bg-[#1ebe5d] transition-colors"
                    >
                      Open WhatsApp →
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] flex items-center justify-center text-xl shrink-0">📞</div>
                  <div>
                    <h3 className="font-display font-semibold text-[#111827] mb-0.5">Call Anita Directly</h3>
                    <p className="text-xs text-[#6B7280] mb-2">Available Monday–Saturday, 10 AM – 6 PM</p>
                    <a href="tel:+918579898230" className="text-sm font-semibold text-[#10B981] hover:underline">+91 85798 98230</a>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FFFBEB] flex items-center justify-center text-xl shrink-0">✉️</div>
                  <div>
                    <h3 className="font-display font-semibold text-[#111827] mb-0.5">Email Us</h3>
                    <p className="text-xs text-[#6B7280] mb-2">For detailed queries or to send your resume</p>
                    <a href="mailto:anita@vridhijobs.in" className="text-sm font-semibold text-[#10B981] hover:underline">anita@vridhijobs.in</a>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F5F3FF] flex items-center justify-center text-xl shrink-0">📍</div>
                  <div>
                    <h3 className="font-display font-semibold text-[#111827] mb-0.5">Based in Lucknow, UP</h3>
                    <p className="text-xs text-[#6B7280] leading-relaxed">We operate primarily via WhatsApp and phone. Physical meetings by appointment only.</p>
                  </div>
                </div>
              </div>

              {/* Working hours */}
              <div className="bg-white border border-[#E5E7EB] rounded-xl px-6 py-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-[#111827]">Mon – Sat</p>
                  <p className="text-xs text-[#6B7280]">10:00 AM – 6:00 PM</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-[#9CA3AF]">Sunday</p>
                  <p className="text-xs text-[#9CA3AF]">Closed</p>
                </div>
              </div>
            </div>

            {/* Quick form */}
            <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="font-display font-bold text-xl text-[#111827] mb-6">Send a Message</h2>
              <div className="space-y-4">

                <div>
                  <label className="block text-sm font-semibold text-[#374151] mb-1.5">Your Name *</label>
                  <input type="text" placeholder="Priya Sharma" className="w-full px-3 py-2.5 text-sm border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#10B981] text-[#111827] placeholder-[#9CA3AF]" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#374151] mb-1.5">Mobile Number *</label>
                  <div className="flex">
                    <span className="px-3 py-2.5 bg-[#F9FAFB] border border-r-0 border-[#E5E7EB] rounded-l-lg text-sm text-[#6B7280] font-medium">+91</span>
                    <input type="tel" placeholder="98765 43210" className="flex-1 px-3 py-2.5 text-sm border border-[#E5E7EB] rounded-r-lg focus:outline-none focus:border-[#10B981] text-[#111827] placeholder-[#9CA3AF]" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#374151] mb-2">I am a *</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="usertype" defaultChecked className="accent-[#10B981]" />
                      <span className="text-sm text-[#374151]">Job Seeker</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="usertype" className="accent-[#10B981]" />
                      <span className="text-sm text-[#374151]">Employer</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#374151] mb-1.5">Your Message *</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what you're looking for or what role you want to fill..."
                    className="w-full px-3 py-2.5 text-sm border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#10B981] text-[#111827] placeholder-[#9CA3AF] resize-none"
                  ></textarea>
                </div>

                <button className="w-full py-3 bg-[#10B981] text-white font-semibold rounded-lg hover:bg-[#059669] transition-colors text-sm">
                  Send Message
                </button>
                <p className="text-center text-xs text-[#6B7280]">
                  Or WhatsApp us directly — usually faster!{' '}
                  <a href="https://wa.me/918579898230" target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-semibold">💬 Open WhatsApp</a>
                </p>
              </div>
            </div>
          </div>

          {/* Coverage area */}
          <div className="mt-8 bg-white border border-[#E5E7EB] rounded-2xl p-8 text-center">
            <h3 className="font-display font-semibold text-[#111827] mb-2">Serving Lucknow, Kanpur, Noida & across Uttar Pradesh</h3>
            <p className="text-sm text-[#6B7280] mb-6">Work-from-home roles available for candidates across India</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {['📍 Lucknow', '📍 Kanpur', '📍 Noida', '📍 Allahabad', '📍 Agra', '📍 Varanasi', '🌐 Remote (WFH)'].map(city => (
                <span key={city} className="px-4 py-2 bg-[#F8FAFC] border border-[#E5E7EB] rounded-full text-sm text-[#374151] font-medium">{city}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
