export default function Home() {
  const navLinks = ["Endpoints", "Docs", "Changelog"];

  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Built with performance in mind. Experience blazing-fast response times and seamless data retrieval.",
    },
    {
      icon: "🎵",
      title: "Comprehensive API",
      description: "Access songs, albums, artists, playlists, and more. Everything you need in one powerful API.",
    },
    {
      icon: "💻",
      title: "TypeScript First",
      description: "Fully typed for the best developer experience. Auto-complete and type safety out of the box.",
    },
    {
      icon: "🔒",
      title: "Open Source",
      description: "Completely open source and free to use. Contribute, fork, or customize to your needs.",
    },
    {
      icon: "📚",
      title: "Full Documentation",
      description: "Comprehensive docs with examples, guides, and API references to get you started quickly.",
    },
    {
      icon: "🚀",
      title: "Active Community",
      description: "Join our growing community. Get support, share ideas, and collaborate on improvements.",
    },
  ];

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Dreamy background */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 30% 10%, rgba(140,255,190,0.35), transparent 60%), radial-gradient(ellipse 70% 60% at 80% 30%, rgba(120,200,255,0.30), transparent 60%), linear-gradient(160deg, #2a6b6b 0%, #3a8a72 40%, #d9b968 100%)",
        }}
      />
      <div className="fixed inset-0 -z-10 backdrop-blur-[2px] bg-black/10" />

      {/* Glass container */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
        <div className="rounded-[2rem] border border-white/25 bg-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden">
          {/* Navbar */}
          <header className="flex items-center justify-between px-6 md:px-10 h-20 border-b border-white/15">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎧</span>
              <span className="font-semibold text-lg tracking-tight">JioSaavn API</span>
            </div>

            <nav className="hidden md:flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-2 py-1.5">
              {navLinks.map((link, i) => (
                <a
                  key={link}
                  href="#"
                  className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
                    i === 0 ? "bg-white/90 text-[#1c3b34] font-medium" : "text-white/85 hover:text-white"
                  }`}
                >
                  {link}
                </a>
              ))}
            </nav>

            <a
              href="/api/docs"
              className="px-5 py-2.5 rounded-full border border-white/30 bg-white/10 text-sm font-medium hover:bg-white/20 transition-colors"
            >
              Contact
            </a>
          </header>

          {/* Hero */}
          <section className="px-6 md:px-12 pt-14 pb-16 md:pt-20 md:pb-20">
            <div className="grid md:grid-cols-[1.4fr_1fr] gap-10">
              <div>
                <h1 className="font-bold leading-[0.95] tracking-tight text-6xl md:text-8xl">
                  Music
                  <br />
                  That Fuels
                  <br />
                  Product.
                </h1>

                <div className="flex flex-wrap gap-4 mt-8">
                  <a
                    href="/api/docs"
                    className="px-7 py-3.5 rounded-full bg-[#5fe3a1] text-[#0c2a20] font-semibold hover:bg-[#7cedb3] transition-colors"
                  >
                    Get Started
                  </a>
                  <a
                    href="https://github.com/TeamAlfaBots"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-7 py-3.5 rounded-full border border-white/30 font-semibold hover:bg-white/10 transition-colors"
                  >
                    View on GitHub
                  </a>
                </div>

                <div className="mt-10 pt-6 border-t border-white/20 max-w-sm">
                  <p className="text-white/85 leading-relaxed">
                    A clean, typed API for songs, albums, artists, and playlists — built for developers who ship fast.
                  </p>
                </div>

                <div className="flex items-center gap-2 mt-10 text-white/70 text-sm">
                  <span>↓</span>
                  <span>Scroll down</span>
                </div>
              </div>

              <div className="border-l border-white/20 pl-8 flex flex-col justify-center">
                <p className="text-white/90 leading-relaxed text-lg">
                  Search millions of tracks in milliseconds. Our approach blends speed, reliability, and clean design — helping developers build better music experiences, faster.
                </p>
              </div>
            </div>

            {/* Glass stat cards */}
            <div className="grid md:grid-cols-2 gap-5 mt-14">
              <div className="rounded-2xl border border-white/25 bg-white/10 backdrop-blur-xl p-6">
                <h3 className="font-semibold text-lg">Lightning Response</h3>
                <p className="text-white/75 text-sm mt-1">Sub-second search across the catalog.</p>
                <div className="flex items-end gap-1.5 h-16 mt-5">
                  {[8, 16, 12, 22, 14, 26, 10, 20].map((h, i) => (
                    <div key={i} className="flex-1 rounded-sm bg-white/70" style={{ height: `${h * 3}px` }} />
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-white/25 bg-white/10 backdrop-blur-xl p-6">
                <h3 className="font-semibold text-lg">Open & Typed</h3>
                <p className="text-white/75 text-sm mt-1">Free to use, fully typed, fully yours.</p>
                <div className="flex items-center justify-center h-16 mt-5">
                  <span className="text-4xl">🔓</span>
                </div>
              </div>
            </div>
          </section>

          {/* Feature Cards */}
          <section className="px-6 md:px-12 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-7 hover:bg-white/15 transition-colors"
                >
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-white/75 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Creator Section */}
          <section className="px-6 md:px-12 pb-14">
            <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 md:p-12">
              <div className="inline-block px-4 py-1.5 rounded-full border border-white/30 text-xs font-semibold tracking-wide text-white/90 uppercase">
                Created By
              </div>

              <div className="mt-6 divide-y divide-white/15">
                <div className="py-6 first:pt-0">
                  <h2 className="text-2xl md:text-3xl font-bold">MrDeep</h2>
                  <div className="flex flex-wrap gap-4 mt-4">
                    <a
                      href="https://t.me/UffSexyboy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 hover:bg-white/10 transition-colors"
                    >
                      Telegram
                    </a>
                    <a
                      href="https://github.com/TeamAlfaBots"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 hover:bg-white/10 transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                </div>

                <div className="py-6 last:pb-0">
                  <h2 className="text-2xl md:text-3xl font-bold">Miss Cherry</h2>
                  <div className="flex flex-wrap gap-4 mt-4">
                    <a
                      href="https://t.me/Seductive_caffine"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 hover:bg-white/10 transition-colors"
                    >
                      Telegram
                    </a>
                    <a
                      href="https://github.com/TeamAlfaBots"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 hover:bg-white/10 transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-white/15">
            <div className="px-6 md:px-12 py-8 text-center text-white/70 text-sm">
              © 2026 Savan Unofficial Api • Built with ❤️ and TypeScript
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
