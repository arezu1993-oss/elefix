"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingContact({
  isHidden = false,
}: {
  isHidden?: boolean;
}) {
  const whatsappLink = "https://wa.me/989120909323";

  return (
    <AnimatePresence>
      {!isHidden && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 z-[999] lg:hidden"
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            aria-label="گفت‌وگو در واتس‌اپ"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition hover:bg-green-600"
          >
            <MessageCircle size={30} fill="white" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
