"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    // تنظیمات برای ایجاد حس "لوکس" و نرم
    const lenis = new Lenis({
      duration: 1.2, // سرعت حرکت (ثانیه)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // فرمول نرمی حرکت
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <>{children}</>;
}
