import Image from "next/image";
import ContactChoice from "@/components/ContactChoice";
import { profile } from "@/data/cv";

export default function HeroV2() {
  return (
    <section
      id="inicio"
      className="relative scroll-mt-28 px-6 sm:scroll-mt-20 sm:px-10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <Image
          src="/curve.svg"
          alt=""
          width={765}
          height={201}
          priority
          className="signature-curve absolute -top-20 -right-24 w-[760px] max-w-none opacity-50 select-none sm:-top-28 sm:-right-10"
        />
      </div>

      <div className="relative mx-auto w-full max-w-5xl py-20 md:py-28">
        <p className="flex items-center gap-3 text-xs tracking-[0.18em] text-muted uppercase">
          <span className="tabular-nums">01</span>
          <span aria-hidden className="h-px w-6 bg-line" />
          <span>Perfil</span>
        </p>

        <div className="mt-10 grid gap-12 md:grid-cols-[1fr_auto] md:items-end md:gap-16">
          <div>
            <h1 className="font-display text-5xl leading-[1.12] tracking-[0.01em] text-balance sm:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-6 max-w-xl font-display text-2xl leading-snug tracking-[0.01em] text-pretty italic sm:text-3xl">
              Diseño productos digitales que la gente entiende a la primera.
            </p>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted text-pretty">
              {profile.intro}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#trabajo"
                className="rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-[scale,opacity] duration-150 ease-[cubic-bezier(0.2,0,0,1)] hover:opacity-85 active:scale-[0.96]"
              >
                Ver trabajo
              </a>
              <ContactChoice />
            </div>
          </div>

          <div className="order-first md:order-none">
            <Image
              src={profile.photo}
              alt={`Retrato de ${profile.name}`}
              width={1050}
              height={1400}
              priority
              sizes="(max-width: 768px) 200px, 300px"
              className="media-outline h-[267px] w-[200px] object-cover sm:h-[400px] sm:w-[300px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
