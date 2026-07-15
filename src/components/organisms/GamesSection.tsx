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

  return (
    <section className="section games" id="apps">
      <SectionHeading
        eyebrow={t.appsEyebrow}
        title={t.appsTitle}
        description={t.appsIntro}
      />
      <div className="games__grid">
        {apps.map((app) => (
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
