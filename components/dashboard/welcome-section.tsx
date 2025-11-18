import { User } from "better-auth";

type WelcomeSectionProps = {
  user: User;
};

export function WelcomeSection({ user }: WelcomeSectionProps) {
  return (
    <div>
      <p className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">
        Bienvenue, {user.name}!
      </p>
      <p className="text-gray-400 mt-1">
        Heureux de vous revoir. Prêt à créer quelque chose d&apos;incroyable ?
      </p>
    </div>
  );
}