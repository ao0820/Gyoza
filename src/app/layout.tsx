import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "餃子フェス 2026 | Gyoza Festival",
  description: "心も体も熱くなる、最強の5日間。全国から選りすぐりの餃子が集結する、日本最大級の餃子の祭典。",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

import CartWrapper from "./components/CartWrapper";
import ScrollToTop from "./components/ScrollToTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} font-sans bg-washi text-sumi antialiased`}>
        <ScrollToTop />
        <CartWrapper>
          {children}
        </CartWrapper>
      </body>
    </html>
  );
}
