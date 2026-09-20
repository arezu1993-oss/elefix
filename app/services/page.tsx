// app/services/page.tsx
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "خدمات | الفیکس",
  description:
    "تعمیر برد الکترونیکی، عیب‌یابی موتور دیزل، سیستم Common Rail، جرثقیل و اتوماسیون صنعتی — خدمات تخصصی الفیکس",
};

const services = [
  {
    slug: "board-repair",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-10 h-10"
        aria-hidden="true"
      >
        <rect
          x="6"
          y="10"
          width="36"
          height="28"
          rx="3"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M14 10V6M24 10V6M34 10V6M14 38v4M24 38v4M34 38v4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <rect
          x="16"
          y="18"
          width="6"
          height="6"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="26"
          y="18"
          width="6"
          height="6"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M16 28h16M16 32h10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "تعمیر برد الکترونیکی",
    subtitle: "Board & ECU Repair",
    description:
      "تشخیص دقیق خرابی، مهندسی معکوس مدار، و بازگرداندن عملکرد کامل بردهای صنعتی — حتی در مواردی که سازنده قطعه تولید نمی‌کند.",
    tags: ["مهندسی معکوس", "ECU", "PLC", "تجهیزات راهسازی"],
    stat: { value: "۱ میلیارد", label: "ارزش بالاترین برد تعمیرشده" },
    accent: "green",
  },
  {
    slug: "machinery-systems",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-10 h-10"
        aria-hidden="true"
      >
        <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2" />
        <path
          d="M24 6v6M24 36v6M6 24h6M36 24h6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M10.1 10.1l4.24 4.24M33.66 33.66l4.24 4.24M37.9 10.1l-4.24 4.24M14.34 33.66l-4.24 4.24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="24" cy="24" r="3" fill="currentColor" />
      </svg>
    ),
    title: "سیستم‌های ماشین‌آلات",
    subtitle: "Machinery & Control Systems",
    description:
      "طراحی و پیاده‌سازی سیستم‌های کنترل برای ماشین‌آلات راهسازی و کشاورزی — از تحلیل مدار الکتریکی و هیدرولیک تا اتوماسیون کامل.",
    tags: ["راهسازی", "کشاورزی", "هیدرولیک", "اتوماسیون"],
    stat: { value: "< ۲۴ ساعت", label: "میانگین زمان تشخیص عیب" },
    accent: "teal",
  },
  {
    slug: "cummins-engine",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-10 h-10"
        aria-hidden="true"
      >
        <rect
          x="8"
          y="18"
          width="32"
          height="16"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M14 18v-4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="17" cy="26" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="31" cy="26" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M20 26h8M8 26H5M43 26h-3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "موتور کامینز",
    subtitle: "Cummins Engine Diagnostics",
    description:
      "عیب‌یابی تخصصی موتورهای دیزل کامینز — تحلیل سیستم‌های سوخت‌رسانی، سنسورها، و اجرای پروتکل‌های تشخیصی اصلی.",
    tags: ["دیزل", "سنسور", "سوخت‌رسانی", "دیاگ"],
    stat: { value: "۱۵+ سال", label: "تجربه موتورهای دیزل صنعتی" },
    accent: "amber",
  },
  {
    slug: "common-rail",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-10 h-10"
        aria-hidden="true"
      >
        <path
          d="M8 24h32"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M14 24V16M20 24V14M26 24V16M32 24V14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="14" cy="14" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="20" cy="11" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="26" cy="14" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="32" cy="11" r="3" stroke="currentColor" strokeWidth="1.5" />
        <rect
          x="6"
          y="24"
          width="4"
          height="8"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="38"
          y="24"
          width="4"
          height="8"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
    title: "سیستم Common Rail",
    subtitle: "Common Rail Fuel System",
    description:
      "تعمیر و کالیبراسیون سیستم‌های سوخت‌رسانی Common Rail — تشخیص خرابی انژکتور، پمپ فشار بالا، و ریل مشترک با تجهیزات اندازه‌گیری دقیق.",
    tags: ["Common Rail", "انژکتور", "کالیبراسیون", "فشار سوخت"],
    stat: { value: "۲۲۰۰ بار", label: "حداکثر فشار سیستم قابل سرویس" },
    accent: "blue",
  },
  {
    slug: "crane-industrial",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-10 h-10"
        aria-hidden="true"
      >
        <path
          d="M10 40V14l8-8h20v34"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M10 14h8V6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M18 28l10-10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="30" cy="28" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M30 32v6M26 40h8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "جرثقیل صنعتی",
    subtitle: "Crane & Lifting Systems",
    description:
      "طراحی سیستم پایش لحظه‌ای باربرداری جرثقیل — نظارت بی‌سیم بر بار، تشخیص اضافه‌بار، و ثبت داده‌های عملیاتی برای بهره‌برداری ایمن.",
    tags: ["پایش لحظه‌ای", "بی‌سیم", "ایمنی بار", "اختراع ثبت‌شده"],
    stat: { value: "اختراع", label: "واحد بی‌سیم پایش باربرداری" },
    accent: "orange",
  },
];

