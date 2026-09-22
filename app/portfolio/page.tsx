"use client";

import { useRef, useState } from "react";
import {
  ArrowLeft,
  Phone,
  MapPin,
  Calendar,
  Wrench,
  Zap,
  Cpu,
  Settings,
  CheckCircle2,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Award,
  Clock,
  TrendingUp,
} from "lucide-react";

// ─── Design tokens — same palette, different layout DNA ──────────────────────
const C = {
  bg: "oklch(97% 0.006 145)",
  surface: "oklch(100% 0 0)",
  surfaceRaised: "oklch(99% 0.004 145)",
  border: "oklch(88% 0.01 145)",
  borderHover: "oklch(62% 0.18 145 / 0.45)",
  accent: "oklch(42% 0.16 145)",
  accentMid: "oklch(62% 0.18 145)",
  accentSoft: "oklch(62% 0.18 145 / 0.08)",
  accentSofter: "oklch(62% 0.18 145 / 0.05)",
  accentBorder: "oklch(62% 0.18 145 / 0.2)",
  textHead: "oklch(18% 0.01 145)",
  textBody: "oklch(46% 0.008 145)",
  textMuted: "oklch(58% 0.008 145)",
  shadow: "0 1px 4px oklch(18% 0.01 145 / 0.06)",
  shadowHover: "0 8px 24px oklch(18% 0.01 145 / 0.12)",
  shadowLg: "0 16px 40px oklch(18% 0.01 145 / 0.10)",
};

// ─── Data ─────────────────────────────────────────────────────────────────────
type Category = "همه" | "جرثقیل" | "راهسازی" | "کشاورزی" | "صنعتی";

