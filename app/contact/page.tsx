"use client";

import React, { useState } from "react";
import {
  Phone,
  Send,
  ShieldCheck,
  Truck,
  CheckCircle2,
  ExternalLink,
  HelpCircle,
  Clock,
  Sparkles,
  ArrowUpLeft,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    serviceType: "سیستم هوشمند جرثقیل (LMI)",
    message: "",
  });

  const phoneNumber = "09375525707";
  const phoneDisplay = "۰۹۳۷ ۵۵۲ ۵۷۰۷";
  const telegramUrl = "https://t.me/+989375525707";

  // ارسال مستقیم داده‌های فرم به تلگرام
  const handleTelegramSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedText = `درخواست خدمات فنی (الفیکس):\n\n👤 نام / واحد: ${formData.name}\n📱 شماره تماس: ${formData.phone}\n⚙️ حوزه فنی: ${formData.serviceType}\n📝 شرح اشکال: ${formData.message || "ثبت نشده"}`;
    const encodedText = encodeURIComponent(formattedText);
    window.open(`https://t.me/+989375525707?text=${encodedText}`, "_blank");
  };

  const workflowSteps = [
    {
      step: "۱",
      title: "بررسی اولیه و مشاوره تلفنی",
      desc: "بررسی نشانه‌های خرابی، کد خطا یا فیلم عملکرد دستگاه جهت تشخیص اولیه ریشه مشکل.",
      icon: HelpCircle,
    },
    {
      step: "۲",
      title: "اعزام به محل یا دریافت قطعه",
      desc: "حضور کارشناس در محل پروژه یا ارسال قطعه و برد الکترونیکی به آزمایشگاه تست.",
      icon: Truck,
    },
    {
      step: "۳",
      title: "تعمیر تخصصی و تست عملیاتی",
      desc: "انجام تعمیرات، کالیبراسیون دقیق سنسورها و تحویل سیستم.",
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-neutral-100)]/60 text-[var(--color-body)] font-[var(--font-vazir),system-ui,sans-serif] antialiased selection:bg-[var(--color-accent-500)] selection:text-white">
      {/* هیرو سکشن مدرن و مینیمال */}
      <section className="relative overflow-hidden section-dark text-[var(--color-on-dark)] pt-28 pb-20 md:pt-36 md:pb-28 border-b border-[var(--color-line-dark)] circuit-texture">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* معرفی و تیتر */}
            <div className="lg:col-span-7 space-y-6 text-right">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[var(--color-ink-700)] text-[var(--color-accent-400)] border border-[var(--color-line-dark)] shadow-sm">
                <ShieldCheck className="w-4 h-4 text-[var(--color-accent-400)]" />
                پشتیبانی فنی و تخصصی با محمد شادمانی
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.25]">
                مشاوره فنی، عیب‌یابی <br />
                <span className="text-[var(--color-accent-400)]">
                  و اعزام کارشناس به محل دستگاه
                </span>
              </h1>

              <p className="text-[var(--color-on-dark-body)] text-sm sm:text-base leading-relaxed max-w-xl">
                پاسخگویی به سوالات فنی، نصب و کالیبراسیون سیستم‌های هوشمند
                مانیتورینگ جرثقیل (LMI)، مدارهای هیدرولیک پروپرشنال و تعمیر بردهای
               ماشین‌آلات راهسازی و کشاورزی.
              </p>

              {/* اکشن‌های سریع */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={`tel:${phoneNumber}`}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[var(--color-accent-500)] hover:bg-[var(--color-accent-600)] text-white font-extrabold text-sm transition-all shadow-md hover:shadow-lg"
                >
                  <Phone className="w-4 h-4" />
                  برقراری تماس مستقیم
                </a>

                <a
                  href={telegramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--color-ink-700)] hover:bg-[var(--color-ink-600)] text-[var(--color-on-dark)] font-bold text-sm border border-[var(--color-line-dark)] transition-colors"
                >
                  <Send className="w-4 h-4 text-[var(--color-accent-400)]" />
                  ارسال پیام در تلگرام
                </a>
              </div>
            </div>

            {/* فرم ثبت سریع درخواست */}
            <div className="lg:col-span-5">
              <div className="bg-[var(--color-ink-800)]/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-[var(--color-line-dark)] shadow-2xl space-y-5">
                <div className="space-y-1 text-right border-b border-[var(--color-line-dark)] pb-4">
                  <div className="flex items-center gap-2 text-[var(--color-accent-400)] text-xs font-bold">
                    <Sparkles className="w-4 h-4" />
                    ارتباط هوشمند
                  </div>
                  <h2 className="text-base sm:text-lg font-extrabold text-white">
                    ثبت مشخصات جهت بررسی فنی
                  </h2>
                  <p className="text-xs text-[var(--color-on-dark-muted)]">
                    پیام شما در تلگرام آماده شده و بدون واسطه دریافت می‌شود.
                  </p>
                </div>

                <form
                  onSubmit={handleTelegramSubmit}
                  className="space-y-4 text-right"
                >
                  <div>
                    <label className="block text-xs font-semibold text-[var(--color-on-dark-muted)] mb-1.5">
                      نام یا واحد پروژه
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="مثال: مهندس راد - شرکت پارس"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-[var(--color-ink-700)] border border-[var(--color-line-dark)] text-white text-xs placeholder:text-[var(--color-neutral-500)] focus:outline-none focus:border-[var(--color-accent-500)] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[var(--color-on-dark-muted)] mb-1.5">
                      شماره تماس
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="۰۹۱۲..."
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-[var(--color-ink-700)] border border-[var(--color-line-dark)] text-white text-xs placeholder:text-[var(--color-neutral-500)] focus:outline-none focus:border-[var(--color-accent-500)] transition-colors text-left font-mono"
                      dir="ltr"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[var(--color-on-dark-muted)] mb-1.5">
                      حوزه خدمات
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          serviceType: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-[var(--color-ink-700)] border border-[var(--color-line-dark)] text-white text-xs focus:outline-none focus:border-[var(--color-accent-500)] transition-colors"
                    >
                      <option value="سیستم هوشمند جرثقیل (LMI)">
                        نصب، عیب‌یابی یا کالیبراسیون LMI
                      </option>
                      <option value="تعمیر و عیب‌یابی مدار هیدرولیک">
                        تعمیر شیرهای پروپرشنال و هیدرولیک
                      </option>
                      <option value="تعمیرات برد و سنسور">
                        تعمیر برد کنترلر و سنسورها
                      </option>
                      <option value="اعزام کارشناس به محل دستگاه">
                        درخواست حضور و عیب‌یابی در محل
                      </option>
                      <option value="مشاوره فنی">
                        مشاوره فنی و انتخاب قطعه
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[var(--color-on-dark-muted)] mb-1.5">
                      شرح خلاصه اشکال یا نوع دستگاه (اختیاری)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="مثال: خطای سنسور فشار یا لودسل جرثقیل..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-[var(--color-ink-700)] border border-[var(--color-line-dark)] text-white text-xs placeholder:text-[var(--color-neutral-500)] focus:outline-none focus:border-[var(--color-accent-500)] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[var(--color-accent-500)] hover:bg-[var(--color-accent-600)] text-white font-bold text-xs transition-all shadow-md cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    ارسال مستقیم در تلگرام
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* دو باکس بزرگ و بالانس‌شده برای تماس و تلگرام */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* کارت ۱: تماس مستقیم */}
          <a
            href={`tel:${phoneNumber}`}
            className="group bg-white rounded-3xl p-8 border border-[var(--color-line-bold)] shadow-[var(--shadow-sm)] hover:border-[var(--color-accent-400)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-right"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[var(--color-accent-50)] text-[var(--color-accent-700)] border border-[var(--color-accent-100)] group-hover:bg-[var(--color-accent-500)] group-hover:text-white transition-colors flex items-center justify-center">
                  <Phone className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[var(--color-accent-50)] text-[var(--color-accent-700)] border border-[var(--color-accent-200)]">
                  تماس مستقیم
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-extrabold text-[var(--color-ink)] group-hover:text-[var(--color-accent-600)] transition-colors">
                  ارتباط تلفنی
                </h3>
                <p
                  className="text-2xl font-black text-[var(--color-ink)] font-mono"
                  dir="ltr"
                >
                  {phoneDisplay}
                </p>
                <p className="text-xs sm:text-sm text-[var(--color-neutral-600)] leading-relaxed pt-2">
                  جهت عیب‌یابی تلفنی، استعلام هزینه قطعات، مشاوره پیش از اعزام و
                  هماهنگی حضور در محل کارگاه یا پروژه.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[var(--color-line)] flex items-center justify-between">
              <span className="text-xs font-extrabold text-[var(--color-accent-700)] flex items-center gap-1 group-hover:underline">
                برقراری تماس مستقیم
                <ArrowUpLeft className="w-4 h-4" />
              </span>
              <span className="text-[11px] text-[var(--color-neutral-500)] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                همه‌روزه ۸ الی ۲۰
              </span>
            </div>
          </a>

          {/* کارت ۲: پیام در تلگرام */}
          <a
            href={telegramUrl}
            target="_blank"
            rel="noreferrer"
            className="group bg-white rounded-3xl p-8 border border-[var(--color-line-bold)] shadow-[var(--shadow-sm)] hover:border-[var(--color-accent-400)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-right"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[var(--color-neutral-100)] text-[var(--color-ink)] border border-[var(--color-line)] group-hover:bg-[var(--color-accent-500)] group-hover:text-white transition-colors flex items-center justify-center">
                  <Send className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[var(--color-neutral-100)] text-[var(--color-neutral-700)] border border-[var(--color-line)]">
                  ارسال مستندات
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-extrabold text-[var(--color-ink)] group-hover:text-[var(--color-accent-600)] transition-colors">
                  ارتباط در تلگرام
                </h3>
                <p className="text-sm font-bold text-[var(--color-accent-700)]">
                  ارسال مستقیم فیلم و خطای دستگاه
                </p>
                <p className="text-xs sm:text-sm text-[var(--color-neutral-600)] leading-relaxed pt-2">
                  ارسال پلاک دستگاه، دیاگرام سیستم هیدرولیک، کدهای نمایشگر و
                  تصاویر مدار جهت بررسی دقیق و تخصصی.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[var(--color-line)] flex items-center justify-between">
              <span className="text-xs font-extrabold text-[var(--color-accent-700)] flex items-center gap-1 group-hover:underline">
                شروع گفتگو در تلگرام
                <ExternalLink className="w-4 h-4" />
              </span>
              <span className="text-[11px] text-[var(--color-neutral-500)]">
                پاسخگویی در سریع‌ترین زمان
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* فرآیند شفاف اعزام و تعمیرات (۳ گام مینیمال) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <span className="text-xs font-extrabold text-[var(--color-accent-700)]">
            روال هماهنگی و عیب‌یابی
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[var(--color-ink)]">
            فرآیند ارائه خدمات و اعزام به پروژه
          </h2>
          <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed">
            بدون تشریفات اداری؛ متمرکز بر کاهش حداکثری زمان توقف دستگاه و بازگشت
            به چرخه کار.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {workflowSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[var(--color-line-bold)] text-right space-y-3 shadow-[var(--shadow-xs)] relative"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-neutral-100)] text-[var(--color-ink)] flex items-center justify-center font-black text-xs font-mono">
                    {step.step}
                  </div>
                  <Icon className="w-5 h-5 text-[var(--color-accent-600)]" />
                </div>

                <h3 className="text-sm font-extrabold text-[var(--color-ink)] pt-1">
                  {step.title}
                </h3>

                <p className="text-xs text-[var(--color-neutral-600)] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* بخش پایانی خلوت (CTA) */}
      <section className="section-dark py-14 border-t border-[var(--color-line-dark)] circuit-texture">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-white">
            دستگاه شما دچار توقف کاری شده است؟
          </h2>
          <p className="text-xs sm:text-sm text-[var(--color-on-dark-body)] leading-relaxed max-w-lg mx-auto">
            جهت بررسی فوری و هماهنگی برای حضور در محل پروژه، همین حالا مستقیماً
            تماس بگیرید.
          </p>

          <div className="pt-2 flex justify-center">
            <a
              href={`tel:${phoneNumber}`}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-[var(--color-accent-500)] hover:bg-[var(--color-accent-600)] text-white font-extrabold text-sm transition-all shadow-md hover:shadow-lg"
            >
              <Phone className="w-4 h-4" />
              تماس فوری
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
