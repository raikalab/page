export function Logo() {
  return (
    <a className="logo" href="#inicio" aria-label="Ir al inicio de Raika Lab">
      <span className="logo__mark" aria-hidden="true">
        <svg viewBox="0 0 48 48" role="img">
          <defs>
            <linearGradient id="raika-r-gradient" x1="6" x2="42" y1="44" y2="4">
              <stop offset="0" stopColor="#0ea5ff" />
              <stop offset="0.48" stopColor="#22d3ee" />
              <stop offset="1" stopColor="#1d4ed8" />
            </linearGradient>
          </defs>
          <path
            d="M12 39V9h16.2c7 0 11.5 4 11.5 10.1 0 4.3-2.2 7.4-6.1 8.9L41 39H30.8l-6.2-9.7h-4.1V39H12Zm8.5-17.1h6.6c2.7 0 4.2-1.2 4.2-3.4 0-2.1-1.5-3.3-4.2-3.3h-6.6v6.7Z"
            fill="url(#raika-r-gradient)"
          />
        </svg>
      </span>
      <span className="logo__text">Raika Lab</span>
    </a>
  );
}
