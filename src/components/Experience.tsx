import Section from "./Section";
import { experience } from "@/data/cv";

export default function Experience() {
  return (
    <Section id="experiencia" title="Experiencia">
      <ol className="space-y-12">
        {experience.map((job) => (
          <li
            key={job.company}
            className="grid gap-3 md:grid-cols-[140px_1fr] md:gap-10"
          >
            <p className="text-sm text-faint tabular-nums">{job.range}</p>
            <div>
              <h3 className="text-base font-semibold tracking-tight">
                {job.company}
                {job.location && (
                  <span className="ms-2 text-sm font-normal text-faint">
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
                    <span className="text-faint">{role.period}</span>
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
    </Section>
  );
}
