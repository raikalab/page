import type { Language } from "../../data/apps";
import { apps } from "../../data/apps";
import { copy } from "../../data/apps";
import { SectionHeading } from "../atoms/SectionHeading";
import { ProductCard } from "../molecules/ProductCard";

type GamesSectionProps = {
  language: Language;
};

export function GamesSection({ language }: GamesSectionProps) {
  const t = copy[language];
  const displayOrder = [
    "calcula-tu-liquidacion",
    "verdad-o-reto-spicy",
    "aprende-futbol",
    "energia-mexico-news",
    "juego-para-fiestas",
  ];
  const orderedApps = displayOrder
    .map((id) => apps.find((app) => app.id === id))
    .filter((app): app is (typeof apps)[number] => Boolean(app));

  return (
    <section className="section games" id="apps">
      <SectionHeading
        eyebrow={t.appsEyebrow}
        title={t.appsTitle}
        description={t.appsIntro}
      />
      <div className="games__grid">
        {orderedApps.map((app) => (
          <ProductCard
            key={app.id}
            app={app}
            language={language}
          />
        ))}
      </div>
    </section>
  );
}
