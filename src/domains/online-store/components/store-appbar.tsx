"use client";

import { useRouter } from "next/navigation";

import { FilterActions } from "@/domains/product/components";
import { Icon } from "@/shared/components";
import { Separator } from "@/shared/ui";

export function StoreAppbar() {
  const { back } = useRouter();

  return (
    <>
      <div className="flex cursor-pointer items-center justify-between px-3 py-2">
        <div className="flex items-center gap-2">
          <div className="cursor-pointer p-2">
            <Icon name="arrow-right" onClick={() => back()} />
          </div>
          <p className="text-content-primary text-labelMedium">
            ۱۱ فروشگاه حضوری
          </p>
        </div>
        <FilterActions />
      </div>
      <Separator className="border-b border-border-primary" />
    </>
  );
}
