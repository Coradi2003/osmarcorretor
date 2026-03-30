import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          <h3 className="font-heading text-2xl font-bold text-foreground">
            Osmar Henrique <span className="text-gradient-gold">Vezarro</span>
          </h3>
          <p className="font-body text-sm text-muted-foreground">
            Corretor de Imóveis
          </p>

          {/* Social */}
          <a
            href="https://instagram.com/osmarhenriquevezaro"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground transition-colors duration-300 hover:text-primary"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
            <span className="font-body text-sm">@osmarhenriquevezaro</span>
          </a>

          <div className="w-16 h-px bg-gradient-gold mt-4" />

          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} Osmar Henrique Vezarro. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
