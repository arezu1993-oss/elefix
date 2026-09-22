"use client";

import { useRef, useState } from "react";
import {
  Zap,
  ScanLine,
  Cpu,
  Gauge,
  Settings,
  AlertTriangle,
  Wrench,
  Shield,
  Activity,
  CheckCircle2,
  ArrowLeft,
  Phone,
} from "lucide-react";

const C = {
  bg: "oklch(97% 0.006 145)",
  surface: "oklch(100% 0 0)",
  border: "oklch(88% 0.01 145)",
  borderHover: "oklch(62% 0.18 145 / 0.45)",
  accent: "oklch(42% 0.16 145)",
  accentMid: "oklch(62% 0.18 145)",
  accentSoft: "oklch(62% 0.18 145 / 0.1)",
  accentBorder: "oklch(62% 0.18 145 / 0.2)",
  textHead: "oklch(18% 0.01 145)",
  textBody: "oklch(46% 0.008 145)",
  textMuted: "oklch(58% 0.008 145)",
  shadow: "0 1px 4px oklch(18% 0.01 145 / 0.06)",
  shadowHover: "0 4px 16px oklch(18% 0.01 145 / 0.10)",
};

const stats = [
  { value: "۸+", label: "سال تجربه" },
  { value: "۴۰+", label: "برند پشتیبانی‌شده" },
  { value: "۲۴/۷", label: "پشتیبانی فنی" },
  { value: "۱۰۰٪", label: "ضمانت کتبی" },
];

const subServices = [
  {
    icon: ScanLine,
    title: "دیاگنوز سیستم برق",
    desc: "شناسایی دقیق خرابی تا سطح قطعه با اسیلوسکوپ صنعتی، اسکنر تشخیصی و پروتکل‌های CAN Bus.",
  },
  {
    icon: Cpu,
    title: "تعمیر ECU و وایرینگ",
    desc: "بازیابی و برنامه‌ریزی مجدد واحد کنترل موتور، عیب‌یابی بردهای الکترونیکی و شبکه کابل‌کشی.",
  },
  {
    icon: Gauge,
    title: "سنسورها و ترانسمیترها",
    desc: "کالیبراسیون و تعویض انواع سنسور فشار، دما، موقعیت و دور — از جمله سنسورهای LiDAR و GPS.",
  },
  {
    icon: Settings,
    title: "سیستم‌های شارژ و استارت",
    desc: "تعمیر و تنظیم دینام، استارت‌موتور و مدارهای راه‌اندازی ماشین‌آلات راهسازی و کشاورزی.",
  },
  {
    icon: AlertTriangle,
    title: "رفع خطاهای اضطراری",
    desc: "پاک‌سازی کدهای خطا، ریست کنترل‌پنل و بازگردانی سریع دستگاه به خط تولید.",
  },
  {
    icon: Wrench,
    title: "نگهداری پیشگیرانه",
    desc: "بازرسی دوره‌ای مدارهای برقی و الکترونیکی برای جلوگیری از توقف ناگهانی.",
  },
];

const steps = [
  { num: "۱", title: "دریافت درخواست", desc: "تماس یا فرم آنلاین — در کمتر از ۲ ساعت پاسخ می‌گیرید." },
  { num: "۲", title: "دیاگنوز اولیه", desc: "بررسی علائم خرابی با ابزار دیجیتال و ارائه گزارش اولیه." },
  { num: "۳", title: "تعمیر و تست", desc: "انجام تعمیر با قطعات اصلی و راستی‌آزمایی زیر بار واقعی." },
  { num: "۴", title: "تحویل و ضمانت", desc: "تحویل با گزارش فنی کامل و ضمانت‌نامه کتبی خدمات." },
];

const tools = [
  { name: "اسیلوسکوپ صنعتی", detail: "آنالیز سیگنال در فرکانس‌های بالا — دقت ±۱٪", icon: Activity },
  { name: "اسکنر دیاگنوستیک", detail: "خواندن و پاک‌سازی کدهای خطا برای بیش از ۴۰ برند", icon: ScanLine },
  { name: "تستر ایزولاسیون", detail: "تشخیص اتصال کوتاه در مدارهای فشار قوی تا ۵ کیلوولت", icon: Shield },
];

const brands = [
  "Atlas 1504 / 1604",
  "Atlas 225 / 260",
  "Grove 40t / 65t",
  "Demag 400t",
  "Terex",
  "TL260 / TL310",
  "Caterpillar",
  "Komatsu",
  "John Deere",
  "Volvo CE",
  "Liebherr",
  "Hitachi",
];

