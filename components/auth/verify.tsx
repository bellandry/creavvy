"use client";

import { authClient } from "@/lib/auth-client";
import { Loader } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function Verify() {
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | null>(null);

  const token = searchParams.get("token");

  const verifyToken = useCallback(async () => {
    if (error) return;

    if (!token) {
      setError("Token absent !");
      return;
    }
    const res = await authClient.magicLink.verify({
      query: { token: token },
    });

    if (res.error) {
      setError(res.error.message || "une erreur s'est produite");
    }
  }, [token, error]);

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

      <Loader />
    </main>
  );
}
