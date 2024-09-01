import { Icon } from "@/shared/components";
import { useQueryParams } from "@/shared/hooks";
import { Button } from "@/shared/ui";

export function RowItem() {
  const title = "گوشی تلفن";
  const { replace } = useQueryParams();
  const handleRedirect = () => {
    replace(`/product-list?name=${title}`);
  };
  return (
    <Button
      variant="ghost"
      onClick={handleRedirect}
      className="m-0 flex h-12 w-full cursor-pointer items-center justify-start rounded-xl bg-surface-secondary p-0"
    >
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-[5.6px] pr-2">
          <Icon name="default" size="small" />
          <p className="text-content-primary text-labelXSmall">{title}</p>
        </div>
        <div className="px-1">
          <Icon name="chevron-left" size="small" />
        </div>
      </div>
    </Button>
  );
}
