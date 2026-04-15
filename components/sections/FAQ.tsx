'use client';
import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const faqs = [
  { q: 'How quickly will my website be ready?', a: 'Starter projects deliver in 3 business days, Growth projects in 5–7 days, and custom/premium builds in 10–15 days. Need it faster? Ask us about express delivery.' },
  { q: 'Do I need any technical knowledge to manage my site?', a: "Not at all. We give you a simple WhatsApp group where you can send content, photos, and change requests. No coding needed — we handle everything." },
  { q: 'How long does business registration take?', a: 'GST and MSME registration: 3–5 days. Private Limited company incorporation: 7–10 working days. NGO/Section 8: 15–20 days.' },
  { q: 'What is the minimum ad spend for campaigns?', a: 'Your ad spend goes directly to Meta or Google — separate from our management fee. We suggest the ideal budget based on your goals, location, and industry.' },
  { q: 'Is the WhatsApp Extension safe?', a: "Yes. We use safe-mode messaging with human-like delays and daily limits. 500+ users with no permanent bans to date. For maximum safety, we also set up the official WhatsApp Business API." },
  { q: 'When do I pay?', a: '50% when the project starts, 50% when we go live. UPI and bank transfer accepted. No hidden fees — the quoted price is the final price.' },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useScrollReveal();

  return (
    <section id="faq" ref={ref as React.RefObject<HTMLElement>} className="section-pad px-6 bg-[#0f0f0f]">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 text-center" data-reveal>
          <span className="section-label mx-auto">FAQs</span>
          <h2 className="font-serif text-[clamp(2.2rem,5vw,3.5rem)] font-black leading-tight mt-2">
            Everything<br /><em className="text-[#10B981]">crystal clear.</em>
          </h2>
        </div>

        <div className="flex flex-col gap-2">
          {faqs.map((f, i) => (
            <div key={i} data-reveal data-delay={String((i % 3) + 1)} className="card overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-[rgba(255,255,255,0.02)] transition-colors">
                <span className="text-sm font-semibold text-[#f0f0f0]">{f.q}</span>
                <span className="text-[#10B981] text-xl flex-shrink-0 transition-transform duration-300" style={{ transform: open === i ? 'rotate(45deg)' : 'none' }}>+</span>
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-sm text-[#888] leading-relaxed border-t border-[rgba(255,255,255,0.05)] pt-4">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
