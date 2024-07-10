import { SearchCategory } from '@/domains/search/components/search-category';
import { Icon } from '@/shared/components';
import { Button, ScrollArea, ScrollBar, Separator } from '@/shared/ui';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/shared/ui';
// check if we can create a components for both src/domains/search/components/search-category.tsx
export function ProductActions() {
  return (
    <>
      <div className="py-2">
        <ScrollArea
          dir="rtl"
          className="whitespace-nowrap border-b border-content-inverse"
        >
          <div className="flex w-max gap-4">
            <div className="mt-1 flex size-[32px] items-center justify-center rounded-full border">
              <Icon name="slider-horizontal" size="small" />
            </div>
            <Button
              variant="ghost"
              className="w-[126px] border border-border-primary"
            >
              خرید حضوری
            </Button>
            <Drawer>
              <DrawerTrigger asChild>
                <Button
                  className="flex gap-[6px] border border-border-primary px-4 py-2 text-bodySmall"
                  variant="ghost"
                >
                  <span>دسته بندی</span>
                  <Icon name="chevron-down" size="small" />
                </Button>
              </DrawerTrigger>
              <DrawerContent noOverlay>
                <DrawerContent>
                  <div className="mx-auto w-full">
                    <DrawerHeader>
                      <DrawerTitle>Move Goal</DrawerTitle>
                      <DrawerDescription>
                        Set your daily activity goal.
                      </DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                      <Button>Submit</Button>
                      <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </div>
                </DrawerContent>
              </DrawerContent>
            </Drawer>
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
      <Separator className="border-b border-border-primary text-displaySmall" />
    </>
  );
}
