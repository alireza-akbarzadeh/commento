import { ChevronLeft } from "lucide-react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem } from "@/components"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { DiscountBadge } from "./discount-badge"
import { SectionTitle } from "./section-title"

export function Comparetaion() {
  return (
    <section className="my-4">
      <SectionTitle title="مقایسه‌های من" />
      <Carousel opts={{ direction: "rtl" }} className="mt-9 w-full max-w-sm">
        <CarouselContent className="gap-2.5">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="basis-[89%] pl-2">
              <Card className="relative">
                <div className="box-shadow-compare rounded-md bg-white">
                  <CardContent className="flex gap-2.5 px-4 py-2">
                    <div className="flex flex-col items-center gap-y-3">
                      <Image src="/images/phone.png" alt="banner" width={101} height={99} />
                      {index === 1 && <DiscountBadge price="45%" />}
                      <p className="text-xs font-medium leading-6 text-content-primary">
                        گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت 
                      </p>
                    </div>
                    <div className="flex flex-col items-center gap-y-3">
                      <Image src="/images/phone.png" alt="banner" width={101} height={99} />
                      {index === 0 && (
                        <div className="absolute top-0 flex h-5 w-10 -translate-x-16 items-center justify-between gap-[2px] rounded-sm bg-gradient-to-r from-[#FF334B] via-[#FF223D] to-[#EC4C60] px-1">
                          <span className="text-[11px] font-semibold text-white">32%</span>
                          <Image
                            objectFit="contain"
                            src="svg/discount-fill.svg"
                            width={10}
                            height={10}
                            alt="discount-fill"
                          />
                        </div>
                      )}
                      <p className="text-xs font-medium leading-6 text-content-primary">
                        گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت 
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex w-full items-center justify-between">
                      <p className="text-base font-medium text-content-primary">مشاهده مقایسه</p>
                      <div className="flex items-center gap-[7.5px]">
                        <span className="mt-1 text-base font-semibold text-content-tertiary">۲</span>
                        <ChevronLeft className="size-4" />
                      </div>
                    </div>
                  </CardFooter>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}
