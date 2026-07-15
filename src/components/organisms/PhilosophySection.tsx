import type { Language } from "../../data/apps";
import { copy } from "../../data/apps";

type PhilosophySectionProps = {
  language: Language;
};

export function PhilosophySection({ language }: PhilosophySectionProps) {
  const t = copy[language];

  return (
    <section className="philosophy reveal" id="filosofia">
      <div className="philosophy__inner">
        <span>{t.philosophyEyebrow}</span>
        <h2>{t.philosophyTitle}</h2>
        <p className="philosophy__text">{t.philosophyBody}</p>
        <p className="philosophy__text philosophy__text--second">{t.philosophyBodyTwo}</p>
      </div>
    </section>
  );
}
