'use client';
import Autoplay from 'embla-carousel-autoplay';
import { useBanners } from '@/domains/home/hooks';
import { LazyImage } from '@/shared/components';
import { Carousel, CarouselContent, CarouselItem } from '@/shared/ui';
import { cn } from '@/shared/utils';

export function Banners() {
  const { scrollSnaps, scrollTo, selectedIndex, setApi } = useBanners();

  return (
    <section id="banner" data-testid="banner" className="my-2">
      <Carousel
        opts={{ direction: 'rtl', loop: true }}
        plugins={[Autoplay({ delay: 2500 })]}
        setApi={setApi}
        className="relative"
      >
        <CarouselContent className="p-0">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className={'basis-[88%]'}>
              <LazyImage
                src="/images/hero-banner.webp"
                className="tablet::h-[236px] size-full h-[207px] rounded-2xl object-contain mobile-l:h-[282px]"
                quality={100}
                alt="banner"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-[18px] right-1/2 translate-x-20 cursor-pointer">
          <div className="flex flex-row items-center gap-3.5">
            {scrollSnaps?.map((_, index) => (
              <button
                aria-label="slider-action"
                title="slider-action"
                key={index}
                onClick={(event) => {
                  scrollTo(index);
                  event.stopPropagation();
                }}
                className={cn(
                  'h-2 w-5 rounded-lg bg-content-primary/30 transition-all duration-300 ease-in-out',
                  {
                    'h-2 w-7': index === selectedIndex,
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
