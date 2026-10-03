# Imágenes de los casos

Copia aquí las pantallas de cada proyecto, una carpeta por caso:

```
public/v3/casos/
  banco-pichincha/   01-portada.png  02-flujo.png  …
  link-app/
  usame-app/
  claro-tips/
  bellissima/
  asi-ecuador-covid/
```

No hay que tocar código. Al construir, cada ficha recoge los archivos de su
carpeta **por orden alfabético** (por eso conviene numerarlos: `01-`, `02-`…)
y la primera pasa a ser la portada de la tarjeta en la sección de trabajo.

Formatos: PNG, JPG, WebP, AVIF o GIF. De PNG y JPG se lee el tamaño real
para no deformar la imagen ni provocar saltos de maquetación.

El texto alternativo se genera como «<título del caso> — imagen N».
Merece la pena reescribirlo en `src/data/v3.ts` describiendo lo que se ve:
es lo que oye quien navega con lector de pantalla.