function CircuitSVG() {
  return (
    <svg
      viewBox="0 0 400 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full h-full"
    >
      <style>{`
        @keyframes dash { to { stroke-dashoffset: -48; } }
        @keyframes pulse-node {
          0%, 100% { opacity: 0.7; }
          50%       { opacity: 1; }
        }
        .cl  { animation: dash 1.6s linear infinite; }
        .cl2 { animation: dash 1.6s linear infinite 0.4s; }
        .cl3 { animation: dash 1.6s linear infinite 0.8s; }
        .pn1 { animation: pulse-node 2s ease-in-out infinite; }
        .pn2 { animation: pulse-node 2s ease-in-out infinite 0.6s; }
        .pn3 { animation: pulse-node 2s ease-in-out infinite 1.2s; }
      `}</style>

      <rect width="400" height="260" fill="oklch(97% 0.006 145)" rx="16" />

      {[52, 104, 156, 208].map((y) => (
        <line key={"h" + y} x1="0" y1={y} x2="400" y2={y} stroke="oklch(88% 0.01 145)" strokeWidth="1" />
      ))}
      {[80, 160, 240, 320].map((x) => (
        <line key={"v" + x} x1={x} y1="0" x2={x} y2="260" stroke="oklch(88% 0.01 145)" strokeWidth="1" />
      ))}

      <path
        d="M 40 130 H 70"
        stroke="oklch(62% 0.18 145 / 0.5)"
        strokeWidth="1.5"
        strokeDasharray="8 6"
        className="cl"
      />
      <path
        d="M 122 130 H 174"
        stroke="oklch(62% 0.18 145 / 0.4)"
        strokeWidth="1.5"
        strokeDasharray="8 6"
        className="cl2"
      />
      <path
        d="M 226 130 H 260"
        stroke="oklch(62% 0.18 145 / 0.5)"
        strokeWidth="1.5"
        strokeDasharray="8 6"
        className="cl3"
      />
      <path
        d="M 340 130 H 370"
        stroke="oklch(62% 0.18 145 / 0.4)"
        strokeWidth="1.5"
        strokeDasharray="8 6"
        className="cl"
      />

      <rect x="70" y="108" width="52" height="44" rx="6" fill="oklch(100% 0 0)" stroke="oklch(42% 0.16 145)" strokeWidth="1.5" />
      <text x="96" y="128" textAnchor="middle" fontSize="9" fill="oklch(42% 0.16 145)" fontFamily="monospace" fontWeight="700">ECU</text>
      <text x="96" y="141" textAnchor="middle" fontSize="7" fill="oklch(58% 0.008 145)" fontFamily="monospace">v2.4</text>

      <rect x="174" y="108" width="52" height="44" rx="6" fill="oklch(100% 0 0)" stroke="oklch(62% 0.18 145 / 0.6)" strokeWidth="1.5" />
      <text x="200" y="128" textAnchor="middle" fontSize="8" fill="oklch(42% 0.16 145)" fontFamily="monospace" fontWeight="700">SENSOR</text>
      <text x="200" y="141" textAnchor="middle" fontSize="7" fill="oklch(58% 0.008 145)" fontFamily="monospace">x12</text>

      <rect x="288" y="108" width="52" height="44" rx="6" fill="oklch(100% 0 0)" stroke="oklch(62% 0.18 145 / 0.6)" strokeWidth="1.5" />
      <text x="314" y="128" textAnchor="middle" fontSize="8" fill="oklch(42% 0.16 145)" fontFamily="monospace" fontWeight="700">RELAY</text>
      <text x="314" y="141" textAnchor="middle" fontSize="7" fill="oklch(58% 0.008 145)" fontFamily="monospace">24V</text>

      <circle cx="120" cy="130" r="5" fill="oklch(42% 0.16 145)" className="pn1" />
      <circle cx="200" cy="108" r="5" fill="oklch(52% 0.18 145)" className="pn2" />
      <circle cx="260" cy="130" r="5" fill="oklch(42% 0.16 145)" className="pn3" />

      <text x="8"   y="126" fontSize="8" fill="oklch(58% 0.008 145)" fontFamily="monospace">+24V</text>
      <text x="372" y="126" fontSize="8" fill="oklch(58% 0.008 145)" fontFamily="monospace">GND</text>
    </svg>
  );
}

