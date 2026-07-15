import type { Language, ProductApp } from "../../data/apps";
import { PlatformButtons } from "./PlatformButtons";

type ProductCardProps = {
  app: ProductApp;
  language: Language;
};

export function ProductCard({ app, language }: ProductCardProps) {
  return (
    <article
      className="product-card reveal"
      style={{ "--accent": app.accent } as React.CSSProperties}
    >
      <div className="product-card__visual">
        <img src={app.image} alt="" loading="lazy" />
      </div>
      <div className="product-card__content">
        <span className="product-card__meta">{app.category[language]}</span>
        <h3>{app.title}</h3>
        <p>{app.description[language]}</p>
        <p className="product-card__detail">{app.detail[language]}</p>
        <PlatformButtons app={app} language={language} />
      </div>
    </article>
  );
}
