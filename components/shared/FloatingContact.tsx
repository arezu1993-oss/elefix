"use client";

import React from "react";
import { PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FloatingCallButtonProps {
  isHidden?: boolean;
}

export default function FloatingCallButton({
  isHidden = false,
}: FloatingCallButtonProps) {
  const phoneNumber = "tel:09375525707";

  return (
    <AnimatePresence>
      {!isHidden && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.1, y: 20 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 flex items-center group"
          dir="rtl"
        >
          {/* تولتیپ متنی زیبا هنگام هاور روی دسکتاپ */}
          <span className="hidden md:inline-block pointer-events-none absolute right-full ml-0 mr-3 px-3 py-1.5 rounded-xl bg-[var(--color-ink-800,#1e293b)] text-white text-xs font-bold whitespace-nowrap shadow-lg border border-[var(--color-line-dark,rgba(255,255,255,0.1))] opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
            تماس مستقیم با کارشناس
          </span>

          <a
            href={phoneNumber}
            aria-label="برقراری تماس مستقیم"
            className="relative flex h-14 w-14 sm:h-15 sm:w-15 items-center justify-center rounded-full bg-[var(--color-accent-500,#10b981)] text-white shadow-xl shadow-[var(--color-accent-500)]/30 hover:bg-[var(--color-accent-600,#059669)] hover:scale-105 active:scale-95 transition-all duration-200"
          >
            {/* حلقه پالس ملایم دور دکمه برای جلب توجه چشم */}
            <span className="absolute -inset-1 rounded-full bg-[var(--color-accent-400,#34d399)] opacity-10 animate-ping pointer-events-none" />

            {/* آیکون تماس با تکان جزئی (Wiggle) دوره‌ای */}
            <motion.div
              animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
              transition={{
                repeat: Infinity,
                repeatDelay: 1.5,
                duration: 0.1,
                ease: "easeInOut",
              }}
            >
              <PhoneCall className="w-6 h-6 sm:w-7 sm:h-7" />
            </motion.div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
