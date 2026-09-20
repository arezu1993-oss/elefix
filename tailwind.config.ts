import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vazir: ["var(--font-vazir)", "sans-serif"], // استفاده از CSS Variable برای Next Font
      },
      // اضافه کردن کی‌فریم برای انیمیشن زوم هیرو اسلایدر
      keyframes: {
        "slow-zoom": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        "slow-zoom": "slow-zoom 20s linear infinite",
      },
    },
  },
  // فعال‌سازی پلاگین انیمیشن که نصب کردید
  plugins: [require("tailwindcss-animate")],
};

export default config;
