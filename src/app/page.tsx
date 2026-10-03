import Contact from "@/components/Contact";
import Credentials from "@/components/Credentials";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import SkipLink from "@/components/SkipLink";
import Skills from "@/components/Skills";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <SkipLink />
      <Nav />
      <main id="contenido">
        <Hero />
        <Work />
        <Experience />
        <Skills />
        <Credentials />
      </main>
      <Contact />
    </>
  );
}
