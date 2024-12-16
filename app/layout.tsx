import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const crimsonFoam = localFont({
  src: "../fonts/crimsonfoamfreefont.ttf",
  variable: "--font-crimson-foam",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Psicóloga | María Paula Mendoza V. | Barranquilla",
  description: "Creando espacios para sanar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${dmSans.variable} ${playfairDisplay.variable} ${crimsonFoam.variable} bg-ivory font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}