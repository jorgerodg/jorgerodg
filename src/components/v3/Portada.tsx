import Image from "next/image";
import { Boton, CONTENEDOR, Enlace } from "./ui";
import { marcas, perfil, servicios } from "@/data/v3";

const enlaces = [
  { href: "#trabajo", label: "Trabajo" },
  { href: "#trayectoria", label: "Trayectoria" },
  { href: "#oficio", label: "Oficio" },
];

export default function Portada() {
  return (
    <section id="inicio" className="overflow-hidden rounded-b-[48px] bg-c-surface">
      {/* Tres bloques repartidos en vertical: barra arriba, titular al centro
          alto y servicios al pie, como en el diseño. */}
      <div className="relative flex min-h-[620px] flex-col justify-between gap-16 overflow-hidden rounded-b-[48px] bg-c-accent px-6 pt-8 pb-14 sm:px-10 lg:min-h-[820px] lg:gap-0 lg:px-16">
        {/* El retrato va en multiply sobre el naranja: es lo que tiñe la foto.
            En escritorio se reproduce su encuadre exacto: el diseño lo sube 480px
            sobre una imagen de 2000 de alto, o sea un 24 % de su propia altura.
            Va como translate y no como `top` en píxeles: con un valor fijo, a
            1024px la imagen es menor y el recorte se comía la cabeza.
            Por debajo de lg se le da más alto que al contenedor para que el
            recorte amplíe al sujeto en vez de encajarlo entero y diminuto. */}
        <Image
          src={perfil.retrato}
          alt={`Retrato de ${perfil.nombre}`}
          width={1500}
          height={2000}
          priority
          sizes="(max-width: 1024px) 100vw, 1500px"
          className="pointer-events-none absolute top-0 left-[-25%] h-[190%] w-[150%] max-w-none object-cover object-[70%_12%] mix-blend-multiply sm:left-[-10%] sm:h-[150%] sm:w-[120%] sm:object-[65%_14%] lg:top-0 lg:left-0 lg:h-auto lg:w-[104.1667%] lg:-translate-y-[24%] lg:object-fill lg:object-center"
        />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(22,8,4,0) 0%, rgba(22,8,4,0.05) 50%, rgba(22,8,4,0.72) 78%, rgba(22,8,4,0.94) 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(22,8,4,0) 0%, rgba(22,8,4,0) 50%, rgba(22,8,4,0.78) 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[220px]"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(22,8,4,0.42) 0%, rgba(22,8,4,0) 100%)",
          }}
        />

        <div className={`relative ${CONTENEDOR}`}>
          <nav
            aria-label="Principal"
            className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 text-c-on-hero"
          >
            <a href="#inicio" className="v3-wordmark order-1">
              {perfil.nombre}
            </a>
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
          <div className="flex flex-col gap-10 text-c-on-hero lg:flex-row lg:items-start lg:justify-between lg:gap-16">
            <div>
              <p className="v3-lead">{perfil.saludo}</p>
              <h1 className="v3-display mt-3">
                {perfil.titularA}
                <br />
                {perfil.titularB}
              </h1>
            </div>
            <div className="flex max-w-[348px] flex-col gap-4 lg:pt-[70px]">
              <p className="v3-lead text-balance">{perfil.frase}</p>
              <p className="v3-body-sm text-pretty opacity-80">{perfil.resumen}</p>
            </div>
          </div>
        </div>

        <div className={`relative ${CONTENEDOR}`}>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-6 text-c-on-hero lg:grid-cols-4">
            {servicios.map((s) => (
              <li key={s.n} className="flex flex-col gap-1.5">
                <span className="v3-body-sm opacity-70">{s.n}</span>
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
