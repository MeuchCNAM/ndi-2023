import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

import { notFound } from "next/navigation";

// Can be imported from a shared config
const locales = ["en", "de", "fr"];

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meuch - NDI 2023",
  description: "Meuch - NDI 2023",
};

export default function LocaleLayout({ children, params: { locale } }) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return (
    <html lang={locale}>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
