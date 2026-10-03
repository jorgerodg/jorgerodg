// Contenido del sitio. Todo el texto vive aquí: para actualizar la web y el
// CV basta con editar este archivo. Parte del diseño de Figma
// (archivo pJuXRkK8YDeOJDkw9ylDjV, frame "Versión C — Audaz" 4042:58).

// Dirección pública del sitio. Vercel la inyecta sola al construir: es el
// dominio propio si hay uno configurado y, si no, el `*.vercel.app`. Así las
// vistas previas al compartir y el sitemap nunca apuntan a un dominio que no
// existe, y no hay que tocar nada el día que se conecte un dominio.
const dominio = process.env.VERCEL_PROJECT_PRODUCTION_URL;
export const SITIO = dominio ? `https://${dominio}` : "http://localhost:3000";

export const perfil = {
  nombre: "Jorge Rodríguez",
  saludo: "Hola, soy Jorge",
  titularA: "Diseñador",
  titularB: "de producto",
  frase: "Diseño productos digitales que la gente entiende a la primera.",
  resumen:
    "Llevo más de diez años en producto digital, hoy al frente del equipo de UX de Banco del Pacífico.",
  puesto: "Lead UX Designer en Banco del Pacífico",
  ciudad: "Guayaquil, Ecuador",
  email: "jorgero@me.com",
  whatsapp: "593998878644",
  cv: "/cv-jorge-rodriguez.pdf",
  retrato: "/v3/retrato-audaz.jpg",
  linkedin: "https://www.linkedin.com/in/jorgerodg",
  behance: "https://www.behance.net/jorgero_dg",
  dribbble: "https://dribbble.com/jorgero_dg",
  instagram: "https://www.instagram.com/jorgero_dg",
};

export const servicios = [
  { n: "#01", label: "Investigación" },
  { n: "#02", label: "Sistemas de diseño" },
  { n: "#03", label: "Diseño de interfaz" },
  { n: "#04", label: "Liderazgo de UX" },
];

export const marcas = [
  "Banco del Pacífico", "Banco Pichincha", "Claro", "Grupo Link", "Usame",
  "Bellissima", "Crecos", "Fideval", "Link Sport", "Link Experience",
  "Netlife", "Veris", "Tía",
];

export const sobreMi = {
  eyebrow: "Detrás del diseño",
  titulo: "Donde una decisión de diseño empieza a tener consecuencias",
  lead: "Trabajo donde se cruzan la investigación, el sistema de diseño y el negocio: el punto en que el diseño deja de ser estética.",
  especialidades: [
    "Diseño de experiencia de usuario (UX)",
    "Diseño de servicios",
    "Business Banking y banca digital",
  ],
  parrafos: [
    "Soy diseñador gráfico graduado de la Universidad Abierta Interamericana (Buenos Aires, Argentina) y actualmente me desempeño como Lead UX Designer en el Banco del Pacífico. Mi experiencia se centra en diseñar interfaces de usuario funcionales y atractivas, poniendo al usuario en el centro de cada decisión de diseño.",
    "Cuento con certificación en Design Thinking y una sólida formación en diseño de interfaces (UI) y experiencia de usuario (UX), adquirida a través de diversos cursos especializados. Esto me ha permitido abordar proyectos con un enfoque estratégico, creativo y orientado a resultados.",
    "Mi objetivo profesional es evolucionar constantemente junto con la industria, adaptándome a las necesidades del entorno empresarial y buscando nuevas formas de aportar valor a los equipos y proyectos en los que participo. Creo firmemente en el poder del diseño como herramienta para transformar experiencias y generar impacto positivo.",
  ],
};

export type Caso = {
  slug: string;
  n: string;
  tag: string;
  titulo: string;
  resumen: string;
  cliente: string;
  /** Opcionales: se muestran en la ficha solo si tienen valor. */
  año?: string;
  rol?: string;
  equipo?: string;
  /** El caso de estudio. Mientras estén vacíos, la ficha lo dice en vez de
   *  rellenar con texto de mentira. Escríbelos y aparecen solos. */
  reto?: string;
  proceso?: string[];
  resultado?: string;
  imagenes?: { src: string; alt: string }[];
  behance?: string;
};

