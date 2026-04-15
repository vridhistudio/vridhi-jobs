'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from '@/components/Reveal';

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

  return (
    <section id="faq" className="section-pad px-6 bg-[#0c0c0c]">
      <div className="max-w-3xl mx-auto">

        <Reveal className="mb-14 text-center">
          <span className="section-label mx-auto">FAQs</span>
          <h2 className="font-serif font-black leading-tight mt-3"
            style={{ fontSize: 'clamp(2.2rem,5vw,3.5rem)' }}>
            Everything<br /><em className="not-italic" style={{ color: '#10B981' }}>crystal clear.</em>
          </h2>
        </Reveal>

        <div className="flex flex-col gap-2">
          {faqs.map((f, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div className="card overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-[rgba(255,255,255,0.02)] transition-colors"
                >
                  <span className="text-sm font-semibold text-[#e0e0e0]">{f.q}</span>
                  <motion.span
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-[#10B981] text-xl flex-shrink-0"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-sm text-[#777] leading-relaxed border-t border-[rgba(255,255,255,0.05)] pt-4">
                        {f.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
