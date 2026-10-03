import { Outfit } from "next/font/google";
import "./v3.css";

/** La tipografía del sitio. El CV (`/cv`) carga la suya aparte.
 *  El nombre de la variable es genérico a propósito: cambiar de familia es
 *  tocar solo este bloque, no el CSS ni los componentes. */
const tipografia = Outfit({
  variable: "--font-v3",
  subsets: ["latin"],
  display: "swap",
});

export default function SitioLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`${tipografia.variable} v3-root bg-c-bg text-c-fg`}>
      {children}
    </div>
  );
}
