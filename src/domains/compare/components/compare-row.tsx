import Link from "next/link";
import React from "react";
import { Icon, LazyImage } from "@/shared/components";
import { ProductImage } from "@/shared/components/product-swipe/product-image";
import { Button } from "@/shared/ui";
import { CompareCategory } from "./compare-category";
import { CompareItem } from "./compare-item";

export function CompareRow() {
  const title = "گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ";
  const latinName = "iphone-13-ch-dual-sim";
  return (
    <div className="flex flex-col">
      <CompareItem />
      <CompareCategory title="ابعاد" value="۱۴۶.۷ × ۷۱.۵ × ۷.۶ میلیمتر" />
      <CompareCategory title="وزن" value="۱۷۴ گرم" />
      <CompareCategory
        title="صفحه نمایش"
        value="۶.۱ اینچ Super Retina XDR OLED"
      />
      <CompareCategory title="رزولوشن" value="۲۵۳۲ × ۱۱۷۰ پیکسل" />
      <CompareCategory title="دوربین اصلی" value="۵۰ مگاپیکسل سه‌گانه" />
    </div>
  );
}
