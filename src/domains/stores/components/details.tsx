'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Icon, LazyImage } from '@/shared/components';
import { CURRENCY } from '@/shared/constant';
import { Badge, Button, Separator } from '@/shared/ui';

export const StoreDetails = () => {
  const { back } = useRouter();
  const items = ['ارسال رایگان ', 'اوپنباکس', 'تحویل فوری ', 'پرداخت در محل'];

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
        <div className="py-3">
          <h1 className="text-content-primary text-headlineSmall">
            موبایل سیتی خلیج فارس
          </h1>
          <div className="py-3">
            <p className="text-bodyMedium">
              تهران، خیابان اول، کوچه دوم، بن‌بست سوم، نبش کوچه آخر
            </p>
            <p className="text-bodySmall">۶ ماه عضویت در آی‌تی‌بازار</p>
          </div>
        </div>
        <div className="flex items-center justify-between py-2">
          <div className="flex flex-1 flex-col items-center">
            <Badge
              variant="positive"
              className="rounded-[15px] px-1.5 py-0 text-labelMedium"
            >
              <span className="text-content-positive">۴.۳%</span>
            </Badge>
            <span className="mt-1 text-labelXSmall">جزییات امتیاز</span>
          </div>
          <Separator
            orientation="vertical"
            className="h-[72px] border-[0.6px] border-border-primary"
          />
          <div className="flex flex-1 flex-col items-center">
            <Icon name="flag-fill" />
            <span className="mt-1 text-labelXSmall">گزارش خطا</span>
          </div>
        </div>
        <Separator
          orientation="horizontal"
          className="mb-2 mt-6 border-[0.6px] border-border-primary"
        />
        <div className="flex w-full py-3">
          <div className="flex h-[72px] w-20 items-center justify-center">
            <div className="relative size-[56px]">
              <LazyImage
                src="/images/phone.webp"
                alt="store"
                className="size-full"
                width={56}
                height={56}
              />
            </div>
          </div>
          <div className="flex flex-col-reverse">
            <h2 className="py-2 text-content-primary text-headlineXSmall">
              گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت
            </h2>
            <p className="pb-[9px] pt-px text-content-primary text-headlineSmall">
              <span className={'text-bodyXXSmall'}>از</span>
              ۱‍۶۷,۰۰۰
              <span className={'mr-1 text-labelXSmall'}>{CURRENCY.IR}</span>
            </p>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 pt-4">
            <Badge variant="negative" className="py-[2px]">
              <Icon
                size={12}
                name="arrow-upward-trend"
                iconClassName="text-content-negative"
              />
              <span className="mr-[2px] text-content-negative text-bodyXSmall">
                کمترین قیمت
              </span>
            </Badge>
            <Badge variant="warning" className="px-2 py-[2px]">
              <Icon size={12} name="thunder" />
              <span className="mr-[2px] text-content-primary text-bodyXSmall">
                آگهی
              </span>
            </Badge>
            <Badge variant="positive" className="px-2 py-[2px]">
              <Icon
                size={12}
                name="spark-small-fill"
                iconClassName="text-content-positive"
              />
              <span className="mr-[2px] text-content-positive text-bodyXSmall">
                ضمانت آی‌تی بازار
              </span>
            </Badge>
          </div>
          <div className="flex gap-2 pb-[12px] pt-2.5">
            {items.map((text) => (
              <div className="bg-surface-secondary p-1.5 px-2" key={text}>
                <p className="text-nowrap text-content-tertiary text-bodyXSmall">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <Separator
          orientation="horizontal"
          className="my-6 border-[0.6px] border-border-primary"
        />
        <div className="flex gap-3 py-2">
          <Button
            fullWidth
            className="flex h-14 items-center gap-2 rounded-2xl"
          >
            <Icon iconClassName="text-content-inverse" name="call-righ" />
            <span>تماس با فروشگاه</span>
          </Button>
          <Button
            variant="tertiary"
            fullWidth
            className="flex h-14 items-center gap-2 rounded-2xl"
          >
            <Icon name="camera" />
            <span>اینستاگرام</span>
          </Button>
        </div>
      </div>
    </>
  );
};
