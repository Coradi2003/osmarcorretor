import { motion } from "framer-motion";
import { Shield, TrendingUp, Heart, Award } from "lucide-react";
import agentImage from "@/assets/osmar-photo.jpg";

const stats = [
  { icon: Shield, label: "Confiança", desc: "Transparência total em cada negociação" },
  { icon: TrendingUp, label: "Resultados", desc: "Valorização máxima do seu patrimônio" },
  { icon: Heart, label: "Dedicação", desc: "Atendimento personalizado e exclusivo" },
  { icon: Award, label: "Excelência", desc: "Compromisso com a qualidade superior" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 border-2 border-primary/20 translate-x-6 translate-y-6" />
              <div className="relative overflow-hidden bg-secondary">
                <img
                  src={agentImage}
                  alt="Osmar Henrique Vezarro"
                  loading="lazy"
                  width={800}
                  height={800}
                className="w-full h-full object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-16 h-px bg-gradient-gold mb-8" />
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
              Sobre Mim
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-6 text-foreground">
              Seu parceiro no mercado{" "}
              <span className="text-gradient-gold">imobiliário</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-10 text-lg">
              Com experiência no mercado imobiliário, dedico-me a oferecer um atendimento
              personalizado e de alto padrão. Cada cliente é único, e minha missão é entender
              suas necessidades para encontrar o imóvel ideal, com segurança e transparência
              em cada etapa da negociação.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                  className="group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <stat.icon className="h-5 w-5 text-primary transition-transform group-hover:scale-110" />
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {stat.label}
                    </h3>
                  </div>
                  <p className="font-body text-sm text-muted-foreground">{stat.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
