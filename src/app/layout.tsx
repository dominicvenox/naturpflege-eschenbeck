import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import "leaflet/dist/leaflet.css";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import CookieConsentComponent from "@/components/ui/CookieConsent";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Naturpflege Eschenbeck",
  description: "Professionelle Landschaftspflege mit Hand und Verstand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${montserrat.variable} antialiased min-h-screen flex flex-col overflow-x-hidden`}
      >
        <Header />
        <main className="flex-1">
            {children}
        </main>
        <Footer />
        <CookieConsentComponent />
      </body>
    </html>
  );
}
