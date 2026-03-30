/* ============================================================
   MKS TV Contact — WhatsApp contact section
   Design: Prominent WhatsApp CTA with neon glow, contact info,
   urgency triggers, and trust indicators.
   ============================================================ */

import { useEffect, useRef, useState } from "react";

const WHATSAPP_NUMBER = "5511964011142";
const WHATSAPP_MESSAGE = encodeURIComponent("Olá, gostaria de saber mais sobre a MKS TV");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export default function Contact() {
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
    <section id="contato" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #050510 0%, #080520 50%, #050510 100%)",
        }}
      />

      {/* Neon glow orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(37,211,102,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4">
        <div
          ref={ref}
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section label */}
          <span
            className="inline-block text-[#25D366] text-sm font-bold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full"
            style={{
              background: "rgba(37,211,102,0.1)",
              border: "1px solid rgba(37,211,102,0.3)",
              fontFamily: "Rajdhani, sans-serif",
            }}
          >
            📞 Fale Conosco
          </span>

          <h2
            className="text-white text-4xl md:text-6xl mb-4"
            style={{
              fontFamily: "Bebas Neue, sans-serif",
              letterSpacing: "0.04em",
              textShadow: "0 0 30px rgba(56,39,245,0.3)",
            }}
          >
            Pronto para começar?
            <span className="block text-[#a8b4ff]">Fale com a gente agora!</span>
          </h2>

          <p
            className="text-white/60 text-base md:text-lg mb-8 max-w-xl mx-auto"
            style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 500 }}
          >
            Nossa equipe está disponível para tirar todas as suas dúvidas e ajudar na ativação do seu plano.
          </p>

          {/* Contact card */}
          <div
            className="p-8 rounded-3xl mb-8"
            style={{
              background: "rgba(37,211,102,0.05)",
              border: "1px solid rgba(37,211,102,0.2)",
              boxShadow: "0 0 40px rgba(37,211,102,0.08)",
            }}
          >
            {/* Phone number display */}
            <div className="mb-6">
              <p
                className="text-white/50 text-sm mb-1"
                style={{ fontFamily: "Rajdhani, sans-serif" }}
              >
                WhatsApp
              </p>
              <p
                className="text-white text-3xl md:text-4xl font-bold"
                style={{
                  fontFamily: "Bebas Neue, sans-serif",
                  letterSpacing: "0.08em",
                  textShadow: "0 0 20px rgba(37,211,102,0.3)",
                }}
              >
                (11) 96401-1142
              </p>
            </div>

            {/* Main CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-xl w-full sm:w-auto justify-center"
              style={{ fontFamily: "Bebas Neue, sans-serif", letterSpacing: "0.1em" }}
            >
              <WhatsAppIcon size={24} />
              CHAMAR NO WHATSAPP
            </a>

            {/* Availability */}
            <div className="flex items-center justify-center gap-2 mt-4">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span
                className="text-[#25D366] text-sm font-semibold"
                style={{ fontFamily: "Rajdhani, sans-serif" }}
              >
                Online agora — Resposta rápida garantida
              </span>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: "⚡", title: "Resposta Rápida", desc: "Atendimento ágil e eficiente" },
              { icon: "🔒", title: "100% Seguro", desc: "Pagamento e dados protegidos" },
              { icon: "✅", title: "Satisfação Garantida", desc: "Teste grátis por 7 dias" },
            ].map((item) => (
              <div
                key={item.title}
                className="p-4 rounded-2xl text-center"
                style={{
                  background: "rgba(56,39,245,0.05)",
                  border: "1px solid rgba(56,39,245,0.15)",
                }}
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <h4
                  className="text-white text-base font-bold mb-1"
                  style={{ fontFamily: "Rajdhani, sans-serif" }}
                >
                  {item.title}
                </h4>
                <p
                  className="text-white/50 text-xs"
                  style={{ fontFamily: "Rajdhani, sans-serif" }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