export const casos: Caso[] = [
  {
    slug: "banco-pichincha",
    n: "01",
    tag: "Banca digital · UX",
    titulo: "Case Of Use — Banco Pichincha",
    resumen: "Caso de uso de banca digital.",
    cliente: "Banco Pichincha",
    behance:
      "https://www.behance.net/gallery/103370343/Case-Of-Use-Banco-Pichincha",
  },
  {
    slug: "link-app",
    n: "02",
    tag: "Producto · UI",
    titulo: "Link App — Employee Administration",
    resumen: "Aplicación de administración de empleados.",
    cliente: "Grupo Link",
    behance:
      "https://www.behance.net/gallery/103342037/Link-APP-Employee-Administration",
  },
  {
    slug: "usame-app",
    n: "03",
    tag: "App móvil · Seguros",
    titulo: "Usame App — Insurance Carrier",
    resumen: "Aplicación móvil para una aseguradora.",
    cliente: "Usame",
    behance:
      "https://www.behance.net/gallery/68103963/Usame-App-Insurance-Carrier",
  },
  {
    slug: "claro-tips",
    n: "04",
    tag: "App móvil · Telecomunicaciones",
    titulo: "Claro Tips — Mi Claro EC",
    resumen: "Sección de tips dentro de la app Mi Claro Ecuador.",
    cliente: "Claro Ecuador",
    behance: "https://www.behance.net/gallery/55509809/Claro-Tips-Mi-Claro-EC",
  },
  {
    slug: "bellissima",
    n: "05",
    tag: "App móvil · Agendamiento",
    titulo: "Bellissima App",
    resumen: "App de agendamiento de citas para centros de estética.",
    cliente: "Bellissima",
    behance:
      "https://www.behance.net/gallery/64135177/Bellissima-app-Citas-para-centros-de-esttica",
  },
  {
    slug: "asi-ecuador-covid",
    n: "06",
    tag: "Interés público · Diseño",
    titulo: "ASI — Ecuador COVID",
    resumen: "Proyecto de diseño para ASI Ecuador durante la pandemia.",
    cliente: "ASI Ecuador",
    behance: "https://www.behance.net/gallery/109326449/ASI-ECUADOR-COVID",
  },
];

export const casoPorSlug = (slug: string) =>
  casos.find((c) => c.slug === slug);

export type Cargo = {
  titulo: string;
  periodo: string;
  intro?: string;
  vinetas?: string[];
};

export const trayectoria: {
  rango: string; empresa: string; lugar: string; cargos: Cargo[]; nota?: string;
}[] = [
  {
    rango: "2021 – Presente", empresa: "Banco del Pacífico", lugar: "Guayaquil, Ecuador",
    cargos: [
      { titulo: "Lead UX Designer", periodo: "Sep 2025 – Presente", intro: "Lidero la transformación de la experiencia del cliente en el banco, impulsando innovación y consistencia en todos los canales." },
      { titulo: "UI/UX Designer", periodo: "May 2021 – Sep 2025",
        intro: "Responsable de la interfaz de usuario de los productos y servicios del banco, en colaboración con desarrolladores y PO, para que sea fácil de usar y brinde una experiencia positiva.",
        vinetas: [
          "Implementar los principios de interfaz centrados en el usuario para mejorar la experiencia del cliente.",
          "Explorar el proceso creativo de UX en sus cuatro etapas: detección, identificación, desarrollo y entrega.",
        ] },
    ],
  },
  {
    rango: "2016–2021", empresa: "Grupo Link", lugar: "Guayaquil, Ecuador",
    cargos: [
      { titulo: "Lead UI Designer", periodo: "Dic 2018 – May 2021",
        vinetas: [
          "Liderar y motivar al equipo de diseño UI.",
          "Evolucionar la práctica de diseño centrado en el usuario.",
          "Velar por la consistencia de la experiencia entre productos.",
          "Trabajar con equipos interdisciplinarios de producto para una gestión iterativa e incremental.",
        ] },
      { titulo: "UI Designer", periodo: "Nov 2016 – Dic 2018" },
    ],
  },
  {
    rango: "2016", empresa: "BBB Editions", lugar: "Argentina",
    cargos: [{ titulo: "Diseñador Gráfico", periodo: "Feb 2016 – Jun 2016" }],
    nota: "Maquetación de la revista premium de BMW Argentina.",
  },
  {
    rango: "2015–2017", empresa: "Diseño Latinoamérica LATAM", lugar: "Argentina",
    cargos: [{ titulo: "Diseñador Gráfico — Freelance", periodo: "Nov 2015 – Feb 2017", intro: "Diseñador freelance para dlatinoamerica.com." }],
  },
  {
    rango: "2015–2016", empresa: "Cuatroochenta", lugar: "Argentina",
    cargos: [{ titulo: "Trainer Certified", periodo: "Ago 2015 – Dic 2016", intro: "Clases en línea impartidas en conjunto con DLATAM LLC." }],
  },
  {
    rango: "2012–2013", empresa: "Creart", lugar: "Argentina",
    cargos: [{ titulo: "Imprenta", periodo: "Sep 2012 – Feb 2013", intro: "Impresión y preimpresión." }],
  },
];

