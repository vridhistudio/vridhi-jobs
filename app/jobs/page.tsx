'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

/* ─── Data ──────────────────────────────────────────────── */

const allJobs = [
  { title: 'Data Entry Operator',   type: 'Work From Home',    color: 'bg-emerald-500', initial: 'D', tags: ['Fresher OK'],             salary: '₹8,000–12,000',  location: 'Lucknow, UP',          posted: '1 day ago'  },
  { title: 'Receptionist',          type: 'Full-Time',         color: 'bg-blue-500',    initial: 'R', tags: ['Female Preferred'],       salary: '₹10,000–15,000', location: 'Gomti Nagar, Lucknow', posted: '2 days ago' },
  { title: 'Sales Executive',       type: 'Full-Time',         color: 'bg-indigo-500',  initial: 'S', tags: ['Incentives'],             salary: '₹12,000–18,000', location: 'Kanpur',               posted: '3 days ago' },
  { title: 'Telecaller',            type: 'Part-Time / WFH',   color: 'bg-amber-500',   initial: 'T', tags: ['Fresher OK'],             salary: '₹6,000–10,000',  location: 'Lucknow, UP',          posted: '3 days ago' },
  { title: 'Accounts Assistant',    type: 'Full-Time',         color: 'bg-violet-500',  initial: 'A', tags: ['Graduate'],               salary: '₹15,000–22,000', location: 'Hazratganj, Lucknow',  posted: '4 days ago' },
  { title: 'Back Office Executive', type: 'Full-Time',         color: 'bg-rose-500',    initial: 'B', tags: [],                         salary: '₹9,000–14,000',  location: 'Noida',                posted: '5 days ago' },
  { title: 'Customer Support',      type: 'Work From Home',    color: 'bg-teal-500',    initial: 'C', tags: ['Fresher OK', 'Laptop'],   salary: '₹10,000–14,000', location: 'Remote / UP',          posted: '5 days ago' },
  { title: 'HR Recruiter Fresher',  type: 'Work From Home',    color: 'bg-emerald-600', initial: 'H', tags: ['Fresher OK'],             salary: '₹8,000–12,000',  location: 'Lucknow, UP',          posted: '6 days ago' },
  { title: 'Content Writer Hindi',  type: 'Work From Home',    color: 'bg-cyan-500',    initial: 'C', tags: ['Part-Time OK'],           salary: '₹7,000–11,000',  location: 'Remote',               posted: '7 days ago' },
  { title: 'Office Assistant',      type: 'Full-Time',         color: 'bg-blue-600',    initial: 'O', tags: ['Female Preferred'],       salary: '₹8,000–12,000',  location: 'Alambagh, Lucknow',    posted: '1 week ago' },
  { title: 'Field Sales Executive', type: 'Full-Time',         color: 'bg-orange-500',  initial: 'F', tags: ['Bike Required'],          salary: '₹12,000–20,000', location: 'Kanpur',               posted: '1 week ago' },
  { title: 'Graphic Designer WFH',  type: 'Work From Home',    color: 'bg-pink-500',    initial: 'G', tags: ['Portfolio Required'],     salary: '₹10,000–18,000', location: 'Remote',               posted: '1 week ago' },
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

      {/* ══════════════════════════════════════════════════════
          PAGE HEADER
      ══════════════════════════════════════════════════════ */}
      <section className="bg-[#0A0F1E] pt-20 pb-14 relative overflow-hidden">
        {/* Subtle grid texture */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-end">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#10B981] mb-3">
              Open Positions
            </p>
            <h1
              className="font-display font-black tracking-[-0.03em] text-white leading-tight"
              style={{ fontSize: 'clamp(40px,5vw,60px)' }}
            >
              Browse Open{' '}
              <span className="text-[#10B981]">Positions</span>
            </h1>
            <p className="text-white/40 text-sm mt-3 leading-relaxed">
              Fresh opportunities updated daily · Apply in 30 seconds via WhatsApp
            </p>
          </div>
          <div className="hidden sm:block shrink-0">
            <span className="bg-white/[0.08] border border-white/[0.10] text-white/70 text-xs font-bold px-4 py-2 rounded-full">
              ✨ 12 new this week
            </span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          STICKY FILTER BAR
      ══════════════════════════════════════════════════════ */}
      <div
        className="sticky top-[72px] z-30 bg-white/95 backdrop-blur"
        style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 space-y-3">

          {/* Search row */}
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9CA3AF] text-sm pointer-events-none select-none">
                🔍
              </span>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Job title, skill, location..."
                className="w-full rounded-full bg-[#F3F4F6] border-0 pl-10 pr-4 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#10B981]/20 text-[#374151] placeholder-[#9CA3AF]"
              />
            </div>
            <button className="rounded-full bg-[#10B981] text-white font-semibold shrink-0 px-5 py-2.5 hover:bg-[#059669] transition-colors text-sm">
              Search
            </button>
          </div>

          {/* Filter pills */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-0.5">
            {pills.map(({ label, value }) => (
              <button
                key={value}
                onClick={() => setActiveFilter(value)}
                className={`rounded-full text-sm font-semibold px-4 py-1.5 shrink-0 transition-all duration-150 ${
                  activeFilter === value
                    ? 'bg-[#10B981] text-white'
                    : 'bg-[#F3F4F6] text-[#374151] hover:bg-[#ECFDF5] hover:text-[#059669]'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          RESULTS
      ══════════════════════════════════════════════════════ */}
      <section className="bg-[#F9FAFB] min-h-[60vh] py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Count line */}
          <p className="text-xs text-[#6B7280] mb-5">
            Showing{' '}
            <strong className="text-[#111827]">{filtered.length}</strong>{' '}
            position{filtered.length !== 1 ? 's' : ''}
            {activeFilter !== 'all' && <span className="text-[#9CA3AF]"> · filtered</span>}
          </p>

          {filtered.length === 0 ? (
            /* Empty state */
            <div className="text-center py-24">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="font-display font-semibold text-[#111827] text-lg mb-2">No jobs found</h3>
              <p className="text-[#6B7280] text-sm mb-7">
                Try a different filter or send your resume to Anita directly
              </p>
              <a
                href="https://wa.me/918579898230"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white font-semibold rounded-full text-sm hover:bg-[#1ebe5d] transition-colors"
                style={{ boxShadow: '0 4px 20px rgba(37,211,102,0.30)' }}
              >
                💬 WhatsApp Anita
              </a>
            </div>
          ) : (
            /* List container */
            <div
              className="bg-white rounded-3xl overflow-hidden divide-y divide-[#F9FAFB]"
              style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
            >
              {filtered.map((job) => {
                const isWFH = job.type.includes('WFH') || job.type.includes('Work From Home');
                const isPartTime = job.type.includes('Part-Time');

                const typeBadgeClass = isWFH
                  ? 'bg-[#ECFDF5] text-[#059669]'
                  : isPartTime
                  ? 'bg-amber-50 text-amber-700'
                  : 'bg-blue-50 text-blue-700';

                const typeLabel = isWFH
                  ? 'WFH'
                  : isPartTime
                  ? 'Part-Time'
                  : 'Full-Time';

                return (
                  <div
                    key={job.title + job.location}
                    className="flex items-center gap-4 px-5 md:px-6 py-4 md:py-5 group hover:bg-[#FAFFFE] transition-colors"
                  >
                    {/* Avatar */}
                    <div
                      className={`w-10 h-10 md:w-11 md:h-11 rounded-xl ${job.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}
                    >
                      {job.initial}
                    </div>

                    {/* Title + location */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold text-[#111827] text-sm md:text-base truncate">
                          {job.title}
                        </span>
                        {job.tags[0] && (
                          <span className="hidden sm:inline text-[11px] font-semibold px-2 py-0.5 bg-amber-50 text-amber-600 rounded-full shrink-0">
                            {job.tags[0]}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#9CA3AF] mt-0.5">📍 {job.location}</p>
                    </div>

                    {/* Type badge */}
                    <div className="hidden md:block shrink-0">
                      <span className={`rounded-full text-xs font-semibold px-3 py-1.5 ${typeBadgeClass}`}>
                        {typeLabel}
                      </span>
                    </div>

                    {/* Salary */}
                    <div className="text-right shrink-0">
                      <span className="font-bold text-[#111827] text-sm md:text-base">{job.salary}</span>
                      <span className="text-[#9CA3AF] text-xs">/mo</span>
                    </div>

                    {/* Apply button */}
                    <a
                      href={`https://wa.me/918579898230?text=${encodeURIComponent(`Hi Anita, I want to apply for ${job.title} in ${job.location}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden sm:block shrink-0 px-4 py-2 rounded-full bg-[#F3F4F6] text-[#374151] text-sm font-semibold group-hover:bg-[#10B981] group-hover:text-white transition-all"
                    >
                      Apply
                    </a>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          BOTTOM CTA
      ══════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-black text-[28px] text-[#111827] mb-3">
            Don&rsquo;t see the right fit?
          </h2>
          <p className="text-sm text-[#6B7280] mb-8 max-w-md mx-auto">
            Send your details to Anita directly — she&rsquo;ll match you personally within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/918579898230"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white font-semibold px-6 py-3.5 text-sm hover:bg-[#1ebe5d] transition-all duration-200"
              style={{ boxShadow: '0 4px 20px rgba(37,211,102,0.30)' }}
            >
              💬 WhatsApp Anita
            </a>
            <Link
              href="/apply"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#10B981] text-white font-semibold px-6 py-3.5 text-sm hover:bg-[#059669] transition-all duration-200"
            >
              Fill Application Form →
            </Link>
          </div>
          <p className="text-xs text-[#9CA3AF] mt-7">📞 +91 85798 98230 · Mon–Sat 10 AM – 6 PM</p>
        </div>
      </section>

      <Footer />
    </>
  );
}
