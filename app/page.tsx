import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const categories = [
  { emoji: '🏠', label: 'Work From Home', count: '42 jobs', color: 'bg-[#ECFDF5] text-[#059669]' },
  { emoji: '🌱', label: 'Fresher OK', count: '38 jobs', color: 'bg-[#FFFBEB] text-[#B45309]' },
  { emoji: '⏰', label: 'Part-Time', count: '21 jobs', color: 'bg-[#EFF6FF] text-[#1D4ED8]' },
  { emoji: '💼', label: 'Full-Time', count: '87 jobs', color: 'bg-[#F5F3FF] text-[#6D28D9]' },
];

const featuredJobs = [
  { title: 'Data Entry Operator', type: 'Work From Home', typeColor: 'bg-[#ECFDF5] text-[#059669]', tags: ['Fresher OK'], salary: '₹8,000 – ₹12,000/mo', location: 'Lucknow, UP', posted: '1 day ago' },
  { title: 'Receptionist', type: 'Full-Time', typeColor: 'bg-[#EFF6FF] text-[#1D4ED8]', tags: ['Female Preferred'], salary: '₹10,000 – ₹15,000/mo', location: 'Gomti Nagar, Lucknow', posted: '2 days ago' },
  { title: 'Telecaller', type: 'Part-Time / WFH', typeColor: 'bg-[#FFFBEB] text-[#B45309]', tags: ['Fresher OK'], salary: '₹6,000 – ₹10,000/mo', location: 'Lucknow, UP', posted: '3 days ago' },
  { title: 'Sales Executive', type: 'Full-Time', typeColor: 'bg-[#EFF6FF] text-[#1D4ED8]', tags: ['Incentives'], salary: '₹12,000 – ₹18,000/mo', location: 'Kanpur', posted: '3 days ago' },
  { title: 'Accounts Assistant', type: 'Full-Time', typeColor: 'bg-[#EFF6FF] text-[#1D4ED8]', tags: ['Graduate'], salary: '₹15,000 – ₹22,000/mo', location: 'Hazratganj, Lucknow', posted: '4 days ago' },
  { title: 'Back Office Executive', type: 'Full-Time', typeColor: 'bg-[#EFF6FF] text-[#1D4ED8]', tags: [], salary: '₹9,000 – ₹14,000/mo', location: 'Noida', posted: '5 days ago' },
];

