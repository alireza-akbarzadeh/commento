import { products } from '@/shared/config';
import { Carousel, CarouselContent } from '@/shared/ui';
import { ComparetaionItem } from './comparetaion-item';
import { SectionTitle } from '../../components/section-title';

export function Comparetaion() {
  return (
    <section id="compration" data-testid="compration" className="bg-layout">
      <SectionTitle title="مقایسه‌های من" />
      <Carousel opts={{ direction: 'rtl', dragFree: true }} className="pb-3">
        <CarouselContent className="px-4">
          {products.map((product, index) => (
            <ComparetaionItem key={index} product={product} />
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
