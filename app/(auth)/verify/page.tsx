import Verify from "@/components/auth/verify";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Vérification du compte | Creavvy",
  description: "Vérification de votre compte Creavvy en cours.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function VerifyPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-md mx-auto p-6 space-y-4 text-white">
          <div className="h-8 bg-primary/20 rounded w-1/2 animate-pulse"></div>
          <div className="h-6 bg-primary/10 rounded w-full animate-pulse"></div>
          <div className="h-6 bg-primary/10 rounded w-1/3 animate-pulse"></div>
        </div>
      }
    >
      <Verify />
    </Suspense>
  );
}
