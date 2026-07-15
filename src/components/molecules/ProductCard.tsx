import type { Language, ProductApp } from "../../data/apps";
import { copy } from "../../data/apps";

type ProductCardProps = {
  app: ProductApp;
  index: number;
  language: Language;
  active: boolean;
  onSelect: (app: ProductApp) => void;
};

export function ProductCard({ app, index, language, active, onSelect }: ProductCardProps) {
  const t = copy[language];

  return (
    <button
      className={`product-card reveal ${active ? "product-card--active" : ""}`}
      style={{ "--accent": app.accent } as React.CSSProperties}
      type="button"
      onClick={() => onSelect(app)}
      aria-label={`${t.openProject}: ${app.title}`}
    >
      <div className="product-card__visual">
        <img src={app.image} alt="" loading={index === 0 ? "eager" : "lazy"} />
      </div>
      <div className="product-card__content">
        <span className="product-card__number">{String(index + 1).padStart(2, "0")}</span>
        <h3>{app.title}</h3>
        <p>{app.description[language]}</p>
        <span className="product-card__cta">{t.openProject}</span>
      </div>
    </button>
  );
}
