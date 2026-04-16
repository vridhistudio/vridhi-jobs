import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ContactPage() {
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
          <h1
            className="font-display font-black text-white tracking-[-0.04em] leading-[1.05]"
            style={{ fontSize: 'clamp(40px,5vw,64px)' }}
          >
            Get in Touch
          </h1>
          <p className="text-white/40 mt-4 max-w-md leading-relaxed text-[15px]">
            Have a question about a job or want to list a vacancy? Reach out &mdash; we respond fast.
          </p>
          <div className="inline-flex flex-wrap gap-2 mt-5">
            {[
              '💬 WhatsApp first',
              '⚡ Reply same day',
              '📍 Lucknow based',
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

      {/* Main */}
      <section className="bg-[#F9FAFB] py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 sm:px-6">

          {/* Left: contact cards */}
          <div className="space-y-4">

            {/* WhatsApp — prominent dark card */}
            <a href="https://wa.me/918579898230" target="_blank" rel="noopener noreferrer" className="block">
              <div className="bg-[#064E3B] rounded-3xl p-7 hover:brightness-110 transition-all">
                <div className="flex gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#25D366] flex items-center justify-center text-white text-2xl shrink-0">
                    💬
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-black text-white text-lg">WhatsApp Us</h3>
                    <p className="text-2xl font-black text-white mt-1">+91 85798 98230</p>
                    <p className="text-sm text-white/60 mt-1">Fastest way to reach us</p>
                    <span className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white font-semibold rounded-full text-sm hover:bg-[#1ebe5d] transition-colors">
                      Open WhatsApp &rarr;
                    </span>
                  </div>
                </div>
              </div>
            </a>

            {/* Call */}
            <a href="tel:+918579898230" className="block">
              <div className="bg-white rounded-2xl p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(16,185,129,0.10)] transition-all">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-xl shrink-0">📞</div>
                  <div>
                    <h3 className="font-semibold text-[#111827]">Call Anita Directly</h3>
                    <p className="text-xs text-[#6B7280] mt-0.5">Mon&ndash;Sat, 10 AM &ndash; 6 PM</p>
                    <p className="text-sm font-bold text-[#10B981] mt-2">+91 85798 98230</p>
                  </div>
                </div>
              </div>
            </a>

            {/* Email */}
            <a href="mailto:anita@vridhijobs.in" className="block">
              <div className="bg-white rounded-2xl p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(16,185,129,0.10)] transition-all">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-xl shrink-0">✉️</div>
                  <div>
                    <h3 className="font-semibold text-[#111827]">Email Us</h3>
                    <p className="text-xs text-[#6B7280] mt-0.5">For detailed queries or to send your resume</p>
                    <p className="text-sm font-bold text-[#10B981] mt-2">anita@vridhijobs.in</p>
                  </div>
                </div>
              </div>
            </a>

            {/* Location */}
            <div className="bg-white rounded-2xl p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(16,185,129,0.10)] transition-all">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-xl shrink-0">📍</div>
                <div>
                  <h3 className="font-semibold text-[#111827]">Lucknow, UP</h3>
                  <p className="text-xs text-[#6B7280] mt-0.5 leading-relaxed">
                    We operate primarily via WhatsApp and phone. Physical meetings by appointment only.
                  </p>
                </div>
              </div>
            </div>

            {/* Hours strip */}
            <div className="bg-white rounded-2xl px-6 py-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex justify-between items-center">
              <div className="flex items-center gap-3">
                <span>🕐</span>
                <div>
                  <p className="font-semibold text-sm text-[#111827]">Mon &ndash; Sat</p>
                  <p className="text-[#10B981] text-sm font-semibold">10:00 AM &ndash; 6:00 PM</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[#9CA3AF] text-sm">Sunday</p>
                <p className="text-[#9CA3AF] text-sm">Closed</p>
              </div>
            </div>
          </div>

          {/* Right: form card */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_32px_64px_rgba(0,0,0,0.07)]">
            <h2
              className="font-display font-black text-[#111827] mb-6"
              style={{ fontSize: 'clamp(20px,2.5vw,26px)' }}
            >
              Send a Message
            </h2>

            <div className="space-y-5">

              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-[#374151] mb-1.5">
                  Your Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Priya Sharma"
                  className="w-full rounded-full bg-[#F3F4F6] border-0 px-5 py-3 text-[15px] text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#10B981]/20 focus:bg-white transition-all duration-200"
                />
              </div>

              {/* Mobile */}
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

              {/* I am a */}
              <div>
                <label className="block text-sm font-semibold text-[#374151] mb-2.5">
                  I am a <span className="text-red-400">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: '👤 Job Seeker', val: 'seeker' },
                    { label: '🏢 Employer',   val: 'employer' },
                  ].map(({ label, val }) => (
                    <label
                      key={val}
                      className="border border-[#E5E7EB] rounded-2xl py-3 text-center text-sm font-semibold cursor-pointer hover:border-[#10B981] hover:bg-[#ECFDF5] transition-all flex items-center justify-center gap-2"
                    >
                      <input type="radio" name="usertype" value={val} className="sr-only" />
                      <span>{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-[#374151] mb-1.5">
                  Your Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us what you're looking for or what role you want to fill..."
                  className="w-full rounded-2xl bg-[#F3F4F6] border-0 px-5 py-3 text-[15px] text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#10B981]/20 focus:bg-white transition-all duration-200 resize-none"
                />
              </div>

              {/* Submit */}
              <button className="w-full py-3.5 rounded-full bg-[#10B981] text-white font-bold text-[15px] hover:bg-[#059669] hover:shadow-[0_0_0_4px_rgba(16,185,129,0.20)] transition-all duration-200">
                Send Message &rarr;
              </button>
              <p className="text-center text-xs text-[#6B7280] mt-3">
                Or WhatsApp &mdash; usually faster!{' '}
                <a
                  href="https://wa.me/918579898230"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] font-semibold"
                >
                  💬 Open WhatsApp
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="bg-white py-14 text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h3
            className="font-display font-black text-[#111827]"
            style={{ fontSize: 'clamp(18px,2.5vw,24px)' }}
          >
            Serving Lucknow, Kanpur, Noida &amp; UP
          </h3>
          <p className="text-[#6B7280] text-sm mt-2">Work-from-home roles available for candidates across India</p>
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {[
              '📍 Lucknow',
              '📍 Kanpur',
              '📍 Noida',
              '📍 Allahabad',
              '📍 Agra',
              '📍 Varanasi',
              '🌐 Remote (WFH)',
            ].map((city) => (
              <span
                key={city}
                className="px-4 py-2 bg-[#F9FAFB] rounded-full text-sm text-[#374151] font-medium hover:bg-[#ECFDF5] hover:text-[#059669] transition-colors cursor-default"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
