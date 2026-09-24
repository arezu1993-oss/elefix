// components/StatsSection.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { Wrench, Clock, ShieldCheck, Cpu } from "lucide-react";

const toPersian = (n: number) => new Intl.NumberFormat("fa-IR").format(n);

const metrics = [
  {
    value: 9,
    suffix: " سال",
    label: "تجربه تخصصی",
    sub: "الکترونیک و مکانیک بیوسیستم",
    icon: Wrench,
  },
  {
    value: 24,
    prefix: "> ",
    suffix: " ساعت",
    label: "عیب‌یابی اولیه",
    sub: "تشخیص ریشه‌ای خطای مدار",
    icon: Clock,
  },
  {
    value: 100,
    suffix: "٪",
    label: "تعهد به بازگشت",
    sub: "همراهی تا راه‌اندازی دستگاه",
    icon: ShieldCheck,
  },
  {
    value: 1,
    suffix: " مرجع",
    label: "طراحی و مهندسی",
    sub: "احیای بردهای نایاب صنعتی",
    icon: Cpu,
  },
];

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      ref={ref}
      dir="rtl"
      className="relative overflow-hidden bg-slate-50 py-12 sm:py-24 lg:py-32 border-t border-slate-200"
    >
      {/* پترن شطرنجی پس‌زمینه مهندسی */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px] sm:bg-[size:24px_24px]"></div>

      {/* هاله نوری سبز رنگ بسیار ملایم */}
      <div className="absolute top-0 right-1/4 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* هدر بخش */}
        <div className="mx-auto max-w-2xl text-center mb-8 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-emerald-100/60 border border-emerald-200/60 px-3 py-1 sm:px-4 sm:py-1.5 text-[11px] sm:text-xs font-bold tracking-wider text-emerald-800 mb-3 sm:mb-5 shadow-sm">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            شاخص‌های عملکرد سازمانی
          </span>
          <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-4xl">
            دقت در{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-emerald-600 to-teal-500">
              مهندسی
            </span>
            ، سرعت در اجرا
          </h2>
        </div>

        {/* گرید ۲ ستونه در موبایل و ۴ ستونه در دسکتاپ */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
          {metrics.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className="group relative flex flex-col justify-between rounded-2xl sm:rounded-[2rem] bg-white p-4 sm:p-7 shadow-sm border border-slate-200/70 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-emerald-900/5 hover:border-emerald-200 z-10"
              >
                {/* آیکون */}
                <div className="flex items-center justify-between mb-4 sm:mb-8">
                  <div className="flex h-10 w-10 sm:h-13 sm:w-13 items-center justify-center rounded-xl sm:rounded-2xl bg-emerald-50 border border-emerald-100/60 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-xs">
                    <Icon
                      className="h-5 w-5 sm:h-6 sm:w-6"
                      strokeWidth={1.75}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-baseline gap-0.5 sm:gap-1 text-slate-900 font-black tracking-tight">
                    {item.prefix && (
                      <span className="text-lg sm:text-2xl font-bold text-slate-400">
                        {item.prefix}
                      </span>
                    )}
                    <span className="text-3xl sm:text-4xl lg:text-5xl tabular-nums">
                      {inView ? (
                        <CountUp
                          end={item.value}
                          duration={2}
                          formattingFn={toPersian}
                        />
                      ) : (
                        toPersian(0)
                      )}
                    </span>
                    <span className="text-xs sm:text-base font-bold text-emerald-600 mr-0.5 sm:mr-1">
                      {item.suffix}
                    </span>
                  </div>

                  <h3 className="mt-2.5 sm:mt-4 text-xs sm:text-base font-bold text-slate-900">
                    {item.label}
                  </h3>
                  <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs text-slate-500 font-medium leading-relaxed line-clamp-2">
                    {item.sub}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* نوار پایینی تیره (کامپکت و شیک در موبایل) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-6 sm:mt-12 rounded-2xl sm:rounded-3xl bg-slate-900 p-4 sm:p-7 shadow-xl shadow-slate-900/10 flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="relative flex items-center gap-2.5 w-full lg:w-auto justify-start">
            <div className="w-1 sm:w-1.5 h-5 sm:h-7 bg-emerald-500 rounded-full"></div>
            <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
              پوشش تخصصی سیستم‌های سنگین:
            </span>
          </div>

          <div className="relative flex flex-wrap gap-1.5 sm:gap-3 text-[11px] sm:text-xs font-semibold text-slate-300 w-full lg:w-auto">
            {[
              "کنترلرهای موتور دیزل",
              "بردهای هیدرولیک و پمپ",
              "سیستم‌های مانیتورینگ",
              "یونیت‌های تزریق",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-lg sm:rounded-xl bg-slate-800/90 px-2.5 py-1.5 sm:px-4 sm:py-2 border border-slate-700/60 hover:bg-slate-700 hover:text-white transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
