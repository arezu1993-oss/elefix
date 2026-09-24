"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Zap,
  Cpu,
  Activity,
  Phone,
  ArrowUpLeft,
  ShieldCheck,
  Search,
  CheckCircle2,
  Settings2,
  Gauge,
} from "lucide-react";

// استخراج شده از فایل اصلی پروژه
const services = [
  {
    icon: Search,
    title: "دیاگنوز سیستم برق",
    desc: "شناسایی خرابی تا سطح قطعه با اسیلوسکوپ صنعتی، اسکنر تشخیصی و CAN Bus.",
  },
  {
    icon: Cpu,
    title: "تعمیر ECU و وایرینگ",
    desc: "بازیابی و برنامه‌ریزی مجدد ECU، عیب‌یابی بردهای الکترونیکی و کابل‌کشی.",
  },
  {
    icon: Gauge,
    title: "سنسورها و ترانسمیترها",
    desc: "کالیبراسیون و تعویض سنسور فشار، دما، موقعیت، دور؛ LiDAR و GPS.",
  },
  {
    icon: Zap,
    title: "سیستم‌های شارژ و استارت",
    desc: "بررسی دینام، استارت‌موتور و مدارهای راه‌اندازی ماشین‌آلات.",
  },
  {
    icon: Activity,
    title: "رفع خطاهای اضطراری",
    desc: "پاک‌سازی کدهای خطا و ریست تخصصی کنترل‌پنل.",
  },
  {
    icon: Settings2,
    title: "نگهداری پیشگیرانه",
    desc: "بازرسی دوره‌ای مدارها جهت جلوگیری از توقف ماشین‌آلات.",
  },
];

const steps = [
  { step: "۰۱", title: "درخواست", desc: "پاسخ‌دهی در کمتر از ۲ ساعت" },
  { step: "۰۲", title: "دیاگنوز", desc: "عیب‌یابی اولیه سیستم و برد" },
  { step: "۰۳", title: "تعمیر", desc: "ترمیم قطعات و تست زیر بار" },
  { step: "۰۴", title: "تحویل", desc: "تحویل با ضمانت‌نامه کتبی ۱۰۰٪" },
];

const stats = [
  { value: "۸+", label: "سال تجربه" },
  { value: "۴۰+", label: "برند تحت پوشش" },
  { value: "۲۴/۷", label: "پشتیبانی فنی" },
  { value: "۱۰۰٪", label: "ضمانت کتبی" },
];

const brands = [
  "Atlas 1504/1604",
  "Atlas 225/260",
  "Grove 40t/65t",
  "Demag 400t",
  "Terex",
  "TL260/TL310",
  "Caterpillar",
  "Komatsu",
  "John Deere",
  "Volvo CE",
  "Liebherr",
  "Hitachi",
];

