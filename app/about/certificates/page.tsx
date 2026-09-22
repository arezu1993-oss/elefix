"use client";

import React, { useState, useMemo } from "react";
import {
  Award,
  BadgeCheck,
  Building2,
  Calendar,
  Check,
  ChevronLeft,
  Clock,
  Copy,
  Cpu,
  ExternalLink,
  Layers,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Wrench,
  X,
  Zap,
} from "lucide-react";

// ─── TYPE DEFINITIONS ────────────────────────────────────────────────────────
type DomainType =
  | "همه"
  | "هیدرولیک"
  | "ماشین‌آلات سنگین"
  | "اتوماسیون و برق"
  | "مهندسی معکوس";

interface Certificate {
  id: number;
  categoryEn: string;
  title: string;
  issuer: string;
  country: string;
  certId: string;
  domain: DomainType;
  hours: number;
  year: string;
  skills: string[];
  summary: string;
}

// ─── DATA (Concise & Aligned with ELEFIX) ──────────────────────────────────────
const CERTIFICATES: Certificate[] = [
  {
    id: 1,
    categoryEn: "HYDRAULIC SYSTEMS",
    title: "هیدرولیک صنعتی پیشرفته و مدارات پروپرشنال",
    issuer: "Festo Didactic",
    country: "آلمان",
    certId: "FESTO-247843-DE",
    domain: "هیدرولیک",
    hours: 80,
    year: "۲۰۲۳",
    skills: ["طراحی مدار", "Proportional Valves", "عیب‌یابی پیشرفته"],
    summary:
      "تحلیل، شبیه‌سازی و عیب‌یابی خطوط هیدرولیک پیچیده با استانداردهای فستو آلمان.",
  },
  {
    id: 2,
    categoryEn: "HEAVY EQUIPMENT",
    title: "سیستم‌های هیدرولیک و برق لودر TL310",
    issuer: "Hydro Atlas",
    country: "ایران / آلمان",
    certId: "HA-TL310-994",
    domain: "ماشین‌آلات سنگین",
    hours: 120,
    year: "۲۰۲۲",
    skills: ["گیربکس هیدرواستاتیک", "Load Sensing", "سیستم‌های الکترونیک"],
    summary:
      "تعمیرات تخصصی، بازسازی هیدرولیک و تنظیم ECU ماشین‌آلات سنگین و راهسازی.",
  },
  {
    id: 3,
    categoryEn: "AUTOMATION & PLC",
    title: "اتوماسیون صنعتی، PLC و درایوهای قدرت",
    issuer: "سازمان آموزش فنی و حرفه‌ای",
    country: "بین‌المللی (ILO)",
    certId: "TVTO-PLC-5521",
    domain: "اتوماسیون و برق",
    hours: 140,
    year: "۲۰۲۲",
    skills: ["Siemens S7", "HMI Programming", "سیم‌کشی تابلو"],
    summary:
      "برنامه‌نویسی و اتوماسیون خطوط صنعتی و درایوهای کنترل موتور صنعتی.",
  },
  {
    id: 4,
    categoryEn: "ELECTRONICS & ECU",
    title: "تعمیرات بردهای الکترونیکی و کنترلرهای صنعتی",
    issuer: "Hydro Atlas",
    country: "ایران",
    certId: "HA-ELEC-4421",
    domain: "اتوماسیون و برق",
    hours: 90,
    year: "۲۰۲۱",
    skills: ["دیاگ ماشین‌آلات", "آنالیز شماتیک", "کالیبراسیون سنسور"],
    summary:
      "عیب‌یابی دقیق بردهای مدار چاپی و سنسورهای ابزار دقیق در خطوط سنگین.",
  },
  {
    id: 5,
    categoryEn: "REVERSE ENGINEERING",
    title: "مهندسی معکوس و نقشه‌کشی قطعات با AutoCAD Civil",
    issuer: "سازمان آموزش فنی و حرفه‌ای",
    country: "بین‌المللی (ILO)",
    certId: "TVTO-CAD-3390",
    domain: "مهندسی معکوس",
    hours: 150,
    year: "۲۰۲۰",
    skills: ["مدل‌سازی ۳بعدی", "بازسازی مدارات", "مستندسازی فنی"],
    summary:
      "تهیه مستندات و نقشه‌های مهندسی از تجهیزات فاقد نقشه برای نگهداری و تعمیرات.",
  },
  {
    id: 6,
    categoryEn: "WORKPLACE HSE & 5S",
    title: "استانداردسازی کارگاهی و متدولوژی 5S صنعتی",
    issuer: "Hydro Atlas",
    country: "ایران",
    certId: "HA-5S-88301",
    domain: "مهندسی معکوس",
    hours: 40,
    year: "۲۰۲۱",
    skills: ["مدیریت ریسک", "کایزن (Kaizen)", "ایمنی کارگاه"],
    summary:
      "بهینه‌سازی فرایند تعمیرات، کاهش توقفات خط و استانداردسازی محیط کار.",
  },
];

