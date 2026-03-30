import { motion } from "framer-motion";
import { MapPin, Phone, Award } from "lucide-react";
import heroImage from "@/assets/hero-property.jpg";
import osmarPhoto from "@/assets/osmar-photo.jpg";

const stats = [
  { value: "CRECI/SC", label: "63518" },
  { value: "100%", label: "Dedicação" },
  { value: "24h", label: "Disponível" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Imóvel de luxo"
          width={1920}
          height={1080}
          className="h-full w-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Decorative grid lines */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div className="absolute top-0 left-[20%] w-px h-full bg-primary/[0.04]" />
        <div className="absolute top-0 left-[40%] w-px h-full bg-primary/[0.04]" />
        <div className="absolute top-0 left-[60%] w-px h-full bg-primary/[0.04]" />
        <div className="absolute top-0 left-[80%] w-px h-full bg-primary/[0.04]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left - Content */}
          <div>
            {/* Top badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 border border-primary/30 px-4 py-2 mb-8"
            >
              <Award className="h-4 w-4 text-primary" />
              <span className="font-body text-xs tracking-[0.2em] uppercase text-primary">
                Corretor de Imóveis — CRECI/SC 63518
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.9 }}
              className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-[0.95]"
            >
              <span className="text-foreground block">Osmar</span>
              <span className="text-gradient-gold block">Henrique</span>
              <span className="text-foreground block">Vezarro</span>
            </motion.h1>

            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="w-32 h-[2px] bg-gradient-gold mb-8 origin-left"
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="font-body text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed"
            >
              Transformando sonhos em endereços. Expertise e dedicação para
              encontrar o imóvel perfeito para você e sua família.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-14"
            >
              <a
                href="https://wa.me/5549999318997"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden border-2 border-primary bg-primary px-10 py-4 font-body text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-all duration-500 hover:bg-transparent hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                Entre em Contato
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center justify-center gap-3 border-2 border-foreground/20 px-10 py-4 font-body text-sm font-semibold uppercase tracking-widest text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
              >
                <MapPin className="h-4 w-4" />
                Conheça Mais
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="flex gap-10"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 + i * 0.15, duration: 0.6 }}
                  className="relative"
                >
                  <p className="font-heading text-2xl sm:text-3xl font-bold text-gradient-gold">
                    {stat.value}
                  </p>
                  <p className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
            className="hidden lg:flex justify-center items-end relative"
          >
            {/* Decorative frame */}
            <div className="absolute -top-4 -right-4 w-[90%] h-[90%] border border-primary/20" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-primary" />

            {/* Photo container */}
            <div className="relative w-full max-w-md">
              <div className="relative overflow-hidden">
                <img
                  src={osmarPhoto}
                  alt="Osmar Henrique Vezarro - Corretor de Imóveis"
                  width={800}
                  height={800}
                  className="w-full aspect-[3/4] object-cover object-top"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-background/30 to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8, duration: 0.7 }}
                className="absolute -left-6 bottom-24 bg-card/90 backdrop-blur-sm border border-primary/20 px-6 py-4"
              >
                <p className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-1">
                  Localização
                </p>
                <p className="font-heading text-lg font-semibold text-foreground flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  Santa Catarina
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <span className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
