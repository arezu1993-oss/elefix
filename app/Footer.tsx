"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { FormEvent } from "react";
import { CheckCircle2, ChevronLeft, Mail, MapPin, Send } from "lucide-react";

const QUICK_LINKS = [
  { title: "خانه", href: "/" },
  { title: "خدمات ما", href: "/services" },
  { title: "صنایع مشتریان", href: "/#clients" },
  { title: "سوالات متداول", href: "/#faq" },
  { title: "تماس با ما", href: "/contact" },
  { title: "درباره ما", href: "/about" },
];

const TELEGRAM_URL = "https://t.me/+989375525707";

function TelegramIcon({ className = "w-5 h-5" }: { className?: string }) {
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

function LinkedInIcon({ className = "w-5 h-5" }: { className?: string }) {
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
      setMessage("لطفاً شماره تماس معتبر وارد کنید.");
      return;
    }

    const text = [
      "سلام آقای شادمانی،",
      "",
      "درخواست مشاوره از سایت الفیکس",
      `شماره تماس: ${trimmed}`,
      "موضوع: استعلام و مشاوره تعمیر تجهیزات الکترونیک صنعتی",
    ].join("\n");

    window.open(`${TELEGRAM_URL}?text=${encodeURIComponent(text)}`, "_blank");

    setStatus("success");
    setMessage("تلگرام باز شد. پیام آماده ارسال است.");
    setPhone("");
  }

  return (
    <footer dir="rtl" className="relative overflow-hidden bg-[#08120c]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />
      </div>

      <div
        aria-hidden="true"
        className="relative h-px w-full bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-8 pt-14 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 lg:grid-cols-12">
          {/* ستون برند */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 shrink-0">
                <Image
                  src="/images/logo-elefix.svg"
                  alt="لوگو الفیکس"
                  width={56}
                  height={56}
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <h2 className="text-xl font-black text-white">الفیکس</h2>
                <p className="mt-0.5 text-[10px] font-bold tracking-[0.2em] text-emerald-400">
                  ELEFIX SPECIALIZED SERVICES
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-start gap-3 text-sm text-slate-400">
              <MapPin size={16} className="mt-0.5 shrink-0 text-emerald-400" />
              <span>تهران، پرند</span>
            </div>

            <div className="mt-7 flex items-center gap-3">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="تلگرام"
                className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-400 transition hover:-translate-y-0.5 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-400"
              >
                <TelegramIcon />
              </a>

              <a
                href="https://linkedin.com/in/mohammad-shademani"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="لینکدین"
                className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-400 transition hover:-translate-y-0.5 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-400"
              >
                <LinkedInIcon />
              </a>

              <a
                href="mailto:shademanimohammad@gmail.com"
                aria-label="ایمیل"
                className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-400 transition hover:-translate-y-0.5 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-400"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* دسترسی سریع */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-black tracking-wider text-emerald-400">
              دسترسی سریع
            </h3>

            <ul className="mt-5 space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-emerald-400"
                  >
                    <ChevronLeft
                      size={13}
                      className="text-emerald-600 transition-transform group-hover:-translate-x-0.5"
                    />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* مشاوره سریع */}
          <div className="lg:col-span-4">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
                  <Send size={16} />
                </span>
                <div>
                  <h3 className="text-sm font-black text-white">مشاوره سریع</h3>
                  <p className="text-[11px] leading-5 text-slate-500">
                    ارتباط از طریق تلگرام
                  </p>
                </div>
              </div>

              <div className="my-4 h-px bg-white/10" />

              <p className="text-xs leading-6 text-slate-400">
                شماره تماس خود را وارد کنید تا پیام آماده در تلگرام باز شود.
              </p>

              <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                <div className="flex gap-2">
                  <label htmlFor="footer-phone" className="sr-only">
                    شماره تماس
                  </label>
                  <input
                    id="footer-phone"
                    type="tel"
                    inputMode="tel"
                    dir="ltr"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder="0912 000 0000"
                    className="h-11 w-full rounded-xl border border-white/10 bg-black/40 px-4 text-left text-sm text-white outline-none transition focus:border-emerald-500/60"
                  />
                  <button
                    type="submit"
                    aria-label="ارسال"
                    className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/25 transition hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0"
                  >
                    <Send size={16} />
                  </button>
                </div>

                {message ? (
                  <div
                    className={
                      status === "success"
                        ? "flex items-start gap-2 rounded-xl border border-emerald-500/25 bg-emerald-500/10 px-3 py-2.5 text-xs leading-6 text-emerald-400"
                        : "flex items-start gap-2 rounded-xl border border-red-500/25 bg-red-500/10 px-3 py-2.5 text-xs leading-6 text-red-400"
                    }
                  >
                    {status === "success" ? (
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0" />
                    ) : null}
                    <span>{message}</span>
                  </div>
                ) : null}
              </form>
            </div>
          </div>
        </div>

        {/* نوار پایین */}
        <div className="flex flex-col items-center justify-between gap-3 pt-6 text-center text-xs text-slate-500 md:flex-row">
          <p>
            © {currentYear} <span className="text-slate-400">الفیکس</span> —
            تمامی حقوق محفوظ است.
          </p>
          <p>
            طراحی و توسعه:{" "}
            <a
              href="https://www.linkedin.com/in/arezoo-nemati"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition hover:text-emerald-400"
            >
              آرزو نعمتی
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
