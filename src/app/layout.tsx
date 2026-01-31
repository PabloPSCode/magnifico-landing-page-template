/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
//@ts-ignore
import "../styles/globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Devox",
  description:
    "Agência de software para produtos digitais com squads full-stack e delivery contínuo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
