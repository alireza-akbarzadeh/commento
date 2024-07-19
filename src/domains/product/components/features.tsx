'use client';
import { useState } from 'react';
import { Icon } from '@/shared/components';
import {
  Button,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  ScrollArea,
  ScrollBar,
} from '@/shared/ui';
import { Checkbox } from '@/shared/ui/checkbox';

export function Features() {
  const [openSheet, setOpenSheet] = useState<boolean>(false);
  const toggleSheet = () => setOpenSheet(!openSheet);
  return (
    <>
      <ScrollArea
        dir="rtl"
        className="whitespace-nowrap border-b border-white bg-surface-primary py-2"
      >
        <div className="flex w-max gap-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <Button
              variant="secondary"
              onClick={() => setOpenSheet(index === 1)}
              key={index}
              className="flex flex-col items-start rounded-md p-1 ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            >
              <h4 className="px-2 text-bodyXSmall text-content-tertiary">
                {index % 2 ? 'فناوری صفحه نمایش' : 'رنگ'}
              </h4>
              <p className="px-2 text-bodyXSmall text-content-primary">
                {index % 2 ? 'AMOLED' : 'مشکی'}
              </p>
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <Drawer open={openSheet}>
        <DrawerContent onClickOverlay={toggleSheet} className="h-[300px]">
          <DrawerHeader className="flex items-center justify-between">
            <DrawerTitle className="text-headlineSmall">
              فناوری صفحه نمایش{' '}
            </DrawerTitle>
            <Button
              onClick={toggleSheet}
              className="size-8"
              variant="tertiary"
              roundedFull
            >
              <Icon size="small" name="cross" />
            </Button>
          </DrawerHeader>
          <div className="mt-3 flex flex-col gap-3 px-[25px]">
            <div className="flex items-center justify-between">
              <p className="text-labelMedium text-content-primary">AMOLED</p>
              <Checkbox className="rounded-full" />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-labelMedium text-content-primary">
                SUPER AMOLED
              </p>
              <Checkbox className="rounded-full" />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-labelMedium text-content-primary">OLED</p>
              <Checkbox className="rounded-full" />
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
