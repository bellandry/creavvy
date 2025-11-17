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
    <div className="relative flex min-h-screen w-full">
      <Sidebar user={user} />
      <main className="max-w-7xl bg-amber-200 h-screen flex items-center justify-center flex-col mx-auto p-6 space-y-4 text-white">
        {children}
      </main>
    </div>
  );
}
