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
    <section className="my-4">
      <SectionTitle title="مقایسه‌های من" />
      <Carousel opts={{ direction: 'rtl' }} className="mt-9 w-full max-w-sm">
        <CarouselContent className="gap-2.5">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="basis-[89%] pl-2">
              <Card className="box-shadow-compare relative rounded-md">
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
                <Separator className="border-1 border-t border-border-primary px-4 pb-3" />
                <CardFooter>
                  <div className="flex w-full items-center justify-between">
                    <p className="text-base font-medium text-content-primary">
                      مشاهده مقایسه
                    </p>
                    <div className="flex items-center gap-[7.5px]">
                      <span className="mt-1 text-base font-semibold text-content-tertiary">
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
