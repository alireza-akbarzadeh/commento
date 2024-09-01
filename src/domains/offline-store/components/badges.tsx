import { Icon } from "@/shared/components";
import { Badge } from "@/shared/ui";

export function Badges() {
  return (
    <div className="flex items-center gap-2 pt-4">
      <Badge variant="negative" className="py-[2px]">
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
          ضمانت آیتی بازار
        </span>
      </Badge>
    </div>
  );
}
