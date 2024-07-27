import { Icon } from '@/shared/components';
import { Button, ScrollArea, ScrollBar } from '@/shared/ui';
import { FilterProduct } from './filter-product/filter-product';

export function FilterProductList() {
  return (
    <div className="py-2">
      <ScrollArea
        dir="rtl"
        className="whitespace-nowrap border-b border-content-inverse"
      >
        <div className="flex w-max items-center gap-4 pr-4">
          <FilterProduct />
          <Button
            variant="ghost"
            className="h-8 rounded-lg border border-border-primary text-bodySmall"
          >
            خرید حضوری
          </Button>
          <Button
            className="h-8 gap-[6px] border border-border-primary text-bodySmall"
            variant="ghost"
          >
            <span>دسته بندی</span>
            <Icon name="chevron-down" size="small" />
          </Button>
          <Button
            variant="ghost"
            className="h-8 border border-border-primary text-bodySmall"
          >
            وضعیت کارکرد
          </Button>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
