import { Icon, ProductItem } from '@/shared/components';
import {
  Card,
  CardContent,
  CardFooter,
  Carousel,
  CarouselContent,
  CarouselItem,
  Separator,
} from '@/shared/ui';
import { SectionTitle } from '../components/section-title';

export function Comparetaion() {
  return (
    <section id="compration" data-testid="compration" className="my-2">
      <SectionTitle title="مقایسه‌های من" />
      <Carousel
        opts={{ direction: 'rtl', dragFree: true }}
        className="w-full max-w-sm"
      >
        <CarouselContent className="">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="bg-compration basis-[89%]">
              <Card className="compration-shadow relative mb-3 rounded-[16px]">
                <CardContent className="flex gap-2.5 px-4 py-2">
                  <ProductItem
                    hasDiscountBadge={index === 0}
                    discountLabel="43%"
                    title="گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت"
                    imageUrl="/images/phone.png"
                  />
                  <ProductItem
                    title="گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت"
                    imageUrl="/images/phone.png"
                  />
                </CardContent>
                <Separator className="border-1 mx-auto my-4 mb-3 w-[86%] border-t border-border-primary" />
                <CardFooter className="py-4">
                  <div className="flex w-full items-center justify-between">
                    <p className="text-base font-medium text-content-primary">
                      مشاهده مقایسه
                    </p>
                    <div className="flex items-center gap-[7.5px]">
                      <span className="text-base font-semibold text-content-tertiary">
                        ۲
                      </span>
                      <Icon
                        iconClassName="text-content-tertiary"
                        name="chevron-left"
                        size="medium"
                      />
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
