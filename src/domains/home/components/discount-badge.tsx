import { Icon } from '@/shared/components';
import { cn } from '@/shared/utils';

type DiscountBadgePropsType = {
  discount: number;
  className?: string;
};

export function DiscountBadge(props: DiscountBadgePropsType) {
  const { discount, className } = props;
  return (
    <div
      className={cn(
        'bg-surface-gradient-brand absolute top-3 -translate-x-9 rounded-md',
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <span className="mx-1 text-content-inverse text-tiny">
          {`${discount}%`}
        </span>
        <Icon
          size={12}
          iconClassName="text-content-inverse ml-1"
          // TODO : change this with discount-fill icon
          name="coupon-puched-fill"
        />
      </div>
    </div>
  );
}