const DOMAINS: DomainType[] = [
  "همه",
  "هیدرولیک",
  "ماشین‌آلات سنگین",
  "اتوماسیون و برق",
  "مهندسی معکوس",
];

// ─── ICON HELPER PER CATEGORY ────────────────────────────────────────────────
const getCategoryIcon = (categoryEn: string) => {
  if (categoryEn.includes("HYDRAULIC")) return <Wrench size={20} />;
  if (categoryEn.includes("HEAVY")) return <Settings size={20} />;
  if (categoryEn.includes("AUTOMATION")) return <Zap size={20} />;
  if (categoryEn.includes("ELECTRONIC")) return <Cpu size={20} />;
  return <Layers size={20} />;
};

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
export default function CertificationsPage() {
  const [selectedDomain, setSelectedDomain] = useState<DomainType>("همه");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Copy ID with visual feedback
  const handleCopy = (e: React.MouseEvent, certId: string) => {
    e.stopPropagation();
    navigator.clipboard.writeText(certId);
    setCopiedId(certId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Live filtered list
  const filteredCerts = useMemo(() => {
    return CERTIFICATES.filter((cert) => {
      const matchDomain =
        selectedDomain === "همه" || cert.domain === selectedDomain;
      const matchSearch =
        cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.categoryEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.certId.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.skills.some((s) =>
          s.toLowerCase().includes(searchQuery.toLowerCase()),
        );

      return matchDomain && matchSearch;
    });
  }, [selectedDomain, searchQuery]);

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#fafbfc] text-slate-900 antialiased"
    >
      {/* ── Top Header Section ── */}
      <section className="border-b border-slate-200/80 bg-white py-24 sm:py-26">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-bold text-emerald-700 border border-emerald-200/60 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600"></span>
            صلاحیت‌های فنی و مدارک تخصصی
          </div>

          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            تخصص مهندسی با{" "}
            <span className="text-emerald-600">تأییدیه رسمی</span>
          </h1>

          <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
            گواهینامه‌های رسمی دوره‌های تخصصی، سیستم‌های هیدرولیک و بردهای
            الکترونیکی از مراجع معتبر بین‌المللی و داخلی.
          </p>

          {/* 4 Stats Cards (Clean Style) */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 max-w-4xl mx-auto">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-4 text-center">
              <div className="text-2xl font-black text-slate-900">
                ۶
              </div>
              <div className="text-xs font-semibold text-slate-500 mt-1">
                گواهینامه فعال
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-4 text-center">
              <div className="text-2xl font-black text-emerald-600">
                +۶۲۰
              </div>
              <div className="text-xs font-semibold text-slate-500 mt-1">
                ساعت کارگاه عملی
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-4 text-center">
              <div className="text-2xl font-black text-slate-900">
                Festo & ILO
              </div>
              <div className="text-xs font-semibold text-slate-500 mt-1">
                استاندارد بین‌المللی
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-4 text-center">
              <div className="text-2xl font-black text-emerald-600">
                ۱۰۰٪
              </div>
              <div className="text-xs font-semibold text-slate-500 mt-1">
                کد استعلام معتبر
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content Area ── */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          {/* Domain Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {DOMAINS.map((domain) => {
              const active = selectedDomain === domain;
              return (
                <button
                  key={domain}
                  onClick={() => setSelectedDomain(domain)}
                  className={`rounded-xl px-4 py-2 text-xs font-bold whitespace-nowrap transition-all ${
                    active
                      ? "bg-emerald-600 text-white shadow-sm shadow-emerald-600/20"
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {domain}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px]">
            <Search
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              size={16}
            />
            <input
              type="text"
              placeholder="جستجوی عنوان مدرک، مهارت یا شماره..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pr-10 pl-4 text-xs font-medium text-slate-800 placeholder-slate-400 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/10 transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* ── Cards Grid (ELEFIX Styled) ── */}
        {filteredCerts.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCerts.map((cert) => {
              const isCopied = copiedId === cert.certId;

              return (
                <div
                  key={cert.id}
                  onClick={() => setSelectedCert(cert)}
                  className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-200 cursor-pointer"
                >
                  <div>
                    {/* Top Icon and Category Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                        {getCategoryIcon(cert.categoryEn)}
                      </div>
                      <span className="text-[11px] font-bold text-slate-400">
                        {cert.year}
                      </span>
                    </div>

                    {/* English Category Tag */}
                    <div className="text-[11px] font-black tracking-wider text-emerald-600 uppercase mb-1.5">
                      {cert.categoryEn}
                    </div>

                    {/* Certificate Title */}
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2">
                      {cert.title}
                    </h3>

                    {/* Summary */}
                    <p className="mt-2 text-xs text-slate-500 leading-relaxed line-clamp-2">
                      {cert.summary}
                    </p>

                    {/* Skill Badges */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {cert.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    {/* Credential Copy Button */}
                    <button
                      type="button"
                      onClick={(e) => handleCopy(e, cert.certId)}
                      className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[11px] font-medium transition-all ${
                        isCopied
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-800"
                      }`}
                      title="کپی شماره مدرک"
                    >
                      {isCopied ? (
                        <>
                          <Check size={12} className="text-emerald-600" />
                          <span>کپی شد</span>
                        </>
                      ) : (
                        <>
                          <Copy size={12} />
                          <span>{cert.certId}</span>
                        </>
                      )}
                    </button>

                    {/* Action Arrow */}
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 group-hover:-translate-x-1 transition-transform">
                      مشاهده
                      <ChevronLeft size={14} />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
            <p className="text-sm font-bold text-slate-700">
              مدرکی مطابق با جستجوی شما یافت نشد
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedDomain("همه");
              }}
              className="mt-3 text-xs font-bold text-emerald-600 hover:underline"
            >
              نمایش همه گواهینامه‌ها
            </button>
          </div>
        )}

        {/* ── Contact / Verification Banner (Clean & Pro) ── */}
        <div className="mt-14 rounded-2xl border border-emerald-100 bg-emerald-50/50 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-center sm:text-right">
            <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900">
                نیاز به استعلام رسمی مدارک یا همکاری فنی دارید؟
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                تمام سوابق کارگاهی و شناسه‌های آزمون‌ها آماده ارائه به شرکت‌ها و
                کارفرمایان محترم است.
              </p>
            </div>
          </div>
          <a
            href="tel:09375525707"
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-emerald-700 transition-all"
          >
            <span>تماس مستقیم مهندسی</span>
            <span dir="ltr">
              ۰۹۳۷-۵۵۲-۵۷۰۷
            </span>
          </a>
        </div>
      </section>

      {/* ── DETAIL MODAL ── */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl text-right border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                  <BadgeCheck size={18} />
                </span>
                <div>
                  <span className="text-[11px] font-bold text-emerald-700 block">
                    صلاحیت تایید شده
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {selectedCert.certId}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="mt-5 space-y-4">
              <div>
                <div className="text-[11px] font-bold text-emerald-600 uppercase">
                  {selectedCert.categoryEn}
                </div>
                <h3 className="text-base font-bold text-slate-900 mt-1">
                  {selectedCert.title}
                </h3>
              </div>

              <p className="text-xs text-slate-600 bg-slate-50 p-3.5 rounded-xl border border-slate-100 leading-relaxed">
                {selectedCert.summary}
              </p>

              <div className="grid grid-cols-3 gap-2.5 text-center">
                <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-2.5">
                  <div className="text-[10px] text-slate-400 mb-0.5">
                    مرجع صادرکننده
                  </div>
                  <div className="text-xs font-bold text-slate-800">
                    {selectedCert.issuer}
                  </div>
                </div>
                <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-2.5">
                  <div className="text-[10px] text-slate-400 mb-0.5">
                    مدت دوره
                  </div>
                  <div className="text-xs font-bold text-slate-800">
                    {selectedCert.hours} ساعت
                  </div>
                </div>
                <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-2.5">
                  <div className="text-[10px] text-slate-400 mb-0.5">
                    سال صدور
                  </div>
                  <div className="text-xs font-bold text-slate-800">
                    {selectedCert.year}
                  </div>
                </div>
              </div>

              <div>
                <div className="text-xs font-bold text-slate-700 mb-2">
                  سرفصل‌های ارزیابی شده:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedCert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="rounded-md bg-emerald-50 border border-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                type="button"
                onClick={(e) => handleCopy(e, selectedCert.certId)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                <Copy size={14} />
                <span>کپی شناسه</span>
              </button>
              <button
                onClick={() => setSelectedCert(null)}
                className="rounded-xl bg-slate-900 px-4 py-2 text-xs font-bold text-white hover:bg-slate-800 transition-colors"
              >
                بستن
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
