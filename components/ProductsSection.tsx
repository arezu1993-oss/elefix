// components/TrustSection.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const services = [
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    label: "ماشین‌آلات راهسازی",
    sub: "سیستم‌های هیدرولیک و کنترل",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    label: "تجهیزات کشاورزی",
    sub: "کنترل الکترونیکی موتور و درایو",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    label: "سیستم‌های کنترل صنعتی",
    sub: "PLC، درایوها و بردهای صنعتی",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    label: "عیب‌یابی تخصصی",
    sub: "آنالیز مدار و تشخیص دقیق خرابی",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M4 4h16v16H4zM9 9h6M9 12h6M9 15h4" />
      </svg>
    ),
    label: "مستندسازی فنی",
    sub: "گزارش کامل فرآیند و نتیجه تعمیر",
  },
];

const stats = [
  { value: "۱۴+", label: "سال تجربه" },
  { value: "۲۰۰۰+", label: "تجهیز احیا شده" },
  { value: "۹۸٪", label: "نرخ بازیابی موفق" },
];

export default function TrustSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="section-dark relative bg-[var(--surface-1)] border-t border-[var(--border-subtle)] overflow-hidden"
    >
      {/* subtle grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border-subtle) 1px, transparent 1px), linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20 lg:py-24">
        {/* Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-muted)] bg-[var(--accent-subtle)] px-3 py-1 text-xs font-medium text-[var(--accent)] mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            حوزه‌های تخصصی
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-strong)] leading-snug">
            احیای تجهیزات صنعتی
            <br />
            <span className="text-[var(--accent)]">با دقت مدار، نه حدس</span>
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-sm text-[var(--text-soft)] leading-relaxed">
            هر تعمیر با آنالیز سیگنال و شماتیک شروع می‌شه. ریشه خرابی پیدا
            می‌شه، نه اینکه قطعه عوض بشه.
          </p>
        </motion.div>

        {/* Main grid: services + stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Services list */}
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: 0.15 + i * 0.07,
                }}
                className="group flex items-center gap-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-2)] px-4 py-3.5 transition-colors hover:border-[var(--accent-muted)] hover:bg-[var(--accent-subtle)]"
              >
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--surface-3)] text-[var(--accent)] transition-colors group-hover:bg-[var(--accent-muted)]">
                  {s.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-[var(--text-strong)] truncate">
                    {s.label}
                  </p>
                  <p className="text-xs text-[var(--text-soft)] truncate">
                    {s.sub}
                  </p>
                </div>
                <div className="mr-auto flex-shrink-0">
                  <svg
                    className="h-4 w-4 text-[var(--text-soft)] rotate-180 transition-colors group-hover:text-[var(--accent)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats + image card */}
          <motion.div
            className="flex flex-col gap-5"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map((st, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-2)] px-3 py-4 text-center"
                >
                  <p className="text-xl sm:text-2xl font-bold text-[var(--accent)] leading-none">
                    {st.value}
                  </p>
                  <p className="mt-1 text-xs text-[var(--text-soft)]">
                    {st.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Image card */}
            <div className="relative overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-2)] aspect-[4/3]">
              <Image
                src="/images/featured.jpg"
                alt="برد الکترونیکی صنعتی در حال سرویس"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface-1)]/80 via-transparent to-transparent" />
              {/* badge */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full border border-[var(--accent-muted)] bg-[var(--surface-1)]/90 px-3 py-1.5 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
                </span>
                <span className="text-xs font-mono font-medium text-[var(--text-strong)]">
                  SYSTEM ONLINE
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
