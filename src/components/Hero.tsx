import Image from "next/image";
import ContactChoice from "./ContactChoice";
import { profile } from "@/data/cv";

export default function Hero() {
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
          className="signature-curve absolute -top-16 -right-24 w-[760px] max-w-none opacity-60 select-none sm:-top-24 sm:-right-10"
        />
      </div>
      <div className="relative mx-auto grid w-full max-w-5xl gap-12 py-20 md:grid-cols-[1fr_auto] md:items-start md:gap-16 md:py-32">
        <div>
          <p className="text-sm text-muted">Hola, soy</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted text-pretty sm:text-xl">
            {profile.tagline}
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
            sizes="(max-width: 768px) 200px, 280px"
            className="media-outline h-[267px] w-[200px] rounded-2xl object-cover sm:h-[373px] sm:w-[280px]"
          />
        </div>
      </div>
    </section>
  );
}