export default function ElectricalService() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [hoveredTool, setHoveredTool] = useState<number | null>(null);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-24 sm:py-32"
      dir="rtl"
      aria-labelledby="electrical-service-heading"
      style={{ background: C.bg }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(oklch(88% 0.01 145 / 0.5) 1px, transparent 1px), linear-gradient(90deg, oklch(88% 0.01 145 / 0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, oklch(62% 0.18 145 / 0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 flex flex-col gap-24">
        {/* HERO */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-6">
            <span
              className="inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-widest uppercase"
              style={{
                borderColor: C.borderHover,
                color: C.accent,
                background: C.accentSoft,
              }}
            >
              <Zap size={12} aria-hidden="true" />
              سرویس تخصصی
            </span>

            <h1
              id="electrical-service-heading"
              className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"
              style={{ color: C.textHead }}
            >
              تعمیر و عیب‌یابی{" "}
              <span style={{ color: C.accent }}>سیستم‌های برقی ماشین‌آلات</span>
            </h1>

            <p
              className="text-base leading-relaxed max-w-lg"
              style={{ color: C.textBody }}
            >
              از بیل مکانیکی Atlas تا جرثقیل Demag ۴۰۰ تنی — با بیش از ۸ سال
              تجربه واقعی در تعمیر سیستم‌های برقی، الکترونیکی و CAN Bus
              ماشین‌آلات راهسازی و کشاورزی، خرابی را دقیق شناسایی می‌کنیم و با
              کمترین توقف به خط تولید برمی‌گردانیم.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col gap-1 rounded-xl p-4"
                  style={{
                    background: C.surface,
                    border: "1px solid " + C.border,
                    boxShadow: C.shadow,
                  }}
                >
                  <span
                    className="text-2xl font-bold tabular-nums"
                    style={{ color: C.accent }}
                  >
                    {s.value}
                  </span>
                  <span className="text-xs" style={{ color: C.textMuted }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+989375525707"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{
                  background: C.accent,
                  color: "oklch(98% 0.005 145)",
                  outlineColor: C.accent,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "oklch(36% 0.16 145)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    C.accent;
                }}
              >
                <Phone size={15} aria-hidden="true" />
                تماس با کارشناس
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{
                  background: C.surface,
                  border: "1px solid " + C.border,
                  color: C.accent,
                  outlineColor: C.accent,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = C.borderHover;
                  el.style.boxShadow = C.shadowHover;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = C.border;
                  el.style.boxShadow = "none";
                }}
              >
                ارسال درخواست
                <ArrowLeft size={15} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              border: "1px solid " + C.border,
              boxShadow: C.shadow,
              aspectRatio: "16/10",
            }}
          >
            <CircuitSVG />
            <div
              className="absolute bottom-4 right-4 flex items-center gap-2 rounded-xl px-4 py-2"
              style={{
                background: C.surface,
                border: "1px solid " + C.border,
                boxShadow: C.shadow,
              }}
            >
              <div
                className="h-2 w-2 rounded-full"
                style={{ background: C.accentMid }}
                aria-hidden="true"
              />
              <span
                className="text-xs font-medium"
                style={{ color: C.textBody }}
              >
                سیستم آنلاین
              </span>
            </div>
          </div>
        </div>

        {/* SUB-SERVICES */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3 max-w-xl">
            <span
              className="inline-flex w-fit rounded-full border px-3 py-1 text-xs font-medium tracking-widest uppercase"
              style={{
                borderColor: C.borderHover,
                color: C.accent,
                background: C.accentSoft,
              }}
            >
              حوزه‌های خدمت
            </span>
            <h2
              className="text-2xl font-bold sm:text-3xl"
              style={{ color: C.textHead }}
            >
              چه خدماتی ارائه می‌دهیم؟
            </h2>
            <p
              className="text-sm leading-relaxed"
              style={{ color: C.textBody }}
            >
              پوشش کامل مدارهای برقی و الکترونیکی — از تشخیص خطا تا تحویل با
              ضمانت.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {subServices.map(({ icon: Icon, title, desc }, i) => (
              <article
                key={title}
                className="group relative flex flex-col gap-4 rounded-2xl p-6 transition-all duration-200"
                style={{
                  background: C.surface,
                  border:
                    "1px solid " +
                    (hoveredCard === i ? C.borderHover : C.border),
                  boxShadow: hoveredCard === i ? C.shadowHover : C.shadow,
                  transform: hoveredCard === i ? "translateY(-4px)" : "none",
                }}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg"
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
                <div className="flex flex-col gap-2">
                  <h3
                    className="text-base font-semibold"
                    style={{ color: C.textHead }}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: C.textBody }}
                  >
                    {desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* PROCESS STEPS */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3 max-w-xl">
            <span
              className="inline-flex w-fit rounded-full border px-3 py-1 text-xs font-medium tracking-widest uppercase"
              style={{
                borderColor: C.borderHover,
                color: C.accent,
                background: C.accentSoft,
              }}
            >
              فرآیند کار
            </span>
            <h2
              className="text-2xl font-bold sm:text-3xl"
              style={{ color: C.textHead }}
            >
              از تماس تا تحویل
            </h2>
          </div>

          <div className="relative grid gap-6 md:grid-cols-4">
            <div
              aria-hidden="true"
              className="absolute top-7 right-8 left-8 h-px hidden md:block"
              style={{
                background:
                  "linear-gradient(to left, transparent, " +
                  C.accentMid +
                  ", transparent)",
              }}
            />
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="relative flex flex-col gap-4 rounded-2xl p-6 transition-all duration-200"
                style={{
                  background: C.surface,
                  border:
                    "1px solid " +
                    (hoveredStep === i ? C.borderHover : C.border),
                  boxShadow: hoveredStep === i ? C.shadowHover : C.shadow,
                }}
                onMouseEnter={() => setHoveredStep(i)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-xl text-2xl font-bold"
                  style={{
                    background: hoveredStep === i ? C.accent : C.accentSoft,
                    color:
                      hoveredStep === i ? "oklch(98% 0.005 145)" : C.accent,
                    transition: "background 0.2s, color 0.2s",
                    border: "1px solid " + C.accentBorder,
                  }}
                >
                  {step.num}
                </div>
                <div className="flex flex-col gap-2">
                  <h3
                    className="text-base font-semibold"
                    style={{ color: C.textHead }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: C.textBody }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DIAGNOSTIC TOOLS */}
        <div
          className="rounded-2xl p-8 flex flex-col gap-8"
          style={{
            background: C.surface,
            border: "1px solid " + C.border,
            boxShadow: C.shadow,
          }}
        >
          <div className="flex flex-col gap-2">
            <span
              className="inline-flex w-fit rounded-full border px-3 py-1 text-xs font-medium tracking-widest uppercase"
              style={{
                borderColor: C.borderHover,
                color: C.accent,
                background: C.accentSoft,
              }}
            >
              تجهیزات
            </span>
            <h2
              className="text-2xl font-bold sm:text-3xl"
              style={{ color: C.textHead }}
            >
              ابزارما
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {tools.map(({ name, detail, icon: Icon }, i) => (
              <div
                key={name}
                className="flex items-start gap-4 rounded-xl p-5 transition-all duration-200"
                style={{
                  background:
                    hoveredTool === i ? C.accentSoft : "oklch(98% 0.004 145)",
                  border:
                    "1px solid " +
                    (hoveredTool === i ? C.borderHover : C.border),
                }}
                onMouseEnter={() => setHoveredTool(i)}
                onMouseLeave={() => setHoveredTool(null)}
              >
                <div
                  className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
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
                <div className="flex flex-col gap-1">
                  <p
                    className="text-sm font-semibold"
                    style={{ color: C.textHead }}
                  >
                    {name}
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: C.textBody }}
                  >
                    {detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BRANDS */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3 items-center text-center">
            <span
              className="inline-flex w-fit rounded-full border px-3 py-1 text-xs font-medium tracking-widest uppercase"
              style={{
                borderColor: C.borderHover,
                color: C.accent,
                background: C.accentSoft,
              }}
            >
              پوشش برندها
            </span>
            <h2
              className="text-2xl font-bold sm:text-3xl"
              style={{ color: C.textHead }}
            >
              سازگار با برندهای بین‌المللی
            </h2>
            <p className="text-sm max-w-md" style={{ color: C.textBody }}>
              تجربه واقعی با بیش از ۴۰ برند ماشین‌آلات راهسازی و کشاورزی — نه
              ادعا.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {brands.map((brand) => (
              <div
                key={brand}
                className="flex items-center justify-center rounded-xl px-4 py-4 text-sm font-semibold transition-colors duration-150 text-center cursor-default"
                style={{
                  background: C.surface,
                  border: "1px solid " + C.border,
                  color: C.textBody,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = C.borderHover;
                  el.style.color = C.accent;
                  el.style.background = C.accentSoft;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = C.border;
                  el.style.color = C.textBody;
                  el.style.background = C.surface;
                }}
              >
                {brand}
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div
          className="flex flex-col items-center justify-between gap-6 rounded-2xl px-8 py-8 sm:flex-row"
          style={{
            background:
              "linear-gradient(135deg, oklch(42% 0.16 145) 0%, oklch(52% 0.20 145) 100%)",
          }}
        >
          <div className="flex flex-col gap-2 sm:max-w-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2
                size={18}
                style={{ color: "oklch(80% 0.12 145)" }}
                aria-hidden="true"
              />
              <span
                className="text-sm font-semibold"
                style={{ color: "oklch(96% 0.005 145)" }}
              >
                ضمانت‌نامه کتبی برای تمام خدمات
              </span>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "oklch(82% 0.06 145)" }}
            >
              ماشین‌آلات شما منتظر نمی‌مانند — ما هم همین‌طور. همین حالا وقت
              مشاوره رایگان رزرو کنید.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
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
                  "oklch(94% 0.01 145)";
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
