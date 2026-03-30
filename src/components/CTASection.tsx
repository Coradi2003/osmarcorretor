import { motion } from "framer-motion";
import caricatura from "@/assets/osmar-caricatura.jpg";

const CTASection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative border border-primary/20 p-12 sm:p-20"
        >
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary" />

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="flex-shrink-0"
            >
              <img
                src={caricatura}
                alt="Caricatura Osmar Henrique Vezarro"
                loading="lazy"
                width={300}
                height={300}
                className="w-56 sm:w-72 rounded-2xl shadow-luxury"
              />
            </motion.div>

            <div className="text-center lg:text-left">
              <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
                Vamos Conversar
              </p>
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Pronto para encontrar seu{" "}
                <span className="text-gradient-gold">imóvel ideal</span>?
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mb-10">
                Entre em contato e descubra como posso ajudá-lo a realizar o sonho
                do imóvel perfeito.
              </p>
              <a
                href="https://wa.me/5549999318997"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-none border-2 border-primary bg-primary px-12 py-5 font-body text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:bg-transparent hover:text-primary"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
