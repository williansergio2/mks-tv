/* ============================================================
   MKS TV Downloads — App download cards section
   Design: Dark cards with app icons, download buttons,
   compatibility info for different devices.
   ============================================================ */

import { useEffect, useRef, useState } from "react";
import { Download, Smartphone, Tv, Monitor, Tablet } from "lucide-react";

const apps = [
  {
    name: "IBO Player Pro",
    icon: "📺",
    platforms: ["Android", "iOS", "Smart TV"],
    platformIcon: <Smartphone size={14} />,
    desc: "App premium com interface intuitiva. Suporte a M3U e Xtream Codes.",
    recommended: true,
    downloadUrl: "https://play.google.com/store/apps/details?id=com.iboplayer",
    color: "#3827F5",
  },
  {
    name: "IPTV Smarters Pro",
    icon: "🎬",
    platforms: ["Android", "iOS", "Windows"],
    platformIcon: <Monitor size={14} />,
    desc: "Um dos apps mais populares do mercado. Interface moderna e estável.",
    recommended: false,
    downloadUrl: "https://play.google.com/store/apps/details?id=com.nst.iptvsmarterstvbox",
    color: "#7b6fff",
  },
  {
    name: "TiviMate",
    icon: "📡",
    platforms: ["Android TV", "Fire Stick"],
    platformIcon: <Tv size={14} />,
    desc: "Ideal para Smart TV e Fire Stick. Interface estilo Netflix com EPG.",
    recommended: false,
    downloadUrl: "https://play.google.com/store/apps/details?id=ar.tvplayer.tv",
    color: "#3827F5",
  },
  {
    name: "GSE Smart IPTV",
    icon: "📲",
    platforms: ["iOS", "Android", "iPad"],
    platformIcon: <Tablet size={14} />,
    desc: "Perfeito para iPhone e iPad. Suporte completo a listas M3U.",
    recommended: false,
    downloadUrl: "https://apps.apple.com/app/gse-smart-iptv/id1028734023",
    color: "#7b6fff",
  },
];

function AppCard({ app, index }: { app: typeof apps[0]; index: number }) {
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
      className={`glass-card rounded-2xl p-6 relative transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {app.recommended && (
        <span
          className="absolute top-4 right-4 text-xs px-2 py-1 rounded-full font-bold"
          style={{
            background: "rgba(56,39,245,0.2)",
            border: "1px solid rgba(56,39,245,0.5)",
            color: "#a8b4ff",
            fontFamily: "Rajdhani, sans-serif",
          }}
        >
          ⭐ Recomendado
        </span>
      )}

      <div className="flex items-start gap-4 mb-4">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
          style={{
            background: `linear-gradient(135deg, ${app.color}30, ${app.color}10)`,
            border: `1px solid ${app.color}40`,
          }}
        >
          {app.icon}
        </div>
        <div>
          <h3
            className="text-white text-xl leading-tight"
            style={{ fontFamily: "Bebas Neue, sans-serif", letterSpacing: "0.05em" }}
          >
            {app.name}
          </h3>
          <div className="flex flex-wrap gap-1.5 mt-1">
            {app.platforms.map((platform) => (
              <span
                key={platform}
                className="text-xs px-2 py-0.5 rounded-full text-white/60"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  fontFamily: "Rajdhani, sans-serif",
                }}
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
      </div>

      <p
        className="text-white/60 text-sm mb-5 leading-relaxed"
        style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 500 }}
      >
        {app.desc}
      </p>

      <a
        href={app.downloadUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold transition-all duration-300 hover:translate-y-[-2px]"
        style={{
          background: `linear-gradient(135deg, ${app.color}30, ${app.color}10)`,
          border: `1px solid ${app.color}50`,
          color: "#a8b4ff",
          fontFamily: "Rajdhani, sans-serif",
          fontWeight: 700,
          letterSpacing: "0.05em",
        }}
      >
        <Download size={16} />
        BAIXAR APP
      </a>
    </div>
  );
}

export default function Downloads() {
  return (
    <section id="downloads" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-[#080520] to-[#050510]" />
      <div className="absolute inset-0 stars-bg opacity-20" />

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
            📥 Downloads
          </span>
          <h2
            className="text-white text-4xl md:text-6xl mb-4"
            style={{
              fontFamily: "Bebas Neue, sans-serif",
              letterSpacing: "0.04em",
              textShadow: "0 0 30px rgba(56,39,245,0.3)",
            }}
          >
            Apps compatíveis
          </h2>
          <p
            className="text-white/60 text-base md:text-lg max-w-xl mx-auto"
            style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 500 }}
          >
            Escolha o app de sua preferência e configure em minutos. Nossa equipe te ajuda no processo.
          </p>
        </div>

        {/* Apps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {apps.map((app, index) => (
            <AppCard key={app.name} app={app} index={index} />
          ))}
        </div>

        {/* Help note */}
        <div
          className="mt-10 text-center p-6 rounded-2xl max-w-2xl mx-auto"
          style={{
            background: "rgba(56,39,245,0.08)",
            border: "1px solid rgba(56,39,245,0.2)",
          }}
        >
          <p
            className="text-white/70 text-base"
            style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 500 }}
          >
            💡 <span className="text-white font-semibold">Precisa de ajuda para instalar?</span> Nossa equipe de suporte está disponível pelo WhatsApp para te auxiliar passo a passo na configuração.
          </p>
        </div>
      </div>
    </section>
  );
}
