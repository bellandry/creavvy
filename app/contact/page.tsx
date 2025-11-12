import Contact from "@/components/marketing/Contact";
import Footer from "@/components/marketing/Footer";
import Header from "@/components/marketing/Header";
import { PAGE_SEO } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: PAGE_SEO.contact.title,
  description: PAGE_SEO.contact.description,
  openGraph: {
    title: PAGE_SEO.contact.title,
    description: PAGE_SEO.contact.description,
    url: PAGE_SEO.contact.path,
    images: [
      {
        url: PAGE_SEO.contact.image,
        width: 1200,
        height: 630,
        alt: PAGE_SEO.contact.imageAlt,
      },
    ],
  },
  twitter: {
    title: PAGE_SEO.contact.title,
    description: PAGE_SEO.contact.description,
    images: [PAGE_SEO.contact.image],
  },
};

export default function ContactPage() {
  return (
    <div className="relative flex w-full flex-col">
      <div className="layout-container flex h-full grow flex-col items-center">
        <div className="w-full max-w-6xl px-4 lg:px-8">
          <Header />
        </div>
        <main className="w-full max-w-6xl px-4 lg:px-16 py-24 lg:py-32 flex flex-col gap-12 sm:gap-16 lg:gap-20">
          <div id="contact">
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
