import { SectionTitle } from '@/domains/home/components';
import { Products } from '@/shared/config/mock-data';
import { Carousel, CarouselContent, CarouselItem } from '@/shared/ui';
import { ProductItem } from './product-item';

export type ProductSwiperops = {
  data: Products[];
  title?: string;
};

export function ProductSwipe(props: ProductSwiperops) {
  const { data, title } = props;

  return (
    <>
      {title && <SectionTitle title={title} />}
      <Carousel
        opts={{ direction: 'rtl', dragFree: true }}
        className="mt-9 w-full max-w-sm"
      >
        <CarouselContent className="gap-2.5">
          {data.map((product, index) => (
            <CarouselItem key={index} className={`basis-[39%] pl-2`}>
              <ProductItem key={index} product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}
