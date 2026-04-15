export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-emerald flex items-center justify-center">
            <span className="text-[#050A14] font-bold text-xs">V</span>
          </div>
          <span className="font-display font-bold text-sm text-[#F8FAFC]">
            Vridhi<span className="text-[#10B981]">.</span>
          </span>
        </div>

        <p className="text-[#475569] text-sm text-center">
          © {year} Vridhi Studio. Built to grow.
        </p>

        <div className="flex items-center gap-5 text-sm text-[#475569]">
          <a href="mailto:hello@vridhi.dev" className="hover:text-[#10B981] transition-colors">
            hello@vridhi.dev
          </a>
          <a
            href="https://github.com/vridhistudio"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#10B981] transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
