'use client';
import { useBanners } from '@/domains/home/hooks';
import { LazyImage } from '@/shared/components';
import { Carousel, CarouselContent, CarouselItem } from '@/shared/ui';
import { cn } from '@/shared/utils';
import Autoplay from 'embla-carousel-autoplay';

export function Banners() {
  const { scrollSnaps, scrollTo, selectedIndex, setApi } = useBanners();

  return (
    <section
      id="banner"
      data-testid="banner"
      className="my-2 bg-surface-primary"
    >
      <Carousel
        opts={{ direction: 'rtl' }}
        plugins={[Autoplay({ delay: 2500 })]}
        setApi={setApi}
        className="relative"
      >
        <CarouselContent className="gap-2.5">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="basis-[95%] pl-2">
              <div className="relative h-[207px] w-[328px]">
                <LazyImage
                  src="/images/banner.png"
                  style={{
                    objectFit: 'cover',
                    borderRadius: 16,
                    position: 'absolute',
                  }}
                  isLocal
                  quality={100}
                  alt="banner"
                  fill
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-5 right-1/2 translate-x-12 cursor-pointer">
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
