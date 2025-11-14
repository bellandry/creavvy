import SignIn from "@/components/auth/sign-in";
import BackBtn from "@/components/back-btn";
import { PAGE_SEO } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: PAGE_SEO.signin.title,
  description: PAGE_SEO.signin.description,
  openGraph: {
    title: PAGE_SEO.signin.title,
    description: PAGE_SEO.signin.description,
    url: PAGE_SEO.signin.path,
    images: [
      {
        url: PAGE_SEO.signin.image,
        width: 1200,
        height: 630,
        alt: PAGE_SEO.signin.imageAlt,
      },
    ],
  },
  twitter: {
    title: PAGE_SEO.signin.title,
    description: PAGE_SEO.signin.description,
    images: [PAGE_SEO.signin.image],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function SignInPage() {
  return (
    <div className="h-full flex flex-col items-center justify-center p-2">
      <BackBtn />
      <SignIn />
    </div>
  );
}
