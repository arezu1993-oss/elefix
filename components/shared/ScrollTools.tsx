"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollTools() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress =
        documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0;

      setScrollProgress(progress);
      setShowBackToTop(scrollTop > 300);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="fixed left-0 top-0 z-[9999] h-1 w-full bg-transparent">
        <div
          className="h-full bg-[#057f36] transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="بازگشت به بالای صفحه"
        className={`fixed bottom-6 left-5 z-[9998] flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#07111f] text-white shadow-2xl shadow-black/25 transition-all duration-300 hover:-translate-y-1 hover:bg-[#06a62e] focus:outline-none focus:ring-2 md:bottom-8 md:left-8 ${
          showBackToTop
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <ArrowUp size={22} />
      </button>
    </>
  );
}