const accentMap: Record<
  string,
  { ring: string; badge: string; stat: string; icon: string; cta: string }
> = {
  green: {
    ring: "hover:border-[oklch(0.65_0.18_145)]",
    badge: "bg-[oklch(0.25_0.06_145)] text-[oklch(0.75_0.14_145)]",
    stat: "text-[oklch(0.7_0.18_145)]",
    icon: "text-[oklch(0.65_0.18_145)]",
    cta: "text-[oklch(0.65_0.18_145)] hover:text-[oklch(0.78_0.16_145)]",
  },
  teal: {
    ring: "hover:border-[oklch(0.65_0.15_185)]",
    badge: "bg-[oklch(0.25_0.06_185)] text-[oklch(0.75_0.12_185)]",
    stat: "text-[oklch(0.7_0.15_185)]",
    icon: "text-[oklch(0.65_0.15_185)]",
    cta: "text-[oklch(0.65_0.15_185)] hover:text-[oklch(0.78_0.13_185)]",
  },
  amber: {
    ring: "hover:border-[oklch(0.72_0.16_75)]",
    badge: "bg-[oklch(0.25_0.06_75)] text-[oklch(0.78_0.14_75)]",
    stat: "text-[oklch(0.75_0.17_75)]",
    icon: "text-[oklch(0.72_0.16_75)]",
    cta: "text-[oklch(0.72_0.16_75)] hover:text-[oklch(0.82_0.14_75)]",
  },
  blue: {
    ring: "hover:border-[oklch(0.62_0.18_240)]",
    badge: "bg-[oklch(0.22_0.07_240)] text-[oklch(0.72_0.15_240)]",
    stat: "text-[oklch(0.68_0.18_240)]",
    icon: "text-[oklch(0.62_0.18_240)]",
    cta: "text-[oklch(0.62_0.18_240)] hover:text-[oklch(0.76_0.15_240)]",
  },
  orange: {
    ring: "hover:border-[oklch(0.68_0.18_55)]",
    badge: "bg-[oklch(0.24_0.07_55)] text-[oklch(0.76_0.15_55)]",
    stat: "text-[oklch(0.72_0.18_55)]",
    icon: "text-[oklch(0.68_0.18_55)]",
    cta: "text-[oklch(0.68_0.18_55)] hover:text-[oklch(0.80_0.15_55)]",
  },
};

