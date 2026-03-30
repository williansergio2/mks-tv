/* ============================================================
   MKS TV Header — Fixed navigation with neon branding
   Design: Dark glassmorphism header, neon #3827F5 accents,
   WhatsApp CTA button, smooth scroll navigation.
   ============================================================ */

import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

const LOGO_URL = "/assets/mks-tv-logo-new.webp";
const WHATSAPP_NUMBER = "5511964011142";
const WHATSAPP_MESSAGE = encodeURIComponent("Olá, gostaria de saber mais sobre a MKS TV");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Planos", href: "#planos" },
  { label: "Downloads", href: "#downloads" },
  { label: "Tutorial", href: "#tutorial" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-300 top-9 ${
        scrolled
          ? "bg-[#050510]/90 backdrop-blur-xl border-b border-[#3827F5]/20 shadow-[0_4px_30px_rgba(56,39,245,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
            className="flex items-center gap-2 flex-shrink-0"
          >
            <img
              src={LOGO_URL}
              alt="MKS TV"
              className="h-10 md:h-12 w-auto object-contain"
              style={{ filter: "drop-shadow(0 0 8px rgba(56,39,245,0.8))" }}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-white/70 hover:text-white font-medium text-sm tracking-wide transition-all duration-200 hover:text-[#3827F5] relative group"
                style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 600, fontSize: "0.95rem" }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3827F5] group-hover:w-full transition-all duration-300 shadow-[0_0_8px_rgba(56,39,245,0.8)]" />
              </a>
            ))}
          </nav>

          {/* WhatsApp CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold"
            >
              <WhatsAppIcon size={18} />
              <span>(11) 96401-1142</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#050510]/95 backdrop-blur-xl border-b border-[#3827F5]/20">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-white/80 hover:text-white py-2 border-b border-white/10 text-base font-semibold tracking-wide"
                style={{ fontFamily: "Rajdhani, sans-serif" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-bold mt-2"
            >
              <WhatsAppIcon size={20} />
              <span>(11) 96401-1142</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
