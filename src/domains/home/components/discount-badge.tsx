import { Icon } from '@/shared/components';

type DiscountBadgePropsType = {
  discount: number;
};

export function DiscountBadge(props: DiscountBadgePropsType) {
  const { discount } = props;
  return (
    <div className="bg-surface-gradient-brand absolute top-2 -translate-x-8 rounded-[6px]">
      <div className="flex items-center justify-between">
        <span className="mx-1 text-[11px] font-semibold text-content-inverse">
          {`${discount}%`}
        </span>
        <Icon
          style={{ width: '12px', height: '12px' }}
          iconClassName="text-content-inverse ml-1"
          // TODO : change this with discount-fill icon
          name="coupon-puched-fill"
        />
      </div>
    </div>
  );
}
