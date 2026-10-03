import SectionV2 from "./SectionV2";
import { certifications, education } from "@/data/cv";

export default function CredentialsV2() {
  return (
    <SectionV2
      id="formacion"
      index="05"
      eyebrow="Formación"
      title="Estudios y certificados"
    >
      <div className="grid gap-14 md:grid-cols-2 md:gap-12">
        <div>
          <h3 className="text-sm font-semibold tracking-tight">Educación</h3>
          <ol className="mt-6">
            {education.map((item) => (
              <li key={item.title} className="border-t border-line py-5 last:border-b">
                <p className="text-sm text-muted tabular-nums">{item.period}</p>
                <p className="mt-1 font-display text-xl tracking-[0.015em]">
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-muted">{item.place}</p>
                {item.detail && (
                  <p className="mt-0.5 text-sm text-muted text-pretty">
                    {item.detail}
                  </p>
                )}
              </li>
            ))}
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold tracking-tight">Certificados</h3>
          <ol className="mt-6">
            {certifications.map((item) => (
              <li
                key={item.title}
                className="grid gap-1 border-t border-line py-4 last:border-b sm:grid-cols-[88px_1fr] sm:gap-5"
              >
                <p className="text-sm text-muted tabular-nums">{item.date}</p>
                <div>
                  <p className="text-sm font-medium text-pretty">{item.title}</p>
                  <p className="mt-0.5 text-sm text-muted">{item.issuer}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </SectionV2>
  );
}
