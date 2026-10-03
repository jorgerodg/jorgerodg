import type { MetadataRoute } from "next";
import { SITIO } from "@/data/v3";

// Solo la portada. Las fichas de caso entran aquí cuando tengan su caso de
// estudio escrito; mientras digan "en preparación" no aportan nada al índice.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITIO,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
