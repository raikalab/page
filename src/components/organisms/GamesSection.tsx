import { useState } from "react";
import type { Language, ProductApp } from "../../data/apps";
import { apps } from "../../data/apps";
import { copy } from "../../data/apps";
import { SectionHeading } from "../atoms/SectionHeading";
import { ProductCard } from "../molecules/ProductCard";
import { PlatformButtons } from "../molecules/PlatformButtons";

type GamesSectionProps = {
  language: Language;
};

export function GamesSection({ language }: GamesSectionProps) {
  const [selected, setSelected] = useState<ProductApp>(apps[0]);
  const t = copy[language];

  return (
    <section className="section games" id="apps">
      <SectionHeading
        eyebrow={t.appsEyebrow}
        title={t.appsTitle}
        description={t.appsIntro}
      />
      <div className="games__grid">
        {apps.map((app, index) => (
          <ProductCard
            key={app.id}
            app={app}
            index={index}
            language={language}
            active={selected.id === app.id}
            onSelect={setSelected}
          />
        ))}
      </div>
      <aside className="project-detail reveal" style={{ "--accent": selected.accent } as React.CSSProperties}>
        <div>
          <span>{t.selectedProject}</span>
          <h3>{selected.title}</h3>
          <p>{selected.detail[language]}</p>
        </div>
        <dl>
          <div>
            <dt>{selected.category[language]}</dt>
            <dd>{selected.audience[language]}</dd>
          </div>
          <div>
            <dt>{selected.status[language]}</dt>
            <dd>{selected.androidHref ? t.androidLabel : t.unavailable}</dd>
          </div>
        </dl>
        <PlatformButtons app={selected} language={language} />
      </aside>
    </section>
  );
}
