import fs from "node:fs";
import path from "node:path";

export type ImagenCaso = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

const CARPETA = path.join(process.cwd(), "public", "v3", "casos");
const EXT = new Set([".png", ".jpg", ".jpeg", ".webp", ".avif", ".gif"]);

/**
 * Lee el tamaño real del archivo para poder usar next/image sin deformar ni
 * provocar saltos de maquetación. Se parsean PNG y JPEG, que es lo que sale
 * de cualquier exportación; para otros formatos se devuelve null y la imagen
 * se omite en vez de renderizarse con medidas inventadas.
 */
function medir(archivo: string): { width: number; height: number } | null {
  const buf = fs.readFileSync(archivo);

  // PNG: la cabecera IHDR trae ancho y alto en big-endian.
  if (buf.length > 24 && buf.toString("ascii", 1, 4) === "PNG") {
    return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
  }

  // JPEG: recorrer marcadores hasta un SOF, que es el que lleva las medidas.
  if (buf.length > 4 && buf[0] === 0xff && buf[1] === 0xd8) {
    let i = 2;
    while (i < buf.length - 9) {
      if (buf[i] !== 0xff) {
        i++;
        continue;
      }
      const marcador = buf[i + 1];
      const esSOF =
        marcador >= 0xc0 &&
        marcador <= 0xcf &&
        marcador !== 0xc4 && // tablas Huffman
        marcador !== 0xc8 &&
        marcador !== 0xcc; // definición aritmética
      if (esSOF) {
        return { height: buf.readUInt16BE(i + 5), width: buf.readUInt16BE(i + 7) };
      }
      i += 2 + buf.readUInt16BE(i + 2);
    }
  }

  return null;
}

/**
 * Las imágenes de un caso son, sencillamente, los archivos que haya en
 * `public/v3/casos/<slug>/`, por orden alfabético. No hay que tocar código
 * para añadirlas: basta con copiarlas ahí y volver a construir.
 */
export function imagenesDeCaso(slug: string, titulo: string): ImagenCaso[] {
  const dir = path.join(CARPETA, slug);
  let archivos: string[];
  try {
    archivos = fs.readdirSync(dir);
  } catch {
    return [];
  }

  return archivos
    .filter((f) => EXT.has(path.extname(f).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, "es", { numeric: true }))
    .flatMap((f, i) => {
      const medidas = medir(path.join(dir, f));
      if (!medidas) return [];
      return [
        {
          src: `/v3/casos/${slug}/${f}`,
          ...medidas,
          // Texto alternativo de partida. Conviene reescribirlo describiendo
          // lo que se ve: es lo que oye quien usa lector de pantalla.
          alt: `${titulo} — imagen ${i + 1}`,
        },
      ];
    });
}
