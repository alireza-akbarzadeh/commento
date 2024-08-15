"use client";

import { useState } from "react";
import { FilterProduct, Icon } from "@/shared/components";
import { useQueryParams } from "@/shared/hooks";
import { Button, ScrollArea, ScrollBar } from "@/shared/ui";
import { cn } from "@/shared/utils";
import { SelectCategory } from "./select-category";

export function FilterProductList() {
  const { toggleQueryParam, searchParams } = useQueryParams();
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const getActiveFilterCount = () => {
    const filterKeys = ["category", "status", "buy"];
    return filterKeys.reduce(
      (count, key) => count + (searchParams.has(key) ? 1 : 0),
      0,
    );
  };
  const activeFilterCount = getActiveFilterCount();

  return (
    <>
      <div className="flex py-2">
        <FilterProduct activeFilterCount={activeFilterCount} />
        <ScrollArea
          dir="rtl"
          className="relative overflow-visible whitespace-nowrap border-b border-content-inverse py-3"
        >
          <div className="flex w-max items-center gap-3 pr-4">
            <Button
              onClick={() => toggleQueryParam("buy")}
              variant="ghost"
              className={cn(
                "h-8 rounded-lg border border-border-primary text-bodySmall",
                {
                  "border-2 border-content-primary": searchParams.has("buy"),
                },
              )}
            >
              خرید حضوری
            </Button>
            <Button
              onClick={() => setOpenDrawer(true)}
              className={cn(
                "h-8 rounded-lg border border-border-primary text-bodySmall",
                {
                  "border-2 border-content-primary":
                    searchParams.has("category"),
                },
              )}
              variant="ghost"
            >
              <span>دسته بندی</span>
              <Icon name="chevron-down" size="small" />
            </Button>
            <Button
              onClick={() => toggleQueryParam("status")}
              variant="ghost"
              className={cn(
                "h-8 rounded-lg border border-border-primary text-bodySmall",
                {
                  "border-2 border-content-primary": searchParams.has("status"),
                },
              )}
            >
              وضعیت کارکرد
            </Button>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
      {openDrawer && <SelectCategory onClose={() => setOpenDrawer(false)} />}
    </>
  );
}
