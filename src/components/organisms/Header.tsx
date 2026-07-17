import { Menu } from "lucide-react";
import type { Language } from "../../data/apps";
import { copy } from "../../data/apps";
import { assetPath } from "../../utils/assetPath";
import { Logo } from "../atoms/Logo";

type HeaderProps = {
  language: Language;
  onLanguageChange: () => void;
  theme: "dark" | "light";
  onThemeChange: () => void;
};

export function Header({ language, onLanguageChange, theme, onThemeChange }: HeaderProps) {
  const t = copy[language];

  return (
    <header className="header">
      <nav className="nav" aria-label="Navegacion principal">
        <Logo />
        <input className="nav__toggle" id="nav-toggle" type="checkbox" aria-label="Abrir menú" />
        <label className="nav__menu-button" htmlFor="nav-toggle" aria-hidden="true">
          <Menu size={22} />
        </label>
        <div className="nav__links">
          <a href="#apps">{t.navApps}</a>
          <a href="#filosofia">{t.navPhilosophy}</a>
          <a href="#laboratorio">{t.navTeam}</a>
          <a href="#contacto">{t.navContact}</a>
          <button className="icon-button" type="button" onClick={onLanguageChange} aria-label={t.language} title={t.language}>
            <img src={assetPath("/assets/language.png")} alt="" aria-hidden="true" />
          </button>
          <button
            className="icon-button"
            type="button"
            onClick={onThemeChange}
            aria-label={theme === "dark" ? t.themeLight : t.themeDark}
            title={theme === "dark" ? t.themeLight : t.themeDark}
          >
            <img src={assetPath("/assets/dark-mode.png")} alt="" aria-hidden="true" />
          </button>
        </div>
      </nav>
    </header>
  );
}