export default function BoardRepairPage() {
  const [activeTool, setActiveTool] = useState<"osc" | "iso" | "diag">("osc");

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800" dir="rtl">
      {/* بخش هیرو */}
      <section className="border-b border-slate-200 bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            {/* متون معرفی */}
            <div className="space-y-6 lg:col-span-7 text-right">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                <Cpu size={14} />
                <span>سرویس تخصصی الکترونیک</span>
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                تعمیر و عیب‌یابی بردهای الکترونیکی ماشین‌آلات
              </h1>

              <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                پوشش کامل مدارهای برقی و الکترونیکی؛ از تشخیص دقیق خطا با
                ابزارهای پیشرفته تا تحویل بردها همراه با ضمانت کتبی.
              </p>

              {/* آمار */}
              <div className="grid grid-cols-2 gap-4 border-y border-slate-100 py-5 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <span className="block text-xl font-bold text-slate-900">
                      {s.value}
                    </span>
                    <span className="mt-1 text-xs text-slate-500">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* دکمه‌های تماس */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="tel:+989375525707"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
                >
                  <Phone size={16} />
                  تماس فوری با کارشناس
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-100"
                >
                  رزرو وقت مشاوره رایگان
                  <ArrowUpLeft size={16} />
                </Link>
              </div>
            </div>

            {/* کارت آزمایشگاه تست (جایگزین SVG) */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-white shadow-xl shadow-slate-200/60">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-mono text-xs text-slate-300">
                      HARDWARE TEST LAB
                    </span>
                  </div>
                  <span className="rounded bg-emerald-950 px-2 py-0.5 font-mono text-[11px] text-emerald-400 border border-emerald-800/40">
                    ONLINE
                  </span>
                </div>

                {/* تب ابزارها */}
                <div className="my-4 grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveTool("osc")}
                    className={`rounded-lg py-1.5 text-xs font-medium transition ${
                      activeTool === "osc"
                        ? "bg-emerald-600 text-white"
                        : "bg-slate-800 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    اسیلوسکوپ
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTool("iso")}
                    className={`rounded-lg py-1.5 text-xs font-medium transition ${
                      activeTool === "iso"
                        ? "bg-emerald-600 text-white"
                        : "bg-slate-800 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    ایزولاسیون
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTool("diag")}
                    className={`rounded-lg py-1.5 text-xs font-medium transition ${
                      activeTool === "diag"
                        ? "bg-emerald-600 text-white"
                        : "bg-slate-800 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    اسکنر دیاگ
                  </button>
                </div>

                {/* پنل نمایش ابزار */}
                <div className="space-y-3 rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-xs leading-relaxed">
                  {activeTool === "osc" && (
                    <>
                      <div className="flex justify-between text-slate-400">
                        <span>نوع دستگاه:</span>
                        <span className="font-mono text-emerald-400">
                          اسیلوسکوپ صنعتی
                        </span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>دقت اندازه‌گیری:</span>
                        <span className="font-mono text-slate-200">±1%</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>کاربرد در سیستم:</span>
                        <span className="text-emerald-400">
                          تحلیل سیگنال مدارهای برد
                        </span>
                      </div>
                    </>
                  )}

                  {activeTool === "iso" && (
                    <>
                      <div className="flex justify-between text-slate-400">
                        <span>نوع دستگاه:</span>
                        <span className="font-mono text-emerald-400">
                          تستر ایزولاسیون
                        </span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>ظرفیت تست ولتاژ:</span>
                        <span className="font-mono text-slate-200">تا 5kV</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>کاربرد در سیستم:</span>
                        <span className="text-emerald-400">
                          بررسی نشتی جریان قطعات
                        </span>
                      </div>
                    </>
                  )}

                  {activeTool === "diag" && (
                    <>
                      <div className="flex justify-between text-slate-400">
                        <span>نوع دستگاه:</span>
                        <span className="font-mono text-emerald-400">
                          اسکنر دیاگنوستیک
                        </span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>پشتیبانی برندها:</span>
                        <span className="font-mono text-slate-200">
                          40+ برند
                        </span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>کاربرد در سیستم:</span>
                        <span className="text-emerald-400">
                          شناسایی دقیق کدهای خطا
                        </span>
                      </div>
                    </>
                  )}
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-slate-800/80 pt-3 text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-emerald-400" />
                    ابزارهای تایید شده و استاندارد
                  </span>
                  <ShieldCheck size={16} className="text-emerald-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* بخش خدمات ارائه شده */}
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8 text-right">
            <h2 className="text-2xl font-bold text-slate-900">
              خدمات برد و الکترونیک
            </h2>
            <p className="mt-1 text-xs text-slate-500 sm:text-sm">
              چه خدماتی در این زمینه ارائه می‌دهیم؟
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc }) => (
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

      {/* بخش روند انجام کار */}
      <section className="bg-slate-100 py-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-right">
            <h2 className="text-2xl font-bold text-slate-900">
              روند انجام کار
            </h2>
            <p className="mt-1 text-xs text-slate-500 sm:text-sm">
              مراحل از پذیرش تا تحویل قطعه
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div
                key={s.step}
                className="relative rounded-2xl bg-white p-6 shadow-sm border border-slate-200"
              >
                <span className="absolute -top-4 right-6 rounded-xl bg-emerald-600 px-3 py-1 font-mono text-lg font-bold text-white shadow-md">
                  {s.step}
                </span>
                <h3 className="mt-4 text-sm font-bold text-slate-900">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                  {s.desc}
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
                ماشین‌آلات و برندهای تحت پشتیبانی
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
              className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-emerald-700 hover:text-emerald-800"
            >
              ماشین‌آلات شما منتظر نمی‌مانند
              <ArrowUpLeft size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
