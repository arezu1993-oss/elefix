"use client";

import React from "react";
import {
  GraduationCap,
  Briefcase,
  Award,
  Cpu,
  Wrench,
  Settings,
  Code,
  CheckCircle2,
  Download,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Sparkles,
  Layers,
  ChevronLeft,
} from "lucide-react";

export default function ResumePage() {
  const technicalSkills = [
    {
      category: "الکترونیک و مکاترونیک صنعتی",
      icon: Cpu,
      items: [
        "طراحی و مونتاژ سیستم‌های کنترل بار و ایمنی (LMI)",
        "شبکه‌های صنعتی CAN Bus و پروتکل‌های ارتباطی خودرویی",
        "پیاده‌سازی سنسورهای زاویه‌سنج، طول‌سنج و لیدار (LiDAR)",
        "عیب‌یابی بردهای الکترونیکی کنترلرهای IFM, Danfoss, Hirschmann",
      ],
    },
    {
      category: "سیستم‌های هیدرولیک و پنوماتیک",
      icon: Wrench,
      items: [
        "تحلیل و طراحی مدارهای پروپرشنال و هیدرواستاتیک",
        "عیب‌یابی پمپ‌های پیستونی دبی متغیر (Rexroth, Linde, Sauer)",
        "تنظیم و کالیبراسیون فشارشکن‌ها و شیرهای کارتریجی و لاجیک",
        "مدیریت شستشو (Flushing) و نگهداری پیشگیرانه سیالات هیدرولیک",
      ],
    },
    {
      category: "ماشین‌آلات راه‌سازی و لیفتینگ",
      icon: Settings,
      items: [
        "جرثقیل‌های بوم خشک و تلسکوپی (Atlas, Demag, Grove, Terex, Liebherr)",
        "تجهیزات خاکبرداری و لودر/بیل‌های مکانیکی (Caterpillar, Komatsu, Volvo)",
        "اورهال، نوسازی سیستم کنترل و سیم‌کشی کامل ناوگان سنگین",
        "ارزیابی و گزارش‌نویسی فنی جهت خرید یا تست ایمنی دوره‌ای",
      ],
    },
    {
      category: "نرم‌افزارها و ابزارهای مهندسی",
      icon: Code,
      items: [
        "SolidWorks & AutoCAD (طراحی قطعات و نقشه‌کشی هیدرولیک)",
        "FluidSIM (شبیه‌سازی مدارهای هیدرولیک و پنوماتیک فستو)",
        "Proteus & Altium Designer (طراحی PCB و مدارهای الکترونیک)",
        "MATLAB & C# / Arduino IDE (برنامه‌نویسی سیستم‌های کنترلی)",
      ],
    },
  ];

  const workExperiences = [
    {
      role: "موسس و مدیر ارشد فنی (CTO)",
      company: "الفیکس (ELEFIX)",
      period: "۱۴۰۲ - اکنون",
      location: "تهران، ایران",
      highlights: [
        "ثبت اختراع رسمی سیستم هوشمند تخمین موقعیت بوم و ایمنی جرثقیل (LMI)",
        "مدیریت پروژه‌های سفارشی‌سازی مانیتورینگ آنلاین و سنسورینگ ماشین‌آلات سنگین",
        "ارائه خدمات مشاوره، عیب‌یابی فوق‌تخصصی و آموزش‌های سازمانی به شرکت‌های بزرگ عمرانی",
      ],
    },
    {
      role: "مدیر خدمات پس از فروش و پشتیبانی فنی",
      company: "شرکت هیدرواطلس",
      period: "۱۳۹۹ - ۱۴۰۲",
      location: "تهران، ایران",
      highlights: [
        "سرپرستی تیم فنی و اعزام کارشناسان به پروژه‌های صنعتی و معدنی سراسر کشور",
        "طراحی و نظارت بر ساخت تجهیزات جانبی و سامانه‌های هشدار بار جرثقیل‌های اطلس",
        "کاهش ۳۰ درصدی زمان توقف (Downtime) ماشین‌آلات مشتریان با تدوین پروتکل‌های عیب‌یابی سریع",
      ],
    },
    {
      role: "مهندس ارشد عیب‌یابی هیدرولیک و الکترونیک",
      company: "مجتمع‌های فنی و کارگاهی همکار",
      period: "۱۳۹۵ - ۱۳۹۹",
      location: "تهران و استان‌ها",
      highlights: [
        "تعمیرات تخصصی شیرهای پروپرشنال، آکومولاتورها و جک‌های تلسکوپی سنگین",
        "بررسی و تطبیق نقشه‌های وایرینگ الکتریکی و دیاگرام‌های هیدرولیکی برندهای معتبر",
        "راه‌اندازی و کالیبراسیون سیستم‌های لودسل و مانیتورهای کابین اپراتور",
      ],
    },
  ];

  const certificates = [
    {
      title: "Modern Industrial Hydraulics",
      issuer: "Festo Didactic Germany",
      code: "FESTO-HYD-2018",
      desc: "دوره‌های جامع طراحی، محاسبه و عیب‌یابی مدارهای هیدرولیک صنعتی بر اساس استانداردهای بین‌المللی DIN/ISO",
    },
    {
      title: "Proportional & Servo Hydraulics",
      issuer: "Festo Didactic Germany",
      code: "FESTO-PROP-2019",
      desc: "کنترل الکتروهیدرولیک پیشرفته، بهینه‌سازی پاسخ زمانی شیرها و مدارهای کنترل حلقه بسته",
    },
    {
      title: "تخصصی عیب‌یابی جرثقیل‌های هیدرولیک",
      issuer: "آکادمی فنی هیدرواطلس",
      code: "HA-CRANE-99",
      desc: "استانداردهای ایمنی لود چارت، آزمون‌های غیرمخرب سازه بوم و تنظیمات والو بلاک‌های فشار قوی",
    },
    {
      title: "اتوماسیون صنعتی و میکروکنترلرها",
      issuer: "سازمان آموزش فنی و حرفه‌ای کشور",
      code: "TVTO-AUTO-97",
      desc: "برنامه‌نویسی بردهای صنعتی، پردازش سیگنال سنسورها و اینترفیس‌های مانیتورینگ کابین",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-neutral-100)]/60 text-[var(--color-body)] font-[var(--font-vazir),system-ui,sans-serif] antialiased py-20 md:py-26 selection:bg-[var(--color-accent-500)] selection:text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* ۱. کارت هدر اصلی / پروفایل اجرایی */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-[var(--shadow-sm)] border border-[var(--color-line-bold)] circuit-texture">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* تصویر پرسنلی */}
            <div className="relative shrink-0">
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden bg-[var(--color-neutral-100)] border-2 border-[var(--color-line-bold)] shadow-inner">
                <img
                  src="/images/mohammad-shademani.jpg"
                  alt="محمد شادمانی"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
                <div className="w-full h-full flex flex-col items-center justify-center bg-[var(--color-neutral-200)] text-[var(--color-neutral-600)]">
                  <span className="text-3xl font-extrabold">MS</span>
                </div>
              </div>
              <div
                className="absolute -bottom-2 -left-2 bg-[var(--color-accent-500)] text-white p-1.5 rounded-full ring-4 ring-white shadow-sm"
                title="فعال و آماده همکاری"
              >
                <Sparkles className="w-4 h-4" />
              </div>
            </div>

            {/* مشخصات مهندس شادمانی */}
            <div className="flex-1 text-center md:text-right space-y-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold bg-[var(--color-accent-50)] text-[var(--color-accent-700)] border border-[var(--color-accent-200)] mb-2">
                  <span>مخترع و مهندس ارشد مکاترونیک و هیدرولیک</span>
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--color-ink)] tracking-tight">
                  محمد شادمانی
                </h1>
                <p className="text-[var(--color-neutral-600)] text-sm sm:text-base mt-1 font-semibold">
                  دانش‌آموخته کارشناسی ارشد دانشگاه تهران | مدیر فنی و
                  بنیان‌گذار الفیکس (ELEFIX)
                </p>
              </div>

              <p className="text-[var(--color-body)] leading-relaxed text-sm sm:text-base max-w-3xl">
                بیش از ۸ سال سابقه تخصصی در تحلیل، عیب‌یابی و اتوماسیون پیشرفته
                سیستم‌های هیدرولیک و الکترونیک ماشین‌آلات سنگین، جرثقیل‌ها و
                تجهیزات راه‌سازی. طراح و ثبت‌کننده اختراع سیستم‌های LMI هوشمند
                بر پایه سنسورینگ لیدار و میکروکنترلر در ایران.
              </p>

              {/* بج‌های مشخصات */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 pt-1 text-xs sm:text-sm font-medium">
                <span className="flex items-center gap-1.5 bg-[var(--color-neutral-50)] text-[var(--color-neutral-800)] px-3 py-1.5 rounded-xl border border-[var(--color-line-bold)]">
                  <GraduationCap className="w-4 h-4 text-[var(--color-accent-600)] shrink-0" />
                  کارشناسی ارشد مهندسی - دانشگاه تهران
                </span>
                <span className="flex items-center gap-1.5 bg-[var(--color-neutral-50)] text-[var(--color-neutral-800)] px-3 py-1.5 rounded-xl border border-[var(--color-line-bold)]">
                  <Award className="w-4 h-4 text-[var(--color-accent-600)] shrink-0" />
                  گواهینامه‌های رسمی Festo Didactic آلمان
                </span>
                <span className="flex items-center gap-1.5 bg-[var(--color-neutral-50)] text-[var(--color-neutral-800)] px-3 py-1.5 rounded-xl border border-[var(--color-line-bold)]">
                  <MapPin className="w-4 h-4 text-[var(--color-accent-600)] shrink-0" />
                  تهران، ایران
                </span>
              </div>

              {/* اکشن‌ها با Circuit Green برند الفیکس */}
              <div className="pt-3 flex flex-wrap items-center justify-center md:justify-start gap-3">
                <a
                  href="/files/Mohammad Shademani.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--color-accent-500)] hover:bg-[var(--color-accent-600)] text-white font-bold text-sm transition-all shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)]"
                >
                  <Download className="w-4 h-4" />
                  دانلود رزومه کامل (PDF)
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--color-neutral-50)] hover:bg-[var(--color-neutral-200)] text-[var(--color-neutral-800)] font-semibold text-sm border border-[var(--color-line-bold)] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[var(--color-neutral-600)]" />
                  اطلاعات تماس و مشاوره
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ۲. بنر اختراع الفیکس */}
        <section className="bg-[var(--color-accent-50)]/70 border border-[var(--color-accent-200)] rounded-2xl p-6 sm:p-7 shadow-[var(--shadow-xs)]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[var(--color-accent-800)]">
                <Award className="w-4 h-4 text-[var(--color-accent-600)]" />
                ثبت رسمی در سازمان ثبت اسناد و املاک کشور
              </div>
              <h2 className="text-lg sm:text-xl font-extrabold text-[var(--color-ink)]">
                سیستم تخمین دقیق موقعیت بوم و زاویه جرثقیل (LMI الفیکس)
              </h2>
              <p className="text-[var(--color-body)] text-xs sm:text-sm max-w-2xl">
                نوآوری ثبت‌شده با هدف حذف خطاهای اندازه‌گیری مکانیکی سنتی در
                شرایط ارتعاش و شوک‌های دینامیکی شدید در کارگاه‌های عمرانی و
                صنعتی.
              </p>
            </div>
            <a
              href="/about/invention"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--color-accent-500)] hover:bg-[var(--color-accent-600)] text-white font-bold text-xs sm:text-sm whitespace-nowrap shadow-[var(--shadow-xs)] transition-all self-stretch sm:self-auto justify-center"
            >
              مشاهده مستندات اختراع
              <ChevronLeft className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* ۳. ماتریس مهارت‌ها */}
        <section className="space-y-5">
          <div className="text-right">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[var(--color-ink)] flex items-center gap-2">
              <Layers className="w-5 h-5 text-[var(--color-accent-500)]" />
              تخصص‌ها و حوزه‌های دانش مهندسی
            </h2>
            <p className="text-xs sm:text-sm text-[var(--color-muted)] mt-1">
              تلفیق تجارب میدانی کارگاهی و دانش آکادمیک در ۴ شاخه اصلی
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {technicalSkills.map((skill, index) => {
              const IconComp = skill.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-[var(--color-line-bold)] shadow-[var(--shadow-xs)] hover:border-[var(--color-neutral-300)] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-xl bg-[var(--color-accent-50)] text-[var(--color-accent-700)] border border-[var(--color-accent-100)]">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="font-extrabold text-base sm:text-lg text-[var(--color-ink)]">
                        {skill.category}
                      </h3>
                    </div>

                    <ul className="space-y-2.5">
                      {skill.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--color-body)]"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[var(--color-accent-500)] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ۴. تایم‌لاین سوابق شغلی */}
        <section className="space-y-5">
          <div className="text-right">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[var(--color-ink)] flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-[var(--color-accent-500)]" />
              سوابق کاری و فعالیت‌های اجرایی
            </h2>
            <p className="text-xs sm:text-sm text-[var(--color-muted)] mt-1">
              مسیر پیشرفت حرفه‌ای و مدیریت پروژه‌های صنعتی
            </p>
          </div>

          <div className="relative border-r-2 border-[var(--color-line-bold)] mr-4 sm:mr-6 space-y-7 pl-2">
            {workExperiences.map((exp, index) => (
              <div key={index} className="relative pr-6 sm:pr-8">
                <div className="absolute -right-[9px] top-2 w-4 h-4 rounded-full bg-white border-4 border-[var(--color-accent-500)]" />

                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[var(--color-line-bold)] shadow-[var(--shadow-xs)] space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--color-line)] pb-3">
                    <div>
                      <h3 className="text-base sm:text-lg font-extrabold text-[var(--color-ink)]">
                        {exp.role}
                      </h3>
                      <span className="text-sm font-bold text-[var(--color-accent-700)]">
                        {exp.company}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-[var(--color-muted)] font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((point, pIndex) => (
                      <li
                        key={pIndex}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--color-body)]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-neutral-400)] mt-2 shrink-0" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ۵. مدارک و دوره‌های بین‌المللی */}
        <section className="space-y-5">
          <div className="text-right">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[var(--color-ink)] flex items-center gap-2">
              <Award className="w-5 h-5 text-[var(--color-accent-500)]" />
              گواهینامه‌های معتبر و افتخارات
            </h2>
            <p className="text-xs sm:text-sm text-[var(--color-muted)] mt-1">
              دوره‌های تخصصی Festo Didactic آلمان و مراجع فنی کشور
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-[var(--color-line-bold)] shadow-[var(--shadow-xs)] flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-[var(--color-neutral-100)] text-[var(--color-neutral-700)] border border-[var(--color-line-bold)]">
                      {cert.code}
                    </span>
                    <span className="text-xs font-extrabold text-[var(--color-accent-700)]">
                      {cert.issuer}
                    </span>
                  </div>

                  <h3
                    className="font-extrabold text-base text-[var(--color-ink)]"
                    dir="auto"
                  >
                    {cert.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--color-body)] leading-relaxed">
                    {cert.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ۶. جزیره هویت الفیکس (section-dark) جهت تماس و دانشگاه */}
        <section
          id="contact"
          className="section-dark rounded-2xl p-6 sm:p-8 shadow-[var(--shadow-md)] border border-[var(--color-line-dark)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-[var(--color-ink-700)] text-[var(--color-accent-300)] border border-[var(--color-line-dark)]">
                <GraduationCap className="w-4 h-4 text-[var(--color-accent-400)]" />
                پیشینه آکادمیک و دانشگاهی
              </div>
              <h3 className="text-xl font-extrabold text-[var(--color-on-dark)]">
                کارشناسی ارشد مهندسی - دانشگاه تهران
              </h3>
              <p className="text-[var(--color-on-dark-body)] text-xs sm:text-sm leading-relaxed">
                تمرکز پژوهشی بر کنترل بهینه، دینامیک ارتعاشات و سنسورینگ تجهیزات
                متحرک. دفاع از رساله کاربردی در زمینه افزایش ضریب ایمنی
                ماشین‌آلات سنگین.
              </p>
            </div>

            <div className="bg-[var(--color-ink-700)] rounded-xl p-5 border border-[var(--color-line-dark)] space-y-3">
              <h4 className="font-extrabold text-sm sm:text-base text-[var(--color-accent-400)]">
                مشاوره فنی، عیب‌یابی و پروژه‌های سفارشی
              </h4>
              <p className="text-xs text-[var(--color-on-dark-muted)]">
                برای بررسی وضعیت ناوگان، نصب تجهیزات LMI و اتوماسیون پروژه‌ها با
                الفیکس در ارتباط باشید.
              </p>

              <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
                <a
                  href="mailto:shademanimohammad@gmail.com"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[var(--color-accent-500)] hover:bg-[var(--color-accent-600)] text-white font-bold text-xs transition-colors shadow-sm"
                >
                  <Mail className="w-3.5 h-3.5" />
                  ارسال پیام به مهندس شادمانی
                </a>
                <a
                  href="tel:+989375525707"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[var(--color-ink-600)] hover:bg-[var(--color-ink-500)] text-[var(--color-on-dark)] font-medium text-xs border border-[var(--color-line-dark)] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[var(--color-on-dark-muted)]" />
                  تماس مستقیم
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
