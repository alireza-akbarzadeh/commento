import { Icon } from '@/shared/components';
import { CURRENCY } from '@/shared/constant';
import { Badge, Button } from '@/shared/ui';
import { StoreRate } from './product-info/store-rate';

export function StoreInfo() {
  return (
    <>
      <StoreRate />
      <div className="mt-4 flex items-center gap-2">
        <Badge
          variant="negative"
          className="space-x-[2px] px-4 py-1.5 text-bodyXSmall text-content-negative"
        >
          <Icon
            size={12}
            name="arrow-upward-trend"
            iconClassName=" text-content-negative"
          />
          کمترین قیمت
        </Badge>
        <Badge
          variant="warning"
          className="px-4 py-1.5 text-bodyXSmall text-content-primary"
        >
          <Icon size={12} name="thunder" />
          آگهی
        </Badge>
        <Badge variant="positive" className="px-4 py-1.5">
          <Icon
            size={12}
            name="spark-small-fill"
            iconClassName="text-content-positive space-x-3"
          />
          <span className="text-bodyXSmall text-content-positive">
            ضمانت آی‌تی بازار
          </span>
        </Badge>
      </div>
      <div className="flex gap-2 pb-[12px] pt-2.5">
        <div className="bg-surface-secondary p-1.5 px-2">
          <p className="text-bodyXSmall text-content-tertiary">اوپن‌باکس</p>
        </div>
        <div className="bg-surface-secondary p-1.5 px-2">
          <p className="text-bodyXSmall text-content-tertiary">تحویل فوری</p>
        </div>
        <div className="bg-surface-secondary p-1.5 px-2">
          <p className="text-bodyXSmall text-content-tertiary">ارسال رایگان</p>
        </div>
        <div className="bg-surface-secondary p-1.5 px-2">
          <p className="text-bodyXSmall text-content-tertiary">
            پرداخت در محل{' '}
          </p>
        </div>
      </div>
      <div className="mb-2 mt-[2px] flex items-center justify-between border-y border-border-primary py-3">
        <p className="text-labelMedium text-content-primary">
          <span className="text-bodyXXSmall">از</span> ۱‍۶۷,۰۰۰
          <span className="mr-1 text-bodyXXSmall">{CURRENCY.IR}</span>
        </p>
        <Button className="size-[32px] rounded-xl">
          <Icon iconClassName="text-content-invers" name="chevron-left" />
        </Button>
      </div>
      <StoreRate />
      <div className="mt-2">
        <h4 className="text-headlineXSmall text-content-primary">
          عضویت از ۴ ماه پیش
        </h4>
        <p className="py-2 text-bodySmall text-content-secondary">
          گوشی موبایل اپل مدل iPhone 13 H دو سیم‌ کارت
        </p>
      </div>
      <div className="bg-layout my-2 flex gap-3 px-4">
        <Button
          variant="ghost"
          className="w-full text-labelSmall text-content-primary shadow-elevation2"
        >
          جزییات امتیاز
        </Button>
        <Button
          variant="ghost"
          className="w-full text-labelSmall text-content-primary shadow-elevation2"
        >
          جزییات امتیاز
        </Button>
      </div>
      <div className="bg-surface-secondary p-4">
        <Button
          className="rounded-xl text-labellarge text-content-inverse"
          fullWidth
        >
          نمایش همه فروشگاه‌ها
        </Button>
      </div>
    </>
  );
}
