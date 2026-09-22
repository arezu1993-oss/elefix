"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// ─── Tokens ───────────────────────────────────────────────────────────────────
const t = {
  accent: "oklch(0.52 0.17 155)",
  accentHov: "oklch(0.42 0.16 155)",
  accentSub: "oklch(0.96 0.04 155)",
  onAccent: "oklch(0.99 0.00 0)",
  n800: "oklch(0.28 0.01 250)",
  n600: "oklch(0.48 0.01 250)",
  n200: "oklch(0.88 0.01 250)",
  n50: "oklch(0.98 0.00 0)",
  white: "oklch(1.00 0.00 0)",
  white85: "oklch(1.00 0.00 0 / 0.85)",
} as const;

// ─── Types ────────────────────────────────────────────────────────────────────
interface Child {
  label: string;
  href: string;
  icon: React.ReactNode;
}
interface NavItem {
  label: string;
  href: string;
  children?: Child[];
}

// ─── Constants ────────────────────────────────────────────────────────────────
const PHONE = "۰۹۳۷-۵۵۲-۵۷۰۷";
const PHONE_TEL = "09375525707";
const LOGO_SRC = "/images/logo-elefix.svg";

// ─── Icons ────────────────────────────────────────────────────────────────────
const Icons = {
  // عیب‌یابی و تعمیر سیستم‌های ماشین‌آلات راهسازی و کشاورزی
  machinery: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="4" cy="12" r="2" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M6 12h4M2 8h3l2-4h3l2 3"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 7l2 1v4"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  // عیب‌یابی و تعمیر بردهای الکترونیکی
  board: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="1"
        y="3"
        width="14"
        height="10"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <path
        d="M4 3V2M8 3V2M12 3V2M4 13v1M8 13v1M12 13v1"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <rect x="4" y="6" width="3" height="2" rx="0.5" fill="currentColor" />
      <rect x="9" y="6" width="3" height="2" rx="0.5" fill="currentColor" />
      <path
        d="M4 10h8"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  ),
  // طراحی و توسعه و نصب سیستم‌های مانیتورینگ (HMI, LMI)
  hmi: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="1"
        y="2"
        width="14"
        height="9"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <path
        d="M6 11v2M10 11v2M4 13h8"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M4 7l2-2 2 2 2-3 2 2"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  // جرثقیل و ماشین‌آلات راهسازی و کشاورزی و صنعتی
  crane: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 14V5M3 5h9M3 5L7 2h5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 5v4"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <rect
        x="10"
        y="9"
        width="4"
        height="3"
        rx="0.5"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle cx="3" cy="14" r="1" fill="currentColor" />
    </svg>
  ),
  // عیب‌یابی و تعمیر برق موتورهای کامینز QSB
  engine: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="5"
        width="8"
        height="6"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <path
        d="M11 7h2M11 9h2M1 7h2M1 9h2"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M6 5V3h4v2"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 8h2"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  ),
  // عیب‌یابی و تعمیر سیستم‌های سوخت‌رسانی کامان‌ریل
  fuel: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="2"
        y="6"
        width="9"
        height="7"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <path
        d="M5 6V4a2 2 0 014 0v2"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M11 8h2a1 1 0 011 1v2a1 1 0 01-1 1h-2"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M5.5 9.5h2M5.5 11.5h2"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  ),
  // گواهی‌نامه‌ها
  certificate: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="1"
        y="2"
        width="14"
        height="10"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <path
        d="M4 6h8M4 9h5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <circle cx="12" cy="13" r="2" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M10.5 15l-.5 1M13.5 15l.5 1"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  ),
  // اختراع
  invention: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 1a4 4 0 014 4c0 1.6-.9 3-2.2 3.7V11H6.7A4 4 0 018 1A4 4 0 018 1z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path
        d="M6 12h4M6.5 13.5h3"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  ),
  // رزومه
  resume: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="1"
        width="10"
        height="14"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <circle cx="8" cy="5" r="1.5" stroke="currentColor" strokeWidth="1.1" />
      <path
        d="M5 9h6M5 11.5h4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  ),
};

// ─── Nav data ─────────────────────────────────────────────────────────────────
const NAV: NavItem[] = [
  { label: "خانه", href: "/" },
  {
    label: "خدمات",
    href: "/services",
    children: [
      {
        label: "عیب‌یابی و تعمیر سیستم‌های برقی ماشین‌آلات راهسازی و کشاورزی",
        href: "/services/machinery-systems",
        icon: Icons.machinery,
      },
      {
        label:
          "عیب‌یابی و تعمیر بردهای الکترونیکی ماشین‌آلات راهسازی و کشاورزی",
        href: "/services/board-repair",
        icon: Icons.board,
      },
      {
        label: "طراحی و توسعه و نصب سیستم‌های مانیتورینگ (HMI, LMI)",
        href: "/services/crane-industrial",
        icon: Icons.crane,
      },
      {
        label: "عیب‌یابی و تعمیر برق موتورهای کامینز QSB",
        href: "/services/cummins-engine",
        icon: Icons.engine,
      },
      {
        label: "عیب‌یابی و تعمیر سیستم‌های سوخت‌رسانی کامان‌ریل",
        href: "/services/common-rail",
        icon: Icons.fuel,
      },
    ],
  },
  { label: "نمونه کارها", href: "/portfolio" },
  {
    label: "درباره ما",
    href: "/about",
    children: [
      {
        label: "گواهی‌نامه‌ها",
        href: "/about/certificates",
        icon: Icons.certificate,
      },
      {
        label: "اختراع",
        href: "/about/invention",
        icon: Icons.invention,
      },
      {
        label: "رزومه",
        href: "/about/resume",
        icon: Icons.resume,
      },
    ],
  },
];

