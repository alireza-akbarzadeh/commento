import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/shared/globals.css';
import { cn } from '@/lib/utils';

const vazirmatn = localFont({
  src: [
    {
      path: '../assets/fonts/webfonts/Vazirmatn-Medium.woff2',
      weight: '500',
    },
    {
      path: '../assets/fonts/webfonts/Vazirmatn-Black.woff2',
      weight: '900',
    },
    {
      path: '../assets/fonts/webfonts/Vazirmatn-Bold.woff2',
      weight: 'bold',
    },
    {
      path: '../assets/fonts/webfonts/Vazirmatn-Regular.woff2',
      weight: 'bold',
    },
    {
      path: '../assets/fonts/webfonts/Vazirmatn-Thin.woff2',
      weight: '100',
    },
  ],
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
      <body className={cn('font h-screen bg-background', vazirmatn.className)}>
        <main className="mx-auto h-dvh min-h-dvh w-full max-w-[360px]">
          {children}
        </main>
      </body>
    </html>
  );
}
