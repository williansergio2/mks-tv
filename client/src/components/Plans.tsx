/* ============================================================
   MKS TV Plans — Conversion-focused pricing cards
   Design: Glassmorphism cards, neon highlights, featured plan
   with glow effect, WhatsApp CTAs for each plan.
   ============================================================ */

import { useEffect, useRef, useState } from "react";
import { Check, Zap, Crown, Star } from "lucide-react";

const WHATSAPP_NUMBER = "5511964011142";

const plans = [
  {
    id: "mensal",
    name: "Mensal",
    duration: "30 dias",
    icon: <Zap size={28} className="text-[#3827F5]" />,
    badge: null,
    featured: false,
    message: "Olá, tenho interesse no plano Mensal da MKS TV",
    benefits: [
      "+15.000 canais ao vivo",
      "Filmes e séries ilimitados",
      "Qualidade HD / Full HD",
      "Suporte via WhatsApp",
      "Ativação em minutos",
      "Funciona em todos os dispositivos",
    ],
  },
  {
    id: "trimestral",
    name: "Trimestral",
    duration: "90 dias",
    icon: <Crown size={28} className="text-white" />,
    badge: { label: "MAIS POPULAR", type: "popular" },
    featured: true,
    message: "Olá, tenho interesse no plano Trimestral da MKS TV",
    benefits: [
      "+15.000 canais ao vivo",
      "Filmes e séries ilimitados",
      "Qualidade HD / Full HD / 4K",
      "Suporte prioritário 24h",
      "Ativação em minutos",
      "Funciona em todos os dispositivos",
    ],
  },
  {
    id: "anual",
    name: "Anual",
    duration: "365 dias",
    icon: <Star size={28} className="text-yellow-400" />,
    badge: { label: "MELHOR OFERTA", type: "best" },
    featured: false,
    message: "Olá, tenho interesse no plano Anual da MKS TV",
    benefits: [
      "+15.000 canais ao vivo",
      "Filmes e séries ilimitados",
      "Qualidade HD / Full HD / 4K",
      "Suporte VIP 24/7",
      "Ativação em minutos",
      "Funciona em todos os dispositivos",
    ],
  },
];

function PlanCard({ plan, index }: { plan: typeof plans[0]; index: number }) {
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

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(plan.message)}`;

  return (
    <div
      ref={ref}
      className={`relative flex flex-col transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${plan.featured ? "glass-card-featured md:-mt-4 md:mb-4" : "glass-card"} rounded-2xl overflow-hidden`}
      style={{
        transitionDelay: `${index * 150}ms`,
        ...(plan.featured && {
          boxShadow: "0 0 60px rgba(56,39,245,0.4), 0 20px 60px rgba(0,0,0,0.6)",
        }),
      }}
    >
      {/* Badge */}
      {plan.badge && (
        <div className="absolute top-0 left-0 right-0 flex justify-center">
          <span
            className={`${plan.badge.type === "popular" ? "badge-popular" : "badge-best"} px-6 py-1.5 text-xs text-white rounded-b-xl`}
          >
            {plan.badge.label}
          </span>
        </div>
      )}

      <div className={`p-6 md:p-8 flex flex-col flex-1 ${plan.badge ? "pt-10" : ""}`}>
        {/* Icon + Name */}
        <div className="flex items-center gap-3 mb-2">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{
              background: plan.featured
                ? "rgba(56,39,245,0.3)"
                : "rgba(56,39,245,0.1)",
              border: "1px solid rgba(56,39,245,0.3)",
            }}
          >
            {plan.icon}
          </div>
          <div>
            <h3
              className="text-white text-2xl leading-none"
              style={{ fontFamily: "Bebas Neue, sans-serif", letterSpacing: "0.05em" }}
            >
              Plano {plan.name}
            </h3>
            <span
              className="text-[#a8b4ff] text-sm font-semibold"
              style={{ fontFamily: "Rajdhani, sans-serif" }}
            >
              {plan.duration}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="neon-divider my-4 opacity-40" />

        {/* Benefits */}
        <ul className="flex flex-col gap-3 mb-8 flex-1">
          {plan.benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{
                  background: "rgba(56,39,245,0.2)",
                  border: "1px solid rgba(56,39,245,0.5)",
                }}
              >
                <Check size={12} className="text-[#3827F5]" />
              </div>
              <span
                className="text-white/80 text-sm leading-snug"
                style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 500 }}
              >
                {benefit}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-base transition-all duration-300 ${
            plan.featured
              ? "btn-neon text-white"
              : "btn-whatsapp text-black"
          }`}
          style={{ fontFamily: "Bebas Neue, sans-serif", letterSpacing: "0.08em", fontSize: "1.1rem" }}
        >
          <WhatsAppIcon size={18} />
          CONTRATAR AGORA
        </a>
      </div>
    </div>
  );
}

export default function Plans() {
  return (
    <section id="planos" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-[#080520] to-[#050510]" />
      <div className="absolute inset-0 stars-bg opacity-30" />

      {/* Neon glow orbs */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(56,39,245,0.08) 0%, transparent 70%)",
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
            💳 Escolha seu Plano
          </span>
          <h2
            className="text-white text-4xl md:text-6xl mb-4"
            style={{
              fontFamily: "Bebas Neue, sans-serif",
              letterSpacing: "0.04em",
              textShadow: "0 0 30px rgba(56,39,245,0.3)",
            }}
          >
            Planos para todos os gostos
          </h2>
          <p
            className="text-white/60 text-base md:text-lg max-w-xl mx-auto"
            style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 500 }}
          >
            Ativação rápida, sem burocracia. Escolha e comece a assistir agora.
          </p>

          {/* Urgency */}
          <div
            className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full"
            style={{
              background: "rgba(239, 68, 68, 0.1)",
              border: "1px solid rgba(239, 68, 68, 0.3)",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span
              className="text-red-400 text-sm font-semibold"
              style={{ fontFamily: "Rajdhani, sans-serif" }}
            >
              🔥 Últimas vagas disponíveis — Garanta já o seu acesso!
            </span>
          </div>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 max-w-5xl mx-auto items-start">
          {plans.map((plan, index) => (
            <PlanCard key={plan.id} plan={plan} index={index} />
          ))}
        </div>

        {/* Bottom trust */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-white/40 text-sm">
          {["✅ Ativação imediata", "✅ Suporte via WhatsApp", "✅ Sem fidelidade", "✅ Funciona em Smart TV, celular, tablet e PC"].map((item) => (
            <span key={item} style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 500 }}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
