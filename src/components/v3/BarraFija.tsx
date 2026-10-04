import Marca from "./Marca";
import { Boton, CONTENEDOR, Enlace } from "./ui";
import { perfil } from "@/data/v3";

const enlaces = [
  { href: "#trabajo", label: "Trabajo", sec: "trabajo" },
  { href: "#trayectoria", label: "Trayectoria", sec: "trayectoria" },
  { href: "#oficio", label: "Herramientas", sec: "oficio" },
];

/**
 * El menú del diseño vive dentro del hero y se va con el scroll, así que
 * marcar la sección activa allí no serviría de nada. Esta barra aparece
 * cuando el hero termina de salir y lleva el indicador.
 *
 * Es `fixed`, así que si su contenido no cabe no provoca scroll horizontal:
 * simplemente se corta. Por eso en pantallas estrechas se reduce por pasos:
 * primero se va el botón, luego el texto del logo y, por debajo de 360 px,
 * el monograma, para que los tres enlaces quepan siempre.
 */
export default function BarraFija() {
  return (
    <div className="v3-barra no-print fixed inset-x-0 top-0 z-50 border-b border-c-line bg-c-bg/95 backdrop-blur-md">
      <div
        className={`${CONTENEDOR} flex items-center justify-between gap-6 px-6 py-3 sm:px-10 lg:px-16`}
      >
        <Marca />
        <nav aria-label="Secciones">
          <ul className="flex items-center gap-4 sm:gap-7">
            {enlaces.map((l) => (
              <li key={l.href}>
                <Enlace
                  href={l.href}
                  className="v3-nav whitespace-nowrap text-c-muted"
                >
                  <span data-seccion={l.sec}>{l.label}</span>
                </Enlace>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:block">
          <Boton href={`mailto:${perfil.email}`} tono="acento">
            Escríbeme
          </Boton>
        </div>
      </div>
    </div>
  );
}
