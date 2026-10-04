import Image from "next/image";
import { Cabecera, CONTENEDOR, SECCION } from "./ui";
import { oficio } from "@/data/v3";

export default function Oficio() {
  return (
    <section id="oficio" className={`scroll-mt-24 pb-24 lg:pb-32 ${SECCION}`}>
      <div className={`${CONTENEDOR} flex flex-col gap-12`}>
        <Cabecera eyebrow="Herramientas" titulo="Con qué y cómo trabajo" />
        {/* Cinco grupos: tres arriba y dos abajo sobre una rejilla de seis, para
            que la última fila llene el ancho en vez de dejar un hueco. En
            tablet van de dos en dos y el quinto ocupa la fila entera. */}
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {oficio.map((g, i) => (
            <li
              key={g.n}
              className={`v3-revelar flex flex-col gap-5 rounded-3xl border border-c-line bg-c-surface p-6 ${
                i < 3 ? "lg:col-span-2" : "lg:col-span-3"
              } ${i === oficio.length - 1 ? "sm:col-span-2" : ""}`}
            >
              <div className="flex flex-col gap-1.5">
                <span className="v3-body-sm text-c-accent">{g.n}</span>
                <h3 className="v3-title text-balance">{g.titulo}</h3>
              </div>
              <ul className="flex flex-col gap-2.5">
                {g.items.map((i) => (
                  <li key={i.label} className="flex items-center gap-2.5">
                    {i.icono && (
                      <Image src={i.icono} alt="" width={20} height={20} />
                    )}
                    <span className="v3-body-sm text-c-muted">{i.label}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
