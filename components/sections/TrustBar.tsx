const items = [
  'Next.js', 'React Native', 'Laravel', 'TypeScript',
  'Tailwind CSS', 'Framer Motion', 'PostgreSQL', 'Supabase',
  'OpenAI', 'Vercel', 'AWS', 'Figma',
  'Next.js', 'React Native', 'Laravel', 'TypeScript',
  'Tailwind CSS', 'Framer Motion', 'PostgreSQL', 'Supabase',
  'OpenAI', 'Vercel', 'AWS', 'Figma',
];

export default function TrustBar() {
  return (
    <div className="relative py-8 overflow-hidden border-y border-white/5">
      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#050A14] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#050A14] to-transparent pointer-events-none" />

      <div className="flex w-max" style={{ animation: 'marquee-left 30s linear infinite' }}>
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-3 mx-6 text-sm font-medium text-[#475569] whitespace-nowrap">
            <span className="w-1 h-1 rounded-full bg-[#10B981] opacity-50" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
