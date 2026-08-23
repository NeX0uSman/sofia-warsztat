import type { Metadata } from 'next';
import { Syncopate, Oswald, Roboto_Mono } from 'next/font/google';
import './globals.css';

const syncopate = Syncopate({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-heading',
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-subheading',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Renoma Car | Plewiska - Profesjonalna Mechanika Pojazdowa',
  description: 'Diagnostyka komputerowa, remonty silników, zawieszenia i hamulce. Autoryzowany partner Motrio.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${syncopate.variable} ${oswald.variable} ${robotoMono.variable} scroll-smooth`}>
      <body className="bg-auto-matte text-white antialiased selection:bg-auto-danger selection:text-white">
        {children}
      </body>
    </html>
  );
}