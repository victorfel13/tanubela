export type SocialLink = {
  platform: string;
  url: string;
  icon: string;
};

export const artistInfo = {
  name: "Tania",
  roles: "Cantautora / Productora / Performer",
  bioShort:
    "Plantilla base para tu press kit. Sustituye este texto con tu narrativa breve de artista.",
  contact: {
    /** Email en mayúsculas para el bloque de press (Style) */
    email: "tanubelamusic@gmail.com",
    /** Línea tipo “MANAGER / NOMBRE” */
    managerLine: "MANAGER / ALEX CASTILLA",
    /** Teléfono con espacios como en el dossier */
    phone: "9999 00 41 25",
  },
} as const;

export const styleInfo = {
  /** Texto blanco a la izquierda de la barra negra superior (press) */
  pressIntroParagraphs: [
    "Tanúbela es una artista, cantante, música, multi-instrumentista y productora mexicana nacida en Mérida, Yucatán.",
    "Explorando diferentes sonidos y aspectos del crecimiento personal y espiritual, expresándolo a través de la música.",
  ],
  title: "Género y estilo",
  introBefore:
    "El género musical con el que más podemos identificar a Tanúbela y con el que más brota su creatividad, es con el ",
  introBold: "experimental, electrónico",
  introAfter: ".",
  bodyParagraphs: [
    "Crear atmósferas con los sintetizadores, con las voces, crear texturas con los sonidos acompañándolos con un misticismo lírico, son de las características más representativas de Tanúbela como artista, compositora y cantante.",
    "A través de los años hemos podido ir observando cómo se ha ido consolidando su estilo y su propuesta musical, identificando su sonido, refinando su diseño sonoro, que aunque se encuentra en constante evolución, se ha convertido en un sonido sumamente identificable con ella.",
    "Ya sea sólo escuchando la atmósfera, la melodía o el beat, al igual que su voz, a primera instancia eres capaz de asociarlo con ella y logra atraparte e hipnotizarte con los diferentes elementos que integran su música, esencia y su propuesta como artista.",
  ],
} as const;

export const socials: SocialLink[] = [
  { platform: "Facebook", url: "https://www.facebook.com/tanubelamusic", icon: "FB" },
  { platform: "Instagram", url: "https://www.instagram.com/tanubela/", icon: "IG" },
  { platform: "TikTok", url: "https://www.tiktok.com/@tanubela", icon: "TK" },
  { platform: "YouTube", url: "https://www.youtube.com/@Tanubela", icon: "YT" },
  { platform: "Tidal", url: "https://tidal.com/artist/37894472/u", icon: "TD" },
  {
    platform: "Spotify",
    url: "https://open.spotify.com/intl-es/artist/0vpQ8Xa7egiLfmua6DNTfP?si=rdgNhunxQlSblIlxiy4t6w",
    icon: "SP",
  },
  {
    platform: "Apple Music",
    url: "https://music.apple.com/mx/artist/tan%C3%BAbela/1676653145",
    icon: "AM",
  },
];

export const extrasInfo = {
  featuringList: ["Artista Invitado A", "Productor B", "Remix C"],
  spotifyEmbed:
    "https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator",
} as const;

export const manifestoInfo = {
  title: "Resonancia",
  phrase: "Aqui va tu manifiesto artistico o frase fuerte.",
} as const;

export const uiText = {
  musicCta: "Mensaje o CTA de musica",
} as const;

export const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Estilo", href: "#estilo" },
  { label: "Música", href: "#musica" },
  { label: "Video", href: "#video" },
  { label: "Galería", href: "#galeria" },
  { label: "Tienda", href: "#tienda" },
  { label: "Contacto", href: "#contacto" },
] as const;

export const shopInfo = {
  title: "Tienda",
  subtitle: "Mercancía, ediciones y pedidos especiales.",
  instagramLabel: "Instagram",
  whatsappLabel: "WhatsApp",
  instagramUrl: "https://www.instagram.com/tanubela/",
  whatsappUrl: "https://wa.me/529999004125",
} as const;

export const contactInfo = {
  title: "Contacto",
  subtitle: "Escríbenos para prensa, booking o colaboraciones.",
  submitLabel: "Enviar correo",
  fields: {
    name: "Nombre",
    email: "Tu correo",
    message: "Mensaje",
  },
} as const;

export const footerInfo = {
  artistName: "Tanúbela",
  tagline: "Cantautora · Productora · Performer",
  rightsLines: [
    `© ${new Date().getFullYear()} Tanúbela. Todos los derechos reservados.`,
    `© ${new Date().getFullYear()} Sureste Records. Todos los derechos reservados.`,
  ],
  siteCredit: "Sitio creado por Mini Desk y Victor Camara Salinas",
} as const;
