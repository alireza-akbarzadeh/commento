import { Icon } from '@/shared/components';
import { CURRENCY } from '@/shared/constant';
import { Button } from '@/shared/ui';
import { ProductCarousel } from './product-carousel';

export function ProductDomain() {
  return (
    <div>
      <div className="flex h-[56px] items-center justify-between">
        {/* TODO: add Close icon */}
        <Icon
          iconClassName="text-content-tertiary"
          name="timer"
          size="medium"
        />
        <div className="flex items-center gap-5">
          <Icon
            iconClassName="text-content-tertiary"
            name="arrow-up-arrow-down"
            size="medium"
          />
          <Icon
            iconClassName="text-content-tertiary"
            name="heart"
            size="medium"
          />
          <Icon
            iconClassName="text-content-tertiary"
            name="more-vertical-fill"
            size="medium"
          />
        </div>
      </div>
      <ProductCarousel />
      <div className="mt-5">
        <div className="space-y-4">
          <p>گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت</p>
          <p className="text-labelMedium text-content-primary">
            <span className="text-bodyXXSmall">از</span> ۱‍۶۷,۰۰۰
            <span className="mr-1 text-bodyXXSmall">{CURRENCY.IR}</span>
          </p>
          <Button className="h-[52px] w-full rounded-2xl">
            <span className="text-labellarge">در ۱۱ فروشگاه</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
