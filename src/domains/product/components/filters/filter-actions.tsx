"use client";

import { useTranslations } from "next-intl";
import { useEffect } from "react";

import { Icon } from "@/shared/components";
import { useQueryParams } from "@/shared/hooks";
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
} from "@/shared/ui";
import { cn } from "@/shared/utils";

export function FilterActions() {
  const t = useTranslations("Globals");
  const { appendQueryParam, searchParams, pathname, replace } =
    useQueryParams();
  const isOnline = searchParams.get("store") === "online";

  useEffect(() => {
    if (!searchParams.get("store")) {
      const params = new URLSearchParams(searchParams);
      params.set("store", "online");
      replace(`${pathname}?${params.toString()}`);
    }
  }, [searchParams, pathname, replace]);

  return (
    <div className="px-4">
      <div className="py-2">
        <p className="text-content-primary text-labellarge">{t("stores")}</p>
      </div>
      <div className="flex items-center gap-3 py-2">
        <Drawer>
          <DrawerTrigger>
            <div className="mt-1 flex size-[32px] items-center justify-center rounded-xl bg-surface-tertiary p-[6px]">
              <Icon name="slider-horizontal" size="small" />
            </div>
          </DrawerTrigger>
          <DrawerContent className="h-full rounded-none pb-4">
            <DrawerHeader className="flex items-center justify-between">
              <DrawerTitle className="text-headlineSmall">
                {t("filters")}
              </DrawerTitle>
              <DrawerClose className="size-8 rounded-full bg-surface-tertiary">
                <Icon size="small" name="cross" />
              </DrawerClose>
            </DrawerHeader>
            <div className="flex h-full flex-col justify-between">
              <div className="px-4">
                <div className="flex items-center justify-between py-3">
                  <span>شهر</span>
                  <div className="flex">
                    <span className="flex size-6 items-center justify-center rounded-full bg-surface-accentLight text-surface-accent">
                      ۲
                    </span>
                    <Icon
                      name="chevron-left"
                      iconClassName="text-content-tertiary"
                    />
                  </div>
                </div>
                <Separator className="my-2 border-b border-border-primary" />
                <p className="py-2 text-headlineSmall">وضعیت کارکرد</p>
                <div className="flex items-center gap-3 py-2">
                  <Button
                    variant="outline"
                    className="h-10 w-[72px] text-bodySmall"
                  >
                    نو
                  </Button>
                  <Button
                    variant="outline"
                    className="h-10 w-[88px] text-bodySmall"
                  >
                    اوپن‌باکس
                  </Button>
                  <Button
                    variant="outline"
                    className="h-10 w-[72px] text-bodySmall"
                  >
                    کارکرده
                  </Button>
                </div>
                <Separator className="my-2 border-b border-border-primary" />
                <p className="py-2 text-headlineSmall">شیوه ارسال</p>
                <div className="flex items-center gap-3 py-2">
                  <Button variant="outline" className="px-4 text-bodySmall">
                    ارسال فوری
                  </Button>
                  <Button variant="outline" className="px-4 text-bodySmall">
                    ارسال رایگان
                  </Button>
                </div>
                <Separator className="my-2 border-b border-border-primary" />
                <ul>
                  <li className="flex items-center justify-between py-3">
                    <p className="text-labelMedium">ضمانت آی‌تی‌بازار</p>
                    <Switch />
                  </li>
                  <li className="flex items-center justify-between py-3">
                    <p className="text-labelMedium">پرداخت درب منزل</p>
                    <Switch />
                  </li>
                  <li className="flex items-center justify-between py-3">
                    <p className="text-labelMedium">پرداخت درب منزل</p>
                    <Switch />
                  </li>
                </ul>
                <Separator className="my-2 border-b border-border-primary" />
              </div>
              <div className="mb-2 mt-6 flex items-center justify-between gap-3 px-4">
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
        <div className="flex h-10 w-full rounded-2xl border-[0.5px] border-border-primary p-1">
          <Button
            onClick={() =>
              appendQueryParam({
                key: "store",
                value: "online",
                options: { scroll: false },
              })
            }
            className={cn("h-8 w-full rounded-2xl", {
              "bg-surface-tertiary": isOnline,
            })}
            variant="ghost"
          >
            ۱۱ اینترنتی
          </Button>
          <Button
            onClick={() =>
              appendQueryParam({
                key: "store",
                value: "offline",
                options: { scroll: false },
              })
            }
            className={cn("h-8 w-full rounded-2xl", {
              "bg-surface-tertiary": !isOnline,
            })}
            variant="ghost"
          >
            ۱۲ حضوری
          </Button>
        </div>
      </div>
      <Separator className="my-2 border-b border-border-primary" />
    </div>
  );
}
