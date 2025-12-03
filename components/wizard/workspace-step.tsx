"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";

interface WorkspaceStepProps {
  userName: string;
  onComplete: (data: { name: string; slug: string }) => void;
  onBack: () => void;
  isLoading?: boolean;
}

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function WorkspaceStep({
  userName,
  onComplete,
  onBack,
  isLoading = false,
}: WorkspaceStepProps) {
  // Generate suggested workspace name from user name
  const suggestedName = `${userName}'s workspace`;
  const suggestedSlug = generateSlug(suggestedName);

  const [name, setName] = useState(suggestedName);
  const [slug, setSlug] = useState(suggestedSlug);
  const [errors, setErrors] = useState<{ name?: string; slug?: string }>({});
  const [isCheckingSlug, setIsCheckingSlug] = useState(false);

  // Auto-update slug when name changes
  useEffect(() => {
    const newSlug = generateSlug(name);
    setSlug(newSlug);
  }, [name]);

  const checkSlugAvailability = async (slugToCheck: string) => {
    if (!slugToCheck) return false;

    setIsCheckingSlug(true);
    try {
      const { data, error } = await authClient.organization.checkSlug({
        slug: slugToCheck,
      });

      if (error) {
        console.error("Error checking slug:", error);
        return false;
      }

      // data.status will be true if slug is available (not taken)
      return data?.status === true;
    } catch (error) {
      console.error("Error checking slug:", error);
      return false;
    } finally {
      setIsCheckingSlug(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    const newErrors: { name?: string; slug?: string } = {};
    if (!name.trim()) {
      newErrors.name = "Le nom du workspace est requis";
    }
    if (!slug.trim()) {
      newErrors.slug = "Le slug est requis";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Check slug availability
    const isAvailable = await checkSlugAvailability(slug);
    if (!isAvailable) {
      setErrors({ slug: "Ce slug est déjà utilisé" });
      return;
    }

    setErrors({});
    onComplete({ name: name.trim(), slug: slug.trim() });
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 flex flex-1 justify-center items-center py-10">
          <div className="layout-content-container flex flex-col w-full max-w-xl flex-1 gap-8">
            {/* ProgressBar */}
            <div className="flex flex-col gap-2 p-4">
              <div className="flex gap-6 justify-between">
                <p className="text-white text-base font-medium leading-normal">
                  Étape 2/2
                </p>
              </div>
              <div className="rounded-full bg-white/10 h-2">
                <div
                  className="h-2 rounded-full bg-primary"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>

            {/* PageHeading */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] w-full text-center">
                Créez votre workspace
              </h1>
              <p className="text-white/70 text-base font-normal leading-normal w-full text-center">
                Votre workspace est l&apos;espace où vous allez créer et gérer
                vos visuels.
              </p>
            </div>

            {/* Form Container */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 items-center w-full">
              {/* TextFields */}
              <div className="flex w-full flex-col gap-6 px-4 py-3">
                <label className="flex flex-col w-full">
                  <p className="text-white text-base font-medium leading-normal pb-2">
                    Nom du workspace
                  </p>
                  <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Mon workspace"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-offset-0 focus:ring-primary border border-white/20 bg-white/5 focus:border-primary h-14 placeholder:text-white/40 p-[15px] text-base font-normal leading-normal transition-colors duration-300"
                    disabled={isLoading}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                  )}
                </label>

                <label className="flex flex-col w-full">
                  <p className="text-white text-base font-medium leading-normal pb-2">
                    Slug
                  </p>
                  <Input
                    type="text"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    placeholder="mon-workspace"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-offset-0 focus:ring-primary border border-white/20 bg-white/5 focus:border-primary h-14 placeholder:text-white/40 p-[15px] text-base font-normal leading-normal transition-colors duration-300"
                    disabled={isLoading}
                  />
                  <p className="text-white/50 text-xs mt-1">
                    Le slug sera utilisé dans l&apos;URL de votre workspace
                  </p>
                  {errors.slug && (
                    <p className="text-red-400 text-sm mt-1">{errors.slug}</p>
                  )}
                </label>
              </div>

              {/* Buttons */}
              <div className="flex w-full flex-col sm:flex-row gap-3 px-4 py-3 justify-center mt-6">
                <Button
                  type="button"
                  onClick={onBack}
                  className="flex min-w-[84px] flex-1 max-w-sm cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-white/5 border border-white/20 text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-white/10 active:bg-white/15 transition-colors duration-300"
                  disabled={isLoading}
                >
                  <span className="truncate">Retour</span>
                </Button>
                <Button
                  type="submit"
                  className="flex min-w-[84px] flex-1 max-w-sm cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 active:bg-primary/80 transition-colors duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:text-gray-400"
                  disabled={isLoading || isCheckingSlug}
                >
                  <span className="truncate">
                    {isLoading
                      ? "Création..."
                      : isCheckingSlug
                        ? "Vérification..."
                        : "Créer le workspace"}
                  </span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}