interface Project {
  id: number;
  title: string;
  client: string;
  location: string;
  date: string;
  category: Exclude<Category, "همه">;
  tags: string[];
  icon: typeof Zap;
  challenge: string;
  solution: string;
  result: string;
  metrics: { label: string; value: string }[];
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "بازیابی ECU جرثقیل Demag 400t",
    client: "شرکت عمران پارس",
    location: "تهران، جاده مخصوص کرج",
    date: "اسفند ۱۴۰۲",
    category: "جرثقیل",
    tags: ["ECU", "CAN Bus", "Demag"],
    icon: Cpu,
    challenge:
      "خرابی واحد کنترل اصلی پس از یک اتصال کوتاه ناگهانی — جرثقیل ۴۰۰ تنی در پروژه ساختمانی متوقف شده بود.",
    solution:
      "بازخوانی فریم‌ورک ECU با دستگاه برنامه‌ریز تخصصی، ترمیم بردهای آسیب‌دیده و راستی‌آزمایی کامل شبکه CAN Bus.",
    result: "جرثقیل در کمتر از ۱۴ ساعت به سرویس بازگشت.",
    metrics: [
      { label: "زمان توقف", value: "۱۴ ساعت" },
      { label: "قطعات تعویضی", value: "صفر" },
      { label: "ضمانت", value: "۶ ماه" },
    ],
    featured: true,
  },
  {
    id: 2,
    title: "عیب‌یابی سیستم شارژ Atlas 1604",
    client: "پیمانکاری ساختار نو",
    location: "اصفهان",
    date: "دی ۱۴۰۲",
    category: "راهسازی",
    tags: ["دینام", "استارت", "Atlas"],
    icon: Zap,
    challenge:
      "دینام بیل مکانیکی به‌صورت متناوب شارژ نمی‌داد و دستگاه در اواسط شیفت خاموش می‌شد.",
    solution:
      "شناسایی نوسان فرکانسی در مدار تنظیم‌کننده ولتاژ با اسیلوسکوپ صنعتی و تنظیم دقیق بدون تعویض دینام.",
    result: "صرفه‌جویی ۱۸۰ میلیون تومانی در مقابل تعویض کامل دینام.",
    metrics: [
      { label: "صرفه‌جویی", value: "۱۸۰ میلیون" },
      { label: "زمان تعمیر", value: "۶ ساعت" },
      { label: "دقت دیاگنوز", value: "±۱٪" },
    ],
    featured: true,
  },
  {
    id: 3,
    title: "کالیبراسیون سنسورهای Grove 65t",
    client: "گروه بندر توسعه",
    location: "بندرعباس",
    date: "آبان ۱۴۰۲",
    category: "جرثقیل",
    tags: ["سنسور", "Grove", "کالیبراسیون"],
    icon: Settings,
    challenge:
      "بارسنج جرثقیل بندری مقادیر نادرست نشان می‌داد و سیستم ایمنی بارگیری را مسدود کرده بود.",
    solution:
      "کالیبراسیون کامل ۱۲ سنسور بار و موقعیت با مرجع استاندارد، به‌علاوه ریست کامل پروتکل safety relay.",
    result: "جرثقیل بدون هیچ خطای باقی‌مانده تحویل داده شد.",
    metrics: [
      { label: "سنسور کالیبره", value: "۱۲ عدد" },
      { label: "خطای باقی‌مانده", value: "صفر" },
      { label: "زمان کار", value: "۱ روز" },
    ],
  },
  {
    id: 4,
    title: "تعمیر وایرینگ Komatsu PC360",
    client: "شرکت معدن پارس",
    location: "کرمان",
    date: "مهر ۱۴۰۲",
    category: "راهسازی",
    tags: ["وایرینگ", "Komatsu", "شبکه کابل"],
    icon: Wrench,
    challenge:
      "قطعی تصادفی در شبکه کابل‌کشی بیل مکانیکی معدنی که کدهای متناقض روی چند سیستم همزمان بروز می‌داد.",
    solution:
      "نقشه‌برداری کامل ۴۸۰ نقطه شبکه با تستر ایزولاسیون، شناسایی ۷ نقطه آسیب و ترمیم مسیرهای هارنس.",
    result: "رفع کامل تمام کدهای خطا و بهبود پایداری سیستم.",
    metrics: [
      { label: "نقاط بررسی", value: "۴۸۰" },
      { label: "نقاط ترمیم", value: "۷" },
      { label: "پایداری پس از تعمیر", value: "۱۰۰٪" },
    ],
  },
  {
    id: 5,
    title: "بازنویسی فریم‌ور John Deere 8R",
    client: "کشت و صنعت دشت سبز",
    location: "خوزستان",
    date: "شهریور ۱۴۰۲",
    category: "کشاورزی",
    tags: ["John Deere", "فریم‌ور", "GPS"],
    icon: Cpu,
    challenge:
      "پس از آپدیت نرم‌افزاری ناموفق، ماژول GPS و سیستم راهنمای خودکار تراکتور از کار افتاده بود.",
    solution:
      "ریکاوری فریم‌ور با نسخه پایدار قبلی، کالیبراسیون مجدد ماژول GPS و تست راهنمای خودکار زیر بار واقعی.",
    result: "سیستم راهنمای خودکار با دقت ۲.۵ سانتی‌متر بازیابی شد.",
    metrics: [
      { label: "دقت GPS", value: "±۲.۵ سانتی" },
      { label: "زمان بازیابی", value: "۸ ساعت" },
      { label: "از دست‌رفتن داده", value: "صفر" },
    ],
  },
  {
    id: 6,
    title: "سرویس کامل Liebherr LTM 1200",
    client: "شرکت نصب و راه‌اندازی پتروشیمی",
    location: "عسلویه",
    date: "مرداد ۱۴۰۲",
    category: "جرثقیل",
    tags: ["Liebherr", "نگهداری", "پیشگیری"],
    icon: Award,
    challenge:
      "پیش از یک پروژه بلندمرتبه حساس، کارفرما خواستار بازرسی جامع سیستم‌های برقی و الکترونیکی بود.",
    solution:
      "بازرسی کامل ۶۴ مدار و ۲۴ ماژول الکترونیکی، تعویض پیشگیرانه ۳ ماژول فرسوده، بروزرسانی فریم‌ور.",
    result: "جرثقیل با تاییدیه فنی کامل وارد پروژه شد — بدون هیچ وقفه‌ای.",
    metrics: [
      { label: "مدار بازرسی‌شده", value: "۶۴" },
      { label: "ماژول بروزشده", value: "۲۴" },
      { label: "خرابی در پروژه", value: "صفر" },
    ],
    featured: true,
  },
];

const categories: Category[] = ["همه", "جرثقیل", "راهسازی", "کشاورزی", "صنعتی"];

const globalStats = [
  { value: "۸+", label: "سال تجربه", icon: Clock },
  { value: "۱۲۰+", label: "پروژه موفق", icon: TrendingUp },
  { value: "۴۰+", label: "برند پشتیبانی", icon: Award },
  { value: "۱۰۰٪", label: "ضمانت کتبی", icon: CheckCircle2 },
];

