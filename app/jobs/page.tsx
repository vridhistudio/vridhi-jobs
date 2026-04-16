import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const allJobs = [
  { title: 'Data Entry Operator', type: 'Work From Home', typeColor: 'bg-[#ECFDF5] text-[#059669]', tags: ['Fresher OK'], salary: '₹8,000 – ₹12,000/mo', location: 'Lucknow, UP', posted: '1 day ago' },
  { title: 'Receptionist', type: 'Full-Time', typeColor: 'bg-[#EFF6FF] text-[#1D4ED8]', tags: ['Female Preferred'], salary: '₹10,000 – ₹15,000/mo', location: 'Gomti Nagar, Lucknow', posted: '2 days ago' },
  { title: 'Sales Executive', type: 'Full-Time', typeColor: 'bg-[#EFF6FF] text-[#1D4ED8]', tags: ['Incentives'], salary: '₹12,000 – ₹18,000/mo', location: 'Kanpur', posted: '3 days ago' },
  { title: 'Telecaller', type: 'Part-Time / WFH', typeColor: 'bg-[#FFFBEB] text-[#B45309]', tags: ['Fresher OK'], salary: '₹6,000 – ₹10,000/mo', location: 'Lucknow, UP', posted: '3 days ago' },
  { title: 'Accounts Assistant', type: 'Full-Time', typeColor: 'bg-[#EFF6FF] text-[#1D4ED8]', tags: ['Graduate'], salary: '₹15,000 – ₹22,000/mo', location: 'Hazratganj, Lucknow', posted: '4 days ago' },
  { title: 'Back Office Executive', type: 'Full-Time', typeColor: 'bg-[#EFF6FF] text-[#1D4ED8]', tags: [], salary: '₹9,000 – ₹14,000/mo', location: 'Noida', posted: '5 days ago' },
  { title: 'Customer Support Executive', type: 'Work From Home', typeColor: 'bg-[#ECFDF5] text-[#059669]', tags: ['Fresher OK', 'Laptop Required'], salary: '₹10,000 – ₹14,000/mo', location: 'Remote / UP', posted: '5 days ago' },
  { title: 'HR Recruiter (Fresher)', type: 'Work From Home', typeColor: 'bg-[#ECFDF5] text-[#059669]', tags: ['Fresher OK'], salary: '₹8,000 – ₹12,000/mo', location: 'Lucknow, UP', posted: '6 days ago' },
  { title: 'Content Writer (Hindi)', type: 'Work From Home', typeColor: 'bg-[#ECFDF5] text-[#059669]', tags: ['Part-Time Available'], salary: '₹7,000 – ₹11,000/mo', location: 'Remote', posted: '7 days ago' },
  { title: 'Office Assistant', type: 'Full-Time', typeColor: 'bg-[#EFF6FF] text-[#1D4ED8]', tags: ['Female Preferred'], salary: '₹8,000 – ₹12,000/mo', location: 'Alambagh, Lucknow', posted: '1 week ago' },
  { title: 'Field Sales Executive', type: 'Full-Time', typeColor: 'bg-[#EFF6FF] text-[#1D4ED8]', tags: ['Bike Required'], salary: '₹12,000 – ₹20,000/mo', location: 'Kanpur', posted: '1 week ago' },
  { title: 'Graphic Designer (WFH)', type: 'Work From Home', typeColor: 'bg-[#ECFDF5] text-[#059669]', tags: ['Portfolio Required'], salary: '₹10,000 – ₹18,000/mo', location: 'Remote', posted: '1 week ago' },
];

export default function JobsPage() {
  return (
    <>
      <Navbar />

      {/* Page header */}
      <section className="bg-white border-b border-[#E5E7EB] py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="font-display font-bold text-3xl text-[#111827] mb-2">Browse Open Positions</h1>
          <p className="text-[#6B7280] text-sm">Fresh opportunities updated daily. Apply via WhatsApp in 30 seconds.</p>
        </div>
      </section>

      {/* Filter bar */}
      <section className="sticky top-16 z-30 bg-white border-b border-[#E5E7EB] shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex flex-wrap gap-2 items-center">
            <input
              type="text"
              placeholder="Job title, skill, keyword..."
              className="flex-1 min-w-[200px] px-3 py-2 text-sm border border-[#E5E7EB] rounded-lg text-[#374151] placeholder-[#9CA3AF] focus:outline-none focus:border-[#10B981]"
              readOnly
            />
            <select className="px-3 py-2 text-sm border border-[#E5E7EB] rounded-lg text-[#374151] focus:outline-none focus:border-[#10B981] bg-white">
              <option>Work Type: All</option>
              <option>Full-Time</option>
              <option>Part-Time</option>
              <option>Work From Home</option>
              <option>Contract</option>
            </select>
            <select className="px-3 py-2 text-sm border border-[#E5E7EB] rounded-lg text-[#374151] focus:outline-none focus:border-[#10B981] bg-white">
              <option>Location: All</option>
              <option>Lucknow</option>
              <option>Kanpur</option>
              <option>Noida</option>
              <option>Remote</option>
            </select>
            <select className="px-3 py-2 text-sm border border-[#E5E7EB] rounded-lg text-[#374151] focus:outline-none focus:border-[#10B981] bg-white">
              <option>Qualification: All</option>
              <option>10th Pass</option>
              <option>12th Pass</option>
              <option>Graduate</option>
              <option>Post-Graduate</option>
            </select>
            <button className="px-4 py-2 bg-[#10B981] text-white text-sm font-semibold rounded-lg hover:bg-[#059669] transition-colors">
              Search
            </button>
          </div>
          {/* Active filters */}
          <div className="flex gap-2 mt-2 flex-wrap">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#ECFDF5] text-[#059669] text-xs font-semibold rounded-full border border-[#A7F3D0]">
              All Locations <span className="ml-1 cursor-pointer opacity-60">×</span>
            </span>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-8 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-xs text-[#6B7280] mb-5">Showing {allJobs.length} jobs</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {allJobs.map((job) => (
              <div key={job.title + job.location} className="bg-white border border-[#E5E7EB] rounded-xl p-5 hover:shadow-md hover:border-[#10B981] transition-all flex flex-col">
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

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-10">
            <button className="px-3 py-2 text-sm text-[#6B7280] border border-[#E5E7EB] rounded-lg hover:bg-[#F9FAFB]">← Previous</button>
            <button className="px-3 py-2 text-sm font-semibold text-white bg-[#10B981] rounded-lg">1</button>
            <button className="px-3 py-2 text-sm text-[#6B7280] border border-[#E5E7EB] rounded-lg hover:bg-[#F9FAFB]">2</button>
            <button className="px-3 py-2 text-sm text-[#6B7280] border border-[#E5E7EB] rounded-lg hover:bg-[#F9FAFB]">3</button>
            <button className="px-3 py-2 text-sm text-[#6B7280] border border-[#E5E7EB] rounded-lg hover:bg-[#F9FAFB]">Next →</button>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white border-t border-[#E5E7EB] py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#374151] font-medium mb-4">Don&rsquo;t see the right job? Send your resume to Anita directly.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://wa.me/918579898230" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#25D366] text-white font-semibold rounded-lg text-sm hover:bg-[#1ebe5d] transition-colors">
              💬 WhatsApp Anita
            </a>
            <Link href="/apply" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#10B981] text-white font-semibold rounded-lg text-sm hover:bg-[#059669] transition-colors">
              Fill Application Form →
            </Link>
          </div>
          <p className="text-sm text-[#6B7280] mt-3">📞 +91 85798 98230</p>
        </div>
      </section>

      <Footer />
    </>
  );
}
