import { perfil } from "@/data/v3";

/* Trazados del nodo «Logo / C·1 Afinada» de Figma, copiados sin tocar de su
   exportación. Van en línea, y no como archivo de imagen, porque la animación
   mueve las dos piezas por separado: el cuerpo (la J y la R) y la pata de la
   R. Como imagen solo se podría animar el conjunto. */
const CUERPO =
  "M40.5335 9.6001C44.0698 9.6001 47.4612 11.0048 49.9617 13.5053C52.4621 16.0058 53.8669 19.3972 53.8669 22.9334C53.8669 26.4697 52.4621 29.8611 49.9617 32.3616C47.4612 34.862 44.0698 36.2668 40.5335 36.2668H33.8669V40.8001C33.8669 44.3363 32.4621 47.7277 29.9617 50.2282C27.4612 52.7287 24.0697 54.1334 20.5335 54.1334C16.9973 54.1334 13.6059 52.7287 11.1054 50.2282C8.60492 47.7277 7.2002 44.3363 7.2002 40.8001H15.2002C15.2002 42.2146 15.762 43.5713 16.7622 44.5714C17.7624 45.5716 19.119 46.1334 20.5335 46.1334C21.948 46.1334 23.3047 45.5716 24.3049 44.5714C25.3051 43.5713 25.8669 42.2146 25.8669 40.8001V9.6001H40.5335ZM33.8669 28.2668H40.5335C41.948 28.2668 43.3047 27.705 44.3049 26.7048C45.3051 25.7046 45.8669 24.3479 45.8669 22.9334C45.8669 21.5189 45.3051 20.1623 44.3049 19.1621C43.3047 18.1619 41.948 17.6001 40.5335 17.6001H33.8669V28.2668Z";
const PATA = "M33.8667 36.2666H42.9334L53.8667 54.1333H44.8L33.8667 36.2666Z";

/**
 * Logo del sitio: el monograma JR con el nombre de usuario, la variante
 * «Usuario» del tablero «C · Aplicaciones» de Figma.
 *
 * Sobre el naranja del banner va el monograma entero en blanco, como en la
 * «Barra del sitio» del mismo tablero (40 px y texto de título). Sobre fondo
 * oscuro lleva el cuerpo claro y la pata naranja.
 *
 * La animación vive en `v3.css`, bajo `.v3-logo`. Cada pieza va dentro de un
 * `<svg>` anidado que hace de máscara: el cuerpo sube desde su línea base y
 * la pata se desliza por su propia diagonal desde el asa de la R. Las
 * máscaras dejan medio punto de margen por el lado del corte para que, en
 * reposo, el dibujo sea idéntico al del archivo original.
 */
export default function Marca({
  sobre = "oscuro",
  className = "",
}: {
  sobre?: "oscuro" | "naranja";
  className?: string;
}) {
  const enBanner = sobre === "naranja";
  const lado = enBanner ? 40 : 28;
  return (
    <a
      href="#inicio"
      className={`v3-logo shrink-0 items-center ${
        enBanner ? "flex gap-2.5" : "flex gap-2 max-[359px]:hidden"
      } ${className}`}
    >
      <svg
        viewBox="0 0 64 64"
        width={lado}
        height={lado}
        aria-hidden="true"
        className="shrink-0"
      >
        {/* Máscara del cuerpo: corta por abajo, en la línea base (y = 54,13). */}
        <svg x="6.2" y="8.6" width="48.6667" height="46.0334" viewBox="6.2 8.6 48.6667 46.0334">
          <path
            className="v3-logo-cuerpo fill-current"
            fillRule="evenodd"
            clipRule="evenodd"
            d={CUERPO}
          />
        </svg>
        {/* Máscara de la pata: corta por arriba, donde nace del asa (y = 36,27). */}
        <svg x="32.8667" y="35.7666" width="22" height="19.3667" viewBox="32.8667 35.7666 22 19.3667">
          <g className="v3-logo-pata-entrada">
            <path
              className={`v3-logo-pata ${enBanner ? "fill-current" : "fill-c-accent"}`}
              d={PATA}
            />
          </g>
        </svg>
      </svg>
      {/* En la barra fija el texto se oculta a la vista por debajo de 480 px,
          donde no cabe junto a los tres enlaces; sigue ahí para lectores de
          pantalla, porque el monograma solo no le da nombre al enlace. */}
      <span className={enBanner ? "v3-title" : "v3-label max-[479px]:sr-only"}>
        <span className="v3-logo-nombre">
          <span>{perfil.marca}</span>
        </span>
      </span>
    </a>
  );
}