// ─── Mini animated circuit background ───────────────────────────────────────
function GridBg() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage:
          "linear-gradient(oklch(88% 0.01 145 / 0.45) 1px, transparent 1px), linear-gradient(90deg, oklch(88% 0.01 145 / 0.45) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    />
  );
}

// ─── Category pill ────────────────────────────────────────────────────────────
function CategoryPill({
  label,
  active,
  onClick,
}: {
  label: Category;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2"
      style={{
        background: active ? C.accent : C.surface,
        color: active ? "oklch(98% 0.005 145)" : C.textBody,
        border: "1px solid " + (active ? C.accent : C.border),
        outlineColor: C.accent,
      }}
      onMouseEnter={(e) => {
        if (!active) {
          (e.currentTarget as HTMLButtonElement).style.borderColor =
            C.borderHover;
          (e.currentTarget as HTMLButtonElement).style.color = C.accent;
        }
      }}
      onMouseLeave={(e) => {
        if (!active) {
          (e.currentTarget as HTMLButtonElement).style.borderColor = C.border;
          (e.currentTarget as HTMLButtonElement).style.color = C.textBody;
        }
      }}
    >
      {label}
    </button>
  );
}

// ─── Featured project card (wide) ────────────────────────────────────────────
function FeaturedCard({
  project,
  hovered,
  onEnter,
  onLeave,
}: {
  project: Project;
  hovered: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const Icon = project.icon;
  return (
    <article
      className="relative rounded-2xl overflow-hidden transition-all duration-250"
      style={{
        background: C.surface,
        border: "1px solid " + (hovered ? C.borderHover : C.border),
        boxShadow: hovered ? C.shadowLg : C.shadow,
        transform: hovered ? "translateY(-6px)" : "none",
      }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {/* Top accent bar */}
      <div
        aria-hidden="true"
        className="h-1 w-full"
        style={{
          background: `linear-gradient(to left, ${C.accentMid}, ${C.accent})`,
        }}
      />

      <div className="p-7 flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
        {/* Left: icon + meta */}
        <div className="flex flex-col gap-4 md:w-56 md:shrink-0">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-xl"
            style={{
              background: C.accentSoft,
              border: "1px solid " + C.accentBorder,
            }}
          >
            <Icon
              size={22}
              style={{ color: C.accent }}
              aria-hidden="true"
              strokeWidth={1.5}
            />
          </div>

          <div className="flex flex-col gap-1">
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: C.accentMid }}
            >
              پروژه برجسته
            </span>
            <h3
              className="text-lg font-bold leading-snug"
              style={{ color: C.textHead }}
            >
              {project.title}
            </h3>
          </div>

          <div className="flex flex-col gap-2 text-xs" style={{ color: C.textMuted }}>
            <span className="flex items-center gap-1.5">
              <MapPin size={12} aria-hidden="true" />
              {project.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={12} aria-hidden="true" />
              {project.date}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded-md px-2 py-0.5 text-xs"
                style={{
                  background: C.accentSoft,
                  color: C.accent,
                  border: "1px solid " + C.accentBorder,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          aria-hidden="true"
          className="hidden md:block w-px self-stretch"
          style={{ background: C.border }}
        />

        {/* Right: story */}
        <div className="flex-1 flex flex-col gap-5">
          {[
            { label: "چالش", text: project.challenge },
            { label: "راه‌حل", text: project.solution },
            { label: "نتیجه", text: project.result },
          ].map(({ label, text }) => (
            <div key={label} className="flex flex-col gap-1">
              <span
                className="text-xs font-semibold uppercase tracking-wide"
                style={{ color: C.accentMid }}
              >
                {label}
              </span>
              <p className="text-sm leading-relaxed" style={{ color: C.textBody }}>
                {text}
              </p>
            </div>
          ))}

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="flex flex-col gap-0.5 rounded-xl p-3"
                style={{
                  background: C.accentSofter,
                  border: "1px solid " + C.accentBorder,
                }}
              >
                <span
                  className="text-lg font-bold tabular-nums"
                  style={{ color: C.accent }}
                >
                  {m.value}
                </span>
                <span className="text-xs" style={{ color: C.textMuted }}>
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

// ─── Regular project card ─────────────────────────────────────────────────────
function ProjectCard({
  project,
  hovered,
  onEnter,
  onLeave,
}: {
  project: Project;
  hovered: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const Icon = project.icon;
  return (
    <article
      className="relative flex flex-col gap-5 rounded-2xl p-6 transition-all duration-200"
      style={{
        background: C.surface,
        border: "1px solid " + (hovered ? C.borderHover : C.border),
        boxShadow: hovered ? C.shadowHover : C.shadow,
        transform: hovered ? "translateY(-4px)" : "none",
      }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
          style={{
            background: C.accentSoft,
            border: "1px solid " + C.accentBorder,
          }}
        >
          <Icon
            size={18}
            style={{ color: C.accent }}
            aria-hidden="true"
            strokeWidth={1.5}
          />
        </div>
        <span
          className="rounded-full px-2.5 py-0.5 text-xs font-medium"
          style={{
            background: C.accentSoft,
            color: C.accent,
            border: "1px solid " + C.accentBorder,
          }}
        >
          {project.category}
        </span>
      </div>

      {/* Title + client */}
      <div className="flex flex-col gap-1">
        <h3 className="text-base font-bold" style={{ color: C.textHead }}>
          {project.title}
        </h3>
        <p className="text-xs" style={{ color: C.textMuted }}>
          {project.client}
        </p>
      </div>

      {/* Challenge snippet */}
      <p
        className="text-sm leading-relaxed line-clamp-2"
        style={{ color: C.textBody }}
      >
        {project.challenge}
      </p>

      {/* Meta row */}
      <div
        className="flex items-center gap-3 text-xs pt-1 border-t"
        style={{ color: C.textMuted, borderColor: C.border }}
      >
        <span className="flex items-center gap-1">
          <MapPin size={11} aria-hidden="true" />
          {project.location.split("،")[0]}
        </span>
        <span className="flex items-center gap-1">
          <Calendar size={11} aria-hidden="true" />
          {project.date}
        </span>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-2">
        {project.metrics.map((m) => (
          <div
            key={m.label}
            className="flex flex-col gap-0.5 rounded-lg p-2.5"
            style={{
              background: hovered ? C.accentSoft : "oklch(98% 0.004 145)",
              border: "1px solid " + (hovered ? C.accentBorder : C.border),
              transition: "background 0.2s, border-color 0.2s",
            }}
          >
            <span
              className="text-sm font-bold tabular-nums"
              style={{ color: C.accent }}
            >
              {m.value}
            </span>
            <span className="text-xs leading-tight" style={{ color: C.textMuted }}>
              {m.label}
            </span>
          </div>
        ))}
      </div>
    </article>
  );
}

// ─── Timeline node ────────────────────────────────────────────────────────────
function TimelineEntry({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);
  const Icon = project.icon;
  const isEven = index % 2 === 0;

  return (
    <div
      className={`relative flex gap-6 items-start ${isEven ? "flex-row" : "flex-row-reverse"} md:gap-8`}
    >
      {/* Card */}
      <div
        className="flex-1 rounded-xl p-5 transition-all duration-200 cursor-default"
        style={{
          background: C.surface,
          border: "1px solid " + (hovered ? C.borderHover : C.border),
          boxShadow: hovered ? C.shadowHover : C.shadow,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="flex items-center gap-2 mb-2">
          <Icon
            size={14}
            style={{ color: C.accent }}
            aria-hidden="true"
            strokeWidth={1.5}
          />
          <span className="text-sm font-semibold" style={{ color: C.textHead }}>
            {project.title}
          </span>
        </div>
        <p className="text-xs leading-relaxed" style={{ color: C.textBody }}>
          {project.result}
        </p>
        <div
          className="flex items-center gap-3 mt-3 text-xs"
          style={{ color: C.textMuted }}
        >
          <span>{project.date}</span>
          <span>·</span>
          <span>{project.client}</span>
        </div>
      </div>

      {/* Spine node */}
      <div className="flex flex-col items-center shrink-0">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-full z-10"
          style={{
            background: hovered ? C.accent : C.accentSoft,
            border: "2px solid " + (hovered ? C.accent : C.accentBorder),
            transition: "background 0.2s, border-color 0.2s",
            boxShadow: hovered ? "0 0 0 4px " + C.accentSoft : "none",
          }}
        >
          <Icon
            size={14}
            style={{
              color: hovered ? "oklch(98% 0.005 145)" : C.accent,
              transition: "color 0.2s",
            }}
            aria-hidden="true"
            strokeWidth={1.8}
          />
        </div>
      </div>

      {/* Spacer for opposite side */}
      <div className="flex-1 hidden md:block" />
    </div>
  );
}

// ─── Main page component ──────────────────────────────────────────────────────
export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("همه");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredFeatured, setHoveredFeatured] = useState<number | null>(null);
  const [activeView, setActiveView] = useState<"grid" | "timeline">("grid");
  const sectionRef = useRef<HTMLElement>(null);

  const filtered =
    activeCategory === "همه"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const featured = filtered.filter((p) => p.featured);
  const regular = filtered.filter((p) => !p.featured);

  return (
    <section
      ref={sectionRef}
      dir="rtl"
      className="relative overflow-hidden py-24 sm:py-32"
      aria-labelledby="portfolio-heading"
      style={{ background: C.bg }}
    >
      <GridBg />

      {/* Radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-64 right-1/4 h-[600px] w-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, oklch(62% 0.18 145 / 0.06) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, oklch(62% 0.18 145 / 0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 flex flex-col gap-20">

        {/* ── HERO HEADER ── */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5 max-w-2xl">
            <span
              className="inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-widest uppercase"
              style={{
                borderColor: C.borderHover,
                color: C.accent,
                background: C.accentSoft,
              }}
            >
              <Award size={12} aria-hidden="true" />
              نمونه‌کارها
            </span>

            <h1
              id="portfolio-heading"
              className="text-4xl font-bold leading-tight sm:text-5xl"
              style={{ color: C.textHead }}
            >
              هر پروژه،{" "}
              <span style={{ color: C.accent }}>یک داستان واقعی</span>
            </h1>

            <p
              className="text-base leading-relaxed max-w-xl"
              style={{ color: C.textBody }}
            >
              اینجا ادعا نیست — نتایج واقعی است. هر مورد را با چالش، راه‌حل و
              عدد نهایی ثبت کرده‌ایم تا خودتان قضاوت کنید.
            </p>
          </div>

          {/* Global stats strip */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {globalStats.map(({ value, label, icon: Icon }) => (
              <div
                key={label}
                className="flex flex-col gap-3 rounded-2xl p-5"
                style={{
                  background: C.surface,
                  border: "1px solid " + C.border,
                  boxShadow: C.shadow,
                }}
              >
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-lg"
                  style={{
                    background: C.accentSoft,
                    border: "1px solid " + C.accentBorder,
                  }}
                >
                  <Icon
                    size={14}
                    style={{ color: C.accent }}
                    aria-hidden="true"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <div
                    className="text-2xl font-bold tabular-nums"
                    style={{ color: C.accent }}
                  >
                    {value}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: C.textMuted }}>
                    {label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── FILTER + VIEW TOGGLE ── */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="فیلتر دسته‌بندی"
          >
            {categories.map((cat) => (
              <CategoryPill
                key={cat}
                label={cat}
                active={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
              />
            ))}
          </div>

          {/* View toggle */}
          <div
            className="flex rounded-xl overflow-hidden"
            style={{ border: "1px solid " + C.border }}
            role="group"
            aria-label="نمای نمایش"
          >
            {(["grid", "timeline"] as const).map((v) => (
              <button
                key={v}
                onClick={() => setActiveView(v)}
                className="px-4 py-2 text-xs font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{
                  background: activeView === v ? C.accentSoft : C.surface,
                  color: activeView === v ? C.accent : C.textMuted,
                  outlineColor: C.accent,
                }}
                aria-pressed={activeView === v}
              >
                {v === "grid" ? "شبکه‌ای" : "زمان‌بندی"}
              </button>
            ))}
          </div>
        </div>

        {/* ── GRID VIEW ── */}
        {activeView === "grid" && (
          <div className="flex flex-col gap-6">
            {/* Featured row */}
            {featured.length > 0 && (
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <span
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: C.accentMid }}
                  >
                    پروژه‌های برجسته
                  </span>
                  <div
                    className="h-px w-12"
                    style={{ background: C.accentMid }}
                    aria-hidden="true"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  {featured.map((p) => (
                    <FeaturedCard
                      key={p.id}
                      project={p}
                      hovered={hoveredFeatured === p.id}
                      onEnter={() => setHoveredFeatured(p.id)}
                      onLeave={() => setHoveredFeatured(null)}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Regular grid */}
            {regular.length > 0 && (
              <div className="flex flex-col gap-4">
                {featured.length > 0 && (
                  <div className="flex flex-col gap-1">
                    <span
                      className="text-xs font-semibold uppercase tracking-widest"
                      style={{ color: C.textMuted }}
                    >
                      سایر پروژه‌ها
                    </span>
                    <div
                      className="h-px w-12"
                      style={{ background: C.border }}
                      aria-hidden="true"
                    />
                  </div>
                )}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {regular.map((p) => (
                    <ProjectCard
                      key={p.id}
                      project={p}
                      hovered={hoveredCard === p.id}
                      onEnter={() => setHoveredCard(p.id)}
                      onLeave={() => setHoveredCard(null)}
                    />
                  ))}
                </div>
              </div>
            )}

            {filtered.length === 0 && (
              <div
                className="flex flex-col items-center gap-3 py-24 rounded-2xl"
                style={{
                  background: C.surface,
                  border: "1px dashed " + C.border,
                }}
              >
                <span
                  className="text-3xl font-bold"
                  style={{ color: C.accentSoft }}
                  aria-hidden="true"
                >
                  ☺
                </span>
                <p className="text-sm" style={{ color: C.textMuted }}>
                  هنوز پروژه‌ای در این دسته ثبت نشده.
                </p>
              </div>
            )}
          </div>
        )}

        {/* ── TIMELINE VIEW ── */}
        {activeView === "timeline" && (
          <div className="relative flex flex-col gap-6">
            {/* Vertical spine */}
            <div
              aria-hidden="true"
              className="absolute top-4 bottom-4 hidden md:block"
              style={{
                right: "calc(50% - 1px)",
                width: "2px",
                background: `linear-gradient(to bottom, transparent, ${C.accentBorder} 8%, ${C.accentBorder} 92%, transparent)`,
              }}
            />

            {filtered.map((p, i) => (
              <TimelineEntry key={p.id} project={p} index={i} />
            ))}

            {filtered.length === 0 && (
              <p className="text-sm text-center py-16" style={{ color: C.textMuted }}>
                هنوز پروژه‌ای در این دسته ثبت نشده.
              </p>
            )}
          </div>
        )}

        {/* ── BOTTOM CTA ── */}
        <div
          className="relative overflow-hidden rounded-2xl px-8 py-10 flex flex-col items-center gap-6 text-center"
          style={{
            background:
              "linear-gradient(135deg, oklch(42% 0.16 145) 0%, oklch(52% 0.20 145) 100%)",
          }}
        >
          {/* subtle inner grid */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(oklch(100% 0 0 / 0.05) 1px, transparent 1px), linear-gradient(90deg, oklch(100% 0 0 / 0.05) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative flex flex-col items-center gap-3 max-w-lg">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-xl mb-1"
              style={{
                background: "oklch(100% 0 0 / 0.12)",
                border: "1px solid oklch(100% 0 0 / 0.2)",
              }}
            >
              <Wrench
                size={22}
                style={{ color: "oklch(88% 0.10 145)" }}
                aria-hidden="true"
                strokeWidth={1.5}
              />
            </div>
            <h2
              className="text-xl font-bold sm:text-2xl"
              style={{ color: "oklch(97% 0.005 145)" }}
            >
              پروژه‌ی بعدی می‌تواند اینجا باشد
            </h2>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "oklch(82% 0.06 145)" }}
            >
              اگر ماشین‌آلات شما منتظر یک تیم متخصص است، همین حالا تماس بگیرید.
              مشاوره اولیه رایگان است.
            </p>
          </div>

          <div className="relative flex flex-wrap justify-center gap-3">
            <a
              href="tel:+989375525707"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{
                background: "oklch(98% 0.005 145)",
                color: C.accent,
                outlineColor: "oklch(98% 0.005 145)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "oklch(93% 0.012 145)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "oklch(98% 0.005 145)";
              }}
            >
              <Phone size={15} aria-hidden="true" />
              تماس فوری
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{
                background: "oklch(100% 0 0 / 0.12)",
                color: "oklch(97% 0.005 145)",
                border: "1px solid oklch(100% 0 0 / 0.25)",
                outlineColor: "oklch(98% 0.005 145)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "oklch(100% 0 0 / 0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "oklch(100% 0 0 / 0.12)";
              }}
            >
              ارسال درخواست
              <ArrowLeft size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
