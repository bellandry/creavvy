"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUploadThing } from "@/lib/uploadthing";
import { Upload } from "lucide-react";
import { useState } from "react";

interface ProfileStepProps {
  initialName?: string;
  initialImage?: string;
  onComplete: (data: { name: string; image?: string }) => void;
  isLoading?: boolean;
}

export function ProfileStep({
  initialName = "",
  initialImage = "",
  onComplete,
  isLoading = false,
}: ProfileStepProps) {
  const [firstName, setFirstName] = useState(initialName.split(" ")[0] || "");
  const [lastName, setLastName] = useState(
    initialName.split(" ").slice(1).join(" ") || ""
  );
  const [image, setImage] = useState(initialImage);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<{
    firstName?: string;
    lastName?: string;
  }>({});
  const [isUploading, setIsUploading] = useState(false);

  const { startUpload } = useUploadThing("profileImage");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      // Create preview URL
      const previewUrl = URL.createObjectURL(file);
      setImage(previewUrl);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    const newErrors: { firstName?: string; lastName?: string } = {};
    if (!firstName.trim()) {
      newErrors.firstName = "Le prénom est requis";
    }
    if (!lastName.trim()) {
      newErrors.lastName = "Le nom est requis";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    // Upload image if a new file was selected
    let imageUrl = image;
    if (imageFile) {
      setIsUploading(true);
      try {
        const uploadResult = await startUpload([imageFile]);
        if (uploadResult && uploadResult[0]) {
          imageUrl = uploadResult[0].url;
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      } finally {
        setIsUploading(false);
      }
    }

    const fullName = `${firstName.trim()} ${lastName.trim()}`;
    onComplete({ name: fullName, image: imageUrl || undefined });
  };

  const isSubmitting = isLoading || isUploading;

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 flex flex-1 justify-center items-center py-6">
          <div className="layout-content-container flex flex-col w-full max-w-xl flex-1 gap-4">
            {/* ProgressBar */}
            <div className="flex flex-col gap-2 p-4">
              <div className="flex gap-6 justify-between">
                <p className="text-white text-base font-medium leading-normal">
                  Étape 1/2
                </p>
              </div>
              <div className="rounded-full bg-white/10 h-2">
                <div
                  className="h-2 rounded-full bg-primary"
                  style={{ width: "50%" }}
                ></div>
              </div>
            </div>

            {/* PageHeading */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] w-full text-center">
                Dis-nous en plus sur toi !
              </h1>
            </div>

            {/* Form Container */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 items-center w-full"
            >
              {/* Profile Picture Uploader */}
              <div className="flex flex-col items-center gap-4 py-6">
                <label
                  className="text-white text-base font-medium leading-normal"
                  htmlFor="profile-upload"
                >
                  Image de profil
                </label>
                <div className="group relative cursor-pointer">
                  <input
                    className="hidden"
                    id="profile-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    disabled={isSubmitting}
                  />
                  <label
                    htmlFor="profile-upload"
                    className="cursor-pointer block"
                  >
                    {image ? (
                      <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-primary relative">
                        <img
                          src={image}
                          alt="Profile preview"
                          loading="lazy"
                          className="object-cover h-full w-full"
                        />
                        <div className="absolute inset-0 bg-black/50 rounded-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Upload className="w-6 h-6 text-white" />
                          <p className="text-white text-sm font-semibold mt-1">
                            Changer
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="w-32 h-32 rounded-full bg-white/5 flex items-center justify-center border-2 border-dashed border-white/20 group-hover:border-primary transition-colors duration-300">
                        <Upload className="w-12 h-12 text-white/40 group-hover:text-primary transition-colors duration-300" />
                        <div className="absolute inset-0 bg-black/50 rounded-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="text-white text-sm font-semibold">
                            Uploader
                          </p>
                        </div>
                      </div>
                    )}
                  </label>
                </div>
                <p className="text-white/50 text-sm font-normal leading-normal text-center">
                  Cliquez ou glissez-déposez pour uploader
                </p>
              </div>

              {/* TextFields */}
              <div className="flex w-full flex-col sm:flex-row gap-6 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-white text-base font-medium leading-normal pb-2">
                    Nom et Prénom
                  </p>
                  <Input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Ex: Jean"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-offset-0 focus:ring-primary border border-white/20 bg-white/5 focus:border-primary h-14 placeholder:text-white/40 p-[15px] text-base font-normal leading-normal transition-colors duration-300"
                    disabled={isSubmitting}
                  />
                  {errors.firstName && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </label>
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-white text-base font-medium leading-normal pb-2">
                    Nom
                  </p>
                  <Input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Ex: Dupont"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-offset-0 focus:ring-primary border border-white/20 bg-white/5 focus:border-primary h-14 placeholder:text-white/40 p-[15px] text-base font-normal leading-normal transition-colors duration-300"
                    disabled={isSubmitting}
                  />
                  {errors.lastName && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.lastName}
                    </p>
                  )}
                </label>
              </div>

              {/* SingleButton */}
              <div className="flex px-4 py-3 justify-center mt-6 w-full">
                <Button
                  type="submit"
                  className="flex min-w-[84px] w-full max-w-sm cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 active:bg-primary/80 transition-colors duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:text-gray-400"
                  disabled={isSubmitting}
                >
                  <span className="truncate">
                    {isUploading
                      ? "Upload en cours..."
                      : isLoading
                        ? "Enregistrement..."
                        : "Continuer"}
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
