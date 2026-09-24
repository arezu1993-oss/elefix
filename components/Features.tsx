// components/Features.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Activity,
  Cpu,
  RefreshCcw,
  ShieldCheck,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Activity,
    title: "آنالیز دقیق سیگنال",
    description:
      "عیب‌یابی مدارات تا سطح IC و ترانزیستور با تجهیزات دقیق. ما قطعه را تعویض تجربی نمی‌کنیم، علت خرابی را ریشه‌یابی می‌کنیم.",
  },
  {
    icon: Cpu,
    title: "مهندسی معکوس ECU",
    description:
      "استخراج شماتیک و احیای بردهای نایاب ماشین‌آلات سنگین که امکان تامین سریع قطعه نو برای آن‌ها وجود ندارد.",
  },
  {
    icon: RefreshCcw,
    title: "طراحی سیستم جایگزین",
    description:
      "در صورت سوختگی کامل و غیرقابل تعمیر بودن برد اصلی، سیستم کنترل جایگزین متناسب با ساختار الکترومکانیکی دستگاه طراحی می‌شود.",
  },
  {
    icon: ShieldCheck,
    title: "شبیه‌سازی و تست عملکردی",
    description:
      "راستی‌آزمایی دقیق عملکرد برد تعمیر شده در شرایط شبیه‌سازی‌شده پیش از تحویل و نصب، جهت اطمینان از پایان توقف پروژه.",
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={sectionRef}
      dir="rtl"
      className="relative overflow-hidden bg-slate-50 py-12 sm:py-24 lg:py-32 border-t border-slate-200/60"
    >
      {/* پترن پس‌زمینه صنعتی محو */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)",
          backgroundSize: "3rem 3rem",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* هدر بخش */}
        <div className="mb-8 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-snug sm:leading-[1.2]">
              تعمیرات صنعتی
              <br />
              <span className="text-emerald-600 font-light">
                به روش مهندسی.
              </span>
            </h2>
            <p className="mt-3 sm:mt-6 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-normal max-w-lg">
              پایان دادن به توقف ماشین‌آلات سنگین، نیازمند حدس و آزمون‌وخطا
              نیست؛ نیازمند دانش عمیق مکانیک بیوسیستم و الکترونیک است.
            </p>
          </motion.div>
        </div>

        {/* گرید کارت‌های ویژگی */}
        <div className="grid gap-3 sm:gap-6 md:gap-8 sm:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className="group relative flex flex-col gap-3.5 sm:gap-6 rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-8 lg:p-10 shadow-sm border border-slate-200/80 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:border-emerald-200"
              >
                {/* آیکون */}
                <div className="flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-100 text-slate-500 transition-colors duration-300 group-hover:bg-emerald-50 group-hover:text-emerald-600 group-hover:border-emerald-100">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.75} />
                </div>

                {/* محتوا */}
                <div>
                  <h3 className="text-base sm:text-xl font-bold text-slate-900 mb-1.5 sm:mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* نوار Call to Action نهایی (جمع‌وجور و ریسپانسیو در موبایل) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
          className="mt-8 sm:mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 rounded-2xl sm:rounded-3xl bg-slate-900 p-5 sm:p-8 lg:p-10 shadow-xl shadow-slate-900/10 overflow-hidden relative"
        >
          {/* افکت نوری محو */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-48 sm:w-64 h-48 sm:h-64 bg-emerald-500/20 blur-[70px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-xl">
            <h4 className="text-lg sm:text-2xl font-bold text-white mb-1.5 sm:mb-2">
              دستگاه یا ماشین شما متوقف شده است؟
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm lg:text-base leading-relaxed">
              ارسال مدارک فنی و شرح خرابی برای بررسی اولیه و امکان‌سنجی مهندسی
              تعمیر.
            </p>
          </div>

          <Link
            href="/contact"
            className="relative z-10 w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 sm:px-7 sm:py-3.5 text-xs sm:text-sm font-bold text-white transition-all hover:bg-emerald-500 hover:scale-[1.02] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 shadow-md shadow-emerald-900/20"
          >
            <span>درخواست مشاوره فنی</span>
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
