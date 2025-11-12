import { CheckEmail } from "@/components/auth/check-email";
import BackBtn from "@/components/back-btn";
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
                  <div className="h-8 w-8 bg-primary/30 rounded-full"></div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-6 bg-primary/20 rounded w-3/4 mx-auto"></div>
                <div className="h-4 bg-primary/10 rounded w-full"></div>
                <div className="h-4 bg-primary/10 rounded w-5/6 mx-auto"></div>
              </div>
              <div className="pt-4 space-y-3">
                <div className="h-10 bg-primary/20 rounded"></div>
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
