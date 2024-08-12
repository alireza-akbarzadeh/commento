import { Icon } from "@/shared/components";
import { cn } from "@/shared/utils";

type StoreRateProps = {
  toggleAction?: () => void;
  toggleInfo?: boolean;
};

export function StoreRate(props: StoreRateProps) {
  const { toggleAction, toggleInfo } = props;
  return (
    <div className="my-3 space-y-[2px] px-4">
      <div className="flex items-center gap-1">
        <p className="text-content-primary text-labelMedium">دیجیاتو</p>
        <span className="text-content-positive text-bodySmall">۴.۵</span>
      </div>
      <div className="flex items-center gap-1">
        <p className="mt-[2px] text-content-tertiary text-bodySmall">
          تهران . اینترنتی
        </p>
        <Icon
          name="chevron-down"
          onClick={toggleAction}
          iconClassName={cn("text-content-tertiary", {
            "rotate-180": toggleInfo,
          })}
        />
      </div>
    </div>
  );
}
