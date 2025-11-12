import { CheckEmail } from "@/components/auth/check-email";
import BackBtn from "@/components/back-btn";
import type { Metadata } from "next";

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
      <CheckEmail />
    </div>
  );
}
