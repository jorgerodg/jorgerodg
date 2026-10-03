import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./v3.css";

/** La tipografía de esta versión. Solo se carga en esta rama de rutas.
 *  El nombre de la variable es genérico a propósito: cambiar de familia es
 *  tocar solo este bloque, no el CSS ni los componentes. */
const tipografia = Outfit({
  variable: "--font-v3",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function V3Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`${tipografia.variable} v3-root bg-c-bg text-c-fg`}>
      {children}
    </div>
  );
}
