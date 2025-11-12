import Logo from "@/components/logo";
import Link from "next/link";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="w-full flex flex-col max-w-md space-y-6">
        <div className="flex flex-col text-center justify-center items-center">
          <Link
            href="/"
            className="flex w-full justify-center items-center gap-4"
          >
            <Logo className="size-16" />
          </Link>
          <h1 className="text-3xl font-black text-foreground">
            Connecte toi à Creavvy
          </h1>
        </div>
        {children}
      </div>
    </div>
  );
}
