"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Radio,
  Cpu,
  Activity,
  Layers,
  CheckCircle2,
  Share2,
  Award,
  Zap,
  Gauge,
  Wifi,
  FileCheck,
  ChevronLeft,
  ArrowUpRight,
  ShieldCheck,
  Check,
} from "lucide-react";

export default function InventionPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "specs" | "features">(
    "overview",
  );
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div
      className="min-h-screen bg-[var(--color-page)] py-20 px-4 sm:px-6 lg:px-8 text-[var(--color-body)]"
      dir="rtl"
    >
      <div className="max-w-6xl mx-auto space-y-8 md:space-y-10">
        {/* ── نوار ناوبری و دکمه اشتراک ── */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--color-line)] pb-4">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs sm:text-sm text-[var(--color-muted)] font-medium"
          >
            <Link
              href="/"
              className="hover:text-[var(--color-accent-600)] transition-colors"
            >
              صفحه اصلی
            </Link>
            <ChevronLeft className="w-3.5 h-3.5 text-[var(--color-faint)]" />
            <span className="text-[var(--color-accent-600)] font-semibold">
              ثبت اختراع
            </span>
          </nav>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[var(--color-accent-50)] text-[var(--color-accent-700)] border border-[var(--color-accent-200)]">
              <span className="w-2 h-2 rounded-full bg-[var(--color-accent-500)] animate-pulse" />
              گواهی ثبت اختراع رسمی (Granted Patent)
            </span>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 p-2 px-3 rounded-lg bg-[var(--color-raised)] border border-[var(--color-line)] text-[var(--color-body)] hover:text-[var(--color-accent-600)] hover:border-[var(--color-accent-300)] transition-all shadow-[var(--shadow-xs)] text-xs font-medium cursor-pointer"
              title="اشتراک‌گذاری"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[var(--color-accent-500)]" />
                  <span className="text-[var(--color-accent-600)]">کپی شد</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4" />
                  <span className="hidden sm:inline">اشتراک‌گذاری</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* ── بخش هیرو ── */}
        <div className="bg-[#08120c] rounded-[var(--radius-2xl)] p-6 sm:p-10 md:p-12 border border-[var(--color-line-dark)] shadow-[var(--shadow-md)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4 md:space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[var(--color-ink-800)] border border-[var(--color-accent-500)]/30 text-[var(--color-accent-400)] text-xs font-semibold">
                <Award className="w-4 h-4 text-[var(--color-accent-400)]" />
                <span>دستاورد علمی و مهندسی الفیکس</span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight text-[var(--color-on-dark)]">
                واحد بی‌سیم پایش بلادرنگ بارگیری و ایمنی جرثقیل
              </h1>

              <p className="text-[var(--color-on-dark-body)] text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                طراحی و تجاری‌سازی سیستم تله‌متری هوشمند و مانیتورینگ گشتاور بار
                (LMI) جهت اندازه‌گیری دقیق و بلادرنگ زوایای بوم، طول دکل و بار
                مجاز در ماشین‌آلات سنگین، با هدف حذف خطرات واژگونی و حفاظت قطعات
                هیدرولیکی.
              </p>

              {/* مشخصات متادیتا */}
              <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-xs sm:text-sm text-[var(--color-on-dark-muted)] border-t border-[var(--color-line-dark)] pt-4">
                <div>
                  <span className="block text-[11px] text-[var(--color-on-dark-muted)]">
                    مخترع و توسعه‌دهنده:
                  </span>
                  <span className="font-bold text-[var(--color-on-dark)]">
                    مهندس محمد شادمانی
                  </span>
                </div>
                <div className="h-7 w-px bg-[var(--color-line-dark)] hidden sm:block" />
                <div>
                  <span className="block text-[11px] text-[var(--color-on-dark-muted)]">
                    حوزه فناوری:
                  </span>
                  <span className="font-bold text-[var(--color-on-dark)]">
                    اتوماسیون و ایمنی ماشین‌آلات راهسازی
                  </span>
                </div>
                <div className="h-7 w-px bg-[var(--color-line-dark)] hidden sm:block" />
                <div>
                  <span className="block text-[11px] text-[var(--color-on-dark-muted)]">
                    کدهای بین‌المللی:
                  </span>
                  <span className="font-mono font-bold text-[var(--color-accent-400)]">
                    B66C 23/00 | G01C 1/00
                  </span>
                </div>
              </div>
            </div>

            {/* کارت خلاصه فنی */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full max-w-xs bg-[var(--color-ink-800)] rounded-[var(--radius-xl)] p-6 border border-[var(--color-accent-500)]/25 text-center shadow-[var(--shadow-md)]">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-[var(--color-ink-900)] border border-[var(--color-accent-500)]/40 flex items-center justify-center text-[var(--color-accent-400)]">
                  <Radio className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-base text-[var(--color-on-dark)] mb-1">
                  Wireless Crane Load Unit
                </h3>
                <p className="text-xs text-[var(--color-accent-400)] mb-4 font-mono">
                  Real-time Safety Telemetry
                </p>

                <div className="p-3 bg-[var(--color-ink-900)] rounded-lg border border-[var(--color-line-dark)] text-xs text-[var(--color-on-dark-body)] space-y-2 text-right">
                  <div className="flex justify-between items-center">
                    <span className="text-[var(--color-on-dark-muted)]">
                      پروتکل ارتباطی:
                    </span>
                    <span className="font-medium text-[var(--color-on-dark)]">
                      Wireless RF & CAN Bus
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[var(--color-on-dark-muted)]">
                      سنسورینگ:
                    </span>
                    <span className="font-medium text-[var(--color-on-dark)]">
                      LiDAR + Inclinometer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── تب‌های دسته‌بندی ── */}
        <div className="flex border-b border-[var(--color-line)] gap-4 sm:gap-8 text-xs sm:text-sm font-semibold">
          <button
            onClick={() => setActiveTab("overview")}
            className={`pb-3.5 transition-all relative cursor-pointer ${
              activeTab === "overview"
                ? "text-[var(--color-accent-600)] font-bold"
                : "text-[var(--color-muted)] hover:text-[var(--color-ink)]"
            }`}
          >
            معرفی و نوآوری‌ها
            {activeTab === "overview" && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-accent-500)] rounded-full" />
            )}
          </button>

          <button
            onClick={() => setActiveTab("specs")}
            className={`pb-3.5 transition-all relative cursor-pointer ${
              activeTab === "specs"
                ? "text-[var(--color-accent-600)] font-bold"
                : "text-[var(--color-muted)] hover:text-[var(--color-ink)]"
            }`}
          >
            مشخصات فنی و استانداردهای IPC
            {activeTab === "specs" && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-accent-500)] rounded-full" />
            )}
          </button>

          <button
            onClick={() => setActiveTab("features")}
            className={`pb-3.5 transition-all relative cursor-pointer ${
              activeTab === "features"
                ? "text-[var(--color-accent-600)] font-bold"
                : "text-[var(--color-muted)] hover:text-[var(--color-ink)]"
            }`}
          >
            مزایای عملیاتی در صنعت
            {activeTab === "features" && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-accent-500)] rounded-full" />
            )}
          </button>
        </div>

        {/* ── محتوای تب ۱: معرفی ── */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-[var(--color-card)] p-6 rounded-[var(--radius-xl)] border border-[var(--color-line)] shadow-[var(--shadow-xs)]">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-50)] text-[var(--color-accent-600)] border border-[var(--color-accent-100)] flex items-center justify-center mb-4">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-[var(--color-ink)] text-base mb-2">
                  پایش بدون‌وقفه (Real-Time)
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-body)] leading-relaxed">
                  محاسبه آنی ظرفیت مجاز متناسب با زاویه و طول بوم جرثقیل و
                  جلوگیری خودکار از ورود به محدوده بحرانی واژگونی.
                </p>
              </div>

              <div className="bg-[var(--color-card)] p-6 rounded-[var(--radius-xl)] border border-[var(--color-line)] shadow-[var(--shadow-xs)]">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-50)] text-[var(--color-accent-600)] border border-[var(--color-accent-100)] flex items-center justify-center mb-4">
                  <Wifi className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-[var(--color-ink)] text-base mb-2">
                  انتقال دیتای بی‌سیم امن
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-body)] leading-relaxed">
                  حذف کامل کابل‌کشی‌های طویل، آسیب‌پذیر و پرهزینه در طول بوم
                  تلسکوپی و انتقال مطمئن داده‌ها در محیط‌های صنعتی با نویز شدید.
                </p>
              </div>

              <div className="bg-[var(--color-card)] p-6 rounded-[var(--radius-xl)] border border-[var(--color-line)] shadow-[var(--shadow-xs)]">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-50)] text-[var(--color-accent-600)] border border-[var(--color-accent-100)] flex items-center justify-center mb-4">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-[var(--color-ink)] text-base mb-2">
                  یکپارچگی با سیستم‌های LMI
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-body)] leading-relaxed">
                  اتصال استاندارد به سیستم مانیتورینگ گشتاور و لودسل‌ها از طریق
                  بستر شبکه پایدار CAN Bus و پردازنده‌های صنعتی.
                </p>
              </div>
            </div>

            <div className="bg-[var(--color-card)] rounded-[var(--radius-xl)] border border-[var(--color-line)] p-6 sm:p-8 shadow-[var(--shadow-xs)]">
              <h3 className="text-base sm:text-lg font-bold text-[var(--color-ink)] mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-[var(--color-accent-600)]" />
                <span>سازوکار و فرآیند عملکرد سامانه</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                <div className="p-4 rounded-[var(--radius-lg)] bg-[var(--color-page)] border border-[var(--color-line)]">
                  <div className="text-xs font-bold text-[var(--color-accent-600)] mb-1">
                    گام اول: سنسورینگ
                  </div>
                  <h4 className="font-bold text-sm text-[var(--color-ink)]">
                    سنجش ابعاد و زاویه
                  </h4>
                  <p className="text-xs text-[var(--color-muted)] mt-2 leading-normal">
                    خوانش زاویه با سنسور شیب‌سنج و سنجش فاصله و طول بوم به کمک
                    LiDAR.
                  </p>
                </div>

                <div className="p-4 rounded-[var(--radius-lg)] bg-[var(--color-page)] border border-[var(--color-line)]">
                  <div className="text-xs font-bold text-[var(--color-accent-600)] mb-1">
                    گام دوم: تله‌متری
                  </div>
                  <h4 className="font-bold text-sm text-[var(--color-ink)]">
                    ارسال بی‌سیم دیتا
                  </h4>
                  <p className="text-xs text-[var(--color-muted)] mt-2 leading-normal">
                    کدگذاری و انتقال بلادرنگ داده‌های ایمنی بدون نیاز به کابل
                    جمع‌کن (Cable Reel).
                  </p>
                </div>

                <div className="p-4 rounded-[var(--radius-lg)] bg-[var(--color-page)] border border-[var(--color-line)]">
                  <div className="text-xs font-bold text-[var(--color-accent-600)] mb-1">
                    گام سوم: پردازش
                  </div>
                  <h4 className="font-bold text-sm text-[var(--color-ink)]">
                    تحلیل جدول بار
                  </h4>
                  <p className="text-xs text-[var(--color-muted)] mt-2 leading-normal">
                    مقایسه وزن لحظه‌ای با حد مجاز متناسب با شعاع کاری و زاویه
                    جاری.
                  </p>
                </div>

                <div className="p-4 rounded-[var(--radius-lg)] bg-[var(--color-page)] border border-[var(--color-line)]">
                  <div className="text-xs font-bold text-[var(--color-accent-600)] mb-1">
                    گام چهارم: واکنش
                  </div>
                  <h4 className="font-bold text-sm text-[var(--color-ink)]">
                    هشدار و قطع اضطراری
                  </h4>
                  <p className="text-xs text-[var(--color-muted)] mt-2 leading-normal">
                    اعلام آلارم نوری/صوتی در کابین و تحریک شیر برقی جهت توقف
                    حرکت خطرآفرین.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── محتوای تب ۲: مشخصات فنی ── */}
        {activeTab === "specs" && (
          <div className="bg-[var(--color-card)] rounded-[var(--radius-xl)] border border-[var(--color-line)] p-6 sm:p-8 shadow-[var(--shadow-xs)] space-y-6">
            <h3 className="text-base sm:text-lg font-bold text-[var(--color-ink)] flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-[var(--color-accent-600)]" />
              <span>طبقه‌بندی بین‌المللی اختراع (CPC / IPC)</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="p-5 rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-[var(--color-page)] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 bg-[var(--color-accent-100)] text-[var(--color-accent-800)] rounded-md">
                    B66C 23/00
                  </span>
                  <span className="text-[11px] text-[var(--color-muted)]">
                    کلاس اصلی مکانیک
                  </span>
                </div>
                <h4 className="font-bold text-[var(--color-ink)] text-sm">
                  جرثقیل‌ها و ساختارهای متحرک باربرداری
                </h4>
                <p className="text-xs text-[var(--color-body)] leading-relaxed">
                  تجهیزات ایمنی، پایدارسازها، بازوهای تلسکوپی و سیستم‌های
                  پیشگیرانه از واژگونی انواع جرثقیل‌های موبایل و بوم‌خشک.
                </p>
              </div>

              <div className="p-5 rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-[var(--color-page)] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 bg-[var(--color-accent-100)] text-[var(--color-accent-800)] rounded-md">
                    G01C 1/00
                  </span>
                  <span className="text-[11px] text-[var(--color-muted)]">
                    کلاس ابزاردقیق و سنجش
                  </span>
                </div>
                <h4 className="font-bold text-[var(--color-ink)] text-sm">
                  سنجش دقیق زوایا و شیب‌سنجی ژیروسکوپی
                </h4>
                <p className="text-xs text-[var(--color-body)] leading-relaxed">
                  اندازه‌گیری زوایا و انحرافات زاویه‌ای با مقاومت در برابر
                  تکانه‌ها و ارتعاشات شدید هیدرولیکی در ماشین‌آلات صنعتی سنگین.
                </p>
              </div>
            </div>

            <div className="border-t border-[var(--color-line)] pt-6">
              <h4 className="text-xs sm:text-sm font-bold text-[var(--color-ink)] mb-3">
                فناوری‌های به‌کاررفته در ساخت این سامانه:
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "پروتکل ارتباطی صنعتی CAN Bus",
                  "ماژول‌های تله‌متری فرکانس بالا (RF)",
                  "سنسورهای نوری و فاصله‌سنج LiDAR",
                  "سامانه مانیتورینگ گشتاور بار (LMI)",
                  "میکروکنترلرهای سری STM32 صنعتی",
                  "شبیه‌سازی دینامیکی سازه در SolidWorks",
                ].map((item, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1.5 rounded-lg bg-[var(--color-raised)] text-[var(--color-body)] border border-[var(--color-line)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── محتوای تب ۳: مزایا ── */}
        {activeTab === "features" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-[var(--color-card)] p-6 rounded-[var(--radius-xl)] border border-[var(--color-line)] shadow-[var(--shadow-xs)] space-y-4">
              <h3 className="font-bold text-[var(--color-ink)] flex items-center gap-2 text-base">
                <Zap className="w-5 h-5 text-[var(--color-accent-600)]" />
                <span>رفع معایب سیستم‌های سنتی</span>
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-[var(--color-body)]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-accent-600)] mt-0.5 shrink-0" />
                  <span>
                    حذف کابل‌جمع‌کن‌های قدیمی که به علت فرسایش اقلیمی و گیرکردن
                    کابل، دائماً دچار پارگی می‌شدند.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-accent-600)] mt-0.5 shrink-0" />
                  <span>
                    دقت بسیار بالا در خوانش زوایا به کمک فیلترهای نرم‌افزاری حذف
                    نویز و لرزش‌های دکل.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-accent-600)] mt-0.5 shrink-0" />
                  <span>
                    امکان نصب سریع به صورت پلاگ‌ان‌پلی (Plug-and-Play) روی انواع
                    ناوگان جرثقیل بدون تغییر در سیم‌کشی فابریک.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-[var(--color-card)] p-6 rounded-[var(--radius-xl)] border border-[var(--color-line)] shadow-[var(--shadow-xs)] space-y-4">
              <h3 className="font-bold text-[var(--color-ink)] flex items-center gap-2 text-base">
                <Gauge className="w-5 h-5 text-[var(--color-accent-600)]" />
                <span>مزایای اقتصادی و ایمنی الفیکس</span>
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-[var(--color-body)]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-accent-600)] mt-0.5 shrink-0" />
                  <span>
                    کاهش چشمگیر هزینه‌های تعمیر و تعویض قطعات حساس هیدرولیکی بر
                    اثر وارد شدن بار غیرمجاز.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-accent-600)] mt-0.5 shrink-0" />
                  <span>
                    ارتقای استانداردهای ایمنی HSE کارگاه‌ها و پروژه‌های عمرانی،
                    ساختمانی و فراساحلی.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-accent-600)] mt-0.5 shrink-0" />
                  <span>
                    قابلیت شخصی‌سازی نرم‌افزاری برای کاربری روی انواع جرثقیل‌های
                    کفی، کارگاهی و بوم‌بلند.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* ── بخش تماس و مشاوره فنی پایانی ── */}
        <div className="bg-[var(--color-card)] rounded-[var(--radius-xl)] border border-[var(--color-line)] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[var(--shadow-xs)]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-500)] text-white flex items-center justify-center shrink-0 shadow-sm">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-[var(--color-ink)] text-base sm:text-lg">
                درخواست مشاوره فنی و اجرای سیستم مانیتورینگ
              </h4>
              <p className="text-xs sm:text-sm text-[var(--color-muted)] mt-1">
                جهت بررسی سازگاری و پیاده‌سازی این سامانه روی ماشین‌آلات صنعتی
                خود با واحد مهندسی الفیکس در ارتباط باشید.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <a
              href="tel:09120000000"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[var(--radius-md)] bg-[var(--color-accent-500)] hover:bg-[var(--color-accent-600)] text-white text-xs sm:text-sm font-bold transition-all shadow-[var(--shadow-sm)] whitespace-nowrap"
            >
              <span>مشاوره و استعلام فنی</span>
              <ArrowUpRight className="w-4 h-4 rotate-180" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
