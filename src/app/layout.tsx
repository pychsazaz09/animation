import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: {
    default: "映界",
    template: "%s | 映界",
  },
  description: "发现动画与电影的简洁目录。",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        <SiteHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
