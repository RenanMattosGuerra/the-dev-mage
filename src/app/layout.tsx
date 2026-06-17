import type { Metadata } from "next";
import { Jacquard_24, Bitcount_Grid_Single, Jersey_20 } from "next/font/google";
import "./globals.css";

export const Jacquard = Jacquard_24({
  variable: "--font-jacquard",
  weight: "400",
});

export const Bitcount = Bitcount_Grid_Single({
  variable: "--font-bitcount",
});

export const Jersey = Jersey_20({
  variable: "--font-jersey",
  weight: "400",
});

export const metadata: Metadata = {
  title: "The Dev Mage",
  description: "From Apprentice to Front-End Wizard",
  openGraph: {
    title: "The Dev Mage",
    description: "From Apprentice to Front-End Wizard",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
