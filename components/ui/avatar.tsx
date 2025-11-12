"use client";

import { Avatar as AvatarPrimitive } from "@base-ui-components/react/avatar";

import { cn } from "@/lib/utils";

function Avatar({ className, ...props }: AvatarPrimitive.Root.Props) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "inline-flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-background align-middle text-xs font-medium select-none",
        className
      )}
      {...props}
    />
  );
}

function AvatarImage({ className, ...props }: AvatarPrimitive.Image.Props) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("size-full object-cover", className)}
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  children,
  ...props
}: AvatarPrimitive.Fallback.Props) {
  // Extract the first letters of the first two words if children is a string
  const getInitials = (text: string) => {
    const words = text.trim().split(/\s+/);
    const firstLetters = words
      .slice(0, 2)
      .map((word) => word.charAt(0).toUpperCase())
      .join("");
    return firstLetters;
  };

  // If children is a string, transform it to show only first letters of first two words
  const transformedChildren =
    typeof children === "string" ? getInitials(children) : children;

  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "flex size-full items-center justify-center rounded-full bg-white/5",
        className
      )}
      {...props}
    >
      {transformedChildren}
    </AvatarPrimitive.Fallback>
  );
}

export { Avatar, AvatarFallback, AvatarImage };