// ─── Scroll lock ──────────────────────────────────────────────────────────────
function useScrollLock(active: boolean) {
  useEffect(() => {
    if (!active) return;
    const html = document.documentElement;
    const prevOverflow = html.style.overflow;
    const prevPad = html.style.paddingRight;
    const sbw = window.innerWidth - html.clientWidth;
    html.style.overflow = "hidden";
    if (sbw > 0) html.style.paddingRight = `${sbw}px`;
    return () => {
      html.style.overflow = prevOverflow;
      html.style.paddingRight = prevPad;
    };
  }, [active]);
}

// ─── Desktop Dropdown ─────────────────────────────────────────────────────────
function Dropdown({ item, onDark }: { item: NavItem; onDark: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent | FocusEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", close);
    document.addEventListener("focusin", close);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("focusin", close);
    };
  }, []);

  const baseColor = onDark ? t.white : t.n800;

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 rounded-md px-1 py-0.5 text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2"
        style={{
          color: open ? t.accent : baseColor,
          ["--tw-ring-color" as string]: t.accent,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = t.accent;
        }}
        onMouseLeave={(e) => {
          if (!open) e.currentTarget.style.color = baseColor;
        }}
      >
        {item.label}
        <motion.svg
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.18 }}
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M2.5 4.5l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </button>

      <AnimatePresence>
        {open && item.children && (
          <motion.div
            key="dd"
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            role="menu"
            className="absolute right-0 top-full mt-2 rounded-xl border py-2 shadow-xl"
            style={{
              background: t.n50,
              borderColor: t.n200,
              boxShadow: "0 12px 32px -4px oklch(0.14 0.01 250 / 0.14)",
              minWidth: "300px",
            }}
          >
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                role="menuitem"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-4 py-2.5 text-sm transition-colors duration-100 focus-visible:outline-none"
                style={{ color: t.n800 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = t.accentSub;
                  e.currentTarget.style.color = t.accent;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = t.n800;
                }}
              >
                <span className="flex-shrink-0">{child.icon}</span>
                {child.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Mobile Drawer ────────────────────────────────────────────────────────────
function MobileDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useScrollLock(open);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-60"
            style={{ background: "oklch(0.14 0.01 250 / 0.55)" }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer panel */}
          <motion.div
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="fixed inset-y-0 right-0 z-70 flex w-72 flex-col overflow-y-auto"
            style={{ background: t.n50 }}
            role="dialog"
            aria-modal="true"
            aria-label="منوی ناوبری"
            dir="rtl"
          >
            {/* Drawer header */}
            <div
              dir="ltr"
              className="flex items-center justify-start gap-2 border-b px-5 py-4"
              style={{ borderColor: t.n200 }}
            >
              <div className="relative h-8 w-8">
                <Image
                  src={LOGO_SRC}
                  alt="Elefix"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col items-start leading-none gap-1">
                <span
                  className="text-sm font-bold"
                  style={{
                    color: t.n800,
                    fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                    letterSpacing: "0.12em",
                  }}
                >
                  ELEFIX
                </span>
                <span
                  dir="rtl"
                  className="text-[10px]"
                  style={{ color: t.accent }}
                >
                  خدمات تخصصی
                </span>
              </div>
            </div>

            {/* Nav links */}
            <nav
              className="flex-1 space-y-0.5 px-3 py-4"
              aria-label="منوی اصلی"
            >
              {NAV.map((navItem) =>
                navItem.children ? (
                  <div key={navItem.href}>
                    <button
                      type="button"
                      onClick={() =>
                        setExpanded((v) =>
                          v === navItem.href ? null : navItem.href,
                        )
                      }
                      aria-expanded={expanded === navItem.href}
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-colors"
                      style={{ color: t.n800 }}
                    >
                      {navItem.label}
                      <motion.svg
                        animate={{
                          rotate: expanded === navItem.href ? 180 : 0,
                        }}
                        transition={{ duration: 0.18 }}
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M3 5l4 4 4-4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </motion.svg>
                    </button>

                    <AnimatePresence>
                      {expanded === navItem.href && (
                        <motion.div
                          key={`sub-${navItem.href}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <div className="mb-1 pr-3 pt-0.5">
                            {navItem.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={onClose}
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors"
                                style={{ color: t.n600 }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.color = t.accent;
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.color = t.n600;
                                }}
                              >
                                <span className="flex-shrink-0">
                                  {child.icon}
                                </span>
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={navItem.href}
                    href={navItem.href}
                    onClick={onClose}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors"
                    style={{ color: t.n800 }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = t.accent;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = t.n800;
                    }}
                  >
                    {navItem.label}
                  </Link>
                ),
              )}
            </nav>

            {/* Drawer footer */}
            <div
              className="space-y-3 border-t px-5 py-4"
              style={{ borderColor: t.n200 }}
            >
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex items-center gap-2 text-sm font-medium"
                style={{ color: t.accent }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 3a1 1 0 011-1h2.5a1 1 0 01.97.757l.5 2a1 1 0 01-.28.98L5.5 6.38a9.08 9.08 0 004.12 4.12l.643-1.19a1 1 0 01.98-.28l2 .5A1 1 0 0114 10.5V13a1 1 0 01-1 1C6.373 14 2 9.627 2 4V3z"
                    fill="currentColor"
                  />
                </svg>
                {PHONE}
              </a>
              <Link
                href="/contact"
                onClick={onClose}
                className="block w-full rounded-lg px-4 py-2.5 text-center text-sm font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2"
                style={{
                  background: t.accent,
                  color: t.onAccent,
                  ["--tw-ring-color" as string]: t.accent,
                }}
              >
                ارتباط با ما
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ─── Header ───────────────────────────────────────────────────────────────────
export default function Header({ overlay = false }: { overlay?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 24);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const isScrolled = true;
  const onDark = overlay && !isScrolled;
  const navColor = onDark ? t.white : t.n800;
  const phoneColor = onDark ? t.white85 : t.accent;
  const iconColor = onDark ? t.white85 : t.n800;
  const bgStyle: React.CSSProperties = isScrolled
    ? {
        background: "oklch(0.99 0.00 0 / 0.92)",
        backdropFilter: "blur(14px) saturate(1.5)",
        WebkitBackdropFilter: "blur(14px) saturate(1.5)",
        borderBottom: `1px solid ${t.n200}`,
        boxShadow: "0 1px 16px -2px oklch(0.14 0.01 250 / 0.07)",
      }
    : overlay
      ? {
          background:
            "linear-gradient(to bottom, oklch(0.10 0.005 250 / 0.72) 0%, transparent 100%)",
          borderBottom: "1px solid oklch(1 0 0 / 0.08)",
          boxShadow: "none",
        }
      : {
          background: t.white,
          borderBottom: `1px solid ${t.n200}`,
          boxShadow: "none",
        };

  return (
    <>
      <motion.header
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
        style={bgStyle}
      >
        <div
          className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
          dir="rtl"
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="صفحه اصلی"
            className="relative flex-shrink-0 rounded-md focus-visible:outline-none focus-visible:ring-2"
            style={{ ["--tw-ring-color" as string]: t.accent }}
          >
            <div dir="ltr" className="flex items-center gap-2.5">
              <div className="relative h-8 w-8">
                <Image
                  src={LOGO_SRC}
                  alt="Elefix"
                  fill
                  priority
                  className="object-contain"
                  style={{
                    filter: onDark ? "brightness(0) invert(1)" : "none",
                    transition: "filter 0.3s",
                  }}
                />
              </div>
              <div className="flex flex-col items-start leading-none gap-1">
                <span
                  className="text-[15px] font-bold"
                  style={{
                    color: onDark ? t.white : t.n800,
                    fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                    letterSpacing: "0.14em",
                  }}
                >
                  ELEFIX
                </span>
                <span
                  dir="rtl"
                  className="text-[10px] font-medium"
                  style={{ color: onDark ? "oklch(0.75 0.12 155)" : t.accent }}
                >
                  خدمات تخصصی
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden items-center gap-6 lg:flex"
            aria-label="ناوبری اصلی"
          >
            {NAV.map((navItem) =>
              navItem.children ? (
                <Dropdown key={navItem.href} item={navItem} onDark={onDark} />
              ) : (
                <Link
                  key={navItem.href}
                  href={navItem.href}
                  className="nav-link rounded-md px-1 py-0.5 text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2"
                  style={{
                    color: "var(--nav-c)",
                    ["--nav-c" as string]: navColor,
                    ["--tw-ring-color" as string]: t.accent,
                  }}
                >
                  {navItem.label}
                </Link>
              ),
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={`tel:${PHONE_TEL}`}
              className="text-sm font-medium transition-colors duration-150"
              style={{ color: phoneColor }}
            >
              {PHONE}
            </a>
            <Link
              href="/contact"
              className="rounded-lg px-4 py-2 text-sm font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{
                background: t.accent,
                color: t.onAccent,
                ["--tw-ring-color" as string]: t.accent,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = t.accentHov;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = t.accent;
              }}
            >
              ارتباط با ما
            </Link>
          </div>

          {/* Hamburger */}
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-lg transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 active:scale-95 lg:hidden"
            style={{
              color: iconColor,
              ["--tw-ring-color" as string]: t.accent,
            }}
            onClick={() => setDrawerOpen(true)}
            aria-label="باز کردن منو"
            aria-expanded={drawerOpen}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 6h16M3 11h16M3 16h16"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </motion.header>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
