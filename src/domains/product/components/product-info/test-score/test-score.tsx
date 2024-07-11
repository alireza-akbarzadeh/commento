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
import { ScoreItem } from './score-item';

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
            <Alert variant="positive" className="py-4">
              <AlertTitle>خوب ( ۸۵٪)</AlertTitle>
              <AlertDescription>
                امتیاز میانگین از ۱۶ تست در سایت‌های زیر
              </AlertDescription>
            </Alert>
            <Separator className="border-b border-border-primary py-2" />
            <div className="space-y-3">
              <ScoreItem
                badge={{ variant: 'positive' }}
                from="4.5"
                to="5"
                title="ترب"
                subtitle="شهریور ۱۴۰۳"
              />
              <Separator className="border-b border-border-primary py-2" />
              <ScoreItem
                badge={{ variant: 'positive' }}
                from="90"
                to="100"
                title="دیجیکالا"
                subtitle="شهریور ۱۴۰۳"
              />
              <Separator className="border-b border-border-primary py-2" />
              <ScoreItem
                badge={{ variant: 'positive' }}
                from="8.5"
                to="10"
                title="دیجیکالا"
                subtitle="شهریور ۱۴۰۳"
              />
              <Separator className="border-b border-border-primary py-2" />
              <ScoreItem
                badge={{ variant: 'warning' }}
                from="3.4"
                to="5"
                title="دیجیکالا"
                subtitle="شهریور ۱۴۰۳"
              />
              <Separator className="border-b border-border-primary py-2" />
              <ScoreItem
                badge={{ variant: 'negative' }}
                from="4"
                to="10"
                title="دیجیکالا"
                subtitle="شهریور ۱۴۰۳"
              />
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
