import { Menu } from "lucide-react";
import { Button } from "../atoms/Button";
import { Logo } from "../atoms/Logo";

export function Header() {
  return (
    <header className="header">
      <nav className="nav" aria-label="Navegacion principal">
        <Logo />
        <input className="nav__toggle" id="nav-toggle" type="checkbox" aria-label="Abrir menu" />
        <label className="nav__menu-button" htmlFor="nav-toggle" aria-hidden="true">
          <Menu size={22} />
        </label>
        <div className="nav__links">
          <a href="#games">Games</a>
          <a href="#contacto">Contacto</a>
          <Button href="#games" variant="secondary">
            Our Games
          </Button>
        </div>
      </nav>
    </header>
  );
}
