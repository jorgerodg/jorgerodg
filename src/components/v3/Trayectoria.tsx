import { Cabecera, CONTENEDOR, SECCION } from "./ui";
import { trayectoria } from "@/data/v3";

export default function Trayectoria() {
  return (
    <section id="trayectoria" className={`scroll-mt-24 pb-24 lg:pb-32 ${SECCION}`}>
      <div className={`${CONTENEDOR} flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-16`}>
        <Cabecera
          eyebrow="Trayectoria"
          titulo="Más de diez años en diseño"
          className="lg:w-[420px] lg:shrink-0"
        />
        <ol className="lg:min-w-0 lg:flex-1">
          {trayectoria.map((t) => (
            <li key={t.empresa} className="v3-revelar border-t border-c-line last:border-b">
              <div className="flex flex-col gap-4 py-8 sm:flex-row sm:gap-8">
                <p className="v3-label shrink-0 text-c-accent sm:w-[150px]">
                  {t.rango}
                </p>
                <div className="flex min-w-0 flex-col gap-3.5">
                  <h3 className="flex flex-wrap items-baseline gap-x-3.5 gap-y-1">
                    <span className="v3-lead">{t.empresa}</span>
                    {t.lugar && (
                      <span className="v3-body-sm text-c-muted">
                        {t.lugar}
                      </span>
                    )}
                  </h3>
                  <div className="flex flex-col gap-[18px]">
                    {t.cargos.map((c) => (
                      <div key={c.titulo} className="flex flex-col gap-1.5">
                        <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                          <span className="v3-label">{c.titulo}</span>
                          <span className="v3-body-sm text-c-muted">{c.periodo}</span>
                        </p>
                        {c.intro && (
                          <p className="v3-body-sm max-w-[50ch] text-pretty text-c-muted">
                            {c.intro}
                          </p>
                        )}
                        {c.vinetas && (
                          <ul className="flex flex-col gap-1">
                            {c.vinetas.map((v) => (
                              <li
                                key={v}
                                className="v3-body-sm max-w-[50ch] text-pretty text-c-muted before:me-1.5 before:content-['•']"
                              >
                                {v}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                  {t.nota && (
                    <p className="v3-body-sm max-w-[50ch] text-pretty text-c-muted">
                      {t.nota}
                    </p>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
