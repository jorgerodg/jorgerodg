import type { Metadata } from "next";
import { Newsreader } from "next/font/google";

/**
 * Newsreader es variable y lleva eje de tamaño óptico: abre el ojo en los
 * titulares grandes y lo cierra en los pequeños. El navegador lo aplica
 * solo con `font-optical-sizing: auto`, que es su valor por defecto.
 * Solo se carga en esta rama de rutas.
 */
const serif = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
});

export const metadata: Metadata = {
  // Variante de comparación: fuera del índice mientras exista.
  robots: { index: false, follow: false },
};

export default function V2Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className={serif.variable}>{children}</div>;
}
