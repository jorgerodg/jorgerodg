import SkipLink from "@/components/SkipLink";
import BarraFija from "@/components/v3/BarraFija";
import Contacto from "@/components/v3/Contacto";
import Formacion from "@/components/v3/Formacion";
import Oficio from "@/components/v3/Oficio";
import Perfil from "@/components/v3/Perfil";
import Portada from "@/components/v3/Portada";
import Trabajo from "@/components/v3/Trabajo";
import Trayectoria from "@/components/v3/Trayectoria";

export default function V3Page() {
  return (
    <>
      <SkipLink />
      <BarraFija />
      <main id="contenido">
        <Portada />
        <Perfil />
        <Trabajo />
        <Trayectoria />
        <Oficio />
        <Formacion />
      </main>
      <Contacto />
    </>
  );
}
