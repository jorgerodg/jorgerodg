import Section from "./Section";
import { certifications, education } from "@/data/cv";

export default function Credentials() {
  return (
    <Section id="formacion" title="Formación">
      <div className="grid gap-16 md:grid-cols-2 md:gap-12">
        <div>
          <h3 className="text-sm font-semibold tracking-tight">Educación</h3>
          <ol className="mt-6 space-y-8">
            {education.map((item) => (
              <li key={item.title}>
                <p className="text-sm text-faint tabular-nums">{item.period}</p>
                <p className="mt-1 font-medium">{item.title}</p>
                <p className="mt-0.5 text-sm text-muted">{item.place}</p>
                {item.detail && (
                  <p className="mt-0.5 text-sm text-faint text-pretty">
                    {item.detail}
                  </p>
                )}
              </li>
            ))}
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold tracking-tight">Certificados</h3>
          <ol className="mt-6 space-y-5">
            {certifications.map((item) => (
              <li
                key={item.title}
                className="grid gap-1 sm:grid-cols-[88px_1fr] sm:gap-5"
              >
                <p className="text-sm text-faint tabular-nums">{item.date}</p>
                <div>
                  <p className="text-sm font-medium text-pretty">
                    {item.title}
                  </p>
                  <p className="mt-0.5 text-sm text-muted">{item.issuer}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
