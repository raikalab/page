import { apps } from "../../data/apps";
import { SectionHeading } from "../atoms/SectionHeading";
import { ProductCard } from "../molecules/ProductCard";

export function GamesSection() {
  const [featured, ...comingSoon] = apps;

  return (
    <section className="section games" id="games">
      <SectionHeading
        eyebrow="Our Games"
        title="Apps actuales y proximos lanzamientos"
        description="Una vitrina clara para la app publicada y las ideas que ya estan en camino dentro de Raika Lab."
      />
      <div className="games__featured">
        <ProductCard app={featured} featured />
      </div>
      <div className="games__grid">
        {comingSoon.map((app) => (
          <ProductCard key={app.title} app={app} />
        ))}
      </div>
    </section>
  );
}
