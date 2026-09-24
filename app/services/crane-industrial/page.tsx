"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowUpLeft,
  CheckCircle2,
  Gauge,
  Phone,
  Radio,
  Search,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const subServices = [
  {
    icon: Search,
    title: "دیاگ و کالیبراسیون LMI",
    desc: "عیب‌یابی یونیت مانیتورینگ و تنظیم لودچارت انواع جرثقیل تلسکوپی و بوم‌خشک.",
  },
  {
    icon: Radio,
    title: "سنسورهای طول و زاویه",
    desc: "تنظیم و تعمیر سنسور قرقره کابل، شیب‌سنج بوم و سوئیچ ضد برخورد قلاب (A2B).",
  },
  {
    icon: Gauge,
    title: "لودسل و ترنسدیوسر فشار",
    desc: "تست سلامت سنسورهای فشار هیدرولیک جک‌ها و لودسل‌های تناژ باربرداری.",
  },
  {
    icon: Wrench,
    title: "سیم‌کشی و رفع خطای سیستم",
    desc: "بازسازی کابل‌های بوم، رفع قطعی مدار و تست عملکرد رله‌های قطع‌کن خودکار.",
  },
];

const brands = [
  "Demag",
  "Liebherr",
  "Grove",
  "Terex",
  "Tadano",
  "Kato",
  "Atlas",
  "Kobelco",
];

export default function CraneIndustrialPage() {
  const [activeTab, setActiveTab] = useState<"load" | "boom" | "controller">(
    "load",
  );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800" dir="rtl">
      {/* بخش هیرو */}
      <section className="border-b border-slate-200 bg-white py-24 lg:py-30">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            {/* معرفی و متن کوتاه */}
            <div className="space-y-6 lg:col-span-7 text-right">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                <Activity size={14} />
                <span>خدمات تخصصی سیستم‌های مانیتورینگ و بار جرثقیل (LMI)</span>
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                سیستم‌های هوشمند و مانیتورینگ جرثقیل (LMI)
              </h1>

              <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                عیب‌یابی، برنامه‌ریزی لودچارت و تعمیرات سیستم‌های قطع‌کن گشتاور
                و ایمنی انواع جرثقیل‌های کارگاهی و بوم‌بلند با تجهیزات تست
                کالیبره.
              </p>

              {/* شاخص‌های کوتاه */}
              <div className="grid grid-cols-3 gap-3 border-y border-slate-100 py-4">
                <div>
                  <span className="block text-lg font-bold text-slate-900">
                    دقیق
                  </span>
                  <span className="text-xs text-slate-500">
                    کالیبراسیون LMI
                  </span>
                </div>
                <div>
                  <span className="block text-lg font-bold text-slate-900">
                    استاندارد
                  </span>
                  <span className="text-xs text-slate-500">
                    ایمنی باربرداری
                  </span>
                </div>
                <div>
                  <span className="block text-lg font-bold text-slate-900">
                    گارانتی
                  </span>
                  <span className="text-xs text-slate-500">تست عملیاتی</span>
                </div>
              </div>

              {/* دکمه‌های اقدام */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="tel:+989375525707"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
                >
                  <Phone size={16} />
                  تماس مستقیم: ۰۹۳۷۵۵۲۵۷۰۷
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-100"
                >
                  درخواست بررسی
                  <ArrowUpLeft size={16} />
                </Link>
              </div>
            </div>

            {/* کارت مانیتورینگ وضعیت LMI */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-white shadow-xl shadow-slate-200/60">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-mono text-xs text-slate-300">
                      CRANE LMI MONITORING
                    </span>
                  </div>
                  <span className="rounded bg-emerald-950 px-2 py-0.5 font-mono text-[11px] text-emerald-400 border border-emerald-800/40">
                    CALIBRATED
                  </span>
                </div>

                {/* تب‌های تستر */}
                <div className="my-4 grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveTab("load")}
                    className={`rounded-lg py-1.5 text-xs font-medium transition ${
                      activeTab === "load"
                        ? "bg-emerald-600 text-white"
                        : "bg-slate-800 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    سنسور بار
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("boom")}
                    className={`rounded-lg py-1.5 text-xs font-medium transition ${
                      activeTab === "boom"
                        ? "bg-emerald-600 text-white"
                        : "bg-slate-800 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    زاویه و بوم
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("controller")}
                    className={`rounded-lg py-1.5 text-xs font-medium transition ${
                      activeTab === "controller"
                        ? "bg-emerald-600 text-white"
                        : "bg-slate-800 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    پنل LMI
                  </button>
                </div>

                {/* پنل نمایش اطلاعات */}
                <div className="space-y-3 rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-xs leading-relaxed">
                  {activeTab === "load" && (
                    <>
                      <div className="flex justify-between text-slate-400">
                        <span>ترنسدیوسر فشار پیستون:</span>
                        <span className="font-mono text-emerald-400">
                          سیگنال 4-20mA نرمال
                        </span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>محاسبه گشتاور لحظه‌ای:</span>
                        <span className="font-mono text-slate-200">
                          Safe Margin 92%
                        </span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>سیستم قطع‌کن اضافه‌بار:</span>
                        <span className="text-emerald-400">
                          آماده به کار (OK)
                        </span>
                      </div>
                    </>
                  )}

                  {activeTab === "boom" && (
                    <>
                      <div className="flex justify-between text-slate-400">
                        <span>سنسور طول کابل بوم:</span>
                        <span className="font-mono text-emerald-400">
                          حرکت پتانسیومتر یکنواخت
                        </span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>سنسور زاویه‌سنج بوم:</span>
                        <span className="font-mono text-slate-200">
                          دقت زاویه ±0.1°
                        </span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>سوئیچ ضد برخورد قلاب (A2B):</span>
                        <span className="text-emerald-400">
                          مدار بسته و فعال
                        </span>
                      </div>
                    </>
                  )}

                  {activeTab === "controller" && (
                    <>
                      <div className="flex justify-between text-slate-400">
                        <span>پردازشگر جدول بار (Load Chart):</span>
                        <span className="font-mono text-emerald-400">
                          تطبیق جدول استاندارد
                        </span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>رله‌های فرمان هیدرولیک:</span>
                        <span className="font-mono text-slate-200">
                          سوئیچینگ بدون تاخیر
                        </span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>ارتباط نمایشگر کابین:</span>
                        <span className="text-emerald-400">
                          پایدار و بدون نویز
                        </span>
                      </div>
                    </>
                  )}
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-slate-800/80 pt-3 text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-emerald-400" />
                    تست سلامت عملکرد لودچارت قبل از تحویل
                  </span>
                  <ShieldCheck size={16} className="text-emerald-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* بخش معرفی خدمات */}
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8 text-right">
            <h2 className="text-2xl font-bold text-slate-900">
              زمینه‌های خدمات مانیتورینگ جرثقیل
            </h2>
            <p className="mt-1 text-xs text-slate-500 sm:text-sm">
              پوشش عیب‌یابی سنسورها، خطوط ارتباطی و یونیت‌های ایمنی انواع جرثقیل
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {subServices.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-emerald-400 hover:shadow-sm"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <Icon size={18} />
                </div>
                <h3 className="text-sm font-bold text-slate-900">{title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* برندها و فراخوان پایانی */}
      <section className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="text-right">
              <p className="text-xs font-medium text-slate-400">
                برندهای تحت پشتیبانی
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {brands.map((b) => (
                  <span
                    key={b}
                    className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 hover:text-emerald-800"
            >
              هماهنگی و مشاوره فنی
              <ArrowUpLeft size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
