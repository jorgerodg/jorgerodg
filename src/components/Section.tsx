type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

/** Título de sección con la regla de 30px del CV original. */
export default function Section({
  id,
  title,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-28 border-t border-line px-6 py-16 sm:scroll-mt-20 sm:px-10 md:py-24 ${className}`}
    >
      <div className="mx-auto w-full max-w-5xl">
        <h2 className="text-base font-semibold tracking-tight">{title}</h2>
        <div aria-hidden className="mt-2 h-px w-[30px] bg-fg" />
        <div className="mt-10 md:mt-14">{children}</div>
      </div>
    </section>
  );
}
