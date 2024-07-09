import { Icon } from '@/shared/components';
import { Button, ScrollArea, ScrollBar } from '@/shared/ui';

export function SearchCategory() {
  return (
    <div className="py-2">
      <ScrollArea dir="rtl" className="whitespace-nowrap border-b border-white">
        <div className="flex w-max gap-4">
          <div className="flex size-[32px] items-center justify-center rounded-full border">
            <Icon name="slider-horizontal" size="small" />
          </div>
          <Button
            variant="ghost"
            className="w-[126px] border border-border-primary"
          >
            خرید حضوری
          </Button>
          <Button
            className="flex gap-[6px] border border-border-primary px-4 py-2 text-bodySmall"
            variant="ghost"
          >
            <span>دسته بندی</span>
            <Icon name="chevron-down" size="small" />
          </Button>
          <Button
            variant="ghost"
            className="w-[126px] border border-border-primary"
          >
            وضعیت کارکرد
          </Button>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
