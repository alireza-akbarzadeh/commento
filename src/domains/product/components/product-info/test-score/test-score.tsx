import { Icon } from '@/shared/components';
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Badge,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Separator,
} from '@/shared/ui';
import { ScoreItem } from './score-item';

export function TestScore() {
  return (
    <>
      <Drawer>
        <DrawerTrigger>
          <div className="flex flex-col items-center hover:bg-none">
            <Badge
              variant="positive"
              className="rounded-[15px] px-1.5 py-0 text-labelMedium"
            >
              <span className="text-content-positive">۴.۳%</span>
            </Badge>
            <p className="text-content-primary">نمره تست</p>
          </div>
        </DrawerTrigger>
        <DrawerContent className="pb-4">
          <DrawerHeader className="flex items-center justify-between">
            <DrawerTitle className="text-headlineSmall">
              نمره تست محصول
            </DrawerTitle>
            <DrawerClose className="size-8 rounded-full bg-surface-tertiary">
              <Icon size="small" name="cross" />
            </DrawerClose>
          </DrawerHeader>
          <div className="px-4">
            <div className="mt-4">
              <Alert variant="positive">
                <AlertTitle>خوب ( ۸۵٪)</AlertTitle>
                <AlertDescription>
                  امتیاز میانگین از ۱۶ تست در سایت‌های زیر
                </AlertDescription>
              </Alert>
              <Separator className="border-b border-border-primary py-2" />
            </div>

            <ScoreItem
              badge={{ variant: 'positive' }}
              from="۴.۵"
              to="۵"
              title="ترب"
              subtitle="شهریور ۱۴۰۳"
            />
            <Separator className="border-b border-border-primary py-2" />
            <ScoreItem
              badge={{ variant: 'positive' }}
              from="۹۰"
              to="۱۰۰"
              title="دیجیکالا"
              subtitle="شهریور ۱۴۰۳"
            />
            <Separator className="border-b border-border-primary py-2" />
            <ScoreItem
              badge={{ variant: 'positive' }}
              from="۸.۵"
              to="۱۰"
              title="دیجیکالا"
              subtitle="شهریور ۱۴۰۳"
            />
            <Separator className="border-b border-border-primary py-2" />
            <ScoreItem
              badge={{ variant: 'warning' }}
              from="۳.۵"
              to="۵"
              title="دیجیکالا"
              subtitle="شهریور ۱۴۰۳"
            />
            <Separator className="border-b border-border-primary py-2" />
            <ScoreItem
              badge={{ variant: 'negative' }}
              from="۴"
              to="۱۰"
              title="دیجیکالا"
              subtitle="شهریور ۱۴۰۳"
            />
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
