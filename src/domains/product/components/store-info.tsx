import { Icon } from '@/shared/components';
import { CURRENCY } from '@/shared/constant';
import { Badge, Button, Separator } from '@/shared/ui';

export function StoreInfo() {
  return (
    <div>
      <div className="h-[78px] space-y-[2px]">
        <div className="flex items-center gap-3">
          <p className="text-labelSmall text-content-primary">دیجیاتو</p>
          <span className="text-bodySmall text-content-positive">۴.۵</span>
          <Icon name="chevron-up" />
        </div>
        <p className="text-bodySmall text-content-tertiary">تهران - اینترنتی</p>
      </div>
      <div className="h-[72px]">
        <h4 className="text-headlineXSmall text-content-primary">
          عضویت از ۴ ماه پیش
        </h4>
        <p className="pt-2 text-bodySmall text-content-secondary">
          گوشی موبایل اپل مدل iPhone 13 H دو سیم‌ کارت
        </p>
      </div>
      <div className="mb-3 mt-2 flex h-[56px] gap-3">
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
      <div className="flex items-center gap-2">
        <Badge
          variant="negative"
          className="space-x-[2px] text-bodyXSmall text-content-negative"
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
      <div className="flex gap-2 pt-2">
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
      <Separator className="mt-3 border-b border-border-primary text-displaySmall" />
      <div className="flex h-[56px] items-center justify-between p-3 px-4">
        <p className="text-labelMedium text-content-primary">
          <span className="text-bodyXXSmall">از</span> ۱‍۶۷,۰۰۰
          <span className="mr-1 text-bodyXXSmall">{CURRENCY.IR}</span>
        </p>
        <Button className="size-[32px] rounded-xl">
          <Icon iconClassName="text-content-invers" name="chevron-left" />
        </Button>
      </div>
    </div>
  );
}
