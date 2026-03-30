/* ============================================================
   MKS TV — Home Page
   Design Philosophy: Premium Dark Streaming / Luxury Tech
   Full landing page with all conversion-focused sections.
   ============================================================ */

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Plans from "@/components/Plans";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Downloads from "@/components/Downloads";
import Tutorial from "@/components/Tutorial";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import UrgencyBanner from "@/components/UrgencyBanner";
import CtaBanner from "@/components/CtaBanner";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#050510" }}>
      {/* Urgency top banner */}
      <UrgencyBanner />

      {/* Fixed header */}
      <Header />

      {/* Main content */}
      <main>
        <Hero />
        <Plans />
        <Benefits />
        <CtaBanner />
        <Testimonials />
        <Downloads />
        <Tutorial />
        <Contact />
      </main>

      <Footer />

      {/* Global floating WhatsApp button */}
      <WhatsAppFloat />
    </div>
  );
}
