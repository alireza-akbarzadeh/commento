import { Icon } from "@/shared/components";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Separator,
} from "@/shared/ui";

import { SpecificItem } from "./specific-item";

export function SpecificTech() {
  return (
    <>
      <Drawer>
        <DrawerTrigger>
          <div className="flex flex-col items-center hover:bg-none">
            <Icon name="sticky-note" size="small" />
            <p className="text-content-primary text-labelXSmall">ویژگی‌ها</p>
          </div>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="flex items-center justify-between">
            <DrawerTitle className="text-headlineSmall">مشخصات فنی</DrawerTitle>
            <DrawerClose className="size-8 rounded-full bg-surface-tertiary">
              <Icon size="small" name="cross" />
            </DrawerClose>
          </DrawerHeader>
          <Separator className="my-2 border-b border-border-primary" />
          <div className="px-4">
            <div className="pt-2.5">
              <h5 className="text-headlineXSmall">مشخصات کلی</h5>
            </div>
            <div className="space-y-3">
              <SpecificItem
                title="ابعداد"
                subtitle="۸.۹×۷۶.۳×۱۶۴.۷۵ میلی‌متر"
              />
              <SpecificItem title="وزن" subtitle="۲۰۴ گرم" />
              <SpecificItem title="تعداد سیم کارت" subtitle="۲ عدد" />
              <SpecificItem
                title="ساختار بدنه"
                subtitle="جنس جلو و پشت از شیشه کار شده و پلاستیک فشرده وارداتی ویژه سامسونگ"
              />
              <SpecificItem
                border={false}
                title="توضیحات سیم کارت"
                subtitle="سایز نانو (۸.۸ × ۱۲.۳ میلی‌متر)"
              />
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
