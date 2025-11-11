"use client";

import { authClient } from "@/lib/auth-client";
import { Loader } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function VerifyPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const token = searchParams.get("token");

  const verifyToken = useCallback(async () => {
    if (success || error) return;

    if (!token) {
      setError("Token absent !");
      return;
    }
    const res = await authClient.magicLink.verify({
      query: { token: token },
    });

    if (res.error) {
      setError(res.error.message || "une erreur s'est produite");
    } else {
      // get callbackUrl param from token
      // const urlParams = new URLSearchParams(token);
      // const callbackUrl = urlParams.get("callbackUrl") || "/dashboard";
      setSuccess("Tout s'est bien passé");
    }
  }, [token, error, success]);

  useEffect(() => {
    async function checkToken() {
      await verifyToken();
    }

    checkToken();
  }, [token, verifyToken]);

  return (
    <main className="max-w-md mx-auto p-6 space-y-4 text-white">
      <h1 className="text-2xl font-bold">Vérification en cours</h1>

      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-emerald-300">{success}</p>}

      <Loader />
    </main>
  );
}
