import { Icon } from '@/shared/components';
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Badge,
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Separator,
} from '@/shared/ui';
import { ScoreItem, SpecificItem } from './score-item';

export function TestScore() {
  return (
    <>
      <Drawer>
        <DrawerTrigger>
          <div className="flex flex-col items-center">
            <Badge variant="positive">۴.۳</Badge>
            <p className="text-labelXSmall text-content-primary">نمره تست</p>
          </div>
        </DrawerTrigger>
        <DrawerContent className="h-[98%]">
          <DrawerHeader className="flex items-center justify-between">
            <DrawerTitle>نمره تست محصول</DrawerTitle>
            <DrawerClose>
              <Button className="size-8" variant="tertiary" roundedFull>
                <Icon size="small" name="cross" />
              </Button>
            </DrawerClose>
          </DrawerHeader>
          <div className="px-4">
            <div className="pt-2.5">
              <h5 className="text-headlineXSmall">نمره تست محصول</h5>
            </div>
            <Alert>
              <AlertTitle>خوب ( ۸۵٪)</AlertTitle>
              <AlertDescription>
                امتیاز میانگین از ۱۶ تست در سایت‌های زیر
              </AlertDescription>
            </Alert>
            <Separator className="border-b border-border-primary pb-2 pt-4" />
            <div className="space-y-3">
              <ScoreItem title="ابعداد" subtitle="۸.۹×۷۶.۳×۱۶۴.۷۵ میلی‌متر" />
              <ScoreItem title="وزن" subtitle="۲۰۴ گرم" />
              <ScoreItem title="تعداد سیم کارت" subtitle="۲ عدد" />
              <ScoreItem
                title="ساختار بدنه"
                subtitle="جنس جلو و پشت از شیشه کار شده و پلاستیک فشرده وارداتی ویژه سامسونگ"
              />
              <ScoreItem
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
