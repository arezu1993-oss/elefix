"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  ShieldAlert,
  Truck,
  Gauge,
  ArrowLeft,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const servicesData = [
  {
    id: 1,
    title: "تعمیرات فوق‌تخصصی بردهای الکترونیکی و ایسیو",
    subtitle: "احیای بردهای نایاب، گران‌قیمت و تحریمی در سطح قطعه",
    description:
      "عیب‌یابی مدارات چندلایه، بازسازی کنترلرها، مانیتورها و ECUهای ماشین‌آلات سنگین (ترکس، اطلس، کوماتسو و کاترپیلار) همراه با تست دقیق زیر بار نامی قبل از تحویل.",
    icon: Cpu,
    imageSrc: "/images/service-boards.jpg",
    href: "/services/board-repair",
  },
  {
    id: 2,
    title: "سیستم‌های هوشمند ایمنی و کنترل جرثقیل (LMI)",
    subtitle: "سامانه پایش بلادرنگ بار و واژگونی (دارای گواهی ثبت اختراع)",
    description:
      "طراحی و نصب سامانه وایرلس پایش لود، زاویه و طول بوم جهت جلوگیری از واژگونی جرثقیل‌های کارگاهی و بوم‌بلند؛ نصب پلاگ‌اندپلی بدون دستکاری سیم‌کشی فابریک.",
    icon: ShieldAlert,
    imageSrc: "/images/service-crane.jpg",
    href: "/services/crane-industrial",
  },
  {
    id: 3,
    title: "الکترونیک ماشین‌آلات راه‌سازی و معدنی",
    subtitle: "عیب‌یابی شبکه CAN Bus و سیستم‌های الکتروهیدرولیک",
    description:
      "تسلط توأمان بر مدارات هیدرولیک پروپرشنال و بردهای فرمان. ریشه‌یابی خطاهای ناشناخته سیستم‌های مکانیکی و برقی که باعث توقف پروژه و خواب ناوگان می‌شوند.",
    icon: Truck,
    imageSrc: "/images/service-heavy.jpg",
    href: "/services/machinery-systems",
  },
  {
    id: 4,
    title: "سیستم‌های سوخت‌رسانی کامان‌ریل و موتور دیزل",
    subtitle: "تست، کالیبراسیون و عیب‌یابی انژکتورها و ایسیو کامینز",
    description:
      "تنظیم دقیق پارامترهای پاشش سوخت، دیاگ و رفع خطاهای راندمان موتورهای دیزل مدرن و کامینز (Cummins) در معادن و پروژه‌های عمرانی جهت بازگشت سریع به خط کار.",
    icon: Gauge,
    imageSrc: "/images/service-common-rail.jpg",
    href: "/services/common-rail",
  },
];

export default function TrustSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = servicesData[activeIndex];

  const handleMobileToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 md:py-28 bg-slate-50 text-slate-800 relative overflow-hidden border-t border-slate-200">
      {/* گرید مهندسی ملایم پس‌زمینه */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#0f172a 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* تیتر متناسب با برند الفیکس */}
        <div className="text-center md:text-right mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/90 text-emerald-800 text-xs font-semibold mb-3">
            <span>تخصص‌های مهندسی الفیکس</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            راه‌حل‌های مهندسی برای{" "}
            <span className="text-emerald-600">پایان توقف ماشین‌آلات</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-3xl leading-relaxed">
            ترکیب ۹ سال تجربه میدانی، دکتری مهندسی مکانیک ماشین‌آلات و دانش
            الکترونیک پیشرفته برای راه‌اندازی پیچیده‌ترین تجهیزات سنگین و معدنی.
          </p>
        </div>

        {/* ۱. نمایش موبایل (آکاردئون بازشونده درجا) */}
        <div className="flex flex-col gap-3 lg:hidden">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            const isOpen = activeIndex === index;

            return (
              <div
                key={service.id}
                className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                  isOpen
                    ? "bg-white border-emerald-500 shadow-md ring-1 ring-emerald-500/20"
                    : "bg-white border-slate-200 shadow-sm"
                }`}
              >
                <button
                  onClick={() => handleMobileToggle(index)}
                  className="w-full p-4 flex items-center justify-between text-right gap-3"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2.5 rounded-xl transition-colors ${
                        isOpen
                          ? "bg-emerald-600 text-white"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      <Icon className="w-5 h-5" strokeWidth={1.8} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-slate-400 p-1 shrink-0"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-slate-100 bg-slate-50/70 p-4"
                    >
                      <div className="relative w-full h-44 rounded-xl overflow-hidden mb-3 bg-slate-200 border border-slate-200">
                        <Image
                          src={service.imageSrc}
                          alt={service.title}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        {service.description}
                      </p>

                      <Link
                        href={service.href}
                        className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold transition-colors"
                      >
                        <span>بررسی جزئیات تخصصی و نمونه‌ها</span>
                        <ArrowLeft className="w-4 h-4" />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* ۲. نمایش دسکتاپ (دو ستونه تعاملی با تم لوکس صنعتی) */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start">
          {/* ستون انتخاب خدمت */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {servicesData.map((service, index) => {
              const Icon = service.icon;
              const isActive = activeIndex === index;

              return (
                <button
                  key={service.id}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`relative w-full text-right p-5 rounded-2xl transition-all duration-200 border text-slate-700
                    ${
                      isActive
                        ? "bg-white border-emerald-500 shadow-md ring-1 ring-emerald-500/20 -translate-x-1"
                        : "bg-white/70 border-slate-200 hover:bg-white hover:border-slate-300 shadow-sm"
                    }`}
                >
                  {isActive && (
                    <div className="absolute right-0 top-3 bottom-3 w-1.5 bg-emerald-600 rounded-r-md" />
                  )}

                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-xl transition-all ${
                        isActive
                          ? "bg-emerald-600 text-white shadow-sm"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      <Icon className="w-6 h-6" strokeWidth={1.8} />
                    </div>
                    <div>
                      <h3
                        className={`font-bold text-base transition-colors ${isActive ? "text-slate-950" : "text-slate-800"}`}
                      >
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* ستون نمایشگر جزئیات */}
          <div className="lg:col-span-7 sticky top-28">
            <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-lg aspect-[16/10]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-0 flex flex-col"
                >
                  <div className="relative w-full h-3/5 bg-slate-100 overflow-hidden">
                    <Image
                      src={activeService.imageSrc}
                      alt={activeService.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                  </div>

                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between bg-white relative z-10 -mt-6 rounded-t-3xl border-t border-slate-100">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                        {activeService.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed max-w-xl">
                        {activeService.description}
                      </p>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <Link
                        href={activeService.href}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm rounded-xl transition-all shadow-sm hover:gap-3"
                      >
                        <span>مشاهده مستندات و نمونه کارها</span>
                        <ArrowLeft className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
