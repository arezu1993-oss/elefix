"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { Wrench, Zap, ShieldCheck, Users } from "lucide-react";

const brands = [
  { name: "Caterpillar", abbr: "CAT" },
  { name: "Valtra", abbr: "VALTRA" },
  { name: "John Deere", abbr: "JD" },
  { name: "Atlas", abbr: "ATLAS" },
  { name: "Terex", abbr: "TEREX" },
  { name: "Volvo", abbr: "VOLVO" },
  { name: "Komatsu", abbr: "KOMATSU" },
];

const stats = [
  {
    number: 10,
    suffix: "+",
    label: "سال تخصص",
    sub: "در تعمیر برد الکترونیکی",
    icon: Wrench,
  },
  {
    number: 50,
    suffix: "+",
    label: "برد تعمیر‌شده",
    sub: "راهسازی و کشاورزی",
    icon: Zap,
  },
  {
    number: 70,
    suffix: "%",
    label: "نرخ موفقیت",
    sub: "تأیید‌شده در عمل",
    icon: ShieldCheck,
  },
  {
    number: 100,
    suffix: "%",
    label: "تعهد کاری",
    sub: "همراهی تا رفع مشکل",
    icon: Users,
  },
];

const toPersian = (n: number) => new Intl.NumberFormat("fa-IR").format(n);

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      dir="rtl"
      aria-labelledby="stats-heading"
      className="relative overflow-hidden py-24 sm:py-32"
      style={{ background: "oklch(13% 0.018 145)" }}
    >
      {/* decorative background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(oklch(100% 0 0 / 0.028) 1px, transparent 1px)," +
              "linear-gradient(90deg, oklch(100% 0 0 / 0.028) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2"
          style={{
            width: 640,
            height: 400,
            background:
              "radial-gradient(ellipse at top, oklch(58% 0.2 145 / 0.14) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-20 -right-20"
          style={{
            width: 360,
            height: 360,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, oklch(58% 0.2 145 / 0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        {/* header */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
          variants={fadeUp}
          className="mb-16 flex flex-col items-center gap-4 text-center"
        >
          <span
            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold tracking-widest uppercase"
            style={{
              borderColor: "oklch(58% 0.2 145 / 0.3)",
              color: "oklch(72% 0.16 145)",
              background: "oklch(58% 0.2 145 / 0.08)",
            }}
          >
            در یک نگاه
          </span>

          <h2
            id="stats-heading"
            className="text-3xl font-black leading-snug tracking-tight sm:text-5xl"
            style={{ color: "oklch(96% 0.008 145)" }}
          >
            اعداد که خودشان
            <br />
            <span style={{ color: "oklch(62% 0.19 145)" }}>حرف می‌زنند</span>
          </h2>

          <p
            className="max-w-md text-sm leading-relaxed sm:text-base"
            style={{ color: "oklch(65% 0.01 145)" }}
          >
            هر برد الکترونیکی که به الفیکس می‌رسد، با دقت مهندسی و مستندسازی
            کامل بررسی و تعمیر می‌شود.
          </p>
        </motion.div>

        {/* stat cards */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {stats.map(({ number, suffix, label, sub, icon: Icon }, i) => (
            <motion.article
              key={label}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i + 1}
              variants={fadeUp}
              className="group relative flex flex-col items-center gap-4 overflow-hidden rounded-2xl p-6 text-center sm:rounded-3xl sm:p-8"
              style={{
                background: "oklch(18% 0.018 145)",
                border: "1px solid oklch(100% 0 0 / 0.07)",
                transition: "background 150ms ease, border-color 150ms ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "oklch(58% 0.2 145 / 0.35)";
                el.style.background = "oklch(20% 0.022 145)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "oklch(100% 0 0 / 0.07)";
                el.style.background = "oklch(18% 0.018 145)";
              }}
            >
              {/* top shine */}
              <div
                aria-hidden="true"
                className="absolute inset-x-8 top-0 h-px opacity-50"
                style={{
                  background:
                    "linear-gradient(to right, transparent, oklch(62% 0.19 145), transparent)",
                }}
              />

              {/* ghost icon */}
              <Icon
                aria-hidden="true"
                size={80}
                strokeWidth={1}
                className="pointer-events-none absolute -bottom-4 -left-4 opacity-[0.04] transition-opacity duration-300 group-hover:opacity-[0.07]"
                style={{ color: "oklch(62% 0.19 145)" }}
              />

              {/* icon badge */}
              <div
                className="relative flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-105"
                style={{
                  background: "oklch(58% 0.2 145 / 0.12)",
                  border: "1px solid oklch(58% 0.2 145 / 0.2)",
                }}
              >
                <Icon
                  size={22}
                  strokeWidth={1.6}
                  style={{ color: "oklch(68% 0.18 145)" }}
                  aria-hidden="true"
                />
              </div>

              {/* number */}
              <div
                className="flex items-end justify-center gap-0.5 leading-none"
                aria-label={`${toPersian(number)}${suffix} ${label}`}
              >
                <span
                  className="text-4xl font-black tabular-nums tracking-tight sm:text-5xl"
                  style={{ color: "oklch(96% 0.01 145)" }}
                >
                  {inView ? (
                    <CountUp
                      end={number}
                      duration={2.2}
                      formattingFn={toPersian}
                    />
                  ) : (
                    toPersian(0)
                  )}
                </span>
                <span
                  className="mb-1 text-2xl font-black sm:mb-1.5 sm:text-3xl"
                  style={{ color: "oklch(62% 0.19 145)" }}
                >
                  {suffix}
                </span>
              </div>

              {/* label */}
              <div className="flex flex-col gap-1">
                <span
                  className="text-sm font-bold sm:text-base"
                  style={{ color: "oklch(90% 0.01 145)" }}
                >
                  {label}
                </span>
                <span
                  className="text-xs leading-relaxed"
                  style={{ color: "oklch(55% 0.01 145)" }}
                >
                  {sub}
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* brand strip */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={stats.length + 1}
          variants={fadeUp}
          className="mt-10"
        >
          <p
            className="mb-5 text-center text-xs font-semibold uppercase tracking-widest"
            style={{ color: "oklch(45% 0.01 145)" }}
          >
            برندهایی که با آن‌ها کار کرده‌ایم
          </p>

          <div
            className="flex flex-wrap items-center justify-center gap-3 rounded-2xl px-6 py-5"
            style={{
              background: "oklch(16% 0.016 145)",
              border: "1px solid oklch(100% 0 0 / 0.06)",
            }}
          >
            {brands.map(({ name, abbr }) => (
              <span
                key={name}
                title={name}
                className="rounded-lg px-4 py-2 text-xs font-bold tracking-widest"
                style={{
                  color: "oklch(52% 0.012 145)",
                  border: "1px solid oklch(100% 0 0 / 0.06)",
                  background: "oklch(18% 0.016 145)",
                  transition: "color 150ms ease, border-color 150ms ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLSpanElement;
                  el.style.color = "oklch(70% 0.15 145)";
                  el.style.borderColor = "oklch(58% 0.2 145 / 0.3)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLSpanElement;
                  el.style.color = "oklch(52% 0.012 145)";
                  el.style.borderColor = "oklch(100% 0 0 / 0.06)";
                }}
              >
                {abbr}
              </span>
            ))}
          </div>
        </motion.div>

        {/* trust bar */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={stats.length + 2}
          variants={fadeUp}
          className="mt-4 flex flex-col items-center justify-between gap-5 rounded-2xl px-8 py-5 sm:flex-row"
          style={{
            background: "oklch(18% 0.018 145)",
            border: "1px solid oklch(58% 0.2 145 / 0.15)",
          }}
        >
          <p
            className="text-sm leading-relaxed sm:max-w-sm sm:text-base"
            style={{ color: "oklch(60% 0.01 145)" }}
          >
            حوزه‌های تخصصی:{" "}
            <span style={{ color: "oklch(72% 0.14 145)" }}>
              بردهای راهسازی · ماشین‌آلات کشاورزی · تجهیزات برقی
            </span>
          </p>

          <a
            href="#contact"
            className="shrink-0 rounded-xl px-6 py-3 text-sm font-bold focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{
              background: "oklch(48% 0.18 145)",
              color: "oklch(97% 0.005 145)",
              transition: "background 150ms ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "oklch(42% 0.18 145)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "oklch(48% 0.18 145)";
            }}
          >
            ارسال برد برای بررسی
          </a>
        </motion.div>
      </div>
    </section>
  );
}
