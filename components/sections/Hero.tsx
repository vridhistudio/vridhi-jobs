'use client';

import { useEffect, useState } from 'react';
import { motion, animate } from 'framer-motion';

/* ── Animated counter ───────────────────────────────────────── */
function CountUp({ to, suffix = '', delay = 0 }: { to: number; suffix?: string; delay?: number }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => {
      const ctrl = animate(0, to, {
        duration: 2.2,
        ease: 'easeOut',
        onUpdate: (v) => setVal(Math.floor(v)),
      });
      return () => ctrl.stop();
    }, delay);
    return () => clearTimeout(t);
  }, [to, delay]);
  return <>{val}{suffix}</>;
}

const stats = [
  { to: 50, suffix: '+', label: 'Clients' },
  { to: 3,  suffix: ' days', label: 'Delivery' },
  { to: 36, suffix: '+', label: 'Templates' },
  { to: 3,  suffix: '', label: 'Countries' },
];

/* Floating template preview cards on the right */
const previewCards = [
  { img: '/imgs/tpl-apexmed.jpg',    rotate: '-3deg',  top: '0%',   left: '10%',   z: 10, delay: 0.5 },
  { img: '/imgs/tpl-ember-salt.jpg', rotate: '3deg',   top: '22%',  left: '30%',   z: 20, delay: 0.65 },
  { img: '/imgs/tpl-meridian.jpg',   rotate: '-2deg',  top: '44%',  left: '5%',    z: 10, delay: 0.8 },
];

const spring = { type: 'spring' as const, stiffness: 55, damping: 16 };

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-36 pb-20 overflow-hidden">

      {/* ── Atmospheric background ─────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[900px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(16,185,129,0.13) 0%, rgba(16,185,129,0.03) 45%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute -top-40 right-[-5%] w-[700px] h-[700px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.09) 0%, transparent 65%)', filter: 'blur(100px)' }} />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 65%)', filter: 'blur(100px)' }} />
        <div className="absolute inset-0 opacity-[0.022]"
          style={{ backgroundImage: 'radial-gradient(circle, #10B981 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── LEFT: content ──────────────────────────────────── */}
          <div>
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[rgba(16,185,129,0.25)] bg-[rgba(16,185,129,0.07)] text-[#34D399] text-[0.68rem] font-semibold tracking-[0.12em] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] flex-shrink-0"
                  style={{ boxShadow: '0 0 8px #10B981', animation: 'pulse 2s ease-in-out infinite' }} />
                Available Worldwide · Taking Projects
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.05 }}
              className="font-serif font-black leading-[0.95] tracking-tight mb-7"
              style={{ fontSize: 'clamp(3.6rem, 8vw, 6.5rem)' }}
            >
              We Build.<br />
              We{' '}
              <motion.span
                initial={{ color: '#f0f0f0' }}
                animate={{ color: '#10B981' }}
                transition={{ delay: 0.55, duration: 0.8 }}
              >
                Register.
              </motion.span>
              <br />
              We Grow.
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.2 }}
              className="text-[#888] text-base leading-relaxed max-w-[440px] mb-10"
            >
              Websites, apps, business registration, ad campaigns, SaaS —
              your complete digital journey, handled.{' '}
              <span style={{ color: '#F59E0B' }}>Trusted by founders across India, Southeast Asia & beyond.</span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-14"
            >
              <a href="https://wa.me/917255961822" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Start a Project →
              </a>
              <a href="#work" className="btn-ghost">View Our Work</a>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.42 }}
              className="grid grid-cols-4 rounded-xl overflow-hidden border border-[rgba(255,255,255,0.07)]"
            >
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`bg-[#0d0d0d] px-4 py-5 text-center ${i < stats.length - 1 ? 'border-r border-[rgba(255,255,255,0.06)]' : ''}`}
                >
                  <div className="font-serif font-black text-[#f0f0f0] leading-none mb-1"
                    style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}>
                    <CountUp to={s.to} suffix={s.suffix} delay={900 + i * 80} />
                  </div>
                  <div className="text-[10px] text-[#444] uppercase tracking-[0.12em]">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: floating template previews ──────────────── */}
          <div className="relative hidden lg:block h-[520px]">

            {/* Glow behind cards */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 65%)', filter: 'blur(50px)' }} />

            {previewCards.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 60, y: 30 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ ...spring, delay: c.delay }}
                className="absolute w-[68%] rounded-2xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.7)] border border-[rgba(255,255,255,0.1)]"
                style={{
                  top: c.top,
                  left: c.left,
                  rotate: c.rotate,
                  zIndex: c.z,
                  aspectRatio: '16/10',
                }}
              >
                <img
                  src={c.img}
                  alt=""
                  className="w-full h-full object-cover object-top"
                />
                {/* subtle glass sheen */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none" />
              </motion.div>
            ))}

            {/* Live badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ...spring, delay: 1 }}
              className="absolute bottom-8 right-4 z-30 bg-[#141414] border border-[rgba(16,185,129,0.3)] rounded-xl px-4 py-3 flex items-center gap-2.5 shadow-xl"
            >
              <span className="w-2 h-2 rounded-full bg-[#10B981] flex-shrink-0"
                style={{ animation: 'pulse 2s ease-in-out infinite', boxShadow: '0 0 8px #10B981' }} />
              <div>
                <div className="text-xs font-bold text-[#f0f0f0]">36+ live designs</div>
                <div className="text-[10px] text-[#555]">Ready to customise</div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
