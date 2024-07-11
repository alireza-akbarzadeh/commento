import { products } from '@/shared/config';
import { Carousel, CarouselContent } from '@/shared/ui';
import { ComparetaionItem } from './comparetaion-item';
import { SectionTitle } from '../../components/section-title';

export function Comparetaion() {
  return (
    <section id="compration" data-testid="compration" className="my-2">
      <SectionTitle title="مقایسه‌های من" />
      <Carousel
        opts={{ direction: 'rtl', dragFree: true }}
        className="w-full max-w-sm"
      >
        <CarouselContent>
          {products.map((product, index) => (
            <ComparetaionItem key={index} product={product} />
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
