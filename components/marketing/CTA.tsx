"use client";

const CTA = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-6 text-center bg-white/[0.05] border border-white/10 rounded-xl p-8 sm:p-12 lg:p-16">
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-white tracking-tight text-3xl sm:text-4xl font-bold leading-tight max-w-xl">
          Prêt à faire briller votre contenu ?
        </h2>
        <p className="text-white/80 text-base sm:text-lg leading-normal max-w-xl">
          Rejoignez des milliers de développeurs et créateurs qui font confiance
          à Snippet Studio.
        </p>
      </div>
      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
        <span className="truncate">Commencer à créer gratuitement</span>
      </button>
    </section>
  );
};

export default CTA;
