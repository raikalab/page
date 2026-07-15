export type PlatformLink = {
  label: string;
  href: string;
  status: "available" | "coming-soon" | "in-development";
};

export type ProductApp = {
  title: string;
  eyebrow: string;
  status: "Publicado" | "En desarrollo" | "Planeado";
  audience: string;
  description: string;
  highlights: string[];
  accent: string;
  category: string;
  platforms: {
    android: PlatformLink;
    ios: PlatformLink;
  };
};

export const supportEmail = "soporte@raikalab.com";

export const apps: ProductApp[] = [
  {
    title: "Verdad o Reto Spicy",
    eyebrow: "Juego social +18",
    status: "Publicado",
    audience: "Parejas y amigos adultos",
    description:
      "Una experiencia social para romper la rutina con retos, preguntas y dinamicas pensadas para grupos de adultos.",
    highlights: ["Modo picante", "Partidas rapidas", "Ideal para reuniones"],
    accent: "#f24d6b",
    category: "Games",
    platforms: {
      android: {
        label: "Disponible en Google Play",
        href: "https://play.google.com/store/search?q=Verdad%20o%20reto%20Spicy&c=apps",
        status: "available",
      },
      ios: {
        label: "iOS en desarrollo",
        href: "#contacto",
        status: "in-development",
      },
    },
  },
  {
    title: "Juego para Fiestas",
    eyebrow: "Diversion para todas las edades",
    status: "En desarrollo",
    audience: "Familias, amigos y fiestas",
    description:
      "Una coleccion de dinamicas para animar cualquier reunion con juegos como Impostor, Discrepo, Juego del 7, Guacamaya e Historia.",
    highlights: ["Juegos por edad", "Modo grupo", "Dinamicas cortas"],
    accent: "#0fa3b1",
    category: "Games",
    platforms: {
      android: {
        label: "Google Play proximamente",
        href: "#contacto",
        status: "coming-soon",
      },
      ios: {
        label: "iOS proximamente",
        href: "#contacto",
        status: "coming-soon",
      },
    },
  },
  {
    title: "Calcula tu Liquidacion",
    eyebrow: "Finanzas laborales",
    status: "En desarrollo",
    audience: "Trabajadores en Mexico",
    description:
      "Una app con dashboard moderno tipo wallet para calcular finiquito o liquidacion y obtener datos estrategicos de asesoria laboral.",
    highlights: ["Dashboard atractivo", "Calculos claros", "Asesoria laboral"],
    accent: "#38b000",
    category: "Productividad",
    platforms: {
      android: {
        label: "Google Play proximamente",
        href: "#contacto",
        status: "coming-soon",
      },
      ios: {
        label: "iOS proximamente",
        href: "#contacto",
        status: "coming-soon",
      },
    },
  },
  {
    title: "Aprende Futbol",
    eyebrow: "Aprendizaje gamificado",
    status: "Planeado",
    audience: "Fans y nuevos aficionados",
    description:
      "Una forma tipo Duolingo para aprender historia, estrategia y datos clave del futbol con lecciones breves y progresivas.",
    highlights: ["Lecciones cortas", "Historia y tactica", "Progreso diario"],
    accent: "#ffb703",
    category: "Educacion",
    platforms: {
      android: {
        label: "Google Play proximamente",
        href: "#contacto",
        status: "coming-soon",
      },
      ios: {
        label: "iOS proximamente",
        href: "#contacto",
        status: "coming-soon",
      },
    },
  },
  {
    title: "Energia Mexico News",
    eyebrow: "Noticias del sector energetico",
    status: "Planeado",
    audience: "Profesionales y lectores del sector",
    description:
      "App y sitio informativo sobre el sector energetico en Mexico, con foco en electricidad, renovables y tendencias regulatorias.",
    highlights: ["Noticias curadas", "Sector electrico", "Renovables"],
    accent: "#4361ee",
    category: "Noticias",
    platforms: {
      android: {
        label: "Google Play proximamente",
        href: "#contacto",
        status: "coming-soon",
      },
      ios: {
        label: "iOS proximamente",
        href: "#contacto",
        status: "coming-soon",
      },
    },
  },
];
