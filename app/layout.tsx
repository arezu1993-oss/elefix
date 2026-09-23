// app/layout.tsx
import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import Header from "./Header";
import Footer from "./Footer";
import "./globals.css";

import ScrollTools from "../components/shared/ScrollTools";
import SmoothScroll from "../components/SmoothScroll";
import FloatingContact from "../components/shared/FloatingContact"; 

export const metadata: Metadata = {
  title: "الفیکس | تعمیر بردهای الکترونیکی راهسازی و کشاورزی",
  description:
    "الفیکس تامین‌کننده تخصصی درایورها، رباتیک، PLC و منابع تغذیه صنعتی با کیفیت تضمین‌شده",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "الفیکس | تعمیر بردهای الکترونیکی راهسازی و کشاورزی",
    description:
      "الفیکس تامین‌کننده تخصصی درایورها، رباتیک، PLC و منابع تغذیه صنعتی با کیفیت تضمین‌شده",
    url: "https://www.elefix.ir",
    siteName: "الفیکس",
    images: [
      {
        url: "https://www.elefix.ir/logo-elefix.png",
        width: 512,
        height: 512,
        alt: "لوگوی الفیکس",
      },
    ],
    locale: "fa_IR",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const vazir = localFont({
  src: "../public/fonts/Vazir-Medium.woff2",
  variable: "--font-vazir",
  display: "swap",
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "الفیکس",
  url: "https://www.elefix.ir",
  logo: "https://www.elefix.ir/logo-elefix.png",
  description:
    "تامین‌کننده تخصصی قطعات الکترونیک صنعتی شامل درایورها، رباتیک، PLC و منابع تغذیه",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: "Persian",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>

      <body className={`${vazir.variable} font-vazir bg-white antialiased`}>
        <SmoothScroll>
          <Header />

          <main className="min-h-screen">{children}</main>

          <Footer />
          <ScrollTools />
          <FloatingContact />
        </SmoothScroll>
      </body>
    </html>
  );
}
