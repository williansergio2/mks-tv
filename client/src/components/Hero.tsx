/* ============================================================
   MKS TV Hero — Full-screen cinematic hero section
   Design: Background cinematográfico, título Bebas Neue impactante,
   CTA neon pulsante, gatilhos de escassez e urgência.
   ============================================================ */

import { useEffect, useState } from "react";

const HERO_BG = "/assets/hero-bg.webp";
const WHATSAPP_NUMBER = "5511964011142";
const WHATSAPP_TEST_MSG = encodeURIComponent("Olá, quero testar a MKS TV por 7 dias grátis");
const WHATSAPP_TEST_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEST_MSG}`;

function Particle({ style }: { style: React.CSSProperties }) {
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: "2px",
        height: "2px",
        background: "rgba(56, 39, 245, 0.8)",
        boxShadow: "0 0 6px rgba(56, 39, 245, 1)",
        ...style,
      }}
    />
  );
}

const particles = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  style: {
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    opacity: Math.random() * 0.8 + 0.2,
    animationDelay: `${Math.random() * 4}s`,
    animationDuration: `${3 + Math.random() * 4}s`,
  },
}));

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ paddingTop: "120px" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050510]/60 via-[#050510]/40 to-[#050510]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050510]/80 via-transparent to-[#050510]/80" />

      {/* Neon particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <Particle
            key={p.id}
            style={{
              ...p.style,
              animation: `float ${p.style.animationDuration} ease-in-out infinite`,
              animationDelay: p.style.animationDelay,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Urgency badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            background: "rgba(56, 39, 245, 0.15)",
            border: "1px solid rgba(56, 39, 245, 0.5)",
            boxShadow: "0 0 20px rgba(56, 39, 245, 0.2)",
            transitionDelay: "0ms",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-[#3827F5] animate-pulse" />
          <span
            className="text-[#a8b4ff] text-sm font-semibold tracking-widest uppercase"
            style={{ fontFamily: "Rajdhani, sans-serif" }}
          >
            ⚡ Vagas Limitadas — Aproveite Hoje!
          </span>
        </div>

        {/* Main title */}
        <h1
          className={`text-white leading-none mb-4 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            fontFamily: "Bebas Neue, sans-serif",
            fontSize: "clamp(3rem, 10vw, 8rem)",
            letterSpacing: "0.04em",
            transitionDelay: "150ms",
            textShadow: "0 0 40px rgba(56,39,245,0.4), 0 4px 20px rgba(0,0,0,0.8)",
          }}
        >
          MKS TV
          <span
            className="block"
            style={{
              fontSize: "clamp(1.5rem, 5vw, 4rem)",
              color: "#a8b4ff",
              textShadow: "0 0 20px rgba(56,39,245,0.6)",
            }}
          >
            Sua nova forma de assistir tudo
          </span>
        </h1>

        {/* Subtitle features */}
        <div
          className={`flex flex-wrap items-center justify-center gap-3 md:gap-6 mb-8 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          {["🎬 Filmes & Séries", "📺 Canais ao Vivo", "🔥 HD / Full HD / 4K", "⚡ Sem Travamentos"].map((item) => (
            <span
              key={item}
              className="text-white/80 text-sm md:text-base font-medium px-3 py-1.5 rounded-full"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                fontFamily: "Rajdhani, sans-serif",
                fontWeight: 600,
              }}
            >
              {item}
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "450ms" }}
        >
          <a
            href={WHATSAPP_TEST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon neon-pulse flex items-center gap-3 px-8 py-4 rounded-xl text-white font-bold text-xl md:text-2xl"
            style={{ fontFamily: "Bebas Neue, sans-serif", letterSpacing: "0.1em" }}
          >
            <span>🎁</span>
            TESTE GRÁTIS POR 7 DIAS
            <span>→</span>
          </a>

          <a
            href="#planos"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#planos")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center gap-2 px-6 py-4 rounded-xl text-white/70 hover:text-white transition-all duration-200 text-base font-semibold"
            style={{
              fontFamily: "Rajdhani, sans-serif",
              border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.05)",
            }}
          >
            Ver Planos
          </a>
        </div>

        {/* Social proof mini */}
        <div
          className={`mt-8 flex items-center justify-center gap-2 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <div className="flex -space-x-2">
            {["🧑", "👩", "👨", "🧑‍💼", "👩‍💻"].map((emoji, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm border-2 border-[#050510]"
                style={{ background: `hsl(${220 + i * 20}, 60%, 30%)` }}
              >
                {emoji}
              </div>
            ))}
          </div>
          <span className="text-white/60 text-sm" style={{ fontFamily: "Rajdhani, sans-serif" }}>
            <span className="text-[#3827F5] font-bold">+2.000</span> clientes satisfeitos
          </span>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-sm">★</span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/30 text-xs tracking-widest uppercase" style={{ fontFamily: "Rajdhani, sans-serif" }}>
          Scroll
        </span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-[#3827F5] to-transparent" />
      </div>
    </section>
  );
}
