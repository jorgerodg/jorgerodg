import SectionV2 from "./SectionV2";
import { experience } from "@/data/cv";

export default function ExperienceV2() {
  return (
    <SectionV2
      id="experiencia"
      index="03"
      eyebrow="Trayectoria"
      title="Diez años diseñando producto"
    >
      <ol>
        {experience.map((job) => (
          <li
            key={job.company}
            className="reveal grid gap-3 border-t border-line py-7 last:border-b md:grid-cols-[150px_1fr] md:gap-10"
          >
            <p className="text-sm text-muted tabular-nums">{job.range}</p>
            <div>
              <h3 className="font-display text-2xl tracking-[0.015em]">
                {job.company}
                {job.location && (
                  <span className="ms-3 font-sans text-sm text-muted">
                    {job.location}
                  </span>
                )}
              </h3>
              <ul className="mt-3 space-y-1.5">
                {job.roles.map((role) => (
                  <li
                    key={role.title + role.period}
                    className="flex flex-wrap items-baseline gap-x-3 text-sm"
                  >
                    <span className="font-medium">{role.title}</span>
                    <span className="text-muted tabular-nums">
                      {role.period}
                    </span>
                  </li>
                ))}
              </ul>
              {job.note && (
                <p className="mt-3 max-w-prose text-sm text-muted text-pretty">
                  {job.note}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </SectionV2>
  );
}
