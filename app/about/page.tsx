"use client";

import Link from "next/link";

const PHONE = "۰۹۳۷-۵۵۲-۵۷۰۷";
const PHONE_TEL = "09375525707";

const SECTIONS = [
  {
    num: "۱",
    category: "بنیان‌گذار و رهبری فنی",
    title: "دکتر محمد شادمانی",
    desc: "دکتری مکانیک بیوسیستم و ۹ سال سابقه حل بحران ماشین‌آلات سنگین در صنایع نفت، فولاد و بنادر.",
    href: "/about/resume",
    btnText: "مشاهده پروفایل و سوابق",
    badge: "مدیریت فنی",
  },
  {
    num: "۲",
    category: "فناوری و مالکیت فکری",
    title: "سامانه پایش بار و واژگونی",
    desc: "اختراع ثبت‌شده برای تله‌متری هوشمند بی‌سیم و پیشگیری لحظه‌ای از واژگونی جرثقیل‌های سنگین.",
    href: "/about/invention",
    btnText: "بررسی مستندات اختراع",
    badge: "ثبت رسمی اختراع",
  },
  {
    num: "۳",
    category: "صلاحیت‌های تخصصی",
    title: "گواهینامه‌های بین‌المللی",
    desc: "مدارک رسمی هیدرولیک پروپرشنال، شبکه‌های صنعتی CAN-Bus و الکترونیک قدرت از مراجعی چون Festo آلمان.",
    href: "/about/certificates",
    btnText: "استعلام تاییدیه‌ها",
    badge: "Festo Didactic",
  },
];

const STATS = [
  {
    value: "۹+",
    label: "سال تجربه میدانی",
    sub: "در پالایشگاه‌ها، بنادر و معادن",
  },
  {
    value: "۱۰۰٪",
    label: "مهندسی معکوس برد",
    sub: "احیای قطعات نایاب و بدون نقشه",
  },
  {
    value: "۱",
    label: "اختراع ملی ثبت‌شده",
    sub: "سامانه هوشمند ایمنی جرثقیل",
  },
  {
    value: "۲۴h",
    label: "میانگین عیب‌یابی",
    sub: "کاهش حداکثری خواب ماشین (Downtime)",
  },
];

export default function AboutPage() {
  return (
    <main
      className="min-h-screen bg-[#f8fafc] text-slate-800 pt-28 pb-20 selection:bg-emerald-600 selection:text-white"
      dir="rtl"
    >
      {/* هدر صفحه: خلوت، خوانا و با وقار سازمانی */}
      <section className="relative mx-auto max-w-6xl px-6 lg:px-8 mb-16 lg:mb-24">
        {/* مسیر راهنما (Breadcrumb) */}
        <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-8">
          <Link href="/" className="hover:text-emerald-600 transition-colors">
            خانه
          </Link>
          <span>/</span>
          <span className="text-slate-700 font-semibold">درباره ما</span>
        </div>

        {/* برچسب و تیتر اصلی */}
        <div className="max-w-3xl">
          <span className="inline-block text-xs font-bold tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200/60 rounded-full px-3.5 py-1 mb-5">
            هویت مهندسی الفیکس
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight mb-6">
            پیشگام مهندسی معکوس و احیای الکترونیک ماشین‌آلات سنگین
          </h1>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            الفیکس نقطه پیوند دانش آکادمیک با نیازهای حیاتی صنعت است؛ بازگرداندن
            سریع ماشین‌آلات فوق‌سنگین به خط تولید، بدون وابستگی به واردات برد و
            قطعات تحریمی.
          </p>
        </div>
      </section>

      {/* سه بخش اصلی (Three Pillars): تمیز، کارت‌های سفید با کانتراست بالا */}
      <section className="mx-auto max-w-6xl px-6 lg:px-8 mb-20 lg:mb-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SECTIONS.map((item) => (
            <div
              key={item.num}
              className="group relative bg-white rounded-2xl border border-slate-200/80 p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(16,185,129,0.08)] hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* شماره و برچسب بالا */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-3xl font-black text-slate-300 group-hover:text-emerald-600 transition-colors">
                    {item.num}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 group-hover:bg-emerald-50 group-hover:text-emerald-700 px-3 py-1 rounded-md transition-colors">
                    {item.badge}
                  </span>
                </div>

                <div className="text-xs font-medium text-emerald-600 mb-2">
                  {item.category}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 font-light leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              {/* دکمه انتقال */}
              <div className="pt-6 border-t border-slate-100">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition-colors"
                >
                  <span>{item.btnText}</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="transition-transform group-hover:-translate-x-1.5"
                  >
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* بخش آمار و دستاوردها: استایل الهام‌گرفته از گزارش‌های صنعتی Yutong */}
      <section className="mx-auto max-w-6xl px-6 lg:px-8 mb-20 lg:mb-28">
        <div className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {STATS.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-3xl sm:text-5xl font-black text-emerald-600 tracking-tight mb-2">
                  {stat.value}
                </span>
                <span className="text-base font-bold text-slate-900 mb-1">
                  {stat.label}
                </span>
                <span className="text-xs text-slate-500 font-light leading-normal">
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* باکس کال‌تو‌اکشن (CTA) شیک و باوقار شرکتی */}
      {/* باکس کال‌تو‌اکشن (CTA) اصلاح‌شده */}
      <section className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-8 sm:p-12 lg:p-14 flex flex-col lg:flex-row lg:items-center justify-between gap-8 shadow-2xl border border-slate-800">
          <div className="max-w-2xl">
            {/* اضافه کردن صریح text-white برای غلبه بر استایل عمومی h2 */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 leading-snug">
              با بن‌بست در عیب‌یابی یا کمبود قطعه مواجه‌اید؟
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              پیش از تحمیل هزینه‌های سنگین توقف پروژه یا واردات بردهای
              گران‌قیمت، با تیم فنی الفیکس مشورت کنید.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
            <a
              href="tel:09375525707"
              className="inline-flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 px-6 py-3.5 text-sm font-bold text-white transition-colors"
            >
              <span dir="ltr">
                ۰۹۳۷-۵۵۲-۵۷۰۷
              </span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-500 hover:bg-emerald-400 px-6 py-3.5 text-sm font-bold text-slate-950 transition-colors shadow-lg shadow-emerald-500/20"
            >
              ثبت درخواست اعزام و مشاوره
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
