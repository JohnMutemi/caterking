import React from "react"
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

const _inter = Inter({ subsets: ["latin"] });
const _playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Caterking Superior Kitchen Appliances | Commercial Kitchen Equipment Kenya",
  description:
    "Professional commercial kitchen equipment manufacturer in Kenya. Refrigerators, display cabinets, cooking equipment, stainless steel fabrication & custom kitchen solutions. Nationwide delivery.",
  keywords: [
    "commercial kitchen equipment Kenya",
    "kitchen appliances Nairobi",
    "refrigeration equipment",
    "stainless steel fabrication",
    "catering equipment",
  ],
  openGraph: {
    title: "Caterking Superior Kitchen Appliances",
    description: "Embracing Quality and Affordability - Professional Commercial Kitchen Equipment",
    type: "website",
    locale: "en_KE",
  },
    generator: 'v0.app'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
