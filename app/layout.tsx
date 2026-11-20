import type { Metadata } from "next";
import { Cormorant_Garamond, Newsreader, Poppins } from "next/font/google";
import "./globals.css";

const title = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "500"], style: ["normal", "italic"], variable: "--font-title" });
const body = Newsreader({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-body" });
const hunda = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font-hunda" });

export const metadata: Metadata = {
  title: "Maite Galarza Astiz",
  description: "Curiosa, lectora y jinete. Portfolio de Maite Galarza Astiz.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${title.variable} ${body.variable} ${hunda.variable}`}>
      <body>{children}</body>
    </html>
  );
}
