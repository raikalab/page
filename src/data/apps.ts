export type Language = "es" | "en";

type Localized = Record<Language, string>;

export type ProductApp = {
  id: string;
  title: string;
  category: Localized;
  status: Localized;
  audience: Localized;
  description: Localized;
  detail: Localized;
  image: string;
  accent: string;
  androidHref?: string;
};

export const contactTarget = "https://formsubmit.co/sergioft@outlook.com";

export const copy = {
  es: {
    navApps: "Apps",
    navPhilosophy: "Filosofia",
    navContact: "Contacto",
    language: "English",
    heroKicker: "Raika Lab",
    heroTitle: "Software con intencion.",
    heroText:
      "Disenamos apps, juegos y herramientas digitales que se sienten directas, utiles y cuidadas desde el primer toque.",
    heroPrimary: "Ver proyectos",
    heroSecondary: "Nuestra filosofia",
    appsEyebrow: "Proyectos",
    appsTitle: "Productos en construccion real",
    appsIntro:
      "La ficha completa, el estado y los proximos lanzamientos aparecen al abrir cada proyecto.",
    openProject: "Abrir proyecto",
    selectedProject: "Proyecto seleccionado",
    androidLabel: "Google Play",
    iosLabel: "iOS",
    unavailable: "En desarrollo",
    philosophyEyebrow: "Nuestra filosofia",
    philosophyTitle: "Sin humo. Sin botones inutiles.",
    philosophyBody:
      "Hacemos software sin humo, sin botones inutiles y sin usar inteligencia artificial solo porque esta de moda. Construimos productos simples, funcionales y con proposito. Si algo no mejora la experiencia, no resuelve un problema o no aporta valor, probablemente no deberia estar ahi.",
    philosophyBodyTwo:
      "Creemos en la tecnologia al servicio de las personas, no en personas al servicio de las maquinas. Desarrollamos para ampliar capacidades, facilitar ideas y contribuir a un mercado mas accesible, competitivo y descentralizado, donde crear y emprender no sea privilegio de unos cuantos.",
    contactEyebrow: "Contacto",
    contactTitle: "Hablemos desde el formulario.",
    contactText:
      "Soporte, dudas, colaboraciones o comentarios sobre Raika Lab. Tu mensaje llega directo al equipo sin mostrar el correo en pantalla.",
    name: "Nombre",
    email: "Email",
    subject: "Asunto",
    message: "Mensaje",
    send: "Enviar mensaje",
  },
  en: {
    navApps: "Apps",
    navPhilosophy: "Philosophy",
    navContact: "Contact",
    language: "Espanol",
    heroKicker: "Raika Lab",
    heroTitle: "Software with intent.",
    heroText:
      "We design apps, games, and digital tools that feel direct, useful, and carefully made from the first tap.",
    heroPrimary: "View projects",
    heroSecondary: "Our philosophy",
    appsEyebrow: "Projects",
    appsTitle: "Products being built for real",
    appsIntro:
      "The full brief, current status, and upcoming launches are shown only after opening a project.",
    openProject: "Open project",
    selectedProject: "Selected project",
    androidLabel: "Google Play",
    iosLabel: "iOS",
    unavailable: "In development",
    philosophyEyebrow: "Our philosophy",
    philosophyTitle: "No smoke. No useless buttons.",
    philosophyBody:
      "We build software without hype, without useless buttons, and without using artificial intelligence just because it is fashionable. We build simple, functional products with purpose. If something does not improve the experience, solve a problem, or add value, it probably should not be there.",
    philosophyBodyTwo:
      "We believe in technology serving people, not people serving machines. We develop to expand capabilities, make ideas easier to launch, and contribute to a more accessible, competitive, decentralized market where creating and entrepreneurship are not privileges for a few.",
    contactEyebrow: "Contact",
    contactTitle: "Talk to us through the form.",
    contactText:
      "Support, questions, collaborations, or feedback about Raika Lab. Your message goes directly to the team without displaying an email address.",
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    send: "Send message",
  },
} satisfies Record<Language, Record<string, string>>;

