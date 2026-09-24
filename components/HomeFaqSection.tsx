"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Send } from "lucide-react";

// تبدیل ارقام انگلیسی به فارسی
const toPersianDigits = (num: number): string => {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return num.toString().replace(/\d/g, (x) => farsiDigits[parseInt(x, 10)]);
};

const faqs = [
  {
    q: "الفیکس دقیقاً چه بخش‌هایی از دستگاه را پشتیبانی می‌کند؟",
    a: "تمرکز الفیکس بر عیب‌یابی و تعمیر تخصصی بردهای الکترونیکی (ECU)، سیم‌کشی و برق موتورهای دیزل (به‌ویژه کامینز)، سیستم‌های سوخت‌رسانی کامان‌ریل، و طراحی سیستم‌های مانیتورینگ برای ماشین‌آلات راه‌سازی، کشاورزی و جرثقیل‌های صنعتی است.",
  },
  {
    q: "برای جلوگیری از خواب دستگاه، خدمات در محل پروژه هم دارید؟",
    a: "بله؛ با توجه به اینکه توقف ماشین‌آلات در معادن، پروژه‌های عمرانی یا خطوط تولید خسارت سنگینی به همراه دارد، در موارد اضطراری و پروژه‌های حساس، تیم فنی الفیکس امکان اعزام، عیب‌یابی دیاگ و رفع عیب در محل کارگاه را فراهم می‌کند.",
  },
  {
    q: "آیا بردهای نایاب یا قطعات خارج‌ازرده هم تعمیر می‌شوند؟",
    a: "بله؛ یکی از مزیت‌های کلیدی الفیکس مهندسی معکوس و بازطراحی مدار است. قطعات الکترونیکی منسوخ یا غیرقابل‌تأمین در بازار از طریق معادل‌سازی استاندارد و مهندسی شده احیا می‌شوند.",
  },
  {
    q: "مدت‌زمان اعلام نتیجه و هزینه عیب‌یابی چقدر است؟",
    a: "بررسی اولیه و تست سیگنال معمولاً ظرف ۲۴ تا ۴۸ ساعت کاری انجام شده و گزارش دقیق خرابی همراه با برآورد زمان و هزینه قبل از شروع تعمیر به کارفرما اعلام می‌شود.",
  },
  {
    q: "برای استعلام اولیه یا هماهنگی تعمیر به چه اطلاعاتی نیاز است؟",
    a: "کافی است مدل دقیق دستگاه، شرح خطای سیستم (یا کدهای خطا) و تصویری از پلاک دستگاه یا ظاهر برد را از طریق تلگرام ارسال فرمایید تا کارشناسان فنی راهنمایی کنند.",
  },
];

export default function HomeFaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      dir="rtl"
      className="relative overflow-hidden py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-b border-slate-800/80 text-slate-100"
    >
      {/* نور ملایم پس‌زمینه برای تفکیک بهتر و شکستن سیاهی یکدست */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 -right-20 -translate-y-1/2 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-start">
          {/* ── پنل سمت راست (خلوت، مینیمال و هدفمند) ── */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 px-3 py-1 text-xs font-semibold text-emerald-400">
                <HelpCircle className="w-3.5 h-3.5" />
                سؤالات متداول
              </span>

              <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                پاسخ به سوالات شما،{" "}
                <span className="text-emerald-400 block sm:inline font-bold">
                  سریع و شفاف
                </span>
              </h2>

              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
                پاسخ به نکات پرتکرار درباره شیوه ارسال قطعات، نحوه پذیرش و
                مدت‌زمان عیب‌یابی ماشین‌آلات صنعتی.
              </p>

              <div className="mt-6 pt-5 border-t border-slate-800/80">
                <p className="text-xs text-slate-400 mb-3">
                  سؤالی دارید که در این لیست نیست؟
                </p>
                <a
                  href="https://t.me/+989375525707"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold px-5 shadow-lg shadow-emerald-950/40 transition-colors"
                >
                  <Send className="w-4 h-4 -rotate-45" />
                  ارتباط در تلگرام با واحد فنی
                </a>
              </div>
            </motion.div>
          </div>

          {/* ── لیست آکاردئونی سوالات ── */}
          <div className="lg:col-span-7">
            <div className="space-y-2.5 sm:space-y-3">
              {faqs.map((faq, i) => {
                const isOpen = open === i;
                return (
                  <motion.div
                    key={faq.q}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      ease: [0.25, 0.1, 0.25, 1],
                      delay: i * 0.03,
                    }}
                    className={`overflow-hidden rounded-xl border transition-colors ${
                      isOpen
                        ? "bg-slate-800/90 border-emerald-500/40 shadow-md shadow-emerald-950/20"
                        : "bg-slate-800/40 hover:bg-slate-800/60 border-slate-700/60"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-3 px-4 py-3.5 sm:px-5 sm:py-4 text-right"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-colors ${
                            isOpen
                              ? "bg-emerald-500/20 text-emerald-400"
                              : "bg-slate-700/60 text-slate-400"
                          }`}
                        >
                          {toPersianDigits(i + 1)}
                        </span>
                        <span
                          className={`text-xs sm:text-sm md:text-base font-medium transition-colors ${
                            isOpen
                              ? "text-emerald-300 font-semibold"
                              : "text-slate-200"
                          }`}
                        >
                          {faq.q}
                        </span>
                      </div>

                      <span
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md transition-transform duration-200 ${
                          isOpen
                            ? "rotate-180 text-emerald-400"
                            : "text-slate-400"
                        }`}
                        aria-hidden="true"
                      >
                        <ChevronDown className="w-4 h-4" />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.25,
                            ease: [0.25, 0.1, 0.25, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 pb-4 sm:px-5 sm:pb-4.5 pt-1 text-slate-300 border-t border-slate-700/50">
                            <p className="text-xs sm:text-sm leading-6 sm:leading-7 text-slate-300 font-light">
                              {faq.a}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
