import { Icon } from '@/shared/components';
import { cn } from '@/shared/utils';

type DiscountBadgePropsType = {
  discount: string;
  className?: string;
};

export function DiscountBadge(props: DiscountBadgePropsType) {
  const { discount, className } = props;
  return (
    <div
      className={cn(
        'bg-surface-gradient-brand flex-center absolute top-0 h-[20px] w-[39px] -translate-x-7 rounded-sm px-[21px]',
        className,
      )}
    >
      <div className="flex items-center justify-between gap-[2px]">
        <span className="text-content-inverse text-tiny">{`%${discount}`}</span>
        <Icon
          size={12}
          iconClassName="text-content-inverse mb-[2px]"
          // TODO : change this with discount-fill icon
          name="coupon-puched-fill"
        />
      </div>
    </div>
  );
}
