'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Icon } from '@/shared/components';
import { Badge, Button, Separator } from '@/shared/ui';

export const StoreDetails = () => {
  const { back } = useRouter();
  return (
    <>
      <div className="h-[56px] px-3 py-2">
        <Icon onClick={back} name="arrow-right" />
      </div>
      <div className="relative h-[180px] w-full">
        <Image
          src="/images/map.png"
          alt="map"
          className="size-full object-cover"
          sizes="100%"
          fill
        />
      </div>
      <div className="mt-4 px-4">
        <div>
          <h1 className="text-content-primary text-headlineSmall">
            موبایل سیتی خلیج فارس
          </h1>
          <address className="text-bodyMedium">
            تهران، خیابان اول، کوچه دوم، بن‌بست سوم، نبش کوچه آخر
          </address>
          <p className="text-bodySmall">۶ ماه عضویت در آی‌تی‌بازار</p>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col items-center">
            <Badge
              variant="positive"
              className="rounded-[15px] px-1.5 py-0 text-labelMedium"
            >
              <span className="text-content-positive">۴.۳%</span>
            </Badge>
            <span>جزییات امتیاز</span>
          </div>
          <Separator
            orientation="vertical"
            className="h-[40px] border-[0.6px] border-border-primary text-displaySmall"
          />
          <div className="flex flex-col items-center">
            <Icon name="flag-fill" />
            <span>گزارش خطا</span>
          </div>
        </div>
        <div className="flex gap-3">
          <Button
            fullWidth
            className="flex h-10 items-center gap-2 rounded-2xl"
          >
            <Icon iconClassName="text-content-inverse" name="call-righ" />
            <span>تماس با فروشگاه</span>
          </Button>
          <Button
            variant="tertiary"
            fullWidth
            className="flex h-10 items-center gap-2 rounded-2xl"
          >
            <Icon name="camera" />
            <span>اینستاگرام</span>
          </Button>
        </div>
      </div>
    </>
  );
};
