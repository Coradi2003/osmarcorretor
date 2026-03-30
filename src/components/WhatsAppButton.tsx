import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5549999318997"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-gradient-gold px-5 py-4 font-body text-sm font-semibold text-primary-foreground shadow-luxury transition-all duration-300 hover:scale-105 animate-pulse-glow group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden sm:inline">Fale Comigo</span>
    </a>
  );
};

export default WhatsAppButton;
