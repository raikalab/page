import type { Language, ProductApp } from "../../data/apps";
import { copy } from "../../data/apps";
import { PlatformButtons } from "./PlatformButtons";

type ProductCardProps = {
  app: ProductApp;
  language: Language;
  active: boolean;
  onSelect: (app: ProductApp) => void;
};

export function ProductCard({ app, language, active, onSelect }: ProductCardProps) {
  const t = copy[language];

  return (
    <article
      className={`product-card reveal ${active ? "product-card--active" : ""}`}
      style={{ "--accent": app.accent } as React.CSSProperties}
      onClick={() => onSelect(app)}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect(app);
        }
      }}
      aria-label={`${t.openProject}: ${app.title}`}
    >
      <div className="product-card__visual">
        <img src={app.image} alt="" loading="lazy" />
      </div>
      <div className="product-card__content">
        <h3>{app.title}</h3>
        <p>{app.description[language]}</p>
        <PlatformButtons app={app} language={language} />
      </div>
    </article>
  );
}
