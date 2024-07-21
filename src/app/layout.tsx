import type { Metadata } from "next";
import localFont from "next/font/local";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { getLangDir } from "rtl-detect";
import { cn } from "@/shared/utils";
import QueryProviders from "@/shared/query-providers";
import "@/shared/globals.css";

const vazirmatn = localFont({
  src: [
    {
      path: "../assets/fonts/webfonts/Vazirmatn-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../assets/fonts/webfonts/Vazirmatn-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../assets/fonts/webfonts/Vazirmatn-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/webfonts/Vazirmatn-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/webfonts/Vazirmatn-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/webfonts/Vazirmatn-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/webfonts/Vazirmatn-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/webfonts/Vazirmatn-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../assets/fonts/webfonts/Vazirmatn-Thin.woff2",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-vazirmatn",
});

export const metadata: Metadata = {
  title: "آیتی بازار",
  description: "market place",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const direction = getLangDir(locale);
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} dir={direction}>
      <body
        suppressHydrationWarning={true}
        className={cn("bg-gray-100 font-vazirmatn", vazirmatn.variable)}
      >
        <NextIntlClientProvider messages={messages}>
          <div
            id="root"
            className="relative mx-auto h-dvh min-h-dvh w-full max-w-sm"
          >
            <QueryProviders>{children}</QueryProviders>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
