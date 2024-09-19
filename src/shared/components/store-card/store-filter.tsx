"use client";

import { useTranslations } from "next-intl";
import { useEffect } from "react";

import { FilterActions } from "@/domains/product/components";
import { useQueryParams } from "@/shared/hooks";
import { Button, Separator } from "@/shared/ui";
import { cn } from "@/shared/utils";

export function StoreFilter() {
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
        <FilterActions />
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
