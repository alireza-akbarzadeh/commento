import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem } from "@/components"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type FavoritesPropsType = {
  title: string
  mode?: "dark" | "light"
}

export function Favorites(props: FavoritesPropsType) {
  const { mode = "dark", title } = props
  return (
    <section className="my-4">
      <div className="mb-5 mt-8">
        <p className="text-xl font-semibold leading-[30px] text-content-primary">
          {title}
          <span className="text-content-tertiary"> بر اساس آخرین بازدیدها</span>
        </p>
      </div>
      <Carousel opts={{ direction: "rtl" }} className="mt-9">
        <CarouselContent className="gap-2.5">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="basis-[89%] pl-2">
              <Card>
                <div
                  className={cn("box-shadow-compare rounded-3xl", {
                    "bg-black": mode === "dark",
                    "bg-white": mode === "light",
                  })}
                >
                  <CardContent className="flex flex-col gap-2.5 p-6">
                    <div className="flex flex-col items-center justify-between">
                      <ul className="flex flex-col items-start gap-y-3">
                        <li>
                          <p
                            className={cn("text-base font-normal text-content-secondary", {
                              "text-content-tertiary": mode === "light",
                            })}
                          >
                            در ۱۷ فروشگاه
                          </p>
                        </li>
                        <li>
                          <p
                            className={cn("text-xl font-semibold text-content-secondary", {
                              "text-content-primary": mode === "light",
                            })}
                          >
                            آیپد پرو مکس
                          </p>
                        </li>
                        <li>
                          <p
                            className={cn("text-base font-normal text-content-secondary", {
                              "text-content-primary": mode === "light",
                            })}
                          >
                            قیمت تضمین شده آی تی از ۹۰ هزار تا ۸ میلیون تومان
                          </p>
                        </li>
                      </ul>
                      <div className="relative">
                        <Image
                          src={`/images/${mode === "dark" ? "ipad" : "watch"}.png`}
                          alt="phone"
                          layout="responsive"
                          width={309}
                          height={450}
                          className="size-full object-contain"
                        />
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}
