import { Cabecera, CONTENEDOR, Enlace, SECCION } from "./ui";
import { certificados, educacion } from "@/data/v3";

export default function Formacion() {
  return (
    <section id="formacion" className={`scroll-mt-24 pb-24 lg:pb-32 ${SECCION}`}>
      <div className={`${CONTENEDOR} flex flex-col gap-12`}>
        <Cabecera eyebrow="Formación" titulo="Estudios y certificados" />
        <div className="v3-revelar v3-revelar-3 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="v3-lead pb-5">Educación</h3>
            <ol>
              {educacion.map((e) => (
                <li key={e.titulo} className="border-t border-c-line last:border-b">
                  <div className="flex flex-col gap-1.5 py-6">
                    <p className="v3-label text-c-accent">{e.periodo}</p>
                    <h4 className="v3-title text-balance">{e.titulo}</h4>
                    <p className="v3-body-sm text-c-muted">{e.institucion}</p>
                    {e.detalle && (
                      <p className="v3-body-sm text-pretty text-c-muted">
                        {e.detalle}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="v3-lead pb-5">Certificados</h3>
            <ol>
              {certificados.map((c) => (
                <li key={c.titulo} className="border-t border-c-line last:border-b">
                  <div className="flex flex-col gap-3 py-[18px] sm:flex-row sm:gap-6">
                    <p className="v3-body-sm shrink-0 text-c-muted sm:w-[88px]">
                      {c.fecha}
                    </p>
                    <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                      <h4 className="v3-label text-pretty">{c.titulo}</h4>
                      <p className="v3-body-sm v3-romper flex flex-wrap gap-x-2">
                        <span className="text-c-muted">{c.emisor}</span>
                        {c.id && (
                          <span className="text-c-faint">· ID {c.id}</span>
                        )}
                      </p>
                    </div>
                    {c.href && (
                      <Enlace
                        href={c.href}
                        external
                        className="v3-label shrink-0 self-start text-c-accent"
                      >
                        Ver certificado
                      </Enlace>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