export type Herramienta = { label: string; icono?: string };

export const oficio: { n: string; titulo: string; items: Herramienta[] }[] = [
  { n: "#01", titulo: "Diseño de interfaz", items: [
    { label: "Figma", icono: "/v3/figma.svg" },
    { label: "Sketch", icono: "/v3/sketch.svg" },
    { label: "Adobe XD", icono: "/v3/adobe-xd.svg" },
  ] },
  { n: "#02", titulo: "Prototipado", items: [
    { label: "Figma", icono: "/v3/figma.svg" },
    { label: "Zeplin", icono: "/v3/zeplin.svg" },
    { label: "Marvel App", icono: "/v3/marvel.svg" },
  ] },
  { n: "#03", titulo: "Producción y gráfica", items: [
    { label: "Adobe InDesign", icono: "/v3/adobe-indesign.svg" },
    { label: "Adobe Photoshop", icono: "/v3/adobe-photoshop.svg" },
    { label: "Adobe Illustrator", icono: "/v3/adobe-illustrator.svg" },
    { label: "Adobe After Effects", icono: "/v3/adobe-after-effects.svg" },
    { label: "CorelDRAW", icono: "/v3/coreldraw.svg" },
  ] },
  { n: "#04", titulo: "Método y colaboración", items: [
    { label: "Design thinking" }, { label: "Human-centered design" },
    { label: "Lean UX" }, { label: "Wireframing" }, { label: "Pruebas de usabilidad" },
  ] },
];

export const educacion = [
  { periodo: "2011–2016", titulo: "Diseñador Gráfico", institucion: "Universidad Abierta Interamericana", detalle: "Facultad de Ciencias de la Comunicación — Buenos Aires, Argentina" },
  { periodo: "2002–2008", titulo: "Especialización en Informática", institucion: "Academia Naval Amazonas" },
];

export const certificados = [
  { fecha: "Ago 2025", titulo: "Service Design: Designing for Experience Over Time", emisor: "Udemy", id: "UC-76bca087-8a1b-47e5-a6f8-e4e7a9e95dca", href: "https://www.udemy.com/certificate/UC-76bca087-8a1b-47e5-a6f8-e4e7a9e95dca/" },
  { fecha: "Jun 2025", titulo: "UX-PM Level 2", emisor: "UXalliance", id: "UX-PM2-4399-ECU25-0020" },
  { fecha: "Abr 2024", titulo: "Diseño web con Figma: creación de interfaces eficaces", emisor: "Domestika", id: "3a98f0e6d05ff2fe1b26e7b1fa368486", href: "https://www.domestika.org/es/certificates/3a98f0e6d05ff2fe1b26e7b1fa368486" },
  { fecha: "Sep 2021", titulo: "Complete Figma Megacourse: UI/UX Design Beginner to Expert", emisor: "Udemy", id: "UC-e333c5ba-2de0-4368-a427-18eef4c44713", href: "https://www.udemy.com/certificate/UC-e333c5ba-2de0-4368-a427-18eef4c44713/" },
  { fecha: "Jul 2021", titulo: "Creación de UI Kits con Sketch", emisor: "Domestika", id: "c0defa3dfe505912ba1fbc4ce13ead93", href: "https://www.domestika.org/es/certificates/c0defa3dfe505912ba1fbc4ce13ead93" },
  { fecha: "Feb 2021", titulo: "Diseño de producto digital con Lean y UX", emisor: "Domestika", id: "7891baf5120eafbc3b281cd2fd2b8770", href: "https://www.domestika.org/es/certificates/7891baf5120eafbc3b281cd2fd2b8770" },
  { fecha: "Feb 2020", titulo: "MIT Design Thinking: metodología para éxito en innovación", emisor: "Emeritus", id: "15052950" },
  { fecha: "Sep 2019", titulo: "Introducción al Human-Centered Design", emisor: "Domestika", id: "6a3d6f0c9a2c543c493f038f0170538a", href: "https://www.domestika.org/es/certificates/6a3d6f0c9a2c543c493f038f0170538a" },
  { fecha: "Ago 2019", titulo: "Diseño de una aplicación móvil", emisor: "Domestika", id: "96089faf2e07675499b6655cddd585b3", href: "https://www.domestika.org/es/certificates/96089faf2e07675499b6655cddd585b3" },
  { fecha: "Dic 2015", titulo: "Diseña una App deliciosa", emisor: "Domestika", id: "f5a2dc4c8c71fd9035aa7ffb64415f45", href: "https://www.domestika.org/es/certificates/f5a2dc4c8c71fd9035aa7ffb64415f45" },
  { fecha: "Ago 2015", titulo: "Trainer Certified", emisor: "480interactive" },
];
