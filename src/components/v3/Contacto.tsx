import { Boton, CONTENEDOR, Enlace } from "./ui";
import { perfil } from "@/data/v3";

const redes = [
  { label: "LinkedIn", href: perfil.linkedin },
  { label: "Behance", href: perfil.behance },
  { label: "Dribbble", href: perfil.dribbble },
  { label: "Instagram", href: perfil.instagram },
];

export default function Contacto() {
  const año = new Date().getFullYear();

  return (
    <footer id="contacto" className="scroll-mt-24 px-6 pb-6">
      <div className="rounded-[48px] bg-c-accent px-6 pt-16 pb-10 text-c-on-accent sm:px-10 lg:px-16 lg:pt-24">
        <div className={`${CONTENEDOR} flex flex-col gap-10`}>
          <p className="v3-eyebrow">Contacto</p>
          <h2 className="v3-contacto max-w-[1040px] text-balance">
            ¿Tienes un producto que necesita claridad?
          </h2>
          <div className="flex flex-wrap items-center gap-x-7 gap-y-5">
            <Boton href={`mailto:${perfil.email}`}>Escríbeme</Boton>
            <Enlace href={`mailto:${perfil.email}`} className="v3-lead">
              {perfil.email}
            </Enlace>
          </div>

          <div className="flex flex-col gap-6 pt-14">
            <div aria-hidden className="h-px w-full bg-c-on-accent opacity-25" />
            <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
              <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
                {redes.map((r) => (
                  <li key={r.label}>
                    <Enlace href={r.href} external className="v3-label">
                      {r.label}
                    </Enlace>
                  </li>
                ))}
                <li>
                  <Enlace href={perfil.cv} download className="v3-label">
                    Descargar CV
                  </Enlace>
                </li>
              </ul>
              <p className="v3-body-sm">
                © {año} {perfil.nombre} · {perfil.ciudad}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
