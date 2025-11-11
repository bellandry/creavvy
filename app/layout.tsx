import { ToastProvider } from "@/components/ui/toast";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Creavvy - Créez des visuels percutants pour votre contenu tech",
  description:
    "Créez des visuels de code, des captures d&apos;écran stylisées et des posts techniques parfaits pour les réseaux sociaux en quelques secondes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background-light dark:bg-background-dark font-sans text-white`}
      >
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
