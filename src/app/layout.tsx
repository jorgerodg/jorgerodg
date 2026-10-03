import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  certifications,
  education,
  experience,
  profile,
  skills,
} from "@/data/cv";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const title = `${profile.name} — ${profile.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.site),
  title: {
    default: title,
    template: `%s — ${profile.name}`,
  },
  description: profile.tagline,
  applicationName: profile.name,
  authors: [{ name: profile.name, url: profile.site }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    locale: "es_EC",
    url: "/",
    siteName: profile.name,
    title,
    description: profile.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: profile.tagline,
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
    name: profile.name,
    jobTitle: profile.role,
    description: profile.tagline,
    url: profile.site,
    image: new URL(profile.photo, profile.site).toString(),
    email: `mailto:${profile.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.city,
      addressCountry: profile.country,
    },
    worksFor: { "@type": "Organization", name: experience[0].company },
    alumniOf: education.map((item) => ({
      "@type": "EducationalOrganization",
      name: item.place,
    })),
    hasCredential: certifications.map((item) => ({
      "@type": "EducationalOccupationalCredential",
      name: item.title,
      recognizedBy: { "@type": "Organization", name: item.issuer },
    })),
    knowsAbout: skills.flatMap((group) => group.items),
    sameAs: [
      profile.linkedin,
      profile.behance,
      profile.dribbble,
      profile.instagram,
    ].filter(Boolean),
  };
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
        />
      </body>
    </html>
  );
}
