"use client";

import { useState } from "react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const navLinks = ["Features", "Endpoints", "Docs", "Changelog"];

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

  const faqs = [
    {
      q: "How quickly can I get started with JioSaavn API?",
      a: "In minutes. Grab the base URL, hit any endpoint, and you'll get typed JSON back — no API key or signup required to start exploring.",
    },
    {
      q: "What data can I access through the API?",
      a: "Songs, albums, artists, and playlists — search, metadata, and streaming links, all in one consistent response shape.",
    },
    {
      q: "Is this an official JioSaavn product?",
      a: "No, this is an unofficial, community-built wrapper around JioSaavn's public data, made for developers who want a clean, typed interface.",
    },
    {
      q: "Can I use this in a commercial project?",
      a: "The project is open source under its repository license. Check the GitHub repo for full license terms before shipping to production.",
    },
    {
      q: "What kind of support is available?",
      a: "Full API reference docs, an active community, and direct contact with the maintainers via Telegram for questions or contributions.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a2e]">
      {/* Navbar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-[#ff6b35] flex items-center justify-center text-white text-sm">
              🎧
            </span>
            <span className="font-bold text-lg">
              JioSaavn<span className="text-[#ff6b35]">API</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#4a4a5e]">
            {navLinks.map((link) => (
              <a key={link} href="#" className="hover:text-[#ff6b35] transition-colors">
                {link}
              </a>
            ))}
          </nav>

          <a
            href="/api/docs"
            className="px-5 py-2.5 rounded-lg bg-[#ff6b35] text-white text-sm font-semibold hover:bg-[#e85a2a] transition-colors"
          >
            View Docs
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 pt-16 pb-20 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-[#fff1ea] text-[#ff6b35] text-xs font-semibold tracking-wide mb-6">
          v2.0 — NOW LIVE
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight max-w-3xl mx-auto">
          Music Data,
          <br />
          <span className="text-[#ff6b35]">One Clean API.</span>
        </h1>
        <p className="mt-6 text-[#6b6b80] text-lg max-w-xl mx-auto leading-relaxed">
          Search, stream, and explore millions of songs, albums, artists, and playlists — fast, typed, and free to use.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <a
            href="/api/docs"
            className="px-7 py-3.5 rounded-lg bg-[#ff6b35] text-white font-semibold hover:bg-[#e85a2a] transition-colors"
          >
            Get Started →
          </a>
          <a
            href="https://github.com/TeamAlfaBots"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-lg border border-black/10 font-semibold hover:bg-black/5 transition-colors"
          >
            View on GitHub
          </a>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 pb-20">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#fff1ea] text-[#ff6b35] text-xs font-semibold tracking-wide mb-4">
            FEATURES
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold">Everything Developers Need</h2>
          <p className="text-[#6b6b80] mt-3 max-w-xl mx-auto">
            A complete toolkit for building music-powered apps, fast.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-[#fff1ea] flex items-center justify-center text-2xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-[#6b6b80] text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-5 md:px-8 pb-20">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#fff1ea] text-[#ff6b35] text-xs font-semibold tracking-wide mb-4">
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold">Frequently Asked Questions</h2>
          <p className="text-[#6b6b80] mt-3">Everything you need to know about JioSaavn API.</p>
        </div>

        <div className="divide-y divide-black/5">
          {faqs.map((faq, i) => (
            <div key={faq.q} className="py-5">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between text-left gap-4"
              >
                <span className="font-semibold text-base">{faq.q}</span>
                <span
                  className={`shrink-0 w-7 h-7 rounded-full border border-black/10 flex items-center justify-center text-lg transition-transform ${
                    openFaq === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {openFaq === i && (
                <p className="text-[#6b6b80] text-sm leading-relaxed mt-3 pr-10">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-[#ff6b35] py-16 px-5 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">Ready to Build with JioSaavn API?</h2>
        <p className="text-white/90 mt-4 max-w-xl mx-auto">
          Free to use, fully typed, and open source. Start shipping music features today.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <a
            href="/api/docs"
            className="px-7 py-3.5 rounded-lg bg-white text-[#ff6b35] font-semibold hover:bg-white/90 transition-colors"
          >
            Get Started →
          </a>
          <a
            href="https://t.me/UffSexyboy"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-lg border border-white/60 text-white font-semibold hover:bg-white/10 transition-colors"
          >
            Talk to Us
          </a>
        </div>
      </section>

      {/* Created By */}
      <section className="max-w-3xl mx-auto px-5 md:px-8 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold">Built &amp; Maintained By</h2>
          <p className="text-[#6b6b80] text-sm mt-2">The people behind JioSaavnAPI</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="group rounded-2xl border border-black/5 bg-white shadow-sm p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#fff1ea] flex items-center justify-center text-2xl font-bold text-[#ff6b35]">
              MD
            </div>
            <h3 className="mt-4 text-lg font-bold">MrDeep</h3>
            <p className="text-[#6b6b80] text-xs mt-1">Creator &amp; Lead Developer</p>
            <div className="flex items-center justify-center gap-3 mt-5">
              <a
                href="https://t.me/UffSexyboy"
                target="_blank"
                rel="noopener noreferrer"
                title="Telegram: @UffSexyboy"
                aria-label="Telegram"
                className="flex items-center justify-center w-10 h-10 rounded-lg border border-black/10 hover:bg-[#fff1ea] hover:border-[#ff6b35]/30 hover:text-[#ff6b35] transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.94 4.6c.27-1.07-.87-1.94-1.87-1.45L2.4 11.32c-.78.38-.73 1.52.08 1.83l4.4 1.7 1.7 5.5c.2.65 1.02.8 1.46.28l2.4-2.8 4.6 3.4c.7.5 1.68.13 1.87-.7l3.03-14.93zM8.6 13.9l9.2-6.4c.2-.14.42.13.24.3l-7.5 6.9-.3 3.2-1.64-4z" />
                </svg>
              </a>
              <a
                href="https://github.com/TeamAlfaBots"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub: TeamAlfaBots"
                aria-label="GitHub"
                className="flex items-center justify-center w-10 h-10 rounded-lg border border-black/10 hover:bg-[#fff1ea] hover:border-[#ff6b35]/30 hover:text-[#ff6b35] transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.36-3.37-1.36-.46-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.13-4.56-5.03 0-1.11.38-2.02 1.03-2.73-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.04A9.3 9.3 0 0 1 12 6.8c.85.004 1.71.12 2.51.34 1.9-1.32 2.75-1.04 2.75-1.04.55 1.41.2 2.46.1 2.72.64.71 1.03 1.62 1.03 2.73 0 3.91-2.34 4.77-4.57 5.02.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.5A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="group rounded-2xl border border-black/5 bg-white shadow-sm p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#fff1ea] flex items-center justify-center text-2xl font-bold text-[#ff6b35]">
              MC
            </div>
            <h3 className="mt-4 text-lg font-bold">Miss Cherry</h3>
            <p className="text-[#6b6b80] text-xs mt-1">Contributor &amp; Maintainer</p>
            <div className="flex items-center justify-center gap-3 mt-5">
              <a
                href="https://t.me/Seductive_caffine"
                target="_blank"
                rel="noopener noreferrer"
                title="Telegram: @Seductive_caffine"
                aria-label="Telegram"
                className="flex items-center justify-center w-10 h-10 rounded-lg border border-black/10 hover:bg-[#fff1ea] hover:border-[#ff6b35]/30 hover:text-[#ff6b35] transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.94 4.6c.27-1.07-.87-1.94-1.87-1.45L2.4 11.32c-.78.38-.73 1.52.08 1.83l4.4 1.7 1.7 5.5c.2.65 1.02.8 1.46.28l2.4-2.8 4.6 3.4c.7.5 1.68.13 1.87-.7l3.03-14.93zM8.6 13.9l9.2-6.4c.2-.14.42.13.24.3l-7.5 6.9-.3 3.2-1.64-4z" />
                </svg>
              </a>
              <a
                href="https://github.com/TeamAlfaBots"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub: TeamAlfaBots"
                aria-label="GitHub"
                className="flex items-center justify-center w-10 h-10 rounded-lg border border-black/10 hover:bg-[#fff1ea] hover:border-[#ff6b35]/30 hover:text-[#ff6b35] transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.36-3.37-1.36-.46-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.13-4.56-5.03 0-1.11.38-2.02 1.03-2.73-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.04A9.3 9.3 0 0 1 12 6.8c.85.004 1.71.12 2.51.34 1.9-1.32 2.75-1.04 2.75-1.04.55 1.41.2 2.46.1 2.72.64.71 1.03 1.62 1.03 2.73 0 3.91-2.34 4.77-4.57 5.02.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.5A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/5">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-8 text-center text-[#6b6b80] text-sm">
          © 2026 Savan Unofficial Api • Built with ❤️ and TypeScript
        </div>
      </footer>

      {/* Sticky bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-black/10 flex items-center justify-between px-5 py-3 md:hidden">
        <a href="/api/docs" className="flex items-center gap-2 text-sm font-medium text-[#4a4a5e]">
          <span>📖</span> View Docs
        </a>
        <a
          href="/api/docs"
          className="px-5 py-2.5 rounded-lg bg-[#ff6b35] text-white text-sm font-semibold"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}
