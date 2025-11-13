import SignIn from "@/components/auth/sign-in";
import BackBtn from "@/components/back-btn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connexion",
  description:
    "Connectez-vous à votre compte Creavvy pour créer des visuels de code et des captures d'écran stylisées.",
  robots: {
    index: true,
    follow: false,
  },
};

export default async function SignInPage() {
  return (
    <div className="h-full flex flex-col items-center justify-center p-2">
      <BackBtn />
      <SignIn />
    </div>
  );
}
