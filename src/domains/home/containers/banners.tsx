"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useBanners } from "@/domains/home/hooks";

import { Carousel, CarouselContent, CarouselItem } from "@/shared/ui";
import { cn } from "@/shared/utils";

export function Banners() {
  const { scrollSnaps, selectedIndex, setApi } = useBanners();

  return (
    <section id="banner" data-testid="banner" className="my-2">
      <Carousel
        opts={{ direction: "rtl", loop: true }}
        plugins={[Autoplay({ delay: 2500 })]}
        setApi={setApi}
        className="relative"
      >
        <CarouselContent className="-ml-0">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="ml-2 basis-[328px]">
              <div className="relative aspect-video h-[207px] w-[328px] overflow-hidden">
                <Image
                  src="/images/hero-banner.webp"
                  fill
                  sizes="100wv"
                  className="rounded-2xl object-fill"
                  priority
                  alt="banner"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-[12px] right-1/2 translate-x-20">
          <div className="flex flex-row items-center gap-3.5">
            {scrollSnaps?.map((_, index) => (
              <div
                key={index}
                className={cn(
                  "size-2 rounded-lg bg-content-primary/30 transition-all duration-300 ease-in-out",
                  {
                    "h-1.5 w-5": index === selectedIndex,
                    "bg-white": index === selectedIndex,
                  },
                )}
              />
            ))}
          </div>
        </div>
      </Carousel>
    </section>
  );
}
