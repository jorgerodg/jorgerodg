import type { NextConfig } from "next";

const enDesarrollo = process.env.NODE_ENV === "development";

/**
 * Política de seguridad de contenido: de dónde puede cargar cosas la página.
 * Todo lo que usa el sitio es propio (scripts, estilos, fuentes, imágenes y la
 * analítica de Vercel, que se sirve desde el mismo dominio), así que basta con
 * `'self'` y no se autoriza ningún servidor externo.
 *
 * `'unsafe-inline'` en los scripts es inevitable aquí: Next arranca la página
 * con scripts en línea, y la alternativa (un nonce por visita) obligaría a
 * generar cada página en el momento en vez de servirla ya hecha. Es el ajuste
 * que recomienda la documentación de Next para sitios estáticos.
 *
 * No lleva `upgrade-insecure-requests`: Vercel ya fuerza HTTPS con HSTS y no
 * hay ningún recurso externo que subir de http a https; añadirlo rompería las
 * pruebas en http://localhost, incluida la exportación del CV.
 *
 * En desarrollo se abren tres cosas que solo existen ahí: `eval` (recarga en
 * caliente), el script de depuración de la analítica y el websocket de Next.
 */
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${
    enDesarrollo ? " 'unsafe-eval' https://va.vercel-scripts.com" : ""
  }`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' blob: data:",
  "font-src 'self'",
  `connect-src 'self'${enDesarrollo ? " ws: wss:" : ""}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join("; ");

const cabecerasDeSeguridad = [
  { key: "Content-Security-Policy", value: csp },
  // Que el navegador no adivine el tipo de un archivo: se fía del declarado.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Nadie puede incrustar el sitio dentro de otra página (clickjacking).
  // Repite `frame-ancestors` para los navegadores que aún no lo entienden.
  { key: "X-Frame-Options", value: "DENY" },
  // Al salir hacia otro sitio solo se comparte el dominio, no la página exacta.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // El sitio no usa cámara, micrófono ni ubicación: se le niegan de entrada.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  // Las pestañas abiertas desde otro sitio no pueden manipular esta.
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/(.*)", headers: cabecerasDeSeguridad }];
  },
};

export default nextConfig;
