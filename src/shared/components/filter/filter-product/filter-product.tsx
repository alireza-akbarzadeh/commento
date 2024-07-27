import { useTranslations } from 'next-intl';
import React from 'react';
import { Icon } from '@/shared/components';
import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Separator,
  Switch,
} from '@/shared/ui';
import { FilterRow } from './filter-row';

export function FilterProduct() {
  const t = useTranslations('Globals');
  return (
    <Drawer>
      <DrawerTrigger>
        <div className="flex size-8 items-center justify-center rounded-xl bg-surface-tertiary p-[10px]">
          <Icon name="slider-horizontal" size="small" />
        </div>
      </DrawerTrigger>
      <DrawerContent className="h-full rounded-none pb-4">
        <DrawerHeader className="flex items-center justify-between">
          <DrawerTitle className="text-headlineSmall">
            {t('filters')}
          </DrawerTitle>
          <DrawerClose>
            <Button className="size-8" variant="tertiary" roundedFull>
              <Icon size="small" name="cross" />
            </Button>
          </DrawerClose>
        </DrawerHeader>
        <div className="flex h-full flex-col justify-between">
          <div className="px-4">
            <Separator className="my-2 border-b border-border-primary" />
            <p className="py-2 text-headlineSmall">مرتب‌سازی</p>
            <div className="flex items-center gap-3 py-2">
              <Button
                variant="outline"
                className="h-10 w-[72px] text-bodySmall"
              >
                مرتبط‌ترین
              </Button>
              <Button
                variant="outline"
                className="h-10 w-[88px] text-bodySmall"
              >
                ارزان‌ترین
              </Button>
              <Button
                variant="outline"
                className="h-10 w-[72px] text-bodySmall"
              >
                گران‌ترین
              </Button>
            </div>
            <Separator className="my-2 border-b border-border-primary" />
            <div>
              <FilterRow title="دسته بندی" />
              <FilterRow title="محدوده قیمت" />
              <FilterRow title="نوع فروشنده" />
              <FilterRow title="وضعیت کارکرد" />
              <FilterRow title="حافظه داخلی" />
            </div>
            <Separator className="my-2 border-b border-border-primary" />
            <ul>
              <li className="flex items-center justify-between py-3">
                <p className="text-labelMedium">خرید حضوری</p>
                <Switch />
              </li>
              <li className="flex items-center justify-between py-3">
                <p className="text-labelMedium">خرید قسطی</p>
                <Switch />
              </li>
            </ul>
            <Separator className="my-2 border-b border-border-primary" />
          </div>
          <div className="mb-2 flex items-center justify-between gap-3 px-4">
            <Button
              fullWidth
              className="h-[52] rounded-xl py-3 text-labellarge"
            >
              مشاهده نتایج
            </Button>
            <Button
              fullWidth
              className="h-[52px] rounded-xl py-3 text-labellarge"
              variant="ghost"
            >
              حذف فیلتر‌ها
            </Button>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
