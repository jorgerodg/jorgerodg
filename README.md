# jorgerodg — sitio personal

Sitio personal de Jorge Rodríguez (Lead UX Designer). Next.js 16 + React 19 + Tailwind 4.

## Comandos

```bash
npm run dev     # desarrollo en http://localhost:3000
npm run build   # build de producción
npm start       # servir el build
npm run lint    # eslint
```

## Dónde editar qué

**Todo el texto del sitio vive en `src/data/v3.ts`.** Para actualizar
experiencia, certificados, herramientas o los casos, edita ese archivo: no
hace falta tocar ningún componente, y el CV se genera de los mismos datos.

| Ruta | Qué contiene |
|---|---|
| `src/data/v3.ts` | Todo el contenido: perfil, casos, trayectoria, oficio, formación |
| `src/app/(sitio)/` | La web: portada (`/`) y fichas de caso (`/trabajo/<slug>`) |
| `src/app/(sitio)/v3.css` | Escala tipográfica y efectos de scroll |
| `src/app/cv/` | La hoja de impresión de la que sale el PDF |
| `src/app/globals.css` | Tokens de color |
| `src/components/v3/` | Un componente por sección |
| `public/v3/` | Retrato, iconos de herramientas e imágenes de casos |
| `public/v3/casos/<slug>/` | Imágenes de cada caso: se sueltan ahí y aparecen solas |

## Publicación

El sitio se publica en Vercel desde la rama `main` de
`github.com/jorgerodg/jorgerodg`: cada cambio que se sube se despliega solo.
La dirección pública (para el sitemap y las vistas previas al compartir) la
toma de Vercel, así que conectar un dominio propio no requiere tocar código.

## El CV descargable

`public/cv-jorge-rodriguez.pdf` se genera desde los mismos datos que la web
(`src/data/v3.ts`), así que no puede volver a quedarse desfasado respecto al
sitio. Para regenerarlo tras cambiar un dato:

1. `npm run dev`
2. Abrir <http://localhost:3000/cv>
3. Imprimir → Guardar como PDF (la hoja ya trae `@page` A4 y los márgenes)
4. Reemplazar `public/cv-jorge-rodriguez.pdf`

La página `/cv` está marcada `noindex` y va en claro a propósito: el oscuro
del sitio gasta tinta y se imprime sucio.

## Pendientes

- [ ] **Escribir los casos de estudio** (`reto`, `proceso`, `resultado` en
      `casos`, `src/data/v3.ts`). Mientras estén vacíos, cada ficha lo dice.
- [ ] **Añadir las imágenes de cada caso** en `public/v3/casos/<slug>/`
- [ ] **Imagen para compartir** (`src/app/opengraph-image.png`): sigue con el
      diseño claro anterior; rehacerla con el aspecto del sitio actual
- [ ] Conectar un dominio propio en Vercel
- [ ] Verificar los 6 enlaces de Behance: Behance bloquea las peticiones
      automatizadas y no se pudieron comprobar uno por uno

## Diseño

Parte del archivo de Figma `pJuXRkK8YDeOJDkw9ylDjV`, frame "Versión C — Audaz".
Tipografía Outfit, fondo oscuro y acento naranja `#ff5b14`.
