import DashboardHeader from "@/components/dashboard/header";
import Sidebar from "@/components/dashboard/sidebar";
import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
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

  // Check if user has completed onboarding
  const dbUser = await prisma.user.findUnique({
    where: { id: user.id },
    select: { onboardingCompleted: true },
  });

  if (!dbUser?.onboardingCompleted) {
    redirect("/wizard");
  }

  // Check if user has at least one organization
  const organizations = await auth.api.listOrganizations({
    headers: await headers(),
  });

  if (!organizations || organizations.length === 0) {
    redirect("/wizard");
  }

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
