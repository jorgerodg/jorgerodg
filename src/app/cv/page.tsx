import Image from "next/image";
import {
  certificados,
  educacion,
  oficio,
  perfil,
  sobreMi,
  trayectoria,
} from "@/data/v3";

/**
 * El CV se genera desde los mismos datos que la web (`src/data/v3.ts`), así
 * que no puede volver a quedarse desfasado: se actualiza el dato y se vuelve
 * a exportar el PDF.
 */
export default function CvPage() {
  // Con `href`, el dato sale como enlace y el PDF lo conserva pulsable.
  const contacto: { texto: string; href?: string }[] = [
    { texto: perfil.email, href: `mailto:${perfil.email}` },
    {
      texto: `wa.me/${perfil.whatsapp}`,
      href: `https://wa.me/${perfil.whatsapp}`,
    },
    ...[perfil.linkedin, perfil.behance, perfil.dribbble, perfil.instagram].map(
      // Se muestra la dirección sin protocolo ni «www.», como se leería en papel.
      (url) => ({ texto: url.replace(/^https?:\/\/(www\.)?/, ""), href: url }),
    ),
  ];

  return (
    <main className="cv-hoja">
      <header className="flex items-start justify-between gap-8">
        <div className="flex-1">
          <h1 className="cv-nombre">{perfil.nombre}</h1>
          <p className="cv-puesto mt-1">{perfil.puesto}</p>
          <ul className="cv-meta mt-3 flex flex-wrap gap-x-4 gap-y-1">
            {contacto.map((c) => (
              <li key={c.texto}>
                {c.href ? (
                  <a href={c.href} className="cv-enlace">
                    {c.texto}
                  </a>
                ) : (
                  c.texto
                )}
              </li>
            ))}
          </ul>
        </div>
        {/* El retrato ya viene recortado a cabeza y hombros con la proporción
            de la caja. Va sin optimizar para que el PDF incruste el archivo
            tal cual y no una versión reducida. */}
        <Image
          src={perfil.retratoCv}
          alt=""
          width={332}
          height={434}
          unoptimized
          className="h-[34mm] w-[26mm] shrink-0 rounded-[2mm] object-cover"
        />
      </header>

      <section className="mt-7">
        <h2 className="cv-seccion">Perfil</h2>
        <div className="cv-filete mt-2 pt-3">
          <p className="cv-suave max-w-[150mm]">{sobreMi.parrafos[0]}</p>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {sobreMi.especialidades.map((e) => (
              <li key={e} className="cv-chip">
                {e}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="cv-seccion">Experiencia</h2>
        <ol className="cv-filete mt-2 pt-1">
          {trayectoria.map((t) => (
            <li key={t.empresa} className="cv-junto grid grid-cols-[30mm_1fr] gap-x-4 py-3">
              <p className="cv-meta pt-[1mm]">{t.rango}</p>
              <div>
                <h3 className="cv-empresa">
                  {t.empresa}
                  {t.lugar && (
                    <span className="cv-meta ms-2 font-normal">{t.lugar}</span>
                  )}
                </h3>
                <div className="mt-1.5 flex flex-col gap-2">
                  {t.cargos.map((c) => (
                    <div key={c.titulo}>
                      <p>
                        <span className="cv-cargo">{c.titulo}</span>
                        <span className="cv-meta ms-2">{c.periodo}</span>
                      </p>
                      {c.intro && (
                        <p className="cv-suave mt-0.5 max-w-[140mm]">{c.intro}</p>
                      )}
                      {c.vinetas && (
                        <ul className="cv-suave mt-0.5 max-w-[140mm]">
                          {c.vinetas.map((v) => (
                            <li key={v} className="before:me-1.5 before:content-['•']">
                              {v}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                  {t.nota && <p className="cv-suave max-w-[140mm]">{t.nota}</p>}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-6">
        <h2 className="cv-seccion">Educación</h2>
        <ol className="cv-filete mt-2 pt-1">
          {educacion.map((e) => (
            <li key={e.titulo} className="cv-junto grid grid-cols-[30mm_1fr] gap-x-4 py-2.5">
              <p className="cv-meta pt-[0.5mm]">{e.periodo}</p>
              <div>
                <h3 className="cv-cargo">{e.titulo}</h3>
                <p className="cv-suave">{e.institucion}</p>
                {e.detalle && <p className="cv-meta">{e.detalle}</p>}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-6">
        <h2 className="cv-seccion">Certificados</h2>
        <ol className="cv-filete mt-2 pt-1">
          {certificados.map((c) => (
            <li key={c.titulo} className="cv-junto grid grid-cols-[30mm_1fr] gap-x-4 py-[1.6mm]">
              <p className="cv-meta pt-[0.4mm]">{c.fecha}</p>
              <div>
                <h3 className="cv-cargo">{c.titulo}</h3>
                <p className="cv-meta cv-romper">
                  {c.emisor}
                  {c.id && <span className="ms-1.5">· ID {c.id}</span>}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-6">
        <h2 className="cv-seccion">Herramientas y método</h2>
        <div className="cv-filete mt-2 grid grid-cols-5 gap-x-4 pt-3">
          {oficio.map((g) => (
            <div key={g.titulo} className="cv-junto">
              <h3 className="cv-cargo">{g.titulo}</h3>
              <ul className="cv-suave mt-1">
                {g.items.map((i) => (
                  <li key={i.label}>{i.label}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
