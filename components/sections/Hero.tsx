'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, animate } from 'framer-motion';

/* ── Counter that animates when it enters the viewport ──────── */
function CountUp({ to, suffix = '', delay = 0 }: { to: number; suffix?: string; delay?: number }) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const ctrl = animate(0, to, {
        duration: 2.2,
        ease: 'easeOut',
        onUpdate: (v) => setVal(Math.floor(v)),
      });
      return () => ctrl.stop();
    }, delay);
    return () => clearTimeout(timer);
  }, [to, delay]);

  return <>{val}{suffix}</>;
}

const stats = [
  { to: 50, suffix: '+', label: 'Clients Worldwide' },
  { to: 3,  suffix: ' days', label: 'Avg. Delivery' },
  { to: 8,  suffix: '',      label: 'Service Verticals' },
  { to: 3,  suffix: '',      label: 'Countries Active' },
];

const spring = { type: 'spring' as const, stiffness: 60, damping: 18 };

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-36 pb-28 overflow-hidden">

      {/* ── Atmospheric background ─────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        {/* Primary emerald — massive, centered, intense */}
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[900px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(16,185,129,0.15) 0%, rgba(16,185,129,0.04) 40%, transparent 70%)', filter: 'blur(80px)' }} />
        {/* Indigo — top right accent */}
        <div className="absolute -top-40 right-[-10%] w-[700px] h-[700px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 65%)', filter: 'blur(100px)' }} />
        {/* Amber — bottom left */}
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 65%)', filter: 'blur(100px)' }} />
        {/* Fine dot grid overlay */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: 'radial-gradient(circle, #10B981 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">

        {/* ── Status badge ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[rgba(16,185,129,0.25)] bg-[rgba(16,185,129,0.07)] text-[#34D399] text-[0.7rem] font-semibold tracking-[0.12em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" style={{ boxShadow: '0 0 8px #10B981', animation: 'pulse 2s ease-in-out infinite' }} />
            Currently Taking Projects · Available Worldwide
          </span>
        </motion.div>

        {/* ── Headline ─────────────────────────────────────────── */}
        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.05 }}
            className="font-serif font-black leading-[0.94] tracking-tight"
            style={{ fontSize: 'clamp(4rem, 10.5vw, 8rem)' }}
          >
            We Build.<br />
            We{' '}
            <motion.span
              initial={{ color: '#f0f0f0' }}
              animate={{ color: '#10B981' }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Register.
            </motion.span>
            <br />
            We Grow.
          </motion.h1>
        </div>

        {/* ── Sub ──────────────────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.2 }}
          className="text-[#999] text-lg leading-relaxed max-w-[500px] mb-12"
        >
          Websites, apps, business registration, ad campaigns, SaaS —
          your complete digital journey, handled.{' '}
          <span style={{ color: '#F59E0B' }}>Trusted by founders across India, Southeast Asia & beyond.</span>
        </motion.p>

        {/* ── CTAs ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.3 }}
          className="flex flex-wrap gap-4 mb-28"
        >
          <a href="https://wa.me/917255961822" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Start a Project →
          </a>
          <a href="#work" className="btn-ghost">View Our Work</a>
        </motion.div>

        {/* ── Stats strip ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.45 }}
          className="grid grid-cols-2 md:grid-cols-4 rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.07)]"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`bg-[#0d0d0d] px-8 py-9 ${i < stats.length - 1 ? 'border-r border-[rgba(255,255,255,0.06)]' : ''}`}
            >
              <div className="font-serif font-black text-[#f0f0f0] leading-none mb-2"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)' }}>
                <CountUp to={s.to} suffix={s.suffix} delay={800 + i * 100} />
              </div>
              <div className="text-[11px] text-[#444] uppercase tracking-[0.15em]">{s.label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
