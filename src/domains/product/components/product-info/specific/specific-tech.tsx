import { Icon } from '@/shared/components';
import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/shared/ui';
import { SpecificItem } from './specific-item';

export function SpecificTech() {
  return (
    <>
      <Drawer>
        <DrawerTrigger>
          <Button
            variant="ghost"
            className="flex flex-col items-center hover:bg-none"
          >
            <Icon name="sticky-note" size="small" />
            <p className="text-labelXSmall text-content-primary">مشخصات فنی</p>
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="flex items-center justify-between">
            <DrawerTitle className="text-headlineSmall">مشخصات فنی</DrawerTitle>
            <DrawerClose>
              <Button className="size-8" variant="tertiary" roundedFull>
                <Icon size="small" name="cross" />
              </Button>
            </DrawerClose>
          </DrawerHeader>
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
