import SectionV2 from "./SectionV2";
import { skills } from "@/data/cv";

export default function SkillsV2() {
  return (
    <SectionV2
      id="habilidades"
      index="04"
      eyebrow="Oficio"
      title="Herramientas y método"
    >
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group) => (
          <div key={group.group} className="border-t border-line pt-5">
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
    </SectionV2>
  );
}
