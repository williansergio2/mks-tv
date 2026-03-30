/* ============================================================
   MKS TV Urgency Banner — Scarcity and urgency triggers
   Design: Top announcement bar with countdown-style urgency,
   neon red/orange accent, dismissible.
   ============================================================ */

import { useState } from "react";
import { X } from "lucide-react";

export default function UrgencyBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-4 py-2.5"
      style={{
        background: "linear-gradient(90deg, #1a0a40 0%, #2d1a80 50%, #1a0a40 100%)",
        borderBottom: "1px solid rgba(56,39,245,0.4)",
        boxShadow: "0 2px 20px rgba(56,39,245,0.3)",
      }}
    >
      <div className="flex-1 flex items-center justify-center gap-2 text-center">
        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse flex-shrink-0" />
        <p
          className="text-white text-xs sm:text-sm font-semibold"
          style={{ fontFamily: "Rajdhani, sans-serif" }}
        >
          🔥 <span className="text-yellow-400">OFERTA LIMITADA:</span> Teste grátis por 7 dias disponível agora!{" "}
          <a
            href={`https://wa.me/5511964011142?text=${encodeURIComponent("Olá, quero testar a MKS TV por 7 dias grátis")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#25D366] underline font-bold hover:text-[#20bd5a] transition-colors"
          >
            Aproveite →
          </a>
        </p>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="text-white/50 hover:text-white transition-colors ml-4 flex-shrink-0"
        aria-label="Fechar banner"
      >
        <X size={16} />
      </button>
    </div>
  );
}
