import { Icon } from "@/shared/components";
import { CURRENCY } from "@/shared/constant";
import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Input,
  Separator,
} from "@/shared/ui";

export function PriceNotify() {
  return (
    <>
      <Drawer>
        <DrawerTrigger>
          <div className="flex flex-col items-center hover:bg-none">
            <Icon name="arrow-upward-trend" size="small" />
            <p className="text-content-primary text-labelXSmall">نمودار قیمت</p>
          </div>
        </DrawerTrigger>
        <DrawerContent className="pb-6">
          <DrawerHeader className="flex items-center justify-between">
            <DrawerTitle className="text-headlineSmall">
              اطلاع از قیمت مدنظر
            </DrawerTitle>
            <DrawerClose>
              <Button className="size-8" variant="tertiary" roundedFull>
                <Icon size="small" name="cross" />
              </Button>
            </DrawerClose>
          </DrawerHeader>
          <div className="h-[144px] space-y-2 px-4 py-3">
            <p className="text-content-primary text-labelMedium">
              قیمت مدنظر خود را ثبت کنید
            </p>
            <Input
              type="number"
              end={
                <p className="px-3 text-content-tertiary text-bodySmall">
                  {CURRENCY.IR}
                </p>
              }
              className="border-border-inversePrimary ring-1 ring-border-inversePrimary"
            />
            <p className="text-content-secondary text-bodySmall">
              هر زمان به این قیمت رسید به شما اطلاع میدهیم.
            </p>
          </div>
          <Separator className="border-b border-border-primary py-[14px] text-displaySmall" />
          <div className="flex h-[52px] items-center justify-between px-4">
            <div className="flex-center">
              <p>کمترین قیمت فعلی</p>
            </div>
            <div className="flex-center gap-1">
              <p className="text-content-primary text-labelMedium">
                ۲۱,000,0000
              </p>
              <span className="text-content-primary text-labelXSmall">
                {CURRENCY.IR}
              </span>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
