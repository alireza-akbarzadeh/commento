'use client';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { useBanners } from '@/domains/home/hooks';
import { Icon, LazyImage } from '@/shared/components';
import { Carousel, CarouselContent, CarouselItem } from '@/shared/ui';
import { cn } from '@/shared/utils';

export function ProductCarousel() {
  const { scrollSnaps, scrollTo, selectedIndex, setApi } = useBanners();

  return (
    <section>
      <Carousel
        opts={{ direction: 'rtl' }}
        plugins={[Autoplay({ delay: 3500 })]}
        setApi={setApi}
        className="relative mt-9"
      >
        <CarouselContent className="">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="flex h-[271px] basis-full flex-col items-center justify-center"
            >
              <div className="relative m-auto h-[149px] w-[152px]">
                <div className="relative m-auto h-[149px] w-[152px]">
                  <LazyImage
                    src="/images/phone.png"
                    style={{
                      objectFit: 'cover',
                    }}
                    isLocal
                    quality={100}
                    alt="store"
                    fill
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-between">
          <Icon name="video-two-fill" />
          <div className="cursor-pointer">
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
                      'bg-black': index === selectedIndex,
                    },
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </Carousel>
    </section>
  );
}
