import Link from "next/link";
import MailSingIn from "./mail-sign-in";
import SocialLogin from "./social-login";

export default function SignIn() {
  return (
    <div className="min-h-full flex flex-col px-2">
      <div
        className="flex flex-1 items-center py-6 justify-center"
        style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
      >
        <div className="layout-container flex h-full w-full max-w-md flex-col items-center justify-center">
          <div className="flex w-full flex-col items-center gap-6 rounded-xl bg-white/5 px-4 md:px-6 py-8 shadow-2xl">
            <p className="items-center uppercase text-neutral-400">
              Se connecter avec
            </p>

            {/* Social Sign-in Buttons */}
            <SocialLogin />

            {/* Separator */}
            <p className="text-neutral-400 text-sm font-normal leading-normal w-full text-center">
              &#8212;&#8212;&#8212;&#8212;&#8212; OU
              &#8212;&#8212;&#8212;&#8212;&#8212;
            </p>

            {/* Email Sign-in */}
            <MailSingIn />
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-muted-foreground">
        <p className="text-[#888888] text-xs text-center">
          En continuant, tu acceptes nos
          <Link
            className="font-medium text-[#ad92c9] hover:text-primary transition-colors"
            href="#"
          >
            {" "}
            Conditions d&#39;utilisation
          </Link>{" "}
          et notre
          <Link
            className="font-medium text-[#ad92c9] hover:text-primary transition-colors"
            href="#"
          >
            {" "}
            Politique de confidentialit&#233;
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
