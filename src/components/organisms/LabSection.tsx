import type { Language } from "../../data/apps";
import { copy } from "../../data/apps";

type LabSectionProps = {
  language: Language;
};

export function LabSection({ language }: LabSectionProps) {
  const t = copy[language];
  const words = t.labText.split(" ");
  const steps = [
    { title: t.labStepOne, text: t.labStepOneText },
    { title: t.labStepTwo, text: t.labStepTwoText },
    { title: t.labStepThree, text: t.labStepThreeText },
  ];

  return (
    <section className="lab-section reveal" id="laboratorio">
      <div className="lab-section__copy">
        <span>{t.labEyebrow}</span>
        <h2>{t.labTitle}</h2>
        <p aria-label={t.labText}>
          {words.map((word, index) => (
            <span key={`${word}-${index}`} style={{ "--i": index } as React.CSSProperties}>
              {word}
            </span>
          ))}
        </p>
      </div>
      <div className="lab-section__flow" aria-label={t.labTitle}>
        {steps.map((step, index) => (
          <article key={step.title} className="lab-step reveal" style={{ "--i": index } as React.CSSProperties}>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
