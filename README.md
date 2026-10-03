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

**Todo el texto del sitio vive en `src/data/cv.ts`.** Para actualizar
experiencia, certificados, habilidades o los proyectos del portafolio,
edita ese archivo: no hace falta tocar ningún componente.

| Archivo | Qué contiene |
|---|---|
| `src/data/cv.ts` | Todo el contenido: perfil, proyectos, experiencia, habilidades, formación |
| `src/app/globals.css` | Tokens de color (claro y oscuro) y tipografía base |
| `src/components/` | Un componente por sección |
| `public/cv-jorge-rodriguez.pdf` | El CV descargable (exportado de Figma) |
| `public/jorge-rodriguez-retrato.jpg` | Foto de perfil |
| `public/curve.svg` | La curva decorativa del CV, reutilizada como firma |

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

- [ ] **Verificar los 6 enlaces de Behance** en `projects` (`src/data/cv.ts`).
      Se extrajeron del perfil público, pero Behance bloquea las peticiones
      automatizadas y no se pudieron comprobar uno por uno.
- [ ] Añadir una imagen de portada por proyecto en `public/` y mostrarla en
      lugar del recuadro "Ver caso" (`src/components/Work.tsx`)
- [ ] Reescribir los `summary` de cada proyecto: hoy son descripciones neutras
      derivadas del título, no casos de estudio
- [ ] Revisar el texto de `profile.intro` para que suene a ti
- [ ] Decidir si se conserva `profile.location` en el pie
- [ ] Decidir sobre `profile.whatsapp`: el enlace `wa.me` publica el número
      de teléfono en la URL. Bórralo de `cv.ts` y de `ContactChoice.tsx`
      si prefieres no exponerlo

## Diseño

Parte del CV en Figma (`pJuXRkK8YDeOJDkw9ylDjV`, frame "Jorge Rodriguez CV UI").
Se conservan la paleta monocroma, la regla de 30px bajo cada título de sección
y la curva superior. El layout de dos columnas de impresión se reconstruyó en
secciones responsivas; el formato original sigue disponible como PDF descargable.
