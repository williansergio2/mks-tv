/* ============================================================
   MKS TV Testimonials — Social proof section
   Design: Star ratings, user testimonials with glassmorphism
   cards, animated entrance, trust indicators.
   ============================================================ */

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Carlos Mendes",
    location: "São Paulo, SP",
    avatar: "CM",
    rating: 5,
    text: "Melhor IPTV que já usei! Qualidade incrível, sem travamentos. Assisto tudo em 4K no meu Smart TV. Recomendo demais!",
    plan: "Plano Anual",
    color: "#3827F5",
  },
  {
    name: "Fernanda Costa",
    location: "Rio de Janeiro, RJ",
    avatar: "FC",
    rating: 5,
    text: "Sem travamentos, recomendo! Já testei vários serviços e a MKS TV é de longe o melhor. Suporte super rápido também.",
    plan: "Plano Trimestral",
    color: "#7b6fff",
  },
  {
    name: "Roberto Silva",
    location: "Belo Horizonte, MG",
    avatar: "RS",
    rating: 5,
    text: "Ativação em menos de 5 minutos! Canais nacionais e internacionais todos funcionando perfeitamente. Vale cada centavo.",
    plan: "Plano Mensal",
    color: "#3827F5",
  },
  {
    name: "Ana Paula Lima",
    location: "Curitiba, PR",
    avatar: "AL",
    rating: 5,
    text: "Uso no celular, tablet e TV. Funciona em tudo! Minha família toda assiste e nunca tivemos problema. Excelente serviço!",
    plan: "Plano Anual",
    color: "#7b6fff",
  },
  {
    name: "Marcos Oliveira",
    location: "Salvador, BA",
    avatar: "MO",
    rating: 5,
    text: "Fiz o teste de 7 dias e já contratei o anual. Qualidade HD perfeita, canais esportivos ao vivo sem delay. Top demais!",
    plan: "Plano Anual",
    color: "#3827F5",
  },
  {
    name: "Juliana Santos",
    location: "Fortaleza, CE",
    avatar: "JS",
    rating: 5,
    text: "Atendimento nota 10! Tive uma dúvida e responderam na hora pelo WhatsApp. Serviço impecável, recomendo a todos.",
    plan: "Plano Trimestral",
    color: "#7b6fff",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <span key={i} className="text-yellow-400 text-base">★</span>
      ))}
    </div>
  );
}

function TestimonialCard({ t, index }: { t: typeof testimonials[0]; index: number }) {
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
      className={`glass-card rounded-2xl p-6 flex flex-col gap-4 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Rating */}
      <StarRating count={t.rating} />

      {/* Text */}
      <p
        className="text-white/80 text-sm leading-relaxed flex-1"
        style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 500 }}
      >
        "{t.text}"
      </p>

      {/* User info */}
      <div className="flex items-center gap-3 pt-2 border-t border-white/10">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
          style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}80)` }}
        >
          {t.avatar}
        </div>
        <div>
          <p className="text-white text-sm font-semibold" style={{ fontFamily: "Rajdhani, sans-serif" }}>
            {t.name}
          </p>
          <p className="text-white/40 text-xs" style={{ fontFamily: "Rajdhani, sans-serif" }}>
            {t.location} • {t.plan}
          </p>
        </div>
        <div className="ml-auto">
          <span
            className="text-xs px-2 py-1 rounded-full text-[#3827F5] font-semibold"
            style={{
              background: "rgba(56,39,245,0.1)",
              border: "1px solid rgba(56,39,245,0.2)",
              fontFamily: "Rajdhani, sans-serif",
            }}
          >
            ✓ Verificado
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #050510 0%, #0a0820 50%, #050510 100%)",
        }}
      />

      {/* Neon glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(56,39,245,0.06) 0%, transparent 70%)",
        }}
      />

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
            ⭐ Prova Social
          </span>
          <h2
            className="text-white text-4xl md:text-6xl mb-4"
            style={{
              fontFamily: "Bebas Neue, sans-serif",
              letterSpacing: "0.04em",
              textShadow: "0 0 30px rgba(56,39,245,0.3)",
            }}
          >
            O que nossos clientes dizem
          </h2>

          {/* Stats row */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-6">
            {[
              { value: "+2.000", label: "Clientes Ativos" },
              { value: "4.9/5", label: "Avaliação Média" },
              { value: "99.9%", label: "Uptime Garantido" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-3xl md:text-4xl text-white font-bold"
                  style={{
                    fontFamily: "Bebas Neue, sans-serif",
                    color: "#3827F5",
                    textShadow: "0 0 20px rgba(56,39,245,0.5)",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-white/50 text-sm"
                  style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 500 }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, index) => (
            <TestimonialCard key={t.name} t={t} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
