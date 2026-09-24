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
  Zap,
} from "lucide-react";

const subServices = [
  {
    icon: Search,
    title: "تست و آنالیز فشار ریل",
    desc: "بررسی افت فشار مدار هیدرولیک سوخت، بررسی نشتی داخلی و اعتبارسنجی سنسور فشار ریل.",
  },
  {
    icon: Cpu,
    title: "سیگنال و درایور انژکتورها",
    desc: "تحلیل شکل‌موج تحریک پیزو/سلنوئید انژکتورها با اسیلوسکوپ و رفع خطای مدار فرمان ECU.",
  },
  {
    icon: Gauge,
    title: "کالیبراسیون ولو و رگلاتور",
    desc: "تنظیم و ارزیابی شیرهای کنترل فشار سوخت (PCV / SCV / IMV) و پایداری در دورهای مختلف.",
  },
  {
    icon: Zap,
    title: "رفع کدهای خطای پمپ و سوخت",
    desc: "عیب‌یابی اختلال در استارت‌خوری، کپ کردن موتور زیر بار و پاک‌سازی خطاهای پایدار سیستم سوخت.",
  },
];

const supportedSystems = [
  "Bosch CRDI",
  "Denso HP3 / HP4",
  "Delphi DFI",
  "Cummins CAPS / CCR",
  "Caterpillar MEUI / C-9",
  "Komatsu CRI",
];

export default function CommonRailPage() {
  const [activeTab, setActiveTab] = useState<
    "pressure" | "injectors" | "valves"
  >("pressure");

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
                <span>سرویس تخصصی الکترونیک و هیدرولیک کامان‌ریل</span>
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                سیستم‌های سوخت‌رسانی کامان‌ریل فشار قوی
              </h1>

              <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                عیب‌یابی تخصصی مدارات کنترل الکترونیکی، درایور انژکتورها و
                سنسورهای فشار پمپ در ماشین‌آلات صنعتی، راه‌سازی و دیزل
                ژنراتورها.
              </p>

              {/* شاخص‌های کوتاه */}
              <div className="grid grid-cols-3 gap-3 border-y border-slate-100 py-4">
                <div>
                  <span className="block text-lg font-bold text-slate-900">
                    دقیق
                  </span>
                  <span className="text-xs text-slate-500">
                    تحلیل سیگنال و پالس
                  </span>
                </div>
                <div>
                  <span className="block text-lg font-bold text-slate-900">
                    چندبرندی
                  </span>
                  <span className="text-xs text-slate-500">
                    پوشش Bosch, Denso,...
                  </span>
                </div>
                <div>
                  <span className="block text-lg font-bold text-slate-900">
                    تضمین تست
                  </span>
                  <span className="text-xs text-slate-500">
                    پایداری مدار زیر بار
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

            {/* کارت تعاملی مانیتورینگ وضعیت کامان‌ریل */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-white shadow-xl shadow-slate-200/60">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-mono text-xs text-slate-300">
                      COMMON RAIL MONITOR
                    </span>
                  </div>
                  <span className="rounded bg-emerald-950 px-2 py-0.5 font-mono text-[11px] text-emerald-400 border border-emerald-800/40">
                    LIVE CHECK
                  </span>
                </div>

                {/* تب‌های وضعیت */}
                <div className="my-4 grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveTab("pressure")}
                    className={`rounded-lg py-1.5 text-xs font-medium transition ${
                      activeTab === "pressure"
                        ? "bg-emerald-600 text-white"
                        : "bg-slate-800 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    فشار ریل
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("injectors")}
                    className={`rounded-lg py-1.5 text-xs font-medium transition ${
                      activeTab === "injectors"
                        ? "bg-emerald-600 text-white"
                        : "bg-slate-800 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    انژکتورها
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("valves")}
                    className={`rounded-lg py-1.5 text-xs font-medium transition ${
                      activeTab === "valves"
                        ? "bg-emerald-600 text-white"
                        : "bg-slate-800 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    شیرهای کنترل
                  </button>
                </div>

                {/* پنل نمایش اطلاعات تب انتخابی */}
                <div className="space-y-3 rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-xs leading-relaxed">
                  {activeTab === "pressure" && (
                    <>
                      <div className="flex justify-between text-slate-400">
                        <span>سیگنال سنسور ریل (RPS):</span>
                        <span className="font-mono text-emerald-400">
                          0.5V - 4.5V Linear
                        </span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>انحراف فشار واقعی از هدف:</span>
                        <span className="font-mono text-slate-200">
                          &lt; ±15 Bar (مجاز)
                        </span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>عملکرد شیر اطمینان فشار (PRV):</span>
                        <span className="text-emerald-400">
                          بدون نشتی و تخلیه ناخواسته
                        </span>
                      </div>
                    </>
                  )}

                  {activeTab === "injectors" && (
                    <>
                      <div className="flex justify-between text-slate-400">
                        <span>پالس تحریک درایور ECU:</span>
                        <span className="font-mono text-emerald-400">
                          Peak & Hold متقارن
                        </span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>تست برگشت سوخت (Back-leak):</span>
                        <span className="font-mono text-slate-200">
                          در محدوده استاندارد
                        </span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>بالانس دور سیلندرها:</span>
                        <span className="text-emerald-400">
                          همپوشانی یکنواخت توان
                        </span>
                      </div>
                    </>
                  )}

                  {activeTab === "valves" && (
                    <>
                      <div className="flex justify-between text-slate-400">
                        <span>فرمان PWM شیر کنترل پمپ:</span>
                        <span className="font-mono text-emerald-400">
                          Duty Cycle پایدار
                        </span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>مقاومت سیم‌پیچ سلنوئید:</span>
                        <span className="font-mono text-slate-200">
                          مطابق با کاتالوگ سازنده
                        </span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>سرعت پاسخگویی به تغییر دور:</span>
                        <span className="text-emerald-400">
                          بدون تاخیر یا نوسان مدار
                        </span>
                      </div>
                    </>
                  )}
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-slate-800/80 pt-3 text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-emerald-400" />
                    ارزیابی دقیق مدارات تحریک و هیدرولیک سوخت
                  </span>
                  <ShieldCheck size={16} className="text-emerald-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* بخش خدمات */}
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8 text-right">
            <h2 className="text-2xl font-bold text-slate-900">
              سرویس‌های تخصصی سیستم کامان‌ریل
            </h2>
            <p className="mt-1 text-xs text-slate-500 sm:text-sm">
              بررسی همزمان پارامترهای برقی، سیگنال‌های کنترلی و عملکرد مکانیکی
              مدار سوخت
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

      {/* سیستم‌های تحت پوشش و فراخوان */}
      <section className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="text-right">
              <p className="text-xs font-medium text-slate-400">
                پلتفرم‌ها و فناوری‌های تحت پشتیبانی
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {supportedSystems.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600"
                  >
                    {item}
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
