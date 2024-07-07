import Image from 'next/image';
import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/shared/ui/';
import { cn } from '@/shared/utils';

type FavoritesPropsType = {
  title: string;
  mode?: 'dark' | 'light';
};

export function Favorites(props: FavoritesPropsType) {
  const { mode = 'dark', title } = props;
  return (
    <section className="my-4">
      <div className="mb-5 mt-8">
        <p className="h-[60px] w-[309px] text-headlineSmall text-content-primary">
          {title}
          <span className="text-content-tertiary"> بر اساس آخرین بازدیدها</span>
        </p>
      </div>
      <Carousel opts={{ direction: 'rtl' }} className="mt-9">
        <CarouselContent className="gap-2.5">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="basis-[89%] pl-2">
              <Card>
                <div
                  className={cn('h-[450px] w-[309px] rounded-3xl bg-black', {
                    'bg-white': mode === 'light',
                  })}
                >
                  <CardContent className="flex flex-col gap-2.5 p-6">
                    <div className="flex flex-col items-center justify-between">
                      <ul className="flex flex-col items-start gap-y-3">
                        <li>
                          <p
                            className={cn('text-bodySmall text-white', {
                              'text-content-tertiary': mode === 'light',
                            })}
                          >
                            در ۱۷ فروشگاه
                          </p>
                        </li>
                        <li>
                          <p
                            className={cn('text-headlineSmall text-white', {
                              'text-content-secondary': mode === 'light',
                            })}
                          >
                            آیپد پرو مکس
                          </p>
                        </li>
                        <li>
                          <p
                            className={cn(
                              'w-[225px] text-bodyMedium text-white',
                              {
                                'text-content-primary': mode === 'light',
                              },
                            )}
                          >
                            قیمت تضمین شده آی تی از ۹۰ هزار تا ۸ میلیون تومان
                          </p>
                        </li>
                      </ul>
                      <div className="relative mt-2 h-[250px] w-full">
                        <Image
                          src={`/images/${mode === 'dark' ? 'ipad' : 'watch'}.png`}
                          alt="phone"
                          layout="fill"
                          className="aspect-video object-contain"
                          // objectFit="cover"
                        />
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
