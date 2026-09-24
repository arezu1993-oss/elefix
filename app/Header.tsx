"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

interface Child {
  label: string;
  desc?: string;
  href: string;
  icon: React.ReactNode;
}
interface NavItem {
  label: string;
  href: string;
  children?: Child[];
}

const PHONE = "۰۹۳۷-۵۵۲-۵۷۰۷";
const PHONE_TEL = "09375525707";
const LOGO_SRC = "/images/logo-elefix.svg";

const Icons = {
  machinery: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="3" />
      <path d="M6 12h.01M18 12h.01" />
    </svg>
  ),
  board: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9 9h6v6H9zM9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
    </svg>
  ),
  crane: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21h18M5 21V7l8-4 6 4v14M13 3v18M9 9h1M9 13h1M9 17h1" />
    </svg>
  ),
  engine: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  ),
  fuel: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18M15 10h4a2 2 0 0 1 2 2v7a3 3 0 0 1-6 0M3 14h12" />
    </svg>
  ),
  certificate: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  ),
  invention: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" />
    </svg>
  ),
  resume: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  ),
};

const NAV: NavItem[] = [
  { label: "خانه", href: "/" },
  {
    label: "خدمات تخصصی",
    href: "/services",
    children: [
      {
        label: "سیستم‌های الکترونیک ماشین‌آلات سنگین",
        desc: "عیب‌یابی میدانی ادوات راه‌سازی و کشاورزی",
        href: "/services/machinery-systems",
        icon: Icons.machinery,
      },
      {
        label: "تعمیرات فوق‌تخصصی بردهای الکترونیکی (ECU)",
        desc: "مهندسی معکوس و بازسازی قطعات نایاب تحریمی",
        href: "/services/board-repair",
        icon: Icons.board,
      },
      {
        label: "سیستم‌های هوشمند و مانیتورینگ جرثقیل (LMI)",
        desc: "طراحی، کالیبراسیون و ارتقای سنسورهای ایمنی",
        href: "/services/crane-industrial",
        icon: Icons.crane,
      },
      {
        label: "عیب‌یابی تخصصی موتورهای کامینز (Cummins)",
        desc: "پروگرامینگ و پارامتریک سری‌های QSB و صنعتی",
        href: "/services/cummins-engine",
        icon: Icons.engine,
      },
      {
        label: "سیستم‌های سوخت‌رسانی کامان‌ریل فشار قوی",
        desc: "تست و عیب‌یابی دقیق انژکتورها و یونیت‌پمپ‌ها",
        href: "/services/common-rail",
        icon: Icons.fuel,
      },
    ],
  },
  { label: "پروژه‌ها و نمونه‌کارها", href: "/portfolio" },
  {
    label: "درباره ما",
    href: "/about",
    children: [
      {
        label: "گواهی‌نامه‌ها و سرتیفیکیت‌ها",
        desc: "مدارک تخصصی و سوابق اعتبارسنجی بین‌المللی",
        href: "/about/certificates",
        icon: Icons.certificate,
      },
      {
        label: "ثبت اختراع و نوآوری‌ها",
        desc: "تکنولوژی انحصاری ثبت‌شده در سیستم‌های هیدرولیک",
        href: "/about/invention",
        icon: Icons.invention,
      },
      {
        label: "رزومه و سوابق دکتر شادمانی",
        desc: "دکتری بیوسیستم و سوابق اجرایی در صنایع سنگین",
        href: "/about/resume",
        icon: Icons.resume,
      },
    ],
  },
];

function Dropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  return (
    <div ref={ref} className="relative" onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        onMouseEnter={() => setOpen(true)}
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-1.5 py-2 text-sm font-medium tracking-wide transition-colors text-neutral-300 hover:text-white"
      >
        <span>{item.label}</span>
        <motion.svg
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          width="11"
          height="11"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-neutral-400"
        >
          <path d="M2.5 4.5l3.5 3.5 3.5-3.5" />
        </motion.svg>
      </button>

      <AnimatePresence>
        {open && item.children && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.16 }}
            className="absolute right-0 top-full pt-3 z-50 w-96"
            dir="rtl"
          >
            <div
              className="rounded-2xl border p-2.5 backdrop-blur-2xl shadow-2xl"
              style={{
                backgroundColor: "rgba(10, 14, 20, 0.95)",
                borderColor: "rgba(255, 255, 255, 0.1)",
                boxShadow:
                  "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05)",
              }}
            >
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={() => setOpen(false)}
                  className="flex items-start gap-3.5 rounded-xl p-3 transition-all hover:bg-white/[0.06] group"
                >
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                    {child.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-neutral-200 group-hover:text-emerald-400 transition-colors">
                      {child.label}
                    </span>
                    {child.desc && (
                      <span className="mt-0.5 text-[11px] text-neutral-400 group-hover:text-neutral-300 leading-relaxed font-normal">
                        {child.desc}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[70] bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="fixed inset-y-0 right-0 z-[75] flex w-[85%] max-w-sm flex-col justify-between border-l border-white/10 p-6 text-white shadow-2xl bg-[#0c1017]"
            dir="rtl"
          >
            <div className="overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div className="flex items-center gap-3" dir="ltr">
                  <div className="relative h-8 w-8">
                    <Image
                      src={LOGO_SRC}
                      alt="Elefix"
                      fill
                      className="object-contain brightness-0 invert"
                    />
                  </div>
                  <div>
                    <span className="block font-mono text-sm font-black tracking-widest text-white">
                      ELEFIX
                    </span>
                    <span className="text-[9px] text-emerald-400 tracking-wider">
                      INDUSTRIAL ELECTRONICS
                    </span>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="rounded-lg border border-white/10 p-2 text-neutral-400 hover:text-white"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="my-4 flex items-center gap-2 rounded-lg bg-emerald-500/10 px-3 py-2 border border-emerald-500/20 text-xs text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>پذیرش فعال پروژه‌های صنعتی و اعزام فوری</span>
              </div>

              <nav className="space-y-1">
                {NAV.map((item) =>
                  item.children ? (
                    <div
                      key={item.href}
                      className="border-b border-white/5 pb-1"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setExpanded((prev) =>
                            prev === item.href ? null : item.href,
                          )
                        }
                        className="flex w-full items-center justify-between py-3 text-sm font-medium text-neutral-200 hover:text-emerald-400"
                      >
                        <span>{item.label}</span>
                        <motion.svg
                          animate={{ rotate: expanded === item.href ? 180 : 0 }}
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            d="M3 5l4 4 4-4"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </motion.svg>
                      </button>
                      <AnimatePresence>
                        {expanded === item.href && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden space-y-1 pb-2"
                          >
                            {item.children.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                onClick={onClose}
                                className="flex items-center gap-3 rounded-lg py-2.5 px-3 text-xs text-neutral-300 hover:bg-white/5 hover:text-emerald-400"
                              >
                                <span className="text-emerald-400">
                                  {sub.icon}
                                </span>
                                <span>{sub.label}</span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className="block py-3 border-b border-white/5 text-sm font-medium text-neutral-200 hover:text-emerald-400"
                    >
                      {item.label}
                    </Link>
                  ),
                )}
              </nav>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-white/10">
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 py-3 text-xs font-medium text-neutral-200 transition hover:bg-white/10"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {PHONE}
              </a>
              <Link
                href="/contact"
                onClick={onClose}
                className="flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-400 py-3 text-center text-xs font-bold text-neutral-950 transition hover:opacity-95 shadow-lg shadow-emerald-500/20"
              >
                ثبت درخواست مشاوره و پذیرش
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function Header({ overlay = true }: { overlay?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // بررسی مسیر فعلی: آیا در صفحه اصلی هستیم؟
  const isHomePage = pathname === "/";

  // اگر در صفحه داخلی باشیم، یا اگر اسکرول شده باشد، هدر باید پس‌زمینه (Solid) داشته باشد.
  const isSolid = !isHomePage || scrolled;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isSolid
            ? "border-b border-white/10 backdrop-blur-xl shadow-2xl bg-[#0a0e14]/90"
            : "border-b border-transparent bg-gradient-to-b from-black/85 via-black/35 to-transparent"
        }`}
      >
        <div
          className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8"
          dir="rtl"
        >
          {/* Logo Brand */}
          <Link href="/" className="flex items-center gap-3.5" dir="ltr">
            <div className="relative h-9 w-9">
              <Image
                src={LOGO_SRC}
                alt="Elefix"
                fill
                priority
                className="object-contain brightness-0 invert"
              />
            </div>
            <div className="flex flex-col items-start leading-none gap-1">
              <span className="font-mono text-base font-black tracking-widest text-white">
                ELEFIX
              </span>
              <span
                dir="rtl"
                className="text-[10px] font-semibold text-emerald-400"
              >
                عیب‌یابی و مهندسی معکوس
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-7 lg:flex">
            {NAV.map((item) =>
              item.children ? (
                <Dropdown key={item.href} item={item} />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium tracking-wide text-neutral-300 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          {/* Desktop Right Action Area */}
          <div className="hidden items-center gap-6 lg:flex">
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex items-center gap-2 text-xs tracking-wider text-neutral-300 transition-colors hover:text-emerald-400"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {PHONE}
            </a>

            {/* Industrial High-Tech Button */}
            <Link
              href="/contact"
              className="relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-400 px-5 py-2.5 text-xs font-bold text-neutral-950 transition-all hover:shadow-[0_0_24px_rgba(0,179,116,0.35)] active:scale-95"
            >
              ارتباط مستقیم
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
            aria-label="باز کردن منو"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
