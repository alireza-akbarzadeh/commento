"use client";

import { useTranslations } from "next-intl";

import { Icon } from "@/shared/components";
import { useQueryParams } from "@/shared/hooks";
import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/shared/ui";
import { cn, formatNumberToPersian } from "@/shared/utils";

import { FilterBrand } from "./filter-brand";
import { FilterContent } from "./filter-content";

type FilterProductProps = {
  activeFilterCount: number;
};

export function FilterProduct(props: FilterProductProps) {
  const { activeFilterCount } = props;
  const t = useTranslations("Globals");
  const { clearQueryParams, getQueryParam, toggleQueryParam } =
    useQueryParams();
  const tab = getQueryParam("tab");
  const isFiltered = tab === "1";

  return (
    <Drawer>
      <DrawerTrigger className="relative pr-4">
        <div
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-xl bg-surface-tertiary p-2",
            {
              "border-2 border-content-primary": Boolean(activeFilterCount),
            },
          )}
        >
          {activeFilterCount > 0 && (
            <div className="absolute -left-1 top-2 flex size-[18px] items-center justify-center rounded-full border border-border-primary bg-content-primary pt-[2px] text-[10px] text-content-inverse">
              {formatNumberToPersian(activeFilterCount)}
            </div>
          )}
          <Icon name="slider-horizontal" size="small" />
        </div>
      </DrawerTrigger>
      <DrawerContent className="h-full rounded-none pb-4">
        <DrawerHeader className="flex items-center justify-between">
          {isFiltered ? (
            <>
              <Icon
                name="arrow-right"
                onClick={() => toggleQueryParam("tab")}
              />
              <DrawerClose onClick={() => clearQueryParams()}>
                {t("delete")}
              </DrawerClose>
            </>
          ) : (
            <>
              <DrawerTitle className="text-headlineSmall">
                {t("filters")}
              </DrawerTitle>
              <DrawerClose>
                <div className="flex-center size-8 rounded-full bg-surface-tertiary">
                  <Icon size="small" name="cross" />
                </div>
              </DrawerClose>
            </>
          )}
        </DrawerHeader>
        <DrawerDescription />
        <div className="min-h-[calc(100dvh -100px)] overflow-auto">
          {isFiltered ? <FilterBrand /> : <FilterContent />}
        </div>
        <div className="sticky bottom-0 flex w-full items-center justify-between gap-3 bg-content-inverse px-4 pt-6">
          <Button
            fullWidth
            className="h-[52px] rounded-xl py-3 text-labellarge"
          >
            مشاهده نتایج
          </Button>
          <DrawerClose
            onClick={() => clearQueryParams()}
            className="h-[52px] w-full rounded-xl py-3 text-labellarge"
          >
            حذف فیلتر‌ها
          </DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
