import { Boton, CONTENEDOR, SECCION } from "./ui";
import { perfil, sobreMi } from "@/data/v3";

export default function Perfil() {
  return (
    <section id="perfil" className={`scroll-mt-24 py-24 lg:py-32 ${SECCION}`}>
      <div className={`${CONTENEDOR} grid gap-14 lg:grid-cols-2 lg:gap-24`}>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <p className="v3-eyebrow text-c-accent">{sobreMi.eyebrow}</p>
            <h2 className="v3-h2 text-balance">{sobreMi.titulo}</h2>
          </div>
          <div className="flex flex-col gap-4">
            <p className="v3-label text-c-muted">Especialidades</p>
            <ul className="flex flex-wrap gap-2.5">
              {sobreMi.especialidades.map((e) => (
                <li
                  key={e}
                  className="v3-label rounded-full border border-c-line px-4 py-2.5 text-c-fg"
                >
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="v3-revelar v3-revelar-2 flex flex-col gap-10">
          <p className="v3-lead text-balance">{sobreMi.lead}</p>
          <div className="flex flex-col gap-5">
            {sobreMi.parrafos.map((p) => (
              <p
                key={p.slice(0, 24)}
                className="v3-body max-w-[50ch] text-pretty text-c-muted"
              >
                {p}
              </p>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-between gap-6">
            <p className="v3-label">{perfil.puesto}</p>
            <Boton href="#trabajo" tono="acento">
              Ver trabajo
            </Boton>
          </div>
        </div>
      </div>
    </section>
  );
}
