import { useEffect, useRef } from "react";
import type { Language } from "../../data/apps";
import { copy } from "../../data/apps";

type HeroProps = {
  language: Language;
};

export function Hero({ language }: HeroProps) {
  const t = copy[language];
  const titleWords = t.heroTitle.split(" ");
  const heroWords = t.heroText.split(" ");
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {
      // Muted autoplay can still be deferred by some embedded browsers.
    });
  }, []);

  return (
    <section className="hero reveal" id="inicio">
      <div className="hero__content reveal">
        <span className="hero__eyebrow">
          {t.heroKicker}
        </span>
        <h1 className="hero-title" aria-label={t.heroTitle}>
          {titleWords.map((word, index) => (
            <span key={`${word}-${index}`} style={{ "--i": index } as React.CSSProperties}>
              {word}
            </span>
          ))}
        </h1>
        <p className="hero-copy" aria-label={t.heroText}>
          {heroWords.map((word, index) => (
            <span key={`${word}-${index}`} style={{ "--i": index } as React.CSSProperties}>
              {word}
            </span>
          ))}
        </p>
      </div>
      <div className="hero__showcase hero__motion reveal" aria-hidden="true">
        <video ref={videoRef} autoPlay muted loop playsInline preload="auto" poster="/assets/raika-lab-hero.png">
          <source src="/assets/raika-lab-hero.mp4" type="video/mp4" />
        </video>
        <span className="hero__scan" />
        <span className="hero__pulse hero__pulse--one" />
        <span className="hero__pulse hero__pulse--two" />
      </div>
    </section>
  );
}
