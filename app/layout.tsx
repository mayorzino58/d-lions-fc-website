import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "D Lions FC Rwanda | Developing Talent. Building Character. Creating Champions.",
  description:
    "D Lions Football Club Rwanda is a youth football academy in Rwanda developing disciplined, talented players through professional coaching. Register your child today for U10, U13, or U15 programs.",
  keywords: [
    "D Lions FC",
    "D Lions FC Rwanda",
    "football academy Rwanda",
    "youth football Rwanda",
    "kids football training Rwanda",
    "football club Rwanda",
  ],
  openGraph: {
    title: "D Lions FC Rwanda",
    description:
      "Developing Talent. Building Character. Creating Champions. Youth football academy in Rwanda — U10, U13, U15 programs open now.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} antialiased bg-lion-cream text-lion-black`}
      >
        <Header />
        {children}
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
