"use client";

import { authClient } from "@/lib/auth-client";
import { Github } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import { toastManager } from "../ui/toast";

function SocialLogin({ className }: { className?: string }) {
  const [loading, setLoading] = useState<{ [key: string]: boolean }>({
    github: false,
    google: false,
    discord: false,
    email: false,
  });

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
        const errorMessage =
          res.error.message || "Erreur avec le provider " + provider;
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

  return (
    <div className={`w-full ${className}`}>
      <div className="flex flex-col w-full items-stretch gap-3">
        <Button
          size="lg"
          className="flex-1 cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-lg h-12 px-5 bg-[#362348] hover:bg-[#4d3267] transition-colors text-white text-base font-bold leading-normal tracking-[0.015em] w-full"
          onClick={() => connectSocial("github")}
          disabled={loading.github}
        >
          {loading.github ? (
            <Spinner className="h-5 w-5 text-white" />
          ) : (
            <>
              <Github className="size-6" />
              <span className="truncate">GitHub</span>
            </>
          )}
        </Button>

        <Button
          size="lg"
          className="flex-1 min-w-[84px] cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-lg  bg-[#362348] hover:bg-[#4d3267] transition-colors text-white text-base font-bold leading-normal tracking-[0.015em] w-full"
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
              <span className="truncate">Google</span>
            </>
          )}
        </Button>

        <Button
          size="lg"
          className="flex-1 cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-lg h-12 px-5 bg-[#362348] hover:bg-[#4d3267] transition-colors text-white text-base font-bold leading-normal tracking-[0.015em] w-full"
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
              <span className="truncate">Discord</span>
            </>
          )}
        </Button>
      </div>
    </div>
  );
}

export default SocialLogin;
