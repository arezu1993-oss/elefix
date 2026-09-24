"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowUpLeft,
  CheckCircle2,
  Cpu,
  Gauge,
  Phone,
  Search,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const subServices = [
  {
    icon: Search,
    title: "دیاگ و کالیبراسیون تخصصی",
    desc: "خواندن و تحلیل خطاهای فعال و ثبت‌شده در کنترل‌باکس با نرم‌افزارهای تشخیصی.",
  },
  {
    icon: Cpu,
    title: "تعمیر و برنامه‌ریزی ECU",
    desc: "بررسی بردهای کنترل الکترونیکی موتور (ECM/ECU)، تعویض قطعات معیوب و فلش نرم‌افزار.",
  },
  {
    icon: Gauge,
    title: "تست و تطبیق سنسورها",
    desc: "ارزیابی سیگنال سنسورهای فشار ریل، دمای آب، بوست توربو، سنسور میل‌لنگ و میل‌سوپاپ.",
  },
  {
    icon: Wrench,
    title: "سیم‌کشی و رفع خطای CAN",
    desc: "رفع اتصالی و نویز در خطوط انتقال داده، مقاومت انتهای خط و دسته سیم اصلی موتور.",
  },
];

const engineSeries = [
  "ISX / QSX15",
  "QSM11 / ISM",
  "QSL9 / ISL",
  "QSB6.7 / ISB",
  "QSC8.3",
  "B3.3 / QSF",
  "KTA19 / KTA38",
  "N14 / M11",
];

export default function CumminsEnginePage() {
  const [activeTab, setActiveTab] = useState<"ecm" | "sensors" | "network">(
    "ecm",
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
                <span>سرویس تخصصی الکترونیک و دیاگ موتورهای Cummins</span>
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                عیب‌یابی تخصصی موتورهای کامینز (Cummins)
              </h1>

              <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                تست، دیاگ و رفع ایرادات الکترونیکی موتورهای کامینز در ماشین‌آلات
                راه‌سازی، حفاری و صنعتی با اسکنرهای استاندارد و تجهیزات
                آزمایشگاهی.
              </p>

              {/* شاخص‌های کوتاه */}
              <div className="grid grid-cols-3 gap-3 border-y border-slate-100 py-4">
                <div>
                  <span className="block text-lg font-bold text-slate-900">
                    تخصصی
                  </span>
                  <span className="text-xs text-slate-500">
                    تحلیل داده زنده ECM
                  </span>
                </div>
                <div>
                  <span className="block text-lg font-bold text-slate-900">
                    شبکه CAN
                  </span>
                  <span className="text-xs text-slate-500">
                    رفع خطاهای ارتباطی
                  </span>
                </div>
                <div>
                  <span className="block text-lg font-bold text-slate-900">
                    ضمانت
                  </span>
                  <span className="text-xs text-slate-500">
                    تست عملکرد زیر بار
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
                  ثبت درخواست بررسی
                  <ArrowUpLeft size={16} />
                </Link>
              </div>
            </div>

            {/* کارت تعاملی مانیتورینگ وضعیت ECM */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-white shadow-xl shadow-slate-200/60">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-mono text-xs text-slate-300">
                      CUMMINS ECM DIAGNOSTICS
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
                    onClick={() => setActiveTab("ecm")}
                    className={`rounded-lg py-1.5 text-xs font-medium transition ${
                      activeTab === "ecm"
                        ? "bg-emerald-600 text-white"
                        : "bg-slate-800 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    واحد کنترل ECM
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("sensors")}
                    className={`rounded-lg py-1.5 text-xs font-medium transition ${
                      activeTab === "sensors"
                        ? "bg-emerald-600 text-white"
                        : "bg-slate-800 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    سنسورها
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("network")}
                    className={`rounded-lg py-1.5 text-xs font-medium transition ${
                      activeTab === "network"
                        ? "bg-emerald-600 text-white"
                        : "bg-slate-800 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    شبکه J1939
                  </button>
                </div>

                {/* پنل نمایش اطلاعات */}
                <div className="space-y-3 rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-xs leading-relaxed">
                  {activeTab === "ecm" && (
                    <>
                      <div className="flex justify-between text-slate-400">
                        <span>وضعیت بردهای تغذیه داخلی:</span>
                        <span className="font-mono text-emerald-400">
                          5V / 12V Stable
                        </span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>حافظه کدهای خطا (DTC):</span>
                        <span className="font-mono text-slate-200">
                          Clear / No Active Faults
                        </span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>مدار درایور انژکتورها:</span>
                        <span className="text-emerald-400">
                          سیگنال‌دهی متقارن (OK)
                        </span>
                      </div>
                    </>
                  )}

                  {activeTab === "sensors" && (
                    <>
                      <div className="flex justify-between text-slate-400">
                        <span>فشار ریل سوخت (Common Rail):</span>
                        <span className="font-mono text-emerald-400">
                          مطابق با ست‌پوینت موتور
                        </span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>همگام‌سازی Crank / Cam:</span>
                        <span className="font-mono text-slate-200">
                          تطابق زاویه‌ای دقیق
                        </span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>سنسورهای فشار روغن و بوست:</span>
                        <span className="text-emerald-400">
                          در بازه استاندارد
                        </span>
                      </div>
                    </>
                  )}

                  {activeTab === "network" && (
                    <>
                      <div className="flex justify-between text-slate-400">
                        <span>پروتکل ارتباطی CAN Bus:</span>
                        <span className="font-mono text-emerald-400">
                          J1939 Active
                        </span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>مقاومت خط باس (Bus Resistance):</span>
                        <span className="font-mono text-slate-200">
                          60 Ohms (نرمال)
                        </span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>ارتباط با مانیتورینگ دستگاه:</span>
                        <span className="text-emerald-400">
                          بدون اتلاف فریم داده
                        </span>
                      </div>
                    </>
                  )}
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-slate-800/80 pt-3 text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-emerald-400" />
                    ارزیابی جامع الکترونیک قبل از ترخیص
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
              خدمات تخصصی موتورهای کامینز
            </h2>
            <p className="mt-1 text-xs text-slate-500 sm:text-sm">
              پوشش عیب‌یابی یونیت‌های کنترل، سیم‌کشی صنعتی و سنسورهای نسل جدید
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

      {/* سری موتورها و فراخوان پایانی */}
      <section className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="text-right">
              <p className="text-xs font-medium text-slate-400">
                سری موتورهای تحت پوشش
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {engineSeries.map((series) => (
                  <span
                    key={series}
                    className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600"
                  >
                    {series}
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
