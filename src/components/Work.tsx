import Section from "./Section";
import { profile, projects } from "@/data/cv";

export default function Work() {
  return (
    <Section id="trabajo" title="Trabajo seleccionado">
      <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const card = (
            <>
              <div className="media-outline flex aspect-[4/3] items-center justify-center rounded-xl bg-surface transition-opacity duration-150 ease-[cubic-bezier(0.2,0,0,1)] group-hover:opacity-90">
                <span className="text-xs tracking-wide text-muted uppercase">
                  Ver caso
                </span>
              </div>
              <h3 className="mt-5 text-base font-semibold tracking-tight text-balance underline-offset-4 group-hover:underline">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted text-pretty">
                {project.summary}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-line px-2.5 py-1 text-xs text-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </>
          );

          return project.href ? (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fg"
            >
              {card}
              <span className="sr-only"> (abre en una pestaña nueva)</span>
            </a>
          ) : (
            <article key={project.title}>{card}</article>
          );
        })}
      </div>
      <p className="mt-12 text-sm text-faint">
        Los casos completos están publicados en{" "}
        <a
          href={profile.behance}
          target="_blank"
          rel="noreferrer"
          className="underline decoration-line underline-offset-4 transition-colors hover:text-fg"
        >
          Behance
        </a>
        .
      </p>
    </Section>
  );
}
