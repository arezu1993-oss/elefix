"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Factory, Tractor, Building2, Wheat, Wrench } from "lucide-react";

const targetIndustries = [
  {
    id: "oil-gas",
    title: "نفت، گاز و پتروشیمی",
    description: "پالایشگاه‌ها، شرکت‌های ملی و ناوگان حفاری",
    icon: Factory,
  },
  {
    id: "mining-roads",
    title: "معادن و راه‌سازی",
    description: "پیمانکاران عمرانی و ماشین‌آلات سنگین",
    icon: Tractor,
  },
  {
    id: "municipality",
    title: "شهرداری و راهداری",
    description: "ناوگان خدمات شهری و ماشین‌آلات جاده‌ای",
    icon: Building2,
  },
  {
    id: "agriculture",
    title: "کشت و صنعت",
    description: "تراکتورها، کمباین‌ها و مجتمع‌های دامپروری",
    icon: Wheat,
  },
  {
    id: "garages",
    title: "گاراژها و تعمیرگاه‌ها",
    description: "پشتیبانی تخصصی الکترونیک برای همکاران مکانیک",
    icon: Wrench,
  },
];

const containerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function ClientsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-40px" });

  return (
    <section
      ref={sectionRef}
      dir="rtl"
      className="relative py-8 sm:py-20 bg-white border-t border-slate-200/60 overflow-hidden"
    >
      {/* پترن نقطه‌ای ظریف مهندسی */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, #0f172a 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* هدر بخش (پدینگ و فواصل فشرده در موبایل) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-6 sm:mb-12"
        >
          <div className="mx-auto w-10 sm:w-12 h-1 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full mb-3 sm:mb-4" />
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-2 sm:mb-3">
            صنایع و همکاران{" "}
            <span className="text-emerald-600 font-light">هدف ما</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            پشتیبانی و خدمات تخصصی الکترونیک برای ماشین‌آلات سنگین صنایع حیاتی
            کشور، پروژه‌های عمرانی و همکاران فنی.
          </p>
        </motion.div>

        {/* گرید کارت‌ها: در موبایل ۲ ستونه، کارت آخر تمام‌عرض، در دسکتاپ ۵ ستونه */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-5 gap-2.5 sm:gap-4 lg:gap-5"
        >
          {targetIndustries.map((item, index) => {
            const Icon = item.icon;
            const isLastOnMobile = index === 4;

            return (
              <motion.div
                key={item.id}
                variants={itemVariant}
                className={`group flex rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-emerald-300 hover:-translate-y-1 ${
                  isLastOnMobile
                    ? "col-span-2 lg:col-span-1 flex-row items-center text-right p-3.5 sm:p-5 sm:flex-col sm:text-center gap-3 sm:gap-0"
                    : "flex-col items-center text-center p-3.5 sm:p-5"
                }`}
              >
                {/* ظرف آیکون فشرده */}
                <div
                  className={`flex shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-slate-50 border border-slate-100 text-slate-500 transition-colors duration-300 group-hover:bg-emerald-50 group-hover:text-emerald-600 group-hover:border-emerald-200 ${
                    isLastOnMobile
                      ? "w-10 h-10 sm:w-14 sm:h-14 sm:mb-3.5"
                      : "w-10 h-10 sm:w-14 sm:h-14 mb-2.5 sm:mb-3.5"
                  }`}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.6} />
                </div>

                {/* متون */}
                <div className={isLastOnMobile ? "flex-1 sm:flex-none" : ""}>
                  <h3 className="text-xs sm:text-base font-bold text-slate-900 mb-1 transition-colors duration-300 group-hover:text-emerald-700 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-tight sm:leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
