import Verify from "@/components/auth/verify";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vérification du compte | Creavvy",
  description: "Vérification de votre compte Creavvy en cours.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function VerifyPage() {
  return <Verify />;
}
