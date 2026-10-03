import SkipLink from "@/components/SkipLink";
import ContactV2 from "@/components/v2/ContactV2";
import CredentialsV2 from "@/components/v2/CredentialsV2";
import ExperienceV2 from "@/components/v2/ExperienceV2";
import HeroV2 from "@/components/v2/HeroV2";
import NavV2 from "@/components/v2/NavV2";
import SkillsV2 from "@/components/v2/SkillsV2";
import WorkV2 from "@/components/v2/WorkV2";

export default function V2Page() {
  return (
    <>
      <SkipLink />
      <NavV2 />
      <main id="contenido">
        <HeroV2 />
        <WorkV2 />
        <ExperienceV2 />
        <SkillsV2 />
        <CredentialsV2 />
      </main>
      <ContactV2 />
    </>
  );
}
