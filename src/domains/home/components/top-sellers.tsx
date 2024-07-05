import Image from "next/image"
import { Button, Carousel, CarouselContent, CarouselItem } from "@/components"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { SectionTitle } from "./section-title"

export function TopSellers() {
  return (
    <section className="my-4">
      <SectionTitle title="فروشندگان برتر" />
      <Carousel opts={{ direction: "rtl" }} className="mt-9">
        <CarouselContent className="gap-2.5">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="basis-[89%] pl-2">
              <Card>
                <div className="box-shadow-compare rounded-3xl">
                  <CardContent className="flex gap-1 p-6">
                    <div>
                      <Image src="/images/store.png" width={137} height={137} alt="store" />
                    </div>
                    <div className="flex flex-col">
                      <div className="flex gap-1">
                        <Image src="/images/store.png" width={68} height={58} alt="store" />
                        <Image src="/images/store.png" width={68} height={58} alt="store" />
                      </div>
                      <div className="mt-1 flex gap-1">
                        <Image src="/images/store.png" width={68} height={58} alt="store" />
                        <Image src="/images/store.png" width={68} height={58} alt="store" />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h4 className="text-[16px] font-medium">عنوان فروشکاه</h4>
                      <p className="text-base font-normal text-content-tertiary">تعداد محصولات برتر</p>
                    </div>
                    <Button variant="ghost">مشاهده</Button>
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
