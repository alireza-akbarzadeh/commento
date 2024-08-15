"use client";

import { useQueryParams } from "@/shared/hooks";
import { Button, Separator, Switch } from "@/shared/ui";

import { FilterRow } from "./filter-row";

export function FilterContent() {
  const { toggleQueryParam, searchParams } = useQueryParams();

  return (
    <div className="px-4">
      <p className="py-2 text-headlineXSmall">مرتب‌سازی</p>
      <div className="flex items-center gap-3 py-2">
        <Button variant="outline" className="h-10 w-[72px] text-bodySmall">
          مرتبط‌ترین
        </Button>
        <Button variant="outline" className="h-10 w-[88px] text-bodySmall">
          ارزان‌ترین
        </Button>
        <Button variant="outline" className="h-10 w-[72px] text-bodySmall">
          گران‌ترین
        </Button>
      </div>
      <Separator className="my-3 border-b border-border-primary" />
      <div>
        {Array.from({ length: 53 }).map((_, index) => (
          <FilterRow key={index} title="محدوده قیمت" />
        ))}
      </div>
      <Separator className="my-2 border-b border-border-primary" />
      <ul>
        <li className="flex items-center justify-between py-3">
          <p className="text-labelMedium">خرید حضوری</p>
          <Switch
            onChange={() => toggleQueryParam("buy")}
            defaultChecked={searchParams.has("buy")}
          />
        </li>
        <li className="flex items-center justify-between py-3">
          <p className="text-labelMedium">خرید قسطی</p>
          <Switch />
        </li>
      </ul>
      <Separator className="my-2 border-b border-border-primary" />
    </div>
  );
}
