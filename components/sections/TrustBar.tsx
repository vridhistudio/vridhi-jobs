/* Scrolling client logos strip */
const clients = [
  'Aura Health Clinic',
  'Ember & Salt',
  'BrightPath Academy',
  'Nexus Capital',
  'Greenleaf Foundation',
  'IronPath Fitness',
  'MediCare Clinic',
  'ApexVentures',
  'StudioZen',
  'SpiceRoute',
  'Akanksha NGO',
  'Vertex Advisory',
  // duplicate for seamless loop
  'Aura Health Clinic',
  'Ember & Salt',
  'BrightPath Academy',
  'Nexus Capital',
  'Greenleaf Foundation',
  'IronPath Fitness',
  'MediCare Clinic',
  'ApexVentures',
  'StudioZen',
  'SpiceRoute',
  'Akanksha NGO',
  'Vertex Advisory',
];

export default function TrustBar() {
  return (
    <div className="relative py-5 overflow-hidden border-y border-[rgba(255,255,255,0.06)]">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#080808] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#080808] to-transparent pointer-events-none" />

      {/* Label */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-3 z-20">
        <span className="bg-[#080808] px-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#444]">
          Trusted by
        </span>
      </div>

      <div className="flex w-max" style={{ animation: 'marquee-left 38s linear infinite' }}>
        {clients.map((name, i) => (
          <span key={i} className="flex items-center gap-3 mx-8 text-sm font-medium text-[#444] whitespace-nowrap hover:text-[#888] transition-colors cursor-default select-none">
            <span className="w-1 h-1 rounded-full bg-[#10B981] opacity-30 flex-shrink-0" />
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