const steps = [
  { step: '01', title: 'Fill Out the Form', desc: 'Tell us your name, qualification, work preference and location. Takes 2 minutes.' },
  { step: '02', title: 'Anita Reviews Your Profile', desc: 'Our placement consultant personally reviews your application and matches you with open positions.' },
  { step: '03', title: 'Get Placed', desc: 'Anita connects you directly with the employer. Most candidates hear back within 48 hours.' },
];

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-white border-b border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ECFDF5] rounded-full text-xs font-semibold text-[#059669] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
              500+ Placements Done · Free for Job Seekers
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-[#111827] leading-tight mb-4">
              Find Your Next Job<br />
              <span className="text-[#10B981]">Today</span>
            </h1>
            <p className="text-lg text-[#6B7280] leading-relaxed mb-8">
              We connect job seekers across Lucknow, Kanpur, Noida and UP with genuine employers. Office, WFH, part-time and fresher roles — personally handled by Anita Srivastava.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/apply" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#10B981] text-white font-semibold rounded-lg hover:bg-[#059669] transition-colors text-sm">
                Apply for a Job →
              </Link>
              <Link href="/jobs" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#E5E7EB] text-[#374151] font-semibold rounded-lg hover:bg-[#F9FAFB] transition-colors text-sm">
                Browse Open Positions
              </Link>
              <a href="https://wa.me/918579898230" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#1ebe5d] transition-colors text-sm">
                💬 WhatsApp Anita
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-[#10B981]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: '500+', label: 'Placements Done' },
              { val: '7+', label: 'Years Experience' },
              { val: '200+', label: 'Employer Partners' },
              { val: '48h', label: 'Average Response Time' },
            ].map(({ val, label }) => (
              <div key={label}>
                <div className="font-display font-bold text-2xl text-white">{val}</div>
                <div className="text-xs text-green-100 mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-14 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl text-[#111827] mb-2">Browse by Category</h2>
          <p className="text-[#6B7280] text-sm mb-8">Find jobs that match your lifestyle and availability</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map(({ emoji, label, count, color }) => (
              <Link key={label} href={`/jobs?type=${encodeURIComponent(label)}`} className="bg-white border border-[#E5E7EB] rounded-xl p-5 hover:shadow-md hover:border-[#10B981] transition-all group">
                <div className="text-3xl mb-3">{emoji}</div>
                <div className="font-display font-semibold text-[#111827] text-sm mb-1 group-hover:text-[#10B981] transition-colors">{label}</div>
                <div className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full ${color}`}>{count}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-14 bg-white border-t border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-display font-bold text-2xl text-[#111827]">Featured Openings</h2>
              <p className="text-[#6B7280] text-sm mt-1">Updated daily · Apply via WhatsApp in 30 seconds</p>
            </div>
            <Link href="/jobs" className="text-sm font-semibold text-[#10B981] hover:underline hidden sm:block">View all jobs →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredJobs.map((job) => (
              <div key={job.title + job.location} className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl p-5 hover:shadow-md hover:border-[#10B981] transition-all flex flex-col">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-display font-semibold text-[#111827] text-base leading-snug">{job.title}</h3>
                  <span className={`shrink-0 text-xs font-semibold px-2 py-0.5 rounded-full ${job.typeColor}`}>{job.type}</span>
                </div>
                <p className="text-xs text-[#6B7280] mb-3">Confidential</p>
                {job.tags.length > 0 && (
                  <div className="flex gap-1.5 flex-wrap mb-3">
                    {job.tags.map(t => (
                      <span key={t} className="text-xs font-medium px-2 py-0.5 bg-[#FFFBEB] text-[#B45309] rounded-full border border-[#FDE68A]">{t}</span>
                    ))}
                  </div>
                )}
                <div className="mt-auto space-y-1.5">
                  <div className="text-sm font-semibold text-[#10B981]">{job.salary}</div>
                  <div className="flex items-center justify-between text-xs text-[#6B7280]">
                    <span>📍 {job.location}</span>
                    <span>🕐 {job.posted}</span>
                  </div>
                </div>
                <a
                  href={`https://wa.me/918579898230?text=${encodeURIComponent(`Hi Anita, I want to apply for ${job.title} in ${job.location}`)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="mt-4 block text-center py-2.5 text-sm font-semibold text-[#10B981] border border-[#10B981] rounded-lg hover:bg-[#ECFDF5] transition-colors"
                >
                  Apply on WhatsApp
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/jobs" className="inline-flex items-center gap-2 px-6 py-3 border border-[#E5E7EB] text-[#374151] font-semibold rounded-lg hover:bg-[#F9FAFB] transition-colors text-sm">
              View all open positions →
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-14 bg-[#F8FAFC] border-t border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-2xl text-[#111827] mb-2">How It Works</h2>
            <p className="text-[#6B7280] text-sm">Simple, personal, and completely free for job seekers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map(({ step, title, desc }) => (
              <div key={step} className="bg-white border border-[#E5E7EB] rounded-xl p-6">
                <div className="w-10 h-10 rounded-full bg-[#ECFDF5] flex items-center justify-center mb-4">
                  <span className="font-display font-bold text-[#10B981] text-sm">{step}</span>
                </div>
                <h3 className="font-display font-semibold text-[#111827] mb-2">{title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Anita CTA */}
      <section className="py-14 bg-white border-t border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-[#ECFDF5] border border-[#A7F3D0] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 rounded-full bg-[#10B981] flex items-center justify-center text-white font-display font-bold text-2xl shrink-0">AS</div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="font-display font-bold text-2xl text-[#111827] mb-2">Talk to Anita Directly</h2>
              <p className="text-[#374151] text-sm mb-1"><strong>Anita Srivastava</strong> — Founder & Placement Consultant</p>
              <p className="text-[#6B7280] text-sm leading-relaxed mb-6">
                &ldquo;I personally handle every placement. Tell me what you&rsquo;re looking for and I&rsquo;ll find you the right match — usually within 48 hours.&rdquo;
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <a href="https://wa.me/918579898230" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#25D366] text-white font-semibold rounded-lg text-sm hover:bg-[#1ebe5d] transition-colors">
                  💬 WhatsApp Now
                </a>
                <a href="tel:+918579898230" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-[#10B981] text-[#10B981] font-semibold rounded-lg text-sm hover:bg-[#ECFDF5] transition-colors">
                  📞 +91 85798 98230
                </a>
                <Link href="/apply" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#10B981] text-white font-semibold rounded-lg text-sm hover:bg-[#059669] transition-colors">
                  Fill Application Form →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
