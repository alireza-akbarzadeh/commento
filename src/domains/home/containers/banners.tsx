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
        className="relative min-h-[236px] mobile-m:min-h-[264px] mobile-l:min-h-[290px] tablet:min-h-[335px]"
      >
        <CarouselContent className="p-0">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className={'basis-[88%]'}>
              <div style={{ width: '100%' }}>
                <LazyImage
                  src="/images/hero-banner.webp"
                  style={{
                    borderRadius: 16,
                    objectFit: 'contain',
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
        <div className="absolute bottom-[68px] right-1/2 translate-x-20 cursor-pointer">
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
