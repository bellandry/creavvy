"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { toastManager } from "../ui/toast";

export default function AnonymousLogin() {
  const router = useRouter();
  async function anonymousLogin() {
    const user = await authClient.signIn.anonymous();
    if (user.error) {
      toastManager.add({
        type: "error",
        title: "Anonymous Error",
        description: "Erreur lors de la connexion anonyme",
      });
    }
    router.push("/dashboard");
  }
  return (
    <div className="w-full">
      <Button
        onClick={anonymousLogin}
        className="flex-1 cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-lg h-10 px-5 bg-[#362348] hover:bg-[#4d3267] transition-colors text-white text-base font-bold leading-normal tracking-[0.015em] w-full"
      >
        Connexion Anonyme
      </Button>
    </div>
  );
}
