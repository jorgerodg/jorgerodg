import type { Metadata } from "next";
import "./globals.css";
import {
  certificados,
  educacion,
  oficio,
  perfil,
  SITIO,
  trayectoria,
} from "@/data/v3";

const puesto = perfil.puesto.split(" en ")[0];
const title = `${perfil.nombre} — ${puesto}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITIO),
  title: {
    default: title,
    template: `%s — ${perfil.nombre}`,
  },
  description: perfil.frase,
  applicationName: perfil.nombre,
  authors: [{ name: perfil.nombre, url: SITIO }],
  creator: perfil.nombre,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    locale: "es_LA",
    url: "/",
    siteName: perfil.nombre,
    title,
    description: perfil.frase,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: perfil.frase,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

/** Datos estructurados: permiten a Google mostrar puesto, empresa y perfiles. */
function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: perfil.nombre,
    jobTitle: puesto,
    description: perfil.frase,
    url: SITIO,
    image: new URL(perfil.retrato, SITIO).toString(),
    email: `mailto:${perfil.email}`,
    worksFor: { "@type": "Organization", name: trayectoria[0].empresa },
    alumniOf: educacion.map((e) => ({
      "@type": "EducationalOrganization",
      name: e.institucion,
    })),
    hasCredential: certificados.map((c) => ({
      "@type": "EducationalOccupationalCredential",
      name: c.titulo,
      recognizedBy: { "@type": "Organization", name: c.emisor },
    })),
    knowsAbout: oficio.flatMap((g) => g.items.map((i) => i.label)),
    sameAs: [
      perfil.linkedin,
      perfil.behance,
      perfil.dribbble,
      perfil.instagram,
    ].filter(Boolean),
  };
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
        />
      </body>
    </html>
  );
}
