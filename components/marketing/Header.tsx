"use client";
import Lenis from "lenis";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const lenisRef = useRef<Lenis | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

    // Handle scroll event for header styling
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      lenis.destroy();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      lenisRef.current?.scrollTo(element, {
        offset: -80, // Adjust for header height
        duration: 1.5,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
    closeMenu();
  };

  return (
    <>
      <header
        className={`fixed bg-background-dark/90 backdrop-blur-md top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-6xl z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "rounded-full border border-white/10 shadow-lg shadow-primary/10"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="flex items-center gap-9 justify-between whitespace-nowrap px-4 py-3 sm:px-6">
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
              Creavvy
            </h2>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-9 lg:flex">
            <Link
              href={"/#fonctionnalites"}
              className="text-white/80 hover:text-white transition-colors text-sm font-medium leading-normal"
              onClick={() => scrollToSection("fonctionnalites")}
            >
              Fonctionnalités
            </Link>
            <Link
              href={"/#tarifs"}
              className="text-white/80 hover:text-white transition-colors text-sm font-medium leading-normal"
              onClick={() => scrollToSection("tarifs")}
            >
              Tarifs
            </Link>
            <Link
              href={"/#faq"}
              className="text-white/80 hover:text-white transition-colors text-sm font-medium leading-normal"
              onClick={() => scrollToSection("faq")}
            >
              FAQ
            </Link>
            <Link
              href={"/contact"}
              className="text-white/80 hover:text-white transition-colors text-sm font-medium leading-normal"
            >
              Contact
            </Link>
          </div>

          <div className="flex justify-end gap-2">
            <button className="min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity hidden lg:flex">
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
                Creavvy
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
            <Link
              href={"/#fonctionnalites"}
              className="text-white/80 hover:text-white transition-colors text-xl font-medium leading-normal"
              onClick={() => {
                scrollToSection("fonctionnalites");
                closeMenu();
              }}
            >
              Fonctionnalités
            </Link>
            <Link
              href={"/#tarifs"}
              className="text-white/80 hover:text-white transition-colors text-xl font-medium leading-normal"
              onClick={() => {
                scrollToSection("tarifs");
                closeMenu();
              }}
            >
              Tarifs
            </Link>
            <Link
              href={"/#faq"}
              className="text-white/80 hover:text-white transition-colors text-xl font-medium leading-normal"
              onClick={() => {
                scrollToSection("faq");
                closeMenu();
              }}
            >
              FAQ
            </Link>
            <Link
              href={"/contact"}
              className="text-white/80 hover:text-white transition-colors text-xl font-medium leading-normal"
              onClick={() => {
                closeMenu();
              }}
            >
              Contact
            </Link>
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
