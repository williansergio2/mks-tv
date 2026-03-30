/* ============================================================
   MKS TV Benefits — Feature highlights section
   Design: Dark background with neon icon cards, staggered
   entrance animations, devices mockup image.
   ============================================================ */

import { useEffect, useRef, useState } from "react";

const DEVICES_IMG = "/assets/devices-mockup.webp";

const benefits = [
  {
    icon: "⚡",
    title: "Sem Travamentos",
    desc: "Tecnologia de streaming avançada que garante transmissão fluida, sem buffering ou interrupções.",
  },
  {
    icon: "🎬",
    title: "Alta Qualidade",
    desc: "Conteúdo em HD, Full HD e 4K. Imagem nítida e som cristalino em qualquer dispositivo.",
  },
  {
    icon: "💬",
    title: "Suporte Rápido",
    desc: "Atendimento via WhatsApp com resposta ágil. Nossa equipe está pronta para te ajudar.",
  },
  {
    icon: "📱",
    title: "Multi-dispositivos",
    desc: "Funciona em Smart TV, celular, tablet, computador e Fire Stick. Assista onde quiser.",
  },
  {
    icon: "📺",
    title: "+15.000 Canais",
    desc: "Canais nacionais, internacionais, esportes, notícias, filmes e muito mais ao vivo.",
  },
  {
    icon: "🚀",
    title: "Ativação Rápida",
    desc: "Acesso liberado em minutos após a contratação. Sem burocracia, sem espera.",
  },
];

function BenefitCard({ benefit, index }: { benefit: typeof benefits[0]; index: number }) {
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
      className={`glass-card rounded-2xl p-6 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4"
        style={{
          background: "rgba(56,39,245,0.15)",
          border: "1px solid rgba(56,39,245,0.3)",
          boxShadow: "0 0 20px rgba(56,39,245,0.1)",
        }}
      >
        {benefit.icon}
      </div>
      <h3
        className="text-white text-xl mb-2"
        style={{ fontFamily: "Bebas Neue, sans-serif", letterSpacing: "0.05em" }}
      >
        {benefit.title}
      </h3>
      <p
        className="text-white/60 text-sm leading-relaxed"
        style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 500 }}
      >
        {benefit.desc}
      </p>
    </div>
  );
}

export default function Benefits() {
  const [imgVisible, setImgVisible] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setImgVisible(true); },
      { threshold: 0.1 }
    );
    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-[#06061a] to-[#050510]" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <span
            className="inline-block text-[#3827F5] text-sm font-bold tracking-widest uppercase mb-3 px-4 py-1.5 rounded-full"
            style={{
              background: "rgba(56,39,245,0.1)",
              border: "1px solid rgba(56,39,245,0.3)",
              fontFamily: "Rajdhani, sans-serif",
            }}
          >
            ⚡ Por que escolher a MKS TV?
          </span>
          <h2
            className="text-white text-4xl md:text-6xl"
            style={{
              fontFamily: "Bebas Neue, sans-serif",
              letterSpacing: "0.04em",
              textShadow: "0 0 30px rgba(56,39,245,0.3)",
            }}
          >
            Tudo que você precisa
            <span className="block text-[#a8b4ff]">em um só lugar</span>
          </h2>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {benefits.map((benefit, index) => (
            <BenefitCard key={benefit.title} benefit={benefit} index={index} />
          ))}
        </div>

        {/* Devices mockup */}
        <div
          ref={imgRef}
          className={`relative rounded-3xl overflow-hidden transition-all duration-1000 ${
            imgVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{
            border: "1px solid rgba(56,39,245,0.2)",
            boxShadow: "0 0 60px rgba(56,39,245,0.15), 0 40px 80px rgba(0,0,0,0.5)",
          }}
        >
          <img
            src={DEVICES_IMG}
            alt="MKS TV em múltiplos dispositivos"
            className="w-full h-auto object-cover"
            style={{ maxHeight: "500px", objectPosition: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050510]/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-0 right-0 text-center">
            <p
              className="text-white text-xl md:text-2xl font-bold"
              style={{ fontFamily: "Bebas Neue, sans-serif", letterSpacing: "0.05em", textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}
            >
              Smart TV • Celular • Tablet • Computador • Fire Stick
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
