'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'Website kitne din mein ready hogi?',
    a: 'Starter plan mein 3 business days, Growth plan mein 5–7 days, aur Premium/custom projects mein 10–15 days lagte hain. Urgent hai toh batao — express delivery bhi available hai.',
  },
  {
    q: 'Kya mujhe technical knowledge chahiye website chalane ke liye?',
    a: 'Bilkul nahi. Hum aapko ek simple WhatsApp group dete hain jahan aap content, photos, aur changes request kar sakte ho. Koi coding nahi chahiye. Hum sab handle karte hain.',
  },
  {
    q: 'Business registration mein kitna time lagta hai?',
    a: 'GST aur MSME registration 3–5 days mein hoti hai. Private Limited company registration 7–10 working days mein complete hoti hai. NGO/Section 8 thoda aur time leta hai — 15–20 days.',
  },
  {
    q: 'Ad campaigns ke liye minimum budget kya hai?',
    a: 'Our management fee ke alawa, aapka ad spend directly Meta ya Google ko jaata hai. Hum aapko ideal budget suggest karte hain based on your goals, location, and industry.',
  },
  {
    q: 'WhatsApp Extension safe hai? Account ban nahi hoga?',
    a: "Haan, hum 'safe mode' use karte hain — messages ke beech delay, human-like patterns, aur daily limit settings. 500+ users hain aur abhi tak koi permanent ban nahi.",
  },
  {
    q: 'Payment kab karni hogi?',
    a: '50% advance jab project start ho, 50% jab website live ho. UPI, bank transfer, sab accepted hai. Koi hidden fees nahi — jo quote mila, wahi final price.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section-pad px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 text-center">
          <div className="tag mb-4 mx-auto">FAQs</div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#F8FAFC] leading-tight">
            Sab kuch clear
            <br />
            <span className="text-gradient-emerald">hona chahiye.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => (
            <div key={i} className="glass rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-white/3 transition-colors"
              >
                <span className="text-sm font-semibold text-[#F8FAFC]">{f.q}</span>
                <span className="text-[#10B981] text-lg flex-shrink-0 transition-transform duration-200" style={{ transform: open === i ? 'rotate(45deg)' : 'none' }}>+</span>
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-sm text-[#94A3B8] leading-relaxed border-t border-white/5 pt-4">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
