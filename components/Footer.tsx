import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#E5E7EB] py-10 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-[#10B981] flex items-center justify-center">
                <span className="text-white font-bold text-xs font-display">V</span>
              </div>
              <span className="font-display font-bold text-[#111827]">
                Vridhi <span className="text-[#10B981]">Jobs</span>
              </span>
            </div>
            <p className="text-sm text-[#6B7280] leading-relaxed max-w-xs">
              Boutique placement service helping job seekers across Lucknow, Kanpur, Noida and UP find the right opportunity.
            </p>
            <p className="text-sm text-[#6B7280] mt-3">
              📞 <a href="tel:+918579898230" className="hover:text-[#10B981]">+91 85798 98230</a>
            </p>
            <a
              href="https://wa.me/918579898230"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-2 text-sm font-semibold text-[#10B981] hover:underline"
            >
              💬 WhatsApp Anita
            </a>
          </div>
          <div>
            <h4 className="font-display font-semibold text-[#111827] mb-3 text-sm">Job Seekers</h4>
            <ul className="space-y-2 text-sm text-[#6B7280]">
              <li><Link href="/jobs" className="hover:text-[#10B981]">Browse Jobs</Link></li>
              <li><Link href="/apply" className="hover:text-[#10B981]">Apply Now</Link></li>
              <li><Link href="/about" className="hover:text-[#10B981]">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-[#111827] mb-3 text-sm">Employers</h4>
            <ul className="space-y-2 text-sm text-[#6B7280]">
              <li><Link href="/hire" className="hover:text-[#10B981]">Post a Job</Link></li>
              <li><Link href="/contact" className="hover:text-[#10B981]">Contact Us</Link></li>
              <li><Link href="/about#faq" className="hover:text-[#10B981]">FAQ</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#E5E7EB] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#9CA3AF]">© 2025 Vridhi Jobs · All rights reserved.</p>
          <p className="text-xs text-[#9CA3AF]">
            Powered by{' '}
            <a href="https://vridhi.dev" target="_blank" rel="noopener noreferrer" className="text-[#10B981] hover:underline">
              Vridhi Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
