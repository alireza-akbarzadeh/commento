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
          <Button
            variant="ghost"
            className="flex flex-col items-center hover:bg-none"
          >
            <Badge variant="positive">۴.۳</Badge>
            <p className="text-content-primary">نمره تست</p>
          </Button>
        </DrawerTrigger>
        <DrawerContent className="pb-4">
          <DrawerHeader className="flex items-center justify-between">
            <DrawerTitle className="text-headlineSmall">
              نمره تست محصول
            </DrawerTitle>
            <DrawerClose>
              <Button className="size-8" variant="tertiary" roundedFull>
                <Icon size="small" name="cross" />
              </Button>
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
        </DrawerContent>
      </Drawer>
    </>
  );
}
