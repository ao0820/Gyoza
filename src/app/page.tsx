"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";
import NewsSection from "./components/NewsSection";
import TicketSection from "./components/TicketSection";
import HowToSection from "./components/HowToSection";
import MenuSection from "./components/MenuSection";
import AccessSection from "./components/AccessSection";
import SpecialEventSection from "./components/SpecialEventSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden" >
          <div className="absolute inset-0 z-0">
            <Image
              src="/img/gyoza.png"
              alt="Gyoza Festival Hero"
              fill
              className="object-cover"
              priority
            />
            {/* Gradient Overlay for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-brand-black/90" />
            <div className="absolute inset-0 bg-[url('/img/pattern.png')] opacity-10 mix-blend-overlay" />
          </div>

          <div className="relative z-10 px-4 w-full max-w-5xl mx-auto flex flex-col items-center">
            <ScrollReveal>
              <div className="mb-6 flex flex-col items-center">
                <span className="text-brand-yellow font-bold tracking-[0.5em] text-sm md:text-xl mb-4 uppercase drop-shadow-md">
                  The Biggest Gyoza Festival in Japan
                </span>
                <h2 className="text-6xl md:text-9xl font-black mb-2 text-white drop-shadow-xl tracking-tighter leading-none">
                  <span className="text-brand-red">熱狂</span>、<br className="md:hidden" />餃子フェス
                </h2>
                <div className="h-1 w-24 bg-brand-yellow mt-6 mb-8 rounded-full shadow-[0_0_15px_rgba(252,200,0,0.8)]" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-center justify-center mb-10 text-white/90 font-bold tracking-widest bg-black/40 px-8 py-4 rounded-full backdrop-blur-sm border border-white/20">
                <span className="text-xl md:text-2xl border-b-2 border-brand-red pb-1">2026.5.1 - 5.5</span>
                <span className="text-lg md:text-xl">@久屋大通公園</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <Link
                href="#menu"
                className="group relative inline-flex items-center justify-center px-12 py-5 font-black text-xl text-white transition-all duration-300 bg-brand-red rounded-full overflow-hidden hover:bg-white hover:text-brand-red shadow-[0_0_20px_rgba(195,14,46,0.5)] hover:shadow-[0_0_30px_rgba(255,255,255,0.8)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  出店店舗を見る <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
            </ScrollReveal>
          </div>

          <div className="absolute bottom-10 text-white/50">
            <span className="text-xs tracking-widest">SCROLL</span>
          </div>
        </section>

        <NewsSection />
        <SpecialEventSection />
        <TicketSection />
        <HowToSection />
        <MenuSection />
        <AccessSection />

      </main>
      <Footer />
    </>
  );
}
