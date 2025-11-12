"use client";

import { CheckEmail } from "@/components/CheckEmail";
import { toastManager } from "@/components/ui/toast";
import { authClient } from "@/lib/auth-client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CheckEmailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | null>(null);
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (session?.user) {
      router.push("/dashboard");
    }
  }, [isPending, session, router]);

  // Get the email from search params or use a default
  const email = searchParams.get("email") || "votre adresse e-mail";

  const handleResend = async (newEmail: string) => {
    try {
      setError(null);

      const res = await authClient.signIn.magicLink({
        email: newEmail,
        callbackURL: "/dashboard",
        newUserCallbackURL: "/wizard",
        errorCallbackURL: "/error",
      });

      if (res.error) {
        setError(
          res.error.message || "Une erreur est survenue lors de l'envoi du lien"
        );
        toastManager.add({
          type: "error",
          title: "Erreur",
          description:
            res.error.message ||
            "Une erreur est survenue lors de l'envoi du lien",
        });
      } else {
        toastManager.add({
          type: "success",
          title: "Lien envoyé",
          description: "Le lien a été renvoyé avec succès !",
        });
        // Update the URL with the new email
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.set("email", newEmail);
        router.replace(`/check-email?${newParams.toString()}`);
      }
    } catch (err) {
      toastManager.add({
        type: "error",
        title: "Erreur",
        description: "Une erreur inattendue est survenue",
      });
    }
  };

  const handleChangeEmail = () => {
    router.push("/sign-in");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <Link href={"/"} className="fixed top-4 left-4 flex items-center gap-2">
        <ArrowLeft className="size-4" />
        Retour à l&apos;accueil
      </Link>
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-black text-foreground">Creavvy</h1>
          <p className="text-muted-foreground mt-2">
            Création de code simplifiée
          </p>
        </div>

        {error && (
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
            <p className="text-destructive text-sm">{error}</p>
          </div>
        )}

        <CheckEmail
          email={email}
          onResend={handleResend}
          onChangeEmail={handleChangeEmail}
        />

        <div className="text-center text-xs text-muted-foreground">
          <p>
            Vous n&#39;avez pas reçu d&#39;e-mail ? Vérifiez votre dossier spam
            ou contactez notre support.
          </p>
        </div>
      </div>
    </div>
  );
}
