"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Spinner } from "../ui/spinner";
import { toastManager } from "../ui/toast";

function MailSingIn({ className }: { className?: string }) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<{ [key: string]: boolean }>({
    github: false,
    google: false,
    discord: false,
    email: false,
  });

  async function magicSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading((prev) => ({ ...prev, email: true }));

    try {
      const formData = new FormData(e.currentTarget);
      const email = formData.get("email") as string;

      const res = await authClient.signIn.magicLink({
        email: email,
        callbackURL: "/dashboard",
        newUserCallbackURL: "/wizard",
        errorCallbackURL: "/error",
      });

      if (res.error) {
        const errorMessage = res.error.message || "Une erreur est survenue";
        setError(errorMessage);
        toastManager.add({
          type: "error",
          title: "Erreur",
          description: errorMessage,
        });
      } else {
        toastManager.add({
          type: "success",
          title: "Lien envoyé",
          description:
            "Un lien de connexion a été envoyé à votre adresse e-mail",
        });
        // Redirect to check email page with the email as a parameter
        router.push(
          `/check-email?email=${encodeURIComponent(email)}&form=false`
        );
      }
    } finally {
      setLoading((prev) => ({ ...prev, email: false }));
    }
  }

  return (
    <div className={`w-full ${className}`}>
      <form
        onSubmit={magicSubmit}
        className="flex w-full flex-col items-stretch gap-4"
      >
        {error && !loading.email && (
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
            <p className="text-destructive text-sm">{error}</p>
          </div>
        )}

        <Label className="flex flex-col font-bold w-full items-start">
          Adresse mail
        </Label>
        <Input
          name="email"
          type="email"
          size={"xl"}
          placeholder="ton.email@exemple.com"
          className="bg-[#362348]"
          required
        />
        <Button
          type="submit"
          size={"xl"}
          className="flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-lg px-5 hover:bg-primary/90 transition-colors text-white text-base font-bold leading-normal w-full"
          disabled={loading.email}
        >
          {loading.email ? (
            <Spinner className="h-5 w-5 text-white" />
          ) : (
            <span className="truncate">Continuer avec Email</span>
          )}
        </Button>
      </form>
    </div>
  );
}

export default MailSingIn;
