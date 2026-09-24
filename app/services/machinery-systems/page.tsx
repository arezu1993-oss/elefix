"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Zap,
  Cpu,
  Gauge,
  Activity,
  Phone,
  ArrowUpLeft,
  ShieldCheck,
  Search,
  CheckCircle2,
} from "lucide-react";

const subServices = [
  {
    icon: Search,
    title: "دیاگ و عیب‌یابی شبکه",
    desc: "بررسی پروتکل‌های ارتباطی و کدهای خطای کنترلرها.",
  },
  {
    icon: Cpu,
    title: "تعمیرات برد و ECU",
    desc: "ترمیم سخت‌افزاری یونیت‌ها و رفع خطاهای مدار تغذیه.",
  },
  {
    icon: Gauge,
    title: "سنسورها و عملگرها",
    desc: "تست سلامت حسگرهای فشار، دما، شتاب و سلونوئیدها.",
  },
  {
    icon: Zap,
    title: "سیم‌کشی و تغذیه",
    desc: "بررسی افت ولتاژ، دینام، استارت و بازسازی درخت سیم‌کشی.",
  },
];

const brands = [
  "Caterpillar",
  "Komatsu",
  "Volvo CE",
  "Liebherr",
  "Hitachi",
  "Hyundai",
];

export default function MachinerySystemsPage() {
  const [activeTab, setActiveTab] = useState<"ecu" | "can" | "sensor">("ecu");

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
                <span>خدمات تخصصی برق و الکترونیک ماشین‌آلات سنگین</span>
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                عیب‌یابی و تعمیرات سیستم‌های برق و ECU
              </h1>

              <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                بررسی تخصصی بردهای الکترونیکی، خطوط انتقال داده و قطعات برقی
                ماشین‌آلات راه‌سازی و معدنی با تجهیزات تست پیشرفته.
              </p>

              {/* شاخص‌های کوتاه */}
              <div className="grid grid-cols-3 gap-3 border-y border-slate-100 py-4">
                <div>
                  <span className="block text-lg font-bold text-slate-900">
                    تخصصی
                  </span>
                  <span className="text-xs text-slate-500">تجهیزات تست</span>
                </div>
                <div>
                  <span className="block text-lg font-bold text-slate-900">
                    گارانتی
                  </span>
                  <span className="text-xs text-slate-500">
                    خدمات انجام‌شده
                  </span>
                </div>
                <div>
                  <span className="block text-lg font-bold text-slate-900">
                    سریع
                  </span>
                  <span className="text-xs text-slate-500">
                    پذیرش و عیب‌یابی
                  </span>
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

            {/* کارت مانیتورینگ وضعیت (جایگزین SVG قبلی) */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-white shadow-xl shadow-slate-200/60">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-mono text-xs text-slate-300">
                      DIAGNOSTIC STATUS
                    </span>
                  </div>
                  <span className="rounded bg-emerald-950 px-2 py-0.5 font-mono text-[11px] text-emerald-400 border border-emerald-800/40">
                    ONLINE
                  </span>
                </div>

                {/* تب‌های تستر */}
                <div className="my-4 grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveTab("ecu")}
                    className={`rounded-lg py-1.5 text-xs font-medium transition ${
                      activeTab === "ecu"
                        ? "bg-emerald-600 text-white"
                        : "bg-slate-800 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    کنترلر (ECU)
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("can")}
                    className={`rounded-lg py-1.5 text-xs font-medium transition ${
                      activeTab === "can"
                        ? "bg-emerald-600 text-white"
                        : "bg-slate-800 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    شبکه CAN
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("sensor")}
                    className={`rounded-lg py-1.5 text-xs font-medium transition ${
                      activeTab === "sensor"
                        ? "bg-emerald-600 text-white"
                        : "bg-slate-800 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    سنسورها
                  </button>
                </div>

                {/* پنل نمایش اطلاعات متناسب با تب انتخابی */}
                <div className="space-y-3 rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-xs leading-relaxed">
                  {activeTab === "ecu" && (
                    <>
                      <div className="flex justify-between text-slate-400">
                        <span>پردازشگر و مدار حافظه:</span>
                        <span className="font-mono text-emerald-400">
                          تست سخت‌افزاری OK
                        </span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>رگولاتور ولتاژ ورودی:</span>
                        <span className="font-mono text-slate-200">
                          24V Nominal
                        </span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>خروجی راه‌اندازها (Drivers):</span>
                        <span className="text-emerald-400">بدون اتصالی</span>
                      </div>
                    </>
                  )}

                  {activeTab === "can" && (
                    <>
                      <div className="flex justify-between text-slate-400">
                        <span>خطوط دیتا (CAN-H / CAN-L):</span>
                        <span className="font-mono text-emerald-400">
                          سیگنال متوازن
                        </span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>مقاومت انتهای خط (Terminator):</span>
                        <span className="font-mono text-slate-200">
                          120 Ohm OK
                        </span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>وضعیت برقراری ارتباط:</span>
                        <span className="text-emerald-400">پایدار</span>
                      </div>
                    </>
                  )}

                  {activeTab === "sensor" && (
                    <>
                      <div className="flex justify-between text-slate-400">
                        <span>سنسورهای فشار هیدرولیک:</span>
                        <span className="font-mono text-emerald-400">
                          در محدوده مجاز
                        </span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>سنسور موقعیت دور موتور:</span>
                        <span className="font-mono text-slate-200">
                          پالس منظم
                        </span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>سیستم فیدبک عملگرها:</span>
                        <span className="text-emerald-400">پاسخ‌دهی دقیق</span>
                      </div>
                    </>
                  )}
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-slate-800/80 pt-3 text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-emerald-400" />
                    استاندارد تست قبل از تحویل
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
              زمینه‌های خدمات
            </h2>
            <p className="mt-1 text-xs text-slate-500 sm:text-sm">
              پوشش عیب‌یابی بردهای کنترلی و سیستم‌های الکتریکی
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
