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
      <Carousel plugins={[Autoplay({ delay: 500 })]} setApi={setApi} opts={{ direction: "ltr" }} className="w-full">
        <CarouselContent className="relative">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index + 1}>
              <div className="">
                <Image src="/images/banner.png" alt="banner" width={328} height={207} />
              </div>
            </CarouselItem>
          ))}
          <div className="absolute bottom-0 left-1/2 z-20">
            <div className="flex flex-row items-center gap-2">
              {scrollSnaps?.map((snap, index) => (
                <span
                  key={index}
                  onClick={(event) => {
                    scrollTo(index)
                    event.stopPropagation()
                  }}
                  className={cn("h-2 w-2 rounded-full bg-green-400 transition-all duration-300 ease-in-out", {
                    "h-2 w-5": index === selectedIndex,
                    "bg-red-400": index === selectedIndex,
                  })}
                />
              ))}
            </div>
          </div>
        </CarouselContent>
      </Carousel>
    </section>
  )
}
