import { ChevronLeft } from "lucide-react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components"
import { Card, CardContent } from "@/components/ui/card"
import { SectionTitle } from "./section-title"

export function ResentViews() {
  return (
    <section>
      <SectionTitle title="بازدید‌های اخیر" />
      <Carousel opts={{ direction: "rtl" }} className="mt-9 w-full max-w-sm">
        <CarouselContent className="gap-2.5">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="basis-2/5 pl-2">
              <div className="relative">
                <Image src="/images/phone.png" alt="banner" width={101} height={99} />
                {index === 1 && (
                  <div className="absolute top-0 flex h-5 w-10 -translate-x-16 items-center justify-between gap-[2px] rounded-sm bg-gradient-to-r from-[#FF334B] via-[#FF223D] to-[#EC4C60] px-1">
                    <span className="text-[11px] font-semibold text-white">32%</span>
                    <Image objectFit="contain" src="svg/discount-fill.svg" width={10} height={10} alt="discount-fill" />
                  </div>
                )}
              </div>
              <div className="space-y-3">
                <p className="text-xs font-medium leading-6 text-content-primary">
                  گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت 
                </p>
                <p className="text-base font-medium text-content-primary"> از ۱۵۰۰۰۰ تومان </p>
                <p className="text-xs font-normal text-content-tertiary">در ۲۴ فروشگاه</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}
