import Section from "./Section";
import { skills } from "@/data/cv";

export default function Skills() {
  return (
    <Section id="habilidades" title="Habilidades">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group) => (
          <div key={group.group}>
            <h3 className="text-sm font-semibold tracking-tight">
              {group.group}
            </h3>
            <ul className="mt-4 space-y-1.5">
              {group.items.map((item) => (
                <li key={item} className="text-sm text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
