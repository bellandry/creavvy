"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-col gap-10 items-center text-center">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tighter max-w-4xl">
          Transformez code et captures d&apos;écran en contenu viral.
        </h1>
        <h2 className="text-white/80 text-base sm:text-lg lg:text-xl font-normal leading-normal max-w-2xl">
          Créez des visuels de code, des captures d&apos;écran stylisées et des
          posts techniques parfaits pour les réseaux sociaux en quelques
          secondes.
        </h2>
      </div>
      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
        <span className="truncate">Commencer à créer gratuitement</span>
      </button>
      <div className="relative w-full max-w-4xl aspect-video rounded-xl bg-white/5 border border-white/10 shadow-2xl shadow-primary/20 p-2">
        <Image
          width={500}
          height={500}
          className="rounded-lg w-full h-full object-cover"
          alt="sniper studio dashboard"
          src="/home/screen.png"
        />
      </div>
    </section>
  );
};

export default Hero;
