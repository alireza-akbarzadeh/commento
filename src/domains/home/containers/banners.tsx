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
              <div style={{ width: '100%', minHeight: 207 }}>
                <LazyImage
                  src="/images/hero-banner.png"
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
        <div className="absolute bottom-5 right-1/2 translate-x-12 cursor-pointer">
          <div className="flex flex-row items-center gap-3">
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
                  'h-2 w-2 rounded-full bg-content-primary/30 transition-all duration-300 ease-in-out',
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
