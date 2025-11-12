"use client";

import { CheckEmail } from "@/components/auth/check-email";
import BackBtn from "@/components/back-btn";

export default function CheckEmailPage() {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <BackBtn url="/sign-in" text="Connexion" />
      <CheckEmail />
    </div>
  );
}
