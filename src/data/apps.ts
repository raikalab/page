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
    navPhilosophy: "Filosofía",
    navTeam: "Equipo",
    navContact: "Contacto",
    language: "English",
    themeDark: "Oscuro",
    themeLight: "Claro",
    heroKicker: "Raika Lab",
    heroTitle: "Software simple. Ideas útiles.",
    heroText:
      "Diseñamos herramientas digitales, juegos y aplicaciones que resuelven problemas reales, sin complicaciones ni funciones de sobra.",
    heroPrimary: "Ver proyectos",
    heroSecondary: "Nuestra filosofía",
    appsEyebrow: "",
    appsTitle: "Nuestros desarrollos",
    appsIntro: "",
    labEyebrow: "Laboratorio",
    labTitle: "Desarrollamos software con propósito social.",
    labText:
      "Somos un equipo de colaboradores, con sede en México, que construimos software con propósito social y lo distribuimos a comunidades de México y el mundo.",
    labStepOne: "Ideamos",
    labStepOneText: "Detectamos necesidades reales y aterrizamos productos simples.",
    labStepTwo: "Construimos",
    labStepTwoText: "Diseñamos, desarrollamos y probamos experiencias digitales útiles.",
    labStepThree: "Distribuimos",
    labStepThreeText: "Llevamos herramientas accesibles a más comunidades.",
    openProject: "Ver detalles",
    selectedProject: "Detalle",
    androidLabel: "Google Play",
    iosLabel: "iOS",
    unavailable: "En desarrollo",
    philosophyEyebrow: "Nuestra filosofía",
    philosophyTitle: "Sin humo. Sin botones inútiles.",
    philosophyBody:
      "Hacemos software sin humo, sin botones inútiles y sin usar inteligencia artificial solo porque está de moda. Construimos productos simples, funcionales y con propósito. Si algo no mejora la experiencia, no resuelve un problema o no aporta valor, probablemente no debería estar ahí.",
    philosophyBodyTwo:
      "Creemos en la tecnología al servicio de las personas, no en personas al servicio de las máquinas. Desarrollamos para ampliar capacidades, facilitar ideas y contribuir a un mercado más accesible, competitivo y descentralizado, donde crear y emprender no sea privilegio de unos cuantos.",
    contactEyebrow: "Contacto",
    contactTitle: "Contacto",
    contactText:
      "Soporte, dudas, colaboraciones o comentarios sobre algún desarrollo.",
    name: "Nombre",
    email: "Email",
    subject: "Asunto",
    message: "Mensaje",
    send: "Enviar mensaje",
  },
  en: {
    navApps: "Apps",
    navPhilosophy: "Philosophy",
    navTeam: "Team",
    navContact: "Contact",
    language: "Español",
    themeDark: "Dark",
    themeLight: "Light",
    heroKicker: "Raika Lab",
    heroTitle: "Simple software. Useful ideas.",
    heroText:
      "We design apps, games, and digital tools that feel direct, useful, and carefully made from the first tap.",
    heroPrimary: "View projects",
    heroSecondary: "Our philosophy",
    appsEyebrow: "",
    appsTitle: "Our developments",
    appsIntro: "",
    labEyebrow: "Laboratory",
    labTitle: "We develop software with social purpose.",
    labText:
      "We are a team of collaborators based in Mexico, building software with social purpose and distributing it to communities in Mexico and around the world.",
    labStepOne: "Ideate",
    labStepOneText: "We detect real needs and shape simple products.",
    labStepTwo: "Build",
    labStepTwoText: "We design, develop, and test useful digital experiences.",
    labStepThree: "Distribute",
    labStepThreeText: "We bring accessible tools to more communities.",
    openProject: "View details",
    selectedProject: "Details",
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
    contactTitle: "Contact",
    contactText:
      "Support, questions, collaborations, or comments about any development.",
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
      es: "Un juego social +18 para parejas o amigos que convierte una reunión en una dinámica más atrevida, directa y fácil de iniciar.",
      en: "An adult social game for couples or friends that turns a gathering into a bolder, direct, easy-to-start dynamic.",
    },
    detail: {
      es: "Ya publicada en Google Play. Pensada para entrar rápido, elegir la intensidad y empezar sin menús innecesarios.",
      en: "Already published on Google Play. Built for quick entry, choosing intensity, and starting without unnecessary menus.",
    },
    image: "/assets/verdad-o-reto-spicy.png",
    accent: "#ff2d55",
    androidHref: "https://play.google.com/store/apps/details?id=com.verdadoreto.app&pcampaignid=web_share",
  },
  {
    id: "juego-para-fiestas",
    title: "Juego para Fiestas",
    category: { es: "Dinámicas para grupos", en: "Group party dynamics" },
    status: { es: "En desarrollo", en: "In development" },
    audience: { es: "Familias, amigos y fiestas", en: "Families, friends, and parties" },
    description: {
      es: "Una app de dinámicas para fiestas, reuniones familiares y grupos de todas las edades.",
      en: "A party-dynamics app for celebrations, family gatherings, and groups of all ages.",
    },
    detail: {
      es: "Incluirá dinámicas como Impostor, Discrepo, Juego del 7, Guacamaya e Historia, organizadas para elegir rápido según el grupo.",
      en: "It will include dynamics such as Impostor, Discrepo, Game of 7, Guacamaya, and Story, organized for fast group-based choice.",
    },
    image: "/assets/juego-para-fiestas.png",
    accent: "#00c2ff",
  },
  {
    id: "calcula-tu-liquidacion",
    title: "Calcula tu Liquidación",
    category: { es: "Herramienta laboral", en: "Labor finance tool" },
    status: { es: "En desarrollo", en: "In development" },
    audience: { es: "Trabajadores en México", en: "Workers in Mexico" },
    description: {
      es: "Un dashboard atractivo tipo wallet bancaria moderna para calcular tu finiquito o liquidación y entender datos laborales clave.",
      en: "A modern banking-wallet-style dashboard that helps calculate severance or settlement and understand key labor data.",
    },
    detail: {
      es: "Una herramienta para tomar mejores decisiones: calcula, ordena conceptos y presenta la información laboral de forma clara y accionable.",
      en: "A tool for better decisions: it calculates, organizes concepts, and presents labor information clearly and actionably.",
    },
    image: "/assets/calcula-tu-liquidacion.png",
    accent: "#3ddc84",
  },
  {
    id: "aprende-futbol",
    title: "Aprende Fútbol",
    category: { es: "Educación deportiva", en: "Sports education" },
    status: { es: "Planeado", en: "Planned" },
    audience: { es: "Fans y nuevos aficionados", en: "Fans and new supporters" },
    description: {
      es: "El Duolingo del fútbol: lecciones breves para aprender historia, reglas, estrategia y cultura del juego paso a paso.",
      en: "The Duolingo of football: short lessons to learn history, rules, strategy, and football culture step by step.",
    },
    detail: {
      es: "La idea es llevar el ritmo de aprendizaje tipo Duolingo al fútbol: pequeñas sesiones, avance visible y contenido digerible.",
      en: "The idea brings a Duolingo-like learning rhythm to football: short sessions, visible progress, and digestible content.",
    },
    image: "/assets/aprende-futbol.png",
    accent: "#ffd400",
  },
  {
    id: "energia-mexico-news",
    title: "Energía México News",
    category: { es: "Noticias energéticas", en: "Energy news" },
    status: { es: "Planeado", en: "Planned" },
    audience: { es: "Sector eléctrico y renovables", en: "Power and renewables sector" },
    description: {
      es: "App y web para seguir noticias del sector energético en México, con foco en electricidad y renovables.",
      en: "An app and website for tracking Mexico's energy sector news, focused on electricity and renewables.",
    },
    detail: {
      es: "El producto apunta a ordenar información de valor para profesionales, emprendedores y lectores interesados en energía.",
      en: "The product aims to organize valuable information for professionals, founders, and readers interested in energy.",
    },
    image: "/assets/energia-mexico-news.png",
    accent: "#27d7ff",
  },
];
