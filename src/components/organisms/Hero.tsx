import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../atoms/Button";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__content">
        <span className="hero__eyebrow">
          <Sparkles size={16} aria-hidden="true" />
          Desarrollo de software, juegos y apps moviles
        </span>
        <h1>Raika Lab</h1>
        <p>
          Creamos experiencias digitales con personalidad: juegos sociales, herramientas utiles y
          productos escalables para Android, iOS y web.
        </p>
        <div className="hero__actions">
          <Button href="#games">
            Ver apps
            <ArrowRight size={18} aria-hidden="true" />
          </Button>
          <Button href="#contacto" variant="ghost">
            Contacto y soporte
          </Button>
        </div>
      </div>
      <div className="hero__showcase" aria-hidden="true">
        <div className="phone phone--front">
          <div className="phone__status" />
          <div className="phone__app-mark">R</div>
          <div className="phone__lines">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="phone phone--back">
          <div className="phone__status" />
          <div className="phone__grid">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </section>
  );
}
