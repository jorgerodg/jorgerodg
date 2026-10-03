type SectionV2Props = {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
};

/**
 * El número y la etiqueta son antetítulo, no encabezado: el `h2` es el
 * título en serif, para que ningún `h3` de dentro lo supere visualmente.
 */
export default function SectionV2({
  id,
  index,
  eyebrow,
  title,
  children,
}: SectionV2Props) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-t border-line px-6 py-20 sm:scroll-mt-20 sm:px-10 md:py-28"
    >
      <div className="mx-auto w-full max-w-5xl">
        <p className="reveal flex items-center gap-3 text-xs tracking-[0.18em] text-muted uppercase">
          <span className="tabular-nums">{index}</span>
          <span aria-hidden className="h-px w-6 bg-line" />
          <span>{eyebrow}</span>
        </p>
        <h2 className="reveal reveal-2 mt-5 font-display text-3xl tracking-[0.01em] text-balance sm:text-4xl">
          {title}
        </h2>
        <div className="reveal reveal-3 mt-12 md:mt-16">{children}</div>
      </div>
    </section>
  );
}
