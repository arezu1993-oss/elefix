import Link from "next/link";
import {
  Phone,
  MapPin,
  MessageSquare,
  Clock,
  ArrowLeft,
  ShieldCheck,
  FileText,
  Headphones,
  Building2,
  Factory,
  CheckCircle2,
} from "lucide-react";

const quickContactItems = [
  {
    title: "تماس مستقیم",
    value: "۳۵۷۶ ۳۰۶ ۰۹۱۲",
    href: "tel:09123063576",
    description: "برای استعلام قیمت، ثبت سفارش و دریافت اطلاعات محصول",
    icon: Phone,
    color: "text-[#c27829]",
    bg: "bg-[#c27829]/10",
    border: "border-[#c27829]/20",
  },
  {
    title: "واتس‌اپ واحد فروش",
    value: "۹۳۲۳ ۰۹۰ ۰۹۱۲",
    href: "https://wa.me/989120909323",
    description: "مناسب برای دریافت پاسخ سریع و هماهنگی سفارش",
    icon: MessageSquare,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  {
    title: "ساعات پاسخگویی",
    value: "شنبه تا چهارشنبه | ۸ الی ۱۷",
    href: "#",
    description: "در ساعات کاری پاسخگوی درخواست‌های فروش و مشاوره هستیم",
    icon: Clock,
    color: "text-sky-300",
    bg: "bg-sky-500/10",
    border: "border-sky-500/20",
  },
];

const supportItems = [
  {
    title: "استعلام قیمت",
    description: "دریافت قیمت روز برای سفارش‌های جزئی یا عمده",
    icon: FileText,
  },
  {
    title: "مشاوره خرید",
    description: "راهنمایی برای انتخاب محصول متناسب با نیاز شما",
    icon: Headphones,
  },
  {
    title: "هماهنگی سفارش",
    description: "پیگیری شرایط تامین، بسته‌بندی و تحویل",
    icon: ShieldCheck,
  },
];

const addressItems = [
  {
    title: "آدرس کارخانه",
    description: "مکان واحد تولید، تامین و بارگیری مجموعه",
    value: "ورامین، شهرک صنعتی سالاریه، بلوار نرگس شرقی، پلاک 6، قطعه SH9",
    icon: Factory,
    tone: "dark",
  },
  {
    title: "آدرس دفتر مرکزی",
    description: "محل پیگیری امور اداری، فروش و هماهنگی‌های مجموعه",
    value:
      "تهران، چیتگر، خیابان طراوت، خیابان شهید محمد میر کمالی، مجتمع آرام (بیمه)، بلوک A، طبقه همکف تجاری، واحد یک",
    icon: Building2,
    tone: "light",
  },
];

export default function ContactPage() {
  return (
    <main className="bg-white text-slate-800">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#07111f] text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-8rem] top-[-6rem] h-72 w-72 rounded-full bg-[#c27829]/20 blur-3xl" />
          <div className="absolute left-[-6rem] bottom-[-8rem] h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(194,120,41,0.12),transparent_26%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent)]" />
        </div>

        <div className="relative z-10 container mx-auto px-6 pb-16 pt-32 md:px-8 md:pb-20 md:pt-36 lg:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f0b56d]/20 bg-[#c27829]/10 px-4 py-2 text-xs font-black text-[#f0b56d]">
                <Phone size={14} />
                ارتباط با واحد فروش
              </div>

              <h1 className="text-3xl font-black leading-[1.9] text-white md:text-5xl">
                با ما در ارتباط باشید
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-300 md:text-base">
                برای دریافت مشاوره، استعلام قیمت، هماهنگی سفارش و اطلاعات بیشتر
                درباره محصولات سولفاته، از مسیرهای ارتباطی زیر با ما در تماس
                باشید. تیم فروش شیمی گستر سولفات آماده پاسخگویی سریع به
                درخواست‌های شماست.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:09123063576"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#c27829] px-6 py-4 text-sm font-black text-white shadow-lg shadow-[#c27829]/20 transition-all hover:bg-[#a86522]"
                >
                  تماس مستقیم
                  <Phone size={18} />
                </a>

                <a
                  href="https://wa.me/989120909323"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-black text-white backdrop-blur-sm transition hover:border-emerald-400/30 hover:bg-emerald-500/10"
                >
                  پیام در واتس‌اپ
                  <MessageSquare size={18} />
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "پاسخگویی برای سفارش‌های عمده",
                  "هماهنگی سریع با واحد فروش",
                  "ارائه اطلاعات محصول و تامین",
                  "ثبت درخواست از طریق تماس و واتس‌اپ",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm"
                  >
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-[#f0b56d]"
                    />
                    <span className="text-sm text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-xl">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white">
                  <Headphones size={28} />
                </div>

                <h2 className="text-2xl font-black text-white">
                  پاسخگویی سریع و مستقیم
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  برای درخواست قیمت، دریافت اطلاعات محصول، آنالیز، وضعیت تامین و
                  هماهنگی سفارش می‌توانید با واحد فروش در ارتباط باشید.
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    "استعلام قیمت روز محصولات",
                    "راهنمایی برای انتخاب محصول مناسب",
                    "هماهنگی سفارش، تامین و تحویل",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                    >
                      <ShieldCheck size={18} className="text-[#f0b56d]" />
                      <span className="text-sm font-bold text-slate-100">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-[#c27829]/20 bg-[#c27829]/10 p-4">
                  <p className="text-xs leading-6 text-[#f6d1a2]">
                    برای پاسخ سریع‌تر، لطفاً در پیام واتس‌اپ نوع محصول، تناژ
                    تقریبی و شهر مقصد را هم اعلام کنید.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="relative -mt-8 pb-8 md:-mt-10 md:pb-10">
        <div className="container mx-auto px-6 md:px-8 lg:px-10">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {quickContactItems.map((item) => {
              const Icon = item.icon;
              const isLink = item.href !== "#";

              const card = (
                <div
                  className={`group h-full rounded-[1.75rem] border ${item.border} bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)] transition-all hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.10)]`}
                >
                  <div
                    className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${item.bg} ${item.color}`}
                  >
                    <Icon size={26} />
                  </div>

                  <h3 className="text-lg font-black text-[#0a1a2f]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-5 text-base font-black leading-8 text-[#0a1a2f] break-words">
                    {item.value}
                  </div>
                </div>
              );

              if (isLink) {
                return (
                  <a
                    key={item.title}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http") ? "noreferrer" : undefined
                    }
                    className="block"
                  >
                    {card}
                  </a>
                );
              }

              return <div key={item.title}>{card}</div>;
            })}
          </div>
        </div>
      </section>

      {/* Addresses */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-8 lg:px-10">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-black text-[#0a1a2f] md:text-4xl">
              نشانی‌های مجموعه
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-500">
              برای مراجعات حضوری، هماهنگی‌های اداری یا امور مرتبط با تولید و
              بارگیری، اطلاعات هر دو موقعیت مجموعه در ادامه درج شده است.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {addressItems.map((item) => {
              const Icon = item.icon;
              const isDark = item.tone === "dark";

              return (
                <div
                  key={item.title}
                  className={`relative overflow-hidden rounded-[2rem] border p-6 sm:p-8 ${
                    isDark
                      ? "border-[#0f213c] bg-[#07111f] text-white"
                      : "border-slate-200 bg-slate-50 text-slate-800"
                  }`}
                >
                  <div className="pointer-events-none absolute inset-0">
                    <div
                      className={`absolute top-0 h-40 w-40 rounded-full blur-3xl ${
                        isDark
                          ? "right-0 bg-[#c27829]/20"
                          : "left-0 bg-sky-500/10"
                      }`}
                    />
                  </div>

                  <div className="relative z-10">
                    <div
                      className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl ${
                        isDark
                          ? "bg-white/10 text-[#f0b56d]"
                          : "bg-white text-[#0a1a2f] shadow-sm"
                      }`}
                    >
                      <Icon size={30} />
                    </div>

                    <h3
                      className={`text-2xl font-black ${
                        isDark ? "text-white" : "text-[#0a1a2f]"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`mt-3 text-sm leading-7 ${
                        isDark ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      {item.description}
                    </p>

                    <div
                      className={`mt-6 rounded-2xl border p-5 text-sm leading-8 ${
                        isDark
                          ? "border-white/10 bg-white/5 text-slate-100"
                          : "border-slate-200 bg-white text-slate-700"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <MapPin
                          size={18}
                          className={`mt-1 shrink-0 ${
                            isDark ? "text-[#f0b56d]" : "text-[#c27829]"
                          }`}
                        />
                        <span>{item.value}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Support Items */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="container mx-auto px-6 md:px-8 lg:px-10">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-black text-[#0a1a2f] md:text-4xl">
              چه کمکی می‌توانیم بکنیم؟
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500">
              تیم فروش و پشتیبانی آماده پاسخگویی به درخواست‌های شما در زمینه
              تامین، قیمت‌گذاری و هماهنگی سفارش است.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {supportItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-[1.75rem] border border-slate-200 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0a1a2f] text-white">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-lg font-black text-[#0a1a2f]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-[#0a1a2f] py-16 text-white md:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-5rem] top-[-5rem] h-56 w-56 rounded-full bg-[#c27829]/15 blur-3xl" />
          <div className="absolute right-[-4rem] bottom-[-5rem] h-56 w-56 rounded-full bg-sky-500/10 blur-3xl" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center md:px-8 lg:px-10">
          <h2 className="text-2xl font-black text-white md:text-4xl">
            برای دریافت اطلاعات بیشتر با ما تماس بگیرید
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-300">
            در صورت نیاز به اطلاعات محصول، قیمت، شرایط تامین یا هماهنگی سفارش،
            تیم فروش شیمی گستر سولفات آماده پاسخگویی است.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="tel:09123063576"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#c27829] px-6 py-4 text-sm font-black text-white transition-all hover:bg-[#d28735]"
            >
              تماس مستقیم
              <Phone size={18} />
            </a>

            <a
              href="https://wa.me/989120909323"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-black text-white hover:bg-white/10"
            >
              پیام در واتس‌اپ
              <MessageSquare size={18} />
            </a>

            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-transparent px-6 py-4 text-sm font-black text-white hover:bg-white/10"
            >
              مشاهده محصولات
              <ArrowLeft size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
