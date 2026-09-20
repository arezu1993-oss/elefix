"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { Cpu, Zap, PenTool, ArrowLeft, CheckCircle2 } from "lucide-react";
import Image from "next/image";

// ─── Stat counter hook ────────────────────────────────────────────────────────
function useCounter(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}

// ─── Feature card ─────────────────────────────────────────────────────────────
const cardVariant: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

function FeatureCard({
  icon,
  accent,
  title,
  desc,
  tags,
}: {
  icon: React.ReactNode;
  accent: string;
  title: string;
  desc: string;
  tags: string[];
}) {
  return (
    <motion.div
      variants={cardVariant}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative flex flex-col gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6 backdrop-blur-sm overflow-hidden cursor-default"
      style={{ boxShadow: "inset 0 1px 0 oklch(1 0 0 / 0.06)" }}
    >
      {/* Hover glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
        style={{
          background: `radial-gradient(220px circle at 50% 0%, ${accent}22, transparent 70%)`,
        }}
      />
      {/* Icon */}
      <div
        className="relative w-12 h-12 rounded-xl flex items-center justify-center"
        style={{ background: `${accent}18`, border: `1px solid ${accent}30` }}
      >
        {icon}
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-base font-bold text-white leading-snug">{title}</h3>
        <p className="text-sm text-neutral-400 leading-relaxed">{desc}</p>
      </div>
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-0.5 rounded-full text-xs font-medium"
            style={{ background: `${accent}14`, color: accent }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

// ─── Stat pill ────────────────────────────────────────────────────────────────
function StatPill({
  value,
  label,
  suffix = "",
  started,
}: {
  value: number;
  label: string;
  suffix?: string;
  started: boolean;
}) {
  const count = useCounter(value, 1600, started);
  return (
    <div className="flex flex-col items-center gap-0.5">
      <span className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums">
        {count}
        {suffix}
      </span>
      <span className="text-xs text-neutral-500">{label}</span>
    </div>
  );
}

// ─── HeroSection ─────────────────────────────────────────────────────────────
export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  // Mouse glow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 22 });
  const glow = useMotionTemplate`radial-gradient(380px circle at ${springX}px ${springY}px, oklch(0.72 0.17 155 / 0.11), transparent 75%)`;

  // Parallax
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], ["0%", "18%"]);

  useEffect(() => {
    setMounted(true);
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  // Intersection observer for stat counters
  useEffect(() => {
    if (!statsRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsVisible(true);
      },
      { threshold: 0.4 },
    );
    obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.14, delayChildren: 0.25 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const emerald = "oklch(0.72 0.17 155)";
  const teal = "oklch(0.68 0.14 185)";
  const lime = "oklch(0.76 0.16 130)";

  if (!mounted) return null;

  return (
    <section
      dir="rtl"
      className="relative w-full min-h-screen bg-[oklch(0.07_0.005_250)] overflow-hidden flex flex-col"
    >
      {/* ── Background image with parallax ── */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <Image
          src="/images/hero-lab.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          style={{
            filter: "brightness(0.38) saturate(0.7) contrast(1.15)",
          }}
        />
      </motion.div>

      {/* ── Vignette overlays ── */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div
          className="absolute inset-x-0 top-0 h-52"
          style={{
            background:
              "linear-gradient(to bottom, oklch(0.07 0.005 250 / 0.82) 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-72"
          style={{
            background:
              "linear-gradient(to top, oklch(0.07 0.005 250) 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-y-0 left-0 w-40"
          style={{
            background:
              "linear-gradient(to right, oklch(0.07 0.005 250 / 0.65) 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-y-0 right-0 w-40"
          style={{
            background:
              "linear-gradient(to left, oklch(0.07 0.005 250 / 0.65) 0%, transparent 100%)",
          }}
        />
      </div>

      {/* ── Technical grid overlay ── */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(0.7 0 0 / 1) 1px, transparent 1px)," +
            "linear-gradient(to bottom, oklch(0.7 0 0 / 1) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, #000 50%, transparent 100%)",
        }}
      />

      {/* ── Accent top line ── */}
      <div
        className="absolute top-0 inset-x-0 h-px z-10 pointer-events-none"
        style={{
          background: `linear-gradient(90deg, transparent, ${emerald}, transparent)`,
        }}
      />

      {/* ── Mouse glow ── */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10"
        style={{ background: glow }}
      />

      {/* ══ Main content ══ */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-20 flex flex-col items-center justify-center flex-1 w-full max-w-6xl mx-auto px-5 sm:px-8 pt-36 pb-12 text-center"
      >
        {/* Badge */}
        <motion.div variants={item} className="mb-8">
          <span
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-sm font-medium text-neutral-300"
            style={{
              background: "oklch(1 0 0 / 0.05)",
              border: "1px solid oklch(1 0 0 / 0.10)",
              backdropFilter: "blur(10px)",
            }}
          >
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ background: emerald }}
              />
              <span
                className="relative inline-flex rounded-full h-2 w-2"
                style={{ background: emerald }}
              />
            </span>
            لابراتوار تخصصی الکترونیک صنعتی — بیش از ۱۰ سال تجربه
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] mb-6"
        >
          <span
            className="block text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(180deg, oklch(0.97 0.00 0), oklch(0.78 0.00 0))",
            }}
          >
            احیای مغز متفکر
          </span>
          <span
            className="block text-transparent bg-clip-text py-1"
            style={{
              backgroundImage: `linear-gradient(90deg, ${emerald}, ${teal})`,
            }}
          >
            ماشین‌آلات راه‌سازی،
          </span>
          <span
            className="block text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(180deg, oklch(0.97 0.00 0), oklch(0.78 0.00 0))",
            }}
          >
            کشاورزی و صنعتی
          </span>
        </motion.h1>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-3 items-center justify-center mb-16"
        >
          <button
            className="group relative px-7 py-3.5 rounded-xl font-bold text-sm overflow-hidden transition-transform duration-150 active:scale-[0.97] hover:scale-[1.02]"
            style={{
              background: `linear-gradient(135deg, ${emerald}, ${teal})`,
              color: "oklch(0.10 0.005 250)",
              boxShadow: "0 0 28px oklch(0.72 0.17 155 / 0.35)",
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              درخواست مشاوره فوری
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </span>
          </button>

          <button
            className="px-7 py-3.5 rounded-xl font-medium text-sm text-white transition-all duration-150 hover:bg-white/10 active:scale-[0.97]"
            style={{
              background: "oklch(1 0 0 / 0.06)",
              border: "1px solid oklch(1 0 0 / 0.12)",
              backdropFilter: "blur(10px)",
            }}
          >
            مشاهده پروژه‌های موفق
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          ref={statsRef}
          variants={item}
          className="flex flex-wrap gap-8 sm:gap-14 justify-center mb-2"
        >
          <StatPill
            value={50}
            suffix="+"
            label="برد تعمیرشده"
            started={statsVisible}
          />
          <div className="w-px bg-white/10 self-stretch hidden sm:block" />
          <StatPill
            value={98}
            suffix="٪"
            label="رضایت مشتری"
            started={statsVisible}
          />
          <div className="w-px bg-white/10 self-stretch hidden sm:block" />
          <StatPill
            value={10}
            suffix="+"
            label="سال تجربه"
            started={statsVisible}
          />
          <div className="w-px bg-white/10 self-stretch hidden sm:block" />
          <StatPill
            value={48}
            suffix="h"
            label="زمان پاسخ"
            started={statsVisible}
          />
        </motion.div>
      </motion.div>

      {/* ══ Feature cards ══ */}
      <motion.div
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.12, delayChildren: 0.6 },
          },
        }}
        initial="hidden"
        animate="visible"
        className="relative z-20 w-full max-w-6xl mx-auto px-5 sm:px-8 pb-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
      >
        <FeatureCard
          icon={<Cpu className="w-5 h-5" style={{ color: emerald }} />}
          accent={emerald}
          title="تعمیرات فوق‌تخصصی برد"
          desc="بازیابی مدارهای پیچیده ECU، درایو، و کنترلر با تجهیزات آزمایشگاهی دقیق."
          tags={["ECU", "درایو صنعتی", "PLC"]}
        />
        <FeatureCard
          icon={<PenTool className="w-5 h-5" style={{ color: teal }} />}
          accent={teal}
          title="مهندسی معکوس"
          desc="تحلیل طراحی اصلی، بازسازی مدار، و تولید قطعات جایگزین برای بردهای منسوخ."
          tags={["آنالیز مدار", "بازسازی طرح", "جایگزین‌سازی"]}
        />
        <FeatureCard
          icon={<Zap className="w-5 h-5" style={{ color: lime }} />}
          accent={lime}
          title="تست و کالیبراسیون"
          desc="اعمال تست‌های بار واقعی و کالیبراسیون دقیق پس از تعمیر برای اطمینان از عملکرد."
          tags={["Load Test", "کالیبراسیون", "تضمین عملکرد"]}
        />
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5"
      >
        <span className="text-[10px] text-neutral-600 tracking-widest uppercase">
          اسکرول
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 rounded-full"
          style={{
            background: `linear-gradient(to bottom, ${emerald}, transparent)`,
          }}
        />
      </motion.div>
    </section>
  );
}
