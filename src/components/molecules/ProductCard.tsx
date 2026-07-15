import type { ProductApp } from "../../data/apps";
import { PlatformButtons } from "./PlatformButtons";

type ProductCardProps = {
  app: ProductApp;
  featured?: boolean;
};

export function ProductCard({ app, featured = false }: ProductCardProps) {
  return (
    <article
      className={`product-card ${featured ? "product-card--featured" : ""}`}
      style={{ "--accent": app.accent } as React.CSSProperties}
    >
      <div className="product-card__visual" aria-hidden="true">
        <span>{app.title.slice(0, 1)}</span>
      </div>
      <div className="product-card__content">
        <div className="product-card__meta">
          <span>{app.eyebrow}</span>
          <strong>{app.status}</strong>
        </div>
        <h3>{app.title}</h3>
        <p>{app.description}</p>
        <ul>
          {app.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        <PlatformButtons app={app} />
      </div>
    </article>
  );
}
