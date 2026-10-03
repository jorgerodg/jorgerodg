/** Primer elemento enfocable: salta la barra fija y va al contenido. */
export default function SkipLink() {
  return (
    <a
      href="#contenido"
      className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-bg"
    >
      Saltar al contenido
    </a>
  );
}
