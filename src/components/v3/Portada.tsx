import Image from "next/image";
import { Boton, CONTENEDOR, Enlace } from "./ui";
import Marca from "./Marca";
import { marcas, perfil, servicios } from "@/data/v3";

const enlaces = [
  { href: "#trabajo", label: "Trabajo" },
  { href: "#trayectoria", label: "Trayectoria" },
  { href: "#oficio", label: "Herramientas" },
];

export default function Portada() {
  return (
    <section id="inicio" className="overflow-hidden rounded-b-[48px] bg-c-surface">
      {/* Tres bloques repartidos en vertical: barra arriba, titular al centro
          alto y servicios al pie, como en el diseño. */}
      <div className="v3-sobre-acento relative flex min-h-[620px] flex-col justify-between gap-16 overflow-hidden rounded-b-[48px] bg-c-accent px-6 pt-8 pb-14 sm:px-10 lg:min-h-[820px] lg:gap-0 lg:px-16">
        {/* El retrato va en multiply sobre la arena: es lo que lo tiñe de sepia.
            Solo se muestra desde lg. En móvil y tablet tapaba el texto y el
            banner funciona mejor limpio; al ir sin `priority` y oculto, esos
            dispositivos ni siquiera lo descargan.
            La foto es un plano medio ya recortado: blanco y negro, fondo blanco
            (que en multiply queda arena) y volteada en horizontal. El ancho y
            la posición viven en `.v3-retrato` (v3.css), con sus cuentas. */}
        <Image
          src={perfil.retrato}
          alt={`Retrato de ${perfil.nombre}`}
          width={1097}
          height={1514}
          sizes="(min-width: 1440px) 643px, (min-width: 1210px) 45vw, 540px"
          className="v3-retrato pointer-events-none absolute top-[72px] hidden h-auto max-w-none mix-blend-multiply lg:block"
        />

        {/* Por debajo de lg no hay foto: este velo repone el tono que aportan
            los degradados en escritorio, para que el banner sea el mismo color
            en todos los tamaños. El texto en tinta queda en 10:1 igualmente. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-c-velo/[0.27] lg:hidden"
        />
        {/* Primero el de abajo y encima el de la derecha: así la esquina
            inferior derecha conserva el velo y no aparece una L más clara. */}
        <div aria-hidden className="v3-velo-abajo pointer-events-none absolute inset-0" />
        <div aria-hidden className="v3-velo-der pointer-events-none absolute inset-0" />
        <div aria-hidden className="v3-velo-arriba pointer-events-none absolute inset-x-0 top-0 h-[220px]" />

        <div className={`relative ${CONTENEDOR}`}>
          <nav
            aria-label="Principal"
            className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 text-c-on-hero"
          >
            <Marca sobre="acento" className="order-1" />
            {/* En móvil la marca y el botón comparten la primera fila y los
                enlaces bajan a la suya; así ninguno se recorta. */}
            <div className="order-2 sm:order-3">
              <Boton href={`mailto:${perfil.email}`}>Escríbeme</Boton>
            </div>
            <ul className="order-3 flex w-full items-center gap-8 sm:order-2 sm:ms-auto sm:me-10 sm:w-auto">
              {enlaces.map((l) => (
                <li key={l.href}>
                  <Enlace href={l.href} className="v3-nav whitespace-nowrap">
                    {l.label}
                  </Enlace>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={`relative ${CONTENEDOR}`}>
          {/* Solo saludo y titular: la frase y el resumen viven en «Sobre mí»,
              para que el banner respire y gane la foto. */}
          <div className="text-c-on-hero">
            <p className="v3-lead">{perfil.saludo}</p>
            <h1 className="v3-display mt-3">
              {perfil.titularA}
              <br />
              {perfil.titularB}
            </h1>
          </div>
        </div>

        <div className={`relative ${CONTENEDOR}`}>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-6 text-c-on-hero lg:grid-cols-4">
            {servicios.map((s) => (
              <li key={s.n} className="flex flex-col gap-1.5">
                <span className="v3-body-sm opacity-80">{s.n}</span>
                <span className="v3-label">{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Marcas />
    </section>
  );
}

function Marcas() {
  return (
    <div
      className={`${CONTENEDOR} flex flex-col gap-6 px-6 py-12 sm:px-10 lg:flex-row lg:items-center lg:gap-16 lg:px-16`}
    >
      <p className="v3-body-sm max-w-[110px] shrink-0 text-c-muted">
        He diseñado para
      </p>
      <div className="v3-marquee relative min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_5%,#000_95%,transparent)]">
        <ul className="v3-marquee-track flex w-max items-center gap-14">
          {[...marcas, ...marcas].map((m, i) => (
            <li
              key={`${m}-${i}`}
              className="v3-title whitespace-nowrap text-c-fg"
              aria-hidden={i >= marcas.length}
            >
              {m}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
