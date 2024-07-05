import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem } from "@/components"
import { CURRENCY } from "@/lib/constant"
import { DiscountBadge } from "./discount-badge"
import { SectionTitle } from "./section-title"

export function ResentViews() {
  return (
    <section>
      <SectionTitle title="بازدید‌های اخیر" />
      <Carousel opts={{ direction: "rtl" }} className="mt-9 w-full max-w-sm">
        <CarouselContent className="gap-2.5">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="basis-[37%] pl-2">
              <div className="relative flex flex-col items-center justify-center pb-3">
                <Image src="/images/phone.png" className="rounded-md" alt="banner" width={101} height={99} />
                {index === 1 && <DiscountBadge price="32%" />}
              </div>
              <div className="space-y-3">
                <p className="text-xs font-medium leading-6 text-content-primary">
                  گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت 
                </p>
                <p className="text-base font-medium text-content-primary">
                  <span className="text-[11px]">از</span> ۱۵۰۰۰۰ <span className="text-[11px]">{CURRENCY.IR}</span>
                </p>
                <p className="font-n rmal text-xs text-content-tertiary">در ۲۴ فروشگاه</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}
