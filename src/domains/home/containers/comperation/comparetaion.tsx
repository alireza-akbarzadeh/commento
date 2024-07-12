import { products } from '@/shared/config';
import { Carousel, CarouselContent } from '@/shared/ui';
import { ComparetaionItem } from './comparetaion-item';
import { SectionTitle } from '../../components/section-title';

export function Comparetaion() {
  return (
    <section id="compration" data-testid="compration" className="bg-layout">
      <SectionTitle title="مقایسه‌های من" />
      <Carousel
        opts={{ direction: 'rtl', dragFree: true }}
        className="w-full max-w-sm pb-3"
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
