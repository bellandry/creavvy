import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, RotateCcw } from "lucide-react";
import { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface CheckEmailProps {
  email: string;
  onResend: (newEmail: string) => void;
  onChangeEmail: () => void;
}

export function CheckEmail({
  email,
  onResend,
  onChangeEmail,
}: CheckEmailProps) {
  const [newEmail, setNewEmail] = useState("");
  const [isResending, setIsResending] = useState(false);
  const [showForm, setIsShowForm] = useState(false);

  const handleResend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEmail.trim()) return;

    setIsResending(true);
    try {
      await onResend(newEmail);
      setNewEmail("");
    } finally {
      setIsResending(false);
      setIsShowForm(false);
    }
  };

  return (
    <div className="max-w-md w-full">
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
            <form onSubmit={handleResend} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="new-email" className="text-sm font-medium">
                  Changer d&#39;adresse e-mail
                </Label>
                <Input
                  id="new-email"
                  type="email"
                  placeholder="nouveau.email@exemple.com"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                />
              </div>
              <Button
                type="submit"
                size={"xl"}
                className="w-full"
                disabled={isResending || !newEmail.trim()}
              >
                {isResending ? (
                  <>
                    <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Renvoyer le lien
                  </>
                )}
              </Button>
            </form>
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
    </div>
  );
}