export default function ServicesPage() {
  return (
    <main
      className="min-h-screen bg-[oklch(0.12_0.01_145)] text-[oklch(0.94_0.01_145)]"
      dir="rtl"
    >
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden border-b border-white/[0.06] px-6 py-24 text-center">
        {/* subtle grid background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.65 0.18 145) 1px, transparent 1px), linear-gradient(90deg, oklch(0.65 0.18 145) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full border border-[oklch(0.65_0.18_145)]/30 bg-[oklch(0.65_0.18_145)]/10 px-4 py-1.5 text-sm text-[oklch(0.72_0.15_145)]">
            خدمات تخصصی الکترونیک صنعتی
          </span>
          <h1 className="mb-5 text-4xl font-bold leading-snug tracking-tight text-white md:text-5xl">
            وقتی دستگاه می‌ایسته،
            <br />
            <span className="text-[oklch(0.65_0.18_145)]">ما حرکت می‌کنیم</span>
          </h1>
          <p className="mx-auto max-w-lg text-base leading-relaxed text-[oklch(0.65_0.02_145)]">
            از تعمیر برد ECU تا طراحی سیستم پایش بی‌سیم — تخصص‌های ما دقیقاً
            آنجایی که خواب ماشین یعنی توقف پروژه.
          </p>
        </div>
      </section>

      {/* ─── Services Grid ─── */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const a = accentMap[service.accent];
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`group relative flex flex-col rounded-xl border border-white/[0.08] bg-[oklch(0.16_0.01_145)] p-7 transition-all duration-200 ${a.ring} hover:bg-[oklch(0.18_0.01_145)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.65_0.18_145)] focus-visible:ring-offset-2 focus-visible:ring-offset-[oklch(0.12_0.01_145)]`}
              >
                {/* icon */}
                <div
                  className={`mb-5 w-fit rounded-lg bg-white/[0.04] p-3 ${a.icon}`}
                >
                  {service.icon}
                </div>

                {/* title */}
                <h2 className="mb-1 text-lg font-semibold text-white">
                  {service.title}
                </h2>
                <p className="mb-3 text-xs tracking-wide text-[oklch(0.5_0.02_145)]">
                  {service.subtitle}
                </p>

                {/* description */}
                <p className="mb-5 flex-1 text-sm leading-relaxed text-[oklch(0.65_0.02_145)]">
                  {service.description}
                </p>

                {/* tags */}
                <div className="mb-5 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-md px-2.5 py-1 text-xs font-medium ${a.badge}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* stat */}
                <div className="mb-5 border-t border-white/[0.06] pt-4">
                  <span
                    className={`block text-xl font-bold tabular-nums ${a.stat}`}
                  >
                    {service.stat.value}
                  </span>
                  <span className="text-xs text-[oklch(0.5_0.02_145)]">
                    {service.stat.label}
                  </span>
                </div>

                {/* cta */}
                <span
                  className={`flex items-center gap-1.5 text-sm font-medium transition-gap ${a.cta}`}
                >
                  مشاهده جزئیات
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    className="w-4 h-4 transition-transform group-hover:-translate-x-1"
                    aria-hidden="true"
                  >
                    <path
                      d="M10 8H3M6 5l-3 3 3 3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ─── Why Us ─── */}
      <section className="border-t border-white/[0.06] bg-[oklch(0.14_0.01_145)] px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-2xl font-bold text-white">
            چرا الفیکس؟
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "⚡",
                title: "تشخیص سریع",
                body: "اکثر عیب‌یابی‌ها در کمتر از ۲۴ ساعت — چون توقف دستگاه برای شما هزینه است.",
              },
              {
                icon: "🔬",
                title: "مهندسی معکوس",
                body: "وقتی قطعه پیدا نمی‌شه یا سازنده منحل شده، ما مدار رو از صفر می‌خونیم.",
              },
              {
                icon: "📋",
                title: "مستند و شفاف",
                body: "گزارش کامل از خرابی، روش تعمیر، و توصیه‌های پیشگیرانه برای هر پروژه.",
              },
              {
                icon: "🛡️",
                title: "تعهد کامل",
                body: "تا دستگاه روشن نشه کار تموم نیست — حتی به قیمت ضرر شخصی.",
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col gap-3">
                <span className="text-2xl" role="img" aria-label={item.title}>
                  {item.icon}
                </span>
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[oklch(0.62_0.02_145)]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="px-6 py-20 text-center">
        <div className="mx-auto max-w-xl">
          <h2 className="mb-4 text-2xl font-bold text-white">
            مشکل فوری دارید؟
          </h2>
          <p className="mb-8 text-[oklch(0.62_0.02_145)]">
            قبل از هر تصمیمی، یک مشاوره رایگان — توضیح بدید، می‌گیم چقدر طول
            می‌کشه و چقدر هزینه داره.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[oklch(0.55_0.18_145)] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[oklch(0.62_0.18_145)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.65_0.18_145)] focus-visible:ring-offset-2 focus-visible:ring-offset-[oklch(0.12_0.01_145)]"
          >
            تماس برای مشاوره
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path
                d="M10 8H3M6 5l-3 3 3 3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
