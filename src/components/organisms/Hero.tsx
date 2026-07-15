import { ArrowRight, Layers } from "lucide-react";
import type { Language } from "../../data/apps";
import { copy } from "../../data/apps";
import { Button } from "../atoms/Button";

type HeroProps = {
  language: Language;
};

export function Hero({ language }: HeroProps) {
  const t = copy[language];

  return (
    <section className="hero reveal" id="inicio">
      <div className="hero__content reveal">
        <span className="hero__eyebrow">
          <Layers size={16} aria-hidden="true" />
          {t.heroKicker}
        </span>
        <h1>{t.heroTitle}</h1>
        <p>{t.heroText}</p>
        <div className="hero__actions">
          <Button href="#apps">
            {t.heroPrimary}
            <ArrowRight size={18} aria-hidden="true" />
          </Button>
          <Button href="#filosofia" variant="ghost">
            {t.heroSecondary}
          </Button>
        </div>
      </div>
      <div className="hero__showcase reveal" aria-hidden="true">
        <img src="/assets/verdad-o-reto-spicy.png" alt="" />
        <div className="hero__metric">
          <strong>01</strong>
          <span>Publicado</span>
        </div>
      </div>
    </section>
  );
}
