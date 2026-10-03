import type { MetadataRoute } from "next";
import { profile } from "@/data/cv";

export default function robots(): MetadataRoute.Robots {
  return {
    // /v2 es una variante de comparación: no debe competir con la portada
    // en el índice ni generar contenido duplicado.
    rules: { userAgent: "*", allow: "/", disallow: "/v2" },
    sitemap: `${profile.site}/sitemap.xml`,
  };
}
