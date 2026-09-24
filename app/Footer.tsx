"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { FormEvent } from "react";
import {
  CheckCircle2,
  ChevronLeft,
  Mail,
  MapPin,
  PhoneCall,
  Send,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

// تبدیل ارقام به فارسی
const toPersianDigits = (text: string | number): string => {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return text.toString().replace(/\d/g, (x) => farsiDigits[parseInt(x, 10)]);
};

// لینک‌های واقعی استخراج‌شده از سورس پروژه
const SERVICE_LINKS = [
  { title: "تعمیر بردهای الکترونیکی و ECU", href: "/services/board-repair" },
  { title: "برق و اتوماسیون ماشین‌آلات", href: "/services/machinery-systems" },
  { title: "عیب‌یابی موتورهای کامینز", href: "/services/cummins-engine" },
  { title: "تست و کالیبراسیون کامان‌ریل", href: "/services/common-rail" },
  { title: "الکترونیک جرثقیل‌های صنعتی", href: "/services/crane-industrial" },
];

const COMPANY_LINKS = [
  { title: "پروژه‌ها و نمونه‌کارها", href: "/portfolio" },
  { title: "رزومه و سوابق تخصصی", href: "/about/resume" },
  { title: "اختراعات و نوآوری‌ها", href: "/about/invention" },
  { title: "گواهینامه‌های استاندارد", href: "/about/certificates" },
  { title: "تماس و نشانی کارگاه", href: "/contact" },
];

const TELEGRAM_URL = "https://t.me/+989375525707";

function TelegramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 2.063-2.065 2.064 2.064 0 0 1-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = phone.trim();

    if (trimmed.length < 8) {
      setStatus("error");
      setMessage("لطفاً شماره همراه معتبر وارد کنید.");
      return;
    }

    const text = [
      "سلام و وقت بخیر،",
      "",
      "درخواست ارتباط فوری از وب‌سایت الفیکس:",
      `شماره تماس کارفرما: ${trimmed}`,
      "موضوع: استعلام عیب‌یابی / درخواست تعمیرات تخصصی",
    ].join("\n");

    window.open(`${TELEGRAM_URL}?text=${encodeURIComponent(text)}`, "_blank");

    setStatus("success");
    setMessage("ارتباط با تلگرام باز شد. پیام آماده ارسال است.");
    setPhone("");
  }

  return (
    <footer
      dir="rtl"
      className="relative overflow-hidden bg-slate-950 text-slate-200 border-t border-slate-800/80"
    >
      {/* هدر بالا خط مهندسی سبز رنگ پیوسته با پس‌زمینه */}
      <div
        aria-hidden="true"
        className="h-1 w-full bg-gradient-to-r from-emerald-500/10 via-emerald-500 to-emerald-500/10"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-12 pb-8 sm:px-6 lg:px-8">
        {/* گرید اصلی ۴ ستونه شبیه ساختار سایت‌های مهندسی بین‌المللی */}
        <div className="grid grid-cols-1 gap-10 pb-12 border-b border-slate-800/80 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* ستون ۱: هویت، برند و ارتباط مستقیم (عرض ۴ ستون در دسکتاپ) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 shrink-0 rounded-xl bg-slate-900 border border-slate-800 p-2 shadow-inner">
                <Image
                  src="/images/logo-elefix.svg"
                  alt="لوگوی الکترونیک صنعتی الفیکس"
                  width={40}
                  height={40}
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-black tracking-tight text-white block">
                  الفیکس
                </span>
                <span className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase">
                  ELEFIX INDUSTRIAL ELECTRONICS
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed text-slate-400 font-light">
              مرکز تخصصی عیب‌یابی و تعمیر بردهای الکترونیکی (ECU)، سیستم‌های
              دیزل کامینز، سوخت‌رسانی کامان‌ریل و برق صنعتی ماشین‌آلات سنگین
              راه‌سازی و صنایع نفت و گاز.
            </p>

            <div className="space-y-2.5 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>تهران، پرند — خدمات و پذیرش قطعات از سراسر کشور</span>
              </div>
              <div className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="tel:09375525707"
                  dir="ltr"
                  className="font-mono text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  {toPersianDigits("0937 552 5707")}
                </a>
              </div>
            </div>

            {/* آیکون شبکه‌های اجتماعی و حرفه‌ای */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="کانال و پشتیبانی تلگرام"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-400 transition hover:border-emerald-500/60 hover:bg-emerald-500/10 hover:text-emerald-400"
              >
                <TelegramIcon />
              </a>
              <a
                href="https://linkedin.com/in/mohammad-shademani"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="پروفایل لینکدین مدیریت فنی"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-400 transition hover:border-emerald-500/60 hover:bg-emerald-500/10 hover:text-emerald-400"
              >
                <LinkedInIcon />
              </a>
              <a
                href="mailto:shademanimohammad@gmail.com"
                aria-label="مکاتبه ایمیلی"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-400 transition hover:border-emerald-500/60 hover:bg-emerald-500/10 hover:text-emerald-400"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* ستون ۲: خدمات تخصصی (عرض ۳ ستون در دسکتاپ) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4 pb-2 border-b border-slate-800/80">
              خدمات تخصصی مهندسی
            </h3>
            <ul className="space-y-2.5">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-xs sm:text-sm text-slate-400 hover:text-emerald-300 transition-colors"
                  >
                    <ChevronLeft className="w-3.5 h-3.5 text-slate-600 transition-transform group-hover:-translate-x-1 group-hover:text-emerald-400" />
                    <span>{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ستون ۳: درباره و گواهی‌ها (عرض ۲ ستون در دسکتاپ) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4 pb-2 border-b border-slate-800/80">
              رزومه و صلاحیت‌ها
            </h3>
            <ul className="space-y-2.5">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-xs sm:text-sm text-slate-400 hover:text-emerald-300 transition-colors"
                  >
                    <ChevronLeft className="w-3.5 h-3.5 text-slate-600 transition-transform group-hover:-translate-x-1 group-hover:text-emerald-400" />
                    <span>{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ستون ۴: اکشن‌باکس استعلام تلگرامی (عرض ۳ ستون در دسکتاپ) */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 shadow-lg relative">
              <div className="flex items-center gap-2.5 text-emerald-400 mb-2">
                <Send className="w-4 h-4 -rotate-45" />
                <span className="text-xs font-bold uppercase tracking-wide">
                  استعلام و مشاوره فنی
                </span>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                شماره خود را ثبت کنید تا مستقیماً به گفت‌وگوی تلگرام واحد فنی
                متصل شوید:
              </p>

              <form onSubmit={handleSubmit} className="space-y-2.5">
                <div className="relative">
                  <input
                    type="tel"
                    inputMode="tel"
                    dir="ltr"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="۰۹۱۲ ۰۰۰ ۰۰۰۰"
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-left text-xs text-white placeholder-slate-600 outline-none transition focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 py-2.5 px-4 text-xs font-bold text-white shadow-md shadow-emerald-950/40 transition-colors active:scale-[0.98]"
                >
                  <Send className="w-3.5 h-3.5 -rotate-45" />
                  ارسال پیام در تلگرام
                </button>

                {message && (
                  <div
                    className={`mt-2 flex items-start gap-1.5 rounded-lg border p-2 text-[11px] leading-5 ${
                      status === "success"
                        ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                        : "border-red-500/30 bg-red-500/10 text-red-300"
                    }`}
                  >
                    {status === "success" && (
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    )}
                    <span>{message}</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* نوار کپی‌رایت زیرین (کاملاً مهندسی و مینیمال) */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500/70" />
            <p>
              © {toPersianDigits(currentYear)}{" "}
              <span className="text-slate-300 font-medium">
                الفیکس (ELEFIX)
              </span>{" "}
              — کلیه حقوق و مستندات فنی محفوظ است.
            </p>
          </div>
          <p>
            توسعه و طراحی فنی:{" "}
            <a
              href="https://www.linkedin.com/in/arezoo-nemati"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-emerald-400 transition-colors font-medium inline-flex items-center gap-1"
            >
              آرزو نعمتی
              <ExternalLink className="w-3 h-3" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
