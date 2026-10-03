import { profile } from "@/data/cv";

const links = [
  { href: "#trabajo", label: "Trabajo" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#contacto", label: "Contacto" },
];

export default function Nav() {
  return (
    <header className="no-print sticky top-0 z-50 border-b border-line bg-bg">
      <nav
        aria-label="Principal"
        className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-6 py-3 sm:px-10"
      >
        <a
          href="#inicio"
          className="py-1 text-sm font-semibold tracking-tight whitespace-nowrap"
        >
          {profile.name}
        </a>
        <ul className="order-last -mx-6 flex w-full items-center gap-7 overflow-x-auto px-6 pb-1 sm:order-none sm:mx-0 sm:w-auto sm:overflow-visible sm:px-0 sm:pb-0">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-1 text-sm whitespace-nowrap text-muted transition-colors duration-150 hover:text-fg"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={profile.cv}
          download
          aria-label="Descargar CV en PDF"
          className="rounded-full border border-line px-4 py-1.5 text-sm text-muted transition-[scale,color,border-color] duration-150 ease-[cubic-bezier(0.2,0,0,1)] hover:border-fg hover:text-fg active:scale-[0.96]"
        >
          CV
        </a>
      </nav>
    </header>
  );
}
