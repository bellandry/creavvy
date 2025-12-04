"use client";

import { toastManager } from "@/components/ui/toast";
import { ProfileStep } from "@/components/wizard/profile-step";
import { WorkspaceStep } from "@/components/wizard/workspace-step";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type WizardStep = "profile" | "workspace";

export default function WizardPage() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const [currentStep, setCurrentStep] = useState<WizardStep>("profile");
  const [isLoading, setIsLoading] = useState(false);
  const [profileData, setProfileData] = useState<{
    name: string;
    image?: string;
  } | null>(null);

  useEffect(() => {
    // Redirect to dashboard if onboarding is already completed
    if (!isPending && session?.user) {
      const user = session.user as any;
      if (user.onboardingCompleted) {
        router.push("/dashboard");
      }
    }
  }, [isPending, session, router]);

  useEffect(() => {
    // Redirect to sign-in if not authenticated
    if (!isPending && !session?.user) {
      router.push("/sign-in");
    }
  }, [isPending, session, router]);

  const handleProfileComplete = async (data: {
    name: string;
    image?: string;
  }) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/wizard/update-profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Erreur lors de la mise à jour");
      }

      setProfileData(data);
      setCurrentStep("workspace");
      toastManager.add({
        title: "Profil mis à jour",
        description: "Votre profil a été mis à jour avec succès.",
        type: "success",
      });
    } catch (error) {
      console.error("Error updating profile:", error);
      toastManager.add({
        title: "Erreur",
        description:
          error instanceof Error
            ? error.message
            : "Erreur lors de la mise à jour du profil",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleWorkspaceComplete = async (data: {
    name: string;
    slug: string;
  }) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/wizard/create-workspace", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Erreur lors de la création");
      }

      toastManager.add({
        title: "Workspace créé",
        description: "Votre workspace a été créé avec succès.",
        type: "success",
      });

      // Redirect to dashboard
      router.push("/dashboard");
    } catch (error) {
      console.error("Error creating workspace:", error);
      toastManager.add({
        title: "Erreur",
        description:
          error instanceof Error
            ? error.message
            : "Erreur lors de la création du workspace",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    setCurrentStep("profile");
  };

  if (isPending) {
    return (
      <div className="max-w-md mx-auto min-h-screen justify-center flex flex-col items-center w-full space-y-4">
        <p className="text-center text-white">Chargement...</p>
      </div>
    );
  }

  if (!session?.user) {
    return (
      <div className="max-w-md mx-auto min-h-screen justify-center flex flex-col items-center w-full space-y-4">
        <p className="text-center text-white">Redirection...</p>
      </div>
    );
  }

  const user = session.user;

  return (
    <>
      {currentStep === "profile" && (
        <ProfileStep
          initialName={user.name || ""}
          initialImage={user.image || ""}
          onComplete={handleProfileComplete}
          isLoading={isLoading}
        />
      )}
      {currentStep === "workspace" && profileData && (
        <WorkspaceStep
          userName={profileData.name}
          onComplete={handleWorkspaceComplete}
          onBack={handleBack}
          isLoading={isLoading}
        />
      )}
    </>
  );
}
