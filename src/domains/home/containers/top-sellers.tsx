import { useTranslations } from 'next-intl';
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
  const t = useTranslations('Globals');
  return (
    <section id="top-seller" data-testid="top-seller">
      <SectionTitle title="فروشندگان برتر" />
      <div className="mt-2 pb-6">
        <Carousel opts={{ direction: 'rtl' }}>
          <CarouselContent className="m-0">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className={cn('my-1 ml-1 basis-[89%] pl-3', {
                  'mr-4': index === 0,
                })}
              >
                <Card className="relative mb-2 rounded-2xl border-[0.5px] border-border-primary shadow-elevation4">
                  <div className="rounded-3xl">
                    <CardContent className="flex items-center gap-2 pt-4">
                      <div className="basis-1/2">
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
                      <div className="flex basis-1/2 gap-2">
                        <div className="flex flex-col gap-1">
                          {[1, 23].map((_, index) => (
                            <div key={index}>
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
                            <div key={index}>
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
                      </div>
                    </CardContent>
                    <CardFooter className="flex items-center justify-between px-4 pb-4">
                      <div className="space-y-1">
                        <h4 className="font-medium text-md">عنوان فروشکاه</h4>
                        <p className="text-base font-normal text-content-tertiary">
                          تعداد محصولات برتر
                        </p>
                      </div>
                      <Button
                        variant="tertiary"
                        className="rounded-full px-3 py-1 text-labelSmall"
                      >
                        {t('view')}
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
