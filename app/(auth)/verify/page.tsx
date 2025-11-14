import Verify from "@/components/auth/verify";
import { Skeleton } from "@/components/ui/skeleton";
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
          <Skeleton className="h-8 bg-primary/20 w-1/2" />
          <Skeleton className="h-8 bg-primary/10 w-full" />
          <Skeleton className="h-8 bg-primary/10 w-1/3" />
        </div>
      }
    >
      <Verify />
    </Suspense>
  );
}
