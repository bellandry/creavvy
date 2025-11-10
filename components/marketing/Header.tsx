"use client";
import Lenis from "lenis";
import { useEffect, useRef } from "react";

const Header = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    // RAF function
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    // Start RAF
    requestAnimationFrame(raf);

    // Cleanup function
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <header className="flex items-center gap-4 justify-between whitespace-nowrap border-b border-solid border-white/10 px-0 py-5 sm:px-6">
      <div className="flex items-center gap-4">
        <div className="size-6 text-primary">
          <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.7 3.31C9.17 3.12 9.7 3 10.25 3h3.5c.55 0 1.08.12 1.55.31l4.8 1.92c1.03.41 1.03 1.74 0 2.15l-4.8 1.92c-.47.19-1 .31-1.55.31h-3.5c-.55 0-1.08-.12-1.55-.31l-4.8-1.92c-1.03-.41-1.03-1.74 0-2.15l4.8-1.92ZM18.4 16.69c.47-.19.7-.72.7-1.25v-3.5c0-.53-.23-1.06-.7-1.25l-4.8-1.92c-1.03-.41-2.13.41-2.13 1.54v7.27c0 1.13 1.1 1.95 2.13 1.54l4.8-1.92ZM8.73 9.77c-.47.19-1.55.62-1.55 1.54v3.5c0 .53.23 1.06.7 1.25l4.8 1.92c1.03.41 2.13-.41 2.13-1.54v-7.27c0-1.13-1.1-1.95-2.13-1.54l-3.95 1.59Z"></path>
          </svg>
        </div>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
          Snippet Studio
        </h2>
      </div>
      <div className="hidden items-center gap-9 lg:flex">
        <a
          className="text-white/80 hover:text-white transition-colors text-sm font-medium leading-normal"
          href="#"
        >
          Fonctionnalités
        </a>
        <a
          className="text-white/80 hover:text-white transition-colors text-sm font-medium leading-normal"
          href="#"
        >
          Tarifs
        </a>
        <a
          className="text-white/80 hover:text-white transition-colors text-sm font-medium leading-normal"
          href="#"
        >
          Blog
        </a>
      </div>
      <div className="flex flex-1 justify-end gap-2">
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
          <span className="truncate">Commencer à créer</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
