import type React from "react";
import type { Metadata } from "next";
import "./globals.css";

import localFont from "next/font/local";

// Font files can be colocated inside of `app`
const dana = localFont({
  src: "../../public/fonts/DanaFaNum-Medium.woff",
  display: "swap",
});

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "داشبورد مدیریت کاربران",
  description: "داشبورد React برای مدیریت و نمایش لیست کاربران با قابلیت جستجو",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${dana.className}`}>{children}</body>
    </html>
  );
}
