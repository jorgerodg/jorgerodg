import ContactChoice from "@/components/ContactChoice";
import { profile } from "@/data/cv";

const social = [
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Behance", href: profile.behance },
  { label: "Dribbble", href: profile.dribbble },
  { label: "Instagram", href: profile.instagram },
];

export default function ContactV2() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contacto"
      className="scroll-mt-28 border-t border-line px-6 py-20 sm:scroll-mt-20 sm:px-10 md:py-28"
    >
      <div className="mx-auto w-full max-w-5xl">
        <p className="reveal flex items-center gap-3 text-xs tracking-[0.18em] text-muted uppercase">
          <span className="tabular-nums">06</span>
          <span aria-hidden className="h-px w-6 bg-line" />
          <span>Contacto</span>
        </p>
        <h2 className="reveal reveal-2 mt-5 max-w-3xl font-display text-4xl leading-[1.15] tracking-[0.01em] text-balance sm:text-6xl">
          ¿Tienes un producto que necesita claridad?
        </h2>
        <div className="mt-10">
          <ContactChoice />
        </div>
        <ul className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line pt-6">
          {social
            .filter((item) => item.href)
            .map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block py-1 text-sm text-muted transition-colors duration-150 hover:text-fg"
                >
                  {item.label}
                  <span className="sr-only"> (abre en una pestaña nueva)</span>
                </a>
              </li>
            ))}
          <li>
            <a
              href={profile.cv}
              download
              className="block py-1 text-sm text-muted transition-colors duration-150 hover:text-fg"
            >
              Descargar CV
            </a>
          </li>
        </ul>
        <p className="mt-10 text-sm text-muted">
          © {year} {profile.name} · {profile.location}
        </p>
      </div>
    </footer>
  );
}
