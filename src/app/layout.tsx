import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { getLangDir } from 'rtl-detect';
import { Toaster } from '@/shared/ui';
import { cn } from '@/shared/utils';

import '@/shared/globals.css';

export const metadata: Metadata = {
  title: 'آیتی بازار',
  description: 'خرید و فروش آیتی بازار',
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
          {children}
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
