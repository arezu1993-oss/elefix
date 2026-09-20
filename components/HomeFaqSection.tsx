"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: "الفیکس چه خدماتی ارائه می‌دهد؟",
    a: "الفیکس در زمینه تعمیر، عیب‌یابی سیستم‌های برقی، بردهای الکترونیکی ماشین‌آلات راهسازی و کشاورزی فعالیت می‌کند. عیب‌یابی و تعمیر برق موتورهای کامینز و سیستم‌های سوخت‌رسانی کامان‌ریل. همچنین  طراحی و توسعه و نصب سیستم‌های مانیتورینگ جرثقیل و مشین‌آلات راهسازی و کشاورزی ارائه می‌شود.",
  },
  {
    q: "آیا برای تعمیر باید تجهیز را به محل الفیکس ارسال کنم؟",
    a: "بله، اکثر تعمیرات در کارگاه تخصصی الفیکس انجام می‌شود. اما برای خطوط تولید حساس که توقف خط مجاز نیست، امکان هماهنگی برای بازدید و عیب‌یابی در محل نیز وجود دارد.",
  },
  {
    q: "مدت‌زمان معمول تعمیر چقدر است؟",
    a: "بسته به نوع تجهیز و پیچیدگی خرابی، مدت تعمیر متفاوت است. پس از عیب‌یابی اولیه، زمان تخمینی به اطلاع مشتری می‌رسد تا برنامه‌ریزی تولید راحت‌تر باشد.",
  },
  {
    q: "آیا قطعات یدکی غیراستاندارد یا منسوخ‌شده هم قابل تأمین است؟",
    a: "بله، یکی از تخصص‌های الفیکس تأمین و جایگزینی قطعات خارج از رده یا غیراستاندارد است. در صورت نیاز، معادل مناسب با رعایت مشخصات فنی اصلی انتخاب می‌شود.",
  },
  {
    q: "برای استعلام هزینه تعمیر چه اطلاعاتی باید ارائه شود؟",
    a: "نام و مدل دستگاه، برند سازنده، شرح علائم خرابی، و در صورت امکان تصویری از پلاک یا برد کمک می‌کند تا بررسی اولیه سریع‌تر انجام شود و تخمین هزینه دقیق‌تری داده شود.",
  },
];