export const apps: ProductApp[] = [
  {
    id: "verdad-o-reto-spicy",
    title: "Verdad o Reto Spicy",
    category: { es: "Juego social +18", en: "Adult social game" },
    status: { es: "Publicado en Android", en: "Published on Android" },
    audience: { es: "Parejas y amigos adultos", en: "Adult couples and friends" },
    description: {
      es: "Un juego social para reuniones adultas, con una identidad intensa, rapida y facil de usar.",
      en: "A social game for adult gatherings, with an intense identity and a quick, easy flow.",
    },
    detail: {
      es: "La app ya esta publicada. El objetivo es que cualquier grupo pueda entrar, elegir una dinamica y empezar sin configuraciones pesadas.",
      en: "The app is already published. The goal is to let any group open it, choose a dynamic, and start without heavy setup.",
    },
    image: "/assets/verdad-o-reto-spicy.png",
    accent: "#ff2d55",
    androidHref: "https://play.google.com/store/apps/details?id=com.verdadoreto.app&pcampaignid=web_share",
  },
  {
    id: "juego-para-fiestas",
    title: "Juego para Fiestas",
    category: { es: "Dinamicas para grupos", en: "Group party dynamics" },
    status: { es: "En desarrollo", en: "In development" },
    audience: { es: "Familias, amigos y fiestas", en: "Families, friends, and parties" },
    description: {
      es: "Una coleccion de juegos para animar reuniones de distintas edades sin volver pesada la convivencia.",
      en: "A collection of games for energizing gatherings across ages without making the experience heavy.",
    },
    detail: {
      es: "Incluira dinamicas como Impostor, Discrepo, Juego del 7, Guacamaya e Historia, organizadas para elegir rapido segun el grupo.",
      en: "It will include dynamics such as Impostor, Discrepo, Game of 7, Guacamaya, and Story, organized for fast group-based choice.",
    },
    image: "/assets/juego-para-fiestas.png",
    accent: "#00c2ff",
  },
  {
    id: "calcula-tu-liquidacion",
    title: "Calcula tu Liquidacion",
    category: { es: "Herramienta laboral", en: "Labor finance tool" },
    status: { es: "En desarrollo", en: "In development" },
    audience: { es: "Trabajadores en Mexico", en: "Workers in Mexico" },
    description: {
      es: "Un dashboard tipo wallet moderna para estimar finiquito o liquidacion y entender datos laborales clave.",
      en: "A modern wallet-style dashboard for estimating severance or settlement and understanding key labor data.",
    },
    detail: {
      es: "La experiencia busca traducir calculos laborales complejos a una lectura clara, visual y accionable.",
      en: "The experience aims to translate complex labor calculations into a clear, visual, and actionable reading.",
    },
    image: "/assets/calcula-tu-liquidacion.png",
    accent: "#3ddc84",
  },
  {
    id: "aprende-futbol",
    title: "Aprende Futbol",
    category: { es: "Educacion deportiva", en: "Sports education" },
    status: { es: "Planeado", en: "Planned" },
    audience: { es: "Fans y nuevos aficionados", en: "Fans and new supporters" },
    description: {
      es: "Lecciones breves para aprender historia, estrategia y conceptos clave del futbol de forma progresiva.",
      en: "Short lessons for learning football history, strategy, and core concepts progressively.",
    },
    detail: {
      es: "La idea es llevar el ritmo de aprendizaje tipo Duolingo al futbol: pequenas sesiones, avance visible y contenido digerible.",
      en: "The idea brings a Duolingo-like learning rhythm to football: short sessions, visible progress, and digestible content.",
    },
    image: "/assets/aprende-futbol.png",
    accent: "#ffd400",
  },
  {
    id: "energia-mexico-news",
    title: "Energia Mexico News",
    category: { es: "Noticias energeticas", en: "Energy news" },
    status: { es: "Planeado", en: "Planned" },
    audience: { es: "Sector electrico y renovables", en: "Power and renewables sector" },
    description: {
      es: "App y web para seguir noticias del sector energetico en Mexico, con foco en electricidad y renovables.",
      en: "An app and website for tracking Mexico's energy sector news, focused on electricity and renewables.",
    },
    detail: {
      es: "El producto apunta a ordenar informacion de valor para profesionales, emprendedores y lectores interesados en energia.",
      en: "The product aims to organize valuable information for professionals, founders, and readers interested in energy.",
    },
    image: "/assets/energia-mexico-news.png",
    accent: "#27d7ff",
  },
];
