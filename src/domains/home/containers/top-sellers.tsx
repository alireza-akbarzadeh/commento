import { LazyImage } from '@/shared/components';
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/shared/ui';
import { cn } from '@/shared/utils';
import { SectionTitle } from '../components/section-title';

export function TopSellers() {
  return (
    <section id="top-seller" data-testid="top-seller" className="bg-layout">
      <SectionTitle title="فروشندگان برتر" />
      <div className="my-3 pb-6">
        <Carousel opts={{ direction: 'rtl' }}>
          <CarouselContent className="m-0">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className={cn('my-1 ml-1 basis-[89%] pl-3', {
                  'mr-4': index === 0,
                })}
              >
                <Card className="relative mb-2 rounded-2xl border border-border-primary">
                  <div className="rounded-3xl">
                    <CardContent className="flex gap-1 pt-4">
                      <div className="size-[137px]">
                        <LazyImage
                          src="/images/store.png"
                          style={{
                            objectFit: 'cover',
                          }}
                          isLocal
                          quality={100}
                          alt="store"
                          fill
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        {[1, 23].map((_, index) => (
                          <div className="size-[66px]" key={index}>
                            <LazyImage
                              src="/images/store.png"
                              style={{
                                objectFit: 'cover',
                              }}
                              isLocal
                              quality={100}
                              alt="store"
                              fill
                            />
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-col gap-1">
                        {[1, 23].map((_, index) => (
                          <div className="size-[66px]" key={index}>
                            <LazyImage
                              src="/images/store.png"
                              style={{
                                objectFit: 'cover',
                              }}
                              isLocal
                              quality={100}
                              alt="store"
                              fill
                            />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex items-center justify-between px-4 pb-4">
                      <div className="space-y-1">
                        <h4 className="text-md font-medium">عنوان فروشکاه</h4>
                        <p className="text-base font-normal text-content-tertiary">
                          تعداد محصولات برتر
                        </p>
                      </div>
                      <Button
                        variant="tertiary"
                        className="rounded-full px-3 py-1 text-labelSmall"
                      >
                        مشاهده
                      </Button>
                    </CardFooter>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
