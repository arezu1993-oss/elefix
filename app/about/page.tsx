"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  FlaskConical,
  MessageCircle,
  ShieldCheck,
  Factory,
  Boxes,
  Sparkles,
  Zap,
} from "lucide-react";

const whatsappPhone = "989120909323";

const focusItems = [
  {
    icon: FlaskConical,
    title: "خلوص بالا",
    description: "تضمین درصد مس و حلالیت کامل در گریدهای کشاورزی و صنعتی.",
  },
  {
    icon: ShieldCheck,
    title: "آنالیز دقیق",
    description: "ارائه برگه آنالیز معتبر برای تمامی محموله‌های ارسالی.",
  },
  {
    icon: Factory,
    title: "تأمین پایدار",
    description: "توانایی تأمین مداوم مواد اولیه برای خطوط تولید بزرگ.",
  },
  {
    icon: Boxes,
    title: "بسته‌بندی سفارشی",
    description: "امکان ارائه در کیسه‌های ۲۵ کیلویی یا جامبوبگ ۱ تنی.",
  },
];

export default function AboutPage() {
  const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent("سلام، جهت استعلام قیمت محصولات و همکاری تجاری پیام می‌دهم.")}`;

  return (
    // حذف pt-20 با استفاده از منفی کردن مارجین برای چسبیدن به هدر
    <main className="overflow-hidden bg-[#fcfdfe] font-vazir text-slate-900 -mt-20">
      {/* Hero Section */}
      <section className="relative bg-[#07111f] px-4 pt-32 pb-20 text-white sm:px-6 lg:px-10 lg:pt-48 lg:pb-32">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute right-[-12rem] top-[-10rem] h-96 w-96 rounded-full bg-[#c27829]/20 blur-3xl" />
          <div className="absolute bottom-[-14rem] left-[-10rem] h-[28rem] w-[28rem] rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px]" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-center lg:text-right"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-xs font-bold text-[#f0b56d] md:text-sm">
              <Sparkles size={16} />
              استاندارد جهانی در محصولات سولفاته
            </div>

            <h1 className="text-3xl font-black leading-[1.5] md:text-4xl lg:text-6xl lg:leading-[1.3]">
              دقت در <span className="text-[#f0b56d]">تولید</span>،<br />
              تداوم در <span className="text-[#f0b56d]">تأمین</span>.
            </h1>

            <p className="mt-6 mx-auto lg:mx-0 max-w-2xl text-base leading-8 text-slate-300 md:text-lg md:leading-9">
              شیمی گستر سولفات با بهره‌گیری از دانش متخصصان شیمی، به عنوان بازوی
              تأمین مواد اولیه در کنار صنایع ایستاده است. ما بر کیفیت محصول
              نهایی شما حساس هستیم.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a
                href={whatsappUrl}
                className="flex h-14 items-center justify-center gap-3 rounded-2xl bg-[#c27829] px-8 font-black text-white transition hover:bg-[#a86522] hover:shadow-lg hover:shadow-amber-900/20"
              >
                <MessageCircle size={20} />
                مشاوره و استعلام قیمت
              </a>
              <Link
                href="/products"
                className="flex h-14 items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/5 px-8 font-black text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                بررسی آنالیز محصولات
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative lg:col-span-5"
          >

            <div className="relative aspect-square lg:aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-white/10 p-2 shadow-2xl shadow-blue-900/20">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#07111f] via-transparent to-transparent" />
              <Image
                src="/images/about-f.jpg"
                alt="خلوص محصول سولفات مس"
                fill
                className="object-cover"
                priority
              />

              <div className="absolute bottom-4 left-4 right-4 z-20 rounded-2xl border border-white/10 bg-white/5 p-4 md:bottom-8 md:left-8 md:right-8 md:p-6 backdrop-blur-md">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-[#f0b56d] text-[#07111f]">
                    <Zap size={24} fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs font-bold text-amber-200">
                      تضمین کیفیت
                    </p>
                    <p className="text-sm md:text-lg font-black text-white">
                      خلوص بالای 94 %
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-20 -mt-10 px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
            {[
              { label: "ظرفیت تأمین ماهانه", value: "۲۵۰+ تُن" },
              { label: "مشتریان صنعتی فعال", value: "۱۲۰+" },
              { label: "خلوص محصولات", value: "۹۸٪ - ۹۴" },
              { label: "ارسال به سراسر کشور", value: "۳۱" },
            ].map((stat, i) => (
              <div
                key={i}
                className="rounded-2xl md:rounded-3xl border border-slate-100 bg-white p-4 md:p-6 text-center shadow-xl shadow-slate-200/40"
              >
                <p className="text-xl font-black text-[#0a1a2f] md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="px-4 py-20 lg:py-32 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <div>
              <span className="font-black text-[#c27829] tracking-widest text-sm uppercase">
                داستان ما
              </span>
              <h2 className="mt-4 text-3xl font-black leading-tight text-[#0a1a2f] md:text-4xl">
                تأمین تخصصی برای <br className="hidden md:block" /> زیرساخت‌های
                کشاورزی و صنعتی
              </h2>
              <div className="mt-8 space-y-6 text-base md:text-lg leading-8 md:leading-9 text-slate-600">
                <p>
                  مجموعه{" "}
                  <strong className="text-slate-900">شیمی گستر سولفات</strong>{" "}
                  با درک عمیق از نیاز صنایع به مواد اولیه باکیفیت، فعالیت خود را
                  بر تولید و توزیع تخصصی ترکیبات سولفاته متمرکز کرده است.
                </p>
                <p>
                  ما معتقدیم که بقای یک واحد تولیدی به کیفیت مواد اولیه آن
                  وابسته است. به همین دلیل، تمامی فرآیندهای تأمین ما تحت نظارت
                  دقیق آزمایشگاهی انجام می‌شود تا محصولی که به دست مصرف‌کننده
                  می‌رسد، فراتر از استانداردهای معمول باشد.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:gap-6 sm:grid-cols-2">
              {focusItems.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="rounded-3xl border border-slate-100 bg-white p-6 md:p-8 shadow-lg shadow-slate-100/50"
                >
                  <item.icon className="mb-4 text-[#c27829]" size={32} />
                  <h3 className="text-lg md:text-xl font-black text-[#0a1a2f]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs md:text-sm leading-6 md:leading-7 text-slate-500">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="px-4 pb-20 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] md:rounded-[3rem] bg-[#0a1a2f] p-8 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#c27829]/10 blur-3xl rounded-full" />
          <BadgeCheck
            className="relative z-10 mx-auto text-[#f0b56d]"
            size={48}
          />
          <h2 className="relative z-10 mt-6 text-2xl font-black md:text-4xl">
            شروع همکاری استراتژیک
          </h2>
          <p className="relative z-10 mt-6 text-sm md:text-lg text-slate-400 max-w-2xl mx-auto">
            اگر برای خط تولید یا توزیع خود به یک تأمین‌کننده ثابت و متعهد نیاز
            دارید، ما آماده گفتگو هستیم.
          </p>
          <div className="relative z-10 mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={whatsappUrl}
              className="flex h-14 items-center justify-center rounded-2xl bg-[#c27829] px-10 font-black text-white transition hover:bg-[#a86522] shadow-xl shadow-amber-900/20"
            >
              درخواست آنالیز و لیست قیمت
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
