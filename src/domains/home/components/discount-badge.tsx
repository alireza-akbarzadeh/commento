import { Icon } from '@/shared/components';

type DiscountBadgePropsType = {
  price: string;
};

export function DiscountBadge(props: DiscountBadgePropsType) {
  const { price } = props;
  return (
    <div className="bg-surface-gradient-brand absolute top-2 -translate-x-8 rounded-[6px]">
      <div className="flex items-center justify-between">
        <span className="text-content-inverse mx-1 text-[11px] font-semibold">
          {price}
        </span>
        <Icon
          noSize
          iconClassName="w-3 h-3 text-content-inverse ml-1"
          // TODO : change this with discount-fill icon
          name="coupon-puched-fill"
        />
      </div>
    </div>
  );
}
