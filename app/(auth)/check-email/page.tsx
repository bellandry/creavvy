import { CheckEmail } from "@/components/auth/check-email";
import BackBtn from "@/components/back-btn";
import { Skeleton } from "@/components/ui/skeleton";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Vérification email | Creavvy",
  description: "Veuillez vérifier votre email pour continuer avec Creavvy.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CheckEmailPage() {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <BackBtn url="/sign-in" text="Connexion" />
      <Suspense
        fallback={
          <div className="max-w-md w-full space-y-4">
            <div className="bg-white/8 backdrop-blur-sm border border-primary/20 rounded-lg p-6 space-y-4 animate-pulse">
              <div className="flex justify-center">
                <div className="bg-primary/10 border border-primary rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Skeleton className="h-8 w-8 bg-primary/30 rounded-full" />
                </div>
              </div>
              <div className="space-y-3">
                <Skeleton className="h-6 bg-primary/20 w-3/4 mx-auto" />
                <Skeleton className="h-4 bg-primary/10 w-full" />
                <Skeleton className="h-4 bg-primary/10 w-5/6 mx-auto" />
              </div>
              <div className="pt-4 space-y-3">
                <Skeleton className="h-10 bg-primary/20" />
              </div>
            </div>
          </div>
        }
      >
        <CheckEmail />
      </Suspense>
    </div>
  );
}
