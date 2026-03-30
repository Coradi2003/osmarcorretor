import ParticlesBackground from "@/components/ParticlesBackground";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <ParticlesBackground />
      <WhatsAppButton />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
