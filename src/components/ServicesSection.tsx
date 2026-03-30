import { motion } from "framer-motion";
import { Home, Building2, FileText, Search, HandshakeIcon, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Busca Personalizada",
    desc: "Encontro o imóvel ideal com base no seu perfil, necessidades e orçamento.",
  },
  {
    icon: Home,
    title: "Venda de Imóveis",
    desc: "Estratégias de marketing premium para vender seu imóvel pelo melhor valor.",
  },
  {
    icon: Building2,
    title: "Imóveis Comerciais",
    desc: "Soluções para negócios — pontos comerciais, salas e galpões.",
  },
  {
    icon: FileText,
    title: "Documentação",
    desc: "Assessoria completa em toda a parte documental e jurídica.",
  },
  {
    icon: BarChart3,
    title: "Avaliação de Mercado",
    desc: "Análise precisa do valor do seu imóvel com dados atualizados do mercado.",
  },
  {
    icon: HandshakeIcon,
    title: "Negociação",
    desc: "Mediação profissional para garantir as melhores condições.",
  },
];

const ServicesSection = () => {
  return (
    <section className="relative py-32 bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="w-16 h-px bg-gradient-gold mx-auto mb-8" />
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Serviços
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">
            Como posso <span className="text-gradient-gold">ajudar</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative p-8 bg-card border border-border hover:border-primary/30 transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-0 h-px bg-gradient-gold group-hover:w-full transition-all duration-700" />
              <service.icon className="h-8 w-8 text-primary mb-6 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
