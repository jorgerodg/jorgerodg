import Image from "next/image";

/**
 * C / Botón — píldora con círculo y flecha.
 * Descrito así en Figma: «Hover: el círculo cambia de color y la flecha gira
 * 45° hacia arriba. Foco: anillo de 2 px».
 */
export function Boton({
  children,
  href,
  download,
  external,
  tono = "claro",
}: {
  children: React.ReactNode;
  href: string;
  download?: boolean;
  external?: boolean;
  tono?: "claro" | "acento";
}) {
  const base = tono === "claro" ? "bg-c-on-hero text-c-shade" : "bg-c-accent text-c-on-accent";
  const circulo = tono === "claro" ? "bg-c-accent group-hover:bg-c-shade" : "bg-c-shade group-hover:bg-c-on-hero";
  // La flecha del asset es de trazo blanco. En la variante acento el círculo se
  // aclara al pasar por encima, así que la flecha se invierte para no
  // desaparecer: blanco sobre blanco era invisible.
  const flecha = tono === "acento" ? "group-hover:invert" : "";
  return (
    <a
      href={href}
      download={download}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={`group inline-flex shrink-0 items-center gap-3.5 rounded-full py-1.5 ps-[22px] pe-1.5 transition-[scale] duration-150 ease-[cubic-bezier(0.2,0,0,1)] active:scale-[0.96] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current ${base}`}
    >
      <span className="v3-label">{children}</span>
      <span
        className={`flex size-9 items-center justify-center rounded-full transition-colors duration-150 ease-[cubic-bezier(0.2,0,0,1)] ${circulo}`}
      >
        <Image
          src="/v3/flecha.svg"
          alt=""
          width={16}
          height={16}
          className={`transition-[rotate,filter] duration-150 ease-[cubic-bezier(0.2,0,0,1)] group-hover:-rotate-45 ${flecha}`}
        />
      </span>
      {external && <span className="sr-only">(abre en una pestaña nueva)</span>}
    </a>
  );
}

/**
 * C / Enlace — «Hover: barra inferior de 2 px. Foco: anillo de 2 px».
 * La barra es un pseudo-elemento propio, no `text-decoration`: así puede
 * animar su ancho, que el subrayado nativo no hace de forma fiable.
 */
export function Enlace({
  children,
  href,
  download,
  external,
  className = "",
}: {
  children: React.ReactNode;
  href: string;
  download?: boolean;
  external?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      download={download}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={`relative inline-block after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-150 after:ease-[cubic-bezier(0.2,0,0,1)] after:content-[''] hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current ${className}`}
    >
      {children}
      {external && <span className="sr-only"> (abre en una pestaña nueva)</span>}
    </a>
  );
}

export function Cabecera({
  eyebrow,
  titulo,
  className = "",
}: {
  eyebrow: string;
  titulo: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <p className="v3-revelar v3-eyebrow text-c-accent">{eyebrow}</p>
      <h2 className="v3-revelar v3-revelar-2 v3-h2 text-balance">{titulo}</h2>
    </div>
  );
}

export const CONTENEDOR = "mx-auto w-full max-w-[1312px]";
export const SECCION = "px-6 sm:px-10 lg:px-16";
