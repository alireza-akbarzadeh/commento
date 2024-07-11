'use client';
import Autoplay from 'embla-carousel-autoplay';
import { useBanners } from '@/domains/home/hooks';
import { LazyImage } from '@/shared/components';
import { Carousel, CarouselContent, CarouselItem } from '@/shared/ui';
import { SliderActions } from './slider-actions';

export function ProductCarousel() {
  const { setApi, scrollSnaps, scrollTo, selectedIndex } = useBanners();

  return (
    <section id="product-gallery" data-testid="product-gallery">
      <Carousel
        opts={{ direction: 'rtl' }}
        plugins={[Autoplay({ delay: 3500 })]}
        setApi={setApi}
        className="relative my-4"
      >
        <CarouselContent className="">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="flex h-[221px] basis-full flex-col items-center justify-center"
            >
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
            </CarouselItem>
          ))}
        </CarouselContent>
        <SliderActions {...{ scrollSnaps, scrollTo, selectedIndex }} />
      </Carousel>
    </section>
  );
}
