import type { MetadataRoute } from "next";
import { SITIO } from "@/data/v3";

export default function robots(): MetadataRoute.Robots {
  return {
    // /cv es la hoja de impresión del PDF: no debe competir con la portada.
    rules: { userAgent: "*", allow: "/", disallow: "/cv" },
    sitemap: `${SITIO}/sitemap.xml`,
  };
}
