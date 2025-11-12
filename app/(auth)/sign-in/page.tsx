import SignIn from "@/components/auth/sign-in";
import BackBtn from "@/components/back-btn";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function SignInPage() {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <div className="h-full flex flex-col items-center justify-center p-4">
      <BackBtn />
      <SignIn />
    </div>
  );
}
