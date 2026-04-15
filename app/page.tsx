'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

// ── Fade-up wrapper ──────────────────────────────────────────────────────────
function FadeUp({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36, filter: 'blur(4px)' }}
      animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── LinkedIn mockup with Postly panel ─────────────────────────────────────────
function LinkedInMockup() {
  const [typed, setTyped] = useState('');
  const fullText = 'Just shipped a feature that cut our deploy time by 60%.\n\nHere\'s the exact playbook...';

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(fullText.slice(0, i));
      if (i >= fullText.length) clearInterval(id);
    }, 40);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full max-w-[560px] mx-auto">
      {/* Ambient glow */}
      <div
        className="absolute -inset-10 rounded-[40px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(99,102,241,0.14) 0%, transparent 70%)' }}
      />
      {/* Browser shell */}
      <div className="relative rounded-2xl overflow-hidden border border-white/10" style={{ background: '#0d0f14' }}>
        {/* Browser top bar */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.06]" style={{ background: '#111318' }}>
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
          </div>
          <div
            className="flex-1 rounded-md px-3 py-1 text-xs text-white/30 flex items-center gap-2"
            style={{ background: '#0d0f14', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M5 1a4 4 0 100 8A4 4 0 005 1z" stroke="rgba(255,255,255,0.3)" strokeWidth="1" fill="none" />
            </svg>
            linkedin.com/feed
          </div>
        </div>

        {/* LinkedIn UI */}
        <div className="flex" style={{ background: '#1a1d24', minHeight: '320px' }}>
          {/* Left sidebar stub */}
          <div className="w-14 flex-shrink-0 border-r border-white/[0.05] p-2 flex flex-col gap-3 items-center pt-4">
            <div className="w-8 h-8 rounded-full bg-[#0A66C2]/30 flex items-center justify-center">
              <span className="text-[8px] font-bold text-[#0A66C2]">in</span>
            </div>
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-6 h-1 rounded-full bg-white/10" />
            ))}
          </div>

          {/* Main feed */}
          <div className="flex-1 p-3 overflow-hidden">
            {/* Post composer */}
            <div
              className="rounded-xl p-4 mb-3 border border-[rgba(99,102,241,0.3)]"
              style={{ background: '#0d0f14' }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-full bg-[#6366F1]/30 flex items-center justify-center text-[9px] font-bold text-[#6366F1]">VS</div>
                <div className="text-[11px] text-white/50">Start a post…</div>
              </div>

              {/* Postly panel */}
              <div
                className="rounded-lg p-3 border border-[rgba(99,102,241,0.25)]"
                style={{ background: 'rgba(99,102,241,0.07)' }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                    <div
                      className="w-4 h-4 rounded flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}
                    >
                      <span className="text-[7px] font-black text-white">P</span>
                    </div>
                    <span className="text-[10px] font-semibold text-[#6366F1]">Postly AI</span>
                  </div>
                  <span
                    className="text-[9px] px-1.5 py-0.5 rounded-full font-semibold"
                    style={{ background: 'rgba(99,102,241,0.2)', color: '#818CF8' }}
                  >
                    generating…
                  </span>
                </div>

                {/* Prompt input */}
                <div
                  className="text-[10px] px-2 py-1.5 rounded-md mb-2 text-white/40 italic"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  "shipped feature that cut deploy time 60%"
                </div>

                {/* Typing output */}
                <div
                  className="text-[10px] leading-relaxed text-white/70 min-h-[52px] px-2 py-1.5 rounded-md"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(99,102,241,0.15)' }}
                >
                  {typed}
                  <span className="inline-block w-0.5 h-3 bg-[#6366F1] ml-0.5 animate-pulse" />
                </div>

                {/* Tone pills */}
                <div className="flex gap-1 mt-2 flex-wrap">
                  {['Professional', 'Storytelling', 'Casual', 'Hook-first'].map((tone, i) => (
                    <span
                      key={tone}
                      className="text-[9px] px-2 py-0.5 rounded-full cursor-pointer"
                      style={{
                        background: i === 1 ? 'rgba(99,102,241,0.25)' : 'rgba(255,255,255,0.05)',
                        color: i === 1 ? '#818CF8' : '#555',
                        border: `1px solid ${i === 1 ? 'rgba(99,102,241,0.4)' : 'rgba(255,255,255,0.07)'}`,
                      }}
                    >
                      {tone}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-end mt-2 gap-2">
                <button
                  className="text-[10px] px-3 py-1 rounded-full text-white/40"
                  style={{ background: 'rgba(255,255,255,0.05)' }}
                >
                  Regenerate
                </button>
                <button
                  className="text-[10px] px-3 py-1 rounded-full font-semibold text-white"
                  style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}
                >
                  Post now →
                </button>
              </div>
            </div>

            {/* Feed stub post */}
            <div
              className="rounded-xl p-3 border border-white/[0.05] opacity-40"
              style={{ background: 'rgba(255,255,255,0.02)' }}
            >
              <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full bg-white/10 flex-shrink-0" />
                <div className="flex-1">
                  <div className="h-1.5 rounded-full bg-white/15 w-24 mb-1" />
                  <div className="h-1 rounded-full bg-white/10 w-16" />
                </div>
              </div>
              <div className="mt-2 space-y-1">
                <div className="h-1 rounded-full bg-white/10 w-full" />
                <div className="h-1 rounded-full bg-white/10 w-4/5" />
                <div className="h-1 rounded-full bg-white/10 w-3/5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating stat badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 60, damping: 14 }}
        className="absolute -bottom-4 -right-4 rounded-2xl px-4 py-3 flex items-center gap-2.5 shadow-2xl border border-white/10 z-10"
        style={{ background: '#111318' }}
      >
        <div
          className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1l1.5 4.5H13l-3.7 2.7 1.4 4.3L7 10 3.3 12.5l1.4-4.3L1 5.5h4.5z" fill="white" />
          </svg>
        </div>
        <div>
          <div className="text-xs font-bold text-white/90">5× faster posting</div>
          <div className="text-[10px] text-white/40">Avg. vs manual writing</div>
        </div>
      </motion.div>
    </div>
  );
}

// ── FAQ item ─────────────────────────────────────────────────────────────────
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border-b cursor-pointer"
      style={{ borderColor: 'rgba(255,255,255,0.07)' }}
      onClick={() => setOpen((v) => !v)}
    >
      <div className="py-5 flex items-center justify-between gap-4">
        <span className="text-sm font-medium text-white/85">{q}</span>
        <span
          className="text-lg flex-shrink-0 transition-transform duration-300"
          style={{ color: '#6366F1', transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          +
        </span>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-white/45 pb-5 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Data ─────────────────────────────────────────────────────────────────────
const features = [
  {
    icon: '✍️',
    title: 'AI Post Generator',
    desc: 'Type a rough idea, get a polished LinkedIn post in seconds. Hook, body, CTA — all structured for maximum reach.',
    color: '#6366F1',
  },
  {
    icon: '🎭',
    title: 'Tone Presets',
    desc: 'Switch between Professional, Storytelling, Casual, and Hook-first tones to match your personal brand.',
    color: '#8B5CF6',
  },
  {
    icon: '🔁',
    title: 'One-click Rewrite',
    desc: 'Didn\'t like the first draft? Regenerate or tweak tone with one click — no new prompts needed.',
    color: '#6366F1',
  },
  {
    icon: '📊',
    title: 'Viral Hook Templates',
    desc: 'Built-in library of 50+ proven LinkedIn hook formulas. Never stare at a blank page again.',
    color: '#8B5CF6',
  },
  {
    icon: '🗓️',
    title: 'Post Scheduler',
    desc: 'Queue posts for optimal times when your audience is most active. Consistency without the effort.',
    color: '#6366F1',
  },
  {
    icon: '📈',
    title: 'Engagement Analytics',
    desc: 'Track impressions, reactions, and comments per post. See what content resonates and double down.',
    color: '#8B5CF6',
  },
];

const steps = [
  {
    num: '01',
    title: 'Describe your idea',
    desc: 'Type a rough thought, bullet points, or a topic — anything from "launched product" to "lessons from failure".',
  },
  {
    num: '02',
    title: 'Postly writes it',
    desc: 'Our AI crafts a scroll-stopping post with a hook, structured body, and a CTA tailored to your chosen tone.',
  },
  {
    num: '03',
    title: 'Post or schedule',
    desc: 'Edit if you want, then publish instantly or queue it for peak engagement hours. Done in under 2 minutes.',
  },
];

const testimonials = [
  {
    name: 'Ravi Menon',
    role: 'SaaS Founder',
    company: 'Bangalore, India',
    quote:
      'I went from posting once a month to every day. Postly drafts each post in 30 seconds, I refine for 2 minutes, and my impressions are up 8×. My pipeline has exploded.',
    metric: '8× impressions',
    initials: 'RM',
    color: '#6366F1',
  },
  {
    name: 'Sarah L.',
    role: 'Career Coach',
    company: 'Singapore',
    quote:
      'I had 1,200 followers and felt invisible on LinkedIn. After 6 weeks of daily Postly-generated posts, I hit 11K. Three inbound coaching clients came purely from the content.',
    metric: '+9,800 followers',
    initials: 'SL',
    color: '#8B5CF6',
  },
  {
    name: 'Arjun Nair',
    role: 'B2B Sales Lead',
    company: 'Dubai, UAE',
    quote:
      'The tone presets are underrated. I used "Storytelling" mode to write about customer success stories and our comment section became a lead gen machine.',
    metric: '14 warm leads/month',
    initials: 'AN',
    color: '#6366F1',
  },
];

const faqs = [
  {
    q: 'Does Postly post on my behalf without permission?',
    a: 'Never. Postly only drafts content for you inside your browser. You review, edit, and click Post yourself. We have no access to your LinkedIn account credentials.',
  },
  {
    q: 'Will LinkedIn detect AI-generated content?',
    a: 'LinkedIn does not penalise AI-assisted content. Postly acts as a writing assistant — the post goes out under your name, your voice, and your edits. Thousands of creators use it daily.',
  },
  {
    q: 'Does it work on any browser?',
    a: 'Postly is a Chrome extension. It works on Chrome, Brave, Arc, and any other Chromium-based browser. Firefox support is coming soon.',
  },
  {
    q: 'Can I write in languages other than English?',
    a: 'Yes. Postly supports English, Hindi, and 12+ other languages. Just write your prompt in your preferred language.',
  },
  {
    q: 'What happens after my free posts run out?',
    a: 'You can upgrade to Pro or Team from inside the extension in seconds. Your existing posts and history are preserved.',
  },
  {
    q: 'Is there a refund policy?',
    a: 'Yes — 7-day no-questions-asked refund on Pro and Team plans. Just email hello@vridhi.dev.',
  },
];

const plans = [
  {
    name: 'Free',
    price: '₹0',
    period: 'forever',
    desc: 'Try it out. No credit card required.',
    features: ['10 AI posts / month', 'Basic tone presets', 'Hook templates library', 'Chrome extension'],
    cta: 'Add to Chrome',
    href: '#install',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '₹499',
    period: '/month',
    desc: 'For individuals building their personal brand.',
    features: [
      'Unlimited AI posts',
      'All 4 tone presets',
      '50+ hook templates',
      'Post scheduler',
      'Basic analytics',
      'Priority support',
    ],
    cta: 'Get Pro',
    href: 'https://wa.me/917255961822',
    highlight: true,
  },
  {
    name: 'Team',
    price: '₹1,299',
    period: '/month',
    desc: 'For agencies and marketing teams.',
    features: [
      'Everything in Pro',
      'Up to 5 team seats',
      'Brand voice profiles',
      'Advanced analytics',
      'Content calendar',
      'Dedicated onboarding',
    ],
    cta: 'Contact us',
    href: 'https://wa.me/917255961822',
    highlight: false,
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function PostlyLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: '#080810', color: '#f0f0f0' }}>

      {/* ── NAV ─────────────────────────────────────────────────────────── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(8,8,16,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(99,102,241,0.12)' : 'none',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}
            >
              <span className="text-[11px] font-black text-white">P</span>
            </div>
            <span className="font-bold text-white text-sm tracking-tight">Postly</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/50">
            {[['Features', '#features'], ['How it works', '#how'], ['Pricing', '#pricing'], ['FAQ', '#faq']].map(
              ([label, href]) => (
                <a key={label} href={href} className="hover:text-white transition-colors">
                  {label}
                </a>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/917255961822"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/50 hover:text-white transition-colors"
            >
              Contact
            </a>
            <a
              id="install"
              href="#install"
              className="text-sm font-semibold px-5 py-2 rounded-full text-white transition-all"
              style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}
            >
              Add to Chrome — Free
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white/60 hover:text-white"
            onClick={() => setMobileMenuOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {mobileMenuOpen ? (
                <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <>
                  <line x1="3" y1="7" x2="19" y2="7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <line x1="3" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <line x1="3" y1="17" x2="19" y2="17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden px-6 pb-6 space-y-4 border-t border-white/[0.06]"
              style={{ background: 'rgba(8,8,16,0.98)' }}
            >
              {[['Features', '#features'], ['How it works', '#how'], ['Pricing', '#pricing'], ['FAQ', '#faq']].map(
                ([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="block text-sm text-white/60 hover:text-white py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {label}
                  </a>
                )
              )}
              <a
                href="#install"
                className="block text-sm font-semibold text-center py-2.5 rounded-full text-white"
                style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Add to Chrome — Free
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-20 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
          <div
            className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] rounded-full"
            style={{
              background: 'radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, rgba(99,102,241,0.02) 50%, transparent 70%)',
              filter: 'blur(80px)',
            }}
          />
          <div
            className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 65%)',
              filter: 'blur(100px)',
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[500px] h-[400px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(10,102,194,0.07) 0%, transparent 65%)',
              filter: 'blur(100px)',
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.018]"
            style={{
              backgroundImage: 'radial-gradient(circle, #6366F1 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left: copy */}
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mb-8"
              >
                <span
                  className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-[0.68rem] font-semibold tracking-[0.12em] uppercase"
                  style={{
                    border: '1px solid rgba(99,102,241,0.3)',
                    background: 'rgba(99,102,241,0.08)',
                    color: '#818CF8',
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{
                      background: '#6366F1',
                      boxShadow: '0 0 8px #6366F1',
                      animation: 'pulse 2s ease-in-out infinite',
                    }}
                  />
                  Chrome Extension · LinkedIn AI Writer
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 55, damping: 16, delay: 0.05 }}
                className="font-serif font-black leading-[0.95] tracking-tight mb-7"
                style={{ fontSize: 'clamp(3.2rem, 7vw, 5.8rem)', fontFamily: 'Georgia, serif' }}
              >
                Write{' '}
                <motion.span
                  initial={{ color: '#f0f0f0' }}
                  animate={{ color: '#818CF8' }}
                  transition={{ delay: 0.55, duration: 0.8 }}
                >
                  LinkedIn
                </motion.span>
                <br />
                posts that
                <br />
                <span style={{ color: '#6366F1' }}>go viral.</span>
              </motion.h1>

              {/* Sub */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 55, damping: 16, delay: 0.2 }}
                className="text-base leading-relaxed max-w-[440px] mb-10"
                style={{ color: '#888' }}
              >
                Postly turns rough ideas into scroll-stopping LinkedIn posts in seconds.
                Built-in hook templates, AI rewriting, and a scheduler — right inside your browser.{' '}
                <span style={{ color: '#F59E0B' }}>No context-switching. No blank page.</span>
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 55, damping: 16, delay: 0.3 }}
                className="flex flex-wrap gap-3 mb-14"
              >
                <a
                  href="#install"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white transition-all hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <rect x="1" y="1" width="12" height="12" rx="2" stroke="white" strokeWidth="1.2" fill="none" />
                    <path d="M4.5 7l2 2 3-3" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                  Add to Chrome — It&apos;s Free
                </a>
                <a
                  href="#how"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all"
                  style={{
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: '#888',
                  }}
                >
                  See how it works
                </a>
              </motion.div>

              {/* Social proof strip */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 55, damping: 16, delay: 0.45 }}
                className="flex items-center gap-6 flex-wrap"
              >
                <div className="flex -space-x-2">
                  {['#6366F1', '#8B5CF6', '#0A66C2', '#10B981', '#F59E0B'].map((c, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-[9px] font-bold"
                      style={{ background: c, borderColor: '#080810', color: '#fff' }}
                    >
                      {['RK', 'SL', 'AN', 'PM', 'VR'][i]}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-xs text-white/80 font-medium">2,400+ LinkedIn creators</div>
                  <div className="text-[11px] text-white/35">posting daily with Postly</div>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[#F59E0B] text-sm">★★★★★</span>
                  <span className="text-xs text-white/40 ml-1">4.9 / 5</span>
                </div>
              </motion.div>
            </div>

            {/* Right: LinkedIn mockup */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: 'spring', stiffness: 55, damping: 16, delay: 0.3 }}
              className="hidden lg:block"
            >
              <LinkedInMockup />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── STATS STRIP ─────────────────────────────────────────────────── */}
      <div
        className="border-y"
        style={{ borderColor: 'rgba(255,255,255,0.06)', background: '#0c0c18' }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0" style={{ '--tw-divide-opacity': '1' } as React.CSSProperties}>
            {[
              { val: '2,400+', label: 'Active users' },
              { val: '180K+', label: 'Posts generated' },
              { val: '5×',    label: 'Faster writing' },
              { val: '4.9 ★', label: 'Chrome store rating' },
            ].map((s) => (
              <FadeUp key={s.label} className="py-8 px-6 text-center">
                <div
                  className="text-2xl font-black mb-1"
                  style={{ fontFamily: 'Georgia, serif', color: '#6366F1' }}
                >
                  {s.val}
                </div>
                <div className="text-[11px] uppercase tracking-widest text-white/35">{s.label}</div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>

      {/* ── FEATURES ─────────────────────────────────────────────────────── */}
      <section id="features" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeUp className="mb-16 text-center">
            <span
              className="text-[0.65rem] font-bold tracking-[0.18em] uppercase mb-4 block"
              style={{ color: '#6366F1' }}
            >
              Everything you need
            </span>
            <h2
              className="font-black leading-tight"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontFamily: 'Georgia, serif' }}
            >
              Built for serious
              <br />
              <span style={{ color: '#6366F1' }}>LinkedIn growth.</span>
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <FadeUp key={f.title} delay={i * 0.07}>
                <div
                  className="rounded-2xl p-7 h-full flex flex-col gap-4 transition-all duration-300 hover:border-opacity-30 group"
                  style={{
                    background: '#0c0c18',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: `${f.color}15`, border: `1px solid ${f.color}25` }}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white/90 mb-2 text-[0.95rem]">{f.title}</h3>
                    <p className="text-sm text-white/40 leading-relaxed">{f.desc}</p>
                  </div>
                  <div
                    className="w-8 h-0.5 rounded-full mt-auto opacity-60 group-hover:w-14 transition-all duration-500"
                    style={{ background: f.color }}
                  />
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section
        id="how"
        className="py-28 px-6"
        style={{ background: '#0c0c18' }}
      >
        <div className="max-w-4xl mx-auto">
          <FadeUp className="mb-16 text-center">
            <span
              className="text-[0.65rem] font-bold tracking-[0.18em] uppercase mb-4 block"
              style={{ color: '#6366F1' }}
            >
              Dead simple
            </span>
            <h2
              className="font-black leading-tight"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontFamily: 'Georgia, serif' }}
            >
              From idea to post
              <br />
              <span style={{ color: '#6366F1' }}>in under 2 minutes.</span>
            </h2>
          </FadeUp>

          <div className="space-y-4">
            {steps.map((step, i) => (
              <FadeUp key={step.num} delay={i * 0.1}>
                <div
                  className="rounded-2xl p-8 flex gap-8 items-start"
                  style={{
                    background: '#080810',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <div
                    className="text-3xl font-black flex-shrink-0 leading-none"
                    style={{
                      fontFamily: 'Georgia, serif',
                      color: 'rgba(99,102,241,0.25)',
                      minWidth: '2.5rem',
                    }}
                  >
                    {step.num}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white/90 text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-white/45 leading-relaxed">{step.desc}</p>
                  </div>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ml-auto"
                    style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)' }}
                  >
                    <span className="text-[#6366F1] font-bold text-sm">{i + 1}</span>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.35} className="mt-12 text-center">
            <a
              href="#install"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:opacity-90 text-sm"
              style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}
            >
              Try it free — no credit card needed →
            </a>
          </FadeUp>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeUp className="mb-16 text-center">
            <span
              className="text-[0.65rem] font-bold tracking-[0.18em] uppercase mb-4 block"
              style={{ color: '#6366F1' }}
            >
              Creator stories
            </span>
            <h2
              className="font-black leading-tight"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontFamily: 'Georgia, serif' }}
            >
              Real results from
              <br />
              <span style={{ color: '#6366F1' }}>real creators.</span>
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <FadeUp key={t.name} delay={i * 0.09}>
                <div
                  className="rounded-2xl p-8 flex flex-col gap-5 h-full"
                  style={{ background: '#0c0c18', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div className="flex items-center justify-between">
                    <div className="text-[#F59E0B] text-sm tracking-wider">★★★★★</div>
                    <span
                      className="text-[11px] font-bold px-2.5 py-1 rounded-full"
                      style={{
                        color: t.color,
                        background: `${t.color}12`,
                        border: `1px solid ${t.color}25`,
                      }}
                    >
                      {t.metric}
                    </span>
                  </div>
                  <p className="text-sm text-white/45 leading-relaxed flex-1">"{t.quote}"</p>
                  <div
                    className="flex items-center gap-3 pt-5 border-t"
                    style={{ borderColor: 'rgba(255,255,255,0.05)' }}
                  >
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{ background: t.color, color: '#080810' }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white/90">{t.name}</div>
                      <div className="text-xs text-white/35">
                        {t.role} · {t.company}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────────────── */}
      <section
        id="pricing"
        className="py-28 px-6"
        style={{ background: '#0c0c18' }}
      >
        <div className="max-w-5xl mx-auto">
          <FadeUp className="mb-16 text-center">
            <span
              className="text-[0.65rem] font-bold tracking-[0.18em] uppercase mb-4 block"
              style={{ color: '#6366F1' }}
            >
              Simple pricing
            </span>
            <h2
              className="font-black leading-tight"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontFamily: 'Georgia, serif' }}
            >
              Start free.
              <br />
              <span style={{ color: '#6366F1' }}>Scale when you're ready.</span>
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-5">
            {plans.map((plan, i) => (
              <FadeUp key={plan.name} delay={i * 0.08}>
                <div
                  className="rounded-2xl p-8 flex flex-col h-full relative"
                  style={{
                    background: plan.highlight ? 'rgba(99,102,241,0.07)' : '#080810',
                    border: plan.highlight
                      ? '1px solid rgba(99,102,241,0.35)'
                      : '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  {plan.highlight && (
                    <div
                      className="absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] font-bold px-3 py-1 rounded-full text-white"
                      style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}
                    >
                      Most popular
                    </div>
                  )}

                  <div className="mb-6">
                    <div className="text-sm font-semibold text-white/60 mb-3">{plan.name}</div>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span
                        className="text-4xl font-black"
                        style={{ fontFamily: 'Georgia, serif', color: plan.highlight ? '#818CF8' : '#f0f0f0' }}
                      >
                        {plan.price}
                      </span>
                      <span className="text-sm text-white/35">{plan.period}</span>
                    </div>
                    <p className="text-xs text-white/35 leading-snug">{plan.desc}</p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-sm text-white/55">
                        <span style={{ color: '#6366F1', flexShrink: 0, marginTop: '1px' }}>✓</span>
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={plan.href}
                    target={plan.href.startsWith('http') ? '_blank' : undefined}
                    rel={plan.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block text-center py-3 rounded-full text-sm font-semibold transition-all"
                    style={
                      plan.highlight
                        ? { background: 'linear-gradient(135deg, #6366F1, #8B5CF6)', color: '#fff' }
                        : {
                            border: '1px solid rgba(255,255,255,0.12)',
                            color: '#888',
                          }
                    }
                  >
                    {plan.cta}
                  </a>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.3} className="mt-8 text-center">
            <p className="text-xs text-white/30">
              All prices in INR. 7-day refund on paid plans. Questions?{' '}
              <a href="mailto:hello@vridhi.dev" className="underline hover:text-white/60 transition-colors">
                hello@vridhi.dev
              </a>
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section id="faq" className="py-28 px-6">
        <div className="max-w-2xl mx-auto">
          <FadeUp className="mb-14 text-center">
            <span
              className="text-[0.65rem] font-bold tracking-[0.18em] uppercase mb-4 block"
              style={{ color: '#6366F1' }}
            >
              FAQ
            </span>
            <h2
              className="font-black leading-tight"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontFamily: 'Georgia, serif' }}
            >
              Got questions?
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div>
              {faqs.map((f) => (
                <FAQItem key={f.q} {...f} />
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── CTA BANNER ─────────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: '#0c0c18' }}>
        <div className="max-w-3xl mx-auto text-center">
          <FadeUp>
            <div
              className="rounded-3xl p-12 relative overflow-hidden"
              style={{
                background: '#080810',
                border: '1px solid rgba(99,102,241,0.2)',
              }}
            >
              {/* Glow */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse, rgba(99,102,241,0.15) 0%, transparent 70%)',
                  filter: 'blur(40px)',
                }}
              />
              <div className="relative z-10">
                <div
                  className="text-4xl mb-6 font-black"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  Start posting today.{' '}
                  <span style={{ color: '#818CF8' }}>For free.</span>
                </div>
                <p className="text-white/45 text-sm mb-8 leading-relaxed max-w-md mx-auto">
                  Install Postly in 30 seconds. No signup, no credit card. Open LinkedIn, click the extension, and write your first AI post in under 2 minutes.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <a
                    href="#install"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white text-sm transition-all hover:opacity-90"
                    style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}
                  >
                    Add to Chrome — It&apos;s Free →
                  </a>
                  <a
                    href="https://wa.me/917255961822"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium transition-all"
                    style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#777' }}
                  >
                    Talk to us
                  </a>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────────── */}
      <footer
        className="py-12 px-6 border-t"
        style={{ borderColor: 'rgba(255,255,255,0.06)', background: '#080810' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <a href="#" className="flex items-center gap-2.5 mb-3">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}
                >
                  <span className="text-[11px] font-black text-white">P</span>
                </div>
                <span className="font-bold text-white text-sm">Postly</span>
              </a>
              <p className="text-xs text-white/30 max-w-[240px] leading-relaxed">
                AI-powered LinkedIn post writer. Built by{' '}
                <a
                  href="https://vridhi.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-white/60"
                >
                  Vridhi Studio
                </a>
                .
              </p>
            </div>

            <nav className="flex flex-wrap gap-6 text-xs text-white/35">
              {[
                ['Features', '#features'],
                ['Pricing', '#pricing'],
                ['FAQ', '#faq'],
                ['Privacy', '#'],
                ['Terms', '#'],
                ['Contact', 'mailto:hello@vridhi.dev'],
              ].map(([label, href]) => (
                <a key={label} href={href} className="hover:text-white/70 transition-colors">
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div
            className="mt-8 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/20"
            style={{ borderColor: 'rgba(255,255,255,0.05)' }}
          >
            <span>© {new Date().getFullYear()} Vridhi Studio. All rights reserved.</span>
            <span>
              Made with{' '}
              <span style={{ color: '#6366F1' }}>♥</span>
              {' '}in India
            </span>
          </div>
        </div>
      </footer>

    </div>
  );
}
