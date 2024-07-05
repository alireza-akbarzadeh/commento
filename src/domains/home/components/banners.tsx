"use client"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { useCallback, useEffect, useState } from "react"
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function Banners() {
  const [embla, setApi] = useState<CarouselApi>()

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollTo = useCallback((index: number) => embla && embla.scrollTo(index), [embla])

  const onSelect = useCallback(() => {
    if (!embla) return
    setSelectedIndex(embla.selectedScrollSnap())
  }, [embla, setSelectedIndex])

  useEffect(() => {
    if (!embla) return
    onSelect()
    setScrollSnaps(embla.scrollSnapList())
    embla.on("select", onSelect)
  }, [embla, setScrollSnaps, onSelect])

  return (
    <section className="my-3">
      <Carousel
        opts={{ direction: "rtl" }}
        plugins={[Autoplay({ delay: 2500 })]}
        setApi={setApi}
        className="relative mt-9"
      >
        <CarouselContent className="gap-2.5">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="basis-[95%] pl-2">
              <div className="box-shadow-compare rounded-3xl">
                <div>
                  <Image src="/images/banner.png" width={328} height={207} alt="store" />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-4 right-1/2 translate-x-16">
          <div className="flex flex-row items-center gap-2">
            {scrollSnaps?.map((_, index) => (
              <span
                key={index}
                onClick={(event) => {
                  scrollTo(index)
                  event.stopPropagation()
                }}
                className={cn("h-2 w-2 rounded-full bg-black/30 transition-all duration-300 ease-in-out", {
                  "h-2 w-5": index === selectedIndex,
                  "bg-white": index === selectedIndex,
                })}
              />
            ))}
          </div>
        </div>
      </Carousel>
    </section>
  )
}
