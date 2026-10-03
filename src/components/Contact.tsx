import { profile } from "@/data/cv";

const social = [
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Behance", href: profile.behance },
  { label: "Dribbble", href: profile.dribbble },
  { label: "Instagram", href: profile.instagram },
];

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contacto"
      className="scroll-mt-28 border-t border-line px-6 py-16 sm:scroll-mt-20 sm:px-10 md:py-24"
    >
      <div className="mx-auto w-full max-w-5xl">
        <h2 className="text-base font-semibold tracking-tight">Contacto</h2>
        <div aria-hidden className="mt-2 h-px w-[30px] bg-fg" />
        <p className="mt-10 max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-4xl">
          ¿Tienes un producto que necesita claridad? Hablemos.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a
            href={`mailto:${profile.email}`}
            className="text-base underline decoration-line underline-offset-4 transition-colors hover:decoration-fg"
          >
            {profile.email}
          </a>
          <a
            href={`https://wa.me/${profile.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="text-base underline decoration-line underline-offset-4 transition-colors hover:decoration-fg"
          >
            WhatsApp
            <span className="sr-only"> (abre en una pestaña nueva)</span>
          </a>
          <a
            href={profile.cv}
            download
            className="text-base underline decoration-line underline-offset-4 transition-colors hover:decoration-fg"
          >
            Descargar CV
          </a>
        </div>
        <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
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
        </ul>
        <p className="mt-16 text-sm text-faint">
          © {year} {profile.name} · {profile.location}
        </p>
      </div>
    </footer>
  );
}
