"use client";

import { motion, Variants } from "framer-motion";

const industries = [
  {
    id: "municipality",
    title: "شهرداری",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-7 h-7"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 21h19.5M9 3.75H4.5v17.25H9M9 3.75h6M9 3.75V21m6-17.25h4.5V21H15M15 3.75V21m-6 0h6M9 8.25h.008v.008H9V8.25zm0 3.75h.008v.008H9V12zm0 3.75h.008v.008H9v-.008zm6-7.5h.008v.008H15V8.25zm0 3.75h.008v.008H15V12zm0 3.75h.008v.008H15v-.008z"
        />
      </svg>
    ),
  },
  {
    id: "roads",
    title: "راهداری",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-7 h-7"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.-6.677v6.677m0 4.5v-4.5m0 0h-12v6.677m0 4.5v-4.5m0 0h-12"
        />
      </svg>
    ),
  },
  {
    id: "individuals",
    title: "اشخاص حقیقی",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-7 h-7"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    ),
  },
  {
    id: "agro",
    title: "کشت و صنعت",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-7 h-7"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        />
      </svg>
    ),
  },
  {
    id: "oil",
    title: "نفت و گاز",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-7 h-7"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
        />
      </svg>
    ),
  },
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export default function ClientsSection() {
  return (
    <section
      dir="rtl"
      className="relative py-24 px-4 overflow-hidden bg-[oklch(97%_0.008_145)]"
    >
      {/* Texture blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: [
            "radial-gradient(ellipse 70% 50% at 15% 60%, oklch(88% 0.06 145 / 0.15) 0%, transparent 100%)",
            "radial-gradient(ellipse 50% 40% at 85% 20%, oklch(85% 0.04 145 / 0.1) 0%, transparent 100%)",
          ].join(", "),
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <div
            aria-hidden
            className="mx-auto w-10 h-[3px] rounded-full mb-5"
            style={{
              background:
                "linear-gradient(90deg, oklch(52% 0.16 145), oklch(62% 0.18 155))",
            }}
          />
          <h2
            className="text-3xl md:text-4xl font-bold leading-snug"
            style={{ color: "oklch(16% 0.02 145)" }}
          >
            صنایع و شرکت‌هایی که به آن‌ها خدمات ارائه می‌کنیم
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 list-none p-0 m-0"
        >
          {industries.map((item) => (
            <motion.li key={item.id} variants={cardVariant} className="group">
              <div
                className="relative flex flex-col items-center gap-4 rounded-2xl px-5 py-8 h-full cursor-default select-none overflow-hidden transition-[border-color,box-shadow,transform] duration-200 ease-out hover:-translate-y-1.5"
                style={{
                  background: "oklch(100% 0 0)",
                  border: "1.5px solid oklch(90% 0.03 145)",
                  boxShadow:
                    "0 1px 3px oklch(0% 0 0 / 0.05), 0 3px 12px oklch(52% 0.16 145 / 0.05)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "oklch(52% 0.16 145)";
                  el.style.boxShadow =
                    "0 8px 28px oklch(52% 0.16 145 / 0.15), 0 2px 6px oklch(0% 0 0 / 0.06)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "oklch(90% 0.03 145)";
                  el.style.boxShadow =
                    "0 1px 3px oklch(0% 0 0 / 0.05), 0 3px 12px oklch(52% 0.16 145 / 0.05)";
                }}
              >
                {/* Accent bar */}
                <div
                  aria-hidden
                  className="absolute top-0 inset-x-0 h-[3px] rounded-b-full origin-right scale-x-[0.3] transition-transform duration-300 group-hover:scale-x-100"
                  style={{
                    background:
                      "linear-gradient(90deg, oklch(52% 0.16 145), oklch(62% 0.18 155))",
                  }}
                />

                {/* Icon */}
                <div
                  className="flex items-center justify-center w-14 h-14 rounded-xl transition-colors duration-200"
                  style={{
                    background: "oklch(95% 0.012 145)",
                    color: "oklch(42% 0.14 145)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background =
                      "oklch(90% 0.04 145)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background =
                      "oklch(95% 0.012 145)";
                  }}
                >
                  {item.icon}
                </div>

                {/* Label */}
                <span
                  className="text-base font-bold text-center leading-tight"
                  style={{ color: "oklch(18% 0.02 145)" }}
                >
                  {item.title}
                </span>

                {/* Watermark circle */}
                <div
                  aria-hidden
                  className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full opacity-[0.04] transition-opacity duration-200 group-hover:opacity-[0.07]"
                  style={{ background: "oklch(52% 0.16 145)" }}
                />
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
