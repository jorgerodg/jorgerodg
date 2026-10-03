import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./cv.css";

const outfit = Outfit({
  variable: "--font-cv",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CV",
  robots: { index: false, follow: false },
};

export default function CvLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className={`${outfit.variable} cv-root`}>{children}</div>;
}
