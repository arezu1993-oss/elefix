"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Zap,
  Wrench,
  ClipboardCheck,
  type LucideIcon,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  tag: string;
};

// ─── Data ─────────────────────────────────────────────────────────────────────
// All using brand accent tokens — no per-card color overrides

const services: Service[] = [
  {
    icon: Cpu,
    title: "تعمیر برد الکترونیک صنعتی",
    description:
      "عیب‌یابی دقیق بردهای کنترلی ماشین‌آلات با ابزار تخصصی و تجربه مهندسی.",
    tag: "Electronics",
  },
  {
    icon: Zap,
    title: "سیستم‌های کنترل و اتوماسیون",
    description: "طراحی، برنامه‌نویسی و راه‌اندازی PLC، HMI و درایوهای صنعتی.",
    tag: "Automation",
  },
  {
    icon: Wrench,
    title: "ماشین‌آلات راهسازی و معدن",
    description: "تعمیر سیستم‌های برقی و هیدرولیک لودر، بیل مکانیکی و غلتک.",
    tag: "Heavy Equipment",
  },
  {
    icon: ClipboardCheck,
    title: "مهندسی معکوس و مستندسازی",
    description:
      "بازسازی مدارهای فاقد نقشه و تهیه مستندات فنی برای نگهداری آینده.",
    tag: "Reverse Engineering",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-48px" }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
      className="group relative flex flex-col rounded-xl border bg-[var(--color-surface-raised)] p-6
                 border-[var(--color-border)]
                 shadow-[var(--shadow-xs)]
                 transition-shadow duration-200
                 hover:shadow-[var(--shadow-md)]"
    >
      {/* Top accent bar — visible on hover */}
      <div
        className="absolute inset-x-0 top-0 h-[2px] rounded-t-xl
                   bg-[var(--color-accent-500)]
                   opacity-0 transition-opacity duration-200
                   group-hover:opacity-100"
        aria-hidden="true"
      />

      {/* Icon container */}
      <div
        className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg
                   bg-[var(--color-accent-50)]
                   transition-colors duration-200
                   group-hover:bg-[var(--color-accent-100)]"
      >
        <Icon
          size={20}
          strokeWidth={1.75}
          className="text-[var(--color-accent-600)]"
          aria-hidden="true"
        />
      </div>

      {/* Tag */}
      <span
        className="mb-2 text-[10px] font-bold uppercase tracking-widest
                   text-[var(--color-accent-500)]"
      >
        {service.tag}
      </span>

      {/* Title */}
      <h3
        className="mb-2 text-sm font-bold leading-snug
                   text-[var(--color-text-primary)]"
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        className="text-[0.82rem] leading-6
                   text-[var(--color-text-muted)]"
      >
        {service.description}
      </p>
    </motion.article>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function TrustSection() {
  return (
    <section className="bg-[var(--color-surface-page)] py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-14 text-center"
        >
          <span
            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5
                       text-[10px] font-bold uppercase tracking-widest
                       border-[var(--color-accent-200)]
                       bg-[var(--color-accent-50)]
                       text-[var(--color-accent-600)]"
          >
            حوزه‌های تخصصی
          </span>

          <h2
            className="mt-5 text-2xl font-black leading-tight tracking-tight
                       text-[var(--color-text-primary)]
                       sm:text-3xl md:text-[2.1rem]"
          >
            چه کاری انجام می‌دهیم
          </h2>

          <p
            className="mx-auto mt-3 max-w-md text-[0.93rem] leading-7
                       text-[var(--color-text-muted)]"
          >
            تخصص ما در تشخیص و رفع خرابی‌هایی‌ست که دیگران از آن طفره می‌روند.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
