# Jorge Rodríguez — Portafolio

Sitio personal de Jorge Rodríguez, Lead UX Designer en Banco del Pacífico.
Presenta su perfil, casos seleccionados, trayectoria, herramientas y formación.

**Sitio publicado:** <https://jorgerodg.vercel.app>

## Características

- **Diseño propio**, llevado a código a partir del archivo de Figma: tema
  oscuro, acento naranja y tipografía Outfit.
- **Adaptable** de 320 px a pantallas grandes, sin desplazamiento horizontal.
- **Accesible**: contraste AA, navegación completa por teclado, enlace para
  saltar al contenido y respeto de la preferencia de movimiento reducido.
- **Efectos de scroll en CSS**, sin JavaScript: revelado de secciones e
  indicador de la sección activa en el menú.
- **Una página por caso de estudio**, generada de forma estática.
- **CV en PDF** generado a partir de los mismos datos que la web, con texto
  seleccionable y legible por sistemas de selección de personal.
- **SEO**: metadatos Open Graph, datos estructurados (schema.org), sitemap y
  `robots.txt`.

## Tecnología

| | |
|---|---|
| Framework | Next.js 16 (App Router) |
| Interfaz | React 19 y TypeScript |
| Estilos | Tailwind CSS 4 |
| Publicación | Vercel, con despliegue automático desde `main` |

## Estructura

| Ruta | Contenido |
|---|---|
| `src/data/v3.ts` | Todo el contenido del sitio: perfil, casos, trayectoria, herramientas y formación |
| `src/app/(sitio)/` | Portada (`/`) y páginas de caso (`/trabajo/<slug>`) |
| `src/app/cv/` | Hoja de impresión de la que se exporta el CV |
| `src/components/v3/` | Un componente por sección |
| `public/v3/` | Logo, retratos, iconos e imágenes de los casos |
| `src/app/icon.png`, `apple-icon.png` | Favicon e icono para móviles |

El contenido está separado de la presentación: para actualizar un dato basta
con editar `src/data/v3.ts`, y el cambio se refleja en la web y en el CV.

## Desarrollo

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # compilación de producción
npm run lint    # análisis estático
```

## Mantenimiento

**Imágenes de un caso.** Se copian en `public/v3/casos/<slug>/` y el sitio las
muestra por orden alfabético; la primera pasa a ser la portada de la tarjeta.

**CV en PDF.** Con el servidor de desarrollo en marcha, se abre
<http://localhost:3000/cv>, se imprime como PDF en A4 y se reemplaza
`public/cv-jorge-rodriguez.pdf`.

## Contacto

- LinkedIn: <https://www.linkedin.com/in/jorgerodg>
- Behance: <https://www.behance.net/jorgero_dg>
- Correo: <jorgero@me.com>

---

© Jorge Rodríguez. El código puede consultarse como referencia; el contenido,
los textos y las imágenes no pueden reutilizarse sin autorización.
