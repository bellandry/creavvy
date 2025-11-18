import DashboardHeader from "@/components/dashboard/header";
import Sidebar from "@/components/dashboard/sidebar";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/sign-in");
  }

  const { user } = session;

  return (
    <div className="relative flex h-screen w-full">
      <Sidebar user={user} />
      <main className="h-screen flex w-full flex-col space-y-4 text-white">
        <DashboardHeader />
        <div className="mx-auto max-w-7xl w-full">{children}</div>
      </main>
    </div>
  );
}
