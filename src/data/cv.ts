// Contenido del sitio. Todo el texto vive aquí: para actualizar el sitio
// (por ejemplo con datos nuevos de LinkedIn) basta con editar este archivo.

export const profile = {
  name: "Jorge Rodríguez",
  role: "Lead UX Designer",
  tagline:
    "Diseñador multidisciplinario enfocado en interfaz y experiencia de usuario.",
  intro:
    "Llevo más de diez años en producto digital, hoy al frente del equipo de UX de Banco del Pacífico. Trabajo donde se cruzan la investigación, el sistema de diseño y el negocio: el punto en que una decisión de diseño deja de ser estética y empieza a tener consecuencias.",
  email: "jorgero@me.com",
  // Formato internacional sin "+" ni espacios, como lo exige wa.me.
  // Ojo: este enlace publica tu número en la URL.
  whatsapp: "593998878644",
  linkedin: "https://www.linkedin.com/in/jorgerodg/",
  behance: "https://www.behance.net/jorgero_dg",
  dribbble: "https://dribbble.com/jorgero_dg",
  instagram: "https://www.instagram.com/jorgero_dg",
  location: "Guayaquil, Ecuador",
  city: "Guayaquil",
  country: "EC",
  // Dominio canónico. Hoy no resuelve: hay que publicarlo o cambiarlo.
  site: "https://www.jorgerodg.com",
  cv: "/cv-jorge-rodriguez.pdf",
  photo: "/jorge-rodriguez-retrato.jpg",
};

export type Project = {
  title: string;
  summary: string;
  tags: string[];
  href?: string;
};

// Proyectos tomados del perfil público de Behance (behance.net/jorgero_dg).
// Los títulos y enlaces son reales; los `summary` son descripciones neutras
// derivadas del título — reescríbelos con el problema, tu rol y el resultado.
export const projects: Project[] = [
  {
    title: "Case Of Use — Banco Pichincha",
    summary: "Caso de uso de banca digital.",
    tags: ["Banca digital", "UX"],
    href: "https://www.behance.net/gallery/103370343/Case-Of-Use-Banco-Pichincha",
  },
  {
    title: "Link App — Employee Administration",
    summary: "Aplicación de administración de empleados.",
    tags: ["Producto", "UI"],
    href: "https://www.behance.net/gallery/103342037/Link-APP-Employee-Administration",
  },
  {
    title: "Usame App — Insurance Carrier",
    summary: "Aplicación móvil para una aseguradora.",
    tags: ["App móvil", "Seguros"],
    href: "https://www.behance.net/gallery/68103963/Usame-App-Insurance-Carrier",
  },
  {
    title: "Claro Tips — Mi Claro EC",
    summary: "Sección de tips dentro de la app Mi Claro Ecuador.",
    tags: ["App móvil", "Telecomunicaciones"],
    href: "https://www.behance.net/gallery/55509809/Claro-Tips-Mi-Claro-EC",
  },
  {
    title: "Bellissima App",
    summary: "App de agendamiento de citas para centros de estética.",
    tags: ["App móvil", "Agendamiento"],
    href: "https://www.behance.net/gallery/64135177/Bellissima-app-Citas-para-centros-de-esttica",
  },
  {
    title: "ASI — Ecuador COVID",
    summary: "Proyecto de diseño para ASI Ecuador durante la pandemia.",
    tags: ["Interés público", "Diseño"],
    href: "https://www.behance.net/gallery/109326449/ASI-ECUADOR-COVID",
  },
];

export type Role = {
  title: string;
  period: string;
};

export type Job = {
  company: string;
  location?: string;
  range: string;
  note?: string;
  roles: Role[];
};

export const experience: Job[] = [
  {
    company: "Banco del Pacífico",
    location: "Guayaquil, Ecuador",
    range: "2021 – Presente",
    roles: [
      { title: "Lead UX Designer", period: "Sep 2025 – Presente" },
      { title: "UX/UI Designer", period: "May 2021 – Ago 2025" },
    ],
  },
  {
    company: "Grupo Link",
    range: "2016–2021",
    roles: [
      { title: "Líder de Diseño", period: "Ene 2019 – May 2021" },
      { title: "Diseñador Gráfico", period: "Nov 2016 – Dic 2018" },
    ],
  },
  {
    company: "BBB Editions",
    location: "Argentina",
    range: "2016",
    note: "Maquetación de la revista premium de BMW Argentina.",
    roles: [{ title: "Diseñador Gráfico", period: "Feb 2016 – Jun 2016" }],
  },
  {
    company: "Diseño Latinoamérica LATAM",
    range: "2015–2016",
    roles: [{ title: "Diseñador Gráfico — Freelance", period: "Feb 2015 – Mar 2016" }],
  },
];

export const skills = [
  { group: "Diseño de interfaz", items: ["Figma", "Sketch", "Adobe XD"] },
  { group: "Prototipado", items: ["Figma", "Zeplin", "Marvel App"] },
  {
    group: "Producción y gráfica",
    items: [
      "Adobe InDesign",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe After Effects",
      "CorelDRAW",
    ],
  },
  {
    group: "Método y colaboración",
    items: [
      "Design thinking",
      "Human-centered design",
      "Lean UX",
      "Wireframing",
      "Pruebas de usabilidad",
    ],
  },
];

export const education = [
  {
    title: "Diseñador Gráfico",
    place: "Universidad Abierta Interamericana",
    detail: "Facultad de Ciencias de la Comunicación — Buenos Aires, Argentina",
    period: "2011–2016",
  },
  {
    title: "Especialización en Informática",
    place: "Academia Naval Amazonas",
    period: "2002–2008",
  },
];

export const certifications = [
  {
    title: "Diseño web con Figma: creación de interfaces eficaces",
    issuer: "Domestika",
    date: "Abr 2024",
  },
  {
    title: "Diseño de producto digital con Lean y UX",
    issuer: "Domestika",
    date: "Dic 2020",
  },
  { title: "Design Thinking", issuer: "Emeritus", date: "Ene 2020" },
  { title: "Human-Centered Design", issuer: "Domestika", date: "Sep 2019" },
  {
    title: "Diseño de una aplicación móvil",
    issuer: "Domestika",
    date: "Ago 2019",
  },
  { title: "Diseña una App deliciosa", issuer: "Domestika", date: "Dic 2015" },
  { title: "Trainer Certified", issuer: "480interactive", date: "Ago 2015" },
];
