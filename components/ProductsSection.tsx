// components/TrustSection.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpLeft, Cpu, ShieldCheck, Wrench } from "lucide-react";

const pillars = [
  {
    num: "۱",
    title: "احیای بردهای تحریمی",
    desc: "مهندسی معکوس ECU و کنترلرهای نایاب",
    tag: "COMPONENT LEVEL",
    icon: Cpu,
    href: "/services/board-repair",
  },
  {
    num: "۲",
    title: "الکتروهیدرولیک و CAN",
    desc: "همگام‌سازی دقیق شیرهای برقی و سنسورها",
    tag: "HEAVY MACHINERY",
    icon: Wrench,
    href: "/services/machinery-systems",
  },
  {
    num: "۳",
    title: "ایمنی هوشمند جرثقیل",
    desc: "سامانه بومی پایش بار و زاویه (LMI)",
    tag: "PATENTED TECH",
    icon: ShieldCheck,
    href: "/services/crane-industrial",
  },
];

const verifiedStats = [
  { value: "+۹ سال", label: "تجربه تخصصی میدانی" },
  { value: "دکتری", label: "مهندسی مکانیک ماشین‌آلات" },
  { value: "تست زیر بار", label: "تضمین بازگشت به چرخه کار" },
];

export default function TrustSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative bg-white py-24 sm:py-32 lg:py-36 overflow-hidden border-t border-slate-100"
    >
      {/* خطوط архитектурی بسیار محو به سبک سایت‌های صنعتی لوکس */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #f1f5f9 1px, transparent 1px), linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)",
          backgroundSize: "6rem 6rem",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* ۱. هدر فوق‌خلوت با فضای تنفسی زیاد */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/70 mb-6">
              <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
              <span className="text-xs font-bold tracking-wide text-emerald-900">
                استاندارد مهندسی الفیکس
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.18]">
              پایان خواب دستگاه.
              <br />
              <span className="text-emerald-600">با دقت مدار، نه حدس.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-slate-500 text-base sm:text-lg max-w-sm leading-relaxed font-normal md:pb-2"
          >
            ریشه‌یابی خرابی‌های پیچیده در ماشین‌آلات معدنی و راه‌سازی که سایر
            مراکز از تعمیر آن انصراف داده‌اند.
          </motion.p>
        </div>

        {/* ۲. شبکه بنتو (Bento Grid) با فاصله‌گذاری باز */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* کارت بزرگ تصویر آزمایشگاه / برند (۷ ستون) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="lg:col-span-7 group relative rounded-[2rem] overflow-hidden bg-slate-900 min-h-[380px] sm:min-h-[460px] flex flex-col justify-between p-7 sm:p-10 shadow-xl shadow-slate-900/5"
          >
            <Image
              src="/images/featured.jpg"
              alt="آزمایشگاه تخصصی الکترونیک صنعتی الفیکس"
              fill
              className="object-cover opacity-80 transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />

            {/* گرادینت سینمایی */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

            {/* تگ بالای تصویر */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/75 backdrop-blur-md border border-white/15 px-4 py-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="text-[11px] font-mono tracking-wider text-emerald-300 uppercase">
                  DIAGNOSTIC LAB • TEHRAN
                </span>
              </div>

              <Link
                href="/about/invention"
                className="inline-flex items-center gap-1.5 rounded-full bg-white/10 hover:bg-emerald-600 backdrop-blur-md border border-white/20 px-4 py-1.5 text-xs font-medium text-white transition-colors"
              >
                <span>مشاهده ثبت اختراع</span>
                <ArrowUpLeft className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* باکس شیشه‌ای پایین تصویر */}
            <div className="relative z-10 mt-auto pt-12">
              <p className="text-emerald-400 font-mono text-xs tracking-widest uppercase mb-2">
                DR. MOHAMMAD SHADEMANI
              </p>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug max-w-lg">
                احیای بردهای میلیاردی با مهندسی معکوس و تست عملیاتی
              </h3>

              {/* آمار مستند داخل پنل */}
              <div className="mt-8 pt-6 border-t border-white/15 grid grid-cols-3 gap-4">
                {verifiedStats.map((item, idx) => (
                  <div key={idx}>
                    <p className="text-lg sm:text-2xl font-black text-white">
                      {item.value}
                    </p>
                    <p className="text-[11px] sm:text-xs text-slate-300 mt-1">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ستون ۳ کارت خلوت و خلاقانه (۵ ستون) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-5">
            {pillars.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 0.2 + index * 0.1,
                  }}
                >
                  <Link
                    href={item.href}
                    className="group relative flex items-center justify-between p-6 sm:p-7 rounded-[1.75rem] bg-slate-50/90 hover:bg-white border border-slate-200/80 hover:border-emerald-500/60 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/5"
                  >
                    <div className="flex items-start gap-5">
                      {/* شماره مهندسی درشت */}
                      <span className="font-mono text-2xl sm:text-3xl font-light text-slate-300 group-hover:text-emerald-600 transition-colors select-none">
                        {item.num}
                      </span>

                      <div>
                        <span className="inline-block text-[10px] tracking-widest text-slate-400 uppercase mb-1">
                          {item.tag}
                        </span>
                        <h4 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-500 mt-1">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {/* آیکون دایره‌ای مینیمال */}
                    <div className="h-11 w-11 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-all shrink-0">
                      <Icon className="w-5 h-5" strokeWidth={1.75} />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
