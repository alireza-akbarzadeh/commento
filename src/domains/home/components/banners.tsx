"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components";

export function Banners() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <section className="my-3">
      <Carousel setApi={setApi} opts={{ loop: true, align: "start" }}>
        <CarouselContent>
          <CarouselItem>
            <Image
              src="/images/banner.png"
              alt="banner"
              width={328}
              height={207}
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/images/banner.png"
              alt="banner"
              width={328}
              height={207}
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/images/banner.png"
              alt="banner"
              width={328}
              height={207}
            />
          </CarouselItem>
          <CarouselNext />
          <CarouselPrevious />,
        </CarouselContent>
      </Carousel>
    </section>
  );
}
