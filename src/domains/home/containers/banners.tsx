'use client';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from '@/components';
import { cn } from '@/lib/utils';
import { useBanners } from '../hooks';

export function Banners() {
  const { scrollSnaps, scrollTo, selectedIndex, setApi } = useBanners();

  return (
    <section className="my-3">
      <Carousel
        opts={{ direction: 'rtl' }}
        plugins={[Autoplay({ delay: 2500 })]}
        setApi={setApi}
        className="relative mt-9"
      >
        <CarouselContent className="gap-2.5">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="basis-[95%] pl-2">
              <div className="rounded-3xl">
                <div>
                  <Image
                    src="/images/banner.png"
                    width={328}
                    height={207}
                    alt="store"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-4 right-1/2 translate-x-16 cursor-pointer">
          <div className="flex flex-row items-center gap-2">
            {scrollSnaps?.map((_, index) => (
              <span
                key={index}
                onClick={(event) => {
                  scrollTo(index);
                  event.stopPropagation();
                }}
                className={cn(
                  'h-2 w-2 rounded-full bg-black/30 transition-all duration-300 ease-in-out',
                  {
                    'h-2 w-5': index === selectedIndex,
                    'bg-white': index === selectedIndex,
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
