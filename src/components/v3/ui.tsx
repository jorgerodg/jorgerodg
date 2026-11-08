/** Flecha de los botones. Va en línea y con `currentColor`, no como imagen:
 *  así toma el color que le toca en cada estado y nunca queda blanca sobre
 *  un círculo claro. */
export function Flecha({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={16}
      height={16}
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M3 8H13M9 12L13 8L9 4"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * C / Botón — píldora con círculo y flecha.
 * Descrito así en Figma: «Hover: el círculo cambia de color y la flecha gira
 * 45° hacia arriba. Foco: anillo de 2 px».
 *
 * Cada variante fija sus propios pares de color, medidos:
 * - `claro` va sobre el acento (banner y pie): píldora tinta con texto arena
 *   (11,4:1); círculo arena con flecha tinta, que al pasar el cursor pasa a
 *   blanco. El anillo de foco es tinta, porque cae sobre la arena.
 * - `acento` va sobre el fondo oscuro: píldora arena con texto tinta; círculo
 *   tinta con flecha arena, que pasa a blanco con flecha tinta. El anillo de
 *   foco es arena, porque cae sobre el fondo.
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
  const estilos =
    tono === "claro"
      ? {
          base: "bg-c-on-accent text-c-accent focus-visible:outline-c-on-accent",
          circulo: "bg-c-accent text-c-on-accent group-hover:bg-c-fg",
        }
      : {
          base: "bg-c-accent text-c-on-accent focus-visible:outline-c-accent",
          circulo: "bg-c-on-accent text-c-accent group-hover:bg-c-fg group-hover:text-c-on-accent",
        };
  return (
    <a
      href={href}
      download={download}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={`group inline-flex shrink-0 items-center gap-3.5 rounded-full py-1.5 ps-[22px] pe-1.5 transition-[scale] duration-150 ease-[cubic-bezier(0.2,0,0,1)] active:scale-[0.96] focus-visible:outline-2 focus-visible:outline-offset-4 ${estilos.base}`}
    >
      <span className="v3-label">{children}</span>
      <span
        className={`flex size-9 items-center justify-center rounded-full transition-colors duration-150 ease-[cubic-bezier(0.2,0,0,1)] ${estilos.circulo}`}
      >
        <Flecha className="transition-[rotate] duration-150 ease-[cubic-bezier(0.2,0,0,1)] group-hover:-rotate-45" />
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
