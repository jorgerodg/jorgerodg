import Image from "next/image";
import Link from "next/link";
import { Cabecera, CONTENEDOR, SECCION } from "./ui";
import { imagenesDeCaso } from "@/lib/casos-imagenes";
import { casos } from "@/data/v3";

export default function Trabajo() {
  return (
    <section id="trabajo" className={`scroll-mt-24 py-24 lg:py-32 ${SECCION}`}>
      <div className={`${CONTENEDOR} flex flex-col gap-12`}>
        <Cabecera eyebrow="Trabajo" titulo="Casos seleccionados" />
        <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {casos.map((c) => {
            // La portada es la primera imagen de public/v3/casos/<slug>/.
            // Mientras no haya ninguna, manda el número como en el diseño.
            const portada = imagenesDeCaso(c.slug, c.titulo)[0];
            return (
              <li key={c.slug} className="v3-revelar">
                <Link
                  href={`/v3/trabajo/${c.slug}`}
                  className="group flex flex-col gap-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-c-accent"
                >
                  <div className="relative flex h-[400px] flex-col justify-between overflow-hidden rounded-3xl border border-c-line bg-c-surface px-6 pt-6 pb-3 transition-colors duration-150 ease-[cubic-bezier(0.2,0,0,1)] group-hover:border-c-accent lg:h-[460px]">
                    {portada && (
                      <Image
                        src={portada.src}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 421px"
                        className="object-cover"
                      />
                    )}
                    <div className="relative flex items-center justify-between gap-3">
                      <span className="v3-label rounded-full bg-c-bg px-3.5 py-2 text-c-fg">
                        {c.tag}
                      </span>
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-c-accent opacity-0 transition-opacity duration-150 ease-[cubic-bezier(0.2,0,0,1)] group-hover:opacity-100 group-focus-visible:opacity-100">
                        <Image
                          src="/v3/flecha.svg"
                          alt=""
                          width={16}
                          height={16}
                          className="-rotate-45"
                        />
                      </span>
                    </div>
                    {!portada && (
                      <span
                        aria-hidden
                        className="v3-display relative text-c-line transition-colors duration-150 ease-[cubic-bezier(0.2,0,0,1)] group-hover:text-c-accent/30"
                      >
                        {c.n}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="v3-title text-balance">{c.titulo}</h3>
                    <p className="v3-body-sm text-pretty text-c-muted">
                      {c.resumen}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
