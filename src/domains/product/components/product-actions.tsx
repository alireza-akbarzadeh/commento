import { ScrollArea } from '@radix-ui/react-scroll-area';
import { Icon } from '@/shared/components';
import { Button, ScrollBar, Separator } from '@/shared/ui';

export function ProductActions() {
  return (
    <>
      <div className="h-[56px] py-2">
        <ScrollArea
          dir="rtl"
          className="whitespace-nowrap border border-content-inverse"
        >
          <div className="flex w-max gap-4">
            <div className="mt-1 flex size-[32px] items-center justify-center rounded-full border">
              <Icon name="slider-horizontal" size="small" />
            </div>
            <Button
              variant="ghost"
              className="border border-border-primary px-4 py-2 text-bodySmall"
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
              className="border border-border-primary px-4 py-2 text-bodySmall"
            >
              وضعیت کارکرد
            </Button>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
      <Separator className="my-4 border-b border-border-primary text-displaySmall" />
    </>
  );
}
