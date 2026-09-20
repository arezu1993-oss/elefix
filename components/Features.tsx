// src/components/Features.tsx
"use client";

import { useRef } from "react";
import {
  ScanSearch,
  Cpu,
  FlaskConical,
  FileText,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: ScanSearch,
    title: "تشخیص دقیق در سطح قطعه",
    description:
      "آنالیز مدار با ابزار تخصصی تا سطح IC و ترانزیستور — نه حدس، نه تعویض تجربی.",
  },
  {
    icon: Cpu,
    title: "تعمیر تخصصی درایو صنعتی",
    description:
      "ABB، Siemens، Danfoss، Schneider و سایر برندهای بین‌المللی با اطمینان کامل.",
  },
  {
    icon: FlaskConical,
    title: "تست زیر بار واقعی",
    description:
      "پیش از تحویل، درایو تحت شرایط عملیاتی واقعی راستی‌آزمایی می‌شود.",
  },
  {
    icon: FileText,
    title: "گزارش فنی کامل",
    description:
      "مستندات دقیق خرابی، مراحل تعمیر، و توصیه‌های نگهداری برای هر دستگاه.",
  },
];

const highlights = [
  "کوتاه‌ترین زمان سرویس در صنعت",
  "قرارداد دوره‌ای برای شرکت‌های صنعتی",
  "پشتیبانی B2B در سراسر ایران",
];

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-24 sm:py-32"
      dir="rtl"
      aria-labelledby="features-heading"
      style={{ background: "oklch(97% 0.006 145)" }}
    >
      {/* Subtle grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(oklch(88% 0.01 145 / 0.5) 1px, transparent 1px), linear-gradient(90deg, oklch(88% 0.01 145 / 0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Glow accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, oklch(62% 0.18 145 / 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* ── Header ── */}
        <div className="mb-16 flex flex-col items-start gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <span
              className="mb-3 inline-block rounded-full border px-3 py-1 text-xs font-medium tracking-widest uppercase"
              style={{
                borderColor: "oklch(62% 0.18 145 / 0.35)",
                color: "oklch(42% 0.16 145)",
                background: "oklch(62% 0.18 145 / 0.08)",
              }}
            >
              چرا الفیکس
            </span>
            <h2
              id="features-heading"
              className="text-3xl font-bold leading-tight sm:text-4xl"
              style={{ color: "oklch(18% 0.01 145)" }}
            >
              تعمیر درایو صنعتی
              <br />
              <span style={{ color: "oklch(42% 0.16 145)" }}>
                به روش مهندسی
              </span>
            </h2>
          </div>

          {/* Highlights pill list */}
          <ul className="flex flex-col gap-2 lg:items-end">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm"
                style={{ color: "oklch(38% 0.01 145)" }}
              >
                <CheckCircle2
                  size={15}
                  style={{ color: "oklch(42% 0.16 145)", flexShrink: 0 }}
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Feature cards grid ── */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group relative flex flex-col gap-5 rounded-2xl p-6 transition-all duration-200"
              style={{
                background: "oklch(100% 0 0)",
                border: "1px solid oklch(88% 0.01 145)",
                boxShadow: "0 1px 4px oklch(18% 0.01 145 / 0.06)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "oklch(62% 0.18 145 / 0.45)";
                el.style.boxShadow = "0 4px 16px oklch(18% 0.01 145 / 0.1)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "oklch(88% 0.01 145)";
                el.style.boxShadow = "0 1px 4px oklch(18% 0.01 145 / 0.06)";
              }}
            >
              {/* Icon wrapper */}
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl"
                style={{
                  background: "oklch(62% 0.18 145 / 0.1)",
                  border: "1px solid oklch(62% 0.18 145 / 0.2)",
                }}
              >
                <Icon
                  size={22}
                  style={{ color: "oklch(42% 0.16 145)" }}
                  aria-hidden="true"
                  strokeWidth={1.5}
                />
              </div>

              <div className="flex flex-col gap-2">
                <h3
                  className="text-base font-semibold leading-snug"
                  style={{ color: "oklch(18% 0.01 145)" }}
                >
                  {title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "oklch(46% 0.008 145)" }}
                >
                  {description}
                </p>
              </div>

              {/* Bottom accent line on hover */}
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-6 right-6 h-px origin-center scale-x-0 rounded-full transition-transform duration-300 group-hover:scale-x-100"
                style={{ background: "oklch(62% 0.18 145 / 0.5)" }}
              />
            </article>
          ))}
        </div>

        {/* ── Bottom CTA strip ── */}
        <div
          className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl px-8 py-6 sm:flex-row"
          style={{
            background: "oklch(100% 0 0)",
            border: "1px solid oklch(88% 0.01 145)",
            boxShadow: "0 1px 4px oklch(18% 0.01 145 / 0.05)",
          }}
        >
          <p
            className="text-sm leading-relaxed sm:max-w-sm"
            style={{ color: "oklch(44% 0.008 145)" }}
          >
            آماده‌اید تجهیزات خود را با کمترین توقف تولید راه‌اندازی کنید؟
          </p>
          <a
            href="#contact"
            className="shrink-0 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-150  focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{
              background: "oklch(42% 0.16 145)",
              color: "oklch(98% 0.005 145)",
              outlineColor: "oklch(42% 0.16 145)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "oklch(36% 0.16 145)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "oklch(42% 0.16 145)";
            }}
          >
            مشاوره رایگان
          </a>
        </div>
      </div>
    </section>
  );
}
