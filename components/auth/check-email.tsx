"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { parseAsBoolean, useQueryState } from "nuqs";
import MailSingIn from "./mail-sign-in";

export function CheckEmail() {
  const [showForm, setIsShowForm] = useQueryState(
    "form",
    parseAsBoolean.withDefault(false)
  );
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "votre adresse e-mail";

  return (
    <div className="max-w-md w-full space-y-4">
      <Card className="bg-white/8 backdrop-blur-sm border-primary/20 text-foreground">
        <CardHeader className="text-center">
          <div className="mx-auto bg-primary/10 p-3 border border-primary rounded-full w-16 h-16 flex items-center justify-center mb-4">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-2xl font-black">
            Vérifiez votre e-mail
          </CardTitle>
          <CardDescription className="text-foreground">
            Nous avons envoyé un lien de connexion magique à{" "}
            <strong>{email}</strong>
          </CardDescription>
        </CardHeader>
        {showForm ? (
          <CardContent>
            <MailSingIn />
          </CardContent>
        ) : (
          <CardContent className="space-y-4">
            <div className="rounded-lg p-4">
              <p className="text-sm md:text-md text-foreground/50">
                Si vous ne recevez pas d&#39;e-mail dans les prochaines minutes,
                vérifiez votre dossier spam ou essayez de renvoyer le lien.
              </p>
            </div>
          </CardContent>
        )}

        <CardFooter className="flex flex-col gap-2">
          <Button
            variant="link"
            className="w-full"
            onClick={() => setIsShowForm(!showForm)}
          >
            {showForm ? "Annuler" : "Utiliser une autre adresse e-mail"}
          </Button>
        </CardFooter>
      </Card>
      <div className="text-center text-xs text-muted-foreground">
        <p>
          Vous n&#39;avez pas reçu d&#39;e-mail ? Vérifiez votre dossier spam ou
          contactez notre support.
        </p>
      </div>
    </div>
  );
}
