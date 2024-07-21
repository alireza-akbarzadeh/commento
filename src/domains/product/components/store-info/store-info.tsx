import { Icon } from '@/shared/components';
import { Badge } from '@/shared/ui';
import { ActionButtons } from './action-button';
import { InfoBoxes } from './Info-Boxes';
import { PriceAction } from './price-action';
import { StoreRate } from './store-rate';

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
      <InfoBoxes />
      <PriceAction />
      <StoreRate />
      <div className="mt-2">
        <h4 className="text-headlineXSmall text-content-primary">
          عضویت از ۴ ماه پیش
        </h4>
        <p className="py-2 text-bodySmall text-content-secondary">
          گوشی موبایل اپل مدل iPhone 13 H دو سیم‌ کارت
        </p>
      </div>
      <ActionButtons />
      <Badge variant="positive" className="px-2 py-[2px]">
        <Icon
          size={12}
          name="spark-small-fill"
          iconClassName="text-content-positive space-x-3"
        />
        <span className="text-bodyXSmall text-content-positive">
          ضمانت آی‌تی بازار
        </span>
      </Badge>
      <InfoBoxes />
      <PriceAction />
      {/* second part */}
      <StoreRate />
      <Badge variant="positive" className="px-2 py-[2px]">
        <Icon
          size={12}
          name="spark-small-fill"
          iconClassName="text-content-positive space-x-3"
        />
        <span className="text-bodyXSmall text-content-positive">
          ضمانت آی‌تی بازار
        </span>
      </Badge>
      <InfoBoxes />
      <PriceAction />
    </>
  );
}
