import { useEffect, useState } from "react";
import type { Language } from "../../data/apps";
import { ContactSection } from "../organisms/ContactSection";
import { Footer } from "../organisms/Footer";
import { GamesSection } from "../organisms/GamesSection";
import { Header } from "../organisms/Header";
import { Hero } from "../organisms/Hero";
import { LabSection } from "../organisms/LabSection";
import { PhilosophySection } from "../organisms/PhilosophySection";

export function SitePage() {
  const [language, setLanguage] = useState<Language>("es");
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(".reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [language]);

  return (
    <>
      <Header
        language={language}
        theme={theme}
        onLanguageChange={() => setLanguage(language === "es" ? "en" : "es")}
        onThemeChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <main>
        <Hero language={language} />
        <GamesSection language={language} />
        <LabSection language={language} />
        <PhilosophySection language={language} />
        <ContactSection language={language} />
      </main>
      <Footer />
    </>
  );
}
