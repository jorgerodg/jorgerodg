import Image from "next/image";
import { perfil } from "@/data/v3";

/**
 * Logo del sitio: el monograma JR con el nombre de usuario, la variante
 * «Usuario» del tablero «C · Aplicaciones» de Figma.
 *
 * Sobre el naranja del banner va el monograma entero en blanco, como en la
 * «Barra del sitio» del mismo tablero (40 px y texto de título). Sobre fondo
 * oscuro lleva el cuerpo claro y la pata naranja.
 *
 * La animación (entrada y gesto al pasar el cursor) vive en `v3.css`, bajo
 * `.v3-logo`, y se aplica al archivo entero, sin trocear el dibujo.
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
      <Image
        src={enBanner ? "/v3/logo-sobre-naranja.svg" : "/v3/logo.svg"}
        alt=""
        width={lado}
        height={lado}
        // Pesa 1 KB y está arriba del todo: se pide ya, para que la animación
        // de entrada no empiece antes de que exista la imagen.
        loading="eager"
      />
      {/* En la barra fija el texto se oculta a la vista por debajo de 480 px,
          donde no cabe junto a los tres enlaces; sigue ahí para lectores de
          pantalla, porque el monograma solo no le da nombre al enlace. */}
      <span className={enBanner ? "v3-title" : "v3-label max-[479px]:sr-only"}>
        {perfil.marca}
      </span>
    </a>
  );
}
