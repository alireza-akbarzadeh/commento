import Link from "next/link";
import React from "react";
import { Icon, LazyImage } from "@/shared/components";
import { ProductImage } from "@/shared/components/product-swipe/product-image";
import { Button } from "@/shared/ui";
import { CompareCategory } from "./compare-category";

export function CompareItem() {
  const title = "گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ";
  const latinName = "iphone-13-ch-dual-sim";
  return (
    <div className="flex flex-col items-center justify-center gap-2 border border-border-primary px-[27px] py-4">
      <div className="relative flex size-[125px] items-center justify-center rounded-lg bg-surface-tertiary px-3 pb-[14px] pt-3">
        <div className="relative flex h-[101px] w-[99px]">
          <LazyImage
            src={"/images/phone.webp"}
            style={{
              objectFit: "cover",
              position: "absolute",
            }}
            quality={100}
            alt="banner"
            fill
          />
        </div>
      </div>
      <div className="max-w-[125px] space-y-1 pr-2">
        <p className="line-clamp-2 text-content-primary text-labelSmall">
          {title.length > 40 ? title.slice(0, 38).concat("...") : title}
        </p>
      </div>
      <Link
        href={`/product/${latinName}`}
        className="block rounded-full bg-surface-tertiary px-3 py-1 text-center text-labelSmall"
      >
        مشاهده محصول
      </Link>
    </div>
  );
}
