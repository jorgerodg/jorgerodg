import ArrowV2 from "./ArrowV2";
import SectionV2 from "./SectionV2";
import { profile, projects } from "@/data/cv";

export default function WorkV2() {
  return (
    <SectionV2
      id="trabajo"
      index="02"
      eyebrow="Trabajo"
      title="Casos seleccionados"
    >
      <ul>
        {projects.map((project) => (
          <li
            key={project.title}
            className="reveal border-t border-line last:border-b"
          >
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="group grid gap-3 py-7 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fg md:grid-cols-[1fr_auto] md:items-baseline md:gap-10"
            >
              <div>
                <h3 className="font-display text-2xl tracking-[0.015em] text-balance underline-offset-[6px] group-hover:underline sm:text-[1.75rem]">
                  {project.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted text-pretty">
                  {project.summary}
                </p>
              </div>
              <p className="flex items-center gap-4 text-xs tracking-[0.12em] text-muted uppercase">
                <span>{project.tags.join(" · ")}</span>
                <ArrowV2 />
              </p>
              <span className="sr-only">(abre en una pestaña nueva)</span>
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-10 text-sm text-muted">
        Los casos completos están publicados en{" "}
        <a
          href={profile.behance}
          target="_blank"
          rel="noreferrer"
          className="underline decoration-line underline-offset-4 transition-colors hover:text-fg hover:decoration-fg"
        >
          Behance
          <span className="sr-only"> (abre en una pestaña nueva)</span>
        </a>
        .
      </p>
    </SectionV2>
  );
}
