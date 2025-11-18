"use client";

import { authClient } from "@/lib/auth-client";
import { Loader } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function Verify() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | null>(null);

  const token = searchParams.get("token");

  const verifyToken = useCallback(async () => {
    if (error) return;

    if (!token) {
      setError("Token absent !");
      router.push("/error?error=INVALID_TOKEN");
      return;
    }
    const res = await authClient.magicLink.verify({
      query: { token: token },
    });

    if (res.error) {
      // Map common error types to our error page
      if (res.error.code === "TOKEN_EXPIRED") {
        router.push("/error?error=EXPIRED_TOKEN");
      } else if (res.error.code === "TOKEN_INVALID") {
        router.push("/error?error=INVALID_TOKEN");
      } else {
        router.push(
          `/error?error=${encodeURIComponent(res.error.code || "UNKNOWN_ERROR")}`
        );
      }
    }
  }, [token, error, router]);

  useEffect(() => {
    async function checkToken() {
      await verifyToken();
    }

    checkToken();
  }, [token, verifyToken]);

  // Show loading state while verifying
  if (!error) {
    return (
      <main className="max-w-md mx-auto p-6 space-y-4 text-white">
        <h1 className="text-2xl font-bold">Vérification en cours</h1>
        <Loader />
      </main>
    );
  }

  // If there's an error that wasn't redirected, show it inline
  return (
    <main className="max-w-md mx-auto p-6 space-y-4 text-white">
      <h1 className="text-2xl font-bold">Vérification en cours</h1>
      <p className="text-red-500">{error}</p>
      <Loader />
    </main>
  );
}
