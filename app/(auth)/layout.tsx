import Logo from "@/components/logo";
import { SEO_CONFIG } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "Connexion | Creavvy",
    template: `%s | ${SEO_CONFIG.siteName}`,
  },
  description:
    "Connectez-vous à votre compte Creavvy pour créer des visuels de code et des captures d'écran stylisées.",
  keywords: [...SEO_CONFIG.keywords, "connexion", "authentification", "compte"],
  authors: [{ name: SEO_CONFIG.author }],
  creator: SEO_CONFIG.author,
  publisher: SEO_CONFIG.siteName,
  robots: {
    index: false,
    follow: false,
  },
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="w-full flex flex-col max-w-md space-y-6">
        <div className="flex flex-col text-center justify-center items-center">
          <Link
            href="/"
            className="flex w-full justify-center items-center gap-4"
          >
            <Logo className="size-16" />
          </Link>
          <h1 className="text-3xl font-black text-foreground">
            Connecte toi à Creavvy
          </h1>
        </div>
        {children}
      </div>
    </div>
  );
}
