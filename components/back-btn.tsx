import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface BackBtnProps {
  className?: string;
  url?: string;
  text?: string;
}

export default function BackBtn({ className, url, text }: BackBtnProps) {
  return (
    <Link
      href={url ? url : "/"}
      className={`fixed top-4 left-4 flex items-center gap-2 text-purple-400 hover:text-purple-500 ${className}`}
    >
      <ArrowLeft className="size-4" />
      {text ? text : "Retour à l'accueil"}
    </Link>
  );
}
