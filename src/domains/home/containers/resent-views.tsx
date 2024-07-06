import {
  Carousel,
  CarouselContent,
  CarouselItem,
  ProductItem,
} from '@/components';
import { SectionTitle } from '../components/section-title';

export function ResentViews() {
  return (
    <section id="recent-view" data-testid="resent-view">
      <SectionTitle title="بازدید‌های اخیر" />
      <Carousel opts={{ direction: 'rtl' }} className="mt-9 w-full max-w-sm">
        <CarouselContent className="gap-2.5">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="basis-[37%] pl-2">
              <ProductItem
                hasDiscountBadge={index === 1}
                discountLabel="43%"
                title="گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت"
                priceRange="15,600,000"
                imageUrl="/images/phone.png"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
