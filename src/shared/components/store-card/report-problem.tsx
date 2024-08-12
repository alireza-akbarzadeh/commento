'use client';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import { Icon, LazyImage } from '@/shared/components';
import { CURRENCY } from '@/shared/constant';
import {
  Button,
  Checkbox,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Separator,
} from '@/shared/ui';
import { cn } from '@/shared/utils';
import { ReportErrorPrice } from './report-error-price';

export const ReportProblem = () => {
  const t = useTranslations('Product');
  const [checked, setChecked] = useState<number | null>(null);
  const isInputChecked = checked !== null;
  const handleToggleChecked = (index: number) => {
    setChecked((prevChecked) => (prevChecked === index ? null : index));
  };

  const problemList = [
    'قیمت و موجودی',
    'ارسال کالا',
    'مدل و برند با مشخصات تفاوت دارد',
    'کالا غیر اصل است',
    'پیگیری بعد از خرید',
    'مشکل دیگر',
  ];
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          className="w-full text-content-primary shadow-elevation2 text-labelSmall"
        >
          {t('reportProblem')}
        </Button>
      </DrawerTrigger>
      <DrawerContent
        className={`${isInputChecked ? 'h-[95%]' : 'h-full'} rounded-none pb-4`}
      >
        <DrawerHeader>
          <div
            className={cn('flex items-center gap-2', {
              'flex-row-reverse justify-between': isInputChecked,
            })}
          >
            {isInputChecked ? (
              <div className="flex size-8 items-center justify-center rounded-full bg-surface-tertiary">
                <Icon
                  onClick={() => setChecked(null)}
                  size={'small'}
                  iconClassName="text-content-primary"
                  name="cross"
                />
              </div>
            ) : (
              <DrawerClose className="size-10">
                <Icon iconClassName="text-content-primary" name="arrow-right" />
              </DrawerClose>
            )}
            <DrawerTitle className={!isInputChecked ? 'text-labelMedium' : ''}>
              {t(isInputChecked ? 'reportProblemWithPrice' : 'reportProblem')}
            </DrawerTitle>
          </div>
        </DrawerHeader>
        <DrawerDescription />
        <div className="px-4">
          {isInputChecked ? (
            <ReportErrorPrice />
          ) : (
            <>
              <div className="flex items-center py-3">
                <div className="relative size-[72px]">
                  <LazyImage
                    src="/images/phone.webp"
                    alt="store"
                    className="size-full"
                    width={56}
                    height={56}
                  />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-content-primary text-labelMedium">
                    بانی مد
                  </h2>
                  <p className="py-2 text-content-primary text-bodySmall">
                    گوشی موبایل اپل مدل iPhone 13 CH دو سیم کارت
                  </p>
                  <p className="pb-[9px] pt-px text-content-primary text-headlineSmall">
                    ۱‍۶۷,۰۰۰
                    <span className={cn('mr-1 text-labelXSmall')}>
                      {CURRENCY.IR}
                    </span>
                  </p>
                </div>
              </div>
              <p className="py-2 text-content-primary text-labellarge">
                گزارش شما مربوط به چه بخشی است؟
              </p>
              {problemList.map((problem, index) => (
                <div key={index} className="mr-[6px] flex gap-[21px] py-3">
                  <Checkbox
                    checked={checked === index}
                    onCheckedChange={() => handleToggleChecked(index)}
                    className="size-[22px] rounded-full border-2"
                  />
                  <div className="w-full space-y-5">
                    <p className="text-bodyMedium">{problem}</p>
                    {index < problemList.length - 1 && (
                      <Separator className="my-2 flex-1 border-b border-border-primary" />
                    )}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
};
