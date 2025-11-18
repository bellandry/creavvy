"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Define error configurations
const ERROR_CONFIGS: Record<string, { title: string; message: string; showRetry: boolean }> = {
  email_not_found: {
    title: "Email Not Found",
    message: "No account was found with this email address.",
    showRetry: false,
  },
  EXPIRED_TOKEN: {
    title: "Expired Token",
    message: "Your verification token has expired. Please request a new one.",
    showRetry: true,
  },
  INVALID_TOKEN: {
    title: "Invalid Token",
    message: "The verification token is invalid. Please request a new one.",
    showRetry: true,
  },
  USER_NOT_FOUND: {
    title: "User Not Found",
    message: "No user account was found. Please check your credentials.",
    showRetry: false,
  },
  EMAIL_ALREADY_USED: {
    title: "Email Already Used",
    message: "This email address is already associated with another account.",
    showRetry: false,
  },
  INVALID_CREDENTIALS: {
    title: "Invalid Credentials",
    message: "The email or password you entered is incorrect.",
    showRetry: true,
  },
  ACCOUNT_LOCKED: {
    title: "Account Locked",
    message: "Your account has been locked. Please contact support.",
    showRetry: false,
  },
  RATE_LIMITED: {
    title: "Too Many Requests",
    message: "You've made too many requests. Please try again later.",
    showRetry: true,
  },
};

export default function ErrorPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const errorType = searchParams.get("error");
  
  // Get error configuration or fallback to default
  const errorConfig = errorType && ERROR_CONFIGS[errorType] 
    ? ERROR_CONFIGS[errorType] 
    : {
        title: "Unexpected Error",
        message: errorType 
          ? `An unexpected error occurred: ${errorType}` 
          : "An unknown error occurred. Please try again.",
        showRetry: true,
      };

  const handleRetry = () => {
    // Go back to the previous page or to the home page
    router.back();
  };

  const goToHome = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="mx-auto h-16 w-16 rounded-full bg-destructive/10 flex items-center justify-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-10 w-10 text-destructive" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
              />
            </svg>
          </div>
          
          <h2 className="mt-6 text-3xl font-extrabold text-foreground">
            {errorConfig.title}
          </h2>
          
          <p className="mt-2 text-sm text-muted-foreground">
            {errorConfig.message}
          </p>
        </div>

        <div className="mt-8 space-y-4">
          {errorConfig.showRetry && (
            <Button
              onClick={handleRetry}
              className="w-full flex justify-center py-2 px-4"
            >
              Try Again
            </Button>
          )}
          
          <Button
            onClick={goToHome}
            variant="outline"
            className="w-full flex justify-center py-2 px-4"
          >
            Go to Homepage
          </Button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Need help?{" "}
            <Link 
              href="/contact" 
              className="font-medium text-primary hover:text-primary/80"
            >
              Contact support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}