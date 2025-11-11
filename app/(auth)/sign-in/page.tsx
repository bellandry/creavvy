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
    setLoading((prev) => ({ ...prev, [provider]: true }));

    try {
      const res = await authClient.signIn.social({
        provider,
        callbackURL: "/dashboard",
        errorCallbackURL: "/error",
        newUserCallbackURL: "/wizard",
      });

      if (res.error) {
        toastManager.add({
          type: "error",
          title: "Erreur de connexion",
          description:
            res.error.message || "Erreur avec le provider " + provider,
        });
      }
    } finally {
      setLoading((prev) => ({ ...prev, [provider]: false }));
    }
  }

  async function magicSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
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
        toastManager.add({
          type: "error",
          title: "Une erreur est survenue",
          description: res.error.message || "Une erreur est survenue",
        });
      } else {
        // Redirect to check email page with the email as a parameter
        router.push(`/check-email?email=${encodeURIComponent(email)}`);
      }
    } finally {
      setLoading((prev) => ({ ...prev, email: false }));
    }
  }

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col items-center justify-center overflow-x-hidden p-4 group/design-root">
      <Link href={"/"} className="fixed top-4 left-4 flex items-center gap-2">
        <ArrowLeft className="size-4" />
        Retour à l&apos;accueil
      </Link>
      <div className="layout-container flex h-full w-full max-w-md flex-col items-center justify-center">
        <div className="flex w-full flex-col items-center gap-6 rounded-xl bg-white/5 p-8 shadow-2xl">
          {/* Logo and Heading */}
          <div className="flex w-full flex-col items-center gap-4 text-center">
            <div className="size-16 text-primary">
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.7 3.31C9.17 3.12 9.7 3 10.25 3h3.5c.55 0 1.08.12 1.55.31l4.8 1.92c1.03.41 1.03 1.74 0 2.15l-4.8 1.92c-.47.19-1 .31-1.55.31h-3.5c-.55 0-1.08-.12-1.55-.31l-4.8-1.92c-1.03-.41-1.03-1.74 0-2.15l4.8-1.92ZM18.4 16.69c.47-.19.7-.72.7-1.25v-3.5c0-.53-.23-1.06-.7-1.25l-4.8-1.92c-1.03-.41-2.13.41-2.13 1.54v7.27c0 1.13 1.1 1.95 2.13 1.54l4.8-1.92ZM8.73 9.77c-.47.19-1.55.62-1.55 1.54v3.5c0 .53.23 1.06.7 1.25l4.8 1.92c1.03.41 2.13-.41 2.13-1.54v-7.27c0-1.13-1.1-1.95-2.13-1.54l-3.95 1.59Z"></path>
              </svg>
            </div>
            <p className="text-white text-3xl font-black leading-tight tracking-[-0.033em]">
              Connecte-toi &#224; Snippet Studio
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
  );
}
