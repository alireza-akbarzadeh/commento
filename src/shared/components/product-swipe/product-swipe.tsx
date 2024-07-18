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
      <Carousel opts={{ direction: 'rtl', dragFree: true }}>
        <CarouselContent className="bg-content-inverse">
          {data.map((product, index) => (
            <CarouselItem key={index} className={`basis-[38%] p-2.5`}>
              <ProductItem product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}
