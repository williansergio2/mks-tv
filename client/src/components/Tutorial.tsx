/* ============================================================
   MKS TV Tutorial — Step-by-step onboarding section
   Design: Numbered steps with neon connectors, animated
   entrance, clear visual hierarchy.
   ============================================================ */

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    icon: "💳",
    title: "Contrate um Plano",
    desc: "Escolha o plano ideal para você (Mensal, Trimestral ou Anual) e entre em contato pelo WhatsApp.",
  },
  {
    number: "02",
    icon: "🔑",
    title: "Receba seu Acesso",
    desc: "Em minutos você recebe suas credenciais de acesso diretamente no WhatsApp. Ativação imediata!",
  },
  {
    number: "03",
    icon: "📲",
    title: "Instale o App",
    desc: "Baixe um dos apps compatíveis (IBO Player, IPTV Smarters, TiviMate) e insira suas credenciais.",
  },
  {
    number: "04",
    icon: "🎬",
    title: "Comece a Assistir",
    desc: "Pronto! Aproveite +15.000 canais, filmes e séries em HD, Full HD e 4K sem travamentos.",
  },
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative flex flex-col items-center text-center transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Step number */}
      <div className="relative mb-6">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center text-3xl relative z-10"
          style={{
            background: "rgba(56,39,245,0.15)",
            border: "2px solid rgba(56,39,245,0.5)",
            boxShadow: "0 0 30px rgba(56,39,245,0.3), inset 0 0 20px rgba(56,39,245,0.1)",
          }}
        >
          {step.icon}
        </div>
        <div
          className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
          style={{
            background: "#3827F5",
            boxShadow: "0 0 15px rgba(56,39,245,0.8)",
            fontFamily: "Bebas Neue, sans-serif",
            fontSize: "0.9rem",
          }}
        >
          {step.number}
        </div>
      </div>

      {/* Content */}
      <h3
        className="text-white text-2xl mb-3"
        style={{ fontFamily: "Bebas Neue, sans-serif", letterSpacing: "0.05em" }}
      >
        {step.title}
      </h3>
      <p
        className="text-white/60 text-sm leading-relaxed max-w-[220px]"
        style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 500 }}
      >
        {step.desc}
      </p>
    </div>
  );
}

export default function Tutorial() {
  return (
    <section id="tutorial" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #050510 0%, #0d0a2e 50%, #050510 100%)",
        }}
      />

      {/* Neon glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(56,39,245,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-[#3827F5] text-sm font-bold tracking-widest uppercase mb-3 px-4 py-1.5 rounded-full"
            style={{
              background: "rgba(56,39,245,0.1)",
              border: "1px solid rgba(56,39,245,0.3)",
              fontFamily: "Rajdhani, sans-serif",
            }}
          >
            📚 Como Funciona
          </span>
          <h2
            className="text-white text-4xl md:text-6xl mb-4"
            style={{
              fontFamily: "Bebas Neue, sans-serif",
              letterSpacing: "0.04em",
              textShadow: "0 0 30px rgba(56,39,245,0.3)",
            }}
          >
            Comece em 4 passos simples
          </h2>
          <p
            className="text-white/60 text-base max-w-lg mx-auto"
            style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 500 }}
          >
            Ativação rápida e sem complicação. Em menos de 10 minutos você já está assistindo.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(56,39,245,0.5), rgba(56,39,245,0.5), rgba(56,39,245,0.5), transparent)",
              boxShadow: "0 0 10px rgba(56,39,245,0.3)",
            }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
            {steps.map((step, index) => (
              <StepCard key={step.number} step={step} index={index} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <a
            href={`https://wa.me/5511964011142?text=${encodeURIComponent("Olá, quero testar a MKS TV por 7 dias grátis")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon inline-flex items-center gap-3 px-8 py-4 rounded-xl text-white font-bold text-xl"
            style={{ fontFamily: "Bebas Neue, sans-serif", letterSpacing: "0.1em" }}
          >
            <span>🚀</span>
            COMEÇAR AGORA — TESTE 7 DIAS GRÁTIS
          </a>
          <p
            className="text-white/40 text-sm mt-3"
            style={{ fontFamily: "Rajdhani, sans-serif" }}
          >
            Sem cartão de crédito • Ativação imediata • Suporte incluído
          </p>
        </div>
      </div>
    </section>
  );
}
