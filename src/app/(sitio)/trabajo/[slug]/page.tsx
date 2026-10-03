import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CONTENEDOR, Enlace, SECCION } from "@/components/v3/ui";
import { imagenesDeCaso } from "@/lib/casos-imagenes";
import { casos, casoPorSlug } from "@/data/v3";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return casos.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const caso = casoPorSlug(slug);
  if (!caso) return {};
  return {
    title: caso.titulo,
    description: caso.resumen,
    // Sin esto la ficha hereda el canonical "/" del layout raíz y le dice a
    // Google que es un duplicado de la portada.
    alternates: { canonical: `/trabajo/${caso.slug}` },
  };
}

export default async function CasoPage({ params }: Props) {
  const { slug } = await params;
  const caso = casoPorSlug(slug);
  if (!caso) notFound();

  const i = casos.findIndex((c) => c.slug === caso.slug);
  const anterior = casos[(i - 1 + casos.length) % casos.length];
  const siguiente = casos[(i + 1) % casos.length];
  const hayCaso = Boolean(caso.reto || caso.proceso?.length || caso.resultado);
  // Lo que haya en public/v3/casos/<slug>/ manda; `imagenes` en los datos
  // sirve para casos puntuales con texto alternativo ya escrito.
  const imagenes = caso.imagenes?.length
    ? caso.imagenes.map((i) => ({ ...i, width: 1312, height: 820 }))
    : imagenesDeCaso(caso.slug, caso.titulo);

  const meta = [
    ["Cliente", caso.cliente],
    ["Año", caso.año],
    ["Mi papel", caso.rol],
    ["Equipo", caso.equipo],
  ].filter(([, v]) => v) as [string, string][];

  return (
    <>
      <header className={`${SECCION} pt-10 pb-16 lg:pt-14`}>
        <div className={`${CONTENEDOR} flex flex-col gap-10`}>
          <Link
            href="/#trabajo"
            className="v3-label w-fit text-c-muted transition-colors duration-150 hover:text-c-fg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-c-accent"
          >
            ← Casos seleccionados
          </Link>

          <div className="flex flex-col gap-4">
            <p className="v3-eyebrow text-c-accent">{caso.tag}</p>
            <h1 className="v3-h2 max-w-[20ch] text-balance">{caso.titulo}</h1>
            <p className="v3-lead max-w-[40ch] text-pretty text-c-muted">
              {caso.resumen}
            </p>
          </div>

          {meta.length > 0 && (
            <dl className="grid grid-cols-2 gap-x-6 gap-y-6 border-t border-c-line pt-8 lg:grid-cols-4">
              {meta.map(([k, v]) => (
                <div key={k} className="flex flex-col gap-1.5">
                  <dt className="v3-body-sm text-c-muted">{k}</dt>
                  <dd className="v3-label">{v}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </header>

      <section className={`${SECCION} pb-16`}>
        <div className={CONTENEDOR}>
          {imagenes.length ? (
            <ul className="flex flex-col gap-6">
              {imagenes.map((img, i) => (
                <li key={img.src}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    priority={i === 0}
                    sizes="(max-width: 1024px) 100vw, 1312px"
                    className="h-auto w-full rounded-3xl border border-c-line"
                  />
                </li>
              ))}
            </ul>
          ) : (
            // Sin imágenes todavía: se usa el número del caso como marca visual,
            // el mismo recurso que la tarjeta, en vez de un hueco vacío.
            <div className="flex h-[280px] items-end rounded-3xl border border-c-line bg-c-surface p-8 lg:h-[420px]">
              <span aria-hidden className="v3-display text-c-line">
                {caso.n}
              </span>
            </div>
          )}
        </div>
      </section>

      <section className={`${SECCION} pb-20 lg:pb-28`}>
        <div className={`${CONTENEDOR} flex flex-col gap-12`}>
          {hayCaso ? (
            <div className="grid gap-12 lg:grid-cols-[320px_1fr] lg:gap-16">
              {caso.reto && (
                <>
                  <h2 className="v3-title text-c-accent">El reto</h2>
                  <p className="v3-body max-w-[50ch] text-pretty text-c-muted">
                    {caso.reto}
                  </p>
                </>
              )}
              {caso.proceso?.length ? (
                <>
                  <h2 className="v3-title text-c-accent">El proceso</h2>
                  <ol className="flex max-w-[50ch] flex-col gap-4">
                    {caso.proceso.map((paso, n) => (
                      <li key={paso} className="flex gap-4">
                        <span className="v3-body-sm shrink-0 text-c-faint tabular-nums">
                          {String(n + 1).padStart(2, "0")}
                        </span>
                        <span className="v3-body text-pretty text-c-muted">
                          {paso}
                        </span>
                      </li>
                    ))}
                  </ol>
                </>
              ) : null}
              {caso.resultado && (
                <>
                  <h2 className="v3-title text-c-accent">El resultado</h2>
                  <p className="v3-body max-w-[50ch] text-pretty text-c-muted">
                    {caso.resultado}
                  </p>
                </>
              )}
            </div>
          ) : (
            <div className="max-w-[60ch] rounded-3xl border border-c-line bg-c-surface p-8">
              <h2 className="v3-title">Caso de estudio en preparación</h2>
              <p className="v3-body mt-3 text-pretty text-c-muted">
                Estoy escribiendo el reto, el proceso y el resultado de este
                proyecto. Mientras tanto, las piezas están publicadas en
                Behance.
              </p>
            </div>
          )}

          {caso.behance && (
            <p className="v3-body-sm text-c-muted">
              <Enlace href={caso.behance} external className="text-c-accent">
                Ver {caso.titulo} en Behance
              </Enlace>
            </p>
          )}
        </div>
      </section>

      <nav
        aria-label="Más casos"
        className={`${SECCION} border-t border-c-line py-10`}
      >
        <div className={`${CONTENEDOR} flex flex-wrap justify-between gap-6`}>
          <Link
            href={`/trabajo/${anterior.slug}`}
            className="group flex max-w-[45%] flex-col gap-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-c-accent"
          >
            <span className="v3-body-sm text-c-muted">← Anterior</span>
            <span className="v3-label text-pretty transition-colors duration-150 group-hover:text-c-accent">
              {anterior.titulo}
            </span>
          </Link>
          <Link
            href={`/trabajo/${siguiente.slug}`}
            className="group flex max-w-[45%] flex-col gap-1 text-right focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-c-accent"
          >
            <span className="v3-body-sm text-c-muted">Siguiente →</span>
            <span className="v3-label text-pretty transition-colors duration-150 group-hover:text-c-accent">
              {siguiente.titulo}
            </span>
          </Link>
        </div>
      </nav>
    </>
  );
}
