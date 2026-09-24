"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function HeroSlider() {
  return (
    <section
      className="relative w-full h-screen min-h-[600px] flex items-center overflow-hidden bg-neutral-950 text-white"
      dir="rtl"
    >
      {/* پس‌زمینه سینمایی با نورپردازی مهندسی */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute inset-0 bg-gradient-to-l from-neutral-950/95 via-neutral-950/75 to-neutral-950/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-neutral-950/50 z-10" />

        <Image
          src="/images/hero-lab.jpg"
          alt="لابراتوار مهندسی معکوس الکترونیک ماشین آلات سنگین"
          fill
          priority
          className="object-cover object-center brightness-90"
          sizes="100vw"
        />

        {/* گرید ظریف صنعتی */}
        <div
          className="absolute inset-0 z-10 opacity-15"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* محتوای هیرو به صورت Staggered Animation */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 z-20 pt-16">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* نشان هویت تخصصی */}
          <motion.div variants={itemVariants} className="mb-5 inline-block">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-700/70 text-xs sm:text-sm text-neutral-300 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
              <span className="font-bold text-white tracking-wide">
                دکتر محمد شادمانی
              </span>
              <span className="text-neutral-500">•</span>
              <span>دکتری بیوسیستم و عیب‌یابی ماشین‌آلات</span>
            </div>
          </motion.div>

          {/* تیتر اصلی مقتدر */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-5xl lg:text-[46px] font-black leading-[1.25] text-white tracking-tight"
          >
            توقف ماشین‌آلات، توقف پروژه است؛
            <br />
            <span className="text-emerald-400">احیای تخصصی مغز متفکر</span>{" "}
            تجهیزات سنگین
          </motion.h1>

          {/* زیرتیتر خلاصه و گزیده */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base lg:text-lg text-neutral-300 mt-5 max-w-2xl font-light leading-relaxed"
          >
            عیب‌یابی میدانی، تعمیرات فوق‌تخصصی ECU و مهندسی معکوس بردهای
            الکترونیکی در شرایط کمبود و تحریم قطعات.
          </motion.p>

          {/* ۲ ویژگی کلیدی به شکل بولت مینیمال */}
          <motion.div
            variants={itemVariants}
            className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-neutral-400 font-normal"
          >
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              تعهد کامل تا استارت و تحویل میدانی دستگاه
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              دارای ثبت اختراع صنعتی در سیستم‌های هیدرولیک
            </span>
          </motion.div>

          {/* دکمه‌های اکشن */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold px-7 py-3 rounded-lg text-sm sm:text-base transition duration-200 shadow-lg shadow-emerald-500/25 active:scale-[0.98]"
            >
              <span>پذیرش و بررسی فوری برد</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>

            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 bg-neutral-900/80 hover:bg-neutral-800 text-neutral-200 border border-neutral-700/80 px-6 py-3 rounded-lg text-sm sm:text-base transition duration-200 backdrop-blur-sm"
            >
              <span>نمونه‌کارها و سوابق</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
