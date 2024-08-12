"use client";

import Autoplay from "embla-carousel-autoplay";
import { useState } from "react";
import { useBanners } from "@/domains/home/hooks";

import { LazyImage } from "@/shared/components";
import { Carousel, CarouselContent, CarouselItem } from "@/shared/ui";

import { ProductMedia } from "./product-media";
import { SliderActions } from "./slider-actions";

export function ProductCarousel() {
  const { setApi, scrollSnaps, scrollTo, selectedIndex } = useBanners();
  const [tab, setTab] = useState<"pic" | "video" | "none">("none");

  return (
    <section id="product-gallery" data-testid="product-gallery" className="">
      <Carousel
        opts={{ direction: "rtl", loop: true }}
        plugins={[Autoplay({ delay: 3500 })]}
        setApi={setApi}
        className="relative my-4 flex items-end"
      >
        <ProductMedia tab={tab} setTab={setTab} />
        <CarouselContent className="py-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="flex size-[189px] justify-center"
            >
              <div className="size-[180px] cursor-pointer">
                <LazyImage
                  onClick={() => setTab("pic")}
                  src="/images/phone.webp"
                  className="object-contain"
                  quality={100}
                  alt="store"
                  fill
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <SliderActions {...{ scrollSnaps, scrollTo, selectedIndex }} />
      </Carousel>
    </section>
  );
}
