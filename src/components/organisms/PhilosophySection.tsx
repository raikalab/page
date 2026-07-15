import type { Language } from "../../data/apps";
import { copy } from "../../data/apps";

type PhilosophySectionProps = {
  language: Language;
};

export function PhilosophySection({ language }: PhilosophySectionProps) {
  const t = copy[language];
  const firstWords = t.philosophyBody.split(" ");
  const secondWords = t.philosophyBodyTwo.split(" ");

  return (
    <section className="philosophy reveal" id="filosofia">
      <div className="philosophy__inner">
        <span>{t.philosophyEyebrow}</span>
        <h2>{t.philosophyTitle}</h2>
        <p className="philosophy__text" aria-label={t.philosophyBody}>
          {firstWords.map((word, index) => (
            <span key={`${word}-${index}`} style={{ "--i": index } as React.CSSProperties}>
              {word}
            </span>
          ))}
        </p>
        <p className="philosophy__text philosophy__text--second" aria-label={t.philosophyBodyTwo}>
          {secondWords.map((word, index) => (
            <span key={`${word}-${index}`} style={{ "--i": index } as React.CSSProperties}>
              {word}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
