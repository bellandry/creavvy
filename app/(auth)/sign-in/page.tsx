import SignIn from "@/components/auth/sign-in";
import BackBtn from "@/components/back-btn";
import { auth } from "@/lib/auth";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Connexion | Creavvy",
  description:
    "Connectez-vous à votre compte Creavvy pour créer des visuels de code et des captures d'écran stylisées.",
  robots: {
    index: true,
    follow: false,
  },
};

export default async function SignInPage() {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <div className="h-full flex flex-col items-center justify-center p-4">
      <BackBtn />
      <SignIn />
    </div>
  );
}
