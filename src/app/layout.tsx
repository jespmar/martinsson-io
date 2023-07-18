import Head from "next/head";
import "./globals.css";
import { Inter, Roboto_Slab } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const roboto_slab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto_slab",
  display: "swap",
});

export const metadata = {
  title: "martinsson.io",
  description: "Agile Development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${roboto_slab.variable}`}>{children}</body>
    </html>
  );
}
