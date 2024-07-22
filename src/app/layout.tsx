import '@/shared/globals.css';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { getLangDir } from 'rtl-detect';
import { cn } from '@/shared/utils';

export const metadata: Metadata = {
  title: 'آیتی بازار',
  description: 'market place',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const direction = getLangDir(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} dir={direction}>
      <body
        suppressHydrationWarning={true}
        className={cn('bg-gray-100 font-vazirmatn-semibold antialiased')}
      >
        <NextIntlClientProvider messages={messages}>
          <div
            id="root"
            className="relative mx-auto h-dvh min-h-dvh w-full max-w-sm"
          >
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
