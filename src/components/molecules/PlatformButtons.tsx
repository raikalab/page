import { Apple, Play } from "lucide-react";
import type { ProductApp } from "../../data/apps";

type PlatformButtonsProps = {
  app: ProductApp;
};

export function PlatformButtons({ app }: PlatformButtonsProps) {
  return (
    <div className="platforms" aria-label={`Plataformas para ${app.title}`}>
      <a
        className="store store--play"
        href={app.platforms.android.href}
        target={app.platforms.android.status === "available" ? "_blank" : undefined}
        rel={app.platforms.android.status === "available" ? "noreferrer" : undefined}
        aria-label={`${app.title}: ${app.platforms.android.label}`}
      >
        <Play size={18} aria-hidden="true" />
        <span>
          <small>Android</small>
          {app.platforms.android.label}
        </span>
      </a>
      <a
        className="store store--apple"
        href={app.platforms.ios.href}
        aria-label={`${app.title}: ${app.platforms.ios.label}`}
      >
        <Apple size={20} aria-hidden="true" />
        <span>
          <small>Apple</small>
          {app.platforms.ios.label}
        </span>
      </a>
    </div>
  );
}
