import { Icon } from '@/shared/components';
import { Badge, Button } from '@/shared/ui';
import { ActionButtons } from './action-button';
import { InfoBoxes } from './Info-Boxes';
import { PriceAction } from './price-action';
import { StoreRate } from './store-rate';
import { FilterActions } from '../filters/filter-actions';

type StoreCardProps = {
  hasFilter?: boolean;
  viewStore?: boolean;
  hasActionButton?: boolean;
};

export function StoreCard(props: StoreCardProps) {
  const {
    hasFilter = false,
    viewStore = false,
    hasActionButton = false,
  } = props;
  return (
    <div className="bg-content-inverse px-4 py-2">
      {hasFilter && <FilterActions />}
      <StoreRate />
      <div className="my-3">
        <h4 className="text-content-primary text-headlineXSmall">
          عضویت از ۴ ماه پیش
        </h4>
        <p className="py-2 text-content-secondary text-bodySmall">
          گوشی موبایل اپل مدل iPhone 13 H دو سیم‌ کارت
        </p>
      </div>
      {hasActionButton && <ActionButtons />}
      <div className="flex items-center gap-2">
        <Badge variant="negative" className="px-2 py-[2px]">
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
      <InfoBoxes />
      <PriceAction />
      {viewStore && (
        <div className="py-4">
          <Button fullWidth className="rounded-xl">
            نمایش همه روی نقشه‌
          </Button>
        </div>
      )}
    </div>
  );
}
