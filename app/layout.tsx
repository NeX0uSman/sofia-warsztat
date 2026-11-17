import type { Metadata } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm",
  weight: ["400", "500", "600"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jakarta",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SOFIA — Twój Przyjazny Warsztat Samochodowy",
  description: "Serwis auta bez stresu, jasne zasady i kawa na miejscu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${dmSans.variable} ${jakarta.variable}`}>
      <body className="bg-comfort-grid font-sans text-ink antialiased selection:bg-terracotta selection:text-white min-h-screen flex flex-col justify-between overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}