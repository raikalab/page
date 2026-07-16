import type { Language, ProductApp } from "../../data/apps";
import { copy } from "../../data/apps";

type PlatformButtonsProps = {
  app: ProductApp;
  language: Language;
};

export function PlatformButtons({ app, language }: PlatformButtonsProps) {
  const t = copy[language];
  const androidHref = app.androidHref ?? "#contacto";

  return (
    <div
      className="platforms"
      aria-label={`Plataformas para ${app.title}`}
      onClick={(event) => event.stopPropagation()}
    >
      <a
        className={`store ${app.androidHref ? "" : "store--quiet"}`}
        href={androidHref}
        target={app.androidHref ? "_blank" : undefined}
        rel={app.androidHref ? "noreferrer" : undefined}
        aria-label={`${app.title}: ${t.androidLabel}`}
      >
        <img src="/assets/android-store.png" alt="" aria-hidden="true" />
        <span>{t.androidLabel}</span>
      </a>
      <a className="store store--quiet" href="#contacto" aria-label={`${app.title}: ${t.iosLabel}`}>
        <img src="/assets/ios-store.png" alt="" aria-hidden="true" />
        <span>{t.iosLabel}</span>
      </a>
    </div>
  );
}
