'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

/* ─── Data ──────────────────────────────────────────────── */

const allJobs = [
  { title: 'Data Entry Operator',       type: 'Work From Home',  typeBg: 'bg-[#ECFDF5]', typeFg: 'text-[#059669]', avatarBg: 'bg-emerald-500', initial: 'D', tags: ['Fresher OK'],           salary: '₹8,000 – ₹12,000',  location: 'Lucknow, UP',         posted: '1 day ago'  },
  { title: 'Receptionist',              type: 'Full-Time',       typeBg: 'bg-blue-50',    typeFg: 'text-blue-700',  avatarBg: 'bg-blue-500',    initial: 'R', tags: ['Female Preferred'],     salary: '₹10,000 – ₹15,000', location: 'Gomti Nagar, Lucknow',posted: '2 days ago' },
  { title: 'Sales Executive',           type: 'Full-Time',       typeBg: 'bg-blue-50',    typeFg: 'text-blue-700',  avatarBg: 'bg-indigo-500',  initial: 'S', tags: ['Incentives'],           salary: '₹12,000 – ₹18,000', location: 'Kanpur',              posted: '3 days ago' },
  { title: 'Telecaller',                type: 'Part-Time / WFH', typeBg: 'bg-amber-50',   typeFg: 'text-amber-700', avatarBg: 'bg-amber-500',   initial: 'T', tags: ['Fresher OK'],           salary: '₹6,000 – ₹10,000',  location: 'Lucknow, UP',         posted: '3 days ago' },
  { title: 'Accounts Assistant',        type: 'Full-Time',       typeBg: 'bg-blue-50',    typeFg: 'text-blue-700',  avatarBg: 'bg-violet-500',  initial: 'A', tags: ['Graduate'],             salary: '₹15,000 – ₹22,000', location: 'Hazratganj, Lucknow', posted: '4 days ago' },
  { title: 'Back Office Executive',     type: 'Full-Time',       typeBg: 'bg-blue-50',    typeFg: 'text-blue-700',  avatarBg: 'bg-rose-500',    initial: 'B', tags: [],                       salary: '₹9,000 – ₹14,000',  location: 'Noida',               posted: '5 days ago' },
  { title: 'Customer Support',          type: 'Work From Home',  typeBg: 'bg-[#ECFDF5]', typeFg: 'text-[#059669]', avatarBg: 'bg-teal-500',    initial: 'C', tags: ['Fresher OK', 'Laptop'], salary: '₹10,000 – ₹14,000', location: 'Remote / UP',         posted: '5 days ago' },
  { title: 'HR Recruiter Fresher',      type: 'Work From Home',  typeBg: 'bg-[#ECFDF5]', typeFg: 'text-[#059669]', avatarBg: 'bg-emerald-600', initial: 'H', tags: ['Fresher OK'],           salary: '₹8,000 – ₹12,000',  location: 'Lucknow, UP',         posted: '6 days ago' },
  { title: 'Content Writer Hindi',      type: 'Work From Home',  typeBg: 'bg-[#ECFDF5]', typeFg: 'text-[#059669]', avatarBg: 'bg-cyan-500',    initial: 'C', tags: ['Part-Time OK'],         salary: '₹7,000 – ₹11,000',  location: 'Remote',              posted: '7 days ago' },
  { title: 'Office Assistant',          type: 'Full-Time',       typeBg: 'bg-blue-50',    typeFg: 'text-blue-700',  avatarBg: 'bg-blue-600',    initial: 'O', tags: ['Female Preferred'],     salary: '₹8,000 – ₹12,000',  location: 'Alambagh, Lucknow',   posted: '1 week ago' },
  { title: 'Field Sales Executive',     type: 'Full-Time',       typeBg: 'bg-blue-50',    typeFg: 'text-blue-700',  avatarBg: 'bg-orange-500',  initial: 'F', tags: ['Bike Required'],        salary: '₹12,000 – ₹20,000', location: 'Kanpur',              posted: '1 week ago' },
  { title: 'Graphic Designer WFH',      type: 'Work From Home',  typeBg: 'bg-[#ECFDF5]', typeFg: 'text-[#059669]', avatarBg: 'bg-pink-500',    initial: 'G', tags: ['Portfolio Required'],   salary: '₹10,000 – ₹18,000', location: 'Remote',              posted: '1 week ago' },
];

type Filter = 'all' | 'wfh' | 'fresher' | 'part-time' | 'full-time';

const pills: { label: string; value: Filter }[] = [
  { label: 'All Jobs',          value: 'all'       },
  { label: '🏠 Work From Home', value: 'wfh'       },
  { label: '🌱 Fresher OK',     value: 'fresher'   },
  { label: '⏰ Part-Time',      value: 'part-time' },
  { label: '💼 Full-Time',      value: 'full-time' },
];

/* ─── Page ──────────────────────────────────────────────── */

