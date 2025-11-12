import { StructuredData } from "@/components/marketing/StructuredData";
import { ToastProvider } from "@/components/ui/toast";
import { PAGE_SEO, SEO_CONFIG } from "@/lib/seo";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
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
  title: {
    default: PAGE_SEO.home.title,
    template: `%s | ${SEO_CONFIG.siteName}`,
  },
  description: PAGE_SEO.home.description,
  keywords: SEO_CONFIG.keywords,
  authors: [{ name: SEO_CONFIG.author }],
  creator: SEO_CONFIG.author,
  publisher: SEO_CONFIG.siteName,
  metadataBase: new URL(SEO_CONFIG.baseUrl),
  alternates: {
    canonical: SEO_CONFIG.baseUrl,
  },
  openGraph: {
    type: "website",
    locale: SEO_CONFIG.locale,
    url: SEO_CONFIG.baseUrl,
    title: PAGE_SEO.home.title,
    description: PAGE_SEO.home.description,
    siteName: SEO_CONFIG.siteName,
    images: [
      {
        url: PAGE_SEO.home.image,
        width: 1200,
        height: 630,
        alt: PAGE_SEO.home.imageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_SEO.home.title,
    description: PAGE_SEO.home.description,
    images: [PAGE_SEO.home.image],
    creator: SEO_CONFIG.twitter.creator,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background-light dark:bg-background-dark font-sans text-white`}
      >
        <NuqsAdapter>
          <ToastProvider>{children}</ToastProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
