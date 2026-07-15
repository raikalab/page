import { Apple, Play } from "lucide-react";
import type { Language, ProductApp } from "../../data/apps";
import { copy } from "../../data/apps";

type PlatformButtonsProps = {
  app: ProductApp;
  language: Language;
};

export function PlatformButtons({ app, language }: PlatformButtonsProps) {
  const t = copy[language];

  return (
    <div className="platforms" aria-label={`Plataformas para ${app.title}`}>
      {app.androidHref ? (
        <a className="store" href={app.androidHref} target="_blank" rel="noreferrer" aria-label={`${app.title}: ${t.androidLabel}`}>
          <Play size={18} aria-hidden="true" />
          <span>{t.androidLabel}</span>
        </a>
      ) : (
        <span className="store store--disabled" aria-label={`${app.title}: ${t.unavailable}`}>
          <Play size={18} aria-hidden="true" />
          <span>Android</span>
        </span>
      )}
      <span className="store store--disabled" aria-label={`${app.title}: ${t.unavailable}`}>
        <Apple size={19} aria-hidden="true" />
        <span>{t.iosLabel}</span>
      </span>
    </div>
  );
}
