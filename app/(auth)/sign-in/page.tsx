"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { toastManager } from "@/components/ui/toast";
import { authClient } from "@/lib/auth-client";
import { ArrowLeft, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SignInPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<{ [key: string]: boolean }>({
    github: false,
    google: false,
    discord: false,
    email: false,
  });

  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (session?.user) {
      router.push("/dashboard");
    }
  }, [isPending, session, router]);

  async function connectSocial(provider: "github" | "google" | "discord") {
    setError(null);
    setLoading((prev) => ({ ...prev, [provider]: true }));

    try {
      const res = await authClient.signIn.social({
        provider,
        callbackURL: "/dashboard",
        errorCallbackURL: "/error",
        newUserCallbackURL: "/wizard",
      });

      if (res.error) {
        const errorMessage =
          res.error.message || "Erreur avec le provider " + provider;
        setError(errorMessage);
        toastManager.add({
          type: "error",
          title: "Erreur d'authentification",
          description: errorMessage,
        });
      }
    } finally {
      setLoading((prev) => ({ ...prev, [provider]: false }));
    }
  }

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
        router.push(`/check-email?email=${encodeURIComponent(email)}`);
      }
    } finally {
      setLoading((prev) => ({ ...prev, email: false }));
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Link href={"/"} className="fixed top-4 left-4 flex items-center gap-2">
        <ArrowLeft className="size-4" />
        Retour à l&apos;accueil
      </Link>

      <div
        className="flex flex-1 items-center justify-center p-4"
        style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
      >
        <div className="layout-container flex h-full w-full max-w-md flex-col items-center justify-center">
          <div className="flex w-full flex-col items-center gap-6 rounded-xl bg-white/5 p-8 shadow-2xl">
            {/* Logo and Heading */}
            <div className="flex w-full flex-col items-center gap-4 text-center">
              <div
                className="h-16 w-16"
                data-alt="Creavvy logo, an abstract shape resembling a code snippet and a brush stroke."
              >
                <svg
                  className="h-full w-full"
                  fill="none"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M44 4H20C11.1634 4 4 11.1634 4 20V44C4 52.8366 11.1634 60 20 60H44C52.8366 60 60 52.8366 60 44V20C60 11.1634 52.8366 4 44 4Z"
                    fill="#8c2bee"
                  ></path>
                  <path
                    d="M24 24L18 30L24 36"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  ></path>
                  <path
                    d="M40 24L46 30L40 36"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  ></path>
                  <path
                    d="M34 18L30 42"
                    stroke="#10B981"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  ></path>
                </svg>
              </div>
              <p className="text-white text-3xl font-black leading-tight tracking-[-0.033em]">
                Connecte-toi &#224; Creavvy
              </p>
            </div>

            {/* Social Sign-in Buttons */}
            <div className="flex w-full flex-col items-stretch gap-3">
              <Button
                className="flex min-w-[84px] cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-lg h-12 px-5 bg-[#362348] hover:bg-[#4d3267] transition-colors text-white text-base font-bold leading-normal tracking-[0.015em] w-full"
                onClick={() => connectSocial("github")}
                disabled={loading.github}
              >
                {loading.github ? (
                  <Spinner className="h-5 w-5 text-white" />
                ) : (
                  <>
                    <Github className="size-6" />
                    <span className="truncate">Continuer avec GitHub</span>
                  </>
                )}
              </Button>

              <Button
                className="flex min-w-[84px] cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-lg h-12 px-5 bg-[#362348] hover:bg-[#4d3267] transition-colors text-white text-base font-bold leading-normal tracking-[0.015em] w-full"
                onClick={() => connectSocial("google")}
                disabled={loading.google}
              >
                {loading.google ? (
                  <Spinner className="h-5 w-5 text-white" />
                ) : (
                  <>
                    <Image
                      alt="Google icon"
                      className="h-6 w-6"
                      src="/socials/google.svg"
                      width={50}
                      height={50}
                    />
                    <span className="truncate">Continuer avec Google</span>
                  </>
                )}
              </Button>

              <Button
                className="flex min-w-[84px] cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-lg h-12 px-5 bg-[#362348] hover:bg-[#4d3267] transition-colors text-white text-base font-bold leading-normal tracking-[0.015em] w-full"
                onClick={() => connectSocial("discord")}
                disabled={loading.discord}
              >
                {loading.discord ? (
                  <Spinner className="h-5 w-5 text-white" />
                ) : (
                  <>
                    <Image
                      alt="Discord icon"
                      className="h-6 w-6"
                      src="/socials/discord.svg"
                      width={50}
                      height={50}
                    />
                    <span className="truncate">Continuer avec Discord</span>
                  </>
                )}
              </Button>
            </div>

            {/* Separator */}
            <p className="text-[#888888] text-sm font-normal leading-normal w-full text-center">
              &#8212;&#8212;&#8212;&#8212;&#8212; OU
              &#8212;&#8212;&#8212;&#8212;&#8212;
            </p>

            {/* Email Sign-in */}
            <form
              onSubmit={magicSubmit}
              className="flex w-full flex-col items-stretch gap-4"
            >
              {error && !loading.email && (
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
                  <p className="text-destructive text-sm">{error}</p>
                </div>
              )}

              <label className="flex flex-col w-full">
                <Input
                  name="email"
                  type="email"
                  placeholder="ton.email@exemple.com"
                  className=""
                  required
                />
              </label>
              <Button
                type="submit"
                className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary hover:bg-primary/90 transition-colors text-white text-base font-bold leading-normal w-full"
                disabled={loading.email}
              >
                {loading.email ? (
                  <Spinner className="h-5 w-5 text-white" />
                ) : (
                  <span className="truncate">Continuer avec Email</span>
                )}
              </Button>
              <p className="text-[#888888] text-xs font-normal leading-normal text-center mt-1 px-2">
                Nous t&#39;enverrons un lien de connexion magique. Pas de mot de
                passe requis.
              </p>
            </form>

            {/* Footer Links */}
            <div className="w-full pt-4">
              <p className="text-[#888888] text-xs text-center">
                En continuant, tu acceptes nos
                <Link
                  className="font-medium text-[#ad92c9] hover:text-primary transition-colors"
                  href="#"
                >
                  {" "}
                  Conditions d&#39;utilisation
                </Link>{" "}
                et notre
                <Link
                  className="font-medium text-[#ad92c9] hover:text-primary transition-colors"
                  href="#"
                >
                  {" "}
                  Politique de confidentialit&#233;
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
