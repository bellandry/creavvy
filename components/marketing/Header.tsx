"use client";
import Lenis from "lenis";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const lenisRef = useRef<Lenis | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
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

        {/* Desktop Navigation */}
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
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity hidden lg:flex">
            <span className="truncate">Commencer à créer</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col justify-center items-center gap-1 w-10 h-10 rounded-lg bg-white/5 border border-white/10"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-background-dark z-50 lg:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-white/10">
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
            <button
              className="flex flex-col justify-center items-center gap-1 w-10 h-10 rounded-lg bg-white/5 border border-white/10"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <span className="block w-5 h-0.5 bg-white rounded-full rotate-45 translate-y-1.5"></span>
              <span className="block w-5 h-0.5 bg-white rounded-full -rotate-45 -translate-y-1.5"></span>
            </button>
          </div>

          <div className="flex flex-col items-center justify-center flex-1 gap-8 p-6">
            <a
              className="text-white/80 hover:text-white transition-colors text-xl font-medium leading-normal"
              href="#"
              onClick={closeMenu}
            >
              Fonctionnalités
            </a>
            <a
              className="text-white/80 hover:text-white transition-colors text-xl font-medium leading-normal"
              href="#"
              onClick={closeMenu}
            >
              Tarifs
            </a>
            <a
              className="text-white/80 hover:text-white transition-colors text-xl font-medium leading-normal"
              href="#"
              onClick={closeMenu}
            >
              Blog
            </a>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
              <span className="truncate">Commencer à créer</span>
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-500"
          onClick={closeMenu}
        ></div>
      )}
    </>
  );
};

export default Header;
