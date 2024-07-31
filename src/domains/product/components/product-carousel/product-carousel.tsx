'use client';
import Autoplay from 'embla-carousel-autoplay';
import { useBanners } from '@/domains/home/hooks';
import { Icon, LazyImage } from '@/shared/components';
import { Carousel, CarouselContent, CarouselItem } from '@/shared/ui';
import { SliderActions } from './slider-actions';

export function ProductCarousel() {
  const { setApi, scrollSnaps, scrollTo, selectedIndex } = useBanners();

  return (
    <section id="product-gallery" data-testid="product-gallery" className="">
      <Carousel
        opts={{ direction: 'rtl' }}
        plugins={[Autoplay({ delay: 3500 })]}
        setApi={setApi}
        className="relative my-4 flex items-end"
      >
        <div className="pr-[18px]">
          <Icon name="video-two-fill" iconClassName="text-content-tertiary " />
        </div>
        <CarouselContent className="py-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="flex size-[189px] justify-center"
            >
              <div className="size-[180px]">
                <LazyImage
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