const features = [
  {
    label: "عیب‌یابی تخصصی",
    icon: (
      <svg
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        className="w-5 h-5"
        aria-hidden
      >
        <circle cx="9" cy="9" r="5.5" />
        <path strokeLinecap="round" d="M13.5 13.5L17 17" />
      </svg>
    ),
  },
  {
    label: "تأمین قطعات",
    icon: (
      <svg
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        className="w-5 h-5"
        aria-hidden
      >
        <rect x="3" y="7" width="14" height="10" rx="2" />
        <path strokeLinecap="round" d="M7 7V5a3 3 0 016 0v2" />
      </svg>
    ),
  },
  {
    label: "هماهنگی ارسال",
    icon: (
      <svg
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        className="w-5 h-5"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 10h11M10 4l6 6-6 6"
        />
      </svg>
    ),
  },
  {
    label: "مشاوره فنی",
    icon: (
      <svg
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        className="w-5 h-5"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 2a7 7 0 100 14A7 7 0 0010 2z"
        />
        <path strokeLinecap="round" d="M10 9v1m0 3h.01" />
      </svg>
    ),
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function HomeFaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      dir="rtl"
      className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-10"
      style={{ background: "oklch(10% 0.018 145)" }}
    >
      {/* Ambient blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-[-10rem] right-[-8rem] h-[28rem] w-[28rem] rounded-full blur-3xl"
          style={{ background: "oklch(52% 0.16 145 / 0.07)" }}
        />
        <div
          className="absolute bottom-[-8rem] left-[-10rem] h-80 w-80 rounded-full blur-3xl"
          style={{ background: "oklch(42% 0.12 165 / 0.06)" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-start">
          {/* ── Left panel ── */}
          <div className="lg:col-span-5 lg:sticky lg:top-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              {/* Badge */}
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold tracking-wide"
                style={{
                  background: "oklch(52% 0.16 145 / 0.12)",
                  color: "oklch(72% 0.18 145)",
                  border: "1px solid oklch(52% 0.16 145 / 0.2)",
                }}
              >
                سوالات متداول
              </span>

              <h2
                className="mt-5 text-2xl font-black leading-snug md:text-4xl md:leading-snug"
                style={{ color: "oklch(96% 0.01 145)" }}
              >
                قبل از تماس،
                <br />
                پاسخ سوالات رایج را ببینید
              </h2>

              <p
                className="mt-5 text-sm leading-8 md:text-base md:leading-9"
                style={{ color: "oklch(68% 0.04 145)" }}
              >
                اگر درباره فرآیند تعمیر، زمان‌بندی، تأمین قطعات یا نحوه ارسال
                تجهیز سوال دارید، اینجا پاسخ می‌گیرید.
              </p>
            </motion.div>

            {/* Feature chips */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
              className="mt-10 grid grid-cols-2 gap-3"
            >
              {features.map((f) => (
                <div
                  key={f.label}
                  className="flex items-center gap-3 rounded-2xl px-4 py-4"
                  style={{
                    background: "oklch(15% 0.02 145)",
                    border: "1px solid oklch(25% 0.03 145)",
                  }}
                >
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                    style={{
                      background: "oklch(52% 0.16 145 / 0.12)",
                      color: "oklch(72% 0.18 145)",
                    }}
                  >
                    {f.icon}
                  </span>
                  <span
                    className="text-xs font-bold leading-5"
                    style={{ color: "oklch(82% 0.04 145)" }}
                  >
                    {f.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.18 }}
              className="mt-8"
            >
              <a
                href={`https://wa.me/989120000000?text=${encodeURIComponent(
                  "سلام، برای استعلام تعمیر تجهیز صنعتی تماس می‌گیرم.",
                )}`}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl text-sm font-black transition-all duration-200 hover:-translate-y-0.5 sm:w-auto sm:px-8"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(52% 0.16 145), oklch(44% 0.14 155))",
                  color: "oklch(98% 0.005 145)",
                  boxShadow: "0 6px 24px oklch(52% 0.16 145 / 0.25)",
                }}
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                  aria-hidden
                >
                  <path d="M10 1.5a8.5 8.5 0 00-7.37 12.72L1.5 18.5l4.39-1.15A8.5 8.5 0 1010 1.5zm0 1.5a7 7 0 11-5.93 10.7l-.26-.4-2.43.64.64-2.38-.27-.42A7 7 0 0110 3zm-2.28 3.7c-.17 0-.44.06-.67.32-.23.26-.87.85-.87 2.07s.89 2.4 1.01 2.57c.13.16 1.75 2.77 4.3 3.77.6.26 1.07.41 1.44.52.6.19 1.16.16 1.59.1.49-.08 1.5-.61 1.71-1.2.21-.58.21-1.08.15-1.19-.07-.1-.24-.16-.5-.28-.27-.13-1.57-.77-1.81-.86-.24-.1-.42-.14-.6.14-.17.27-.67.86-.82 1.03-.15.17-.3.2-.56.07-.26-.13-1.1-.41-2.1-1.3-.77-.69-1.3-1.54-1.45-1.8-.15-.27-.02-.41.11-.54.12-.12.27-.3.4-.46.13-.15.18-.27.27-.44.1-.18.05-.33-.01-.46-.06-.13-.6-1.44-.82-1.97-.2-.5-.42-.43-.58-.44l-.5-.01z" />
                </svg>
                مشاوره و استعلام قیمت
              </a>
            </motion.div>
          </div>

          {/* ── FAQ accordion ── */}
          <div className="lg:col-span-7">
            <div className="space-y-3">
              {faqs.map((faq, i) => {
                const isOpen = open === i;
                return (
                  <motion.div
                    key={faq.q}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.38,
                      ease: "easeOut",
                      delay: i * 0.06,
                    }}
                  >
                    <div
                      className="overflow-hidden rounded-2xl transition-all duration-300"
                      style={{
                        background: isOpen
                          ? "oklch(16% 0.025 145)"
                          : "oklch(14% 0.018 145)",
                        border: isOpen
                          ? "1px solid oklch(52% 0.16 145 / 0.35)"
                          : "1px solid oklch(22% 0.025 145)",
                        boxShadow: isOpen
                          ? "0 12px 32px oklch(52% 0.16 145 / 0.1)"
                          : "none",
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : i)}
                        className="flex w-full items-start justify-between gap-4 px-5 py-5 text-right sm:px-6"
                        aria-expanded={isOpen}
                      >
                        {/* Number + question */}
                        <div className="flex items-start gap-3">
                          <span
                            className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-black"
                            style={{
                              background: isOpen
                                ? "oklch(52% 0.16 145 / 0.2)"
                                : "oklch(22% 0.02 145)",
                              color: isOpen
                                ? "oklch(72% 0.18 145)"
                                : "oklch(52% 0.06 145)",
                            }}
                          >
                            {i + 1}
                          </span>
                          <span
                            className="text-sm font-bold leading-7 sm:text-base"
                            style={{
                              color: isOpen
                                ? "oklch(94% 0.012 145)"
                                : "oklch(78% 0.04 145)",
                            }}
                          >
                            {faq.q}
                          </span>
                        </div>

                        {/* Chevron */}
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          style={{
                            background: isOpen
                              ? "oklch(52% 0.16 145)"
                              : "oklch(20% 0.02 145)",
                            color: isOpen
                              ? "oklch(98% 0.005 145)"
                              : "oklch(55% 0.05 145)",
                          }}
                          aria-hidden
                        >
                          <ChevronDown size={16} strokeWidth={2.5} />
                        </span>
                      </button>

                      {/* Answer */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="answer"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.32, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div
                              className="px-5 pb-6 pt-0 sm:px-6"
                              style={{
                                borderTop: "1px solid oklch(24% 0.03 145)",
                              }}
                            >
                              {/* Accent line */}
                              <div
                                aria-hidden
                                className="mb-4 mt-4 h-px w-8 rounded-full"
                                style={{
                                  background:
                                    "linear-gradient(90deg, oklch(52% 0.16 145), transparent)",
                                }}
                              />
                              <p
                                className="text-sm leading-8"
                                style={{ color: "oklch(66% 0.04 145)" }}
                              >
                                {faq.a}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
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