export default function JobsPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>('all');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return allJobs.filter((job) => {
      const matchFilter =
        activeFilter === 'all' ||
        (activeFilter === 'wfh'       && (job.type.includes('WFH') || job.type.includes('Work From Home'))) ||
        (activeFilter === 'fresher'   && job.tags.some((t) => t.includes('Fresher'))) ||
        (activeFilter === 'part-time' && job.type.includes('Part-Time')) ||
        (activeFilter === 'full-time' && job.type === 'Full-Time');

      const q = query.toLowerCase();
      const matchSearch =
        !q ||
        job.title.toLowerCase().includes(q) ||
        job.location.toLowerCase().includes(q) ||
        job.tags.some((t) => t.toLowerCase().includes(q));

      return matchFilter && matchSearch;
    });
  }, [activeFilter, query]);

  return (
    <>
      <Navbar />

      {/* ── PAGE HEADER ─────────────────────────────────── */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#10B981] mb-1">Open Positions</p>
            <h1 className="font-display font-bold text-3xl md:text-4xl tracking-tight text-[#111827]">
              Browse Open Positions
            </h1>
            <p className="text-[#6B7280] mt-2">
              Fresh opportunities updated daily · Apply in 30 seconds via WhatsApp
            </p>
          </div>
          <div className="hidden sm:block">
            <span className="bg-[#ECFDF5] text-[#059669] text-xs font-bold px-4 py-2 rounded-full">
              ✨ 12 new jobs this week
            </span>
          </div>
        </div>
      </section>

      {/* ── STICKY FILTER BAR ───────────────────────────── */}
      <div className="sticky top-[72px] z-30 bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 space-y-3">
          {/* Search row */}
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] text-sm pointer-events-none">🔍</span>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Job title, skill, location..."
                className="rounded-full bg-[#F3F4F6] border-0 pl-10 pr-4 py-3 text-[15px] w-full focus:outline-none focus:ring-2 focus:ring-[#10B981]/20 text-[#374151] placeholder-[#9CA3AF]"
              />
            </div>
            <button className="rounded-full bg-[#10B981] text-white font-semibold shrink-0 px-5 py-3 hover:bg-[#059669] transition-colors text-sm">
              Search
            </button>
          </div>

          {/* Filter pills row */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-0.5">
            {pills.map(({ label, value }) => (
              <button
                key={value}
                onClick={() => setActiveFilter(value)}
                className={`rounded-full text-sm font-semibold px-4 py-2 shrink-0 transition-all duration-150 ${
                  activeFilter === value
                    ? 'bg-[#10B981] text-white shadow-[0_2px_8px_rgba(16,185,129,0.30)]'
                    : 'bg-white border border-[#E5E7EB] text-[#374151] hover:border-[#10B981] hover:text-[#10B981]'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── RESULTS ─────────────────────────────────────── */}
      <section className="bg-[#F9FAFB] min-h-[60vh] py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-xs text-[#6B7280] mb-6">
            Showing <strong className="text-[#111827]">{filtered.length}</strong> positions
            {activeFilter !== 'all' && <span> · filtered</span>}
          </p>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="font-display font-semibold text-[#111827] text-lg mb-2">No jobs found</h3>
              <p className="text-[#6B7280] text-sm mb-6">
                Try a different filter or send your resume to Anita directly
              </p>
              <a
                href="https://wa.me/918579898230"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white font-semibold rounded-full text-sm hover:bg-[#1ebe5d] transition-colors"
              >
                💬 WhatsApp Anita
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filtered.map((job) => (
                <div
                  key={job.title + job.location}
                  className="bg-white rounded-2xl p-5 flex flex-col shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(16,185,129,0.10)] hover:-translate-y-1 transition-all duration-200"
                >
                  {/* Top row */}
                  <div className="flex justify-between items-start">
                    <div>
                      <div className={`w-10 h-10 rounded-xl ${job.avatarBg} flex items-center justify-center text-white font-bold text-sm`}>
                        {job.initial}
                      </div>
                      <p className="text-xs text-[#9CA3AF] mt-1">Confidential</p>
                    </div>
                    <span className={`rounded-full text-xs font-semibold px-3 py-1 ${job.typeBg} ${job.typeFg}`}>
                      {job.type}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-[#111827] text-base mt-3 leading-snug">{job.title}</h3>

                  {/* Tags */}
                  {job.tags.length > 0 && (
                    <div className="flex gap-1.5 flex-wrap mt-2">
                      {job.tags.map((tag) => (
                        <span key={tag} className="text-[11px] font-semibold px-2.5 py-1 bg-amber-50 text-amber-700 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Salary */}
                  <div className="mt-auto pt-3">
                    <span className="font-display font-bold text-[#111827] text-lg">{job.salary}</span>
                    <span className="text-xs text-[#9CA3AF]">/mo</span>
                  </div>

                  {/* Location + posted */}
                  <div className="flex justify-between text-xs text-[#9CA3AF] mt-1">
                    <span>📍 {job.location}</span>
                    <span>🕐 {job.posted}</span>
                  </div>

                  {/* WhatsApp button */}
                  <a
                    href={`https://wa.me/918579898230?text=${encodeURIComponent(`Hi Anita, I want to apply for ${job.title} in ${job.location}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full py-2.5 rounded-xl bg-[#25D366] text-white text-sm font-semibold text-center hover:bg-[#1ebe5d] transition-colors block"
                  >
                    💬 Apply on WhatsApp
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── BOTTOM CTA ──────────────────────────────────── */}
      <section className="bg-white py-14 text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl text-[#111827] mb-2">
            Don&rsquo;t see the right fit?
          </h2>
          <p className="text-[#6B7280] text-sm mb-7">
            Send your details to Anita directly — she&rsquo;ll match you personally within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/918579898230"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white font-semibold px-6 py-3.5 hover:bg-[#1ebe5d] transition-all duration-200"
            >
              💬 WhatsApp Anita
            </a>
            <Link
              href="/apply"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#10B981] text-white font-semibold px-6 py-3.5 hover:bg-[#059669] hover:shadow-[0_0_0_4px_rgba(16,185,129,0.20)] transition-all duration-200"
            >
              Fill Application Form →
            </Link>
          </div>
          <p className="text-xs text-[#9CA3AF] mt-6">📞 +91 85798 98230 · Mon–Sat 10 AM – 6 PM</p>
        </div>
      </section>

      <Footer />
    </>
  );
}
