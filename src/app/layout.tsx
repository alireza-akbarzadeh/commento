import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/shared/globals.css';
import { cn } from '@/shared/utils';

const vazirmatn = localFont({
  src: [
    {
      path: '../assets/fonts/webfonts/Vazirmatn-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../assets/fonts/webfonts/Vazirmatn-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../assets/fonts/webfonts/Vazirmatn-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/webfonts/Vazirmatn-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/webfonts/Vazirmatn-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/webfonts/Vazirmatn-normal.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/webfonts/Vazirmatn-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/webfonts/Vazirmatn-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../assets/fonts/webfonts/Vazirmatn-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
  ],
  variable: '--font-vazirmatn',
});

export const metadata: Metadata = {
  title: 'آیتی بازار',
  description: 'market place',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body
        className={cn(
          'h-screen bg-background font-vazirmatn',
          vazirmatn.variable,
        )}
      >
        <main className="mx-auto h-dvh min-h-dvh w-full max-w-[360px]">
          {children}
        </main>
      </body>
    </html>
  );
}
